'use strict';

const createTablePortfolio = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    name : DataTypes.STRING,
    public : DataTypes.BOOLEAN
  }, {
    freezeTableName : true,
    underscored : true
  });
  
  Portfolio.associate = function(models) {
    Portfolio.belongsTo(models.User, { foreignKey : 'userId' });
    Portfolio.hasMany(models.Asset, { foreignKey : 'portfolioId' });
  };

  return Portfolio;
};

module.exports = createTablePortfolio;
