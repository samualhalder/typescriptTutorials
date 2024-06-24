"use strict";
//way to declare a variable ------------>
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
// console.log(x);
// Arrey ------------->
const arr1 = [2, 3, 4, 5];
const arr2 = [2, 4, 4, 4];
const arr3 = ['a', 2, 4, 4, 4, "samual"];
const studnet1 = {
    name: "samual halder",
    id: 112,
    pass: true
};
const sudent2 = {
    name: "sayan das",
    id: 110,
};
// CLASSES --------------------->
class Engineer {
    constructor(name, role, salary) {
        this.getRole = () => {
            return `my role is ${this.role}`;
        };
        this.name = name,
            this.role = role,
            this.salary = salary;
    }
}
const Eng1 = new Engineer("Samual", "IT", 500000);
console.log(Eng1.name);
console.log(Eng1.getRole());
// GENERICS ------------------------------------->
const aFun = (n) => {
    console.log(`the value is ${n}`);
    return n;
};
const person1 = {
    name: "samual",
    age: 56
};
const value = aFun(person1); //also heaps to pass random type data set
console.log(value);
