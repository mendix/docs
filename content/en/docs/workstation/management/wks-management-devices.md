---
title: "Configuring Devices"
linktitle: "Devices"
url: /mendix-workstation/management-devices/
description: "Describes the available devices and device syntax for Mendix Workstation Management."
weight: 60
---

## Introduction

This section details how to configure various device types in Workstation Management. For the message syntax that Mendix applications use to communicate with a device through the Workstation Connector, see [Device Message Syntax](/mendix-workstation/device-syntax/).

## Device Connectivity

Before connecting devices with Mendix Workstation, perform the following steps:

1. Make sure the devices are correctly set up and connected to your computer.
2. Verify that all device drivers are installed and updated.
3. Obtain the connection parameters used by the devices:

    * For Serial Port connection - baud rate, data bits, parity and stop bits, flow control.
    * For TCP/IP connection - IP address and port.

4. Obtain the manual and technical documentation for your devices, including chapters describing the communication protocol and how to configure it.
5. Test the connection and protocol on your operating system using the tool recommended in the device technical documentation or using a common tool such as PuTTY.
    * For Serial Port connection - Open the device and test device basic commands.
    * For TCP/IP connection - Ping the device to make sure that it is reachable on the network and not blocked by a firewall, and then test the basic device commands.

## Device Classes {#device-classes}

A device class is a label that you assign to devices in order to group the ones that fulfil the same role. For example, you can give every barcode scanner in the workspace the *Scanner* class, even when the stations name their scanners differently.

Device classes are defined per workspace and are available to every station in that workspace. You assign a class in the **Device Class** field while adding or editing a device. All device types support classes, and the field is always optional.

Because the class identifies a device by role rather than by name, a Mendix application can address the same kind of device on every station without knowing the individual device names. In the Workstation Connector, the `deviceClass` parameter of the `GetCreateDevice` JavaScript action refers to this value. For more information, see [Developing an App with the Workstation Connector](/mendix-workstation/develop-app/).

### Managing Device Classes

To review the device classes of a workspace, click **Device Classes** in the workspace menu. The overview lists each class together with the number of **Devices** that use it.

From this page you can perform the following actions:

* **Create Device Class** - Click **Create Device Class**, enter a name in the **Device Class Name** field, and then click **Create Device Class**.
* **Rename Device Class** - Click the three-dot menu of the class, and then click **Rename Device Class**.
* **Delete Device Class** - Click the three-dot menu of the class, and then click **Delete Device Class**.

{{% alert color="warning" %}}
Renaming or deleting a class that is used to lookup a device in a Workstation app breaks the logic of every app that relies on it, so check the **Devices** count and active **Apps** before you change a class.
{{% /alert %}}

## Card Readers

Card reader devices cannot be configured as separate devices in the **Devices** overview of a **Station** page. Instead, they are automatically detected by the Workstation Client and added to the device list of the Client. 

Auto-detecting card readers is disabled by default. You can enable this setting on a **Station** page by selecting **Detect Card Readers**. 

