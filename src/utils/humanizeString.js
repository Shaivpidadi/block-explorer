export const humanizeString = (string) => {
  console.log({ string });
  const str = string.split("(")[0];

  return str.charAt(0).toUpperCase() + str.slice(1);
};