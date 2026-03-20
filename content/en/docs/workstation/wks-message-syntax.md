---
title: "Message Syntax for File, Smart Card, and Bluetooth Devices"
linktitle: "Device Syntax"
url: /mendix-workstation/device-syntax/
description: "Provides information about the message syntax required for different device types."
weight: 40
---

## Introduction

To enable Mendix Workstation to communicate with your devices, you must ensure that the messages you send have the correct syntax. This syntax varies depending on the type of device. The following sections show the required syntax for file system, smart card, and Bluetooth devices.

## Bluetooth {#bluetooth}

This device type requires the following message and response:

### Message

* `0#ServiceUUID#CharacteristicUUID` - Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` - Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` - Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` - Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

### Response

* `CharacteristicUUID#Response`

## File Device {#file-device}

This device type requires the following message and response:

### Important Considerations

Before sending messages to the File Device, review the following points:

* Path handling - You can provide the paths either as absolute (for example, `/var/log/app.log` or `C:\Data\report.txt`), or as relative paths. Relative paths are always interpreted relative to the allowed folder configured in Workstation Management.
* Delimiter - The `#` character is used as a delimiter within messages. Paths and data may not contain the `#` character. 
* Case sensitivity - File and directory paths may be case-sensitive depending on the underlying operating system. For example, Linux paths are typically case-sensitive, while Windows paths are not.
 

### Message

* `0#Path` - Initiate watching for changes in the specified `Path`. If `Path` is a directory, the device will watch for changes within that directory (creation, deletion, renaming, or modification of files/subdirectories). If `Path` is a file, the device will watch for changes to that specific file (modification, deletion, or renaming).
* `1#Path` - Stop watching for changes in the specified `Path`.
* `2#File path` - Read the content of the file at the specified `File Path`.
* `3#File path#Data#flag` - Write `Data` to the file at the specified `File Path`. The `flag` can be `w` for overwrite, `a` for append If left blank, the value defaults to `w`.

### Response

* `R#Path` - File or directory at the specified `Path` was renamed, created, or deleted.
* `C#Path` - File or directory at the specified `Path` was changed. This is triggered both when a file is modified and when the contents of a directory changes. 
* `D#Data` - `Data` from file read.
* `E#Error` - `Error` message from operating system.
* `S#{0,1,2,3}#directory` - The command `{0,1,2,3}` on `directory` was successful.

### Example Test

The section below shows a sample test that you can run to verify the configuration.

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

## Card Readers {#card-readers}

This device type requires the following message and response:

### Message

Send instruction in hexadecimal as a string, for example, *FFCA000000* to read the smart card ID. The messages exchanged with the smart card are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal.
* `3# Error` - Error message from device.
