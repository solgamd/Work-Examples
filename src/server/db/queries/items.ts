import { knextion as knex } from '../index';
// import { Query } from 'mysql';

const getAll = () => knex('items').select();

const getOneItem = (id: number) => knex('items').select().where({ id });

const post = (obj: { title: string, descrip: string, company: string, source: string }) => knex('items').insert(obj);

const edit = (obj: { title?: string, descrip?: string, company?: string, source?: string }, id: number) => knex('items').update(obj).where({ id });

const remove = (id: number) => knex('items').delete().where({ id });


// ------- MySQL Queries converted to Knex above -----------
// const getAll = async () => Query('SELECT * from items');

// const getOneItem = async (id: number) => Query('SELECT * from items WHERE id = ?', [id]);

// const post = async (title: string, descrip: string) => Query('INSERT INTO items (title, descrip) VALUES (?)', [[title, descrip]]);

// const edit = async (id: number, title: string, descrip: string) => Query('UPDATE items SET title = ?, descrip = ? WHERE id = ?', [title, descrip, id])

// const remove = async (id: number) => Query('DELETE FROM items WHERE id = ?', [id]);

export default {
    getAll,
    getOneItem,
    post,
    edit,
    remove
}

