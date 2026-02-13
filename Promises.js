let p1 = new Promise((resolve, reject) => resolve("Success"));
p1.then(result => console.log(result));

let p2 = new Promise((resolve, reject) => reject("Error"));
p2.catch(err => console.log(err));

Promise.resolve("Immediate").then(v => console.log(v));
Promise.reject("Fail Fast").catch(e => console.log(e));

let p3 = new Promise(resolve => setTimeout(() => resolve("After 1s"), 1000));
p3.then(v => console.log(v));

Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(values => console.log(values));
Promise.race([
    new Promise(res => setTimeout(() => res("Fast"), 500)),
    new Promise(res => setTimeout(() => res("Slow"), 2000))
]).then(v => console.log(v));

Promise.allSettled([
    Promise.resolve("OK"),
    Promise.reject("Bad")
]).then(results => console.log(results));

let chain = Promise.resolve(2)
    .then(v => v * 2)
    .then(v => v + 1);
chain.then(v => console.log(v));

new Promise(res => res("Chain Start"))
    .then(v => { console.log(v); return "Next"; })
    .then(v => console.log(v));