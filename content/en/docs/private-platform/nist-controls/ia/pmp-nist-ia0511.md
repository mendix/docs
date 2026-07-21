---
title: "IA-05 (11) Hardware Token-Based Authentication"
linktitle: "IA-05 (11)"
url: /private-mendix-platform/nist-controls/ia-0511/
description: "Documents the Private Mendix Platform's compliance with the IA-05 (11) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 (11) control.

| Control ID | IA-05 (11) |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Customer - Infra |

## Control

The information system, for hardware token-based authentication, employs mechanisms that satisfy organization-defined token quality requirements.

### Supplemental Guidance

Hardware token-based authentication typically refers to the use of PKI-based tokens, such as the U.S. Government Personal Identity Verification (PIV) card. Organizations define specific requirements for tokens, such as working with a particular PKI.

## Responsibility

### Mendix Responsibility

The Mendix Runtime and the Private Mendix Platform provide configuration settings to leverage the customer's identity provider (IdP) and hardware token infrastructure to enable hardware token-based authentication.

### Customer Responsibility

The customer is responsible for ensuring that their identity provider (IdP) and hardware token-based authentication system meet required security and token quality standards, as well as maintaining proper integration and ongoing compliance across the infrastructure and applications.

## Guidance

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform leverage the customer's identity provider (IdP) and hardware token-based system in order to provide hardware token-based authentication. 

### Customer Responsibility

It is the responsibility of the customer to ensure that their IdP and hardware token-based authentication system meets their token quality requirements.

It is the responsibility of the Infra Implementer to integrate the infrastructure and Private Mendix Platform into the customer's IdP and hardware token-based system.

It is the responsibility of the App Implementer to integrate the Mendix App into the customer's IdP and hardware token-based system.

It is the responsibility of the Infra Operator and App Operator to ensure ongoing integration and compliance.

## Proof and Remarks

For more information about identity and access, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-0511-1.png" class="no-border" >}}

IdP OICD configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-1.png" class="no-border" >}}

IdP SAML configuration in Private Mendix Platform:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-08-3.png" class="no-border" >}}

For more information about hardware token-based authentication IdP bonding, see [What is Microsoft Entra certificate-based authentication?](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-certificate-based-authentication).