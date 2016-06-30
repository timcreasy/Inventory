"use strict";

var inventoryApp = angular.module('inventoryApp', ['ngRoute', 'firebase']);

inventoryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/inventoryList.html',
        controller: 'inventoryListCtrl'
      }).when('/printLabels', {
        templateUrl: '/partials/printLabels.html',
        controller: 'printLabelsCtrl'
      });
  }
]);


// inventoryApp.factory('inventoryData', ['$firebase', function ($firebase) {

//       var ref = firebase.database().ref().child('inventory/');

//       return {
//         all: function() {
//           return $firebase(ref).$asArray();
//         }
//       }
// }]);