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
