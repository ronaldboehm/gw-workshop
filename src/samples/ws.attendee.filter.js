(function() {
  'use strict';

  angular
    .module('workshop')
    .filter('startsWith', startsWith);

  function startsWith() {
    return function(list, expression) {
      if (expression == undefined)
        return list;

      return list.filter(function(entry){
        return entry.toLowerCase().substring(0, expression.length) === expression.toLowerCase();
      });
    };
  }

}());
