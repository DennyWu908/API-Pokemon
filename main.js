$(document).ready(function(){
  $("#random").removeClass('hidden');
  wheel = new wheelnav('wheelDiv');
  wheel.initWheel(["random", "color", "name", "id"]);
  wheel.wheelRadius = 120;
  wheel.createWheel();
})
