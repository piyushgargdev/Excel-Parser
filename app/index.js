const express = require('express');
const { initMiddlewares } = require('./middlewares');
const { initRoutes } = require('./routes');
const { initMongodb } = require('./services/mongodb');
const config = require('./config');

/**
 * @class App
 */
class App {

  /**
   * @type { express.Application }
   */
  #_app;

  /**
   * @param {express.Application} app 
   */
  constructor(app) {
    this.#_app = app;
  }

  /**
   * @method callback
   * @returns { express.Application }
   */
  callback() {
    return this.#_app;
  }

}

/**
 * @function createServer
 * @returns { App }
 */
function createServer() {
  const app = express();
  const server = new App(app);

  initMongodb({ url: config.mongodbUrl })
  initMiddlewares(app);
  initRoutes(app);

  return server;
}

module.exports = {
  createServer,
}