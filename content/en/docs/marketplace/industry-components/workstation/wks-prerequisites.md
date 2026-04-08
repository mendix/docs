---
title: "Getting Started with Mendix Workstation"
linktitle: "Getting Started"
url: /mendix-workstation/prerequisites/
description: "Documents the requirements for Mendix Workstation."
weight: 10
---

## Introduction

This document presents the system requirements for Mendix Workstation.

## Workstation Client Download Links

Mendix Workstation can be downloaded from the Mendix Marketplace:

* [Microsoft Windows (global installer)](https://marketplace.mendix.com/link/component/247448)
* [Microsoft Windows (portable)](https://marketplace.mendix.com/link/component/247456)
* [Linux ARM 64](https://marketplace.mendix.com/link/component/247459)

## System Requirements

* Operating System - Windows 10 or Windows 11 (64-bit);  Linux ARM64
* Memory - Minimum 4 GB RAM (8 GB recommended for optimal performance)
* Disk Space - 400 MB of free disk space for installation

## Access Requirements

* A Mendix account
* Access to Mendix Workstation Management for configuration

## Network Configuration

Before implementing Mendix Workstation, perform the following steps:

1. Ensure that the Workstation user can access the Mendix Cloud.
2. Open the required ports for communication (for example, TCP 443 for HTTPS).
3. Add the Workstation Client to the Allow list for any firewall or antivirus software, if applicable.

### Custom Certificates and Proxy Settings

The Workstation Client uses the operating system's certificates and proxy environment variables to establish a connection with Workstation Management. In most controlled corporate environments, these settings are preconfigured on employee computers by IT departments.

To use a custom proxy configuration, you must start the Workstation Client from the command line and set the environment variables as described [here](https://github.com/nodejs/undici/blob/main/docs/docs/api/EnvHttpProxyAgent.md#class-envhttpproxyagent). For example, from the Windows Command Prompt, run the following command:

```
set HTTPS_PROXY=[PROXY_IP_ADDRESS] && "C:\Program Files\Mendix Workstation\Mendix Workstation.exe"
```

## Device Connectivity

Before connecting devices with Mendix Workstation perform the following steps:

* Make sure the devices are correctly set up and connected to your computer.
* Verify that the device driver is installed and up to date.
* Take a note of the connection parameters used by the devices:

    * For Serial Port connection - baud rate, data bits, parity and stop bits, flow control.
    * For TCP/IP connection - IP address and port.

* Obtain the manual and technical documentation for your devices, including chapters describing the communication protocol and how to configure it.
* Test the connection and protocol on your operating system using the tool recommended in the device technical documentation or using common tool such as PuTTY.
    * For Serial Port connection - Open the device and test device basic commands.
    * For TCP/IP connection - Ping the device to make sure that it is reachable on the network and not blocked by a firewall, and then test the basic device commands.

## Best Practices for Working with Mendix Workstation

As you begin your work with Mendix Workstation, keep in mind the following best practices to help you.

### Security Recommendations

For more information, see [Security Best Practices for Mendix Workstation](/mendix-workstation/security/).

### Performance Optimization

* Ensure workstations meet the recommended hardware specifications.
* Minimize background processes to improve performance.
* When building app logic reusing the Connectors nanoflows, minimize the amount of microflow calls and [other actions](https://docs.mendix.com/refguide/nanoflows/#logic-where-no-connection-is-needed) that require a server connection. One key benefit of Mendix Workstation is client-sided data processing. Every call to the Mendix runtime adds an performance overhead.  

### Maintenance Guidelines

* Periodically review and update workstation and device configurations.
* Monitor workstation health and resolve any connectivity issues promptly.
