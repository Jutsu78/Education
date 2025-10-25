'use strict';


function sumReduce(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sumReduce(12, -10, -1, -1)) // = 0

  

    
