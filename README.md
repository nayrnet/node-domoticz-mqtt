# node-domoticz-mqtt

[![GPL-3.0](https://img.shields.io/badge/license-GPL-blue.svg)]()
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![node](https://img.shields.io/node/v/gh-badges.svg)]()

NodeJS Module for communication with Domoticz via MQTT Interface.

## Example:
```javascript
#!/usr/bin/nodejs
var     mqtt            = require('node-domoticz-mqtt');

// Options:
var options = {
        idx:            [ 1, 2, 3, 4 ],
        host:           'localhost',
        status:         'example-app/connected',
        log:            false
};

var domoticz = new mqtt.domoticz(options);

// Log everything matching our IDX from Options
domoticz.on('data', function(data) {
        message = JSON.stringify(data)
        console.log(message);
});

// Set IDX #1 to ON
domoticz.switch(1,100);
```

## Functions:
```javascript
// Callback for any devices from options. Data is json format.
domoticz.on('data', function(data){ console.log("device updated") });

// Publish Switch:  level 0 = Off, level 100 = On, level -1 = Toggle, level 1-99 = Set Level
domoticz.switch(idx,level);

// Publish uDevice: nvalue = int, svalue = string
domoticz.device(idx,nvalue,svalue);

// Publish Scene: cmd is optional, use "Off" for groups.
domoticz.scene(idx,cmd);

// Publish User Variable
domoticz.uservar(idx,value);

// Publish Notification: priority and sound are optional
domoticz.notify(subject,body,priority,sound)

// Request Device Status
domoticz.request(idx);
```

## Options
* idx - an array of device idx to watch for
* status - MQTT Path for reporting your app is online 
* host - Host of your MQTT Broker, defaults to localhost
* log - boolean to show detailed logs, defaults to localhost

## About:
By: Ryan Hunt
