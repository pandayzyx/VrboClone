const router = require('express').Router();

router.use('/google', require('./googleOauthRoutes'));
router.use('/facebook', require('./fbOauthRoutes'));

module.exports = router;