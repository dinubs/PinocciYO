Pinocci-YO
=========
Pinoccio and the amazing YO api

First create a developer account with YO at http://yoapi.justyo.co

Then get your Pinoccio API Token from http://docs.pinocc.io

Then put your Pinoccio Token on line 12

```js
var api = pinoccio(//Token Here)
```

Then put you YO API Token on line 20

```js
http.post('http://api.justyo.co/yoall', {api_token: //YO API Token Here}); 
```

Wiring
======

![Example PinocciYO Wiring](http://imgur.com/hgORkUD.jpg "Example PinocciYO Wiring" =250x)

I have the button input pin going to "D2", and another jumper cable running to the Pinoccio ground pin
