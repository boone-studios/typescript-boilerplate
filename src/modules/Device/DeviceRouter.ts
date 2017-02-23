
import DeviceController from './DeviceController';
import * as express from 'express';

export default class DeviceRouter {

    static handleRoutes() {
        let router = express.Router();

        // Designate REST routes here
        router.get('/', DeviceController.index);
        router.get('/:id', DeviceController.read);
        router.post('/', DeviceController.create);
        router.put('/:id', DeviceController.update);
        router.patch('/:id', DeviceController.update);
        router.delete('/:id', DeviceController.remove);
        
        return router;
    }

    static applyRoutes(router: express.Router) {
        router.use("/device", DeviceRouter.handleRoutes());
    }
}    
    