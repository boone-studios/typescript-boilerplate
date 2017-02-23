import _ from 'lodash';
import db from './db';

export default class Model {

    public id: Number;
    protected tableName: String;
    protected className: String;

    constructor(entity) {
        _.extend(this, entity);
    }

    static query() {
        // no-op 
    }

    static entity(entity) {
        // no-op
    }

    static validator(entity) {
        // no-op
    }

    static async index() {
        let results = await this.query();
        return results.map(entity => this.entity(entity));
    }

    static async read(id) {
        let result = await this.query().where({id}).first();
        return this.entity(result);
    }

    static create(entity) {
        this.validator(entity)
            .create()
            .validate();
        return this.entity(entity).save();
    }

    static async update(id, patch) {
        this.validator(patch)
            .update()
            .validate();
        let found = await this.read(id);
        let patched = _.extend(found, patch);
        return patched.save();
    }

    static remove(id) {
        return this.read(id).remove();
    }

    saveNew() {
        return this.q()
            .insert(this)
    }

    save() {
        return this.id ? this.update() : this.saveNew()
    }

    update() {
        return this.q()
            .where({id: this.id})
            .update(this);
    }

    remove() {
        return this.q()
            .where({id: this.id})
            .del();
    }

    q() {
        return this.constructor.query();
    }

}