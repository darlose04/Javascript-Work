function reverseString(string) {
	return string.split('').reverse().join('');
};

console.log(reverseString("Hello World!"));

function reverseString2(string) {
	var strArr = string.split('');
	var reverseStr = [];
	// var last = strArr.length - 1;

	for (var i = strArr.length - 1; i >= 0; i--) {
		reverseStr.push(strArr[i]);
	}

	// return strArr.slice(-1);
	return reverseStr.join('');
	
};

console.log(reverseString2("hello?"));