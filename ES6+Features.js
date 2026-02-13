const nums = [1,2,3]; 
const more = [...nums,4]; 
console.log(more);

const objA = {a:1}; 
const objB = {b:2}; 
console.log({...objA,...objB});
const [first,second] = ["apple","banana"]; 
console.log(first,second);

const {a, ...rest} = {a:1,b:2,c:3}; 
console.log(rest);
const greet = (name="Guest") => `Hello ${name}`; 
console.log(greet());

let p1 = () => Promise.resolve(5); p1().then(v=>console.log(v));
console.log([...[1,2]],[...[3,4]]);

const printStatus = status => status ?? "Unknown"; 
console.log(printStatus(null));
const addAll = (...nums) => nums.reduce((a,b)=>a+b,0); 
console.log(addAll(1,2,3));

let arr = [5,10]; [arr[0],arr[1]]=[arr[1],arr[0]]; 
console.log(arr);
for (let [index,val] of ["A","B"].entries()) 
    console.log(index,val);

const nameList = ["Tom","Anna"]; 
console.log(nameList.includes("Anna"));
console.log(`Sum is ${2+3}`);
const map = new Map([["x",1],["y",2]]); 
for (let [k,v] of map) console.log(k,v);

const set = new Set([1,2,2]); 
console.log([...set]);