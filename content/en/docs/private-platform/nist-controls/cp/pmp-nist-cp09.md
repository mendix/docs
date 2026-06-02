---
title: "CP-09 Information System Backup"
linktitle: "CP-09"
url: /private-mendix-platform/nist-controls/cp-09/
description: "Documents the Private Mendix Platform's compliance with the CP-09 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CP-09 control.

| Control ID | CP-09 |
| --- | --- |
| Control category | CP - Contingency Planning |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Conducts backups of user-level information contained in the information system at an organization-defined frequency consistent with recovery time and recovery point objectives.
* Conducts backups of system-level information contained in the information system at an organization-defined frequency consistent with recovery time and recovery point objectives.
* Conducts backups of information system documentation including security-related documentation at an organization-defined frequency consistent with recovery time and recovery point objectives.
* Protects the confidentiality, integrity, and availability of backup information at storage locations.

### Supplemental Guidance

System-level information includes, for example, system-state information, operating system and application software, and licenses. User-level information includes any information other than system-level information. Mechanisms employed by organizations to protect the integrity of information system backups include, for example, digital signatures and cryptographic hashes. Protection of system backup information while in transit is beyond the scope of this control. Information system backups reflect the requirements in contingency plans as well as other organizational requirements for backing up information.

The following controls are related to this control:

* CP-2
* CP-6
* MP-4
* MP-5
* SC-13

For more information, refer to NIST Special Publication 800-34. 

## Responsibility

### Customer Responsibility

The customer is accountable for establishing backup requirements. Implementation and ongoing maintenance of these requirements are carried out by the Infrastructure Implementer or Operator, and Application Implementer or Operator.

## Guidance

### Customer Responsibility

* Customer – Defines backup frequency, recovery objectives, and the backup schemes appropriate for the Mendix solution.
* Infrastructure Implementer – Designs and provisions the underlying infrastructure architecture to support the customer-defined backup scheme.
* Application Implementer – Configures the Mendix application to ensure compatibility with the backup scheme, enabling successful and consistent backups.
* Infrastructure Operator – Maintains the operational integrity of the infrastructure to ensure backups continue to execute as required.
* Application Operator – Maintains the operational state of the Mendix application to support ongoing backup execution in accordance with customer requirements.

## Proof and Remarks

High Availability (HA) and Disaster Recovery (DR) are the customer's responsibility. Customers are expected to adhere to their existing Kubernetes operational procedures as approved by their internal IT or infrastructure teams. In instances where a customer lacks a designated IT/infrastructure team or an established backup policy for cloud or Kubernetes environments, the customer is directed to Expert Services for further assistance.

The following baseline practices are recommended to establish a resilient infrastructure backup and recovery framework:

* Cluster state - Back up etcd where feasible, or utilize a tool such as Velero to capture cluster state and persistent volumes to offsite storage.
* Data persistence - Back up all databases and file storage using a combination of cloud-native replication and offsite storage where possible.
* Infrastructure as code - Leverage Terraform or equivalent tools to enable rapid recreation of damaged environments.

For more information about namespace-level backup and restore procedures, see [Use Velero to Back Up Mendix on Kubernetes Namespaces](/developerportal/deploy/private-cloud-velero/).

For more information about data migration, see [Migrating Data in Mendix on Kubernetes Environments (Preview)](/developerportal/deploy/private-cloud-data-transfer/).