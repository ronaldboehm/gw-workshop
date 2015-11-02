(function() {
  'use strict';

  angular
    .module('workshop')
    .service('attendeesService', AttendeesService);

  AttendeesService.$inject = ['attendeesFactory'];

  function AttendeesService(attendeesFactory) {

    this.getFirst = attendeesFactory.getAll()[0];

  }

}());
