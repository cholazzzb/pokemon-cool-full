import qs from 'query-string';

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

export function queryStringFallback<T>(
  query: Record<string, unknown>,
  fallback: T,
): T {
  // If the input query object is empty, return the fallback immediately.
  if (Object.keys(query).length === 0) {
    return fallback;
  }

  const result: Record<string, unknown> = {};

  for (const key in fallback) {
    // Ensure we only process own properties of the fallback object.
    if (Object.prototype.hasOwnProperty.call(fallback, key)) {
      const queryValue = query[key];

      if (queryValue !== undefined && queryValue !== null) {
        if (typeof queryValue === 'string') {
          const parsedPart = qs.parse(`val=${queryValue}`, {
            parseNumbers: true,
            parseBooleans: true,
            arrayFormat: 'bracket',
          });
          result[key] =
            parsedPart.val !== undefined ? parsedPart.val : queryValue;
        } else {
          // If the query value is not a string (e.g., already a number, boolean, object), use it directly.
          result[key] = queryValue;
        }
      } else {
        result[key] = fallback[key];
      }
    }
  }

  return result as T;
}
