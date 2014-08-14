Pinocci-YO
=========
Pinoccio and the amazing YO api

###Parts Needed

- Pinoccio

- 2 Jumper Cables

- Push Button

1. First create a developer account with YO at http://yoapi.justyo.co

2. Then get your Pinoccio API Token from http://docs.pinocc.io

3. Then put your Pinoccio Token on line 12

	```js
	var api = pinoccio(//Token Here)
	```

4. Then put you YO API Token on line 20
	```js
	http.post('http://api.justyo.co/yoall', {api_token: //YO API Token Here}); 
	```

Wiring
======

<img src="http://imgur.com/hgORkUD.jpg" alt="Example PinocciYO Wiring" width="400" />

I have the button input pin going to pin "D2", and another jumper cable running to the Pinoccio ground pin
