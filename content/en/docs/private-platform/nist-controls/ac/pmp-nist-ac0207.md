---
title: "AC-02 (07) Account Management - Role-Based Schemes"
linktitle: "AC-02 (07)"
url: /private-mendix-platform/nist-controls/ac-0207/
description: "Documents the Private Mendix Platform's compliance with the AC-02 (07) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 (07) control.

| Control ID | AC-02 (07) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Establishes and administers privileged user accounts in accordance with a role-based access scheme that organizes allowed information system access and privileges into roles.
* Monitors privileged role assignments.
* Takes organization-defined actions when privileged role assignments are no longer appropriate.

### Supplemental Guidance

Privileged roles are organization-defined roles assigned to individuals that allow those individuals to perform certain security-relevant functions that ordinary users are not authorized to perform. These privileged roles include, for example, key management, account management, network and system administration, database administration, and web administration.

## Responsibility

### Customer Responsibility

Customers are responsible for defining and documenting their organization-specific privileged roles in alignment with job functions and the principle of least privilege, establishing formal processes for requesting, approving, and provisioning privileged access within Private Mendix Platform. They must conduct periodic access reviews to ensure role assignments remain appropriate, and supplement the platform's built-in monitoring audit logging  tools to capture a complete trail of privileged role changes. 

Additionally, customers are responsible for defining and enforcing actions when privileged access is no longer appropriate—including integrating role revocation with Identity Provider (IdP) workflows to ensure timely de-provisioning upon employee offboarding or role changes, and establishing internal SLAs to govern the timeliness of such actions.

## Guidance

### Customer Responsibility

Privileged access to Private Mendix Platform is controlled through Role-Based Access Control (RBAC) that is driven by the customer's Identity Provider (IdP):

#### Authentication

Users authenticate through the customer's IdP (for example, Azure AD, Entra ID, or other SAML 2.0 or OIDC-compliant provider). The platform does not maintain independent credential stores for end users.

#### Role Assignment through IdP Claims or Groups

The customer's IdP asserts group memberships or role claims during authentication. These IdP groups or claims are mapped to corresponding Private Mendix Platform roles. This ensures that the customer retains centralized control over who holds privileged roles. 

#### Access Enforcement

Upon authentication, the platform evaluates the user's IdP-asserted roles and grants or denies access to privileged actions accordingly. Users without the required privileged role mapping cannot access or execute privileged functions.

#### Lifecycle Management

When a user's group membership or role claim is modified or removed in the customer's IdP, their privileged access within Private Mendix Platform and Mendix applications is updated at the next authentication event. This ensures that privilege revocation is handled centrally through the IdP.

## Proof and Remarks

For more information on how Private Mendix Platform manages dynamic roles and groups, see [Dynamic Role Management in Private Mendix Platform](/private-mendix-platform/dynamic-role-management/#role-editing).

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0207-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0207-2.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0207-3.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0207-4.png" class="no-border" >}}
