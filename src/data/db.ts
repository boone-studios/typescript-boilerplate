import * as knex from 'knex';
import * as config from 'config';

const db = knex({
    client: 'mysql',
    connection: config.database    
});

export default db;