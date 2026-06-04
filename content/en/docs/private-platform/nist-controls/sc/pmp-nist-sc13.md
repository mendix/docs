---
title: "SC-13 System and Communications Protection - Cryptographic Protection"
linktitle: "SC-13"
url: /private-mendix-platform/nist-controls/sc-13/
description: "Documents the Private Mendix Platform's compliance with the SC-13 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-13 control.

| Control ID | SC-13 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system implements organization-defined cryptographic uses and type of cryptography required for each use in accordance with applicable federal laws, Executive Orders, directives, policies, regulations, and standards.

### Supplemental Guidance

Cryptography can be employed to support a variety of security solutions including, for example, the protection of classified and Controlled Unclassified Information, the provision of digital signatures, and the enforcement of information separation when authorized individuals have the necessary clearances for such information but lack formal access approvals. Cryptography can also be used to support random number generation and hash generation. Generally applicable cryptographic standards include FIPS-validated cryptography and NSA-approved cryptography. 

This control does not impose any requirements on organizations to use cryptography. However, if cryptography is required based on the selection of other security controls, organizations define each type of cryptographic use and the type of cryptography required (for example, protection of classified information: NSA-approved cryptography; provision of digital signatures: FIPS-validated cryptography).

The following controls are related to this control:

* AC-2
* AC-3
* AC-7
* AC-17
* AC-18
* AU-9
* AU-10
* CM-11
* CP-9
* IA-3
* IA-7
* MA-4
* MP-2
* MP-4
* MP-5
* SA-4
* SC-8
* SC-12
* SC-28
* SI-7

For more information, refer to the NIST Special Publications 800-52, 800-56, 800-57, and 800-77.

## Responsibility

### Customer Responsibility

It is the responsibility of the customer to determine what types of cryptography is required and in what cases.

## Guidance

### Customer Responsibility

The customer is responsible for defining cryptographic requirements for the Mendix solution, including:

* Determining what types of cryptography are required (for example, FIPS-validated, NSA-approved).
* Defining cryptographic uses (for example, data at rest encryption, data in transit encryption, digital signatures).
* Specifying required algorithms and key lengths for each use case.
* Establishing policies for when and where cryptography must be used.
* Determining if FIPS 140-2 validated cryptography is required.

Mendix fully supports operation in FIPS 140‑2 compliant environments. All major components of the Mendix platform are capable of running with FIPS mode enabled, ensuring that cryptographic operations consistently use FIPS‑validated cryptographic modules.

#### Supported Components

* Mendix Runtime – Executes applications with FIPS‑compliant cryptography for data at rest, data in transit, and digital signatures.
* Mendix Operator – Manages deployments in Kubernetes environments with FIPS‑validated cryptographic operations.
* Private Mendix Platform – Provides enterprise‑grade hosting and management with FIPS mode enabled across infrastructure services. Mendix supports FIPS‑validated cryptography throughout PMP, including for all apps built and deployed on PMP.
* Mendix Studio Pro – Ensures development tools and build processes adhere to FIPS‑compliant cryptographic standards.

#### Mendix Capabilities

* End‑to‑end support for FIPS 140‑2 validated cryptography across runtime, operator, platform, and development environments.
* Enforcement of approved algorithms and key lengths across all cryptographic operations.
* Seamless integration with customer‑defined cryptographic policies.
* Ongoing compliance with FIPS requirements during application execution and lifecycle management.
* Consistent application of FIPS‑validated cryptography in PMP services and in customer applications built on PMP.

#### Roles and Responsibilities

While Mendix ensures platform‑wide FIPS readiness, implementers and operators are responsible for enabling and maintaining compliance within their environments:

* Infra Implementer: Enable FIPS mode in the infrastructure as required.
* Infra Operator: Monitor and maintain compliance with cryptographic requirements.

## Proof and Remarks

The output confirms the system is operating in FIPS mode (`fips_enabled: 1`), ensuring that all cryptographic operations used for data protection and digital signatures utilize FIPS-validated modules. This demonstrates compliance with federal standards by restricting the information system to organization-defined, approved cryptographic types for all security-sensitive functions.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-13-1.png" class="no-border" >}}
