const Sequelize = require('sequelize')
const sequelize = require('../_helpers/db')

const User = sequelize.define('User', {
    firstname: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    current_position: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    imt_location: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },

    imt_school: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Schools',
            key: 'id',
        },
    },
    idhal: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    team: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    bio: {
        type: Sequelize.TEXT('medium'),
        allowNull: true,
    },
    visible: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    visible_admin: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
    type_admin: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
})

module.exports = User
