"use strict";
//way to declare a variable
var a = "samual";
a = "true";
var b;
b = "hello";
b = 234;
let c = "hello world";
//how to declare a function
const fun = (m, n) => {
    // console.log(m,"=",n);
};
// console.log(b);
// console.log(a);
fun("value", 23);
// how to set the return type of a funtion
const fun2 = (n, m) => {
    console.log("its only returns a number");
    return m * 10;
};
let x = fun2("value", 14);
console.log(x);
