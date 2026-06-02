---
title: "AC-10 Concurrent Session Control"
linktitle: "AC-10"
url: /private-mendix-platform/nist-controls/ac-10/
description: "Documents the Private Mendix Platform's compliance with the AC-10 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-10 control.

| Control ID | AC-10 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership |  Mendix - Private Mendix Platform, Customer - Org |

## Control

The information system limits the number of concurrent sessions for each organization-defined account or account type to an organization-defined number.

### Supplemental Guidance

Organizations may define the maximum number of concurrent sessions for information system accounts globally, by account type (for example, privileged user, non-privileged user, domain, specific application), by account, or a combination. For example, organizations may limit the number of concurrent sessions for system administrators or individuals working in particularly sensitive domains or mission-critical applications. This control addresses concurrent sessions for information system accounts and does not address concurrent sessions by single users via multiple system accounts.

## Responsibility

### Customer Responsibility

The customer administrator must configure this feature properly according to the organization's own access policy.

## Guidance

### Customer Responsibility

Private Mendix Platform provides the setting to configure maximum concurrent sessions per account. Administrators can find **Maximum Concurrent Sessions Per User Account** under **Settings > Identity & Access**. Set to 0 to have no restrictions on the number of concurrent sessions. 

## Proof and Remarks

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-10-1.png" class="no-border" >}}