var num = 0;
var currentNum = 3;
var lastNum = 2;
var tempNum = 0;
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
alert(num);
document.getElementById("answer").innerHTML = num;