'use strict';

const seeds = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        username : 'dev',
        email : 'dev@gmail.com',
        /* password : p */
        hash : '$2b$14$6ltmydSJw4SFGR2hBvlXyeStdhrKaFbLW5isDVzkcCqiRW73ZBUxG',
        firstname : 'dev',
        lastname : 'p',
        currency : 'USD',
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        username : 'coolguy1',
        email : 'kool@gmail.com',
        /* password : password1 */
        hash : '$2b$14$SDulZ7SNR9BFiv0cmHNjp.k6V3TSvLUwTFodwBt6tzMHjmfyzJPMe',
        firstname : 'Joe',
        lastname : 'Doobs',
        currency : 'USD',
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        username : 'lameguy2',
        email : 'swot@gmail.com',
        /* password : password2 */
        hash : '$2b$14$pFYhtJV3ohx2Wft/uw5JmObdorrbPM2WSjEL9rycS6IKLZaXDlq26',
        firstname : 'Look',
        lastname : 'Booms',
        currency : 'USD',
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        username : 'doodguy3',
        email : 'donny@gmail.com',
        /* password : password3 */
        hash : '$2b$14$BF2Zq35jCZOAVo7Mi9fuUOk/UzqzS7Fr44lB/SiVggQdhmN7bnxmC',
        firstname : 'Jim',
        lastname : 'Lobs',
        currency : 'USD',
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        username : 'freddo4',
        email : 'longo@gmail.com',
        /* password : password4 */
        hash : '$2b$14$nJpKl3OjfQ3e1Qhd/CJjkejj9.rsw0s/LqjNyH9RKMaeTu5YaTQvO',
        currency : 'USD',
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
