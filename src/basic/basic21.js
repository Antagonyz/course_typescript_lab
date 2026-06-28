/* 	
	Напишите функцию capitalize_words(sentence), которая принимает предложение и возвращает его, преобразовав первую букву каждого слова в заглавную.
	Подсказка: разбить предложение на слова можно с помощью метода split, соединить слова с помощью метода join. Для обработки массива слов используйте цикл.
*/

export function capitalize_words(sentence) {
	return sentence
		.split(" ")
		.map(word => word ? word[0].toUpperCase() + word.slice(1) : word)
		.join(" ");
}
