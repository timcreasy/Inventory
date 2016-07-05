"use strict";

var ioBarcode = require('io-barcode');

inventoryApp.controller('printLabelsCtrl', function($scope) {

 var canvas = ioBarcode.CODE128B("Hey Mathew", {
      width:  2,
      height: 100,
      quite: 10,
      displayValue: true, // Will display the encoded data as a label, or 'customLabel' if not null 
      font: 'monospace',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
      backgroundColor: '',
      lineColor: "#000",
      customLabel:null, // Will be displayed if displayValue is set to true 
  });
  $scope.canvas = canvas;

  var img = new Image();
  img.src = canvas.toDataURL('image/png');
  $("#barcode").append(img);

});
