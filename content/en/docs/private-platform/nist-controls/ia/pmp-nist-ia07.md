---
title: "IA-07 Authenticator Feedback"
linktitle: "IA-07"
url: /private-mendix-platform/nist-controls/ia-07/
description: "Documents the Private Mendix Platform's compliance with the IA-07 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-07 control.

| Control ID | IA-07 |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Customer - Infra |

## Control

The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance for such authentication.

### Supplemental Guidance

Authentication mechanisms may be required within a cryptographic module to authenticate an operator accessing the module and to verify that the operator is authorized to assume the requested role and perform services within that role.

The following controls are related to this control:

* SC-12
* SC-13

For more information, refer to the FIPS Publication 140, and [Cryptographic Module Validation Program](http://csrc.nist.gov/groups/STM/cmvp/index.html).

## Responsibility

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform need to allow integrate with the customer’s identity Provider (IdP) to help meet cryptographic module compliance requirements, such as FIPS 140.

### Customer Responsibility

The customer is responsible for ensuring that their Identity Provider (IdP) complies with applicable cryptographic module regulations and for directing its integration. They ensure that the IdP is properly integrated into the infrastructure, platform, and applications, and that this integration is maintained to support ongoing compliance.

## Guidance

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform can integrate with a customer's identity provider (IdP) in order to ensure compliance with cryptographic module regulations, such as FIPS 140.

### Customer Responsibility

It is the responsibility of the customer to ensure their IdP meets cryptographic module regulations.

It is the responsibility of the Infra Implementer to integrate the infrastructure and Private Mendix Platform with the customer's IdP.

It is the responsibility of the App Implementer to ensure the Mendix App integrates with the customer's IdP.

It is the responsibility of the Infra Operator and the App Operator to ensure ongoing integration with the customer's IdP, and therefore ongoing compliance.

## Proof and Remarks

For more information about identity and access, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).

IdP OICD configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-0511-1.png" class="no-border" >}}

OICD client configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-07-1.png" class="no-border" >}}

IdP SAML configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-0511-1.png" class="no-border" >}}

SAML client configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-07-2.png" class="no-border" >}}
