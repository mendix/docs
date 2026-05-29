---
title: "AU-07 Audit Reduction And Report Generation"
linktitle: "AU-07"
url: /private-mendix-platform/nist-controls/au-07/
description: "Documents the Private Mendix Platform's compliance with the AU-07 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-07 control.

| Control ID | AU-07 |
| --- | --- |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system provides an audit reduction and report generation capability that:

* Supports on-demand audit review, analysis, and reporting requirements and after-the-fact investigations of security incidents.
* Does not alter the original content or time ordering of audit records.

### Supplemental Guidance

Audit reduction is a process that manipulates collected audit information and organizes such information in a summary format that is more meaningful to analysts. Audit reduction and report generation capabilities do not always emanate from the same information system or from the same organizational entities conducting auditing activities. Audit reduction capability can include, for example, modern data mining techniques with advanced data filters to identify anomalous behavior in audit records. The report generation capability provided by the information system can generate customizable reports. Time ordering of audit records can be a significant issue if the granularity of the timestamp in the record is insufficient.

The following controls are related to this control:

* AU-6

## Responsibility

### Mendix Responsibility

Private Mendix Platform can generate a custom report for on-demand audits with custom settings.

### Customer Responsibility

The customer is responsible for configuring the log detail level, file format, and date time durations for custom report generation.

The customer, infrastructure implementer and operator, and app implementer and operator are responsible for redirecting automated log data, and creating custom rollups of automatically generated log data in their log aggregation tool of choice (for example, Splunk).  

## Guidance

### Mendix Responsibility

* Private Mendix Platform provides a **Create Custom Report** on the **Customer Admin > Manage > (Platform) > Activity Log** page. 
* Private Mendix Platform can generate a custom report for on-demand audits with custom settings including the log detail level (Event, Summary, Complete), report file format(PDF, DOC, XML, JSON) and date-time duration.

### Customer Responsibility

It is the responsibility of the customer to create custom reports for on-demand audits with settings including the log detail level, report file format, and date-time duration.

The customer, infrastructure implementer and operator, and app implementer and operator are responsible for redirecting automated log data, and creating custom rollups of automatically generated log data in their log aggregation tool of choice (for example, Splunk).

## Proof and Remarks

Private Mendix Platform provides the **Create Custom Report** button to generate custom on-demand audit reports:

{{< figure src="/attachments/private-platform/nist-au/nist-au-07-1.png" class="no-border" >}}

Private Mendix Platform provides the settings to configure the log detail level, file format, and date-time duration for custom report generation:

{{< figure src="/attachments/private-platform/nist-au/nist-au-07-2.png" class="no-border" >}}