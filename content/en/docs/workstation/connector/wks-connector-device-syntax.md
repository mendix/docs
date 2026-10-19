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

Instead of building these messages by hand, you can call the `BLE_RequestSubscribe`, `BLE_RequestUnsubscribe`, `BLE_RequestRead`, and `BLE_RequestWrite` nanoflows, or their `BLE_Send` variants, from [Workstation Commons](/mendix-workstation/commons/#bluetooth), which take `ServiceUUID` and `CharacteristicUUID` as plain parameters.

## Camera {#camera}

This device type requires the following messages and responses. Barcode commands are available only when **Enable Barcode Detection** is configured for the device, and motion commands only when **Enable Motion Detection** is configured. Send `H` to the camera to list all commands, and `B#H` to list the supported barcode types.

### Message

* `B#S` - Scan the next available frame for all barcode types.
* `B#S#Type1,Type2,...` - Scan the next available frame for the specified barcode types.
* `B#C#S` - Start continuous scanning for all barcode types.
* `B#C#S#Type1,Type2,...` - Add the specified barcode types to continuous scanning.
* `B#C#T` - Stop continuous scanning for all barcode types.
* `B#C#T#Type1,Type2,...` - Remove the specified barcode types from continuous scanning.
* `M#S` - Start motion detection.
* `M#T` - Stop motion detection.
* `H` - Show all camera commands. `B#H`, `M#H`, and `W#H` show the barcode, motion, and live preview commands.

### Response

* `B#S#Count#Type1:TextBase64,...` - The barcodes found in the scanned frame. Each barcode consists of its type and its content encoded in Base64.
* `B#C#S#Count#Type1:TextBase64,...` - During continuous scanning, the barcodes that entered the frame.
* `B#C#T#Count#Type1:TextBase64,...` - During continuous scanning, the barcodes that left the frame. A barcode is reported as left when it has not been detected for one second.
* `M#S#Score` - Motion started. `Score` is the share of changed pixels in the frame, between `0` and `1`.
* `M#T#Score` - Motion stopped.

Motion is reported only when it starts or stops for at least about 250 milliseconds, not for every frame.

### Barcode Types {#barcode-types}

Use the following values for `Type1,Type2,...` in the barcode commands. Values that start with `All` select a group of barcode types.

* Groups - `All`, `AllReadable`, `AllCreatable`, `AllLinear`, `AllMatrix`, `AllGS1`, `AllRetail`, `AllIndustrial`
* Linear barcodes - `Codabar`, `Code39`, `Code39Std`, `Code39Ext`, `Code32`, `PZN`, `Code93`, `Code128`, `ITF`, `ITF14`, `DataBar`, `DataBarOmni`, `DataBarStk`, `DataBarStkOmni`, `DataBarLtd`, `DataBarExp`, `DataBarExpStk`, `EANUPC`, `EAN13`, `EAN8`, `ISBN`, `UPCA`, `UPCE`, `Telepen`, `TelepenAlpha`, `TelepenNumeric`, `DXFilmEdge`
* Matrix barcodes - `PDF417`, `CompactPDF417`, `MicroPDF417`, `Aztec`, `AztecCode`, `AztecRune`, `QRCode`, `QRCodeModel1`, `QRCodeModel2`, `MicroQRCode`, `RMQRCode`, `DataMatrix`, `MaxiCode`
* Other - `OtherBarcode`

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
