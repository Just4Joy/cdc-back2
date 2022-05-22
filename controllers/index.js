const userController = require('./users')

const setupRoutes = (app) => {
    app.use('/api/v1/users', userController)
}

module.exports = setupRoutes
