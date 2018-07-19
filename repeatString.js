function repeatString(str, num) {
	let arr = [];
	let iterate = 0;

	if (num < 0) {
		return "";
	}

	while (iterate < num) {
		arr.push(str);
		iterate++;
	}
	return arr.join('');
}

console.log(repeatString("abc", 3));

console.log(repeatString("bird", 5));

console.log(repeatString("*", 8));

console.log("what", -2);