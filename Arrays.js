let arr1 = [1,2,3];
console.log(arr1.length);
arr1.push(4); 
console.log(arr1);
arr1.pop();
console.log(arr1);

let arr2 = [10,20];
arr2.unshift(5);
console.log(arr2);
arr2.shift();
console.log(arr2);

let nums = [5,2,9]; 
console.log(nums.sort((a,b)=>a-b));
console.log(nums.reverse());

let joined = ["a","b"].join("-"); 
console.log(joined);
let merged = [1,2].concat([3,4]); 
console.log(merged);

console.log([1,2,3].map(n=>n*2));
console.log([1,2,3].filter(n=>n>1));
console.log([1,2,3].reduce((a,b)=>a+b,0));

console.log([1,2,3].includes(2));
console.log([10,20,30].find(n=>n>15));
console.log([7,8,9].some(n=>n<5));