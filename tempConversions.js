function convertToF(celsius) {
	var fahrenheit = celsius * 1.8 + 32;
	return fahrenheit;
};

console.log(convertToF(-10));

function convertToC(fahrenheit) {
	var celsius = (fahrenheit - 32) / 1.8;
	return celsius;
};

console.log(convertToC(32));