---
title: "AC-06 (02) Least Privilege - Non-Privileged Access For Nonsecurity Functions"
linktitle: "AC-06 (02)"
url: /private-mendix-platform/nist-controls/ac-0602/
description: "Documents the Private Mendix Platform's compliance with the AC-06 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 (02) control.

| Control ID | AC-06 (02) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Org |

## Control

The organization requires that users of information system accounts, or roles, with access to organization-defined security functions or security-relevant information, use non- privileged accounts or roles, when accessing nonsecurity functions.

### Supplemental Guidance

This control enhancement limits exposure when operating from within privileged accounts or roles. The inclusion of roles addresses situations where organizations implement access control policies such as role-based access control and where a change of role provides the same degree of assurance in the change of access authorizations for both the user and all processes acting on behalf of the user as would be provided by a change between a privileged and non-privileged account. 

The following controls are related to this control: 

* PL-4

## Responsibility

### Mendix Responsibility

Mendix provides the technical foundation for enforcing least privilege by allowing organizations to create and manage both privileged and non-privileged accounts. The platform separates administrative functionalities from platform user functionalities through distinct sections of the application. Access to security-related functions is strictly controlled through role assignment. Ordinary users have no access to security-related functions on the platform. Robust role-based access control (RBAC), dynamic role management, and group management features support this separation.

### Customer Responsibility

Customers are responsible for ensuring that users perform nonsecurity functions using non-privileged accounts and only use privileged accounts for security-relevant or administrative tasks. Customers must configure roles and permissions appropriately, enforce this policy through user training and governance, and regularly review account usage.

## Guidance

### Mendix Responsibility

Mendix enables organizations to:

* Define custom roles with only the permissions necessary for nonsecurity functions (such as development, business operations, or general use).
* Restrict privileged roles (such as Administrator or Security Officer) to security or administrative tasks.
* Use dynamic role and group management to adapt access control to organizational changes and compliance requirements.
* Clearly separate administrative and user functionalities within the platform interface.
* Provide audit logging to track the use of privileged accounts.

### Customer Responsibility

Customers should:

* Assign non-privileged roles for regular business, development, or operational activities.
* Reserve privileged roles for users who require access to security functions or administrative capabilities.
* Train users to use non-privileged accounts for routine work and only use privileged accounts when necessary.
* Regularly review role assignments and audit logs to ensure compliance with least privilege policies.

## Proof and Remarks

For more information, see the following documents:

* [Mendix Security Reference Guide](/refguide/security/)
* [Dynamic Role Management in Private Mendix Platform](/private-mendix-platform/dynamic-role-management/)