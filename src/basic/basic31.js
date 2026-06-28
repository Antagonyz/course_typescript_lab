/* 
	Реализуйте функцию transposeMatrix(matrix), которая транспонирует матрицу (меняет строки и столбцы местами).
*/

export function transposeMatrix(matrix) {	
  const result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    result[j] = [];
    for (let i = 0; i < matrix.length; i++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
