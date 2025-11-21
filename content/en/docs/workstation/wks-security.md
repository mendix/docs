---
title: "Security Best Practices for Mendix Workstation Client"
linktitle: "Security Best Practices"
url: /mendix-workstation/security/
description: "Provides information about best-practice security configuration for the Mendix Workstation Client."
weight: 15
---

## Introduction

Security is critical for deployments, as misconfigurations or security failures can have serious consequences. Mendix Workstation Client provides numerous configuration options that can impact the security of your deployment.

This document describes the security aspects you should consider when deploying Mendix Workstation Client in production.

## Assignment of Workspace Roles {#workspace-roles}

Workspace roles should be assigned following the principle of least privilege. Always grant users only the minimum permissions necessary to complete their tasks. You can reassign roles at any time if responsibilities change. To maintain a secure deployment, follow these guidelines:

* Assign the **View Only** role to untrusted workspace users.
* Use caution when granting the **Workspace Admin** role:
    * Workspace Admins can unintentionally disrupt production, such as by deleting an app or modifying its public key.
    * Workspace Admins can allow Workstation Clients to access malicious apps.
* Conduct regular permissions audits to ensure that temporary privilege elevations are reverted once they are no longer necessary.

## Station Setup {#setup-stations}

Setting up stations involves various options with important security implications. To ensure a secure deployment, follow these best practices:

* Keep stations lean by disabling unused apps and removing unused devices:
    * Any unused device represents a potential attack surface (such as a forgotten card reader that leaks a token, or a TCP device that exposes a device on the network).
    * Any enabled but unused app may gain unintended access to devices not intended for that app.
* Verify that all devices configured on a station are safe for all enabled applications:
    * Devices are shared across all applications in a station. If a device should not be accessible by a particular app, it should not be present on that station.
* Configure File devices carefully:
    * File devices are powerful and can pose security risks if misconfigured.
    * Restrict the allowed folder and permissions as much as possible. The Workstation Client enforces these restrictions within the allowed folder and its subfolders.

## Access Restrictions for the Configuration Folder on Microsoft Windows {#config-access}

By default, the Windows global installer for the Workstation Client grants the **BUILTIN\Users** Windows user group read and write access to the *ProgramData/Mendix Workstation* folder. This configuration is safe in most cases; however, for highly sensitive environments, you may want to restrict write access for the built-in Users group and delegate permissions to a different group.

### Why Restrict the Users Group?

The **BUILTIN\Users** group includes all standard user accounts on the system. Restricting its write access helps prevent the following:

* Compromised accounts from modifying configuration files
* Unauthorized users from deregistering the station, temporarily halting production

Delegating permissions to a more tightly controlled group ensures that only authorized accounts can modify the configuration and use the Workstation Client.

To delegate permissions to a custom group, create a new Windows user group and grant it the same permissions for the *C:\ProgramData\Mendix Workstation* folder currently held by the Users group. Then you can remove the Users group or adjust its permissions as needed. For more information about managing groups and permissions, refer to the Microsoft Windows documentation.
