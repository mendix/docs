---
title: "SC-17 System and Communications Protection - Public Key Infrastructure Certificates"
linktitle: "SC-17"
url: /private-mendix-platform/nist-controls/sc-17/
description: "Documents the Private Mendix Platform's compliance with the SC-17 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-17 control.

| Control ID | SC-17 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization issues public key certificates under an organization-defined certificate policy or obtains public key certificates from an approved service provider.

### Supplemental Guidance

For all certificates, organizations manage information system trust stores to ensure that only approved trust anchors are in the trust stores. This control addresses both certificates with visibility external to organizational information systems and certificates related to the internal operations of systems, for example, application-specific time services.

The following controls are related to this control:

* SC-12

For more information, refer to the NIST Special Publications 00-32, and 800-57.

## Responsibility

### Customer Responsibility

It is the responsibility of the customer to define public key certificate policies and procedures.

## Guidance

### Customer Responsibility

The Customer is responsible for establishing public key infrastructure certificate management for the Mendix solution, including:

* Defining certificate policies for the organization.
* Determining whether to issue certificates internally or obtain from approved service providers.
* Managing trust stores to ensure only approved trust anchors are present.
* Establishing certificate lifecycle management procedures (issuance, renewal, revocation).
* Defining certificate validation procedures.
* Establishing procedures for handling certificate expiration and rotation.

#### Certificate Types

* External certificates: Used for publicly accessible services (for example, HTTPS for web portals).
* Internal certificates: Used for internal operations (for example, service-to-service mTLS, database connections).
* Client certificates: Used for client authentication.
* Code signing certificates: Used for signing application artifacts.

#### Implementer Responsibilities

* Infra Implementer: Procure and manage public key certificates in compliance with Customer policies.
* Infra Implementer: Configure trust stores with approved trust anchors.
* App Implementer: Procure and manage certificates for Mendix applications in compliance with Customer policies.

#### Operator Responsibilities

* Infra Operator: Manage certificate lifecycle throughout the Mendix solution lifecycle.
* Infra Operator: Monitor for certificate expiration and renew certificates.
* App Operator: Ensure application certificates remain valid and compliant.

## Proof and Remarks

The customer can add certificate for the Private Mendix Platform URL when installing Private Mendix Platform with the **EnableTLS** option.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-17-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-17-2.png" class="no-border" >}}
