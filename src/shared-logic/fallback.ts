export function objFallback<T>(obj: Record<string, unknown>, fallback: T): T {
  if (Object.keys(obj).length === 0) {
    return fallback;
  }

  const result: Record<string, unknown> = {};

  for (const key in fallback) {
    // Check if the fallback object actually has the 'key' as its own property.
    // This is used for preventing the inherited properties from the prototype chain to be included.
    if (Object.prototype.hasOwnProperty.call(fallback, key)) {
      if (obj[key] !== undefined && obj[key] !== null) {
        result[key] = obj[key];
      } else {
        result[key] = fallback[key];
      }
    }
  }

  return result as T;
}
