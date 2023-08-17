const router = require('express').Router();
const dashboard = require('./dashboardRoutes')
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboard);

module.exports = router;