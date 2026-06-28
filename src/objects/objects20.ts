/* 
	Создайте функцию, которая собирает объект из двух массивов: массива ключей и массива значений.
*/

export function fromArrays<T, K extends string>(keys: K[], values: T[]): Record<K, T> {
	const result = {} as Record<K, T>;
	const length = Math.min(keys.length, values.length);
	for (let i = 0; i < length; i++) {
		result[keys[i]] = values[i];
	}
	return result;
}

