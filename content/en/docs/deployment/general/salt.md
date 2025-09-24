---
title: "Siemens Advanced License Technology"
url: /developerportal/deploy/salt/
weight: 90
description: "This guide explains how to use Siemens Advaned License Technology (SALT) with Mendix"
aliases:
    - /deployment/salt/
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
SALT-based licenses are issued only to selected customers. If you received an email explicitly referencing a SALT license and directing you to this page, follow this guide. Otherwise, refer to the [guide for non-SALT Mendix licenses](/developerportal/deploy/licensing-apps-outside-mxcloud/).
{{% /alert %}}

## Introduction

Siemens Advanced License Technology (SALT) is a Siemens service used to validate software licenses. This guide outlines the steps to deploy a Mendix application using a SALT-based license.

## Limitations

This section explains the limitations for using SALT-based licenses.

### Version Compatibility

SALT Licenses can only be used with the following Mendix versions:

* **Mendix 10**: 10.24.4 and above
* **Mendix 11**: 11.2.0 and above

Each SALT license is bound to a specific major version of Mendix and cannot be used in newer major versions.

### Deployment Restrictions

Mendix applications using a SALT License cannot be deployed to the Mendix Public Cloud.

## Obtaining the SALT-based License

Upon purchase, your SALT-based license file is sent to you by email.

## Installing the Siemens License Server

The Siemens License Server (SLS) is required to validate SALT-based licenses. For proper license validation, ensure you meet the following requirements:

* The SLS must be installed within the same environment as your deployed Mendix applications
* All Mendix applications using a SALT license must be able to access the SLS
* The license server must have access to your SALT license file in order to validate the Mendix application licenses at runtime.

For detailed instructions on how to install the Siemens License Server and configure your license file, refer to the following Siemens support resources:

* [Siemens License Server](https://support.sw.siemens.com/en-US/product/1586485382)
* [Getting Started with Siemens Advanced Licensing Technology (SALT) and the Siemens License Server (SLS)](https://support.sw.siemens.com/en-US/product/1586485382/knowledge-base/MG612613)

## Configuring your Mendix Application

Each Mendix application that uses a SALT license must be configured with the following [runtime setting](/refguide/custom-settings/):

```
License.SaltLicenseLocation = port@host
```

* `port`: The port number specified during the license server installation.
* `host`: The hostname or IP address of the machine running the license server.

After you configure the runtime setting and start the Mendix application, the application connects to the Siemens License Server to validate the SALT license.
