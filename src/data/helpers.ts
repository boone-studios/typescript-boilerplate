export function controller(module) {
    return require('../modules/'+module+'/'+module+'Controller');
}

export function model(module) {
    return require('../modules/'+module+'/'+module+'Model');
}

export function validator(module) {
    return require('../modules/'+module+'/'+module+'Validator');
}

export function policy(module) {
    return require('../modules/'+module+'/'+module+'Policy');
}