'use strict';

/************************************************
 * Creates Portfolio, Asset, and Stock Tables   *
 * with appropriate associations and indices    *
 ************************************************/
const migration = {
  async up(queryInterface, Sequelize){
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('portfolio', {
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
        public : {
          allowNull : false,
          type : Sequelize.BOOLEAN
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
    
      await queryInterface.createTable('asset', {
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
        portfolio_id : {
          allowNull : false,
          type : Sequelize.INTEGER
        },
        shares : {
          allowNull : false,
          type : Sequelize.INTEGER
        },
        purchased_at : {
          allowNull : false,
          type : Sequelize.TEXT
        }
      }, { transaction });

      await queryInterface.createTable('stock', {
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

      await queryInterface.addConstraint('portfolio', {
        fields : ['user_id', 'name'],
        type : 'unique',
        transaction
      });

      await queryInterface.addConstraint('portfolio', {
        fields : ['user_id'],
        type: 'foreign key',
        references: {
          table: 'user',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        transaction
      });
      
      await queryInterface.addConstraint('asset', {
        fields : ['portfolio_id'],
        type: 'foreign key',
        references: {
          table: 'portfolio',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        transaction
      });

      await queryInterface.addIndex('portfolio', {
        fields : ['user_id'],
        transaction
      });
      
      await queryInterface.addIndex('asset', {
        fields : ['portfolio_id'],
        transaction
      });

      await queryInterface.addIndex('stock', {
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
      await queryInterface.dropTable('asset', { transaction });
      await queryInterface.dropTable('stock', { transaction });
      await queryInterface.dropTable('portfolio', { transaction });
      await transaction.commit();
    }
    catch(err){
      await transaction.rollback();
      throw err;
    }
  }
};

module.exports = migration;
