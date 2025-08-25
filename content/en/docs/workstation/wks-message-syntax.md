---
title: "Message Syntax for File, Smart Card, and Bluetooth Devices"
linktitle: "Message Syntax"
url: /mendix-workstation/message-syntax/
description: "Provides information about the message syntax required for different device types."
weight: 40
---

## Introduction

To communicate with your devices, you must ensure that the messages you send have the correct syntax. This syntax varies depending on the type of device. The following sections show the required syntax for file system, smart card, and Bluetooth devices.

## Bluetooth

This device type requires the following message and response:

### Message

* `0#ServiceUUID#CharacteristicUUID` - Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` - Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` - Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` - Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

### Response

* `CharacteristicUUID#Response`

## File System

This device type requires the following message and response:
 
### Message

* `0# Directory` - Watch for changes in `Directory`. If `Directory` is a file path, then watch for changes in the file. `Directory` is relative to the folder configured in Workspace management. Environment variables (for example, `%public%`) are supported.
* `1# Directory` - Stop watching for changes in `Directory`.  
* `2# File path` - Read file at `File path`.
* `3# File path # Data # flag` - Write to file at `File path`. The `flag` can be `w` for overwrite, `a` for append If left blank, the value defaults to `w`.

### Response

* `R#File name` - `File name` was renamed (also triggered when file is created and deleted)
* `C#File name` - `File name` was changed
* `D#Data` - `Data` from file read
* `E#Error` - `Error` message from operating system
* `S#{0,1,2,3}#directory` - The command `{0,1,2,3}` on `directory` was successful.

## Smart Cards

This device type requires the following message and response:

### Message

Send instruction in hexadecimal as a string, for example, *FFCA000000*. The messages exchanged with the smart card are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal.
* `3# Error` - Error message from device.