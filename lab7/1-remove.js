
'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};


const arr = [1, 2, 3, 2];
removeElement(arr, 2);
console.log(arr); // [1, 3, 2]

const a2 = ['a', 'b', 'c'];
removeElement(a2, 'x');
console.log(a2); //['a', 'b', 'c']  

const a3 = [1];
const result = removeElement(a3, 1);
console.log(a3, result); //undefined