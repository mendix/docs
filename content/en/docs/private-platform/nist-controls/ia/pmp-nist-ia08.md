---
title: "IA-08 Identification And Authentication (Non-Organizational Users)"
linktitle: "IA-08"
url: /private-mendix-platform/nist-controls/ia-08/
description: "Documents the Private Mendix Platform's compliance with the IA-08 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-08 control.

| Control ID | IA-08 |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Customer - Infra |

## Control

The information system uniquely identifies and authenticates non-organizational users (or processes acting on behalf of non-organizational users).

### Supplemental Guidance

Non-organizational users include information system users other than organizational users explicitly covered by IA-02. These individuals are uniquely identified and authenticated for accesses other than those accesses explicitly identified and documented in AC-14. 

In accordance with the E-Authentication E-Government initiative, authentication of non-organizational users accessing federal information systems may be required to protect federal, proprietary, or privacy-related information (with exceptions noted for national security systems). Organizations use risk assessments to determine authentication needs and consider scalability, practicality, and security in balancing the need to ensure ease of use for access to federal information and information systems with the need to protect and adequately mitigate risk. IA-02 addresses identification and authentication requirements for access to information systems by organizational users.

The following controls are related to this control:

* [AC-02](/private-mendix-platform/nist-controls/ac-02/)
* [AC-14](/private-mendix-platform/nist-controls/ac-14/)
* [AC-17](/private-mendix-platform/nist-controls/ac-17/)
* [AC-18](/private-mendix-platform/nist-controls/ac-18/)
* IA-02
* [IA-04](/private-mendix-platform/nist-controls/ia-04/)
* [IA-05](/private-mendix-platform/nist-controls/ia-05/)
* MA-04
* [RA-03](/private-mendix-platform/nist-controls/ra-03/)
* SA-12
* [SC-08](/private-mendix-platform/nist-controls/sc-08/)

For more information, refer to the following:

* OMB Memoranda 04-04, 11-11, 10-06-2011
* FICAM Roadmap and Implementation Guidance
* FIPS Publication 201; NIST Special Publications 800-63, 800-116
* National Strategy for Trusted Identities in Cyberspace
* Web: [IDManagement](http://idmanagement.gov)

## Responsibility

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform allow authorized non-organizational users to authenticate and log in through the customer's identity provider (IdP).

### Customer Responsibility

The customer is responsible for selecting an IdP that securely authenticates and identifies non-organizational users and for defining the permissions those users are allowed.

## Guidance

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform allow for authorized non-organizational users to log in through the Customers identity provider (IdP).

### Customer Responsibility

It is the customer's responsibility to choose an IdP that allows for secure login and identification of non-organizational users.

It is the responsibility of the Infra Implementer to integrate the customer's IdP with the infrastructure and Private Mendix Platform as well as ensure that non-organizational users only have the allowed permissions within the infrastructure and Private Mendix Platform.

It is the responsibility of the App Implementer to integrate the customer's IdP into the Mendix app, as well as ensuring non-organizational users have the appropriate permissions (if any) within the Mendix app.

It is the responsibility of the Infra Operator and the App Operator to ensure that the customer's IdP remains properly integrated and identifying non-organizational users, as well as ensuring that non-organizational users only have the permissions they are allowed as dictated by the customer.

## Proof and Remarks

For more information about identity and access, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-0511-1.png" class="no-border" >}}

IdP OICD configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-1.png" class="no-border" >}}

OICD client configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-2.png" class="no-border" >}}

IdP SAML configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-3.png" class="no-border" >}}

SAML client configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-4.png" class="no-border" >}}
