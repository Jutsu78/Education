'use strict';


const store = (initialValue) => {
    let value = initialValue;
    function getter() {
        return value;
    }
    getter.set = function(newValue) {
        value = newValue;
    };
    return getter;
}

const read = store(8);
console.log(read()); // 8
read.set(16);
console.log(read()); // 16