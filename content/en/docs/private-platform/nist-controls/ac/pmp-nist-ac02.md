---
title: "AC-02 Account Management"
linktitle: "AC-02"
url: /private-mendix-platform/nist-controls/ac-02/
description: "Documents the Private Mendix Platform's compliance with the AC-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 control.

| Control ID | AC-02 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Identifies and selects the organization-defined information system accounts to support organizational missions or business functions.
* Assigns account managers for information system accounts.
* Establishes conditions for group and role membership.
* Specifies authorized users of the information system, group and role membership, and access authorizations (that is, privileges) and other attributes (as required) for each account.
* Requires approvals by an organization-defined personnel or roles for requests to create information system accounts.
* Creates, enables, modifies, disables, and removes information system accounts in accordance with organization-defined procedures or conditions.
* Monitors the use of information system accounts
* Notifies account managers:

    * When accounts are no longer required.
    * When users are terminated or transferred.
    * About individual information system usage or need-to-know changes.

* Authorizes access to the information system based on:

    * A valid access authorization
    * Intended system usage
    * Other attributes as required by the organization or associated missions/business functions

* Reviews accounts for compliance with account management requirements at an organization-defined frequency.
* Establishes a process for reissuing shared and group account credentials (if deployed) when individuals are removed from the group.

 ### Supplemental Guidance

 Information system account types include the following:
 
 * Individual
 * Shared
 * Group
 * System
 * Guest or anonymous
 * Emergency
 * Developer, manufacturer, or vendor
 * Temporary
 * Service. 
 
 Some of the account management requirements listed above can be implemented by organizational information systems. The identification of authorized users of the information system and the specification of access privileges reflects the requirements in other security controls in the security plan. 
 
 Users requiring administrative privileges on information system accounts receive additional scrutiny by appropriate organizational personnel (for example, system owner, mission/business owner, or chief information security officer) responsible for approving such accounts and privileged access. 
 
 Organizations may choose to define access privileges or other attributes by account, by type of account, or a combination of both. Other attributes required for authorizing access include, for example, restrictions on time-of-day, day-of-week, and point-of-origin. In defining other account attributes, organizations consider system-related requirements (for example, scheduled maintenance, system upgrades) and mission/business requirements, (for example, time zone differences, customer requirements, remote access to support travel requirements). Failure to consider these factors could affect information system availability. 
 
 Temporary and emergency accounts are accounts intended for short-term use. Organizations establish temporary accounts as a part of normal account activation procedures when there is a need for short-term accounts without the demand for immediacy in account activation. Organizations establish emergency accounts in response to crisis situations and with the need for rapid account activation. Therefore, emergency account activation may bypass normal account authorization processes. Emergency and temporary accounts are not to be confused with infrequently used accounts (for example, local logon accounts used for special tasks defined by organizations or when network resources are unavailable). Such accounts remain available and are not subject to automatic disabling or removal dates. 
 
 Conditions for disabling or deactivating accounts include, for example: 
 
 * When shared, group, emergency, or temporary accounts are no longer required
 * When individuals are transferred or terminated. 
 
 Some types of information system accounts may require specialized training. 
 
 The following controls are related to this control:

* AC-3
* AC-4
* AC-5
* AC-6
* AC-10
* AC-17
* AC-19
* AC-20
* AU-9
* IA-2
* IA-4
* IA-5
* IA-8
* CM-5
* CM-6
* CM-11
* MA-3
* MA-4
* MA-5
* PL-4
* SC-13.

## Responsibility

### Customer Responsibility

When Single Sign-On (SSO) is used, account lifecycle management—including account creation, modification, deactivation, and access authorization—should be handled by the customer's Identity Provider (IdP) administrators. The customer is responsible for maintaining user accounts, group and role memberships, and access privileges within their IdP system. Our application relies on the information provided by the IdP and does not independently manage user account lifecycles.

## Guidance

### Customer Responsibility

Private Mendix Platform offers integrations to customer IdP over industry-standard protocols for user pre-provisioning and single sign-on to platform services (web portal) and Studio Pro (local IDE). Customer ACPs are defined at IdP-level and honored through dynamic role mapping in Private Mendix Platform.

Mendix provides integration hooks with the customer’s IDP, and allows management of the IDP in the following areas:

* Mendix Runtime
* Private Mendix Platform
* Studio Pro
* Customer-built applications

## Proof and Remarks

Private Mendix Platform offers integrations to customer IdP over industry-standard protocols - OIDC and SAML.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-01-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-01-2.png" class="no-border" >}}