import Device from './DeviceModel';
import DevicePolicy from './DevicePolicy';
import * as express from 'express';

export default class DeviceController {
    
    static index(req: express.Request, res: express.Response) {
        const policy = new DevicePolicy();
        policy.authenticate('index', req.session.user);
        return res.json(Device.index());
    }

    static read(req: express.Request, res: express.Response) {
        let device = Device.read(req.params.id)
        const policy = new DevicePolicy(device);
        policy.authenticate('read', req.session.user);
        return res.json(device);
    }

    static create(req: express.Request, res: express.Response) {
        const policy = new DevicePolicy(req.params.body);
        policy.authenticate('create', req.session.user);
        return res.json(Device.create(req.body));
    }

    static update(req: express.Request, res: express.Response) {
        const policy = new DevicePolicy(req.params.body);
        policy.authenticate('update', req.session.user);
        return res.json(Device.update(req.params.id, req.body));
    }

    static remove(req: express.Request, res: express.Response) {
        let device = Device.read(req.params.id)
        const policy = new DevicePolicy(device);
        policy.authenticate('remove', req.session.user);
        return res.json(Device.remove(req.params.id));
    }
}
    