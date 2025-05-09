---
title: "Linux Deployment"
url: /developerportal/deploy/linux/
description: "How to install and configure Mendix on a Linux system"
weight: 99
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---
{{% alert color="warning" %}} Linux deployment is only supported on Debian 10 (buster) and using Mendix Runtime versions 7-9. Further version support will not be added anymore.  {{% /alert %}}
## Introduction

Mendix can be installed on-premises on systems running Linux. The installation consists of the following:

* m2ee-tools: a command line tool used for managing your Mendix installation
* Mendix Runtime
* Java Runtime Environment
* Web server

For a list of the distributions which are currently supported, see [Operating System](/refguide/system-requirements/#server-os) in *System Requirements*.

## Technical Documentation

The documentation describing the installation and basic configuration of the Mendix software on a Linux system is available as part of the m2ee-tools helper program: [https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md](https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md).


## License Key Activation on Linux

To activate your license key, follow these steps:

1. Open the interactive m2ee console.
2. Use the command `show_license_information` to display a generated server ID.
3. Use the server ID to obtain a license key from Mendix (see [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/) for information on requesting a license key).
4. Activate your license on the server using the `activate_license` m2ee command.
