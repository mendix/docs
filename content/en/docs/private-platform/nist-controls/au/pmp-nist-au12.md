---
title: "AU-12 Audit Generation"
linktitle: "AU-12"
url: /private-mendix-platform/nist-controls/au-12/
description: "Documents the Private Mendix Platform's compliance with the AU-12 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-12 control.

| Control ID | AU-12 |
| --- | --- |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system:

* Provides audit record generation capability for the auditable events defined in AU-2a at organization-defined information system components.
* Allows organization-defined personnel or roles to select which auditable events are to be audited by specific components of the information system
* Generates audit records for the events defined in AU-2 with the content defined in AU-3. 

### Supplemental Guidance

Audit records can be generated from many different information system components. The list of audited events is the set of events for which audits are to be generated. These events are typically a subset of all events for which the information system is capable of generating audit records. 

The following controls are related to this control:

* [AC-03](/private-mendix-platform/nist-controls/ac-03/)
* [AU-02](/private-mendix-platform/nist-controls/au-02/)
* [AU-03](/private-mendix-platform/nist-controls/au-03/)
* AU-06
* [AU-07](/private-mendix-platform/nist-controls/au-07/)

## Responsibility

### Mendix Responsibility

Mendix is responsible for implementing and maintaining this control at the platform level.

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes defining which auditable events must be captured at the application and infrastructure levels to ensure compliance with federal requirements. The customer must ensure that audit generation policies, event selection criteria, and audit record content requirements are documented, reviewed, and enforced within their environment.

#### Infra Implementer

The Infra Implementer is responsible for configuring audit record generation capabilities at the infrastructure level as dictated by the customer.

#### App Implementer

The App Implementer is responsible for implementing audit record generation capabilities within the Mendix application as dictated by the customer.

## Guidance

### Mendix Responsibility

For Private Mendix Platform, AU-12 is satisfied only in part at the platform layer. The Mendix Operator, Private Mendix Platform, and Mendix Runtime generate audit records for platform-level events such as operator actions, runtime activity, deployment operations, and platform configuration changes. Private Mendix Platform does not yet expose the full event-selection configurability contemplated by AU-12 for each platform component, which is why this control remains not fully satisfied. Application-specific audit logging for customer-developed Mendix apps is outside the scope of Private Mendix Platform itself and must be implemented by the customer and app implementer.

The following configuration is required:

1. Generate platform audit records by default.

    Configure the Mendix Operator, Private Mendix Platform, and Mendix Runtime so platform-level events such as operator actions, deployment activities, and configuration changes are emitted consistently as audit-relevant logs.

2. Provide log export integration points.

    Ensure that Private Mendix Platform components can forward or expose their audit-relevant logs to the customer's centralized logging or SIEM destination so platform events can be retained, reviewed, and correlated with external records.

3. Document platform audit coverage and gaps.

    Clearly document which platform events Private Mendix Platform generates today and which event-selection capabilities are not yet configurable so customers can address the remaining AU-12 requirements at the infrastructure and application layers.

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and NIST SP 800-92, which establish requirements for audit record generation and log management for federal information systems. Customers operating within a FedRAMP or DoD SRG environment must ensure that audit generation capabilities are configured across all system components and that auditable events are selected in accordance with organizational security policies.

To meet these requirements, the customer must carry out the following actions:

1. Define auditable events and audit record content.

    The customer must define which events must be audited at each system component level, including the content that each audit record must contain per AU-3. This includes specifying audit requirements for the Infra Implementer at the infrastructure level and for the App Implementer at the application level, in accordance with NIST SP 800-92 guidelines.

2. Ensure infrastructure audit generation.

    Direct the Infra Implementer to configure audit record generation capabilities at the infrastructure level, including operating system, network device, and cloud service audit logging. These capabilities must align with the events defined in AU-2 and the content requirements defined in AU-3.

3. Ensure application audit generation.

    Direct the App Implementer to implement audit record generation within the Mendix application using the Audit Trail module and custom logging mechanisms. The application must generate audit records for all customer-defined auditable events with the required content fields per NIST SP 800-53 AU-3.

### Infra Implementer

The Infra Implementer is responsible for configuring audit record generation capabilities at the infrastructure level. This includes enabling audit logging on operating systems, network devices, cloud services, and container platforms that support the Mendix application deployment. The Infra Implementer must ensure that infrastructure components can generate audit records for the events defined by the customer and that these records contain the content specified in AU-3.

The Infra Implementer must perform the following tasks:

1. Enable infrastructure audit logging.

    Configure audit logging on all infrastructure components (operating systems, network devices, container platforms, cloud services) to generate audit records for the events defined by the Customer in accordance with AU-02.

2. Configure audit record content.

    Ensure all infrastructure audit records contain the required content fields as defined in AU-03, including event type, timestamp, source, outcome, and identity of the subject or object involved in the event.

3. Implement audit log forwarding.

    Configure infrastructure components to forward audit logs to the customer's centralized logging system, ensuring that audit records are available for correlation, analysis, and reporting.

### App Implementer

