const User =  require('./user');
const Interests = require('./interests');

Interests.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Interests};