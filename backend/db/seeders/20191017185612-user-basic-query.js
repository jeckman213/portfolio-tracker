'use strict';

const seeds = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        username : 'coolguy1',
        email : 'kool@gmail.com',
        hash : '$2b$14$GrkiRIcsTnqm5sHipL8Z/uJAfL5mg70LklkMLJE3zUScSsFNmfCTi',
        firstname : 'Joe',
        lastname : 'Doobs',
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        username : 'lameguy2',
        email : 'swot@gmail.com',
        hash : '$2b$14$82FeCb7JA.eST8mSHoiO9e6ATOEOD84zChaJiyDa49iLP6qNykcou',
        firstname : 'Look',
        lastname : 'Booms',
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        username : 'doodguy3',
        email : 'donny@gmail.com',
        hash : '$2b$14$6u1oxj0BFAezSUnp9KSsC.z3qrp3kCBEjgK0VaTbhX2ETuGYZW.DW',
        firstname : 'Jim',
        lastname : 'Lobs',
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        username : 'freddo4',
        email : 'longo@gmail.com',
        hash : '$2b$14$pEs1AADXSqonLbnk0/LLsue9OuKshdMUGXyQU8yihjKlZ3W4E7zYq',
        created_at : new Date(),
        updated_at : new Date()
      },
    ], {});
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};

module.exports = seeds;
