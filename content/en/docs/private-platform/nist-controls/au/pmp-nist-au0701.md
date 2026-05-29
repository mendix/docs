---
title: "AU-07 (01) Audit Reduction And Report Generation - Automatic Processing"
linktitle: "AU-07 (01)"
url: /private-mendix-platform/nist-controls/au-0701/
description: "Documents the Private Mendix Platform's compliance with the AU-07 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-07 (01) control.

| Control ID | AU-07 (01) |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system provides the capability to process audit records for events of interest based on organization-defined audit fields within audit records.

### Supplemental Guidance


Events of interest can be identified by the content of specific audit record fields including, for example, identities of individuals, event types, event locations, event times, event dates, system resources involved, IP addresses involved, or information objects accessed. Organizations may define audit event criteria to any degree of granularity required, for example, locations selectable by general networking location (for example, by network or subnetwork) or selectable by specific information system component.

The following controls are related to this control:

* AU-2
* AU-12

## Responsibility

### Customer Responsibility

The customer is responsible for automatically processing the events of interest from the content of specific audit record fields.

## Guidance

### Customer Responsibility

Customer should identify and automatically process the events of interest from the content of specific audit record fields. This may include the identities of individuals, event types, event times, event dates, system resources involved, information objects accessed, and so on.

## Proof and Remarks

Private Mendix Platform does not currently support automatically processing audit events. Customers must use third-party tools to automatically process audit records.

For more information, see the following documents:

* [Private Mendix Platform Functionalities - Activity Logs](/private-mendix-platform/reference-guide/admin/company/#activity-logs)
* [Private Mendix Platform Functionalities - Log Settings](/private-mendix-platform/reference-guide/admin/company/#log-settings)