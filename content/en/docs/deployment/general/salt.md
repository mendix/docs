---
title: "Siemens Advanced License Technology"
url: /developerportal/deploy/salt/
weight: 90
description: "This guide explains how to use Siemens Advanced License Technology (SALT) with Mendix"
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

* **Mendix 10** – 10.24.4 and above
* **Mendix 11** – 11.2.0 and above

Each SALT license is tied to a specific major Mendix version, for example MXP11 for Mendix 11. The license permits use of that version and all earlier major versions. To use a newer major version, you must have an active maintenance contract and can request a renewed license when the new major version is released.

### Deployment Restrictions

Mendix applications using a SALT License cannot be deployed to the Mendix Public Cloud.

### User Limits

SALT licenses distinguish between internal and external users:

* **Internal users** – SALT licenses specify a maximum number of named internal users. This limit is enforced independently by each application and is defined at the time of purchase. Limiting concurrent users is not supported.
* **External users** – Unlimited external users can optionally be purchased. When purchased, external users are no longer counted against the internal user limit. To take advantage of this, users must be explicitly flagged as external in your application using the [User Classification](/appstore/modules/user-classification/) module or by setting the `UserType` attribute directly. If external users are not flagged, they are counted as internal users.

## Obtaining the SALT-based License

Upon purchase, your SALT-based license file is sent to you by email. A single license file is valid for all of your Mendix applications. Multiple license files cannot be issued.

## Installing the Siemens License Server

The Siemens License Server (SLS) is required to validate SALT-based licenses. For proper license validation, ensure you meet the following requirements:

* The SLS must be installed within the same environment as your deployed Mendix applications
* All Mendix applications using a SALT license must be able to access the SLS
* The license server must have access to your SALT license file in order to validate the Mendix application licenses at runtime.

For detailed instructions on how to install the Siemens License Server and configure your license file, refer to the following Siemens support resources:

* [Siemens License Server](https://support.sw.siemens.com/en-US/product/1586485382)
* [Getting Started with Siemens Advanced Licensing Technology (SALT) and the Siemens License Server (SLS)](https://support.sw.siemens.com/en-US/product/1586485382/knowledge-base/MG612613)

{{% alert color="info" %}}
If you are deploying on-premises, you must generate a hardware ID (CID) using Siemens tools and provide it during the license provisioning process. Refer to the Siemens documentation above for instructions on generating a CID.
{{% /alert %}}

## Configuring your Mendix Application

Each Mendix application that uses a SALT license must be configured with the following [runtime setting](/refguide/custom-settings/):

```
License.SaltLicenseLocation = port@host
```

* `port` – The port number specified during the license server installation.
* `host` – The hostname or IP address of the machine running the license server.

After you configure the runtime setting and start the Mendix application, the application connects to the Siemens License Server to validate the SALT license.

## FAQs

### When Does a Mendix Application Connect to the License Server?

Mendix applications connect to the license server during startup to retrieve the license. After this initial connection, the applications do not maintain ongoing connections to the license server.

### What Happens If the License Server Is Unavailable?

If the license server becomes unavailable while a Mendix application is running, the application's current operation will not be affected. However, if the license server is unavailable during startup, the Mendix application will launch in trial mode. In trial mode, usage is limited to a specific number of users and the application stops running after a few hours.

To resolve this, restart the Mendix application once the license server is available.

### Does the License Server Require Internet Access?

SALT-based licenses can operate fully offline. No outbound connectivity to Siemens systems is required.
