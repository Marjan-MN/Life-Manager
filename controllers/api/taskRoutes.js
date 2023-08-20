const router = require('express').Router();
const Tasks = require('../../models/Tasks');
const withAuth = require('../../utils/auth');
// create a task
router.post('/',  withAuth, async (req,res) => {
    try {
        const taskData = await Tasks.create({
            title: req.body.title,
            description: req.body.description,
            date_created: req.body.date_created
        });
        res.status(200).json(taskData)
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a task
router.put('/:id', withAuth, async (req, res) => {
  try {
    const editeTask = await Tasks.update(
      {
        title: req.body.title,
        description: req.body.description,
        date_created: req.body.date_created
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(editeTask);
  } catch (err) {
    res.status(500).json(err);
  }
}) ;

// delete a task
router.delete('/:id', withAuth, async (req,res) => {
  try {
    const task = await Tasks.destroy(
      {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
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