// Check if a string ends with the given target string
// Won't be using the .endsWith() method

function confirmEnding(str, target) {

	if (str.substring(str.length-target.length) === target) {
		return true;
	} 
	return false;



	// return str.substring(str.length-target.length);
}

console.log(confirmEnding("Bastian", "tian"));

console.log(confirmEnding("Congratulation", "one"));