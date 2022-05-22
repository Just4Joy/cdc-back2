const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const Project = sequelize.define('Project', {
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    description: {
        type: Sequelize.TEXT('medium'),
        allowNull: false,
    },
})

module.exports = Project
