---
title: "IA-05 Implement an Idle Session Timeout, Make Time Limit Configurable"
linktitle: "IA-05"
url: /private-mendix-platform/nist-controls/ia-05/
description: "Documents the Private Mendix Platform's compliance with the IA-05 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 control.

| Control ID | IA-05 |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Org |

## Control

The information system prohibits the use of cached authenticators after and organization-defined time period.

## Responsibility

### Customer Responsibility

The customer is responsible for correctly configuring the settings to enable this feature.

## Guidance

### Customer Responsibility

The customer must configure this feature by performing the following actions in Private Mendix Platform:

1. Log in as a user with the System Admin role.
2. Go to **Settings > Identity & Access Settings**.
3. In the **Idle Detect** section, toggle **Detect User Idle** to **On**.

    {{< figure src="/attachments/private-platform/nist-ia/nist-ia-05-1.png" class="no-border" >}}

4. After enabling the option, configure the following additional settings:

    * **Maximum duration before session lock** - Enter a value to define how long a user can stay idle before the session is locked.
    * **Require PIN to unlock** - Choose whether a PIN is required to unlock the screen after it is locked due to inactivity. If enabled, users must set a PIN in their profile settings.
    * **Idle length for logout** - Enter a value to define how long a user can stay idle before being logged out.

5. Click **Save**.

## Proof and Remarks

After the admin has enabled the feature and saved the configuration, Private Mendix Platform will detect users being idle. 

After the specified interval of idling, the screen will be locked, and the user will need to click **Unlock** to unlock it. If **Require PIN to unlock** is enabled, the user will also need to input their PIN.

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-05-3.png" class="no-border" >}}

If the user remains idle after the screen is locked, after the specified interval, the user will be logged out.

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-05-4.png" class="no-border" >}}
