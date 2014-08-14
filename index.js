var colors = require('colors');

colors.setTheme({
  help: 'cyan'
});

var pinoccio = require('pinoccio');

var http = require("http");
http.post = require('http-post');

var api = pinoccio('a59def26f756f89b8796813dd241d980');

var s = api.sync();

s.on('data', function(data){
  data = data.data;
  if (data.type === 'digital' && data.troop === '1' && data.scout === '1') {
    if (data.value.state[1] == 0) {
      http.post('http://api.justyo.co/yoall', {api_token: "53ef2ceb-4972-7eb8-2032-344788e152d4"});  
      console.log("Someone rang the doorbell".help);
      command = "led.green delay(5000) led.off";
      api.rest({url:"/v1/1/1/command", data:{command:command}},function(err,data){});
    }
  }
});






