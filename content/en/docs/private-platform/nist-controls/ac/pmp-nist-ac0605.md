---
title: "AC-06 (05) Least Privilege - Privileged Accounts"
linktitle: "AC-06 (05)"
url: /private-mendix-platform/nist-controls/ac-0605/
description: "Documents the Private Mendix Platform's compliance with the AC-06 (05) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 (05) control.

| Control ID | AC-06 (05) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Org |

## Control

The organization restricts privileged accounts on the information system to organization-defined personnel or roles.

### Supplemental Guidance

Privileged accounts, including super user accounts, are typically described as system administrator for various types of commercial off-the-shelf operating systems. Restricting privileged accounts to specific personnel or roles prevents day-to-day users from having access to privileged information/functions. Organizations may differentiate in the application of this control enhancement between allowed privileges for local accounts and for domain accounts provided organizations retain the ability to control information system configurations for key security parameters and as otherwise necessary to sufficiently mitigate risk.

The following controls are related to this control: 

* CM-6

## Responsibility

### Mendix Responsibility

Mendix provides the technical foundation for restricting privileged accounts through robust role-based access control (RBAC), dynamic role management, and group management features. The platform allows organizations to define and assign privileged roles (such as Administrator or Operator) only to specific personnel or groups. The platform interface enforces separation between privileged and non-privileged accounts, ensuring that only authorized users can access privileged functions.

### Customer Responsibility

Customers are responsible for defining which personnel or roles are allowed privileged access, assigning privileged roles only to those individuals, and ensuring that ordinary users do not have access to privileged accounts. Customers must document privileged role assignments, regularly review them, and update as needed to maintain compliance with organizational policy and regulatory requirements.

## Guidance

### Mendix Responsibility

Mendix enables organizations to:

* Create and manage privileged roles (for example, Administrator, Operator) and assign them only to authorized personnel.
* Use dynamic role and group management to adapt privileged access as organizational needs change.
* Enforce separation between privileged and non-privileged accounts through the platform interface and permissions.
* Provide audit logging to track privileged account usage.

### Customer Responsibility

Customers should:

* Clearly define and document which personnel or roles are allowed privileged access.
* Assign privileged roles only to those individuals and ensure ordinary users do not have such access.
* Regularly review privileged role assignments and update them as needed.
* Differentiate privileges for local and domain accounts if applicable, while maintaining control over key security parameters.
* Maintain documentation of privileged role assignments and access reviews as part of their compliance evidence.

## Proof and Remarks

For more information, see the following documents:

* [Mendix Security Reference Guide](/refguide/security/)
* [Dynamic Role Management in Private Mendix Platform](/private-mendix-platform/dynamic-role-management/)