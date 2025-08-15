---
title: "Using a SALT (Siemens Advanced Licensing Technology) License"
linktitle: "SALT License"
url: /deployment/salt
weight: 95
description: Describes how to deploy a Mendix application with a SALT license.
---

## Introduction

When purchasing Mendix, you may receive a SALT (Siemens Advanced Licensing Technology) license.

SALT licenses are held in a license server, from which licenses are provisioned to your Mendix applications.

This guide provides instructions on how to deploy a Mendix application using a SALT license.

## Restrictions

SALT Licenses have the following restrictions.

### Mendix Version Restrictions

SALT Licenses can only be used with the following Mendix versions:

* **Mendix 10**: 10.24.4 and above
* **Mendix 11**: 11.2.0 and above

Older Mendix versions are not supported.

### Deployment Restrictions

Mendix applications using a SALT License cannot be deployed to the Mendix Public Cloud.


## Prerequisites

To use a SALT license, you must have received an email containing the SALT license file.

## License Server

To use a SALT license, you need to install the Siemens License Server in the environment where your Mendix applications are deployed. You need to register to use the Siemens Support Center, and you can then download the software from [Siemens License Server – Downloads](https://support.sw.siemens.com/en-US/product/1586485382/downloads).

For detailed instructions on installing and configuring the license server, please refer to the [Siemens License Server – Downloading and Installing the Siemens License Server (SLS)](https://support.sw.siemens.com/en-US/product/1586485382/knowledge-base/MG616206) documentation (registration required).

Ensure that all Mendix applications can access the license server.

## License Installation

Upon acquiring a SALT License, you will receive an email containing the license file. This file must be installed on the Siemens License Server, which will then distribute the license to all connected Mendix applications.

For detailed instructions on installing the license file, refer to the official Siemens License Server documentation.

During the license acquisition process, you may be required to provide a CID code. This code binds the license to the specific machine hosting the license server. To retrieve the CID code, please consult the Siemens License Server documentation.

## Application Configuration

After deploying the license server you must set configure each Mendix application that should use the SALT license provided by the license server as following:

* Set runtime setting `License.SaltLicenseLocation` to `port@host`, where:

    * `port` is the port number chosen during the license server installation
    * `host` is the hostname or IP address of the license server.
    
See [Runtime Customization](/refguide/custom-settings/) for information on how to create runtime settings for your deployment target.   
