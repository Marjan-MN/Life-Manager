const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tasks extends Model {}

Tasks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // all these interests not part of mvp
    travel: {
        type: DataTypes.BOOLEAN,
        default: false
       
    },
    recipe: {
        type: DataTypes.BOOLEAN,
        default: false
       
    },
    work: {
        type: DataTypes.BOOLEAN,
        default: false
       
    },
    budget: {
        type: DataTypes.BOOLEAN,
        default: false
       
    },
    choirs: {
    type: DataTypes.BOOLEAN,
    default: false
   
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tasks',
  }
);

module.exports = Tasks;