(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

    // ng-strict-di
    WorkshopController.$inject = ['$interpolate', 'attendeesFactory']; // für uglifying/minification

    function WorkshopController($interpolate, attendeesFactory) {
      // this -> Zugriff auf den Scope
      // in der view dann "... as workshop"
      //   <section class="sample" ng-controller="workshopController as workshop">
      // und diesen Prefix verwenden:
      //   {{workshop.greeting}}
      // Vorteile:
      // - keine Abhängigkeit von $Scope
      // - in der view Möglichkeit der Unterscheidung bei mehreren Controllern
      this.greeting = 'Hallo Welt';
      this.name = 'Gregor';

      this.title = "AngularJS"

      this.expression = $interpolate('{{ name | uppercase }}');
      this.uppercasedName = this.expression({ name: this.name });

      this.attendees = attendeesFactory.getAll();
    }
}());