The App Implementer is responsible for implementing audit record generation within the Mendix application. This includes configuring the Audit Trail module or equivalent custom audit logging for application-specific events, and ensuring that audit records are directed to the appropriate logging infrastructure as dictated by the customer.

This responsibility covers app behavior and business events inside customer-developed applications rather than Private Mendix Platform-level events.

The App Implementer must perform the following tasks:

1. Implement application audit logging.

    Configure the Mendix Audit Trail module and implement custom audit logging within the application to capture all customer-defined auditable events at the application level.

2. Define audit record content.

    Ensure application-level audit records contain the required content fields per AU-3, including user identity, event type, timestamp, success or failure indication, and affected data objects.

3. Configure audit log export.

   Direct application audit logs to the customer's centralized logging infrastructure, ensuring that application-level audit records can be correlated with platform and infrastructure audit records.

## Proof and Remarks

Private Mendix Platform activity logs are available in the Admin interface at **Manage > PLATFORM > Activity Logs (/link/manage/activity-log)**.

### Recent Logs (Platform-Level Audit Records)

Private Mendix Platform records and displays platform-level audit events in real time. The **Recent Logs*** tab shows entries with the following structure:

| Field | Example Value |
| --- | --- |
| Category | `Admin` |
| Event Description | `The user USERNAME login` |
| Timestamp | `04-29-2026 05:01:27.659 (UTC-04:00)` |

Example event types include the following:

* `The user USERNAME login` - User authentication events, timestamped to millisecond precision
* `Updated Private Registry Password` - Administrative configuration change events

The following filter capabilities are available:

* Free-text keyword search across event descriptions
* Time range presets: 

    * **All**
    * **Last 24 Hours**
    * **Last 7 days**
    * **Last 30 days**
    * **Last 90 days**

{{< figure src="/attachments/private-platform/nist-au/nist-au-12-1.png" class="no-border" >}}

### Archived Logs (Automatic Daily Backup)

Private Mendix Platform automatically archives platform audit logs on a daily schedule. The **Archived Logs** tab shows values like in the following example:

| Archived Date | Archived Period | File Size |
| --- | --- | --- |
| `04-30-2026, 08:39:42` | `04-29-2026 > 04-30-2026` | `17.056 Kb` |
| `04-14-2026, 08:09:34` | `04-13-2026 > 04-14-2026` | `3.764 Kb` |
| `04-10-2026, 09:44:56` | `04-09-2026 > 04-10-2026` | `4.091 Kb` |
| `04-04-2026, 08:16:10` | `04-03-2026 > 04-04-2026` | `6.396 Kb` |
| `03-31-2026, 08:00:00` | `03-30-2026 > 03-31-2026` | `1.03 Kb` |

Each archived file can be individually downloaded by a Private Mendix Platform Admin.

{{< figure src="/attachments/private-platform/nist-au/nist-au-12-2.png" class="no-border" >}}

### Log Settings (Configurable Retention and Timezone)

The **Log Settings** tab exposes two admin-configurable parameters:

| Setting | Options | Example Value |
| --- | --- | --- |
| Retention period for backup logs | 1,  30, 90, 180, 365 days | 1 day |
| Timestamp timezone for display | Any IANA world timezone | (GMT-04:00) Santiago/America |

{{< figure src="/attachments/private-platform/nist-au/nist-au-12-3.png" class="no-border" >}}

### Create Custom Report (Export Capability)

Private Mendix Platform provides an on-demand custom report export function accessible from the **Recent Logs** tab:

| Setting | Options |
| --- | --- |
| Log level | Event; Summary (default); Complete |
| Export format | PDF (default); Doc2007; JSON; XML |
| Date range | Configurable start date and end date with time picker |

This allows a Private Mendix Platform Admin to generate time-bounded audit reports in multiple formats for review, submission to auditors, or integration with external SIEM systems.

{{< figure src="/attachments/private-platform/nist-au/nist-au-12-4.png" class="no-border" >}}

### AU-12 Gap Analysis 

Private Mendix Platform's compliance with AU-12 currently has the following gaps:

* There is no per-component event selection.

    AU-12(b) requires allowing authorized personnel to select which auditable events are captured by specific system components. Private Mendix Platform records a fixed set of platform-level administrative events and does not expose granular per-component event selection to administrators.

* The AU-2 event list is not configurable at platform level. 

    Private Mendix Platform does not implement the full AU-2 and AU-12 event catalog. The platform records a predefined list of events. There is no mechanism for an administrator to add or remove event types from the captured set.

* Infrastructure-level audit generation is out of scope.

    Infrastructure-level audit logging (OS, network, container runtime) is the responsibility of the Infra Implementer and is outside of Private Mendix Platform's scope.

* Application-level audit generation is the customer's responsibility.

    Audit logging for customer-developed Mendix apps is the responsibility of the customer and app Implementer using the Mendix Audit Trail module or custom instrumentation. Private Mendix Platform does not provide or aggregate application-layer events.

The above evidence demonstrates that Private Mendix Platform satisfies a partial platform-scoped subset of AU-12 requirements. Full compliance requires coordinated implementation across Infra Implementer (infrastructure logs), and App Implementer along with the customer organization (application-level audit records).
