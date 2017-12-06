let bigInt = require('big-integer');
let input = bigInt(2).pow(bigInt(1000));
let arr = input.toString().split("");
let sum = bigInt(0);
for (let i of arr) {
	sum = sum.add(bigInt(i));
}
console.log(sum);