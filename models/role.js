const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const Role = sequelize.define('Role', {
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
})

module.exports = Role
