function collatz(num) {
	let arr = [num];
	while (num > 1) {
		if (num % 2 === 0) {
			num = num/2;
		} else {
			num = (3 * num) + 1;
		}
		arr.push(num);
	}
	return arr;
}

let len = 0;
let ind = 0;

for (let i = 1; 1 < 1000000; i++) {
	let l = collatz(i).length;
	if (l > len) {
		len = l;
		ind = i;
		console.log(i + ": " + l);
	}
}

console.log(ind);