const mongoose = require('mongoose');
const logger = require('../logger');

/**
 * @function initMongodb
 * @param {{ url: string }} param0
 */
function initMongodb({ url }) {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info('Mongodb connected'))
    .catch((err) => logger.error(err));
}

module.exports = {
  initMongodb,
};
