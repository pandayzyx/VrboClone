const router = require("express").Router();
const { body, validationResult } = require("express-validator");

const trandAuth = require("../controller/trandAuthController");

router.post(
  "/checkStatus",
  [body("email").exists().bail().isEmail().bail().trim()],
  trandAuth.checkMailStatus
);

router.post(
  "/verifyAuth",
  [body("email").exists().bail().isEmail().bail().trim()],
  trandAuth.verifyAuth
);

router.post(
  "/register",
  [
    body("lastName").exists().bail().trim(),
    body("firstName").exists().bail().trim(),
    body("email").exists().bail().isEmail().bail().trim(),
    body("password").exists().bail().trim(),
  ],
  trandAuth.register
);

router.post(
  "/login",
  [
    body("email").exists().bail().isEmail().trim(),
    body("password").exists().bail().trim(),
  ],
  trandAuth.login
);

router.post(
  "/logout",
  [
    body("email").exists().bail().isEmail().trim(),
  ],
  trandAuth.logout
);

module.exports = router;
