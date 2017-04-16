const _ = require('lodash');

function validateKeys(event, keys) {
    if(!keys || !keys.length) {
        return true;
    }

    for(let x = 0; x < keys.length; x++) {
        if(_.get(event, keys[x])) {
            return true;
        }
    }

    return false;
}

module.exports = {
    checkTypeAndKey: (event, validTypes, keys) => {
        if(typeof validTypes === 'string') {
            validTypes = [validTypes];
        }

        if(typeof keys === 'string') {
            keys = [keys];
        }

        return validTypes.includes(event.type) && validateKeys(event, keys);
    }
};
