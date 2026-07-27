---
title: "Installing the Workstation Connector"
url: /mendix-workstation/install-connector/
description: "Describes how to install the Mendix Workstation Connector."
weight: 20
---

## Introduction

After you have [installed the Workstation Client](/mendix-workstation/install-client/), you must either build a Mendix application that will send data or commands to your devices, or extend an existing app accordingly. In order to do that, you must download, install, and configure the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460) from the Mendix Marketplace.

### How the Connection Works

The Workstation Connector must authenticate itself to the Workstation Client so that the Client trusts the app using the Connector and establishes a connection. To achieve this, you must generate a key pair in the Workstation Connector, and then configure the public key in the corresponding app in the Workstation Management. Workstation Client configuration must be up-to-date, so that the public key can be verified.

The Workstation Connector establishes connection with the device through the Workstation Client when it is needed. The connection is closed when it is not required anymore.

When a client browser or tab instance tries to connect to a device, previously connected browser or tab instances are disconnected from the device.

Since version 4.0, the Workstation Connector connects with Workstation Client using a single persistent WebSocket for all device communication.  

## Prerequisites

* Mendix Workstation 3.0.0 or newer
* Mendix Studio Pro 9.24.11 or newer

## Installing the Workstation Connector {#install-connector}

To install and configure the Workstation Connector, perform the following steps:

1. Open an existing app to extend with Workstation functionality in Mendix Studio Pro, or create a new app.
2. Import the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460) from the Mendix Marketplace.

    For more information, see [How to Use Marketplace Content](/appstore/use-content/)

3. Register one or more Workstation Clients. 

    For more information, see [Registering Workstation Clients](/mendix-workstation/register/).

4. Configure your application. For more information, see [Integrating with Mendix Studio Pro](/mendix-workstation/configure-connector/).
