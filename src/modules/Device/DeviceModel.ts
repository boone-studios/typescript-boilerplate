import DeviceValidator from './DeviceValidator';
import db from '../../data/db';
import Model from '../../data/model';

export default class Device extends Model {

    constructor(entity) {
        super(entity);
    }

    static query() {
        return db('device');
    }

    static entity(raw) {
        return new Device(raw);
    }

    static validator(raw) {
        return new DeviceValidator(raw);
    }

}
    