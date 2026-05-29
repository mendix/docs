---
title: "AU-03 Content Of Audit Records"
linktitle: "AU-03"
url: /private-mendix-platform/nist-controls/au-03/
description: "Documents the Private Mendix Platform's compliance with the AU-03 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-03 control.

| Control ID | AU-03 |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system generates audit records containing information that establishes what type of event occurred, when the event occurred, where the event occurred, the source of the event, the outcome of the event, and the identity of any individuals or subjects associated with the event.

### Supplemental Guidance

The audit records content that may be necessary to satisfy the requirement of this control, includes, for example, time stamps, source and destination addresses, user and process identifiers, event descriptions, success or fail indications, filenames involved, and access control or flow control rules invoked. The event outcomes can include indicators of event success or failure, and event-specific results (for example, the security state of the information system after the event occurred).

The following controls are related to this control:

* AU-2
* AU-8
* AU-12
* SI-11

## Responsibility

### Mendix Responsibility

Private Mendix Platform logs and stores every action by every user, as well as displays and outputs logs according to the action log detail level setting.

### Customer Responsibility

The customer is responsible for configuring the log detail level for the display and output of action logs.

## Guidance

### Mendix Responsibility

* Private Mendix Platform provides the **Log Settings** tab at **Customer Admin > Manage > (Platform) > Activity Log > Log Settings**.
* Private Mendix Platform always logs and stores every action by every user.
* Private Mendix Platform displays and outputs logs according to the action log detail level setting.

### Customer Responsibility

The customer is responsible for configuring the log detail level for the display and output of action logs.

## Proof and Remarks

Private Mendix Platform provides a setting to configure the detail level of the action log (**Event**, **Summary**, **Complete**):

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-1.png" class="no-border" >}}

Private Mendix Platform displays activity logs when the detail level of the action log is set to **Event**:

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-2.png" class="no-border" >}}

Private Mendix Platform displays activity logs when the detail level of the action log is set to **Summary**:

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-3.png" class="no-border" >}}

Private Mendix Platform displays activity logs when the detail level of the action log is set to **Complete**:

{{< figure src="/attachments/private-platform/nist-au/nist-au-03-4.png" class="no-border" >}}