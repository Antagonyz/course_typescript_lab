/* 
	Реализуйте функцию removeFirstOccurrence(arr, value), которая удаляет первое вхождение указанного элемента из массива
*/

export function removeFirstOccurrence (arr, value) {
  const index = arr.indexOf(value);
	if (index !== -1) arr.splice(index, 1);
  return arr
}
