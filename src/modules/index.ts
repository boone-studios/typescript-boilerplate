import * as express from 'express';
import MockUser from '../middleware/MockUser';
import DeviceRouter from './Device/DeviceRouter';
import DrinkOrderRouter from './DrinkOrder/DrinkOrderRouter';

export function moduleRouter(): express.Router {
    let router: express.Router = express.Router();

    // Creates a mock user on the request until auth is implemented
    router.use(MockUser);

    const modules: Array<any> = [
        DeviceRouter, DrinkOrderRouter
    ];

    console.log('Applying Module routes.');

    modules.forEach(module => module.applyRoutes(router));

    return router;
}
