(function() {
  'use strict';

  angular
    .module('workshop')
    .factory('attendeesFactory', attendeesFactory);

  function attendeesFactory() {
    return {

      getAll: function() {
        return ['Ronald', 'Susann', 'Christoph', 'Philipp'];
      }

    }
  }

}());
