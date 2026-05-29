---
title: "IA-05 1127 Idle session timeout and Configurable Time Limits"
linktitle: "IA-05 1127"
url: /private-mendix-platform/nist-controls/ia-05-1127/
description: "Documents the Private Mendix Platform's compliance with the IA-05 1127 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 1127 control.

| Control ID | IA-05 1127 |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Org |

## Control {#control}

The information system prohibits the use of cached authenticators after an organization-defined time period.

## Responsibility

### Customer Responsibility

The customer is responsible for correctly configuring the settings to enable this feature.

## Guidance

### Customer Responsibility

The customer must configure this feature by performing the following steps:

1. Log in to Private Mendix Platform as a user with the System Admin role.
2. Go to **Settings > Identity & Access Settings**.
3. In the **Idle Detect** section, enable the **Detect User Idle**.

    After this option is enabled, the following settings appear:

    * **Maximum duration before session lock** - Enter a value to define how long a user can stay idle before the session is locked.
    * **Require PIN to unlock** - Choose whether a PIN is required to unlock the screen after it is locked due to inactivity. If enabled, users must set a PIN in their profile settings.
    * **Idle length for logout** - Enter a value to define how long a user can stay idle before being logged out.

## Proof and Remarks

The Private Mendix Platform admin enables the feature:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051127-1.png" class="no-border" >}}

Private Mendix Platform will now detect the user being idle on the page: 

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051127-2.png" class="no-border" >}}

After the specified interval, the screen is locked, and the user must click the **Unlock** button to restore the screen. If **Require PIN to unlock** is enabled, the user must also input their PIN.

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051127-3.png" class="no-border" >}}

If the user remains idle after the screen is locked, after the specified interval, the user is logged out.

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051127-4.png" class="no-border" >}}