---
title: "SA-04 (10) FIPS 201-Approved PIV Products"
linktitle: "SA-04 (10)"
url: /private-mendix-platform/nist-controls/sa-0410/
description: "Documents the Private Mendix Platform's compliance with the SA-04 (10) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-04 (10) control.

| Control ID | SA-04 (10) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization employs only information technology products on the FIPS 201-approved products list for Personal Identity Verification (PIV) capability implemented within organizational information systems.

### Supplemental Guidance

The following controls are related to this control:

* IA-2
* IA-8

## Responsibility

### Mendix Responsibility

Mendix is responsible for ensuring that the Private Mendix Platform supports standardized identity federation protocols (such as SAML 2.0 or OIDC). This enables the platform to consume authentication assertions from the customer's Identity Provider (IdP), which may utilize FIPS 201-approved products (for example, PIV) to fulfill multi-factor authentication requirements.

### Customer Responsibility

* It is the responsibility of the customer to ensure only FIPS 201-approved products are used for Personal Identity Verification (PIV) capabilities.
* The customer is responsible for configuring and maintaining the PIV-related products within their own infrastructure to ensure compliance.

## Guidance

### Mendix Responsibility

* Federated authentication support - Private Mendix Platform provides native support for standardized identity federation protocols (SAML 2.0 and OIDC). These protocols serve as the integration points that allow customer-managed PIV solutions (integrated through the customer's Identity Provider) to authenticate users to the Platform.
* Integrity of authentication flow - Mendix provides a configurable administrative control (toggle) to hide the button for local user sign-up. In this way, users are not able to sign up local users by themselves. When this control is engaged, Mendix ensures that the platform strictly enforces the federated authentication flow, eliminating mechanisms to bypass the FIPS 201-compliant process established at the customer's IdP level.

### Customer Responsibility

* IdP configuration and FIPS compliance - The customer is responsible for configuring and maintaining the Identity Provider (IdP) that manages the FIPS 201-compliant authentication (for example, PIV card validation).
* Protocol integration - The customer must configure the SAML 2.0 or OIDC integration between their IdP and the Private Mendix Platform to ensure identity assertions are correctly passed.
* Enforcement of MFA - To ensure the integrity of the authentication flow, the customer is responsible for engaging the administrative toggle within the PMP to hide the button for local user sign-up. This action ensures that all users are strictly forced to authenticate via the FIPS 201-compliant path without bypass.

## Proof and Remarks

### Federated Identity Provider Integration

Private Mendix Platform supports both SAML and OIDC protocols. This allows the platform to integrate with the customer's preferred FIPS 201-compliant IdP (for example, Azure AD or ADFS) for PIV-based authentication.

OIDC settings are available at **Settings > Identity & Access > IdP Integration (OIDC)**:

{{< figure src="/attachments/private-platform/nist-sa/nist-sa-0410-1.png" class="no-border" >}}

SAML settings are available at **Settings > Identity & Access > IdP Integration (SAML)**:

{{< figure src="/attachments/private-platform/nist-sa/nist-sa-0410-2.png" class="no-border" >}}

### Authentication Enforcement and Bypass Prevention

Private Mendix Platform provides an administrative control to hide the local user sign-up and registration interface. This ensures that the primary user acquisition path is directed toward the federated FIPS 201-compliant flow, reducing the risk of unauthorized local account creation.

The toggle to enable or disable local user sign-ups is available at **Settings > Capabilities**:

{{< figure src="/attachments/private-platform/nist-sa/nist-sa-0410-3.png" class="no-border" >}}

### Protocol Flexibility and Compliance

By providing native support for industry-standard protocols and a mechanism to eliminate local credential bypass, Private Mendix Platform offloads PIV credential validation to the customer's approved infrastructure while ensuring the integrity of the end-to-end authentication process.