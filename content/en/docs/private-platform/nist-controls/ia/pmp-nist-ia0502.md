---
title: "IA-05 (02) Authenticator Management (PKI-Based Authentication)"
linktitle: "IA-05 (02)"
url: /private-mendix-platform/nist-controls/ia-0502/
description: "Documents the Private Mendix Platform's compliance with the IA-05 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 (02) control.

| Control ID | IA-05 (02) |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control {#control}

The information system, for PKI-based authentication:

* Validates certifications by constructing and verifying a certification path to an accepted trust anchor including checking certificate status information.
* Enforces authorized access to the corresponding private key.
* Maps the authenticated identity to the account of the individual or group.
* Implements a local cache of revocation data to support path discovery and validation in case of inability to access revocation information via the network.

### Supplemental Guidance

Status information for certification paths includes, for example, certificate revocation lists or certificate status protocol responses. For PIV cards, validation of certifications involves the construction and verification of a certification path to the Common Policy Root trust anchor including certificate policy processing.

The following controls are related to this control:

* IA-6

## Responsibility

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform support integration with customer identity providers (IdP) that leverage PKI-based authentication. This inncludes OIDC and SAML.

### Customer Responsibility

The customer is responsible for defining trust anchors, certificate policies, and identity-to-account mappings in accordance with organizational security requirements. The customer also determines the appropriate identity provider (IdP) and PKI infrastructure to be used, ensuring alignment with applicable policies and compliance obligations.

## Guidance

### Customer Responsibility

#### Infra Implementer

Ensures that the infrastructure and Private Mendix Platform are integrated with the customer's identity provider (IdP) in a manner that supports PKI-based authentication. This includes validating certificates through proper certification path construction and verification against an accepted trust anchor, enforcing access to corresponding private keys, and implementing local caching of revocation data to maintain validation capability during network interruptions.

#### App Implementer

Ensures that the Mendix App is integrated with the customer's IdP to correctly enforce PKI-based authentication, including the accurate mapping of authenticated identities to individual or group accounts as required by the customer.

#### Infra Operator and App Operator

Jointly maintain ongoing compliance with the customer's IdP and PKI infrastructure throughout the system lifecycle. This includes monitoring certificate status mechanisms, ensuring revocation data remains current, and addressing changes to trust anchors or certificate policies as they occur.

## Proof and Remarks

For more information, refer to the following documents:

* [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access)
* [OIDC SSO](/appstore/modules/oidc/)
* [SAML](/appstore/modules/saml/)
