angular.module('app').component('home', {

  templateUrl: 'js/components/placesList/placesList.html',

  controller: function ($log) {
    'ngInject';

    this.$onInit = () => {
      $log.info('home component init');
    };
  }
});