export const convertURLQueryToString = (
  URLQuery: string | Array<string> | undefined,
): string => {
  return Array.isArray(URLQuery) ? URLQuery[0] : URLQuery ?? '';
};
