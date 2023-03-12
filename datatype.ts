// 1. String

let fname = 'Shreyash';
// fname = 50; will throw error -> Type 'number' is not assignable to type 'string'.

let lang: string;
lang = 'typescript';

console.log(fname.toUpperCase());
console.log(lang.toUpperCase());

// 2. Number

let age: number;
age = 59;

console.log(age);

let score: string = "45";

let newScore: Number = parseInt(score);
console.log(newScore);
console.log(typeof (newScore));

// 3. Boolean

let isTrue: boolean = false; // you have to define the boolean b4 using it by defalut we "use strict"
console.log(isTrue);

// 4. Array

// Method 1 : 
let numList: number[];
numList = [1, 2, 3, 4, 5, 6];

let sum = numList.reduce((acc, ele) => acc + ele, 0);
console.log('sum : ' + sum);

let find = numList.find((num) => num === 3);
console.log('Your number is : ' + find);

let even = numList.filter((num) => num % 2 == 0);
console.log('Event numbers are : ' + even);

// Method 2 : 
let depList: Array<string>;
depList = ["CSE", "IT", "ETRX", "CIV"];

let findDep = depList.find((dep) => dep === "CSE");
console.log('Your department is :' + findDep);

let size = depList.length;
console.log("Number of department is college : " + size);

// 5. enum : prefer enum to be 'cont' insted of 'let/var'

const enum Color {
    Red,
    Blue,
    Green
}

let c: Color = Color.Green;
console.log(c);

// 6. Tuple

let swapNumbs: [firtNum: number, secNum: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);
console.log("First num : " + swapNumbs[0]);
console.log("Secont num : " + swapNumbs[1]);

// console.log("Secont num : " + swapNumbs[2]); // if we access indexOutOfBound in tuple it will throw compilation error.
console.log("Secont num : " + numList[9]); // if we access indexOutOfBound in array the output will be 'undefined'

// 7. Any : 
// if we don't assing any datatype to variable it is by defalut 'any'

let shreyash;
shreyash = "Male";
shreyash = true;
shreyash = 21;
// we can assing any type of value, but it is suggested to avoid 'any' in out codebase

console.log(shreyash);

// 8. void :



// 9. never : 