(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

    // ng-strict-di
    WorkshopController.$inject = ['$interpolate', '$scope', 'attendeesFactory', 'attendeesService']; // für uglifying/minification

    function WorkshopController($interpolate, $scope, attendeesFactory, attendeesService) {
      var vm = this; // wegen Callback-Funktion greet() unten

      // this -> Zugriff auf den Scope
      // in der view dann "... as workshop"
      //   <section class="sample" ng-controller="workshopController as workshop">
      // und diesen Prefix verwenden:
      //   {{workshop.greeting}}
      // Vorteile:
      // - keine Abhängigkeit von $Scope
      // - in der view Möglichkeit der Unterscheidung bei mehreren Controllern
      vm.greeting = 'Hallo Welt';
      vm.name = 'Gregor';

      vm.title = "AngularJS";

      vm.expression = $interpolate('{{ name | uppercase }}');
      vm.uppercasedName = vm.expression({ name: vm.name });
      $scope.$watch(
        // watch function
        function() { return vm.name; },
        // listener
        function(newValue, oldValue) {
          vm.uppercasedName = vm.expression({ name: vm.name });
        }
      );
      // would not update

      vm.attendees = attendeesFactory.getAll();
      vm.firstAttendee = attendeesService.getFirst();

      vm.greet = greet;

      function greet() {
        alert('Hello ' + vm.name);
      }

      setTimeout(function(){
        $scope.$apply(function(){
          vm.name = 'Matthias';
        });
      }, 3000);
    }
}());
