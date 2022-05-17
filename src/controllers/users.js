const express = require('express');

const userController = express.Router();

userController.get('/', (req, res) => {
  res.status(200).send('Hello Word');
});

module.exports = userController;
