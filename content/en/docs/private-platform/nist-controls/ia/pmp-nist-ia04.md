---
title: "IA-04 Identifier Management"
linktitle: "IA-04"
url: /private-mendix-platform/nist-controls/ia-04/
description: "Documents the Private Mendix Platform's compliance with the IA-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-04 control.

| Control ID | IA-04 |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization manages information system identifiers by:

* Receiving authorization from organization-defined personnel or roles to assign an individual, group, role, or device identifier.
* Selecting an identifier that identifies an individual, group, role, or device.
* Assigning the identifier to the intended individual, group, role, or device.
* Preventing reuse of identifiers for an organization-defined time period.
* Disabling the identifier after an organization-defined time period of inactivity.

### Supplemental Guidance

Common device identifiers include, for example, media access control (MAC), Internet protocol (IP) addresses, or device-unique token identifiers. Management of individual identifiers is not applicable to shared information system accounts (for example, guest and anonymous accounts). Typically, individual identifiers are the user names of the information system accounts assigned to those individuals. In such instances, the account management activities of AC-2 use account names provided by IA-4. 

This control also addresses individual identifiers not necessarily associated with information system accounts (for example, identifiers used in physical security control databases accessed by badge reader systems for access to information systems). Preventing reuse of identifiers implies preventing the assignment of previously used individual, group, role, or device identifiers to different individuals, groups, roles, or devices.

The following controls are related to this control:

* AC-2
* IA-2
* IA-3
* IA-5
* IA-8
* SC-37

For more information, refer to the FIPS Publication 201 and NIST Special Publications 800-73, 800-76, and 800-78.

## Responsibility

### Mendix Responsibility

Private Mendix Platform provides the mechanisms to integrate with external Identity Providers (IdPs) and enforce session timeouts.

### Customer Responsibility

The management of the identifier lifecycle (authorization, assignment, prevention of reuse, and disabling) is a shared responsibility across the customer, Infrastructure Implementer, and Application Implementer.

## Guidance

### Mendix Responsibility

The Mendix Runtime supports the technical aspects of this control by:

* Disabling identifiers after inactivity - Supporting session identifier and token expiration after a configurable timeout, enabling the App Implementer to align session timeouts with organizational policy.
* Identifying components - The Mendix Operator identifies individual pods running Mendix Runtimes by unique pod names, serving as device-level identifiers for platform components.

### Customer Responsibility

The Customer defines and documents:

* The organization-defined personnel or roles authorized to assign identifiers.
* The organization-defined time period for preventing the reuse of identifiers.
* The organization-defined time period of inactivity after which an identifier is disabled.
* The Identity Provider (IdP) that serves as the authoritative source for user identities, group memberships, and roles. This IdP acts as the system of record for the entire identifier lifecycle, including creation, modification, and disabling.

The Infra Implementer configures the underlying infrastructure and the Private Mendix Platform to leverage the customer's Identity Provider (IdP) for authentication and identity management. This includes configuring the platform to trust the identifiers issued by the customer's IdP.

The App Implementer integrates the Mendix application with the customer's Identity Provider (IdP). This integration ensures that the application uses the customer's established identifiers and authentication policies. The App Implementer also configures the application's session timeout settings to align with the customer's defined time period for disabling inactive identifiers.

The Infra Operator and App Operator maintain ongoing compliance of the infrastructure, Private Mendix Platform, and the Mendix application with the identity management policies throughout the system's lifecycle. This includes monitoring and validating the integration with the customer's IdP.

## Proof and Remarks

Each pod has a unique name assigned by Kubernetes. The Operator primarily identifies and manages Mendix Runtime pods using Kubernetes-native mechanisms.

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-04-1.png" class="no-border" >}}

Session timeout can be configured.

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-04-2.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-04-3.png" class="no-border" >}}

For more information about connecting to the customer's IdP, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).
