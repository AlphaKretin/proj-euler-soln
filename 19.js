let day = 1;
let month = 1;
let year = 1901;
let weekday = 2; //tues 
let count = 0;

while (day < 31 || month < 12 || year < 2000) {
	if (weekday === 0 && day === 1) { //sunday
		count++;
		console.log(day + "-" + month + "-" + year);
	}
	weekday++;
	if (weekday > 6) {
		weekday = 0;
	}
	let thresh;
	switch (month) {
		case 1: thresh = 31; break;
		case 2: 
			if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
				thresh = 29;
			} else {
				thresh = 28;
			}
			break;
		case 3: thresh = 31; break;
		case 4: thresh = 30; break;
		case 5: thresh = 31; break;
		case 6: thresh = 30; break;
		case 7: thresh = 31; break;
		case 8: thresh = 31; break;
		case 9: thresh = 30; break;
		case 10: thresh = 31; break;
		case 11: thresh = 30; break;
		case 12: thresh = 31; break;
	}
	day++;
	if (day > thresh) {
		day = 1;
		month++;
		if (month > 12) {
			month = 1;
			year++;
		}
	}
}
console.log(count);