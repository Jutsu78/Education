'use strict';


const personAge = {
   Cobain: {Born: 1967, Died: 1994},
   Tupac: {Born: 1971, Died: 1996},
   Jackson: {Born: 1958, Died: 2009},
   Bennington: {Born: 1976, Died: 2017},
};

const ages = (obj) => {
    const result = {};
    for (const name in personAge) {
        const person = personAge[name];
        const age = person.Died - person.Born;
        result[name] = age;
    }
    return result;
};

console.log(ages(personAge));

//   Cobain: 27,
//   Tupac: 25,
//   Jackson: 51,
//   Bennington: 41
// RIP