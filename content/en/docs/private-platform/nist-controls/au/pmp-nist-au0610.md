---
title: "AU-06 (10) Audit Review, Analysis, And Reporting - Audit Level Adjustment"
linktitle: "AU-06 (10)"
url: /private-mendix-platform/nist-controls/au-0610/
description: "Documents the Private Mendix Platform's compliance with the AU-06 (10) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-06 (10) control.

| Control ID | AU-06 (10) |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The organization adjusts the level of audit review, analysis, and reporting within the information system when there is a change in risk based on law enforcement information, intelligence information, or other credible sources of information.

### Supplemental Guidance

The frequency, scope, and depth of the audit review, analysis, and reporting may be adjusted to meet organizational needs based on new information received.

## Responsibility

### Customer Responsibility

The customer is responsible for dictating what audit levels, analysis, and reporting are required, as well as performing adjustments of these points as needed. 

The infrastructure implementer is responsible for setting up the infrastructure auditing, as dictated by the customer.

The infrastructure operator and app operator are responsible for adjusting audit reviews, analyses, and reporting, as dictated by the customer.

The app implementer is responsible for adding the required auditing customizations to the Mendix app.

## Guidance

### Customer Responsibility

The customer should define the level of audit review, analysis and reporting based on the information
system required.

Private Mendix Platform provides the ability to set or adjust the log level of audit reviews, analyses and reporting to meet the organizational needs.

## Proof and Remarks

Private Mendix Platform allows the configuration of the log detail level of audit reviews, analyses and reporting to meet the audit requirements of the customer's information system.

Private Mendix Platform provides a setting to configure the detail level of the action log (**Event**, **Summary**, **Complete**):

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-1.png" class="no-border" >}}

Private Mendix Platform displays activity logs when the detail level of the action log is set to **Event**:

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-2.png" class="no-border" >}}

Private Mendix Platform displays activity logs when the detail level of the action log is set to **Summary**:

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-3.png" class="no-border" >}}

Private Mendix Platform displays activity logs when the detail level of the action log is set to **Complete**:

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-4.png" class="no-border" >}}