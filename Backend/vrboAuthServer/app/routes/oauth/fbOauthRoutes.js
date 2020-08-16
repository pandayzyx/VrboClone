const router = require("express").Router();
const { body } = require("express-validator");

const fbOauth = require("../../controller/fbOauthController");

router.post(
  "/",
  [
    body("email").exists().bail().isEmail().bail().trim(),
    body("name").exists().bail().trim(),
    body("accessToken").exists().bail().trim(),
    body("fbId").exists().bail().trim(),
    body("imageUrl").exists().bail().trim(),
    body("expires_at").exists().bail().trim(),
    body("expires_in").exists().bail().trim(),
    body("first_issued_at").exists().bail().trim(),
  ],
  fbOauth.fbOauth
);


module.exports = router;
