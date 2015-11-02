(function() {
  'use strict';

  angular
    .module('workshop')
    // in HTML  ws-directive
    .directive('wsDirective', wsDirective);

  function wsDirective() {
    return {
      template: '<p class="lead"> {{ workshop.title }} </p>'
    }

  }

}());
