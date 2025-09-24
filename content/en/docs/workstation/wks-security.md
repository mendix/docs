---
title: "Security Best Practices for Mendix Workstation Client"
linktitle: "Security Best Practices"
url: /mendix-workstation/security/
description: "Provides information about best-practice security configuration for the Mendix Workstation Client."
weight: 15
---

## Introduction

Security is one of the most important aspects of a deployment, because misconfiguration or failing security can have large consequences. The Mendix Workstation Client gives many configuration options for permissions that can have an impact on the security of your deployment.

This document describes the common aspects you should consider when deploying the Mendix Workstation Client in production.

## Assignment of Workspace Roles {#workspace-roles}

Workspace roles should be assigned following the principle of least privilege. Always grant users the minimum permissions necessary for them to successfully complete their tasks. You can reassign the roles at any time if responsibilities change. To help maintain a secure deployment, consider the following guidelines:

* Assign the View Only role to untrusted users.
* Use caution when granting the Workspace Admin role.
    * Workspace Admins can unintentionally disrupt production, for example by deleting an app or modifying its public key.
    * Workspace Admins can allow Workstation Clients to access malicious apps.
* Conduct regular permissions audits to make sure that temporary privilege elevations are reverted once they are no longer necessary.

## Station Set Up {#setup-stations}

Setting up stations involves a variety of options, some of which have important security implications. To help ensure a secure deployment, follow these best practices:

* Keep stations lean by disabling unused apps and deleting unused devices.
    * Any unused device represents a potential attack surface (for example, a forgotten card reader that leaks a token, or a TCP device that exposes a device on the network).
    * Any unused but enabled app may gain unintended access to devices that were not meant to be exposed to it.
* Verify that all devices configured on a station are safe for all enabled applications.
    * Devices are shared across all applications in a station. If a device should not be accessible by a particular app, it should not be present on that station.
* Configure File devices carefully.
    * File devices are powerful and can pose security risks if misconfigured.
    * Restrict the allowed folder and permissions as much as possible. The Workstation Client enforces these restrictions within the allowed folder and its subfolders.

## Access Restrictions for the Configuration Folder on Microsoft Windows {#config-access}

By default, the Windows global installer for the Workstation Client grants the **BUILTIN\Users** Windows user group read and write access to the *ProgramData/Mendix Workstation* folder. This configuration is safe in most cases. However, for highly sensitive environments, you may want to restrict write access for the built-in Users group, and instead delegate permissions to a different group.

### Why Restrict the Users Group?

The **BUILTIN\Users** group includes all standard user accounts on the system. Restricting its write access helps prevent the following:

* Compromised accounts modifying configuration files
* Unauthorized users deregistering the station, temporarily halting production

By delegating permissions to a more tightly controlled group, you ensure that only authorized accounts have the ability to modify the configuration and to use the Workstation Client.

To delegate permissions to a custom group, create a new Windows user group and grant it the same permissions to the *C:\ProgramData\Mendix Workstation* folder as are currently held by the Users group. After that, you can remove the Users group or adjust its permissions as needed. For more information about managing groups and permissions, refer to Microsoft Windows documentation.
