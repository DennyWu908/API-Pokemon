$(document).ready(function(){
  $("#random").removeClass('hidden');
  wheel = new wheelnav('wheelDiv');
  wheel.initWheel(["random", "color", "name", "id"]);
  wheel.wheelRadius = 150;
  wheel.centerX = 300;
  wheel.centerY = 200;
  wheel.createWheel();
})
