// === Terminology ===
// number
// string
// boolean

// numbers[]
// any

// function


// Learn TypeScript

// Type
let y:number = 7;
y = 10;

let x: string = "Mohamed Program";
x = "Mohamed";

let b: boolean = true

console.log(y)


// Arrays

let numbers: number[] = [1,2,3,4]
let names:  string[] = ["mohamed","ahmed"]
let arry = [1,"ahmed"]
let arr2: (number| boolean)[] = [1,true]
let any: any= [1, "mohamed", true]

let w: [number, string]= [1, "mohamed"]
let z = [1, "mohamed" , false]
let s: (string| number)[] = [1, "mohamed"]
s.push(20);
console.log(s)


const n = () => {
    console.log("Hello World")

    return "Hello"
}

const n2: (x:number,y:number) => number = (x,y) => {
    return x * y
}

// -----

// interface 

interface person {
    name: string,
    age?: number,
}

let q: person = {
    name:"mohamed",
    age: 18
}

console.log(q.age ?? "عذراا ")
console.log("--------------------")
let myNumber:number = q.age!



type myType = string | number;
let m: myType = 20


type myTypeObject = {
    name:string,
    age:number,
    status?:boolean,
}


let my: myTypeObject = {
    name: "Ahmed",
    age: 13,
    status: false,
}