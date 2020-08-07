const express = require('express');
const path = require('path');

/**
 * @function initMiddlewares
 * @param {express.Application} app
 */
function initMiddlewares(app) {
  app.use(express.json());
  app.use(express.static(path.resolve('./public')));

  app.set('views', path.resolve('./views'));
  app.set('view engine', 'ejs');

  app.use(express.static(path.resolve('./public')));
}

module.exports = {
  initMiddlewares,
};
