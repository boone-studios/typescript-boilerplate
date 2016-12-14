import * as express from 'express';
import ExampleRouter from './example/exampleRouter';

export function applyRoutes(): express.Router {
    let router: express.Router = express.Router();

    const modules: Array<any> = [
        ExampleRouter
    ];

    modules.forEach(module => module.applyRoutes(router));

    return router;
}
