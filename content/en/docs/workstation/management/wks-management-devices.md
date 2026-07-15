---
title: "Configuring Devices"
linktitle: "Devices"
url: /mendix-workstation/management-devices/
description: "Describes the available devices and device syntax for Mendix Workstation Management."
weight: 60
---

## Introduction

This section details how to configure various device types for the current station. For each device type, you will find instructions on how to set it up in the Management UI, along with the specific message syntax required for Mendix applications to communicate with it through the Workstation Client.

## Device Connectivity

Before connecting devices with Mendix Workstation, perform the following steps:

1. Make sure the devices are correctly set up and connected to your computer.
2. Verify that all device drivers are installed and updated.
3. Obtain the connection parameters used by the devices:

    * For Serial Port connection - baud rate, data bits, parity and stop bits, flow control.
    * For TCP/IP connection - IP address and port.

4. Obtain the manual and technical documentation for your devices, including chapters describing the communication protocol and how to configure it.
5. Test the connection and protocol on your operating system using the tool recommended in the device technical documentation or using common tool such as PuTTY.
    * For Serial Port connection - Open the device and test device basic commands.
    * For TCP/IP connection - Ping the device to make sure that it is reachable on the network and not blocked by a firewall, and then test the basic device commands.

## Card Readers

Card reader devices cannot be configured as separate devices in the **Devices** overview of a **Station** page. Instead, they are automatically detected by the Workstation Client and added to the device list of the Client. 

Auto detecting card readers is enabled by default. This setting can be configured on a **Station** page by unselecting **Detect Card Readers**. 

### Message Syntax {#card-readers}

This device type requires the following message and response:

#### Message

Send instruction in hexadecimal as a string, for example, *FFCA000000* to read the smart card ID. The messages exchanged with the smart card are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

#### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal.
* `3# Error` - Error message from device.

## File Device

The File Device allows Mendix applications to interact with the local file system of the computer running the Workstation Client.

### Configuration in Management UI

To add a File Device, perform the following steps:

1. Navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device** and select **File Device**.
3. Provide a **Device Name** (for example, *Write files to test folder*).

### Allowed Folder Configuration

The *Allowed Folder* feature supports flexible path configuration through environment variables, providing cross-platform compatibility for both Windows and Unix-based systems. This functionality allows administrators to define the allowed folder where the Workstation Client can perform actions. 

#### Environment Variable Support

The system accepts environment variables in the allowed folder configuration within the Workstation Management interface. Both Windows and Unix syntax formats are supported on all platforms, providing cross-platform compatibility.

#### Supported Path Formats

Windows and Unix-style paths can be used independently of the operating system the Workstation Client is running on. The following examples demonstrate the various syntax options available:

* Windows-style with backslash: `%AppData%\test`
* Windows-style with forward slash: `%AppData%/test`
* Unix-style with backslash: `$EnvVar\test`
* Unix-style with forward slash: `$EnvVar/test`

### Allowed Actions

You can grant one or more of the following permissions for the File Device:

* Subscribe to change events - Allow the Workstation Client to monitor the configured folder for changes.
* Read files - Allow Mendix applications to read the content of files within the allowed folder.
* Write files - Allow Mendix applications to write content to files within the allowed folder.

### Message Syntax {#file-device}

Before sending messages to the File Device, review the following points:

* Path handling - You can provide the paths either as absolute (for example, `/var/log/app.log` or `C:\Data\report.txt`), or as relative paths. Relative paths are always interpreted relative to the allowed folder configured in Workstation Management.
* Delimiter - The `#` character is used as a delimiter within messages. Paths and data may not contain the `#` character. 
* Case sensitivity - File and directory paths may be case-sensitive depending on the underlying operating system. For example, Linux paths are typically case-sensitive, while Windows paths are not.

#### Message

* `0#Path` - Initiate watching for changes in the specified `Path`. If `Path` is a directory, the device will watch for changes within that directory (creation, deletion, renaming, or modification of files/subdirectories). If `Path` is a file, the device will watch for changes to that specific file (modification, deletion, or renaming).
* `1#Path` - Stop watching for changes in the specified `Path`.
* `2#File path` - Read the content of the file at the specified `File Path`.
* `3#File path#Data#flag` - Write `Data` to the file at the specified `File Path`. The `flag` can be `w` for overwrite, `a` for append If left blank, the value defaults to `w`.

