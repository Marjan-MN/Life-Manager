const router = require('express').Router();
const Tasks = require('../../models/Tasks');

// create a task
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

// route to get a specific task by id
router.get("/:id", (req, res) => {
    Tasks.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "description", "date_created"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    })
      // then respond dbTaskData to json. if not send error message
      .then((dbTaskData) => {
        if (!dbTaskData) {
          res.status(404).json({
            message: "No task found with this id",
          });
          return;
        }
        res.json(dbPostData);
      })
      //catch error in console log
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });






module.exports = router;