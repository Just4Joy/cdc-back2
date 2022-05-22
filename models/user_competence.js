const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const UserCompetence = sequelize.define('User_Competence', {
    order: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isIn: [[1, 2]],
        },
    },
    group: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            isIn: [[1, 2, 3]],
        },
    },
})

module.exports = UserCompetence
