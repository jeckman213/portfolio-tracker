'use strict';

/************************************************
 * Creates Portfolio, Asset, and Stock Tables   *
 * with appropriate associations and indices    *
 ************************************************/
const migration = {
  async up(queryInterface, Sequelize){
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Portfolio', {
        id : {
          allowNull : false,
          autoIncrement : true,
          primaryKey : true,
          type : Sequelize.INTEGER
        },
        name : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        user_id : {
          allowNull : false,
          type : Sequelize.INTEGER
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
    
      await queryInterface.createTable('Asset', {
        id : {
          allowNull : false,
          autoIncrement : true,
          primaryKey : true,
          type : Sequelize.INTEGER
        },
        stock_id : {
          allowNull : false,
          type : Sequelize.INTEGER
        },
        portfolio_id : {
          allowNull : false,
          type : Sequelize.INTEGER
        },
        purchased_at : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        sold_at : {
          allowNull : false,
          type : Sequelize.TEXT
        }
      }, { transaction });

      await queryInterface.createTable('Stock', {
        id : {
          allowNull : false,
          autoIncrement : true,
          primaryKey : true,
          type : Sequelize.INTEGER
        },
        symbol : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        name : {
          allowNull : false,
          type : Sequelize.TEXT
        },
        exchange : {
          allowNull : false,
          type : Sequelize.TEXT
        },
      }, { transaction });

      await queryInterface.addConstraint('Portfolio', {
        fields : ['user_id'],
        type: 'foreign key',
        references: {
          table: 'User',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        transaction
      });
      
      await queryInterface.addConstraint('Asset', {
        fields : ['portfolio_id'],
        type: 'foreign key',
        references: {
          table: 'Portfolio',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        transaction
      });

      await queryInterface.addConstraint('Asset', {
        fields : ['stock_id'],
        type: 'foreign key',
        references: {
          table: 'Stock',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade',
        transaction
      });

      await queryInterface.addIndex('Portfolio', {
        fields : ['user_id'],
        transaction
      });
      
      await queryInterface.addIndex('Asset', {
        fields : ['portfolio_id'],
        transaction
      });

      await queryInterface.addIndex('Stock', {
        fields : ['symbol', 'name'],
        transaction
      });
      
      await transaction.commit();
    }
    catch(err){
      await transaction.rollback();
      throw err;
    }
  },
  
  async down(queryInterface, Sequelize){
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Asset', { transaction });
      await queryInterface.dropTable('Stock', { transaction });
      await queryInterface.dropTable('Portfolio', { transaction });
      await transaction.commit();
    }
    catch(err){
      await transaction.rollback();
      throw err;
    }
  }
};

module.exports = migration;
