
function duplicateCount(text) {
	//...
	let freqCount;
	let frequency = {};
	let sum = 0;

	if (text.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < text.length; i++) {
			let character = text[i];
			if (!isNaN(character) || /[a-zA-Z]/.test(character)) {
				character = character.toLowerCase();
				if (frequency[character] === undefined) {
					frequency[character] = 0;
				} else {
					frequency[character]++;
				}
			}
		}
      
		for (let entry in frequency) {
			if (frequency[entry] > 1) {
				frequency[entry] = 1;
			}
			freqCount = Object.values(frequency).map(value => value * 1)
				.reduce((accumulator, currentValue) => accumulator + currentValue);
		}
	}
  
	return freqCount;

}
