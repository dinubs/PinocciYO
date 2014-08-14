var five = require("johnny-five");
var Pinoccio = require("pinoccio-io");
var board = new five.Board({
  io: new Pinoccio({
    token: "7fc11b7554f0cd303bad94eb0eb36e2d",
    troop: "1",
    scout: "1"   
  })
});

board.on("ready", function() {
  var led = new five.Led("led");
  led.blink(500);
});