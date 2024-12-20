let $2o_i = require('./import_func_controller/$2o_i.js');
let J4$_i = require('./import_func_controller/J4$_i.js');
let rsw_i = require('./import_func_controller/rsw_i.js');
let tCr_i = require('./import_func_controller/tCr_i.js');
let __EM_CXA_THROW__i = require('./import_func_controller/__EM_CXA_THROW__i.js');

function arrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(arrayEqual($2o_i, J4$_i));
console.log(arrayEqual(J4$_i, rsw_i));
console.log(arrayEqual(rsw_i, tCr_i));
console.log(arrayEqual(tCr_i, __EM_CXA_THROW__i));