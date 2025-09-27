'use strict';


const square = (x) => x * x;
const cube = (x) => x * x * x;
const average = (x, y) => (x + y) / 2;

const calculate = () => {
    const array = [];
    for (let i = 1; i <= 10; i++) {
       const x = average(square(i), cube(i));
       array.push(x);
    }
    return array;
        };
    module.exports = {square, cube, average, calculate};
