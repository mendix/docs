---
title: "AU-12 (01) Audit Generation - System-Wide or Time-Correlated Audit Trail"
linktitle: "AU-12 (01)"
url: /private-mendix-platform/nist-controls/au-1201/
description: "Documents the Private Mendix Platform's compliance with the AU-12 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-12 (01) control.

| Control ID | AU-12 (01) |
| --- | --- |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system compiles audit records from organization-defined information system components into a system-wide (logical or physical) audit trail that is time-correlated to within an organization-defined level of tolerance for the relationship between time stamps of individual records in the audit trail. 

### Supplemental Guidance

Audit trails are time-correlated if the time stamps in the individual audit records can be reliably related to the time stamps in other audit records to achieve a time ordering of the records within organizational tolerances.

The following controls are related to this control:

* [AU-08](/private-mendix-platform/nist-controls/au-08/)
* [AU-12](/private-mendix-platform/nist-controls/au-12/)

## Responsibility

### Mendix Responsibility

Mendix is responsible for implementing and maintaining this control at the platform level.

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes defining which components must contribute to the system-wide audit trail and the acceptable time correlation tolerance to ensure compliance with federal requirements. The customer must ensure that audit trail compilation, time synchronization, and correlation requirements are documented, reviewed, and enforced within their environment.

#### Infra Implementer

The Infra Implementer is responsible for producing infrastructure audit logs at the right level and targeting those logs at the audit trail as dictated by the customer.

#### App Implementer

The App Implementer is responsible for creating custom audit logs as dictated by the customer and ensuring they can be targeted at the system-wide audit trail.

## Guidance

### Mendix Responsibility

For Private Mendix Platform, this enhancement is implemented at the platform layer through timestamped activity logging, archival, and export capabilities. The logs are available through the Admin menu, at **Manage > Platform > Activity Logs**, platform events are recorded with millisecond precision timestamps and UTC offset, enabling reliable time ordering of platform records. 

Private Mendix Platform also provides archived log files and custom report exports (including JSON/XML) that can be ingested into a customer SIEM for cross-component time correlation. Application-specific audit logs for customer-developed Mendix apps remain outside Private Mendix Platform's native scope and are implemented by the customer and app implementer.

The following configuration is required:

1. Enable platform audit collection and export.

    Configure Private Mendix Platform and runtime log delivery so platform activity records can be exported or forwarded to the Customer's centralized audit trail or SIEM destination.

2. Maintain time-correlated platform timestamps.

    Ensure platform and runtime records use synchronized system time (as defined in AU-08), preserve timestamp precision, and retain timezone context so records can be reliably ordered and correlated.

3. Configure retention, archive, and reporting controls.

    Set log retention and timezone display settings in Private Mendix Platform Activity Log Settings, and operationalize archived log and custom report export workflows to support investigation and audit evidence generation.

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and NIST SP 800-92, which establish requirements for compiling audit records into a time-correlated system-wide audit trail. Customers operating within a FedRAMP or DoD SRG environment must ensure that audit records from all system components can be compiled into a coherent, time-ordered audit trail within organizational tolerances.

To meet these requirements, the customer must carry out the following actions:

1. Define audit trail scope and time correlation tolerance.

    The customer must define which components need to be audited, what depth of auditing is required, and where to put logs into a time-correlated audit trail. The acceptable tolerance for time correlation between individual audit records must be documented in accordance with NIST SP 800-53 AU-8 time stamp requirements.

2. Direct infrastructure audit log compilation.

    The Infra Implementer must produce infrastructure audit logs at the right level and target those logs at the audit trail as dictated by the customer. This includes configuring NTP synchronization across all infrastructure components to ensure time stamps are consistent within the defined tolerance per NIST SP 800-53 AU-8.

3. Direct Application Audit Log Compilation.

    The App Implementer must create custom audit logs as dictated by the customer, ensuring they can be targeted at the system-wide audit trail. Application-level audit records must include timestamps synchronized with the authoritative time source and formatted for correlation with infrastructure and platform records.

### Infra Implementer

The Infra Implementer is responsible for producing infrastructure audit logs at the appropriate level of detail and directing those logs to the system-wide audit trail as dictated by the Customer. This includes configuring time synchronization services, log aggregation, and log forwarding for all infrastructure components.

The Infra Implementer must perform the following tasks:

1. Configure time synchronization.

    Implement NTP or PTP time synchronization across all infrastructure components to ensure audit record timestamps are within the customer's defined tolerance for time correlation.

2. Enable infrastructure audit log forwarding.

    Configure all infrastructure components (operating systems, network devices, container platforms, cloud services) to forward audit logs to the customer's centralized audit trail system.

3. Validate time correlation.

    Regularly verify that infrastructure audit record timestamps are within the defined tolerance and that log forwarding mechanisms are functioning correctly, ensuring uninterrupted contribution to the system-wide audit trail.

### App Implementer

The App Implementer is responsible for creating custom audit logs within Mendix applications as dictated by the Customer and ensuring these logs can be directed to the system-wide audit trail for time correlation with other system components.

The App Implementer must perform the following tasks:

1. Implement custom audit logging.

    Use the Mendix Audit Trail module and custom microflows to create audit logs that capture all customer-defined auditable events within the application.

2. Ensure timestamp accuracy.

    Configure application audit logs to use the system's authoritative time source, ensuring timestamps are accurate and within the customer's defined tolerance for time correlation.

3. Direct logs to audit trail.

Configure the Mendix application to export audit logs to the customer's centralized audit trail system, ensuring application-level records can be correlated with platform and infrastructure records.

## Proof and Remarks

Private Mendix Platform activity logs are available in the Admin interface at **Manage > PLATFORM > Activity Logs (/link/manage/activity-log)**.

### Time-Correlated Platform Records

The **Recent Logs** tab shows platform records including the following:

* Event operator (for example, Admin)
* Event message (for example, `The user USERNAME login, Updated Private Registry Password`)
* Timestamp with millisecond precision and UTC offset (for example, `04-29-2026 05:01:27.659 (UTC-04:00)`)

These fields provide reliable time ordering for platform-level events and support AU-12(01) time-correlation intent.

{{< figure src="/attachments/private-platform/nist-au/nist-au-12-1.png" class="no-border" >}}

### Archive and Export Support for System-Wide Correlation

In the **Archived Logs** tab, daily archived log artifacts with the archiving period and file size metadata are available and downloadable by administrators. In the **Create Custom Report** workflow, export options included PDF, Doc2007, JSON, and XML with configurable start and end date range.

These capabilities allow Private Mendix Platform records to be exported and combined with infrastructure and application logs in an external enterprise log repository or SIEM to form a broader system-wide audit trail.

### Log Configuration Controls

The **Log Settings** tab exposes two admin-configurable parameters:

| Setting | Options | Example Value |
| --- | --- | --- |
| Retention period for backup logs | 1,  30, 90, 180, 365 days | 1 day |
| Timestamp timezone for display | Any IANA world timezone | (GMT-04:00) Santiago/America |

These controls support operational consistency for audit analysis and time-correlation workflows.

{{< figure src="/attachments/private-platform/nist-au/nist-au-12-3.png" class="no-border" >}}

### Scope Clarification

Private Mendix Platform provides the platform-layer contribution to AU-12 (01) and supports timestamp-based ordering and export. Full system-wide coverage across all components still requires the following:

* The Infra Implementer must produce and forward infrastructure logs.
* The App Implementer and customer must generate and forward application-level audit logs.

With those integrations in place, IL4 AU-12 (01) can be met end-to-end across platform, infrastructure, and application components.