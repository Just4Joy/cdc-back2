const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const Competence = sequelize.define('Competence', {
    domain: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
})

module.exports = Competence
