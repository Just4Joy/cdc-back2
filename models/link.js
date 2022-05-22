const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const Link = sequelize.define('Link', {
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            isIn: [['foo', 'bar']],
        },
    },
    url: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            isUrl: true,
        },
    },
})

module.exports = Link
