var express = require('express');
var router = express.Router();
const controller = require('../controllers/urls');

/* GET home page. */
router.get('/', controller.urlsController.getAllData);

// encode URL
router.post('/encode', controller.urlsController.createShortUrl);

// decode URL
router.get('/decode', controller.urlsController.getByShortUrl);

// get url statistics
router.get('/statistic/:urlPath', controller.urlsController.getStatistics);

module.exports = router;
