const express = require('express');
var request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();
const port = process.env.PORT || 3002;

// foursquare api
const CLIENT_ID = 'XCTAPGOML35VTS5NZG2LJL3BTZ5L5BD2SL0RHTA4PLDHDEMG';
const CLIENT_SECRET = 'UTIRGIZ5LEC0RXVUHGOHKULYA0HUGYWZ0VPNU2X5PN54CUYN';

/*
let foursquare = (require('foursquarevenues'))('CLIENTIDKEY', 'CLIENTSECRETKEY', '');
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));

app.get('/', function (req, res, next) {
  res.render('index');
});


function foursquare(place, city, expressResponse) {
  const request = require('request');

  request({
    url: 'https://api.foursquare.com/v2/venues/explore',
    method: 'GET',
    qs: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      ll: '40.7243,-74.0018',
      query: place,
      near: city,
      v: '20170801',
      limit: 10
    }
  }, function (err, res, body) {
    if (err) {
      return expressResponse.json(err);
    } else {
      return expressResponse.json(JSON.parse(body));
    }
  });

}

app.get('/search', function (req, res, next) {
  let searchCity = req.query.searchCity;
  let searchPlace = req.query.searchPlace;

  foursquare(searchPlace, searchCity, res);
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// expose app           
exports = module.exports = app;