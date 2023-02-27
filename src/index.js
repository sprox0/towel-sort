
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
		if (matrix == null) {		
      return [];
    }

	for (i = 0; i < matrix.length; i++) {
		if (i % 2 === 0) {
			let innerArr = matrix[i].length;
			for (innerArr = 0; innerArr < matrix[i].length; innerArr++) {
				arr.push(matrix[i][innerArr]);	
			}
		} else {
			for (innerArr = matrix[i].length-1; 0 <= innerArr; innerArr--) {
			arr.push(matrix[i][innerArr]);
			}
		}	
	}
		return arr;
}
