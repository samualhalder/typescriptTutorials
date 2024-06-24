//way to declare a variable ------------>
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
// console.log(x);

// Arrey ------------->
 
const arr1:number[]=[2,3,4,5]

const arr2:Array<number>=[2,4,4,4]

const arr3:Array<number | string>=['a',2,4,4,4,"samual"]


//Objects----------->
type Student={
    name:string,
    id:number,          //<---type declaraiton of the object
    pass?:boolean
}

const studnet1:Student={
    name:"samual halder",
    id:112,
    pass:true
}
const sudent2:Student={
    name:"sayan das",
    id:110,
}

// CLASSES --------------------->

class Engineer{
   name;
  private salary;// only access in the class
  protected role; // acessesable in its child classed 
   constructor(name:string,role:string,salary:number){
    this.name=name,
    this.role=role,
    this.salary=salary
   }
   getRole=():string =>{
        return `my role is ${this.role}`
   }
}

const Eng1=new Engineer("Samual","IT",500000)

console.log(Eng1.name);
console.log(Eng1.getRole());


// GENERICS ------------------------------------->


const aFun=<T>(n:T):T=>{
    console.log(`the value is ${n}`);
    return n;
}
// aFun("my mom")
type Person={
    name:string,
    age:number
}
const person1:Person={
    name:"samual",
    age:56
}

const value:Person=aFun(person1) //also heaps to pass random type data set
console.log(value);


