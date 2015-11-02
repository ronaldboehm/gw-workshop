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
        // one way binding
        title: '@',
        // two way binding
        name: '=',
        greet: '&'
      }
    }

  }

}());
