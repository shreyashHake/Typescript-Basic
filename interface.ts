// if the class or interface is being used out side of same file then we can use of 'export' keyword to make it publically accesable 

export interface User {
    name : string;
    age ?: number; // optional one
    id : number;
    email : string;
}

let user1 : User = {name : "Aj", age : 45, id : 689, email : 'aj@gmail.com'};
console.log(user1);

let user2 : User = {name : "Aj", id : 689, email : 'aj@gmail.com'};
console.log(user2);

interface Employees extends User {
    salary : number;
}

let emp1 : Employees = {name : "Ajx", age : 45, id : 6849, email : 'ajx@gmail.com', salary: 788903};
console.log(emp1);

export interface Login {
    login() : User; // method defination
}

// * . Object destructuring : 

let {name : userName, email : userLogin} : User = {name : "Aj", id : 689, email : 'aj@gmail.com'};
console.log(userName);

// * . Array destructuring

let [aj1, aj2, ...resAjs] : User[] = [
    {name : "Aj1", id : 689, email : 'aj1@gmail.com'},
    {name : "Aj2", id : 456, email : 'aj2@gmail.com'},
    {name : "Aj3", id : 123, email : 'aj3@gmail.com'},
    {name : "Aj2", id : 456, email : 'aj2@gmail.com'},
    {name : "Aj3", id : 123, email : 'aj3@gmail.com'},
    {name : "Aj2", id : 456, email : 'aj2@gmail.com'},
    {name : "Aj3", id : 123, email : 'aj3@gmail.com'},
    {name : "Aj2", id : 456, email : 'aj2@gmail.com'},
    {name : "Aj3", id : 123, email : 'aj3@gmail.com'}
]

console.log(aj1);
console.log(aj2);
console.log(resAjs);
