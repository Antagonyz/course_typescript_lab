/* 
	Напишите функцию count_vowels(s), которая подсчитывает количество гласных букв в строке s (гласные буквы русского алфавита: 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'). Функция должна использовать цикл while.
	Подсказка: используйте метод includes() для проверки наличия символа в массиве и метод toLowerCase() для приведения символа к нижнему регистру.
*/

export function count_vowels(s) {
  const vowels = "аеёиоуыэюя";
  let count = 0;
  let i = 0;
  while (i < s.length) {
    if (vowels.includes(s[i].toLowerCase())) count++;
    i++;
  }
  return count;
}

