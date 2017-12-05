var num = 0;
var sumOfSquares = 0;
var squareOfSums = 0;
for (var i = 1; i <= 100; i++) {
	sumOfSquares += i * i;
}
for (var i = 1; i <= 100; i++) {
	squareOfSums += i;
}
squareOfSums = squareOfSums * squareOfSums;
num = squareOfSums - sumOfSquares;
alert(num);
document.getElementById("answer").innerHTML = num;