'use strict';


const createUser = (name, city) => {
    return {name, city};
}
console.log(createUser("Oleksii", "Bila Tserkva"));

module.exports = {createUser};