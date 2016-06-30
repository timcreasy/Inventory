// inventoryApp.controller('printLabelsCtrl', function($scope) {
//   $scope.greet = "Hey from printLabelsCtrl";
// });

// inventoryApp.controller("printLabelsCtrl",
//   [
//     "$scope",
//     "inventoryData",
//     function($scope, inventoryData) {
//       $scope.inventory = inventoryData.all();
//     }
//   ]
// );

inventoryApp.controller("inventoryListCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("inventory");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.inventory = $firebaseArray(ref);
});