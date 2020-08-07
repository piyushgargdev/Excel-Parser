const express = require('express');

/**
 * @function renderStaticPage
 * @param { string } page
 */
function renderStaticPage(page) {
  /**
   * @function handler
   * @param { express.Request } req
   * @param { express.Response } res
   */
  const handler = (req, res) => res.render(page);
  return handler;
}

module.exports = {
  renderStaticPage,
};
