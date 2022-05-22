const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const School = sequelize.define('School', {
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
})

module.exports = School
