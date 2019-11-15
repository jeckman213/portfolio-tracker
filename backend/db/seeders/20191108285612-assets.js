'use strict';

const seeds = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('asset', 
    [
      {
        symbol : 'GE',
        portfolio_id : 1,
        shares : 100,
        purchased_at : '2016-10-05'        
      },
      {
        symbol : 'GE',
        portfolio_id : 2,
        shares : 12,
        purchased_at : '2015-10-05'        
      },
      {
        symbol : 'GE',
        portfolio_id : 3,
        shares : 13,
        purchased_at : '2014-10-05'        
      },
      {
        symbol : 'GE',
        portfolio_id : 4,
        shares : 21,
        purchased_at : '2013-10-05'        
      },
      {
        symbol : 'GE',
        portfolio_id : 5,
        shares : 23,
        purchased_at : '2012-10-05'        
      },
      {
        symbol : 'GE',
        portfolio_id : 6,
        shares : 43,
        purchased_at : '2011-10-05'        
      },
      {
        symbol : 'GE',
        portfolio_id : 7,
        shares : 60,
        purchased_at : '2010-10-05'        
      },
      {
        symbol : 'AAPL',
        portfolio_id : 1,
        shares : 8,
        purchased_at : '2017-09-05'        
      },
      {
        symbol : 'GOOG',
        portfolio_id : 1,
        shares : 11,
        purchased_at : '2017-08-05'        
      },
      {
        symbol : 'AMZN',
        portfolio_id : 1,
        shares : 14,
        purchased_at : '2017-07-05'        
      },
      {
        symbol : 'MSFT',
        portfolio_id : 1,
        shares : 22,
        purchased_at : '2017-06-05'        
      }
    ], {});
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('asset', null, {});
  }
};

module.exports = seeds;
