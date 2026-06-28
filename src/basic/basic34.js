/* 
	Напишите функцию isSymmetric(matrix), проверяющую, симметрична ли матрица относительно главной диагонали. Подсказка: главная диагональ матрицы  — это диагональ, проходящая по элементам матрицы, у которых номер строки и номер столбца одинаковы.
*/

export function isSymmetric(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] !== matrix[j][i]) return false;
    }
  }
  return true;
}


