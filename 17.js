//WIP
function numToWordLen(num) {
	let arr = num.toString().split("");
	let out = "";
	let ones = arr[arr.length - 1];
	let tens = arr[arr.length - 2];
	let hunds = arr[arr.length - 3];
	let thous = arr[arr.length - 4];
	if (thous) {
		out += "onethousand";
	}
	if (hunds) {
		switch (parseInt(hunds)) {
			case 1: out += "onehundred"
		}
	}
	return out.length;
}