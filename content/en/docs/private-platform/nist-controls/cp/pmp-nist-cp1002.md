---
title: "CP-10 (02) Information System Recovery and Reconstitution (Transaction Recovery)"
linktitle: "CP-10 (02)"
url: /private-mendix-platform/nist-controls/cp-1002/
description: "Documents the Private Mendix Platform's compliance with the CP-10 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CP-10 (02) control.

| Control ID | CP-10 (02) |
| --- | --- |
| Control category | CP - Contingency Planning |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system implements transaction recovery for systems that are transaction-based.

### Supplemental Guidance

Transaction-based information systems include, for example, database management systems and transaction processing systems. Mechanisms supporting transaction recovery include, for example, transaction rollback and transaction journaling. 

## Responsibility

### Customer Responsibility

The Infra Implementer and App Implementer are responsible for implementing and maintaining this control at the appropriate level through various Disaster Recover (DR), backup, and High Availability (HA) mechanisms and best-practices. These are supported by Private Mendix Platform itself, as well as Mendix applications created and delivered on Private Mendix Platform.

## Guidance

### Customer Responsibility

#### Platform-Level

Private Mendix Platform is not by itself a business transaction processing system. Transaction recovery is primarily implemented by using Mendix error-handling patterns (for example, exception handlers, rollback logic in microflows and nanoflows).

High Availability (HA) and Disaster Recovery (DR) for Private Mendix Platform infrastructure are the customer's responsibility. Customers are expected to follow their existing Kubernetes operational procedures approved by their internal IT or infrastructure teams.

If a customer does not have a designated IT/infrastructure team or an established backup policy for cloud or Kubernetes environments, the customer should engage Mendix Expert Services for assistance.

To establish a resilient Private Mendix Platform backup and recovery posture, the following baseline practices are recommended:

* Cluster state - Back up etcd where feasible, or use a tool such as Velero to capture cluster state and persistent volumes to offsite storage.
* Data persistence - Back up all databases and file storage using cloud-native replication plus offsite storage where possible.
* Infrastructure as code - Use Terraform (or equivalent) to enable rapid recreation of damaged environments.
* Namespace backup and restore - For more information, see [Use Velero to Back Up Mendix on Kubernetes Namespaces](/developerportal/deploy/private-cloud-velero/).
* Data migration - For more information, see [Migrating Data in Mendix on Kubernetes Environments (Preview)](/developerportal/deploy/private-cloud-data-transfer/).

#### Application-Level

Mendix applications that perform transaction-based operations (such as those involving financial transactions, critical business record updates, or workflows requiring ACID guarantees) shall incorporate recovery mechanisms consistent with the following:

* Transaction management - Leverage Mendix microflow constructs that support commit and rollback semantics. Application logic shall handle transaction failures gracefully, ensuring that partial updates do not result in data inconsistency.
* Application-level journaling - Where business requirements demand enhanced auditability or recovery granularity, implement application-level transaction journaling or logging to facilitate reconstruction of state following a failure.
* Integration with Platform backup strategy - Ensure that application data, including entities stored in the application database, is encompassed within the platform-level backup scope. Application Implementers shall coordinate with Infra Implementers to validate that backup schedules and retention periods align with application RPO requirements.
* Recovery testing - Participate in periodic recovery testing to validate that application functionality can be restored in accordance with defined RTO and RPO, and that transaction integrity is maintained following restoration.
* Documentation - Maintain documentation of application-specific recovery procedures, including any manual steps required to reconcile transactions after a restore event.

For customer applications built on the platform that implement transaction-based functionality, responsibility for transaction recovery rests with the Application Implementer or Operator. Such applications are expected to incorporate transaction recovery mechanisms (for example, transaction rollback, journaling) as appropriate to their design and data integrity requirements.

* Infra Implementer - Implements and maintains platform-level backup and disaster recovery mechanisms for the Private Mendix Platform, including definition of RTO/RPO, execution of scheduled backups, protection of backup data, and periodic testing of restoration procedures.
* Application Implementer - Incorporates transaction recovery mechanisms (for example, rollback, journaling) into Mendix applications where transaction-based functionality exists. Coordinates with Infra Implementer to ensure application data is included in backup scope and recovery procedures.
* Application Operator - Operates and monitors application recovery procedures. Participates in recovery testing and validates transaction integrity following restoration events.

## Proof and Remarks

For more information about error handling, see [Error Handling in Microflows](/refguide/error-handling-in-microflows/).

For more information about namespace-level backup and restore procedures, see [Use Velero to Back Up Mendix on Kubernetes Namespaces](/developerportal/deploy/private-cloud-velero/).

For more information about data migration, see [Migrating Data in Mendix on Kubernetes Environments (Preview)](/developerportal/deploy/private-cloud-data-transfer/).