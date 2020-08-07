const http = require('http');
const app = require('./app');
const logger = require('./app/logger');

function init() {
  try {
    const server = http.createServer(app.createServer().callback());
    const PORT = process.env.PORT || 8080;

    server.listen(PORT, () => logger.info(`Server started at PORT ${PORT}`));
  } catch (error) {
    logger.error(error);
  }
}

init();
