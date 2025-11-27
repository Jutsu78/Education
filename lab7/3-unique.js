'use strict';


function unique(array) { 
    return [...new Set(array)]; 
}

const result = unique([6, 5, 5, 3, 2]);
console.log(result);
// Результат: [6, 5, 3, 2]

const result2 = unique(['up', 'down', 'down', 'right']); 
console.log(result2); 
// Результат: ['up', 'down', 'right']



