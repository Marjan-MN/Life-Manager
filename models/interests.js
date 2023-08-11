const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interests extends Model {}

Interests.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    travel: {
        type: DataTypes.BOOLEAN,
       
    },
    recipe: {
        type: DataTypes.BOOLEAN,
       
    },
    work: {
        type: DataTypes.BOOLEAN,
       
    },
    budget: {
        type: DataTypes.BOOLEAN,
       
    },
    choirs: {
    type: DataTypes.BOOLEAN,
   
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
    modelName: 'project',
  }
);

module.exports = Project;