angular
  .module('app')
  .component('search', {
    templateUrl: 'public/js/components/search/search.html',

    controller: function($log) {

      this.$onInit = () => {
        $log.info('search component init');
      };
      
    }
  });
