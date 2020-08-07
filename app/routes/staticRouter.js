const express = require('express');
const multer = require('multer');
const path = require('path');
const staticController = require('../controllers/staticController');
const csvController = require('../controllers/csv');

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve('./uploads'));
  },

  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
  },
});

const upload = multer({ storage });

router.get('/', staticController.renderStaticPage('home'));
router.get('/list', csvController.renderAllUsers);

router.post('/api/upload-csv', upload.single('excel-file'), csvController.uploadCsvFile);

module.exports = router;
