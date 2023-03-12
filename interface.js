"use strict";
// if the class or interface is being used out side of same file then we can use of 'export' keyword to make it publically accesable 
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = { name: "Aj", age: 45, id: 689, email: 'aj@gmail.com' };
console.log(user1);
let user2 = { name: "Aj", id: 689, email: 'aj@gmail.com' };
console.log(user2);
let emp1 = { name: "Ajx", age: 45, id: 6849, email: 'ajx@gmail.com', salary: 788903 };
console.log(emp1);
// * . Object destructuring : 
let { name: userName, email: userLogin } = { name: "Aj", id: 689, email: 'aj@gmail.com' };
console.log(userName);
// * . Array destructuring
let [aj1, aj2] = [
    { name: "Aj1", id: 689, email: 'aj1@gmail.com' },
    { name: "Aj2", id: 456, email: 'aj2@gmail.com' },
    { name: "Aj3", id: 123, email: 'aj3@gmail.com' }
];
console.log(aj1);
console.log(aj2);
