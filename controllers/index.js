const router = require('express').Router();
const dashboard = require('./dashboardRoutes')
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
// includes:
// GET localhost:3001/tasks/

router.use('/api', apiRoutes);
// localhost:3001/api/user/* =>
// POST localhost:3001/api/user/
// POST localhost:3001/api/user/login
// POST localhost:3001/api/user/logout

// localhost:3001/api/tasks/* =>
// GET localhost:3001/api/tasks/:id
// POST localhost:3001/api/tasks/


router.use('/dashboard', dashboard);

module.exports = router;