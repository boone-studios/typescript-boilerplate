import Policy from '../../data/policy';

export default class DevicePolicy extends Policy {
    constructor(entity?) {
        super(entity)
    }

    index() {
        return true;
    }

    read(user) {
        return true;
    }

    create(user) {
        return true;
    }

    update(user) {
        return true;
    }

    remove(user) {
        return true;
    }
}   
