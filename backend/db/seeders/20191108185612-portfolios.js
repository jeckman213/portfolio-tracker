'use strict';

const seeds = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('portfolio', 
    [
      {
        name : 'First Portfolio',
        user_id : 1,
        public : true,
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        name : 'Second Portfolio',
        user_id : 1,
        public : false,
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        name : 'Third Portfolio',
        user_id : 1,
        public : false,
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        name : 'First Portfolio',
        user_id : 2,
        public : true,
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        name : 'Second Portfolio',
        user_id : 2,
        public : false,
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        name : 'First Portfolio',
        user_id : 3,
        public : true,
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        name : 'Great Portfolio',
        user_id : 4,
        public : true,
        created_at : new Date(),
        updated_at : new Date()
      },
    ], {});
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('portfolio', null, {});
  }
};

module.exports = seeds;
