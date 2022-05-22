const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const UserProject = sequelize.define('User_Project', {
    owner: {
        type: Sequelize.TINYINT,
        allowNull: false,
    },
})

module.exports = UserProject
