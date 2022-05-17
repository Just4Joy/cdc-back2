module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    title: {
      type: Sequelize.STRING,
    },

  });
  return User;
};
