---
title: "PE-03 (01) Information System Access"
linktitle: "PE-03 (01)"
url: /private-mendix-platform/nist-controls/pe-0301/
description: "Documents the Private Mendix Platform's compliance with the PE-03 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the PE-03 (01) control.

| Control ID | PE-03 (01) |
| --- | --- |
| Control category | PE - Physical And Environmental Protection |
| Requirement baseline | IL4 |
| Responsibility and ownership | Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization enforces physical access authorizations to the information system in addition to the physical access controls for the facility at organization-defined physical spaces containing one or more components of the information system.

### Supplemental Guidance

This control enhancement provides additional physical security for those areas within facilities where there is a concentration of information system components (for example, server rooms, media storage areas, data and communications centers). 

The following controls are related to this control:

* PS-2

## Responsibility

### Shared Responsibility

The responsibility for defining, implementing, and enforcing physical access controls, and ensuring Mendix applications respect them, lies with the Customer and their App and Infra Implementers. This is because Mendix is a software platform and does not own or manage the customer's physical infrastructure (buildings, data centers, hardware) where these controls are applied. Physical access controls are unique to each customer's environment, security policies, and regulatory obligations. 

While Mendix Studio Pro allows the creation of applications that can integrate with and respect these controls, and Private Mendix Platform supports integration with the customer's Identity Provider (IdP), which may, in turn, leverage physical authentication methods like PKI cards, the customer is solely responsible for establishing and maintaining their physical security perimeter and the IdP configuration that enforces it.

## Guidance

### Shared Responsibility

Studio Pro allows Mendix apps to be built that require and respect physical access control mechanisms such as PKI cards.

It is the responsibility of the customer to indicate what physical controls are acceptable.

It is the responsibility of the Infra Implementer to ensure access to infrastructure requires physical access authorization, and the App Implementer to ensure that the Mendix app requires physical access authorization as dictated by the customer.

## Proof and Remarks

Private Mendix Platform provides the integration points (OIDC, SAML) to connect to an Identity Provider. The IdP (for example, Microsoft Azure AD) must be configured to enforce and manage the actual physical access control mechanisms (like PKI cards) during the user authentication process. Mendix then consumes the authenticated user's identity from the IdP:

{{< figure src="/attachments/private-platform/nist-pe/nist-pe-0301-1.png" class="no-border" >}}

Specific Mendix applications can be configured to connect to the customer's IdP by the App Implementer or Operator by using [OIDC SSO](/appstore/modules/oidc/) or [SAML](/appstore/modules/saml/), both of which allow for physical authentication mechanisms through the customer's IdP.

Additionally, it is possible to configure biometric authentication directly on native mobile applications (Apple and Android) using the [Native Mobile Resources](/appstore/modules/native-mobile-resources/#native-authentication-category) module. The module is platform-supported, that is, supported by Mendix.