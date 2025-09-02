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

SALT Licenses have the following restrictions

* they are compatible with Mendix version 10.24 and above.
* they cannot be used in the Mendix Public Cloud.

## Prerequisites

To use a SALT license, you must have received an email containing the SALT license file.

## License Server

To use a SALT license, you need to install the Siemens License Server in the environment where your Mendix applications are deployed. You need to register to use the Siemens Support Center, and you can then download the software from [Siemens License Server – Downloads](https://support.sw.siemens.com/en-US/product/1586485382/downloads).

For detailed instructions on installing and configuring the license server, please refer to the [Siemens License Server – Downloading and Installing the Siemens License Server (SLS)](https://support.sw.siemens.com/en-US/product/1586485382/knowledge-base/MG616206) documentation (registration required).

Ensure that all Mendix applications can access the license server.

## Application Configuration

After deploying the license server you can  configure each Mendix application that uses a SALT license.

* Set runtime setting `License.SaltLicenseLocation` to `port@host`, where:

    * `port` is the port number chosen during the license server installation
    * `host` is the hostname or IP address of the license server.
    
See [Runtime Customization](/refguide/custom-settings/) for information on how to create runtime settings for your deployment target.   
