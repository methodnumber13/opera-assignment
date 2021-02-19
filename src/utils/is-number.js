export const isNumber = number => (number instanceof Number || typeof number === 'number') && !isNaN(number);
