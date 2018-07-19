function findLongestWordLength(str) {

	sentenceArray = str.split(' ')
	let wordSize = 0;

	for (let i = 0; i < sentenceArray.length; i++) {
		if (sentenceArray[i].length > wordSize) {
			wordSize = sentenceArray[i].length;
		}
	}
	return wordSize;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWordLength("May the force be with you"));

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));