/* 
	Реализуйте функцию reverse_list(arr), которая переворачивает порядок элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function reverse_list(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) result.push(arr[i]);
  return result;
}

