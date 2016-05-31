require('regenerator-runtime/runtime');
import * as _ from 'lodash';

_.xor();

let a = async () => {
    await (() => {
        alert('demo');
    })();
};

// a();