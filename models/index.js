const User =  require('./user');
const Tasks = require('./Tasks');
// const Interest = require('./Interest');

User.hasMany(Tasks,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Tasks.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Tasks };
