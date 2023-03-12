"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Class : 
class Employee {
    // 3. Getter and setters : 
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // 4. Constructor : 
    constructor(id, name, address) {
        // 2. Properties and Member visibility : 
        // private property
        _Employee_id.set(this, void 0); // here member variable of java are called as property in typescript . . .
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    // 5. Methods : 
    getNameWithAddres() {
        return `${this.name} stays at ${this.address}.`;
    }
    // 6. Static methods : 
    static getEmployeeCount() {
        return 70000;
    }
    // * . interface
    login() {
        return { name: "Aj", id: 689, email: 'aj@gmail.com' };
        ;
    }
}
_Employee_id = new WeakMap();
// 7. Instance of the class : 
let ram = new Employee(1, "Ram Thakur", {
    landmark: "Near Temple",
    pin: 5780,
    city: "Pune"
});
console.log(ram);
// ram.#id = 100; // not accesable as it is private and only that class can acces it.(need to use getter and setter for private properties)
// console.log(ram.name); // not accesable as it is protected and only class and its child class can access it
let nameAdd = ram.getNameWithAddres();
console.log(nameAdd);
ram.empId = 89;
console.log(ram);
// we don't need instance to access static methods
console.log(Employee.getEmployeeCount());
// 8. Member visibility : 
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
