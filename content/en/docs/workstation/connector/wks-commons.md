---
title: "Workstation Commons"
url: /mendix-workstation/commons/
description: "Describes the configuration and usage of the Workstation Commons module, which is available in the Mendix Marketplace."
weight: 30
---

## Introduction

The [Workstation Commons](<!-- TODO: add Marketplace link, for example https://marketplace.mendix.com/link/component/000000/ -->) module contains reusable building blocks for apps that communicate with devices through [Mendix Workstation](/mendix-workstation/).

Workstation Commons speeds up development. It offers prebuilt nanoflows for the common device operations, a ready-to-use device logger, and UI snippets for the screens that most Workstation apps share.

### Prerequisites

Workstation Commons requires the [Workstation Connector](https://marketplace.mendix.com/link/component/254335/) module and its `StationConnector.Device` entity. For more information, see [Installing the Workstation Connector](/mendix-workstation/install-connector/).

## Usage

All functions in this module are nanoflows, because device communication runs in the client. Call them with a [nanoflow call](/refguide/nanoflow-call/) from your own nanoflow. Every function takes a `StationConnector.Device` object as its first parameter, which you retrieve through the Workstation Connector.

## Function List

The following sections list the functions available in this connector.

### Connection

* `Device_Connect` - Connects to the given device.
* `Device_Disconnect` - Disconnects the given device.

The `Managed` subfolder contains variants of this function. They check the connection state first, so they are safe to call in any state, and they add logging and error handling. Use these in automated flows such as startup or retry logic:

* `Device_EnsureConnect` - Connects to the device when it is not connected yet.
* `Device_EnsureDisconnect` - Disconnects the device when it is still connected.

### Device Utils

Each Device Utils function covers a single operation on a device type and builds the matching Workstation device message from plain parameters, so you can work with service UUIDs, paths, and print jobs directly.

For the message syntax behind these functions and the replies each device type sends, see [Managing Devices](/mendix-workstation/management-devices/) in the Mendix Workstation documentation.

#### Bluetooth

These functions target a characteristic on a BLE device.

* `BLE_Subscribe` - Subscribes to notifications for a characteristic. It has the following parameters: `ServiceUUID`, `CharacteristicUUID`.
* `BLE_Unsubscribe` - Stops notifications for a characteristic. It has the following parameters: `ServiceUUID`, `CharacteristicUUID`.
* `BLE_Read` - Reads the current value of a characteristic. It has the following parameters: `ServiceUUID`, `CharacteristicUUID`.
* `BLE_Write` - Writes a value to a characteristic. It has the following parameters: `ServiceUUID`, `CharacteristicUUID`, `Value`.

#### File Device

These functions operate on a path on the workstation computer.

* `File_Watch` - Starts watching a file or directory for changes. It has the following parameters: `Path`.
* `File_Unwatch` - Stops watching a file or directory. It has the following parameters: `Path`.
* `File_Read` - Reads the content of a file. It has the following parameters: `Path`.
* `File_Write` - Writes content to a file. It has the following parameters: `Path`, `Value`, `Flag`. The flag can be `w` for overwrite or `a` for append.

#### Printer

These functions return the printer's answer as a string.

* `Printer_Print` - Submits a print job and returns the accepted job, including its job id. It has the following parameters: `PrintJobDocumentName`, `Format`, `DataPayloadBase64`. Use `RAW` as the format for printer command languages such as ZPL, EPL, or PCL, and pass the payload base64-encoded.
* `Printer_GetStatus` - Returns the printer state and its queued jobs.
* `Printer_CancelJob` - Cancels a queued print job. It has the following parameters: `JobId`.

#### SmartCard Reader

* `CardReader_TransmitAPDU` - Transmits an APDU command to a smart card reader. Provide the command as a hexadecimal string. It has the following parameters: `APDUCommand`.

### Device Logger

The device logger is a ready-to-use console that shows the live message traffic of a device and lets you send messages to it manually. Use it to test and debug device communication.

To use it, show `Snippet_DeviceConsole` on a page, or open the `DeviceLogger` popup page with a device as its parameter. The remaining documents in the folder are its implementation.

### UI Snippets

The following are reusable web snippets for the screens which most Workstation apps need:

* `Snippet_StationInfo` - Displays the current workstation, and reports when the Workstation Client is unavailable. It has no parameter. Use it as a header or status panel.
* `Snippet_DeviceCard` - Displays a single device as a card, with its state and connect/disconnect controls, and opens the device logger when the device name is clicked.
* `Snippet_DeviceState` - Shows the connection state of a device together with its connect and disconnect buttons.
* `Snippet_DeviceConsole` - Provides an the interactive [device logger](#device-logger) console.

## Read More

* [Mendix Workstation](/mendix-workstation/)
* [Managing Devices in Workstation Management](/mendix-workstation/management-devices/)
* [Workstation Connector](https://marketplace.mendix.com/link/component/254335/)
