---
title: "SC-12 System and Communications Protection - Cryptographic Key Establishment and Management"
linktitle: "SC-12"
url: /private-mendix-platform/nist-controls/sc-12/
description: "Documents the Private Mendix Platform's compliance with the SC-12 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-12 control.

| Control ID | SC-12 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization establishes and manages cryptographic keys for required cryptography employed within the information system in accordance with organization-defined requirements for key generation, distribution, storage, access, and destruction.

### Supplemental Guidance

Cryptographic key management and establishment can be performed using manual procedures or automated mechanisms with supporting manual procedures. Organizations define key management requirements in accordance with applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance, specifying appropriate options, levels, and parameters. Organizations manage trust stores to ensure that only approved trust anchors are in such trust stores. This includes certificates with visibility external to organizational information systems and certificates related to the internal operations of systems.

The following controls are related to this control:

* SC-13
* SC-17

For more information, refer to the NIST Special Publications 800-56, and 800-57.

## Responsibility

### Customer Responsibility

It is the customer's responsibility to determine appropriate cryptographic key management policies and procedures for the Mendix solution.

## Guidance

### Customer Responsibility

The customer is responsible for establishing cryptographic key management for the Mendix solution, including:

* Defining requirements for key generation (for example, key lengths, algorithms, randomness sources).
* Establishing procedures for key distribution and storage.
* Defining access controls for cryptographic keys.
* Establishing key rotation policies and schedules.
* Defining procedures for key destruction.
* Selecting and deploying key management solutions (e.g., AWS KMS, Azure Key Vault, HashiCorp Vault).
* Managing trust stores and certificate authorities.

#### Mendix Capabilities for Key Management Compliance

* FIPS‑validated cryptography: All Mendix components (Runtime, Operator, Studio Pro, and Private Mendix Platform) operate with FIPS‑validated cryptographic modules when FIPS mode is enabled. This ensures that all cryptographic operations, including key usage, meet compliance requirements.
* Integration with enterprise key management systems: Mendix supports integration with external key management solutions such as AWS KMS, Azure Key Vault, and HashiCorp Vault, allowing organizations to enforce their own policies for key generation, distribution, storage, rotation, and destruction.
* Application and platform alignment: Both the Private Mendix Platform (PMP) and applications built on PMP can leverage FIPS‑validated cryptography and external key management systems, ensuring consistent compliance across infrastructure and apps.
* Lifecycle support: Mendix components can operate in environments where secure key generation, distribution, storage, access, rotation, and destruction are enforced by the customer’s chosen key management solution.

#### Key Management Lifecycle

* Key Generation: Use cryptographically secure random number generators.
* Key Distribution: Use secure channels for distributing keys.
* Key Storage: Store keys in hardware security modules (HSMs) or secure key vaults.
* Key Access: Implement strict access controls for key retrieval.
* Key Rotation: Regularly rotate keys in accordance with customer policies.
* Key Destruction: Securely destroy keys when no longer needed.

#### Implementer Responsibilities

* Infra Implementer: Ensure all cryptographic keys used in the infrastructure and PMP are implemented and managed as directed by the customer.
* Infra Implementer: Configure integration with key management systems.
* App Implementer: Ensure all cryptographic keys associated with the Mendix App are implemented and manageable as directed by the Customer.

#### Operator Responsibilities

* Infra Operator: Ensure cryptographic keys are managed in compliance with Customer policies and procedures.
* Infra Operator: Perform key rotation according to schedule.
* App Operator: Ensure application keys are managed in accordance with customer policies.

## Proof and Remarks

Mendix supports integration with external KMS like AWS Secret Manager, HashiCorp Vault, and Azure Key Vault. For more information, see the following documents:

* [Configuring External Secret Management with AWS Secret Manager](/private-mendix-platform/configure-aws-secret-manager/)
* [Configuring External Secret Management with Azure Key Vault](/private-mendix-platform/configure-azure-key-vault/)
* [Configuring External Secret Management with HashiCorp Vault](/private-mendix-platform/configure-hashicorp-vault/)
