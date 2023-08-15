const router = require('express').Router();
const Dish = require('../models/interests')

// route for all the tasks
router.get('/', async (req, res) => {
    const taskData = await Task.findAll().catch((err) => {
        res.json(err);
    });
    const tasks = taskData.map((task) => task.get({ plain: true}));
    res.render('all', { tasks });
});

// route for one task
router.get('/task/:id', async (req, res) => {
    try {
        const taskData = await Task.findbyPk(req.params.id);
        if(!taskData) {
            res.status(404).json({message: 'No task with this ID'});
            return;
        }
        const task = taskData.gte({ plain: true });
        res.render('task', task);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;