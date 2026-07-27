---
title: "IA-08 (01) Acceptance Of PIV Credentials from Other Agencies"
linktitle: "IA-08 (01)"
url: /private-mendix-platform/nist-controls/ia-0801/
description: "Documents the Private Mendix Platform's compliance with the IA-08 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-08 (01) control.

| Control ID | IA-08 (01) |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Customer - Infra |

## Control

The information system accepts and electronically verifies Personal Identity Verification (PIV) credentials from other federal agencies.

### Supplemental Guidance

This control enhancement applies to logical access control systems (LACS) and physical access control systems (PACS). Personal Identity Verification (PIV) credentials are those credentials issued by federal agencies that conform to FIPS Publication 201 and supporting guidance documents. OMB Memorandum 11-11 requires federal agencies to continue implementing the requirements specified in HSPD-12 to enable agency-wide use of PIV credentials. Related controls: AU-2, PE-3, SA-4.

The following controls are related to this control:

* AU-02
* PE-03
* SA-04

## Responsibility

### Mendix Responsibility

The Private Mendix Platform ensures proper integration with the customer's Identity Provider (IdP) is implemented and maintained to enable user authentication.

### Customer Responsibility

The customer is responsible for ensuring that the IdP supports PIV credentials from other federal agencies and for defining how it should be integrated with the infrastructure and varioius Mendix apps.

## Guidance

### Mendix Responsibility

The Private Mendix Platform provides and maintains proper integration with the customer's Identity Provider (IdP) to support authentication of users.

### Customer Responsibility

It is the responsibility of the Infra Implementer to ensure the IdP supports PIV credentials from other federal agencies as directed by the customer.

It is the responsibility of the App Implementer to ensure the Mendix App is properly integrated with the customer's IdP.

It is the responsibility of the Infra Operator and App Operator to ensure ongoing compliance and proper integration with the customer's IdP.

## Proof and Remarks

For more information about identity and access, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-0511-1.png" class="no-border" >}}

IdP OICD configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-1.png" class="no-border" >}}

IdP SAML configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-3.png" class="no-border" >}}
