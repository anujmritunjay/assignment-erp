const { DataTypes } = require('sequelize')
const sequelize = require('./index')


const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User