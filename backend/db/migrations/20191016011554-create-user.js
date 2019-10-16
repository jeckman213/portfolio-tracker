'use strict';

/************************************************
 * Creates Basic Users Table with unique index  *
 * on username and unique constraint on email   *
 ************************************************/
const migration = {
  async up(queryInterface, Sequelize){
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('User', {
        id : {
          allowNull : false,
          autoIncrement : true,
          primaryKey : true,
          type : Sequelize.INTEGER
        },
        username : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        email : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        salt : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        hash : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        firstname : {
          type : Sequelize.TEXT
        },
        lastname : {
          type : Sequelize.TEXT
        },
        created_at : {
          allowNull : false,
          type : Sequelize.DATE
        },
        updated_at : {
          allowNull : false,
          type : Sequelize.DATE
        }
      }, { transaction });
      await queryInterface.addIndex('User', {
        fields : ['username'],
        unique : true,
        transaction
      });
      await queryInterface.addConstraint('User', ['email'], {
        type : 'unique',
        transaction
      });
      await transaction.commit();
    }
    catch(err){
      await transaction.rollback();
      throw err;
    }
  },
  down(queryInterface, Sequelize){
    return queryInterface.dropTable('User');
  }
};

module.exports = migration;
