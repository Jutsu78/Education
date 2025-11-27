'use dtrict';


function difference(array1, array2) { 
    return array1.filter(item => !array2.includes(item)); 
}

const array1 = [6, -4, 9, 5, 0];
const array2 = [0, -4];
const result = difference(array1, array2);  // удалит 0 и -4 из первого массива
console.log(result);
// Результат: [6, 9, 5]

const array3 = ['Berlin', 'Kiev'];
const array4 = ['Kiev', 'Warshaw', 'London'];
const result2 = difference(array3, array4);  // удалит 'Kiev' из первого массива
console.log(result2);
// Результат: ['Berlin']