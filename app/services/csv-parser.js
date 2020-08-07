const csvToJson = require('csvtojson');

/**
 * @function parseCSV
 * @param {string} path
 */
async function parseCSV(path) {
  const data = await csvToJson().fromFile(path);
  return data;
}

module.exports = {
  parseCSV,
};
