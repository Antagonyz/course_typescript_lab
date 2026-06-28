/* 
	РРеализуйте функцию extractUniqueValues(arr1, arr2), которая берет уникальные элементы первого массива и помещает их в конец второго массива с помощью методов indexOf и push.
*/

export function extractUniqueValues(arr1, arr2) {
  for (const item of arr1) {
    if (arr2.indexOf(item) === -1) arr2.push(item);
  }
  return arr2;
}

