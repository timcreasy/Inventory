inventoryApp.controller("inventoryListCtrl", function($scope, $firebaseArray) {

  var ref = firebase.database().ref().child("inventory");
  $scope.inventory = $firebaseArray(ref);

});