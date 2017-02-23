export default class Policy {
    public entity: any;

    constructor(entity?) {
        this.entity = entity || undefined;
    }

    authenticate(type, user) {
        if (!this[type](user)) {
            throw Error('403 Not Authorized');
        }
        return true;
    }
}