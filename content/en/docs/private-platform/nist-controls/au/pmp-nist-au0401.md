---
title: "AU-04 (01) Audit Storage Capacity - Transfer To Alternate Storage"
linktitle: "AU-04 (01)"
url: /private-mendix-platform/nist-controls/au-0401/
description: "Documents the Private Mendix Platform's compliance with the AU-04 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-04 (01) control.

| Control ID | AU-04 (01) |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

### AU-04 (01)

The information system offloads audit records at an organization-defined frequency onto a different system or media than the system being audited.

### Supplemental Guidance

### AU-04 (01)

Offloading is a process designed to preserve the confidentiality and integrity of audit records by moving the records from the primary information system to a secondary or alternate system. It is a common process in information systems with limited audit storage capacity; the audit storage is used only in a transitory fashion until the system can communicate with the secondary or alternate system designated for storing the audit records, at which point the information is transferred.

## Responsibility

### Mendix Responsibility

Private Mendix Platform supports the ability to send the logs to another database system in near real-time.

### Customer Responsibility

The customer admin is responsible for creating and managing a target storage system for audit logs, including appropriate storage limits.

### Shared Responsibility

#### Platform-Level

Private Mendix Platform logs are persisted in a storage system for a customizable period, converted a document in the PDF, DOC, XML, or JSON format.

#### Infra- and App-Level

The Mendix Operator and Mendix Runtime allow logs and audit records to be targeted to a secondary location. It is the responsibility of the customer to identify the target location. It is the responsibility of the infrastructure implementer to target infrastructure audit logs, and the app implementer to target any custom audit logs for the Mendix app to the location identified by the customer.

## Guidance

### Mendix Responsibility

* Private Mendix Platform provides the ability to directly write audit logs to an external database system.
* Private Mendix Platform provides the ability to test the configuration and check if the logs are written and saved successfully.
* Private Mendix Platform provides the **Log Settings** tab at **Customer Admin > Manage > (Platform) > Activity Log > Log Settings**, including the following settings:
    
    * Define the duration in days for keeping logs in the database.
    * Define the external target database to which to send or write logs.
    * Define the specific logging format (PDF, DOC, JSON, XML).

### Customer Responsibility

* The customer admin is responsible for setting the target database system to which the audit logs are sent or written.
* The customer is responsible for setting up and managing the infra resources of the target database where the audit logs are persisted.

## Proof and Remarks

Private Mendix Platform provides a setting for specifying the external database target and testing the connection to check if the logs are written successfully:

{{< figure src="/attachments/private-platform/nist-au/nist-au-0401-1.png" class="no-border" >}}

Private Mendix Platform provides a setting for specifying the logging format (PDF, DOC, JSON, XML):

{{< figure src="/attachments/private-platform/nist-au/nist-au-0401-2.png" class="no-border" >}}

Private Mendix Platform provides a setting for specifying the duration in days for keeping logs in the database (with a maximum of 365):

{{< figure src="/attachments/private-platform/nist-au/nist-au-0401-3.png" class="no-border" >}}