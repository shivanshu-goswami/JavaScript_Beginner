console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
console.log("End");

console.log("Script start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("Script end");

setImmediate(() => console.log("Immediate"));

setTimeout(() => console.log("A"), 100);
setTimeout(() => console.log("B"), 50);

Promise.resolve("P1").then(console.log);
Promise.resolve("P2").then(v => console.log(v));

queueMicrotask(() => console.log("Microtask queued"));

setTimeout(() => {
    console.log("Outer Timeout");
    setTimeout(() => console.log("Inner Timeout"), 0);
}, 0);

Promise.resolve().then(() => console.log("Microtask 1"));
console.log("Log after scheduling Microtask 1");