for (let i = 0; i < 5; i++) console.log(i);
for (let i = 5; i > 0; i--) console.log(i);

let arr = [1, 2, 3]; for (let val of arr) console.log(val);
let str = "Hi"; for (let ch of str) console.log(ch);

let obj = {a:1, b:2}; for (let key in obj) console.log(key, obj[key]);
let colors = ["red","green"]; colors.forEach(c => console.log(c));

let n = 0; while (n < 3) { console.log(n); n++; }
let m = 3; while (m > 0) { console.log(m); m--; }

let k = 0; do { console.log(k); k++; } while (k < 2);

for (let i = 0; i <= 10; i+=2) console.log(i);
for (let i = 1; i < 20; i++) if (i % 3 === 0) console.log(i);

let nums = [4,5,6]; for (let idx in nums) console.log(idx);
for (let idx of nums) console.log(idx);

for (let i of new Set([1,1,2])) console.log(i);
[...new Map([["a",1],["b",2]])].forEach(pair => console.log(pair));