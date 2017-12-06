function triNum(ind) {
	let sum = 0;
	for (let i = 1; i <= ind; i++) {
		sum += i;
	}
	return sum;
}

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

let i = 1;
while (true) {
	let facts = getFactors(triNum(i)).length
	if (facts > 500) {
		console.log(triNum(i));
		return;
	}
	i++;
}