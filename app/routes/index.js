const express = require('express');
const staticRouter = require('./staticRouter');

/**
 * @function initRoutes
 * @param { express.Application } app
 */
function initRoutes(app) {
  app.use('/', staticRouter);
}

module.exports = {
  initRoutes,
};
