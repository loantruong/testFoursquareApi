angular
  .module('app', [])

  .service('FoursquareService', function Foursquare($http, $q) {
    'ngInject';

    this.get = (searchPlace, searchCity) => {
      let defer = $q.defer();
      let query = {
        searchPlace,
        searchCity
      }
      return $http.get(`/search`, {params: query}).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error);
      })
    }
  })