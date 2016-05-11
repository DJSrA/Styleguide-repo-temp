'use strict';

/**
 * @ngdoc function
 * @name gettingFancyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gettingFancyApp
 */
angular.module('gettingFancyApp')
  .directive('testDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/test.html',
      controller: 'TestCtrl',
      scope: {},
      link: function(scope, elem, attrs) {
      }
    };
  });