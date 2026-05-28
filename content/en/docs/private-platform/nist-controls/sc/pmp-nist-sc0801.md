---
title: "SC-08 (01) System and Communications Protection - Transmission Confidentiality and Integrity- Cryptographic or Alternate Physical Protection"
linktitle: "SC-08 (01)"
url: /private-mendix-platform/nist-controls/sc-0801/
description: "Documents the Private Mendix Platform's compliance with the SC-08 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-08 (01) control.

| Control ID | SC-08 (01) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FedRAMP Moderate |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Mendix - Operator, Customer - Infra |

## Control

The information system implements cryptographic mechanisms to one or more of the following:

* Prevent unauthorized disclosure of information
* Detect changes to information during transmission unless otherwise protected by organization-defined alternative physical safeguards.

### Supplemental Guidance

Encrypting information for transmission protects information from unauthorized disclosure and modification. Cryptographic mechanisms implemented to protect information integrity include, for example, cryptographic hash functions which have common application in digital signatures, checksums, and message authentication codes. Alternative physical security safeguards include, for example, protected distribution systems.

The following controls are related to this control:

* SC-13

For more information, refer to the NIST Special Publications NIST Special Publications 800-52, 800-77, 800-81, and 800-113.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

Mendix leverages Istio for full encryption in transit both inside and between Kubernetes pods:

* All information in Private Mendix Platform is encrypted in transit.
* Istio service mesh provides mutual TLS (mTLS) for all pod-to-pod communication.
* TLS 1.2 or higher for external-facing HTTPS connections.
* Encryption mechanisms leverage FIPS-compliant cryptography.
* Industry-standard encryption mechanisms protect both confidentiality and integrity of information.

#### Cryptographic Mechanisms

* TLS 1.2/1.3 with strong cipher suites (for example, AES-256-GCM)
* Mutual TLS (mTLS) for service-to-service authentication and encryption
* Digital signatures for integrity verification
* Message authentication codes (MACs) for detecting tampering
* FIPS 140-2 compliant cryptographic modules when FIPS mode is enabled

### Customer Responsibility

It is the customer's responsibility to:

* Define requirements for cryptographic protection of transmitted information.
* Determine if FIPS 140-2 validated cryptography is required.
* Select appropriate cryptographic algorithms and key strengths.
* Define any alternative physical safeguards if cryptography is not used.

#### Implementer Responsibilities

* Infra Implementer: Ensure infrastructure information is protected and all system transmission points protect information.
* Infra Implementer: Configure TLS certificates and enable mTLS in service mesh.
* Infra Implementer: Enable FIPS mode if required by the Customer.
* App Implementer: Enable additional information transmission controls in the Mendix app as required.

#### Operator Responsibilities

* Infra Operator: Ensure ongoing compliance with cryptographic protection requirements.
* Infra Operator: Monitor certificate expiration and renew certificates.
* App Operator: Ensure the Mendix app continues to use encrypted transmission.

## Proof and Remarks

This output verifies that the system satisfies this control by enforcing `STRICT mTLS`, ensuring all data in transit is encrypted using validated, rotating certificates to prevent unauthorized disclosure. The inclusion of `SPIFFE ID verification (SAN)` and `CA-backed trust` further ensures information integrity by detecting and preventing unauthorized modifications during transmission.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0801-1.png" class="no-border" >}}