angular
  .module('app')
  .component('search', {
    templateUrl: 'public/js/components/search/search.html',

    controller: function($log, foursquareService) {

      this.$onInit = () => {
        $log.info('search component init');
      };

    }
  });
