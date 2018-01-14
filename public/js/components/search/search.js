angular
  .module('app')
  .component('search', {
    templateUrl: 'public/js/components/search/search.html',

    controller: function ($log, foursquareService, $filter) {

      this.$onInit = () => {
        $log.info('search component init');
      };

      this.getPlace = (place) => {
        foursquareService.get(place).$promise.then((result) => {
         return this.places = result.data.response.groups[0].items;
        }).catch((error) => {
          this.error = error;
        });
      };

    }
  });
