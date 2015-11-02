(function() {
  'use strict';

  angular
    .module('workshop')
    // in HTML  ws-directive
    .directive('wsControllerDirective', wsControllerDirective);

  function wsControllerDirective() {
    return {
      templateUrl: './samples/ws.controller.directive.tpl.html',
      controller: DirectiveController,
      controllerAs: 'controller'
    };
  }

  function DirectiveController() {
    var vm = this;

    vm.date = new Date();

  }

}());