For the message syntax used to communicate with this device, see [Card Readers](/mendix-workstation/device-syntax/#card-readers).

## Serial Port

Serial Port devices allow you to connect to a device with a serial port.

### Configuring Serial Port Devices

To add a serial port device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **Serial Port**, and then click **Next**.
3. Enter a meaningful name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. In the **Detect Serial Device By** section, select one of the following values, depending on whether the serial port device uses static or dynamic port assignment:

    * For static port assignment, select **Port**.
    * For dynamic port assignment, select **Identifiers**.

7. For static port assignment, configure the following connection parameters:

    * **Port** - Required; the identifier of the serial port
    * **Baudrate** - Required; the Bits per Second rate
    * **Data Bits** - Required; the number of bits per data frame
    * **Parity** - Optional; the parity mechanism used, that is, the way in which an extra bit is added to each data byte in order to help detect transmission errors
    * **Flowcontrol** - Optional; the handshake mechanism between the server and receiver, used to prevent data overflow
    * **Stop Bits** - Required; the bits when data transmission ends.

8. For dynamic port assignment, configure the following connection parameters:

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

9. Click **Next**.
10. In the **Split Incoming Message By** section, select one of the following options:

    * **Delimiter** - Messages received from the device are split by the specified character or characters marking the end of the message, for example, `\r\n`.
    * **Time and Size** - Messages received from the device are split by time interval in milliseconds and maximum message size in bytes.
    * **Do Not Split** - Messages received from the device are not automatically split.

11. In the **Characters Added to Message** field, specify the character or characters marking the end of the message sent to the device, for example, `\r\n`.
12. In the **Encoding** field, select the message encoding.
13. Click **Add Device**.

## TCP/IP Client

TCP/IP clients allow you to connect to remote devices over the network.

### Configuring TCP/IP Clients

To add a TCP/IP client, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **TCP/IP Client**, and then click **Next**.
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

## Bluetooth

Add Bluetooth LE (BLE) devices that use the ATT protocol by entering the exact device name as displayed in your operating system's Device Manager.

### Configuring Bluetooth Devices

To add a Bluetooth device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **Bluetooth**, and then click **Next**.
3. Enter the exact device name as it is displayed in your operating system's Device Manager.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Add Device**.

For the message syntax used to communicate with this device, see [Bluetooth](/mendix-workstation/device-syntax/#bluetooth).

## Camera {#camera}

A camera device describes a camera attached to the computer that runs the Workstation Client. It defines which camera to use, the video feed properties to request from it, and which detection features to enable. Only USB cameras and webcams are currently supported.

### Configuring Cameras

To add a camera device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **Camera**, and then click **Next**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Configure the following connection parameters:

    | Parameter | Description |
    | --- | --- |
    | **Camera Type** | Required; the type of camera connection. Only **USB/Webcam** is currently supported. Support for camera streams over Real Time Streaming Protocol (RTSP), User Datagram Protocol (UDP), and HTTP with Motion JPEG (MJPEG) is planned. |
    | **Camera Name** | Optional; the name of the camera to use. Leave the field empty to use the default camera. |
    | **Width** | Optional; the requested width of the camera feed. If the camera does not support the requested value, the closest supported value is used. The value must be greater than `0`, or empty. |
    | **Height** | Optional; the requested height of the camera feed. If the camera does not support the requested value, the closest supported value is used. The value must be greater than `0`, or empty. |
    | **Frame Rate** | Optional; the requested frame rate of the camera feed. If the camera does not support the requested value, the closest supported value is used. The value must be greater than `0`, or empty. |
    | **Enable Barcode Detection** | Optional; when enabled, the video feed is processed and an event is sent when a barcode is detected in the frame. The default value is **No**. |
    | **Enable Motion Detection** | Optional; when enabled, the video feed is processed and an event is sent when motion is detected in the frame. The default value is **No**. |

7. Click **Add Device**.

## Keyboard Wedge {#keyboard-wedge}

You can configure Workstation to connect with devices that emulate a keyboard by sending data as key strokes, such as barcode scanners, RFID readers, or measurement devices. Because these devices present themselves to the operating system as a standard keyboard, keyboard events are captured wherever the current focus is, for example in the web app or in an input field. The operator does not have to place the cursor in a specific input field first.

The Workstation Client recognizes messages from a keyboard wedge device by combining several criteria. It measures the rate at which the characters arrive, which for a device is faster than a person can type, and it uses the configured prefix, suffix, and message length requirements to tell the device apart from other sources of key strokes such as macro pads or automation scripts.

Because a keyboard wedge device is indistinguishable from a keyboard at the operating system level, this recognition is a best-effort mechanism. The Workstation Client cannot tell two sources apart if they produce messages with the same character throughput, length, and prefix and suffix. Give each keyboard wedge device a distinctive combination of these settings when you configure more than one device, or when macro pads or automation scripts are in use on the same computer.

### Configuring Keyboard Wedges

To add a keyboard emulator device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **Keyboard Wedge**, and then click **Next**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Configure the following connection parameters:

    | Parameter | Description |
    | --- | --- |
    | **Inter Character Timeout (ms)** | Required; the maximum allowed amount of time in milliseconds between key strokes for them to be considered as coming from a device. The value must be a positive integer. The default value is `50`. |
    | **Keyboard Layout** | Required; the keyboard layout of the device. To use the active keyboard layout as defined by your operating system, select **System**. Select **en-US** as a fallback when the system keyboard layout is not compatible with the device. For example, many barcode scanners send characters from the Latin alphabet, which the system layout cannot resolve if the operating system uses a non-Latin layout such as Chinese. The default value is **System**. |
    | **Suffix** | Required; a series of characters denoting the end of a message. The suffix is removed from the payload before it is forwarded to the Workstation Connector. The default value is `\r`, which corresponds to the carriage return that most keyboard emulating devices append to the key stroke. How this carriage return arrives depends on the platform: on Windows the operating system adds a line feed `\n` to the default carriage return, so the key strokes are followed by `\r\n`, while on macOS and Linux only a line feed `\n` is received. Set the suffix to match what your platform delivers, for example `\r` on Windows and `\n` on macOS and Linux. |
    | **Minimum Message Length** | Optional; the shortest message that can be sent to the Connector from this device, excluding the prefix and suffix. Leave the field empty to accept messages of any length. |
    | **Maximum Message Length** | Optional; the longest message that can be sent to the Connector from this device, excluding the prefix and suffix. Leave the field empty to accept messages of any length. If you set both values, the maximum must be greater than or equal to the minimum. |
    | **Prefix** | Optional; a series of characters denoting the start of a message. The prefix is removed from the payload before it is forwarded to the Workstation Connector. |

7. Click **Add Device**.

Configure the prefix, suffix, and message length limits to match the data that your device sends. The more specific these settings are, the more reliably the Workstation Client attributes an incoming message to the correct device.

For the message syntax used to communicate with this device, see [Keyboard Wedge](/mendix-workstation/device-syntax/#keyboard-wedge).

## Printer

You can integrate your Workstations with printer devices.

### Configuring Printers

To add a printer device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **Printer**, and then click **Next**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Enter the exact device name as it is displayed in your operating system's device manager.

    Alternatively, leave the field blank and the Workstation Client will automatically connect to the default printer as defined by the operating system.

7. Click **Add Device**.

For the message syntax used to communicate with this device, see [Printer](/mendix-workstation/device-syntax/#printer).

## File Device

The file device allows Mendix applications to interact with the local file system of the computer running the Workstation Client.

### Configuring File Devices

To add a file device, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **File Device**, and then click **Next**.
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

For the message syntax used to communicate with this device, see [File Device](/mendix-workstation/device-syntax/#file-device).

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

## TCP/IP Server

TCP/IP clients allow you to host connections over the network.

### Configuring TCP/IP Servers

To add a TCP/IP server, perform the following steps:

1. In Workstation Management, navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device**, select **TCP/IP Server**, and then click **Next**.
3. In the **Device Name** field, enter an identifying name for the device.
4. Optional: Select or create a class to help you manage your devices.
5. Click **Next**.
6. Configure the following connection parameters:

    * **Port** - The port on which the TCP/IP Server is initialized. The value must be in the range of `0-65535`.

7. Click **Next**.
8. In the **Split Incoming Message By** section, select one of the following options:

    * **Delimiter** - Messages received from the device are split by the specified character or characters marking the end of the message, for example, `\r\n`.
    * **Time and Size** - Messages received from the device are split by time interval in milliseconds and maximum message size in bytes.
    * **Do Not Split** - Messages received from the device are not automatically split.

9. In the **Characters Added to Message** field, specify the character or characters marking the end of the message sent to the device, for example, `\r\n`.
10. In the **Encoding** field, select the message encoding.
11. Click **Add Device**.