#### Response

* `R#Path` - File or directory at the specified `Path` was renamed, created, or deleted.
* `C#Path` - File or directory at the specified `Path` was changed. This is triggered both when a file is modified and when the contents of a directory changes. 
* `D#Data` - `Data` from file read.
* `E#Error` - `Error` message from operating system.
* `S#{0,1,2,3}#directory` - The command `{0,1,2,3}` on `directory` was successful.

### Example Test: Verifying File Device Configuration

Follow these steps to verify that your File Device configuration is working correctly:

1. Create a new Workspace in the Workstation Management.
2. Create a new Station.
3. Add a `File Device` with the following configuration to this Station:

    * **Device Name** - A meaningful name, for example, *Write files to test folder*.
    * **Allowed Folder** - For example, on a Windows computer you can use a path like `C:\MyTestFolder`. Ensure this folder exists on the computer where the Workstation Client will run.
    * **Allow writing files** - Select **Yes**.
    * Use the default values for everything else.

4. Register the Station to your computer (assuming the Workstation Client is installed there).
5. In your Workspace, navigate to **Test Your Station** and click **Test** by the configured file device.
6. Enter `3#test.txt#Hello from Mendix` in the **Send Message** field, and then press **Send Message**.

    The test should show a response like `S#3#C:\MyTestFolder\test.txt` to indicate that the text file *test.txt* was successfully written to *MyTestFolder*. 

7. Go to *C:\MyTestFolder* and verify that it contains the text file.
8. Open the test file and verify that it contains the text *Hello from Mendix*.

## Bluetooth Devices

Bluetooth Low Energy (BLE) devices using the ATT protocol can be integrated with Mendix Workstation.

### Configuration in Management UI

To add a Bluetooth Device, perform the following steps:

1. Navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device** and select **Bluetooth Device**.
3. Enter the exact device name as it is displayed in your operating system's device manager.

### Message Syntax

This device type requires the following message and response:

#### Message

* `0#ServiceUUID#CharacteristicUUID` - Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` - Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` - Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` - Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

### Response

* `CharacteristicUUID#Response`

## Printers

You can integrate your Workstations with printer devices.

### Configuration in Management UI

To add a printer device, perform the following steps:

1. Navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device** and select **Printer**.
3. Enter the exact device name as it is displayed in your operating system's device manager.

### Message Syntax

This device type requires the following message and response:

#### Message

* `P#PrintJobDocName#Format#DataPayloadInBase64` - Submit a print job.
* `S` - Get printer status and queued jobs.
* `C#JobId` - Cancel print job.

#### Response

* `P#DocName#JobId` - Print job accepted by OS print interface.
* `S#State#StateReason1,...#NumJobs#JobId1:JobName1:JobState1,...` - Printer state and job list summary.
* `E#ErrorMessage` - Error.

#### Example

The sample print command `P#TESTHELLO#RAW#aGVsbG8=` contains the following elements:

1. `P (command prefix)` - Tells the Workstation Client that the incoming instruction is a Print command.
2. Separator
3. `TESTHELLOFILE` (file name) - Name assigned to the print job. The client uses this to create the temporary file (for example, `TESTHELLOFILE.prn`) before sending it to the printer spooler.
4. Separator
5. `RAW` (format type) - Tells the Workstation Client that the following data is a Raw Printer Command (such as ZPL for Zebra printers, EPL, or PCL) rather than a standard document like a PDF or a Word file. Printing in RAW bypasses the standard printer drivers' formatting. It sends the exact code the printer needs to generate labels, barcodes, or specific layouts.
6. `aGVsbG8=` (payload) - A data string encoded to Base64. Base64 decoded, it translates to the text `hello`. If you are testing this and the printer is not reacting, verify that the string you are encoding in Base64 matches the specific language your printer speaks. For example, a Zebra printer cannot process a plain text `hello` unless it is wrapped in ZPL commands like `^XA^FO50,50^A0N,50,50^FDhello^FS^XZ`).
