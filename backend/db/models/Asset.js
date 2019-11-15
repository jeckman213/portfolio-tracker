'use strict';

const createTableAsset = (sequelize, DataTypes) => {
  const Asset = sequelize.define('asset', {
    symbol : DataTypes.INTEGER,
    shares : DataTypes.INTEGER,
    purchasedAt : DataTypes.STRING,
  }, {
    freezeTableName : true,
    underscored : true,
    timestamps : false
  });
  
  Asset.associate = function(models) {
    Asset.belongsTo(models.Portfolio, { foreignKey : 'portfolioId' });
  };

  return Asset;
};

module.exports = createTableAsset;
