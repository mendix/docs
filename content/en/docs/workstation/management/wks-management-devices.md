---
title: "Configuring Devices"
linktitle: "Devices"
url: /mendix-workstation/management-devices/
description: "Describes the available devices and device syntax for Mendix Workstation Management."
weight: 60
---

## Introduction

This section details how to configure various device types in Workstation Management, along with the specific message syntax required for Mendix applications to communicate with the device through the Workstation Client.

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

Auto detecting card readers is disabled by default. You can enable this setting on a **Station** page by selecting **Detect Card Readers**. 

### Message Syntax {#card-readers}

This device type requires the following message and response:

#### Message

Send instruction in hexadecimal as a string, for example, *FFCA000000* to read the smart card ID. The messages exchanged with the smart card are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

#### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal.
* `3# Error` - Error message from device.

## Serial Port

Serial Port devices allow you to connect to a device with a serial port.

### Configuring Serial Port Devices

To add a serial port device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device** and, and then click **Serial Port**.
3. Click **Next**.
4. Enter a meaningful name for the device.
5. Optional: Select or create a class to help you manage your devices.
6. Click **Next**.
7. In the **Detect Serial Device By** section, select one of the following values, depending on whether the serial port device uses static or dynamic port assignment:

    * For static port assignment, select **Port**.
    * For dynamic port assignment, select **Identifiers**.

8. For static port assignment, configure the following connection parameters:

    * **Port** - Required; the identifier of the serial port
    * **Baudrate** - Required; the Bits per Second rate
    * **Data Bits** - Required; the number of bits per data frame
    * **Parity** - Optional; the parity mechanism used, that is, the way in which an extra bit is added to each data byte in order to help detect transmission errors
    * **Flowcontrol** - Optional; the handshake mechanism between the server and receiver, used to prevent data overflow
    * **Stop Bits** - Required; the bits when data transmission ends.

9. For dynamic port assignment, configure the following connection parameters:

    * At least one of the following required identifiers:

        * **Serial Number** - The serial number of the device
        * **Friendly Name** - Only available on Windows systems; the device name from Device Manager
        * **Manufacturer** - The manufacturer of the device
        * **Plug and Play ID** - The PnPId of the device.

    * **Baudrate** - Required; the Bits per Second rate
    * **Data Bits** - Required; the number of bits per data frame
    * **Parity** - Optional; the parity mechanism used, that is, the way in which an extra bit is added to each data byte in order to help detect transmission errors
    * **Flowcontrol** - Optional; the handshake mechanism between the server and receiver, used to prevent data overflow
    * **Stop Bits** - Required; the bits when data transmission ends.

10. Click **Next**.
11. In the **Split Incoming Message By** section, select one of the following options:

    * **Delimiter** - Messages received from the device are split by the specified character or characters marking the end of the message, for example, `\r\n`.
    * **Time and Size** - Messages received from the device are split by time interval in milliseconds and maximum message size in bytes.
    * **Do Not Split** - Messages received from the device are not automatically split.

12. In the **Characters Added to Message** field, specify the character or characters marking the end of the message sent to the device, for example, `\r\n`.
13. In the **Encoding** field, select the message encoding.
14. Click **Add Device**.

## Bluetooth

Add Bluetooth LE (BLE) devices that use the ATT protocol by entering the exact device name as displayed in your operating system's Device Manager.

### Configuring Bluetooth Devices

To add a Bluetooth device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device** and, and then click **Bluetooth**.
3. Click **Next**.
4. Enter the exact device name as it is displayed in your operating system's Device Manager.
5. Optional: Select or create a class to help you manage your devices.
6. Click **Add Device**.

### Message Syntax

This device type requires the following message and response:

#### Message

* `0#ServiceUUID#CharacteristicUUID` - Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` - Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` - Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` - Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

### Response

* `CharacteristicUUID#Response`

## File Device

The file device allows Mendix applications to interact with the local file system of the computer running the Workstation Client.

### Configuring File Devices

