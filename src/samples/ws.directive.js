(function() {
  'use strict';

  angular
    .module('workshop')
    // in HTML  ws-directive
    .directive('wsDirective', wsDirective);

  function wsDirective() {
    return {
      templateUrl: './samples/ws.directive.tpl.html',
      transclude: true
    }

  }

}());
