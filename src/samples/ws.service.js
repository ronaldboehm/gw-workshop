(function() {
  'use strict';

  angular
    .module('workshop')
    .service('attendeesService', AttendeesService);

  AttendeesService.$inject = ['attendeesFactory'];

  function AttendeesService(attendeesFactory) {

    this.getFirst = getFirst;

    function getFirst() {
      return attendeesFactory.getAll()[0];
    }

  }

}());
