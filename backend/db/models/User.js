'use strict';

const createTableUser = (sequelize, DataTypes) => {
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
    User.hasMany(models.Portfolio);
  };

  return User;
};

module.exports = createTableUser;
