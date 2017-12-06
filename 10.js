function isPrime(num) {
	for (let i = 2; i < (Math.sqrt(num) + 1); i++) {
		if (num % i === 0) {
			return false;
		} 
	}
	return num !== 1;
}
let sum = 0;
for (let i = 1; i < 10; i++) {
	if (isPrime(i)) {
		sum += i;
		console.log(i);
	}
}
console.log(sum);