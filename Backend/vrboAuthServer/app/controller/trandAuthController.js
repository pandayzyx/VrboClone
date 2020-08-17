const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

let jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const redis = require("../../redisInstance");

exports.checkMailStatus = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      errormsg: "Please send required Details",
      "Required fields": ["email"],
      "sample Format": {
        email: "TestEmail@mail.com",
      },
    });
  }

  const email = req.body.email;

  User.getUserIdByMail(email)
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json({
          message: "User Already Exists with given mail",
          isExistingUser: true,
        });
      } else {
        res.status(200).json({
          message: "User hasn't Registered yet",
          isExistingUser: false,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ "Internal Server Error": err });
    });
};

exports.register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      errormsg: "Please send required Details",
      "Required fields": ["email", "password", "lastName", "firstName"],
      "sample Format": {
        firstName: "test",
        lastName: "lasttest",
        email: "TestEmail@mail.com",
        password: "pass",
      },
    });
  }

  const firstName = req.body.firstName;
  const email = req.body.email;
  const lastName = req.body.lastName;
  const password = req.body.password;

  let resData = {};

  User.getUserIdByMail(email)
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json({
          errorMsg: "User Already Exists with given mail",
          isRegisterSuccess: false,
        });
        res.send();
        throw new Error("User Exists handled");
      }
    })
    .then(() => bcrypt.hash(password, 10))
    .then((hashedPassword) =>
      User.createUser(firstName + " " + lastName, email, hashedPassword)
    )
    .then((submitedUser) => {
      resData = {
        user: { email: submitedUser.email, name: submitedUser.name },
        isRegisterSuccess: true,
      };
      return submitedUser;
    })
    .then((submitedUser) => {
      const payload = {
        email: email,
      };
      const expirationSeconds = 60 * 60 * 3;
      const auth_token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: expirationSeconds,
      });
      res.cookie(
        "emailAuth_tokenPair",
        { email: email, auth_token: auth_token },
        {
          maxAge: expirationSeconds,
          httpOnly: true,
          secure: true,
          domain: 'devganesh.tech'
        }
      );
      redis.client.setex(email, expirationSeconds, auth_token, (err, reply) => {
        if (err) {
          console.log(err);
          res.status(200).json({
            errorMsg: "Session not being maintained, Please Login again",
            isRegisterSuccess: true,
          });
        } else {
          res.send(resData);
        }
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.message != "User Exists handled") {
        res.status(500).json({ "Internal Server Error": err });
        res.send();
      }
    });
};

exports.login = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({
      errors: errors.array(),
      errormsg: "Please send required Details",
      "Required fields": ["email", "password"],
      "sample Format": {
        email: "TestEmail@mail.com",
        password: "pass",
      },
    });
  }

  const email = req.body.email;
  const password = req.body.password;

  let resData = {};

  User.getUserByMail(email)
    .then((result) => {
      if (result.length === 0) {
        res.status(200).json({
          errorMsg: "User doesn't Exists with given mail",
          isLoginSuccess: false,
        });
        res.send();
        throw new Error("User doesn't Exists handled");
      }
      return result;
    })
    .then(async (submitedUser) => {
      let hashCompareResult = await bcrypt.compare(
        password,
        submitedUser[0].password
      );
      if (hashCompareResult) {
        resData = {
          user: { email: submitedUser[0].email, name: submitedUser[0].name },
          isLoginSuccess: true,
        };
        return submitedUser;
      } else {
        res.status(200).json({
          errorMsg: "Incorrect Password",
          isLoginSuccess: false,
        });
        res.send();
        throw new Error("Incorrect Password handled");
      }
    })
    .then((submitedUser) => {
      const payload = {
        email: submitedUser[0].email,
      };
      const expirationSeconds = 60 * 60 * 3;
      const auth_token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: expirationSeconds,
      });
      res.cookie(
        "emailAuth_tokenPair",
        { email: email, auth_token: auth_token },
        {
          maxAge: expirationSeconds,
          httpOnly: true,
          secure: true,
          domain: 'devganesh.tech'
        }
      );
      redis.client.setex(email, expirationSeconds, auth_token, (err, reply) => {
        if (err) {
          console.log(err);
          res.status(200).json({
            errorMsg: "Session not being maintained, Please Login again",
            isLoginSuccess: true,
          });
        } else {
          res.send(resData);
        }
      });
    })
    .catch((err) => {
      console.log(err);
      if (
        err.message != "User doesn't Exists handled" &&
        err.message != "Incorrect Password handled"
      ) {
        res.status(500).json({ "Internal Server Error": err });
        res.send();
      }
    });
};

exports.logout = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        errors: errors.array(),
        errormsg: "Please send required Details",
        "Required fields": ["email"],
        "sample Format": {
          email: "TestEmail@mail.com",
        },
      });
    }

    const email = req.body.email;

    const temp = await redis.delWithPromise(email);
    res.send({
      user: {
        email: email,
      },
      isLogoutSuccess: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ "Internal Server Error": err });
    res.send();
  }
};

exports.verifyAuth = (req, res) => {
  const emailAuth_tokenPair = req.cookies.emailAuth_tokenPair;

  if (emailAuth_tokenPair === null || emailAuth_tokenPair === undefined) {
    res.send({
      msg: "Session Expired Login Again",
      isAuthenticated: false,
    });
  } else {
    const { email, auth_token } = emailAuth_tokenPair;

    redis.client.get(email, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ "Internal Server Error": err });
        res.send();
      } else {
        if (result === auth_token) {
          res.send({
            user: {
              email: email,
            },
            isAuthenticated: true,
          });
        } else {
          res.send({
            user: {
              email: email,
            },
            isAuthenticated: false,
          });
        }
      }
    });
  }
};

