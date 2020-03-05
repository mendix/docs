---
title: "Unix Deployment"
parent: "on-premises-design"
description: "How to install and configure Mendix on a Unix-like system"
menu_order: 99
tags: ["Red Hat", "CentOS", "install", "deploy", "m2ee", "Debian", "GNU", "Linux", "Unix-like", "Unix", "U*ix", "*nix", "on-premises"]
---

## 1 Introduction

Mendix can be installed on-premises on systems running Unix-like operating systems. The installation consists of the following:

* m2ee-tools: a command line tool used for managing your Mendix installation
* Mendix Runtime
* Java Runtime Environment
* Web server

The following operating systems are currently supported:

* Debian GNU/Linux 9 (Stretch)
* Debian GNU/Linux 8 (Jessie)
* Red Hat Enterprise Linux (RHEL) 7, CentOS 7

Installation on other Unix-like operating systems is possible, but has not been tested and cannot be supported by Mendix.

## 2 Technical Documentation

The documentation describing the installation and basic configuration of the Mendix software on a Unix-like system is available as part of the m2ee-tools helper program: [https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md](https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md).

## 3 License Key Activation on Linux

To activate your license key, follow these steps:

1. Open the interactive m2ee console.
2. Use the command `show_license_information` to display a generated server ID.
3. Use the server ID to obtain a license key from Mendix (see [Licensing Apps](licensing-apps-outside-mxcloud) for information on requesting a license key).
4. Activate your license on the server using the `activate_license` m2ee command.
