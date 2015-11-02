(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

    function WorkshopController($scope) {
      $scope.greeting = 'Hallo Welt';
      $scope.attendees = ['Christoph', 'Gregor', 'Philipp', 'Ronald', 'Susann'];      
    }
}());
