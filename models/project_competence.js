const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const ProjectCompetence = sequelize.define('Project_Competence', {
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
})

module.exports = ProjectCompetence
