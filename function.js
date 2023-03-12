"use strict";
// 1. Name functions : 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 50));
// 2. Arrow function
let sub = (num1, num2) => num1 - num2;
console.log(sub(40, 30));
// 3. Function expression
let mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(2, 3));
// Parameters to the funcition
// 1. optional parameter : in the below function 'num3' is optional parameter
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add2(2, 3));
console.log(add2(2, 3, 4));
// 2. Required parameter : in the below function 'num3' is required parameter (if we don't pass the num3 then it will take num3 = 10 as default paramether)
let sub2 = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub2(40, 30));
console.log(sub2(40, 30, 5));
// 3. Rest parameters : '...num3: number[]'
function add3(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
// Meth1 :
console.log(add3(2, 3));
console.log(add3(2, 3, ...[2, 3, 4, 5, 6, 7, 8, 9]));
// Meth2 :
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(add3(2, 4, ...arr));
// Meth3 : 
console.log(add3(1, 3, 5, 6, 7, 7, 8, 8, 24, 53, 63, 34));
// 4. function only using Rest parametes :
let mulAll = (...num) => num.reduce((a, b) => a * b);
console.log(mulAll(1, 2, 3, 4, 5, 6, 7));
