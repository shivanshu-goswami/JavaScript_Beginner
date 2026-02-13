function sayHello() { 
    console.log("Hello");
 } 
sayHello();

function add(a,b) { 
    return a+b; 
}
console.log(add(2,3));

const greet = name => `Hi ${name}`;
console.log(greet("Bob"));
const square = n => n*n;
console.log(square(5));

(function(){
     console.log("IIFE");
     })();
const multiply = function(a,b){
    return a*b;
};
console.log(multiply(2,3));

function sumAll(...nums) {
     return nums.reduce((a,b)=>a+b,0);
    }
console.log(sumAll(1,2,3));

function defaultParam(x=10) {
     return x*2; 
    } 
console.log(defaultParam());

const divide = (a,b=1) => a/b; console.log(divide(10,2));
function combine(g1,g2){
    return g1()+" "+g2();
}
console.log(combine(()=> "Hi",()=> "there"));


const obj = {
     speak(){
        return "Hello";
    } };
console.log(obj.speak());
const arrowObj = { val:7, show:()=> console.log("Value:",7) }; 
arrowObj.show();

function makeAdder(x){
    return function(y){return x+y;

    }}; 

let add5 = makeAdder(5);
console.log(add5(10));
const double = n => n*2; [1,2,3].map(double).forEach(console.log);
const callTwice = fn => {fn(); fn();}; 
callTwice(()=>console.log("Run"));