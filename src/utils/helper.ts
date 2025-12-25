export const buildQueryString = (params: any): string => {
  const query = new URLSearchParams(params);
  return query.toString();
};
