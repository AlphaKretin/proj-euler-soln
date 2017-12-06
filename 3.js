let input = 600851475143;
let factor = 0;

function getFactors(num) {
	const isEven = num % 2 === 0;
	let inc = isEven ? 1 : 2;
	let factors = [1, num];

	for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
		if (num % curFactor !== 0) {
			continue;
		}
		factors.push(curFactor);
		let compliment = num / curFactor;
		if (compliment !== curFactor) {
			factors.push(compliment);
		}
	}

	return factors;
}

function isPrime(num) {
	for (let i = 2; i < (Math.sqrt(num) + 1); i++) {
		if (num % i === 0) {
			return false;
		} 
	}
	return num !== 1;
}

let factors = getFactors(input);

for (let i = 1; i < input; i++) {
	if (factors.indexOf(i) > -1 && isPrime(i) && i > factor) {
		factor = i;
		console.log(i)
	}
}
console.log(factor);