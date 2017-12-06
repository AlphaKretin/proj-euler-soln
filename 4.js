let prod = 0;

function isPalindrome(num) {
	let str = num.toString();
	let arr = [];
	let tmp = str.split("");
	tmp.forEach(function(key, index) {
		arr.unshift(tmp[index]);
	});
	return str === arr.join("");
}

for (let i = 100; i < 1000; i++) {
	for (let j = 100; j < 1000; j++) {
		let pro = i*j;
		if (pro > prod && isPalindrome(pro)) {
			prod = pro;
			console.log(pro);
		}
	}
}
console.log(prod);