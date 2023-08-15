const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
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
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
    modelName: 'Task',
  }
);

module.exports = Interests;