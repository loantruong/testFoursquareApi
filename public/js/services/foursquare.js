const API_URL = 'https://api.foursquare.com/v2/venues/explore';
const requestParms = {
  clientId: "XCTAPGOML35VTS5NZG2LJL3BTZ5L5BD2SL0RHTA4PLDHDEMG",
  clientSecret: "UTIRGIZ5LEC0RXVUHGOHKULYA0HUGYWZ0VPNU2X5PN54CUYN",
  version: '20170801'
}

angular
  .module('app')
  .factory('foursquareService', function($resource) {
    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource(API_URL, {
        action: 'explore',
        client_id: requestParms.clientId,
        client_secret: requestParms.clientSecret,
        v: requestParms.version,
        venuePhotos: '1',
        callback: 'JSON_CALLBACK'
    }, {
        get: {
            method: 'JSONP'
        }
    })
});
