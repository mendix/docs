---
title: "AC-21 Information Sharing"
linktitle: "AC-21"
url: /private-mendix-platform/nist-controls/ac-21/
description: "Documents the Private Mendix Platform's compliance with the AC-21 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-21 control.

| Control ID | AC-21 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Facilitates information sharing by enabling authorized users to determine whether access authorizations assigned to the sharing partner match the access restrictions on the information for organization-defined information sharing circumstances where user discretion is required.
* Employs organization-defined automated mechanisms or manual processes to assist users in making information sharing/collaboration decisions.

### Supplemental Guidance

This control applies to information that may be restricted in some manner (for example, privileged medical information, contract-sensitive information, proprietary information, personally identifiable information, classified information related to special access programs or compartments) based on some formal or administrative determination. Depending on the particular information-sharing circumstances, sharing partners may be defined at the individual, group, or organizational level. Information may be defined by content, type, security category, or special access program or compartment.

The following controls are related to this control:

* AC-3

## Responsibility

### Customer Responsibility

The Customer is responsible for dictating when information sharing controls and user-helps are required.  

Private Mendix Platform and the Mendix Runtime support fine-grained access and data visibility controls based on organization, users, groups, and roles. 

App implementers and operators are responsible for implementing and correctly configuring the Mendix application to build in the required controls and user help, and whomever operates and administrates the application to review information sharing controls and user help for ongoing compliance.  

Infrastructure implementers and operators are responsible for implementing the infrastructure necessary to ensure infrastructure-level data access and sharing respects the required controls and user help, and whomever operates and administrates the infrastructure to review information sharing controls and user help for ongoing infrastructure-level compliance. 

## Guidance

Customers must define policies and procedures for information sharing, including allowable organization, users, groups and roles, required authorization, limitation and and conditions for sharing data and program access.

The sharing partners connected to organizational sharing information systems should be explicitly enabled at the authorized and restricted individual user, group, or organizational level. Sharing information should be defined and classified by content, type, security category, special access module and component.

Customers should require app implementers and operators to make the data categorization and sharing status easily visible to appropriate users in the Mendix solutions they build. Additionally, app implementers and operators should utilize Mendix platform and runtime capabilities to facilitate fine-grained access sharing data, module and program based on authorized organization, users, groups and roles.

## Proof and Remarks

For more information, see the following documents:

* Private Mendix Platform user identity and access integration (SAML/OIDC): [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access)
* Mendix application security – user roles and module roles: [App Security](/refguide/app-security/)
* Mendix entity data access rules (row-level and attribute-based security): [Mendix Entity Data Access](/refguide/security-overview/#entity-access)

Private Mendix Platform enables sharing Marketplace contents based on Company, Organization, and Group:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-21-1.png" class="no-border" >}}

Private Mendix Platform supports sharing Mendix apps to groups and accessing apps through group membership:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-21-2.png" class="no-border" >}}