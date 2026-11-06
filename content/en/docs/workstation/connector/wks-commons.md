---
title: "Workstation Commons"
url: /mendix-workstation/commons/
description: "Describes the configuration and usage of the Workstation Commons module, which is available in the Mendix Marketplace."
weight: 35
---

## Introduction

The [Workstation Commons](https://marketplace.mendix.com/link/component/305490) module contains reusable building blocks for apps that communicate with devices through [Mendix Workstation](/mendix-workstation/).

Workstation Commons speeds up development. It offers prebuilt nanoflows for the common device operations, a ready-to-use device logger, and UI snippets for the screens that most Workstation apps share.

### Prerequisites

Workstation Commons requires the [Workstation Connector](https://marketplace.mendix.com/link/component/254335/) module and its `StationConnector.Device` entity. For more information, see [Installing the Workstation Connector](/mendix-workstation/install-connector/).

## Configuration

Assign the `WorkstationCommons.User` module role to every user role of your app that has the `StationConnector.User` module role assigned. For more information, see [Module Security](/refguide/module-security/).

## Usage

The majority of functions in this module are nanoflows, because device communication runs in the client. Call them with a [nanoflow call](/refguide/nanoflow-call/) from your own nanoflow. Every nanoflow that communicates with a device takes a `StationConnector.Device` object as a parameter, which you retrieve through the Workstation Connector.

## Function List

The following sections list the functions available in this connector.

### Connection

* `Device_Connect` - Connects to the given device.
* `Device_Disconnect` - Disconnects the given device.

The `Managed` subfolder contains variants of these nanoflows. They check the connection state first, so they are safe to call in any state, and they add logging and error handling. Use these in automated flows such as startup or retry logic:

* `Device_EnsureConnect` - Connects to the device when it is not connected yet.
* `Device_EnsureDisconnect` - Disconnects the device when it is still connected.

### Device Utils

Each Device Utils nanoflow covers a single operation on a device type and builds the matching Workstation device message from plain parameters, so you can work with service UUIDs, paths, barcode types, and print jobs directly.

For the message syntax behind these nanoflows and the replies each device type sends, see [Device Message Syntax](/mendix-workstation/device-syntax/).

#### Request and SendMessage {#request-sendmessage}

Every operation is available in two variants, in the `Request` and `SendMessage` subfolders of each device type:

* **Request** - Sends the message and waits for the response of the device.
* **SendMessage** - Sends the message without waiting. The response arrives later through the `OnMessage` callback of the device.

Which variant to use depends on the architecture of your app and on how the device behaves.

##### Use Requests by Default

Use requests whenever possible. A request lets you send a command and handle the response of the device in the same microflow or nanoflow that sent it. The related logic stays in one place, which makes the execution path easier to follow and debug.

##### Use SendMessage for Subscriptions and Asynchronous Responses

Use the SendMessage variant for device subscriptions, and when the response arrives at a later time. When a device pushes data independently, or when you listen to a subscription, you need an event-driven `OnMessage` callback to handle the incoming data whenever it arrives.

##### Use SendMessage for Consistent Message Handling

You can also use the SendMessage variant when your whole app is built around processing device messages in callbacks, to keep the app consistent. The trade-off is that the logic is split across several flows, which can make debugging more complex.

#### Parsing Messages {#parsing-messages}

The `Parse` subfolder of each device type contains nanoflows that convert a received message into a non-persistable object. This lets you work with its values instead of the raw message string. They take the message as their `Message` parameter. The section of each device type below describes its parse nanoflows.

#### Bluetooth {#bluetooth}

These nanoflows target a characteristic on a Bluetooth Low Energy (BLE) device. They have the following parameters: `ServiceUUID`, `CharacteristicUUID`.

* `BLE_RequestSubscribe` and `BLE_SendSubscribe` - Subscribe to notifications for a characteristic.
* `BLE_RequestUnsubscribe` and `BLE_SendUnsubscribe` - Stop notifications for a characteristic.
* `BLE_RequestRead` and `BLE_SendRead` - Read the current value of a characteristic. `BLE_RequestRead` returns the value.
* `BLE_RequestWrite` and `BLE_SendWrite` - Write a value to a characteristic. They have the additional parameter `Value`.

To convert a received message, use the following nanoflow:

* `BLE_ParseMessage` - Converts the Bluetooth message in its `Message` parameter into a `BluetoothMessage` object. Its `Characteristic` holds the universally unique identifier (UUID) of the characteristic that sent the message, and its `ResponseHex` holds the value in hexadecimal.

#### Camera {#camera}

These nanoflows control barcode scanning and motion detection on a camera device. The barcode nanoflows have the optional parameter `BarcodeTypes`, a comma-separated list of barcode types to scan for. Leave it empty to scan for all barcode types.

* `Camera_RequestBarcode` and `Camera_SendGetBarcode` - Scan the next available frame for barcodes. `Camera_RequestBarcode` returns the barcodes found.
* `Camera_RequestStartBarcodeDetection` and `Camera_SendStartBarcodeDetection` - Start continuous barcode detection.
* `Camera_RequestStopBarcodeDetection` and `Camera_SendStopBarcodeDetection` - Stop continuous barcode detection.
* `Camera_RequestStartMotionDetection` and `Camera_SendStartMotionDetection` - Start motion detection.
* `Camera_RequestStopMotionDetection` and `Camera_SendStopMotionDetection` - Stop motion detection.

To convert a received message, use the following nanoflows:

* `Camera_ParseBarcodeMessage` - Converts the barcode message in its `Message` parameter into a `CameraBarcodeMessage` object. Its `BarcodeCount` holds the number of barcodes in the message. `IsContinuous` is true when the message comes from continuous barcode detection, and `IsLeavingFrame` is true when the barcodes left the frame instead of entering it. Each barcode is an associated `BarcodeInfo` object with its `Format` and its `Content`, decoded from Base64.
* `Camera_ParseMotionMessage` - Converts the motion message in its `Message` parameter into a `CameraMotionMessage` object. `IsMotionDetected` is true when motion started, and `MotionScore` holds the share of changed pixels in the frame, between `0` and `1`.

#### Card Reader {#card-reader}

* `CardReader_ParseMessage` - Converts the card reader message in its `Message` parameter into a `CardReaderMessage` object. Its `MessageType` is `CardConnected` when a card is inserted, `CardDisconnected` when a card is removed, or `Response` when the card reader replies to an instruction. Its `ResponseHex` holds the hexadecimal response of the card reader.

#### File Device

These nanoflows operate on a path on the workstation computer. They have the following parameter: `Path`.

* `File_RequestWatch` and `File_SendWatch` - Start watching a file or directory for changes.
* `File_RequestUnwatch` and `File_SendUnwatch` - Stop watching a file or directory.
* `File_RequestRead` and `File_SendRead` - Read the content of a file. `File_RequestRead` returns the content.
* `File_RequestWrite` and `File_SendWrite` - Write content to a file. They have the additional parameters `Value` and `Flag`. The flag can be `w` for overwrite or `a` for append.

The `Request` variants return the response message of the device. To convert it, use the following nanoflow:

* `File_ParseMessage` - Converts the file device message in its `Message` parameter into a `FileMessage` object. Its `MessageType` is one of the following:

    * `RenameEvent` - A watched file or directory was renamed, created, or deleted.
    * `ChangeEvent` - A watched file or directory was changed.
    * `Data` - The message contains the content of a file read.
    * `Success` - A command completed successfully.

    Its `Data` holds the rest of the message, such as the path or the file content.

#### Printer {#printer}

The following nanoflows print a document. They have the parameter `DocumentName`, which is the name of the print job, and encode the content in Base64 for you:

* `Printer_RequestPrintText` and `Printer_SendPrintText` - Print plain text. They have the additional parameter `Text`.
* `Printer_RequestPrintRaw` and `Printer_SendPrintRaw` - Print raw data in a printer command language such as ZPL, EPL, or PCL. They have the additional parameter `RawData`.
* `Printer_RequestPrintPDF` and `Printer_SendPrintPDF` - Print a PDF document. They have the additional parameter `FileDocument`. These nanoflows read the file contents on the server. For more information, see [General Utils](#general-utils).

The `Request` variants of these nanoflows return the accepted job, including its job ID.

The following nanoflows give you full control over the print job and the printer queue:

* `Printer_RequestPrint` and `Printer_SendPrint` - Submit a print job. They have the parameters `DocumentName`, `Format`, and `DataBase64`. The format is `RAW`, `TEXT`, or `PDF`, and the payload is encoded in Base64. `Printer_RequestPrint` returns the accepted job, including its job ID.
* `Printer_RequestStatus` and `Printer_SendGetStatus` - Get the printer state and its queued jobs. `Printer_RequestStatus` returns the status message.
* `Printer_RequestCancelJob` and `Printer_SendCancelJob` - Cancel a queued print job. They have the parameter `JobId`.

To convert a received message, use the following nanoflows:

* `Printer_ParsePrintAcceptedMessage` - Converts the message of an accepted print job in its `Message` parameter into a `PrinterPrintAcceptedMessage` object with the `DocumentName` and the `JobId` of the job.
* `Printer_ParseStateMessage` - Converts the status message in its `Message` parameter into a `PrinterStateMessage` object with the printer `State`, its `StateReasons`, and the `JobCount` of queued jobs. Each queued job is an associated `JobInfo` object with its `JobId`, `JobName`, and `JobState`.

### General Utils {#general-utils}

These functions convert content to and from Base64, the encoding that device messages use for binary content:

* `JS_String_Base64Encode` - Encodes a string in Base64.
* `JS_String_Base64Decode` - Decodes a Base64 string.
* `FileDocument_Base64Encode` - Encodes the contents of a `System.FileDocument` in Base64. This function is a microflow that calls the `JA_FileDocument_Base64Encode` Java action, the exception in this module. The contents of a file document are not available in the client, so they must be read on the server. Calling this microflow from a nanoflow therefore adds a round trip to the server.

### Device Logger

The device logger is a ready-to-use console that shows the live message traffic of a device and lets you send messages to it manually. Use it to test and debug device communication.

To use it, show `Snippet_DeviceConsole` on a page and pass it a device, or open the `DeviceLogger` popup page with a device as its parameter. The remaining documents in the folder are its implementation.

### UI Snippets

The following are reusable web snippets for the screens which most Workstation apps need. Except for `Snippet_StationInfo`, they have the parameter `Device`, which is a `StationConnector.Device` object:

* `Snippet_StationInfo` - Displays the current workstation, and reports when the Workstation Client is unavailable. It has no parameter. Use it as a header or status panel.
* `Snippet_DeviceCard` - Displays a single device as a card, with its name, device class, state, and connect and disconnect controls.
* `Snippet_DeviceState` - Shows the connection state of a device together with its connect and disconnect buttons.
* `Snippet_DeviceConsole` - Provides the interactive [device logger](#device-logger) console.

## Read More

* [Mendix Workstation](/mendix-workstation/)
* [Device Message Syntax](/mendix-workstation/device-syntax/)
* [Workstation Connector](https://marketplace.mendix.com/link/component/254335/)
