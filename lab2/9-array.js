'use strict';


const phonebook = [
    {name: "Oleksii", phone: "+380980656648" },
    {name: "Dima", phone: "+380960047331" },
    {name: "Vlad", phone: "+380671739460" }
];

function findPhoneByName(name) {
    for (let i = 0; i < phonebook.length; i++) {
        if (phonebook[i].name === name) {
            return phonebook[i].phone;
        }
    }
    return "Name Not found";
}

function findNameByPhone(phone) {
    for (let i = 0; i < phonebook.length; i++) {
        if (phonebook[i].phone === phone) {
            return phonebook[i].name;
        }
    }
    return "Phone Not found";
}

console.log(findPhoneByName("Dima")); // +380960047331
console.log(findNameByPhone("+380671739460")); // Vlad
console.log(findPhoneByName("John")); // Name Not found
console.log(findNameByPhone("+123456789")); // Phone Not found

// висновок: код працює коректно