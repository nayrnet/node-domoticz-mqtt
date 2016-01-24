# node-domoticz-mqtt

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
* log - boolean to show detailed logs.
* status - MQTT Path for reporting your app is online 
* host - Host of your MQTT Broker, defaults to localhost

## About:
By: Ryan Hunt
License: GPL-3.0
