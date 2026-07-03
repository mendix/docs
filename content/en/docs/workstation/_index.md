---
title: "Mendix Workstation"
url: /mendix-workstation/
description: "Presents documentation on configuring and using Mendix Workstation."
weight: 42
no_list: false 
description_list: true 
cascade:
    - content_type: "Mendix Workstation"
---

## Introduction

Mendix Workstation helps you build applications for shop floor operators. It enables Mendix applications to directly interact with peripheral devices on a local workstation, without relying on intermediate servers or heavy network traffic.

By connecting applications directly to the PC's local resources, Workstation allows Mendix apps to communicate in near real-time with devices like printers, barcode scanners, smart card readers, and industrial scales. This setup ensures low-latency performance and reduces infrastructure complexity.

Workstation is especially valuable in manufacturing and industrial environments where precision, speed, and reliability are key to operator efficiency.

In addition to connectivity features, Workstation supports enterprise-grade deployment of projects across multiple environments and sites. It enables distributed teams to collaborate effectively and centrally manage connections to a wide range of equipment in a controlled and secure manner.

## Capabilities Overview

Mendix Workstation has the following features:

* Enables Mendix applications to communicate with local devices without routing through a central server, network overload, or any additional intermediate systems.
* Uses Mendix nanoflows to handle interactions with the local PC, such as sending and receiving on-event messages.
* Supports multiple interfaces:

    * PCSC (smart card Reader) - APDU protocol
    * Serial Port (COM Port) RS232 standard
    * TCP-IP (Ethernet)
    * Bluetooth LE (BLE) - ATT protocol
    * File System

* Can emulate and simulate interfaces.

### Use Cases

You can use Mendix Workstation to create apps that handle use cases such as the following:

* Printing labels on an industrial thermal label printer (for example, a Zebra printer)
* Badge operators with an NFC smart card reader and PC/SC specification
* Scanning and parsing barcodes (for example, GS1 specifications)
* Weighing materials with an industrial scale (for example, a Mettler Toledo SICS-compatible scale)
* Connected smart tools (for example, screwdrivers with torque control)

### Benefits

Using Mendix Workstation offers the following benefits for your organization:

* It improves operator user experience and efficiency by enabling Mendix applications to directly interact with devices on a local workstation.
* It allows for the renovation of home-grown applications and gaining control over legacy systems by providing a modern platform for Mendix applications to connect directly to existing devices.
* It helps keep core systems clean by allowing Mendix applications to communicate with devices without routing through any additional intermediate systems.
* It enables the creation of apps adapted to the operator's job with the exact devices they use, instead of forcing the operator to adapt their job to generic software limitations.
* It gives you the means to compose new forms of user experience tailored to manufacturing processes, equipment and environment, so that your applications can seamlessly integrate with new physical tools and processes on the shop floor.
* It facilitates expansion to adjacent users and domains and helps cross boundaries between silos by enabling deployment across multiple environments and sites.

## Key Components

Mendix Workstation consists of the following components:

* [Workstation Management](/mendix-workstation/management/) - Allows centralized configuration.
* [Workstation Client](/mendix-workstation/client/) - Allows real-time communication with local hardware.
* [Workstation Connector](/mendix-workstation/connector/) - Allows app integration.

{{< figure src="/attachments/workstation/WorkstationDiagram.png" class="no-border" >}}

## Licensing Mendix Workstation

Mendix Workstation is [Limited Availability](/releasenotes/release-status/#limited-availability) for production use. Support is provided according to your Mendix SLA if you purchased a Workstation license. If you want to take Mendix Workstation into production, contact your CSM to see what arrangements are possible. Without a license you can use Mendix Workstation for development, but workspaces are individual and cannot be shared.

The following functionalities are only available with a license:

* [Bulk import of stations](/mendix-workstation/import-export/)
* [Bulk registration of Workstation Clients](/mendix-workstation/register/)
* [Inviting users](/mendix-workstation/connector/#invite-users)

## Read More
