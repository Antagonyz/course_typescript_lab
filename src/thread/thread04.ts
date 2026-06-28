/* 
Допишите функцию асинхронного запроса, чтобы она обрабатывала ошибки и возвращала fallback-значение.
*/

export async function fetchWithFallback(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    return await response.text();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return `Error: ${message}`;
  }
}
