const { UserCompetence, ProjectCompetence, UserProject } = require('./index')

module.exports = (models) => {
    models.User.belongsToMany(models.Competence, {
        through: UserCompetence,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })

    models.User.belongsToMany(models.Project, {
        through: UserProject,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })

    models.User.hasOne(models.Role, { foreignKey: { unique: true } })
    models.Role.belongsTo(models.User)

    /*     models.User.hasOne(models.School, { foreignKey: { unique: true } })
    models.School.belongsTo(models.User) */

    models.User.hasMany(models.Link, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    models.Link.belongsTo(models.User)

    models.Competence.belongsToMany(models.User, {
        through: UserCompetence,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    models.Competence.belongsToMany(models.Project, {
        through: ProjectCompetence,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })

    models.Project.belongsToMany(models.User, {
        through: UserProject,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })

    models.Project.belongsToMany(models.Competence, {
        through: ProjectCompetence,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
}
