function factorial(num) {
	if (num < 1) {
		return 1;
	} else {
		answer = num * (factorial(num - 1));
		return answer;
	}
};
console.log(factorial(10));

