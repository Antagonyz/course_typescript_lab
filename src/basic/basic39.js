/* 
	Реализовать функцию all, которая принимает массив и функцию-callback. Callback принимает один элемент массива и возвращает true или false. Функция all должна вернуть true, если все элементы массива вернули true в callback. Нельзя использовать метод массивов every.
*/

export function all(arr, callback) {
  for (const item of arr) {
    if (!callback(item)) return false;
  }
  return true;
}

