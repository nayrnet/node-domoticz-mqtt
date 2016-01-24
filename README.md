# node-domoticz-mqtt

NodeJS Module for talking to Domoticz via MQTT Interface.

## Functions:
* switch(idx,level)
  * level 0 = Off
  * level 100 = On
  * level -1 = Toggle
  * level 1-99 = Dim
* device(idx,nvalue,svalue)
* scene(idx,cmd)
  * cmd is optional, use "Off" for groups.
* uservar(idx,value)
* notify(subject,body,priority,sound)
  * priority and sound are optional
* request(idx)
  * push current state out MQTT
* log(msg)

## Options
* idx - an array of device idx to watch for
* log - boolean to show detailed logs.
* status - MQTT Path for reporting your app is online 
* host - Host of your MQTT Broker, defaults to localhost


