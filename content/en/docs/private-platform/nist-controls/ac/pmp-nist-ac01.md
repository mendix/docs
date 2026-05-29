---
title: "AC-01 Access Control Policy And Procedures"
linktitle: "AC-01"
url: /private-mendix-platform/nist-controls/ac-01/
description: "Documents the Private Mendix Platform's compliance with the AC-01 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-01 control.

| Control ID | AC-01 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Develops, documents, and disseminates to organization-defined personnel or roles:

    * An access control policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance
    * Procedures to facilitate the implementation of the access control policy and associated access controls

* At an organization-defined frequency, reviews and updates the current:

    * Access control policy
    * Access control procedures

### Supplemental Guidance

This control addresses the establishment of policy and procedures for the effective implementation of selected security controls and control enhancements in the AC family. Policy and procedures reflect applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance. Security program policies and procedures at the organization level may make the need for system-specific policies and procedures unnecessary. The policy can be included as part of the general information security policy for organizations or conversely, can be represented by multiple policies reflecting the complex nature of certain organizations. The procedures can be established for the security program in general and for particular information systems, if needed. 

The organizational risk management strategy is a key factor in establishing policy and procedures. 

The following controls are related to this control:

* PM-9.

For more information, refer to the NIST Special Publications 800-12 and 800-100.

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control (policies abd procedures) in an appropriate manner in their organization.

## Guidance

### Customer Responsibility

Private Mendix Platform offers integrations to customer IdP over industry-standard protocols for user pre-provisioning and single sign-on to platform services (web portal) and Studio Pro (local IDE). Customer ACPs are defined at IdP-level and honored through dynamic role mapping in Private Mendix Platform.

Mendix provides integration hooks with the customer’s IDP, and allows management of the IDP in the following areas:

* Mendix Runtime
* Private Mendix Platform
* Studio Pro
* Customer-built applications

## Proof and Remarks

Private Mendix Platform offers integrations to customer IdP over industry-standard protocols - OIDC and SAML:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-01-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-01-2.png" class="no-border" >}}