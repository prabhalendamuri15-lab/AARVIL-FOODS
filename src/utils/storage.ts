/**
 * Safe local storage manager with type safety, error boundaries, and fallbacks.
 * IMPORTANT: This is for client-side prototype persistence and should not be used as a secure database.
 */

export const storage = {
  get: <T>(key: string, fallback: T): T => {
    if (typeof window === 'undefined') return fallback;
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : fallback;
    } catch (error) {
      console.warn(`[Storage] Failed to read key "${key}":`, error);
      return fallback;
    }
  },

  set: <T>(key: string, value: T): boolean => {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`[Storage] Failed to write key "${key}":`, error);
      return false;
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn(`[Storage] Failed to remove key "${key}":`, error);
    }
  }
};
