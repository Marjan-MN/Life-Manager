const sequelize = require('../config/connection');
const { User , Tasks } = require('../models');


const userData = require('./userData.json');
const taskData = require('./TaskData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for(const task of taskData){
    await Tasks.create({...task})
  }
  process.exit(0);
};

seedDatabase();