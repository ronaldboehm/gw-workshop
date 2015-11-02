(function() {
  'use strict';

  angular
    .module('workshop')
    // in HTML  ws-directive
    .directive('wsDirective', wsDirective);

  function wsDirective() {
    return {
      templateUrl: './samples/ws.directive.tpl.html',
      transclude: true,
      // eigener scope (isolated scope):
      scope: {
        // one way binding / text
        title: '@',
        // two way binding
        name: '=',
        // one way binding / command/action
        greet: '&shout' // der Name beim Einbinden der Direktive in HTML
      }
    }

  }

}());
