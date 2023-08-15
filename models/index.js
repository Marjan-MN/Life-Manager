const User =  require('./user');
const Task = require('./task');
const TaskList = require('./taskList')

Task.belongsTo(User, {
  foreignKey: 'user_id'
});

Tasklist.belongsTo(User, {
   foreignKey: 'user_id'
});
   

Task.belongsTo(Tasklist, {
  foreignKey: 'task_id'
});



module.exports = { User, Interests};
