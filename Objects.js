let obj1 = {x:1, y:2}; 
console.log(obj1.x);
obj1.z = 3; 
console.log(obj1);

let obj2 = {}; 
obj2.name="Tom"; 
console.log(obj2);
let car = {brand:"BMW"}; 
delete car.brand; 
console.log(car);

console.log(Object.keys({a:1,b:2}));
console.log(Object.values({a:1,b:2}));
console.log(Object.entries({a:1,b:2}));

let person = {name:"Eva"}; 
let clone = {...person}; 
console.log(clone);
let merged = Object.assign({a:1}, {b:2}); 
console.log(merged);

let {x,y} = {x:5,y:6}; 
console.log(x,y);
let obj3 = {name:"Liz", age:22}; 
console.log("age" in obj3);
console.log({} instanceof Object);

let dynamicKey = "color"; 
let obj4 = {[dynamicKey]:"red"}; 
console.log(obj4);
let nested = { coords: { lat:10, lng:20 }}; 
console.log(nested.coords.lat);