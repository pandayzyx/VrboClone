const router = require("express").Router();
const sendMail = require("../controller/sendMailController");

router.get("/", sendMail.sendBookingSuccessMail);

module.exports = router;
