'use strict';

const createTableStock = (sequelize, DataTypes) => {
  const Stock = sequelize.define('stock', {
    symbol : DataTypes.STRING,
    name : DataTypes.STRING,
    exchange : DataTypes.STRING
  }, {
    freezeTableName : true,
    underscored : true,
    timestamps : false
  });

  return Stock;
};

module.exports = createTableStock;
