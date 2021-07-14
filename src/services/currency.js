export const convertToBRL = number =>
  `€${number.toFixed(2).replace(/[.]/g, ",")}`;
