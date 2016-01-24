#!/usr/bin/nodejs
var     mqtt		= require('./domoticz.js');

var options = {
	idx: 		[ 1, 2, 3, 4, 169 ],
        log:            false,
	status: 	'example-app/connected',
	host: 		'localhost'
};

var     domoticz        = new mqtt.domoticz(options);

domoticz.on('data', function(data) {
        message = JSON.stringify(data)
        console.log(message.toString());
});

domoticz.switch(169,7);
