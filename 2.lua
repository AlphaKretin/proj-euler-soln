let num = 0;
let currentNum = 3;
let lastNum = 2;
let tempNum = 0;
while (tempNum < 4000000) {
	tempNum = currentNum + lastNum;
	lastNum = currentNum;
	currentNum = tempNum;
	console.log(currentNum);
	if (currentNum % 2 === 0 && !(currentNum > 4000000)) {
		num += currentNum;
	}
}
num += 2;
console.log(num)