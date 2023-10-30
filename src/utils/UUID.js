const HEX_CHARS = "0123456789abcdef".split("");

/**
 * @param {number} min
 * @param {number} max
 * @returns {number} Random integer between min and max (exclusive)
 * */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * @param {number} length Length of the string to be generated
 * @returns {string} Random hexadecimal string
 * */
function getRandomHexString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += HEX_CHARS[getRandomInt(0, HEX_CHARS.length)];
  }
  return result;
}

/**
 * @returns {string} Random RFC 4122 version 4 UUID
 * */
function newUUID() {
  return `${getRandomHexString(8)}-${getRandomHexString(
    4,
  )}-${getRandomHexString(4)}-${getRandomHexString(4)}-${getRandomHexString(
    12,
  )}`;
}

module.exports = newUUID;
