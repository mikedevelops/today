/**
 * Add a leading zero to a single digit integer
 * @param {number} i
 * @returns {string}
 */
export const leadingZero = i => (i < 10 ? `0${i}` : i.toString());
