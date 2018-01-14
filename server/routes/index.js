const express = require('express');
const path = require('path');
const fs = require('fs');
const FoursquareController = require('../controllers/foursquare');

module.exports = (app) => {
  const foursquareController = new FoursquareController;
  const basename = path.basename(__filename);
  const router = express.Router();

  fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    else {
      files.forEach((file) => {
        if (file !== basename) {
          require('./' + file)(router);
        }
      });
    }
  });

  router.get('/', (req, res) => {
    foursquareController.findAll(req, res);
  });


  return router;
};
