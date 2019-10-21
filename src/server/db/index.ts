import * as knex from 'knex';
// import * as mysql from 'mysql';
import config from '../config';

export const knextion = knex(config.knex); 

// export const pool = mysql.createPool(config.knex.connection);

// export const Query = (query: string, values?: any) => {
//     return new Promise<Array<any>>((resolve, reject) => {
//         pool.query(query, values, (err, results) => {
//             if(err) reject(err);
//             return resolve(results);
//         });
//     });
// };

import items from './queries/items';

export default {
    items
}