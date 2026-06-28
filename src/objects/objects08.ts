/* 
	Реализовать функцию sum<T extends Summable>(a: T[]): T, возвращающую сумму элементов в массиве. Допускается использовать приведение типа Summable к T
*/

export type Summable = {
	sum: (other: Summable) => Summable
}

export function sum<T extends Summable>(a: T[]): T {
	if (a.length === 0) {
		throw new Error('Array must not be empty');
	}
	let total = a[0];
	for (let i = 1; i < a.length; i++) {
		total = total.sum(a[i]) as T;
	}
	return total;
}
