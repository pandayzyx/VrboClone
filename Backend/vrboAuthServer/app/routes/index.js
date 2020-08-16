const router = require('express').Router();

router.use('/oauth', require('./oauth'));
router.use('/', require('./trandAuthRoutes'));

module.exports = router;