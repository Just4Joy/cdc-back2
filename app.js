const express = require('express');
const cors = require('cors');
const db = require('./src/models');

const setupRoutes = require('./src/controllers/index');
/* const db = require('./src/_helpers/db-config'); */

const corsOption = {
  origin: 'http://localhost:4000/',
};

const app = express();

app.use(cors(corsOption));
app.use(express.json());

setupRoutes(app);

app.get('/', (_req, res) => {
  res.send('Hello World');
});

db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize.sync();
    app.listen(4000, () => {
      console.log('App Running on port 4000');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
