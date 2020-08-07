const express = require('express');
const csvParser = require('../services/csv-parser');
const bulkUpload = require('../services/bulk-upload');

/**
 * @function uploadCsvFile
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function uploadCsvFile(req, res) {
  const parsed = await csvParser.parseCSV(req.file.path);
  Promise.all(bulkUpload.saveToDb(parsed));
  return res.redirect('/');
}

/**
 * @function renderAllUsers
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function renderAllUsers(req, res) {
  const users = await bulkUpload.getAllUsers();
  res.render('list', {
    data: users,
  });
}

module.exports = {
  uploadCsvFile,
  renderAllUsers,
};
