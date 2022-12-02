const fs = require('fs');
const readline = require('readline');

const inputLocation = './input.txt';

const rl = readline.createInterface({
	input: fs.createReadStream(inputLocation),
	crlfDelay: Infinity,
});

let currentTotal = 0;
let highest = 0;
let secondHighest = 0;
let thirdHighest = 0;

rl.on('line', (line) => {
	if (line) {
		currentTotal += parseInt(line);
	} else {
		if (currentTotal > highest) {
			thirdHighest = secondHighest;
			secondHighest = highest;
			highest = currentTotal;
		} else if (currentTotal > secondHighest) {
			thirdHighest = secondHighest;
			secondHighest = currentTotal;
		} else if (currentTotal > thirdHighest) {
			thirdHighest = currentTotal;
		}

		currentTotal = 0;
	}

	console.log(`highest: ${highest}, secondHighest: ${secondHighest}, thirdHighest: ${thirdHighest}, total: ${highest + secondHighest + thirdHighest}`);
});