To add a file device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, and then select **File Device**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Configure the following connection parameters:

    * **Allowed Folder** - The folder in which the Workstation Client can perform actions. The allowed folder supports flexible path configuration through environment variables, providing cross-platform compatibility for both Windows and Unix-based systems. For more information, see [Allowed Folder Configuration](#allowed-folder).
    * **Allow subscribing to change events** - Allows the Workstation Connector to monitor the allowed folder for changes.
    * **Allow reading files** - Enables Mendix applications to read the content of files within the allowed folder.
    * **Allow writing files** - Enables Mendix applications to write content to files within the allowed folder.

7. Click **Add Device**.

### Allowed Folder Configuration {#allowed-folder}

For more information about supported environment variables and path formats for the allowed folder, refer to the sections below.

#### Environment Variable Support

The system accepts environment variables in the allowed folder configuration within the Workstation Management interface. Both Windows and Unix syntax formats are supported on all platforms, providing cross-platform compatibility.

#### Supported Path Formats

Windows and Unix-style paths can be used independently of the operating system the Workstation Client is running on. The following examples demonstrate the various syntax options available:

* Windows-style with backslash: `%AppData%\test`
* Windows-style with forward slash: `%AppData%/test`
* Unix-style with backslash: `$EnvVar\test`
* Unix-style with forward slash: `$EnvVar/test`

### Message Syntax {#file-device}

Before sending messages to the file device, review the following points:

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

Follow these steps to verify that your file device configuration is working correctly:

1. Create a new Workspace in the Workstation Management.
2. Create a new station.
3. Add a file device with the following configuration to this station:

    * **Device Name** - A meaningful name, for example, *Write files to test folder*.
    * **Allowed Folder** - For example, on a Windows computer you can use a path like `C:\MyTestFolder`. Ensure this folder exists on the computer where the Workstation Client will run.
    * **Allow writing files** - Select **Yes**.
    * Use the default values for everything else.

4. Register the station to your computer (assuming the Workstation Client is installed there).
5. In your Workspace, navigate to **Test Your Station** and click **Test** by the configured file device.
6. Enter `3#test.txt#Hello from Mendix` in the **Send Message** field, and then press **Send Message**.

    The test should show a response like `S#3#C:\MyTestFolder\test.txt` to indicate that the text file *test.txt* was successfully written to *MyTestFolder*. 

7. Go to *C:\MyTestFolder* and verify that it contains the text file.
8. Open the test file and verify that it contains the text *Hello from Mendix*.

## TCP/IP Client

TCP/IP clients allow you to connect to remote devices over the network.

### Configuring TCP/IP Clients

To add a TCP/IP client, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, and then select **TCP/IP Client**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Configure the following connection parameters:

    * **Host** - The host to which the TCP/IP Client connects. For test scenarios, you can use `localhost` to connect to a TCP/IP server on the same machine. For production scenarios, it is usually a local IP address. 
    * **Port** - The port to which the TCP/IP Client connects. The value must be in the range of `0-65535`.

7. Click **Next**.
8. In the **Split Incoming Message By** section, select one of the following options:

    * **Delimiter** - Messages received from the device are split by the specified character or characters marking the end of the message, for example, `\r\n`.
    * **Time and Size** - Messages received from the device are split by time interval in milliseconds and maximum message size in bytes.
    * **Do Not Split** - Messages received from the device are not automatically split.

9. In the **Characters Added to Message** field, specify the character or characters marking the end of the message sent to the device, for example, `\r\n`.
10. In the **Encoding** field, select the message encoding.
11. Click **Add Device**.

## TCP/IP Server

TCP/IP clients allow you to host connections over the network.

### Configuring TCP/IP Servers

To add a TCP/IP server, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, and then select **TCP/IP Server**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Configure the following connection parameters:

    * **Port** - The port on which the TCP/IP Server is initalized. The value must be in the range of `0-65535`.

7. Click **Next**.
8. In the **Split Incoming Message By** section, select one of the following options:

    * **Delimiter** - Messages received from the device are split by the specified character or characters marking the end of the message, for example, `\r\n`.
    * **Time and Size** - Messages received from the device are split by time interval in milliseconds and maximum message size in bytes.
    * **Do Not Split** - Messages received from the device are not automatically split.

9. In the **Characters Added to Message** field, specify the character or characters marking the end of the message sent to the device, for example, `\r\n`.
10. In the **Encoding** field, select the message encoding.
11. Click **Add Device**.

## Printers

You can integrate your Workstations with printer devices.

### Configuring Printers

To add a printer device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, and then select **Printer**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Enter the exact device name as it is displayed in your operating system's device manager.

    Alternatively, leave the field blank and the Workstation Client will automatically connect to the default printer as defined by the operating system.

7. Click **Add Device**.

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
6. `aGVsbG8=` (payload) - A data string encoded to Base64. Base64 decoded, it translates to the text `hello`. If you are testing this and the printer is not reacting, verify that the string you are encoding in Base64 matches the specific language your printer speaks. For example, a Zebra printer cannot process a plain text `hello` unless it is wrapped in ZPL commands like `^XA^FO50,50^A0N,50,50^FDhello^FS^XZ`.
