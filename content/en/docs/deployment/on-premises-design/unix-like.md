---
title: "Unix-Like Deployment"
url: /developerportal/deploy/unix-like/
description: "How to install and configure Mendix on a Unix-like system"
weight: 99
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Mendix can be installed on-premises on systems running Unix-like operating systems. The installation consists of the following:

* m2ee-tools: a command line tool used for managing your Mendix installation
* Mendix Runtime
* Java Runtime Environment
* Web server

For a list of the operating systems which are currently supported, see [Operating System](/refguide/system-requirements/#server-os) in *System Requirements*.

Installation on other Unix-like operating systems is possible, but these have not been tested and cannot be supported by Mendix.

## Technical Documentation

The documentation describing the installation and basic configuration of the Mendix software on a Unix-like system is available as part of the m2ee-tools helper program: [https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md](https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md).

{{% alert color="info" %}}
Specific Mendix versions require specific versions of the buildpack. For more information, see [Supported Mendix Versions](https://github.com/mendix/cf-mendix-buildpack#supported-mendix-versions).
{{% /alert %}}

## License Key Activation on Linux

To activate your license key, follow these steps:

1. Open the interactive m2ee console.
2. Use the command `show_license_information` to display a generated server ID.
3. Use the server ID to obtain a license key from Mendix (see [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/) for information on requesting a license key).
4. Activate your license on the server using the `activate_license` m2ee command.
