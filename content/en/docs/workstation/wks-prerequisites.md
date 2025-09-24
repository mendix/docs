---
title: "Getting Started with Mendix Workstation Client"
linktitle: "Getting Started"
url: /mendix-workstation/prerequisites/
description: "Documents the requirements for the Mendix Workstation Client."
weight: 10
---

## Introduction

This document presents the system requirements for Mendix Workstation Client.

## System Requirements

* Operating System - Windows 10 or Windows 11 (64-bit);  Linux ARM64
* Memory - Minimum 4 GB RAM (8 GB recommended for optimal performance)
* Disk Space - 400 MB of free disk space for installation

## Access Requirements

* A Mendix account
* Access to the Mendix Workstation Management for configuration

## Network Configuration

Before implementing Mendix Workstation Client, perform the following steps:

1. Ensure that the Workstation user can access the Mendix Cloud.
2. Open the required ports for communication (for example, TCP 443 for HTTPS).
3. Add the Workstation Client to the Allow list for any firewall or antivirus software, if applicable.

## Device Connectivity

Before connecting devices with Mendix Workstation Client perform the following steps:

* Make sure the devices are correctly set up and connected to your computer.
* Verify that the device driver is installed and up to date.
* Take a note of the connection parameters used by the devices:

    * For Serial Port connection - baud rate, data bits, parity and stop bits, flow control.
    * For TCP/IP connection - IP address and port.

* Obtain the manual and technical documentation for your devices, including chapters describing the communication protocol and how to configure it.
* Test the connection and protocol on your operating system using the tool recommended in the device technical documentation or using common tool such as PuTTY.
    * For Serial Port connection - Open the device and test device basic commands.
    * For TCP/IP connection - Ping the device to make sure that it is reachable on the network and not blocked by a firewall, and then test the basic device commands.

## Best Practices for Working with Mendix Workstation Client

As you begin your work with Mendix Workstation Client, keep in mind the following best practices to help you.

### Security Recommendations

For more information, see [Security Best Practices for Mendix Workstation Client](/mendix-workstation/security/).

### Performance Optimization

* Ensure workstations meet the recommended hardware specifications.
* Minimize background processes to improve performance.
* When building app logic reusing the Connectors nanoflows, minimize the amount of microflow calls and [other actions](https://docs.mendix.com/refguide/nanoflows/#logic-where-no-connection-is-needed) that require a server connection. One key benefit of Mendix Workstation Client is client-sided data processing. Every call to the Mendix runtime adds an performance overhead.  

### Maintenance Guidelines

* Periodically review and update workstation and device configurations.
* Monitor workstation health and resolve any connectivity issues promptly.
