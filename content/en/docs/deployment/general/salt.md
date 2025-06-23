---
title: "Siemens Advanced License Technology"
url: /developerportal/deploy/salt/
weight: 90
description: "This guide explains how to use Siemens Advaned License Technology (SALT) with Mendix"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
SALT-based licenses are issued only to selected customers. If you received an email explicitly referencing a SALT license and directing you to this page, follow this guide. Otherwise, refer to the [guide for non-SALT Mendix licenses](/developerportal/deploy/licensing-apps-outside-mxcloud/).
{{% /alert %}}

## Introduction

Siemens Advanced License Technology (SALT) is a Siemens service used to validate software licenses. This guide outlines the steps to deploy a Mendix application using a SALT-based license.

## Obtaining the SALT-based License

Upon purchase, your SALT-based license file is sent to you by email. Keep in mind the following limitations when using a SALT-based license:

* Version compatibility - SALT licenses are supported only for Mendix version 10.24 and newer.
* Version binding - Each SALT license is bound to a specific major version of Mendix and cannot be used in newer major versions.
* Cloud restrictions - SALT licenses are not supported for Mendix Cloud environments.

## Installing the Siemens License Server

The Siemens License Server (SLS) is required to validate SALT-based licenses. This server must be installed within the same environment where your Mendix applications are deployed. All Mendix applications which use a SALT license must be able to access the license server. The license server must also have access to your SALT license file, which is used to validate the Mendix application licenses at runtime.

To install the Siemens License Server, perform the following steps:

1. Download the Siemens License Server from the [Siemens Support Portal](https://support.sw.siemens.com/en-US/product/1586485382).
2. To install the Siemens License Server, follow the process outlined in [this video](https://support.sw.siemens.com/en-US/knowledge-base/MG616411).
3. When prompted, provide your license file. To download the license file, follow this [guide from Siemens](https://support.sw.siemens.com/en-US/product/1586485382/knowledge-base/MG612613).

## Configuring your Mendix Application

Each Mendix application that uses a SALT license must be configured with the following [runtime setting](/refguide/custom-settings/):

```
License.SaltLicenseLocation = port@host
```

* `port`: The port number specified during the license server installation.
* `host`: The hostname or IP address of the machine running the license server.

After you configure the runtime setting and starting the Mendix application, the application connects to the Siemens License Server to validate the SALT license.
