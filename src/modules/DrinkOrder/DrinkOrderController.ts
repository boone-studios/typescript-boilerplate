import DrinkOrder from './DrinkOrderModel';
import DrinkOrderPolicy from './DrinkOrderPolicy';
import * as express from 'express';

export default class DrinkOrderController {
    
    static index(req: express.Request, res: express.Response) {
        const policy = new DrinkOrderPolicy();
        policy.authenticate('index', req.session.user);
        return res.json(DrinkOrder.index());
    }

    static read(req: express.Request, res: express.Response) {
        let drinkOrder = DrinkOrder.read(req.params.id)
        const policy = new DrinkOrderPolicy(drinkOrder);
        policy.authenticate('read', req.session.user);
        return res.json(drinkOrder);
    }

    static create(req: express.Request, res: express.Response) {
        const policy = new DrinkOrderPolicy(req.params.body);
        policy.authenticate('create', req.session.user);
        return res.json(DrinkOrder.create(req.body));
    }

    static update(req: express.Request, res: express.Response) {
        const policy = new DrinkOrderPolicy(req.params.body);
        policy.authenticate('update', req.session.user);
        return res.json(DrinkOrder.update(req.params.id, req.body));
    }

    static remove(req: express.Request, res: express.Response) {
        let drinkOrder = DrinkOrder.read(req.params.id)
        const policy = new DrinkOrderPolicy(drinkOrder);
        policy.authenticate('remove', req.session.user);
        return res.json(DrinkOrder.remove(req.params.id));
    }
}
    