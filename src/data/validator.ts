import {IError} from './structures';

export default class Validator {

    public err: Array<IError> = [];
    public rules: Array<any> = [];
    public entity: any;

    constructor(entity) {
        this.entity = entity;
    }

    rule(name: string, fn: Function) {
        this.rules.push({name, fn});
        return this;
    }

    validate() {
        this.rules.forEach(rule => {
            try {
                rule.fn(this.entity);
            } catch (e) {
                this.err.push(e);
            }
        });

        if (this.errors().length > 0) {
            return false;
        }

        return true;
    }

    errors() {
        return this.err;
    }

    exists(field) {
        return this.rule(field + '_exists', entity => {
            if (!!entity[field] === false) {
                throw {
                    code: 418,
                    message: `${field} is not properly set on the entity.`,
                    reason: 'ValidationFailed'
                };
            }
            return true;
        });
    }

    isString(field) {
        return this.rule(field + '_is_string', entity => {
            if (typeof entity[field] !== 'string') {
                throw {
                    code: 418,
                    message: `${field} is not proper type: string on entity.`,
                    reason: 'ValidationFailed'
                }
            }
        });
    }

    isNumeric(field) {
        return this.rule(field + '_is_numeric', entity => {
            if (typeof entity[field] !== 'number') {
                throw {
                    code: 418,
                    message: `${field} is not proper type: number on entity.`,
                    reason: 'ValidationFailed'
                }
            }
        });
    }

    isJson(field) {
        return this.rule(field + '_is_json', entity => {
            try {
                let json = JSON.parse(entity[field]);
                return true;
            } catch (e) {
                throw {
                    code: 418,
                    message: `${field} is not proper type: JSON on entity.`,
                    reason: 'ValidationFailed'
                }
            }
        });
    }

    isEqualTo(field, equality) {
        if (typeof equality === 'function') {
            equality = equality();
        }
        return this.rule(field + '_is_equal_to', entity => {
            if (entity[field] !== equality) {
                throw {
                    code: 418,
                    message: `${field} breaks equality rule.`,
                    reason: 'ValidationFailed'
                }
            }
            return true;
        })
    }

    isGreaterThan(field, comparator) {
        return this.rule(field + '_is_greater_than', entity => {
            if (typeof comparator === 'function') {
                comparator = comparator(entity);
            }
            if (!(entity[field] > comparator)) {
                throw {
                    code: 418,
                    message: `${field} breaks greater than rule.`,
                    reason: 'ValidationFailed'
                }
            }
            return true;
        })
    }

    isLessThan(field, comparator) {
        if (typeof comparator === 'function') {
            comparator = comparator();
        }
        return this.rule(field + '_is_less_than', entity => {
            if (!(entity[field] < comparator)) {
                throw {
                    code: 418,
                    message: `${field} breaks less than rule.`,
                    reason: 'ValidationFailed'
                }
            }
            return true;
        })
    }

    isUndefined(field) {
        return this.rule(field + '_is_null', entity => {
            if (!(typeof entity[field] === undefined)) {
                throw {
                    code: 418,
                    message: `${field} breaks required undefined rule.`,
                    reason: 'ValidationFailed'
                }
            }
            return true;
        })
    }
}