---
title: "AU-02 Audit Events"
linktitle: "AU-02"
url: /private-mendix-platform/nist-controls/au-02/
description: "Documents the Private Mendix Platform's compliance with the AU-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-02 control.

| Control ID | AU-02 |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The organization:

a. Determines that the information system is capable of auditing organization-defined auditable events.
b. Coordinates the security audit function with other organizational entities requiring audit- related information to enhance mutual support and to help guide the selection of auditable events.
c. Provides a rationale for why the auditable events are deemed to be adequate to support after-the-fact investigations of security incidents.
d. Determines that the following events are to be audited within the information system: 

    * The subset of the auditable events defined in AU-2 a. along with the frequency of (or situation requiring) auditing for each identified event.

### Supplemental Guidance

An event is any observable occurrence in an organizational information system. Organizations identify audit events as those events which are significant and relevant to the security of information systems and the environments in which those systems operate in order to meet specific and ongoing audit needs. Audit events can include, for example, password changes, failed logons, or failed accesses related to information systems, administrative privilege usage, PIV credential usage, or third-party credential usage. 

In determining the set of auditable events, organizations consider the auditing appropriate for each of the security controls to be implemented. To balance auditing requirements with other information system needs, this control also requires identifying that subset of auditable events that are audited at a given point in time. 

For example, organizations may determine that information systems must have the capability to log every file access both successful and unsuccessful, but not activate that capability except for specific circumstances due to the potential burden on system performance. Auditing requirements, including the need for auditable events, may be referenced in other security controls and control enhancements. Organizations also include auditable events that are required by applicable federal laws, Executive Orders, directives, policies, regulations, and standards. 

Audit records can be generated at various levels of abstraction, including at the packet level as information traverses the network. Selecting the appropriate level of abstraction is a critical aspect of an audit capability and can facilitate the identification of root causes to problems. 

Organizations consider in the definition of auditable events, the auditing necessary to cover related events such as the steps in distributed, transaction-based processes (for example, processes that are distributed across multiple organizations) and actions that occur in service-oriented architectures.

The following controls are related to this control:

* [AC-06](/private-mendix-platform/nist-controls/ac-06/)
* [AC-17](/private-mendix-platform/nist-controls/ac-17/)
* [AU-03](/private-mendix-platform/nist-controls/au-03/)
* [AU-12](/private-mendix-platform/nist-controls/au-12/)
* MA-04
* [MP-02](/private-mendix-platform/nist-controls/mp-02/)
* [MP-04](/private-mendix-platform/nist-controls/mp-04/)
* [SI-04](/private-mendix-platform/nist-controls/si-04/)

For more information, refer to the NIST Special Publication 800-92 and [http://idmanagement.gov](http://idmanagement.gov).

## Responsibility

### Mendix Responsibility

Private Mendix Platform stores logs into a database at the smallest reliable system time measurement, support to sort and filter logs, display and output logs with time unit setting and containing UTC offset (time zone).

### Customer Responsibility

The customer is responsible for configuring what “unit of time” for the audit logs display and output.

### Shared Responsibility

#### Platform-Level

Private Mendix Platform logs platform actions from users and limited actions from Admins. 

#### App-Level

The Mendix Runtime and Studio Pro provide the ability to product audit logs and records as well as target those logs and records to other systems. Additionally, Studio Pro allows for the creation of custom audit logs and records.

It is the responsibility of the customer to determine what events are required, and ensure that the created Mendix app and Infrastructure support the required events and frequency.

It is the responsibility of the Infra Implementer and App Implementer to add additional audit capabilities and adjust audit frequencies as dictated by the customer.

## Guidance

### Mendix Responsibility

* Private Mendix Platform provides the **Log Settings** tab at **Customer Admin > Manage > (Platform) > Activity Log > Log Settings**.
* Private Mendix Platform provides the ability to configure the unit of time for which the audit logs are shown (day, hour, minute, second, millisecond, to the smallest reliable system time measurement).
* Private Mendix Platform always stores logs in the database at the smallest reliable system time measurement. 
* Private Mendix Platform displays and outputs logs with the time unit setting and UTC offset (time zone).
* Private Mendix Platform provides the ability to sort and filter audit logs.

### Customer Responsibility

* It is the responsibility of the customer to review audited events.
* It is the responsibility of the customer, Infra Operator, and App Operator to update audited events as dictated by the customer.  

## Proof and Remarks

Private Mendix Platform provides a setting to configure what unit of time the audit logs are generated for (**Day**, **Hour**, **Minute**, **Second**, **Millisecond**) :

{{< figure src="/attachments/private-platform/nist-au/nist-au-02-1.png" class="no-border" >}}

Private Mendix Platform provides to sort audit logs by timestamp and filter them by login:

{{< figure src="/attachments/private-platform/nist-au/nist-au-02-2.png" class="no-border" >}}

Private Mendix Platform displays logs with the time unit setting (for example, *milliseconds*) and UTC offset (for example, *+08:00*):

{{< figure src="/attachments/private-platform/nist-au/nist-au-02-3.png" class="no-border" >}}

### Studio Pro

When building Mendix applications, the App Implementer and Operator can generate and configure audit logging through the Mendix logging functionality. For more information, see the following documents:

* [Logging](/refguide/logging/)
* [Log Message](/refguide/log-message/)