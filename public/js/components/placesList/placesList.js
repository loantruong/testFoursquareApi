angular.module('app').component('home', {

  templateUrl: 'public/js/components/placesList/placesList.html',

  bindings: {
    place: '<'
  },

  controller: function ($log) {
    'ngInject';

    this.$onInit = () => {
      $log.info('home component init');
    };
  }
});