'use strict';

const createTableAsset = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    purchasedAt: DataTypes.STRING,
    soldAt: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true,
    timestamps: false
  });
  
  Asset.associate = function(models) {
    Asset.belongsTo(models.Portfolio);
    Asset.hasOne(models.Stock);
  };

  return Asset;
};

module.exports = createTableAsset;
