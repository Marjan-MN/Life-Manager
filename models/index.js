const User =  require('./user');
const Tasks = require('./Tasks');
const Tasklist = require('./Tasklist');
// const Interest = require('./Interest');

Tasks.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Tasks,{
  foreignKey: 'user_id'
});

// Interest.belongsToMany(User);

// User.belongsToMany(Interest);

Tasklist.belongsTo(User, {
   foreignKey: 'user_id'
});
   

Tasks.belongsTo(Tasklist, {
  foreignKey: 'task_id'
});




module.exports = { User, Tasks, Tasklist};
