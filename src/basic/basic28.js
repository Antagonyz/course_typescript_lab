/* 
	Реализуйте функцию removeDuplicates(arr), которая удаляет повторяющиеся элементы из массива с помощью методов indexOf и push.
*/

export function removeDuplicates(arr) {
  const result = [];
  for (const item of arr) {
    if (result.indexOf(item) === -1) result.push(item);
  }
  return result;
}
