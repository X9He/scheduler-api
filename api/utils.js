'use strict';


/**************************************Email Validation**************************************/
const emailRegex = new RegExp (['^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))',
    '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'].join(''));

const checkEmailAddress = function(email) {
    if (!email || email.length == 0 || !emailRegex.test(email)) {
        return false;
    }
    return true;
};

exports.checkEmailAddress = checkEmailAddress;
