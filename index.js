const prompt = require('prompt-sync')();

const A = prompt('A =>');
const B = prompt('B =>');
const X = Number(A) + Number(B);

console.log(X)