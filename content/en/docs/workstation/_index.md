---
title: "Mendix Workstation Client"
url: /mendix-workstation/
description: "Presents documentation on configuring and using the Mendix Workstation Client."
weight: 42
no_list: false 
description_list: true 
cascade:
    - content_type: "Mendix Workstation"
---
{{% alert color="info" %}}
Mendix Workstation Client is [Limited Availability](https://docs.mendix.com/releasenotes/release-status/#limited-availability) for production use. Support is provided according to your Mendix SLA if you purchased a Workstation license. If you want to take the Mendix Workstation Client into production, contact your CSM to see what arrangements are possible. Without a license you can use the Mendix Workstation Client for development, but workspaces are individual and cannot be shared.
{{% /alert %}}

## Introduction

Mendix Workstation Client is designed to help you build smarter, faster, and more operator-friendly applications for shopfloor operators. It enables Mendix cloud applications to directly interact with peripheral devices on a local workstation, without relying on intermediate servers or heavy network traffic.

By connecting applications directly to the PC's local resources, Workstation allows for near real-time communication with devices like printers, barcode scanners, smartcard readers, and industrial scales, all from within a Mendix app. This setup ensures low-latency performance and reduces infrastructure complexity.

Workstation is especially valuable in manufacturing and industrial environments where precision, speed, and reliability are key to operator efficiency.

In addition to connectivity features, Workstation supports enterprise-grade deployment of projects across multiple environments and sites. It enables distributed teams to collaborate effectively and centrally manage connections to a wide range of heterogeneous equipment assets in a controlled and secure manner.

## Features of Mendix Workstation Client

Mendix Workstation Client has the following features:

* Direct local device access - Mendix Workstation Client allows Mendix client applications to send and receive messages directly from the PC's local hardware.
* No server detour - Communication happens between the client app and local devices — without routing through a central server, network overload, or any additional intermediate systems.
* Interactions with the local PC, such as sending and receiving on-event messages, are handled with Mendix nanoflows.
* Supports multiple interfaces:

    * PCSC (Smartcard Reader) - APDU protocol
    * Serial Port (COM Port) RS232 standard
    * TCP-IP (Ethernet)
    * Bluetooth LE (BLE) - ATT protocol
    * File System

* Can emulate and simulate interfaces.

## Benefits of Using Mendix Workstation Client

* Improve operator user experience and efficiency.
* Renovate home-grown application and get control of legacy systems.
* Keep core systems clean.
* Create apps adapted to the operator's job, instead of forcing the operator to adapt their job to the software.
* Compose new forms of user experience tailored to manufacturing processes, equipment and environment.
* Expand to adjacent users and domains of your core systems and cross boundaries between silos.

## Use Cases

Mendix Workstation Client can be used to create apps that handle use cases such as the following:

* Printing labels on an industrial thermal label printer (for example, a Zebra printer)
* Badge operators with an NFC smartcard reader and PC/SC specification
* Scanning and parsing barcodes (for example, GS1 specifications)
* Weighing materials with an industrial scale (for example, a Mettler Toledo SICS-compatible scale)
* Connected smart tools (for example, screwdrivers with torque control)

## Components of Mendix Workstation Client

Mendix Workstation Client consists of the following components:

* [Workstation Management](https://workstation.home.mendix.com/) - Allows centralized configuration.
* [Workstation Client](https://marketplace.mendix.com/link/component/247448) - Allows real-time communication with local hardware.
* [Workstation Connector](https://marketplace.mendix.com/link/component/247460) - Allows app integration.

Together, these components enable Mendix applications to securely and efficiently integrate with local devices, bridging the gap between digital workflows and physical operations.

### Architecture Diagram

{{< figure src="/attachments/workstation/WorkstationDiagram.png" class="no-border" >}}

### Workstation Management (Mendix Service)

Used by central IT and application support teams. Workstation Management is a Mendix Platform application which provides a centralized interface to configure and monitor all workstations and devices across the organization. Whether managing a few stations or hundreds across multiple global sites, administrators can register computers, assign devices, group them into workspaces, and remotely troubleshoot connection issues.

This makes it easier to manage a large, diverse fleet of devices without the need for manual setup or on-site support.

### Workstation Client (Native Application)

Used by central IT, support teams, operators, and supervisors. Installed on each local workstation, the Workstation Client acts as a bridge between the Mendix client app and local hardware. It handles the traffic between connected devices and the client application using the configurations provided by the Workstation Management.

### Workstation Connector (Mendix Module)

Used by Mendix developers. The App Connector is a plug-and-play Mendix module that allows developers to connect their apps to local devices using nanoflows. It establishes a connection with the Workstation Client, which acts as the intermediary between the Mendix app and the local devices. Once this connection is established, the module facilitates seamless data exchange by routing messages and events back and forth between the app and the devices.

The connector handles the following tasks:

* Retrieving local station configuration (name and device list).
* Connecting and disconnecting devices.
* Exchanging messages with the device.
* Subscribing for triggering app logic on event when receiving messages from the device.

## Read More
