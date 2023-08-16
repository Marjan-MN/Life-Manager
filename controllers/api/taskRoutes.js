const router = require('express').Router();
const Tasks = require('../../models/Tasks');

router.post('/', async (req,res) => {
    try {
        const taskData = await Tasks.create({
            title: req.body.title,
            description: req.body.description
        });
        res.status(200).json(taskData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;