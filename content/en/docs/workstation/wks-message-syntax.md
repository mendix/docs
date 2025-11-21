---
title: "Message Syntax for File, Smart Card, and Bluetooth Devices"
linktitle: "Device Syntax"
url: /mendix-workstation/device-syntax/
description: "Provides information about the message syntax required for different device types."
weight: 40
---

## Introduction

For Mendix Workstation Client to communicate with devices, messages must use the correct syntax. This syntax varies depending on the device type. The following sections describe the required syntax for file system, smart card, and Bluetooth devices.

## Bluetooth

This device type uses the following message and response formats:

### Message

* `0#ServiceUUID#CharacteristicUUID` – Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` – Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` – Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` – Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

### Response

* `CharacteristicUUID#Response`

## File Device

This device type uses the following message and response formats:
 
### Message

* `0#Directory` – Watch for changes in `Directory`. If `Directory` is a file path, watch for changes in that file. `Directory` is relative to the folder configured in Workstation Management. Environment variables (such as `%public%`) are supported.
* `1#Directory` – Stop watching for changes in `Directory`.
* `2#File path` – Read file at `File path`.
* `3#File path#Data#flag` – Write to file at `File path`. The `flag` can be `w` for overwrite or `a` for append. If left blank, the value defaults to `w`.

### Response

* `R#File name` – `File name` was renamed (also triggered when the file is created or deleted).
* `C#File name` – `File name` was changed.
* `D#Data` – `Data` from file read operation.
* `E#Error` – `Error` message from operating system.
* `S#{0,1,2,3}#directory` – The command `{0,1,2,3}` on `directory` was successful.

### Example Test

The following example demonstrates how to test the file device configuration:

1. Create a new Workspace in the Workstation Management.
2. Create a new Station.
3. Add a `File Device` with the following configuration to this Station:
    * **Device Name** - *Write files to test folder* 
    * **Allowed Folder** - For example, on a Windows computer you can use a path like `C:\MyTestFolder`
    * **Allow writing files** - **Yes**
    * Use the default values for everything else 
4. Register the Station to your computer (assuming the Workstation Client is installed there).
5. In your Workspace, navigate to **Test Your Station** and click on the configured file device.
6. Enter `3#test.txt#Hello from Mendix` in the **Send Message** field, and then press **Send Message**.

    The test should show a response like `S#3#C:\MyTestFolder\test.txt` to indicate that the text file *test.txt* was successfully written to *MyTestFolder*. 

7. Go to *C:\MyTestFolder* and verify that it contains the text file.
8. Open the test file and verify that it contains the text *Hello from Mendix*.

## Card Readers

This device type uses the following message and response formats:

### Message

Send instruction in hexadecimal as a string, for example `FFCA000000` to read the smart card ID. The messages exchanged with the smart card are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal.
* `3# Error` - Error message from device.
