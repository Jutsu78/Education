'use strict';

const sum =(...args) => {
let value = 0;
for (let i = 0; i < args.length; i++) {
    value += args[i];
}
return value;
}
console.log(sum(1, 2, 3, 4, 5)); // 15

