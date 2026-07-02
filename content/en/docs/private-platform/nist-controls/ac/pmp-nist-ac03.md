---
title: "AC-03  Access Enforcement"
linktitle: "AC-03"
url: /private-mendix-platform/nist-controls/ac-03/
description: "Documents the Private Mendix Platform's compliance with the AC-03 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-03 control.

| Control ID | AC-03 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies.

### Supplemental Guidance

Access control policies (for example, identity-based policies, role-based policies, attribute-based policies) and access enforcement mechanisms (for example, access control lists, access control matrices, cryptography) control access between active entities or subjects (that is, users or processes acting on behalf of users) and passive entities or objects (for example, devices, files, records, domains) in information systems. In addition to enforcing authorized access at the information system level and recognizing that information systems can host many applications and services in support of organizational missions and business operations, access enforcement mechanisms can also be employed at the application and service level to provide increased information security. 

The following controls are related to this control:

* AC-2
* AC-4
* AC-5
* AC-6
* AC-16
* AC-17
* AC-18
* AC-19
* AC-20
* AC-21
* AC-22
* AU-9
* CM-5
* CM-6
* CM-11
* MA-3
* MA-4
* MA-5
* PE-3.

## Responsibility

### Customer Responsibility

Private Mendix Platform and the Mendix Runtime enforce approved authorizations for logical access to information and system resources. 

The customer is responsible for defining the access control policies that the Platform enforces. 

App implementers and operators (developers) are responsible for correctly configuring those policies within each Mendix application during the build process and maintaining ongoing compliance within the application. 

Infrastructure implementers and operators are responsible for ensuring the application is deployed with the intended security model intact, and that Platform-level role mappings to the customer's IdP are properly configured.

## Guidance

### Customer Responsibility

The Mendix runtime enforces access control at multiple layers within each application:

* Page access – User roles determine which pages and navigation items a user can access.
* Microflow and nanoflow access – Execution of business logic is restricted based on the user's assigned role; unauthorized users cannot invoke restricted microflows.
* Entity access (data-level) – Access rules defined on each entity enforce row-level and attribute-level security, controlling which records a user can create, read, update, or delete based on their role and optionally attribute-based conditions (for example, XPath constraints).
* API access – Published REST, OData, or Web Service endpoints enforce authentication and role-based authorization before granting access to data or operations.

#### App Implementer and  Operator Responsibilities

The App Implementer and Operator are responsible for translating the Customer's access control policies into the Mendix application model during development. This includes:

* Configuring IdP integration (SAML 2.0 or OIDC) so that user authentication is handled by the Customer's Identity Provider.
* Mapping IdP groups or claims to the application's User Roles, ensuring that role assignments in the runtime environment match the Customer's intended access control policies.
* Defining User Roles and Module Roles that align with the Customer's organizational role structure and security requirements.
* Configuring page access, microflow and nanoflow access, and entity access rules for each role, ensuring that the principle of least privilege is applied.
* Implementing XPath constraints where attribute-based or row-level data separation is required.
* Securing all published APIs (REST, OData, Web Services) with appropriate authentication and role-based authorization.
* Validating that the security model is complete and correct before promoting the application to production (for example, Mendix security warnings are resolved, no unprotected pages or microflows exist).

#### Infrastructure Implementer and Operator Responsibilities

The infrastructure implementer and operator is responsible for ensuring that the deployed application enforces the intended access control policies in the runtime environment. This includes:

* Configuring IdP integration (SAML 2.0 or OIDC) with PMP so that user authentication is handled by the Customer's Identity Provider.
* Mapping IdP groups or claims to Private Mendix Platform's User Roles, ensuring that role assignments in the runtime environment match the customer's intended access control policies.
* Verifying that the application's production security level is set correctly and that no development-mode access bypasses are present.
* Managing user provisioning in coordination with the customer's IdP to ensure that access is granted and revoked in a timely manner.

## Proof and Remarks

For more information about identity and access integration for Private Mendix Platfrom, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).

For more information about user roles and access roles, see [App Security](/refguide/app-security/).

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-03-1.png" class="no-border" >}}

For row-level or attribute-based security, see below:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-03-2.png" class="no-border" >}}

For Mendix Published API authentication and authorization, see below:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-03-3.png" class="no-border" >}}
