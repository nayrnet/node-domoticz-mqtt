# node-domoticz-mqtt

[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![node](https://img.shields.io/node/v/gh-badges.svg)]()

NodeJS Module for talking to Domoticz via MQTT Interface.

see the example.js to get started.

## Functions:
```javascript
// Callback for any device updates matching IDX options. data is json
domoticz.on('data', function(data){ console.log("device updated") });

// Publish Switch:  level 0 = Off, level 100 = On, level -1 = Toggle, evel 1-99 = Set Level
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
