const router = require('express').Router();
const { User, Tasks} = require('../models');
const withAuth = require('../utils/auth');

// find all the tasks specific to the user if logged in
router.get("/", withAuth, (req, res) => {
  Tasks.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "description", "date_created"],
    include: [
   
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
  //// then promising database post data and getting all the readable information from user not including extra unwanted data from sequilize
    .then((dbTasksData) => {
      const tasks = dbTasksData.map((task) =>
        task.get({
          plain: true,
        })
      );
       // rending this information to the dashboard and requiring user to be logged in session to see data.
      res.render("dashboard", {
        tasks,
        loggedIn: true
      });
    })
    // if an error, gives 500 status. 
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


  // allowing user to add a new post if logged in
router.get("/new", (req, res) => {
    res.render("add-task", {
      loggedIn: req.session.loggedIn,
    });
  });
  
  module.exports = router;
  