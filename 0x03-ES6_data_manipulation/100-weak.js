/**
 * Adds an entry to the WeakMap if the key does not already exist,
 * or increments the value of an existing entry. If the value of an
 * existing entry reaches 5 or more, throws an Error.
 * @param {string} endpoint - The endpoint to check.
 */
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // Check if endpoint is alredy in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
