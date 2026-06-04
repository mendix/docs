---
title: "AC-07 Unsuccessful Logon Attempts"
linktitle: "AC-07"
url: /private-mendix-platform/nist-controls/ac-07/
description: "Documents the Private Mendix Platform's compliance with the AC-07 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-07 control.

| Control ID | AC-07 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership |  Mendix - Private Mendix Platform, Customer - Org |

## Control

The information system:

* Enforces a limit of an organization-defined consecutive number of invalid login attempts by a user during an organization-defined time period.
* Automatically locks the account or node for an organization-defined time period; locks the account or node until released by an administrator; delays next login prompt according to an organization-defined delay algorithm when the maximum number of unsuccessful attempts is exceeded.

### Supplemental Guidance

This control applies regardless of whether the login occurs via a local or network connection. Due to the potential for denial of service, automatic lockouts initiated by information systems are usually temporary and automatically release after a predetermined time period established by organizations. If a delay algorithm is selected, organizations may choose to employ different algorithms for different information system components based on the capabilities of those components. Responses to unsuccessful login attempts may be implemented at both the operating system and the application levels. 

The following controls are related to this control: 

* AC-2
* AC-9
* AC-14
* IA-5

## Responsibility

### Customer Responsibility

The customer administrator must configure this feature properly according to the organization's own access policy.

## Guidance

### Customer Responsibility

Private Mendix Platform provides the setting to configure **Failed Login Attempts to Lockout** in admin mode. After the configured number of failed attempts has been reached, the user account is blocked from further login attempts until an admin unblocks it. Set to 0 to disable this feature. 

## Proof and Remarks

The setting to configure **Failed Login Attempts to Lockout** is available at **Settings > Identity & Access > Preferences**.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-07-1.png" class="no-border" >}}
