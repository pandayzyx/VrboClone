const router = require("express").Router();
const payment = require("../controller/paymentController")

router.post("/pay", payment.PayUsingRazorpay);
router.post("/verify", payment.verifyRazerPayment);
router.post("/sendSMS", payment.sendSMS);

module.exports = router;
