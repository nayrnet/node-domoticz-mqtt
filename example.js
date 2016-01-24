#!/usr/bin/nodejs
var     mqtt		= require('./domoticz.js');

// Options:
var options = {
	idx: 		[ 1, 2, 3, 4 ],
        log:            false,
	status: 	'example-app/connected',
	host: 		'localhost'
};

var     domoticz        = new mqtt.domoticz(options);

// Log anything matching our IDX
domoticz.on('data', function(data) {
        message = JSON.stringify(data)
        console.log(message.toString());
});

// Set IDX #1 to ON
domoticz.switch(1,100);

