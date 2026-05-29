---
title: "AC-02 (03) Account Management (Disable Inactive Accounts)"
linktitle: "AC-02 (03)"
url: /private-mendix-platform/nist-controls/ac-0203/
description: "Documents the Private Mendix Platform's compliance with the AC-02 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 (03) control.

| Control ID | AC-02 (03) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership |  Mendix - Private Mendix Platform, Customer - Org |

## Control

The information system automatically disables inactive accounts after an organization-defined time period.

## Responsibility

### Customer Responsibility

The customer administrator must configure this feature properly according to the organization's own access policy.

## Guidance

### Customer Responsibility

Private Mendix Platform provides the setting to configure **Inactivity Period for Automatic Account Disabling (Hours)** in admin mode. After the configured time has passed, the user account is not allowed to login until the admin reactivates this account. Set to 0 to disable this feature. 

## Proof and Remarks

Private Mendix Platform provides a setting to configure the inactivity period at **Settings > Identity & Access > Preferences**:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0203-1.png" class="no-border" >}}