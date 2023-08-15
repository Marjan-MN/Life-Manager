const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Checks for the data to be encrypted, encrypts that data.
class Test extends Model {}


Test.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // hashing the password before it is created in database
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'test',
  }
);

module.exports = Test;
