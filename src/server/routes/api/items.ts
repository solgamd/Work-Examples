import * as express from 'express';
import db from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const router = express.Router();

// const isAdmin: RequestHandler = (req, res, next) => { 
//     if (!req.user || req.user.role !== 'admin') {
//         console.log(req.user);
//         return res.sendStatus(401);
//     } else {
//         return next();
//     }
// };

router.get('/', async (req, res, next) => {
    try {
        let items = await db.items.getAll();
        res.json(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [item] = await db.items.getOneItem(id);
        res.json([item]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    let newItem = {

        title: req.body.title,
        descrip: req.body.descrip,
        company: req.body.company,
        source: req.body.assignment
    }
    let [result] = await db.items.post(newItem);

    // let newItemtag = {
    //     itemid: result,
    //     tagid: req.body.selectedTag
    // };
    // await db.itemtags.insert(newItemtag);
    res.json(result);

});

router.delete('/:id', async (req, res) => {
    try {
        await db.items.remove(req.params.id);
        res.json('item post deleted.');
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong.');
    }
});

router.put('/:id', async (req, res) => {
    try {
        await db.items.edit(req.body, req.params.id);
        res.json('item edited successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong with your PUT request in items.');
    }
});

export default router;