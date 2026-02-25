'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const parts = sourceString.split(';');

  for (const item of parts) {
    const trimmedLine = item.trim();

    if (!trimmedLine) {
      continue;
    }

    const colonIndex = trimmedLine.indexOf(':');
    const key = trimmedLine.slice(0, colonIndex).trim();
    const value = trimmedLine.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
