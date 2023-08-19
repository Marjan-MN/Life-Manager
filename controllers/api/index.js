const router = require('express').Router();

const taskRoutes = require('./taskRoutes');
const userRouter = require('./userRouter');
// const savedTaskRoutes = require('./savedTaskRoutes')


router.use('/user', userRouter);
router.use('/tasks', taskRoutes);
// router.use('/savedTasks', savedTaskRoutes);

module.exports = router;