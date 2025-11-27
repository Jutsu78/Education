'use strict';


const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};
const arr = [1, 2, 3, 4];
removeElements(arr, 2, 3);
console.log(arr); // [1, 4]