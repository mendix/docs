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
Mendix Workstation Client is [Limited Availability](https://docs.mendix.com/releasenotes/release-status/#limited-availability) for production use. Support is provided according to your Mendix SLA if you have purchased a Workstation license. If you want to use Mendix Workstation Client in production, contact your Customer Success Manager (CSM) to discuss available options. Without a license, you can use Mendix Workstation Client for development purposes only; however, workspaces remain individual and cannot be shared.
{{% /alert %}}

## Introduction

Mendix Workstation Client is designed to help you build smarter, faster, and more operator-friendly applications for shop floor operators. It enables Mendix cloud applications to interact directly with peripheral devices on a local workstation, eliminating the need for intermediate servers or heavy network traffic.

By connecting applications directly to the PC's local resources, Workstation enables near real-time communication with devices such as printers, barcode scanners, smart card readers, and industrial scales—all from within a Mendix app. This architecture ensures low-latency performance and reduces infrastructure complexity.

Workstation is especially valuable in manufacturing and industrial environments where precision, speed, and reliability are critical to operator efficiency.

In addition to device connectivity, Workstation supports enterprise-grade deployment across multiple environments and sites. It enables distributed teams to collaborate effectively and centrally manage connections to a wide range of heterogeneous equipment in a controlled and secure manner.

## Features

Mendix Workstation Client provides the following key features:

* **Direct Local Device Access** – Enables Mendix client applications to send and receive messages directly from the PC's local hardware.
* **No Server Intermediary** – Communication occurs directly between the client app and local devices, without routing through a central server or any intermediate systems, avoiding network congestion.
* **Nanoflow Integration** – Interactions with the local PC, such as sending and receiving event-driven messages, are handled through Mendix nanoflows.
* **Multiple Interface Support** – Supports various communication protocols and interfaces:

    * PCSC (Smart Card Reader) – APDU protocol
    * Serial Port (COM Port) – RS-232 standard
    * TCP/IP (Ethernet)
    * Bluetooth LE (BLE) – ATT protocol
    * File System

* **Interface Emulation** – Provides the ability to emulate and simulate interfaces for testing purposes.

## Benefits

Using Mendix Workstation Client provides the following benefits:

* **Enhanced Operator Experience** – Improves user experience and operational efficiency for shop floor operators.
* **Legacy System Modernization** – Modernizes home-grown applications and provides better control over legacy systems.
* **System Integrity** – Keeps core systems clean and isolated from device-level integrations.
* **Job-Centric Design** – Creates applications adapted to the operator's workflow, rather than forcing operators to adapt their workflow to the software.
* **Tailored User Experience** – Enables new forms of user experience specifically designed for manufacturing processes, equipment, and environments.
* **Extended Reach** – Expands capabilities to adjacent users and domains, breaking down silos between systems.

## Use Cases

Mendix Workstation Client supports a variety of manufacturing and industrial scenarios, including:

* **Label Printing** – Print labels on industrial thermal label printers (such as Zebra printers).
* **Operator Authentication** – Authenticate operators using NFC smart card readers with PC/SC specification.
* **Barcode Processing** – Scan and parse barcodes in various formats (such as GS1 specifications).
* **Material Weighing** – Weigh materials using industrial scales (such as Mettler Toledo SICS-compatible scales).
* **Smart Tool Integration** – Integrate connected smart tools (such as torque-controlled screwdrivers).

## Components of Mendix Workstation Client

Mendix Workstation Client consists of the following components:

* [Workstation Management](https://workstation.home.mendix.com/) - Allows centralized configuration.
* [Workstation Client](https://marketplace.mendix.com/link/component/247448) - Allows real-time communication with local hardware.
* [Workstation Connector](https://marketplace.mendix.com/link/component/247460) - Allows app integration.

Together, these components enable Mendix applications to securely and efficiently integrate with local devices, bridging the gap between digital workflows and physical operations.

### Architecture Diagram

{{< figure src="/attachments/workstation/WorkstationDiagram.png" class="no-border" >}}

### Workstation Management (Mendix Service)

**Primary Users:** Central IT and application support teams

Workstation Management is a Mendix Platform service that provides a centralized interface to configure and monitor all workstations and devices across the organization. Whether managing a few stations or hundreds across multiple global sites, administrators can register computers, assign devices, group them into workspaces, and remotely troubleshoot connection issues.

This centralized approach simplifies the management of large, diverse device fleets without requiring manual setup or on-site support.

### Workstation Client (Native Application)

**Primary Users:** Central IT, support teams, operators, and supervisors

Installed on each local workstation, the Workstation Client acts as a bridge between the Mendix client app and local hardware. It manages communication between connected devices and the client application using configurations provided by Workstation Management.

### Workstation Connector (Mendix Module)

**Primary Users:** Mendix developers

The Workstation Connector is a plug-and-play Mendix module that enables developers to connect their applications to local devices using nanoflows. It establishes a connection with the Workstation Client, which serves as the intermediary between the Mendix app and local devices. Once connected, the module facilitates seamless data exchange by routing messages and events between the application and devices.

The connector handles the following tasks:

* Retrieving local station configuration (name and device list)
* Connecting and disconnecting devices
* Exchanging messages with devices
* Subscribing to device events to trigger application logic when receiving messages from the device

## Read More
