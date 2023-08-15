const router = require('express').Router();
const Task = require('../../models/task');

router.post('/', async (req,res) => {
    try {
        const taskData = await Task.create({
            task_name: req.body.task_name,
            description: req.body.description
        });
        res.status(200).json(taskdata)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;