(function() {
  'use strict';

  angular
    .module('workshop')
    .service('asyncService', asyncService);

    asyncService.$inject = ['$q', '$timeout'];
    function asyncService($q, $timeout) {

      this.doAsync = doAsync;

      function doAsync(shouldResolve) {

        var defer = $q.defer();

        $timeout(function() {
          if (shouldResolve)
            defer.resolve('Successfully resolved');
          else {
            defer.reject('There was a problem preceding your request');
          }
        }, 1000);

        return defer.promise;
      }
    }


  }());
