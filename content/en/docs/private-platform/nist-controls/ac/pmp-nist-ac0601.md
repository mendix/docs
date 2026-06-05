---
title: "AC-06 (01) Least Privilege - Authorize Access To Security Functions"
linktitle: "AC-06 (01)"
url: /private-mendix-platform/nist-controls/ac-0601/
description: "Documents the Private Mendix Platform's compliance with the AC-06 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 (01) control.

| Control ID | AC-06 (01) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization explicitly authorizes access to organization-defined security functions (deployed in hardware, software, and firmware) and security-relevant information.

### Supplemental Guidance

Security functions include, for example, establishing system accounts, configuring access authorizations (that is, permissions, privileges), setting events to be audited, and setting intrusion detection parameters. Security-relevant information includes, for example, filtering rules for routers and firewalls, cryptographic key management information, configuration parameters for security services, and access control lists. Explicitly authorized personnel include, for example, security administrators, system and network administrators, system security officers, system maintenance personnel, system programmers, and other privileged users. 

The following controls are related to this control: 

* AC-17
* AC-18
* AC-19

## Responsibility

### Mendix Responsibility

Mendix provides the technical foundation for least privilege enforcement in both the Private Mendix Platform and Mendix Runtime. This includes:

* A robust role-based access control (RBAC) system that allows fine-grained assignment of permissions to roles.
* Dynamic role management, enabling organizations to create, edit, and assign custom roles and permissions as business needs evolve.
* Group management features, allowing hierarchical organization of users and exclusive resource ownership, ensuring clear accountability and separation of duties.
* The ability to restrict access to security-relevant functions (such as user management, security configuration, and audit log access) to only those roles explicitly granted such permissions.
* Built-in audit logging to record all access and changes to security functions, supporting traceability and compliance.

### Customer Responsibility

The customer is responsible for the following tasks:

* Designing and configuring roles and groups so that only authorized users (e.g., Administrators, Security Officers) have access to security-relevant functions.
* Using PMP’s dynamic role and group management to align access control with organizational structure and compliance requirements.
* Ensuring that regular users are not granted permissions to perform sensitive operations.
* Periodically reviewing and updating role and group assignments to reflect changes in personnel or job functions.
* Actively monitoring audit logs to detect and respond to unauthorized attempts to access or modify security functions.
* Documenting and enforcing internal policies for least privilege and access reviews.
* The infrastructure implementer and operator must configure the infrastructure and PMP installation to ensure that only the allowed roles have access to the defined security-relevant functions for PMP.
* The app implementer and operator must ensure that security-relevant functions of their Mendix solutions are properly segregated to only the roles allowed by the customer.

## Guidance

### Customer Responsibility

Customers should:

* Assign privileged roles only to trusted personnel with a legitimate business need.
* Use Mendix's dynamic role and group management features to ensure that security-relevant permissions are not granted to general users or developers without proper justification.
* Regularly review all role and group assignments, especially after personnel changes or organizational restructuring.
* Establish and follow procedures for requesting, approving, and revoking privileged access.
* Routinely review audit logs to verify that only authorized users are accessing or modifying security functions, and investigate any anomalies.

## Proof and Remarks

Define privileged roles to grant privileged permissions and only assign trusted users:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0601-1.png" alt="Define a role" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0601-2.png" class="no-border" >}}

Review all role and group assignments from Private Mendix Platform administrator view:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0601-3.png" class="no-border" >}}
