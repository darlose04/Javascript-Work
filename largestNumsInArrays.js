function largestOfArrays(arr) {

	let newArray = [];
	var largestNum = 0;
	let n = 0;

	while (n < arr.length) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				if (arr[n][j] > largestNum) {
					largestNum = arr[n][j];
				} else if (largestNum == 0 && arr[n][j] < 0) {
					if (arr[n][j] < largestNum) {
						largestNum = arr[n][j];
					}
				}
			}
		}
		newArray.push(largestNum);
		largestNum = 0;
		n++;
	}
	return newArray;
}

console.log(largestOfArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestOfArrays([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

console.log(largestOfArrays([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestOfArrays([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

console.log(largestOfArrays([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10], [1000, 1001, 857, 1], [1000000, 1001, 857, 1]]));