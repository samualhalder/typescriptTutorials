//way to declare a variable
var a:string="samual"
a="true"
var b:string|number;
b="hello"
b=234;
let c=<string>"hello world"

//how to declare a function
const fun=(m:string,n:number)=>{
    // console.log(m,"=",n);
    
}
// console.log(b);

// console.log(a);
fun("value",23)

// how to set the return type of a funtion
const fun2=(n:string,m:number):number =>{
     console.log("its only returns a number");
     
    return m*10;
}

let x:number=fun2("value",14)
console.log(x);

