
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/mytasks', withAuth, async (req, res) => {
    try {
      // Mock data:
      var context = { tasks : [
        {
          id: 1,
          title: "laundry",
          description: "dont forget to save enough laundry coins"
        },
        {
          id: 2,
          title: "order meals",
          description: "Factor meal subscription"
        },
        {
          id: 3,
          title: "get new gym membership",
          description: "dont forget to save enough laundry coins"
        },
      ] }

      // TODO: Replace mock data with plain data from Sequelize
      // Hint: Google for: Sequelize find where


      res.render('mytasks', context);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['username', 'ASC']],
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;

