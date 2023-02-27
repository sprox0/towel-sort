
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
		if (matrix==null) {
      return [];
    }

		for (i = 0; i < matrix.length; i++) {
			if (i%2 == 0) {
				let j = matrix[i].length;

				for (j = 0; j < matrix[i].length; j++) {
    				arr.push(matrix[i][j]);	
  				}
			}
			else {
				for (j =  matrix[i].length-1; 0 <=j; j--) {
    			arr.push(matrix[i][j]);
  				}
  			}
		}
		return arr;
}
