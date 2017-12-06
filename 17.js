//WIP
function numToWordLen(num) {
	let arr = num.toString().split("");
	let out = "";
	let ones = arr[arr.length - 1] && parseInt(arr[arr.length - 1]);
	let tens = arr[arr.length - 2] && parseInt(arr[arr.length - 2]);
	let hunds = arr[arr.length - 3] && parseInt(arr[arr.length - 3]);
	let thous = arr[arr.length - 4] && parseInt(arr[arr.length - 4]);
	if (thous && thous > 0) {
		out += "onethousand";
	}
	if (hunds && hunds > 0) {
		switch (hunds) {
			case 1: out += "onehundred"; break;
			case 2: out += "twohundred"; break;
			case 3: out += "threehundred"; break;
			case 4: out += "fourhundred"; break;
			case 5: out += "fivehundred"; break;
			case 6: out += "sixhundred"; break;
			case 7: out += "sevenhundred"; break;
			case 8: out += "eighthundred"; break;
			case 9: out += "ninehundred"; break;
		}
		if ((tens && tens > 0) || (ones && ones > 0)) {
			out += "and";
		}
	}
	if (tens && tens > 0) {
		switch (tens) {
			case 1:
				if (ones && ones > 0) {
					switch (ones) {
						case 1: out += "eleven"; break;
						case 2: out += "twelve"; break;
						case 3: out += "thirteen"; break;
						case 4: out += "fourteen"; break;
						case 5: out += "fifteen"; break;
						case 6: out += "sixteen"; break;
						case 7: out += "seventeen"; break;
						case 8: out += "eighteen"; break;
						case 9: out += "nineteen"; break;
					}
				} else {
					out += "ten";
				}
				break;
			case 2: out += "twenty"; break;
			case 3: out += "thirty"; break;
			case 4: out += "forty"; break;
			case 5: out += "fifty"; break;
			case 6: out += "sixty"; break;
			case 7: out += "seventy"; break;
			case 8: out += "eighty"; break;
			case 9: out += "ninety"; break;
		}
	}
	if (ones && ones > 0) {
		if (!(tens && tens === 1)) {
			switch (ones) {
				case 1: out += "one"; break;
				case 2: out += "two"; break;
				case 3: out += "three"; break;
				case 4: out += "four"; break;
				case 5: out += "five"; break;
				case 6: out += "six"; break;
				case 7: out += "seven"; break;
				case 8: out += "eight"; break;
				case 9: out += "nine"; break;
			}
		}
	}
	console.log(out);
	return out.length;
}

let sum = 0;
for (let i = 1; i <= 1000; i++) {
	sum += numToWordLen(i);
}
console.log(sum);