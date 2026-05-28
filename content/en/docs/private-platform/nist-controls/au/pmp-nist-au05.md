---
title: "AU-05 Email Notifications"
linktitle: "AU-05"
url: /private-mendix-platform/nist-controls/au-05/
description: "Documents the Private Mendix Platform's compliance with the AU-05 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-05 control.

| Control ID | AU-05 |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra |

## Control

The information system:

* Provides alerts in the event of an audit processing failure.
* Takes organization-defined additional actions such as shutting down the information system, overwriting the oldest audit records, or stopping the creation of audit records.

### Supplemental Guidance

Audit processing failures include, for example, software and hardware errors, failures in the audit capturing mechanisms, and audit storage capacity being reached or exceeded. Organizations may choose to define additional actions for different audit processing failures (for example, by type, by location, by severity, or a combination of such factors). This control applies to each audit data storage repository (that is, distinct information system component where audit records are stored), the total audit storage capacity of organizations (that is, all audit data storage repositories combined), or both.

The following controls are related to this control:

* AU-4
* SI-12

## Responsibility

### Customer Responsibility

The customer is responsible for configuring a valid email service in the admin panel of Private Mendix Platform. 

### Shared Responsibility

On the Infra and App level, Private Mendix Platform is responsible for generating an alert when and audit processing failure occurs. The customer is responsible for setting up a valid email service and configuring it correctly in the admin panel of Private Mendix Platform to make the email alerts work.

## Guidance

### Customer Responsibility

It is the responsibility of the customer to identify who should be alerted about audit processing failures, and what actions should be taken.

It is the responsibility of the infrastructure implementer and the app implementer to ensure that the appropriate alerts will be sent and automatic actions taken during an audit processing failure, as dictated by the customer. 

It is the responsibility of the infrastructure operator and app operator to ensure that the customer-dictated alerts are sent and actions are taken if an audit processing failure occurs.

## Proof and Remarks

Private Mendix Platform provides the **Settings > Notification > Email** page to configure the email service in the Private Mendix Platform admin panel. The users must enter a valid configuration, so that the email service can be used to send notifications:

{{< figure src="/attachments/private-platform/nist-au/nist-au-05-1.png" class="no-border" >}}

Private Mendix Platform provides the **Send email when any audit logging fails** setting on the **Settings > Activity Logs > Log Settings** page. The user must enable or disable this setting according to their requirements, and specify the email addresses that will receive the notification if the setting is toggled on:

{{< figure src="/attachments/private-platform/nist-au/nist-au-05-2.png" class="no-border" >}}