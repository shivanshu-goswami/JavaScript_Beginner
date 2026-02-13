async function f1() { return "Done"; }
f1().then(console.log);

async function f2() { let val = await Promise.resolve(42); 
console.log(val); }
f2();

async function f3() { let val = await new Promise(res => setTimeout(() => res(99), 500)); 
console.log(val); }
f3();

async function f4() { try { await Promise.reject("Fail"); } catch(e) { 
    console.log(e); 
} }
f4();

async function f5() { 
    let a = await Promise.resolve(1); 
    let b = await Promise.resolve(2); 
    console.log(a+b); 
}
f5();

async function fetchData() { 
    return await Promise.resolve({id:1, data:"Hello"}); 
}
fetchData().then(console.log);

(async () => { 
let res = await Promise.resolve("IIFE async"); 
console.log(res); 
})();

async function delayedLog(ms, msg) { 
    await new Promise(res => setTimeout(res, ms)); 
    console.log(msg); 
}
delayedLog(300, "After Delay");

async function parallel() {
    let [x, y] = await Promise.all([Promise.resolve(10), Promise.resolve(20)]);
    console.log(x + y);
}
parallel();

async function chain() {
    let a = await Promise.resolve("Step 1");
    console.log(a);
    let b = await Promise.resolve("Step 2");
    console.log(b);
}
chain();