/* 
	Напишите функцию matrixMultiplication(A, B), выполняющую перемножение матриц А и В.
*/

export function matrixMultiplication(A, B) {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < B.length; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result
}
