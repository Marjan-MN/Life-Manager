const sequelize = require('../config/connection');
const { User , Tasks } = require('../models');


const userData = require('./userData.json');
const taskData = require('./TaskData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  for (const task of taskData) {
    await Tasks.create({
      ...task,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();