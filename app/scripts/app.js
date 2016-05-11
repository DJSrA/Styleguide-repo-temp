'use strict';

/**
 * @ngdoc overview
 * @name gettingFancyApp
 * @description
 * # gettingFancyApp
 *
 * Main module of the application.
 */
angular
  .module('gettingFancyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('tabs', function($http) {
    var promise = null;

    return function() {
      if (promise) {
        // If we've already asked for this data once,
        // return the promise that already exists.
        return promise;
      } else {
        promise = $http.get('controllers/tabs.json');
        return promise;
      }
    };
  });
