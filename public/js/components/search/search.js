angular
  .module('app')
  .component('search', {
    templateUrl: 'js/components/search/search.html',

    controller: function ($log, FoursquareService, $filter) {

      this.$onInit = () => {
        $log.info('search component init');
      };

      this.getPlace = (searchPlace, searchCity) => {
        FoursquareService.get(searchPlace, searchCity).then(result => {
          if (result.response.groups) {
            this.places = result.response.groups[0].items;
          } else {
            this.places = [];
          }
        });
      }
    }
  });