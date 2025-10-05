'use strict';


const generateKey = (length, characters) => {
    const chars = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYfwhnjfrewrweuhfrwfrewu09828996544';
    const base = chars.length;
    let key = '';
    for(let i=0; i<length; i++) {
        const index = Math.floor(Math.random() * base);
        key += chars[index];
    }
    return key;
};

console.log(generateKey(16));
console.log(generateKey(32, '0123456789abcdef'));