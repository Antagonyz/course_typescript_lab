/* 
Доделайте функцию, которая использует andThen для последовательной обработки: парсит число, затем проверяет, что оно положительное. Если число не положительное, то возвращает ошибку "Number must be positive".
*/

import { err, ok, type Result } from 'neverthrow'
import { parseNumber } from './thread20'

export const parsePositiveNumber = (input: string): Result<number, string> => {
  return parseNumber(input).andThen(value => {
    return value > 0 ? ok(value) : err('Number must be positive')
  })
}
