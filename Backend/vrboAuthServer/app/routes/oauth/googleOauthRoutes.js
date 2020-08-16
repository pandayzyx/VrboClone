const router = require("express").Router();
const { body } = require("express-validator");

const googleOauth = require("../../controller/googleOauthController");

router.post(
  "/",
  [
    body("email").exists().bail().isEmail().bail().trim(),
    body("name").exists().bail().trim(),
    body("accessToken").exists().bail().trim(),
    body("googleId").exists().bail().trim(),
    body("imageUrl").exists().bail().trim(),
    body("expires_at").exists().bail().trim(),
    body("expires_in").exists().bail().trim(),
    body("first_issued_at").exists().bail().trim(),
  ],
  googleOauth.googleOauth
);

module.exports = router;
