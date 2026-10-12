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

It is the customer's responsibility to define access policy for the time period to disable inactive accounts. 

It is the responsibility of the Infra Implementer and Operator to ensure that the customer's Identity Provider (IdP) implements inactive account timeouts appropriately.

## Guidance

### Customer Responsibility

Private Mendix Platform provides a setting to configure **Inactivity Period for Automatic Account Disabling (Hours)** in admin mode. After the configured time has passed, the user account is not allowed to login until the admin reactivates this account. Set to 0 to disable this feature. 

## Proof and Remarks

Private Mendix Platform provides a setting to configure the inactivity period at **Settings > Identity & Access > Preferences**:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0203-1.png" class="no-border" >}}

Private Mendix Platform also provides a toggle to disable the Mendix build-in administrator account in Private Mendix Platform admin mode at **Settings > Deployment > Security > Disable default System Administrator account**.

After the toggle is enabled, any app created afterwards will no longer allow login using the Mendix build-in account. The Private Mendix Platform administrator from customer side is responsible to configure this option properly.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0203-2.png" class="no-border" >}}
