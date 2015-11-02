(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

    function WorkshopController($scope) {
      $scope.test = 'Hallo Welt';
    }
}());
