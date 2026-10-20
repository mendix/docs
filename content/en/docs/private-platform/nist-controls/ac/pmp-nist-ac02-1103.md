---
title: "AC-02 1103 Configurable Session Expiration and Auto-Logout for Users"
linktitle: "AC-02 1103"
url: /private-mendix-platform/nist-controls/ac-02-1103/
description: "Documents the Private Mendix Platform's compliance with the AC-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 (05) control.

| Control ID | AC-02 (05) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership |  Mendix - Private Mendix Platform, Customer - Org |

## Control

The organization requires that users are logged out after an organization-defined period of inactivity.

## Responsibility

### Customer Responsibility

The customer administrator must configure this feature properly according to the organization's own access policy.

## Guidance

### Customer Responsibility

The customer must configure this feature by performing the following steps:

1. Log in to Private Mendix Platform as a user with the System Admin role.
2. Go to **Settings > Identity & Access Settings**.
3. In the **Session Duration** section, specify the number of hours in the **Set maximum period for automatic session expiration** field.
4. Set the **Show notification before log user out** toggle to **ON**.

## Proof and Remarks

System Admin configures and enables the feature:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-02-1103-1.png" class="no-border" >}}

The user is logged out after the configured time period:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-02-1103-2.png" class="no-border" >}}

If the **Show notification** option is on, the user is alerted before they are logged out:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-02-1103-3.png" class="no-border" >}}
