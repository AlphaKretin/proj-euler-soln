let num = 0;
let sumOfSquares = 0;
let squareOfSums = 0;
for (let i = 1; i <= 100; i++) {
	sumOfSquares += i * i;
}
for (let i = 1; i <= 100; i++) {
	squareOfSums += i;
}
squareOfSums = squareOfSums * squareOfSums;
num = squareOfSums - sumOfSquares;
console.log(num)