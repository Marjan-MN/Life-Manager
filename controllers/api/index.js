const router = require('express').Router();

const taskRoutes = require('./task-routes');
const userRouter = require('./userRouter')

router.use('/user', userRouter);
router.use('/tasks', taskRoutes);

module.exports = router;