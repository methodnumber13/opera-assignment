export const hexToDec = (hex = '') => {
  let res = parseInt(hex.toString(16));
  return Number.isNaN(res) ? 0 : res;
};

export const decToHex = (dec = '') => {
  return dec.toString(16);
};
