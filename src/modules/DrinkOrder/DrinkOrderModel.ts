import DrinkOrderValidator from './DrinkOrderValidator';
import db from '../../data/db';
import Model from '../../data/model';

export default class DrinkOrder extends Model {

    constructor(entity) {
        super(entity);
    }

    static query() {
        return db('drink_order');
    }

    static entity(raw) {
        return new DrinkOrder(raw);
    }

    static validator(raw) {
        return new DrinkOrderValidator(raw);
    }

}
    