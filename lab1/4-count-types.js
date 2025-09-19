'use strict';
const countTupesInArray = (arr) => {
    const dict = {};
    for (const item of arr) {
        const type = typeof item;
        dict[type] = dict[type] + 1 || 1;
    }
    return dict;
}
module.exports = {countTupesInArray};