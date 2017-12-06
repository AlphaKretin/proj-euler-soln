for (let a = 1; a < 1000; a++) {
	for (let b = 1; b < 1000; b++) {
		for (let c = 1; c < 1000; c++) {
			if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2) && a + b + c === 1000) {
				console.log(a + " " + b + " " + c);
				console.log(a * b * c);
				return;
			} 
		}
	}
}