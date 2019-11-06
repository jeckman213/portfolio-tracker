'use strict';

const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};

module.exports = createUser;
