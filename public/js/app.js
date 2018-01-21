angular
  .module('app', [])

  .service('FoursquareService', function Foursquare($http, $q) {
    'ngInject';

    this.get = (searchPlace, searchCity) => {
      let defer = $q.defer();
      $http.get(`/search`, { params: searchPlace, searchCity }).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error);
      })
      return defer.promise;
    }
  })
  .component('home', {

    templateUrl: 'js/placesList.html',
  
    controller: function (FoursquareService, $log) {
  
      this.$onInit = () => {
        $log.info('search component init');
        this.places;
      };
  
      this.getPlace = (searchPlace, searchCity) => {
        FoursquareService.get({searchPlace, searchCity}).then((data) => {
          this.places = data.response.groups[0].items;
        }).catch((error) => {
          this.error = error;
        });
      }
    }
  });