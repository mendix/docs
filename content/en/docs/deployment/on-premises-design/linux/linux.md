---
title: "Linux Deployment with M2ee-Tools"
url: /developerportal/deploy/linux-m2ee/
description: "How to install and configure Mendix on a Linux system using m2ee-tools."
weight: 99
aliases:
    - /developerportal/deploy/unix-like/
---

{{% alert color="warning" %}} Linux deployment is only supported on Debian 10 (buster) for the [Mendix Runtime version 9, 10, and 11](/releasenotes/studio-pro/lts-mts/).  We will not add support for any other versions of the Mendix Runtime. Consider using the [Mendix Portable Runtime for Linux](/developerportal/deploy/linux-pad/) option instead. 

With the release of [Mendix Portable Runtime](https://docs.mendix.com/developerportal/deploy/docker-deploy-pad/), we are transitioning away from the M2EE Toolkit toward a modern, container-native approach that packages Mendix applications. As part of this shift, the M2EE Toolkit will begin its deprecation journey by not supporting Mendix 12 and future Runtime versions.

For more information, see [Mendix Portable Runtime: Deployment, Simplified](https://www.mendix.com/blog/mendix-portable-runtime/).
{{% /alert %}}


## Introduction

Mendix can be installed on premises on systems running Linux. The installation consists of the following:

* M2ee-tools - A command line tool used for managing your Mendix installation
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
