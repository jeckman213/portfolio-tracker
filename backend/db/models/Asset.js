'use strict';

const createTableAsset = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    purchasedAt : DataTypes.STRING,
    soldAt : DataTypes.STRING,
  }, {
    freezeTableName : true,
    underscored : true,
    timestamps : false
  });
  
  Asset.associate = function(models) {
    Asset.belongsTo(models.Portfolio, { foreignKey : 'portfolioId' });
    Asset.belongsTo(models.Stock, { foreignKey : 'stockId' });
  };

  return Asset;
};

module.exports = createTableAsset;
