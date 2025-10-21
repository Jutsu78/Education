'use strict';


const sum = (...args) => {
    let value = 0;
    for (const arg of args) {
        value += arg;
    }
    return value;
}
console.log(sum(10,5,1,1)); // 17
