import * as express from 'express';
import * as passport from 'passport';
import itemsRouter from './items';



const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user; 
        return next();
    })(req, res, next);
});

router.use('/items', itemsRouter); 



export default router;