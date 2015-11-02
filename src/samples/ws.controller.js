(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

    function WorkshopController() {
      // this -> Zugriff auf den Scope
      // in der view dann "... as workshop"
      //   <section class="sample" ng-controller="workshopController as workshop">
      // und diesen Prefix verwenden:
      //   {{workshop.greeting}}
      // Vorteile:
      // - keine Abhängigkeit von $Scope
      // - in der view Möglichkeit der Unterscheidung bei mehreren Controllern
      this.greeting = 'Hallo Welt';
      this.attendees = ['Christoph', 'Gregor', 'Philipp', 'Ronald', 'Susann'];
    }
}());
