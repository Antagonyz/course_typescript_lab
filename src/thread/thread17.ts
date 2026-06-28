/* 
Дописать функцию fetchUserWithRetry, которая пытается получить пользователя 3 раза перед тем как сдаться.
*/

import { fetchUser, type User } from "./promises";

export async function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fetchUser(id);
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts) {
        break;
      }
    }
  }

  if (lastError instanceof Error) {
    throw lastError;
  }
  throw new Error('Failed to fetch user');
}
