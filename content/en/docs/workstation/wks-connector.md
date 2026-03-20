---
title: "Mendix Workstation Connector"
linktitle: "Workstation Connector"
url: /mendix-workstation/connector/
description: "Describes how to set up and administer Mendix Workstation Connector."
weight: 30
---

## Introduction

The [Workstation Connector](https://marketplace.mendix.com/link/component/247460) is a Mendix module that allows developers to connect their apps to local devices using nanoflows. It establishes a connection with the Workstation Client, which acts as the intermediary between the Mendix app and the local devices. Once this connection is established, the module facilitates seamless data exchange by routing messages and events back and forth between the app and the devices.

The connector handles the following tasks:

* Retrieving local station configuration (name and device list)
* Connecting and disconnecting devices
* Exchanging messages with devices
* Subscribing for triggering app logic on event when receiving messages from a device

### Users

The Workstation Connector is used by Mendix developers.