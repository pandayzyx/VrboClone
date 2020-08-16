const router = require("express").Router();

router.use("/properties", require("./propertyRoutes"));
router.use("/razorPay", require("./paymentRoutes"));
router.use("/sendMail", require("./sendMailRoutes"));
router.use("/reviews", require("./reviewRoutes"));
// router.use('/userProfiles', require('./userProfile'));

module.exports = router;
