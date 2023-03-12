import {Login, User} from './interface';

interface Address {
    landmark: string;
    pin: number;
    city: string;
}

// 1. Class : 

class Employee implements Login{

    // 2. Properties and Member visibility : 
    // private property
    #id : number; // here member variable of java are called as property in typescript . . .
    
    // protected property
    protected name : string;
    address : Address;

    // 3. Getter and setters : 

    get empId(): number {
        return this.#id;
    }

    set empId(id : number) {
        this.#id = id;
    }

    // 4. Constructor : 

    constructor(id : number, name : string, address : Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    // 5. Methods : 

    getNameWithAddres(): string {
        return `${this.name} stays at ${this.address}.`;
    }

    // 6. Static methods : 

    static getEmployeeCount(): number {
        return 70000;
    }

    // * . interface
    login() : User {
        return {name : "Aj", id : 689, email : 'aj@gmail.com'};;
    }
}

// 7. Instance of the class : 

let ram = new Employee(1, "Ram Thakur", {
    landmark: "Near Temple",
    pin: 5780,
    city: "Pune"
});
console.log(ram);

// ram.#id = 100; // not accesable as it is private and only that class can acces it.(need to use getter and setter for private properties)

// console.log(ram.name); // not accesable as it is protected and only class and its child class can access it

let nameAdd: string = ram.getNameWithAddres();
console.log(nameAdd);

ram.empId = 89;
console.log(ram);


// we don't need instance to access static methods
console.log(Employee.getEmployeeCount());

// 8. Member visibility : 

class Manager extends Employee {
    constructor(id : number, name : string, address : Address) {
        super(id, name, address);
    }
}