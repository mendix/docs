---
title: "Network Configuration for the Workstation Client"
linktitle: "Network Configuration"
url: /mendix-workstation/network-configuration/
description: "Describes how to configure custom proxy settings for the Workstation Client."
weight: 35
---

## Introduction

To ensure that the Workstation Client works correctly, review the following information about the network configuration, custom certificates, and proxy settings.

## Network Configuration

To configure the network settings for the Workstation Client, perform the following steps:

1. Ensure that the Workstation user can access the Mendix Cloud.
2. Open the required ports for communication (for example, TCP 443 for HTTPS).
3. Add the Workstation Client to the Allow list for any firewall or antivirus software, if applicable.

## Custom Certificates and Proxy Settings

The Workstation Client uses the operating system's certificates and proxy environment variables to establish a connection with Workstation Management. In most controlled corporate environments, these settings are preconfigured on employee computers by IT departments.

To use a custom proxy configuration, you must start the Workstation Client from the command line and set the environment variables as described [here](https://github.com/nodejs/undici/blob/main/docs/docs/api/EnvHttpProxyAgent.md#class-envhttpproxyagent). For example, from the Windows Command Prompt, run the following command:

```
set HTTPS_PROXY=[PROXY_IP_ADDRESS] && "C:\Program Files\Mendix Workstation\Mendix Workstation.exe"
```
