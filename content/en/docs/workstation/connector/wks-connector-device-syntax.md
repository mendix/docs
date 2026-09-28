---
title: "Device Message Syntax"
linktitle: "Device Message Syntax"
url: /mendix-workstation/device-syntax/
description: "Describes the message syntax that Mendix applications must use to communicate with each device type through the Workstation Connector."
weight: 30
---

## Introduction

When a Mendix application exchanges data with a device through the Workstation Connector, it sends and receives plain string messages. Every device type defines its own syntax for these messages, so your nanoflow logic must build and parse messages according to the device type it talks to.

This document describes the message and response syntax for every device type. Send messages with `SendDeviceMessage` or `SendDeviceRequest`, and read them with the `onMessage` callback of `GetCreateDevice`, `WaitForDeviceMessage`, or `SubscribeToDeviceMessages`. For more information, see [Develop an App with the Workstation Connector](/mendix-workstation/develop-app/#javascript-actions).

To configure a device in a station, see [Configuring Devices](/mendix-workstation/management-devices/).

## Card Readers {#card-readers}

This device type requires the following message and response:

### Message

Send an instruction in hexadecimal as a string, for example, *FFCA000000* to read the smart card ID. The messages exchanged with the card reader are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal
* `3# Error` - Error message from device

## Bluetooth {#bluetooth}

This device type requires the following message and response:

### Message

* `0#ServiceUUID#CharacteristicUUID` - Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` - Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` - Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` - Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

### Response

* `CharacteristicUUID#Response`

### Example

The sample subscribe command `0#0000180f-0000-1000-8000-00805f9b34fb#00002a19-0000-1000-8000-00805f9b34fb` contains the following elements:

1. `0` (command prefix) - Tells the Workstation Client to subscribe to a characteristic.
2. Separator
3. `0000180f-0000-1000-8000-00805f9b34fb` (`ServiceUUID`) - The standard Bluetooth SIG UUID for the Battery service.
4. Separator
5. `00002a19-0000-1000-8000-00805f9b34fb` (`CharacteristicUUID`) - The standard Bluetooth SIG UUID for the Battery Level characteristic.

Once subscribed, every notification from the device arrives as a response in the form `00002a19-0000-1000-8000-00805f9b34fb#Response`, where `Response` is the raw value reported by the characteristic.

Instead of building these messages by hand, you can call the `BLE_Subscribe`, `BLE_Unsubscribe`, `BLE_Read`, and `BLE_Write` nanoflows from [Workstation Commons](/mendix-workstation/commons/#bluetooth), which take `ServiceUUID` and `CharacteristicUUID` as plain parameters.

## Keyboard Wedge {#keyboard-wedge}

Keyboard wedge devices are input-only, so Mendix applications do not send messages to them. When the Workstation Client recognizes a complete message, it forwards the payload to the Workstation Connector with the prefix and suffix removed.

## Printer {#printer}

This device type requires the following message and response:

### Message

* `P#PrintJobDocName#Format#DataPayloadInBase64` - Submit a print job.
* `S` - Get printer status and queued jobs.
* `C#JobId` - Cancel print job.

### Response

* `P#DocName#JobId` - Print job accepted by OS print interface.
* `S#State#StateReason1,...#NumJobs#JobId1:JobName1:JobState1,...` - Printer state and job list summary.
* `E#ErrorMessage` - Error.

### Example

The sample print command `P#TESTHELLO#RAW#aGVsbG8=` contains the following elements:

1. `P` (command prefix) - Tells the Workstation Client that the incoming instruction is a Print command.
2. Separator
3. `TESTHELLOFILE` (file name) - Name assigned to the print job. The client uses this to create the temporary file (for example, `TESTHELLOFILE.prn`) before sending it to the printer spooler.
4. Separator
5. `RAW` (format type) - Tells the Workstation Client that the following data is a Raw Printer Command (such as ZPL for Zebra printers, EPL, or PCL) rather than a standard document like a PDF or a Word file. Printing in RAW bypasses the standard printer drivers' formatting. It sends the exact code the printer needs to generate labels, barcodes, or specific layouts.
6. `aGVsbG8=` (payload) - A data string encoded to Base64. Base64 decoded, it translates to the text `hello`. If you are testing this and the printer is not reacting, verify that the string you are encoding in Base64 matches the specific language your printer speaks. For example, a Zebra printer cannot process a plain text `hello` unless it is wrapped in ZPL commands like `^XA^FO50,50^A0N,50,50^FDhello^FS^XZ`.

## File Device {#file-device}

Before sending messages to the file device, review the following points:

* Path handling - You can provide the paths either as absolute paths (for example, `/var/log/app.log` or `C:\Data\report.txt`), or as relative paths. Relative paths are always interpreted relative to the allowed folder configured in Workstation Management.
* Delimiter - The `#` character is used as a delimiter within messages. Paths and data may not contain the `#` character.
* Case sensitivity - File and directory paths may be case-sensitive depending on the underlying operating system. For example, Linux paths are typically case-sensitive, while Windows paths are not.

### Message

* `0#Path` - Initiate watching for changes in the specified `Path`. If `Path` is a directory, the device will watch for changes within that directory (creation, deletion, renaming, or modification of files/subdirectories). If `Path` is a file, the device will watch for changes to that specific file (modification, deletion, or renaming).
* `1#Path` - Stop watching for changes in the specified `Path`.
* `2#File path` - Read the content of the file at the specified `File Path`.
* `3#File path#Data#flag` - Write `Data` to the file at the specified `File Path`. The `flag` can be `w` for overwrite, `a` for append; if left blank, the value defaults to `w`.

### Response

* `R#Path` - File or directory at the specified `Path` was renamed, created, or deleted.
* `C#Path` - File or directory at the specified `Path` was changed. This is triggered both when a file is modified and when the contents of a directory change. 
* `D#Data` - `Data` from file read.
* `E#Error` - `Error` message from operating system.
* `S#{0,1,2,3}#directory` - The command `{0,1,2,3}` on `directory` was successful.

### Example

The sample write command `3#test.txt#Hello from Mendix#a` contains the following elements:

1. `3` (command prefix) - Tells the Workstation Client that the incoming instruction is a write command.
2. Separator
3. `test.txt` (file path) - The file to write to, relative to the allowed folder configured for this device, for example `C:\MyTestFolder\test.txt`.
4. Separator
5. `Hello from Mendix` (data) - The text written to the file.
6. Separator
7. `a` (flag) - Appends the data to the end of the file instead of overwriting its contents.

The device answers with `S#3#C:\MyTestFolder\test.txt`, confirming that the write command completed successfully on that path.
