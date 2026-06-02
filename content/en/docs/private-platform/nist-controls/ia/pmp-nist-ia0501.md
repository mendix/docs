---
title: "IA-05 (01) Authenticator Management (Password-Based Authentication)"
linktitle: "IA-05 (01)"
url: /private-mendix-platform/nist-controls/ia-05/
description: "Documents the Private Mendix Platform's compliance with the IA-05 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 (01) control.

| Control ID | IA-05 (01) |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control {#control}

The information system, for password-based authentication:

a. Enforces minimum password complexity of organization-defined requirements for case sensitivity, number of characters, mix of upper-case letters, lower-case letters, numbers, and special characters, including minimum requirements for each type.
b. Enforces at least an organization-defined number of changed characters when new passwords are created.
c. Stores and transmits only encrypted representations of passwords
d. Enforces an organization-defined number of minimum and maximum lifetime password restrictions.
e. Prohibits password reuse for an organization-defined number of generations.
f. Allows the use of a temporary password for system logons with an immediate change to a permanent password.

### Supplemental Guidance

This control enhancement applies to single-factor authentication of individuals using passwords as individual or group authenticators, and in a similar manner, when passwords are part of multifactor authenticators. This control enhancement does not apply when passwords are used to unlock hardware authenticators (for example, Personal Identity Verification cards). The implementation of such password mechanisms may not meet all of the requirements in the enhancement. Encrypted representations of passwords include, for example, encrypted versions of passwords and one-way cryptographic hashes of passwords. The number of changed characters refers to the number of changes required with respect to the total number of positions in the current password. Password lifetime restrictions do not apply to temporary passwords.

The following controls are related to this control:

* IA-6

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes establishing identity and authentication policies to ensure compliance with federal requirements. 

## Guidance

### Customer Responsibility

The Mendix Runtime supports a range of password complexity and change requirements, as well as integration with a customer's identity provider (IdP). The customer is responsible for determining the appropriate password complexity and change requirements for the solution.

#### Platform-Level

Private Mendix Platform satisfies requirements *a* through *c*, [above](#control); however, these are fixed and cannot be customized to meet specific customer requirements. 

Private Mendix Platform does not support requirements *d* through *f*, [above](#control).

#### Infra-Level

The Infra Implementer is responsible for ensuring that the infrastructure and Private Mendix Platform integrate with the customer's IdP and enforce the defined password complexity and change requirements.

#### App-Level

The App Implementer is responsible for ensuring that the Mendix app integrates with the customer's IdP and enforces password complexity and change requirements. The Infra Operator and App Operator are jointly responsible for maintaining ongoing integration with the customer's IdP and ensuring continued compliance.

## Proof and Remarks

Private Mendix Platforms allows customers to define the required password complexity:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-05-1.png" class="no-border" >}}