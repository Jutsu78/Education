'use strict';


const seq =(f) => (g) => typeof g === "number" ? f(g) : seq((x) => g(f(x)));


console.log(seq
    ((x) => x + 8)
    ((x) => x *4)(2)
);

console.log(seq
    ((x) => x *6 )
    ((x) => x + 9)(5)
)

console.log(seq
    ((x) => x + 1)
    ((x) => x * 2)
    ((x) => x / 3)
    ((x) => x - 4)(9)
); 
module.exports = { seq };