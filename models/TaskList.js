const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Tasklist extends Model {}

// the saved list

Tasklist.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tasks',
            key: 'id'
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'

        }
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tasklist',
});

module.exports = Tasklist;