
import DrinkOrderController from './DrinkOrderController';
import * as express from 'express';

export default class DrinkOrderRouter {

    static handleRoutes() {
        let router = express.Router();

        // Designate REST routes here
        router.get('/', DrinkOrderController.index);
        router.get('/:id', DrinkOrderController.read);
        router.post('/', DrinkOrderController.create);
        router.put('/:id', DrinkOrderController.update);
        router.patch('/:id', DrinkOrderController.update);
        router.delete('/:id', DrinkOrderController.remove);
        
        return router;
    }

    static applyRoutes(router: express.Router) {
        router.use("/drink-order", DrinkOrderRouter.handleRoutes());
    }
}    
    