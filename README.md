# node-domoticz-mqtt

[![GPL-3.0](https://img.shields.io/badge/license-GPL-blue.svg)]()
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![node](https://img.shields.io/node/v/gh-badges.svg)]()

NodeJS Module for communication with Domoticz via MQTT Interface.

## Example:
```javascript
#!/usr/bin/nodejs
var	mqtt	= require('node-domoticz-mqtt');

// Options:
var options = {
	idx: 		[ 1, 2, 3, 4 ],
	host: 		'localhost',
	request:	true,
	log: 		false
};

var domoticz = new mqtt.domoticz(options);

// Log anything matching our IDX
domoticz.on('data', function(data) {
	message = JSON.stringify(data)
	console.log(message.toString());
});

// Set IDX #1 to ON after connection and log our connection.
domoticz.on('connect', function() {
	domoticz.switch(1,100);
	domoticz.log('My example app connected.');
});
```

## Functions:
```javascript
// Callback for any devices from options. Data is json format.
domoticz.on('data', function(data){  });

// Callback on connect
domoticz.on('connect', function(){  });

// Callback on error
domoticz.on('error', function(error){  });

// Publish Switch:  level commands: 0 = Off/255 = On/-1 = Toggle/1-100 = Set Level
domoticz.switch(idx,level);

// Publish uDevice: nvalue = int, svalue = string
domoticz.device(idx,nvalue,svalue);

// Publish Scene: cmd is optional, use "Off" for groups.
domoticz.scene(idx,cmd);

// Publish User Variable
domoticz.uservar(idx,value);

// Publish Domoticz Log Status
domoticz.log(message);

// Publish Notification: priority and sound are optional
domoticz.notify(subject,body,priority,sound);

// Request Device Status
domoticz.request(idx);
```

## Options
* idx - an array of device idx to watch and update on connect. defaults to none.
* status - MQTT Path for reporting your app is online, optional.
* host - Host of your MQTT Broker, defaults to localhost.
* request - booolean to request updates for all IDX on connect, defaults to true.
* log - boolean to show detailed logs, defaults to false.

## More
* NPM Project Page: https://www.npmjs.com/package/node-domoticz-mqtt
* GitHub Project Page: https://github.com/nayrnet/node-domoticz-mqtt
* Domoticz Discussion: https://www.domoticz.com/forum/viewtopic.php?f=21&t=10190
* Implemented in: https://github.com/nayrnet/domoticz-htc

## About:
By: Ryan Hunt
