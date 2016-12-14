import * as express from "express";
import ExampleController from './exampleController';

export default class ExampleRouter {
    static handleRoutes(): express.Router {
        let router = express.Router();

        // Designate REST routes here
        router.get('/', ExampleController.index);
        router.get('/:id', ExampleController.read);
        router.post('/', ExampleController.add);
        router.put('/:id', ExampleController.update);
        router.patch('/:id', ExampleController.update);
        router.delete('/:id', ExampleController.remove);
        
        return router;
    }

    static applyRoutes(router: express.Router): void {
        router.use("/example", ExampleRouter.handleRoutes());
    }
}
