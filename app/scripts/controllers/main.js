'use strict';

/**
 * @ngdoc function
 * @name gettingFancyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gettingFancyApp
 */
angular.module('gettingFancyApp')
  .directive('consentsDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/consents-template.html'
    };
  })
  .directive('samlDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/saml-template.html'
    };
  })
  .directive('accessDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/access-template.html'
    };
  })  
  .directive('detailsDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/details-template.html'
    };
  })

  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.services = [{
      'name' : 'KALTURA',
      'favorite' : true,
      'purpose' : 'Kaltura is a video learning portal for continuing education and employee onboarding',
      'description' : 'We developed a global conferencing cloud that synchronizes voice, video, and data. Web conferencing for everyone became a reality.',
      'logo' : '../images/test-img.png'
    },
    {
      'name' : 'WEBEX',
      'favorite' : false,
      'purpose' : 'WebEx is a terrible substitue service for so many reasons!',
      'description' : 'We developed a global failing cloud that fails voice, video, and data. Web failing for everyone became more of a reality.',
      'logo' : '../images/test-img.png'
    }];

    $scope.tags = [
      {
        "id": 1,
        "name": "sample string 2",
        "displayName": "COLLABORATIVE",
        "spInstanceId": "96ea2328-2865-4c57-92eb-e5b0ad7235c5",
        "value": "sample string 5"
      },
      {
        "id": 2,
        "name": "sample string 2",
        "displayName": "VIDEO",
        "spInstanceId": "96ea2328-2865-4c57-92eb-e5b0ad7235c5",
        "value": "sample string 5"
      },
      {
        "id": 3,
        "name": "sample string 2",
        "displayName": "HR",
        "spInstanceId": "96ea2328-2865-4c57-92eb-e5b0ad7235c5",
        "value": "sample string 5"
      }
    ];

    $scope.currentTab = 
    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

    $scope.tabs = [{
        title: 'CONSENTS',
        url: '/templates/consents-template.html'
    }, {
        title: 'ACCESS',
        url: '/templates/access-template.html'
    }, {
        title: 'DETAILS',
        url: '/templates/details-template.html'
    }, {
        title: 'SAML',
        url: '/templates/saml-template.html'
    }, {
        title: 'FIELD MAP',
        url: '/templates/field-map-template.html'
    }];

  }]);
