const vectorName = '_search';

const searchObjects = {
  stock : ['symbol', 'name']
};

const migration = {
  async up(queryInterface, Sequelize){
    const transaction = await queryInterface.sequelize.transaction();
    try {
      for(let table in searchObjects){
        console.log(table);
        await queryInterface.sequelize.query(`
          ALTER TABLE ${table} ADD COLUMN ${vectorName} tsvector;
        `, { transaction });

        if(table === 'stock'){
          await queryInterface.sequelize.query(`
            UPDATE ${table} SET ${vectorName} = setweight(to_tsvector(symbol), 'A') || setweight(to_tsvector(name), 'B');
          `, { transaction });
        }
        else {
          await queryInterface.sequelize.query(`
            UPDATE ${table} SET ${vectorName} = to_tsvector(${searchObjects[table].join(" || ' ' || ")});
            `, { transaction });
        }

        await queryInterface.sequelize.query(`
          CREATE INDEX ${table}_search ON ${table} USING GIN(${vectorName});
        `, { transaction });

        await queryInterface.sequelize.query(`
          CREATE TRIGGER ${table}_vector_update
          BEFORE INSERT OR UPDATE ON ${table}
          FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(${vectorName}, 'pg_catalog.english', ${searchObjects[table].join(', ')});
        `, { transaction });

        await transaction.commit();
      }
    }
    catch(err){
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize){
    const transaction = await queryInterface.sequelize.transaction();
    try {
      for(let table in searchObjects){
        await queryInterface.sequelize.query(`
          DROP TRIGGER ${table}_vector_update ON ${table};
        `, { transaction })
        await queryInterface.sequelize.query(`
          DROP INDEX ${table}_search;
        `, { transaction })
        await queryInterface.sequelize.query(`
          ALTER TABLE ${table} DROP COLUMN ${vectorName};
        `, { transaction })
      }
      await transaction.commit();
    }
    catch(err){
      await transaction.rollback();
      throw err;
    }
  }
};

module.exports = migration;
