const router = require('express').Router();
const { User, Tasklist, Tasks, } = require('../../models');

// this will post the username and save it, and keep you logged in.
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
// saying it went through to "/"
      res.status(200).json(userData);
    });
  // if not error
  } catch (err) {
    res.status(400).json(err);
  }
});

// post route that finds one user's username for login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username} });
// if the userdata is not valid
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username, please try again' });
      return;
    }
// verifying the password
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }
//saving session userdata and keeping logged in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // confirmation message that your logged in.
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
// logging the user out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
