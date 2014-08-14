var colors = require('colors');

colors.setTheme({
  help: 'cyan'
});

var pinoccio = require('pinoccio');

var http = require("http");
http.post = require('http-post');

var api = pinoccio(// Pinoccio API Toke Here);

var s = api.sync();

s.on('data', function(data){
  data = data.data;
  if (data.type === 'digital' && data.troop === '1' && data.scout === '1') {
    if (data.value.state[0] == 0) {
      http.post('http://api.justyo.co/yoall', {api_token: //YO API Token Here});  
      console.log("Someone rang the doorbell".help);
      command = "led.green delay(5000) led.off";
      api.rest({url:"/v1/1/1/command", data:{command:command}},function(err,data){});
    }
  }
});






