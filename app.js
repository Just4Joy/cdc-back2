/* eslint-disable no-unused-vars */
const express = require('express')
const cors = require('cors')
const sequelize = require('./_helpers/db')

const {
    Competence,
    Link,
    ProjectCompetence,
    Project,
    Role,
    School,
    UserCompetence,
    UserProject,
    User,
} = require('./models')

require('./models/associations')(sequelize.models)

const setupRoutes = require('./controllers/index')

const corsOption = {
    origin: 'http://localhost:4000/',
}

const app = express()

app.use(cors(corsOption))
app.use(express.json())

setupRoutes(app)

app.get('/', (_req, res) => {
    res.send('Hello World')
})

sequelize
    .authenticate()
    .then(() => {
        sequelize.sync()
        app.listen(4000, () => {
            console.log('App Running on port 4000')
        })
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error)
    })
