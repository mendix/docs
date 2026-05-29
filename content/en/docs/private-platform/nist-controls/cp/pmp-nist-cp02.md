---
title: "CP-02 Contingency Plan"
linktitle: "CP-02"
url: /private-mendix-platform/nist-controls/cp-02/
description: "Documents the Private Mendix Platform's compliance with the CP-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CP-02 control.

| Control ID | CP-02 |
| --- | --- |
| Control category | CP - Contingency Planning |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Develops a contingency plan for the information system that:

    * Identifies essential missions and business functions and associated contingency requirements.
    * Provides recovery objectives, restoration priorities, and metrics.
    * Addresses contingency roles, responsibilities, assigned individuals with contact information.
    * Addresses maintaining essential missions and business functions despite an information system disruption, compromise, or failure.
    * Addresses eventual, full information system restoration without deterioration of the security safeguards originally planned and implemented.
    * Is reviewed and approved by organization-defined personnel or roles.

* Distributes copies of the contingency plan to organization-defined key contingency personnel (identified by name and/or by role) and organizational elements.
* Coordinates contingency planning activities with incident handling activities.
* Reviews the contingency plan for the information system at an organization-defined frequency.
* Updates the contingency plan to address changes to the organization, information system, or environment of operation and problems encountered during contingency plan implementation, execution, or testing.
* Communicates contingency plan changes to organization-defined key contingency personnel (identified by name and/or by role) and organizational elements.
* Protects the contingency plan from unauthorized disclosure and modification.

### Supplemental Guidance

Contingency planning for information systems is part of an overall organizational program for achieving continuity of operations for mission and business functions. Contingency planning addresses both information system restoration and implementation of alternative mission or business processes when systems are compromised. The effectiveness of contingency planning is maximized by considering such planning throughout the phases of the system development life cycle. 

Performing contingency planning on hardware, software, and firmware development can be an effective means of achieving information system resiliency. Contingency plans reflect the degree of restoration required for organizational information systems since not all systems may need to fully recover to achieve the level of continuity of operations desired. Information system recovery objectives reflect applicable laws, Executive Orders, directives, policies, standards, regulations, and guidelines. 

In addition to information system availability, contingency plans also address other security-related events resulting in a reduction in mission and/or business effectiveness, such as malicious attacks compromising the confidentiality or integrity of information systems. Actions addressed in contingency plans include, for example, orderly/graceful degradation, information system shutdown, fallback to a manual mode, alternate information flows, and operating in modes reserved for when systems are under attack. By closely coordinating contingency planning with incident handling activities, organizations can ensure that the necessary contingency planning activities are in place and activated in the event of a security incident.

The following controls are related to this control:

* AC-14
* CP-6
* CP-7
* CP-8
* CP-9
* CP-10
* IR-4
* IR-8
* MP-2
* MP-4
* MP-5
* PM-8
* PM-11

## Responsibility

### Customer Responsibility

Private Mendix Platform currently lacks built-in platform capabilities or integrations to support backup and contingency planning natively. Customers can rely on infrastructure-level mechanisms to fulfill contingency planning requirements. Determines the contingency planning requirements for their Mendix solutions, including the definition of recovery objectives. The customer is responsible for maintaining those plans, communicating them to relevant parties, and coordinating testing activities.

## Guidance

### Customer Responsibility

The Mendix Operator, Mendix Runtime offer various mechanisms to support contingency planning, including infrastructure-level disaster recovery and backup capabilities. Private Mendix Platform does not provide out-of-the-box (OOTB) tools or built-in integrations specifically for application-level backup or contingency planning. To meet contingency planning requirements, Customers can leverage infrastructure-level mechanisms.

* Infra Implementer - Implements the infrastructure architecture necessary to support the customer's contingency plans, including any backup or recovery mechanisms at the infrastructure level.
* App Implementer - Ensures the Mendix application is designed and configured to align with the customer's contingency planning requirements.
* Infra Operator and App Operator - Maintain the ongoing capability of the infrastructure and Mendix application to support the customer's contingency plans and actively participate in contingency plan testing.

## Proof and Remarks

High Availability (HA) and Disaster Recovery (DR) are the customer's responsibility. Customers are expected to adhere to their existing Kubernetes operational procedures as approved by their internal IT or infrastructure teams. In instances where a customer lacks a designated IT/infrastructure team or an established backup policy for cloud or Kubernetes environments, the customer is directed to Expert Services for further assistance.

The following baseline practices are recommended to establish a resilient infrastructure backup and recovery framework:

* Cluster state - Back up etcd where feasible, or utilize a tool such as Velero to capture cluster state and persistent volumes to offsite storage.
* Data persistence - Back up all databases and file storage using a combination of cloud-native replication and offsite storage where possible.
* Infrastructure as code - Leverage Terraform or equivalent tools to enable rapid recreation of damaged environments.

For more information about namespace-level backup and restore procedures, see [Use Velero to Back Up Mendix on Kubernetes Namespaces](/developerportal/deploy/private-cloud-velero/).

For more information about data migration, see [Migrating Data in Mendix on Kubernetes Environments (Preview)](/developerportal/deploy/private-cloud-data-transfer/).