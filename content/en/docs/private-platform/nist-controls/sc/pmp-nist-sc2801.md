---
title: "SC-28 (01) System and Communications Protection - Protection of Information at Rest - Cryptographic Protection"
linktitle: "SC-28 (01)"
url: /private-mendix-platform/nist-controls/sc-2801/
description: "Documents the Private Mendix Platform's compliance with the SC-28 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-28 (01) control.

| Control ID | SC-28 (01) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of organization-defined information on organization-defined information system components.

### Supplemental Guidance

Selection of cryptographic mechanisms is based on the need to protect the confidentiality and integrity of organizational information. The strength of mechanism is commensurate with the security category and/or classification of the information. This control enhancement applies to significant concentrations of digital media in organizational areas designated for media storage and also to limited quantities of media generally associated with information system components in operational environments (for example, portable storage devices, mobile devices). Organizations have the flexibility to either encrypt all information on storage devices (that is, full disk encryption) or encrypt specific data structures (for example, files, records, or fields). Organizations employing cryptographic mechanisms to protect information at rest also consider cryptographic key management solutions.

The following controls are related to this control:

* AC-19
* SC-12

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform implement cryptographic mechanisms to protect information at rest and in transit. The platform supports industry-standard encryption algorithms and can leverage FIPS 140-2 validated cryptographic modules when deployed in FIPS-compliant environments.

Cryptographic protection mechanisms include:

* AES-256 encryption for data at rest (databases, persistent volumes, file storage)
* Full disk encryption support via infrastructure-level encryption (for example, AWS EBS encryption, Azure Disk Encryption)
* Database-level encryption support (for example, Transparent Data Encryption for SQL databases)
* Encrypted file storage for documents and binary data
* FIPS 140-2 compliant cryptographic modules when deployed in FIPS mode
* Integration with key management systems for cryptographic key lifecycle management

The platform provides flexibility to implement full disk encryption or encrypt specific data structures based on organizational requirements.

### Customer Responsibility

It is the customer's responsibility to:

* Define what information requires cryptographic protection based on security category and classification.
* Determine the required strength of cryptographic mechanisms (for example, AES-128, AES-256).
* Decide whether full disk encryption or selective data structure encryption is required.
* Establish cryptographic key management policies and procedures.
* Determine if FIPS 140-2 validated cryptography is required.

#### Infrastructure Implementer Responsibilities

* Enable cryptographic encryption at the infrastructure layer (for example, enable EBS encryption with KMS keys).
* Configure database encryption with appropriate cryptographic algorithms.
* Implement key management solutions (for example, AWS KMS, Azure Key Vault, HashiCorp Vault).
* Ensure encryption keys are managed in accordance with customer policies.
* Enable FIPS mode if required by the customer.

#### App Implementer Responsibilities

* Configure the Mendix application to leverage cryptographic encryption settings.
* Implement field-level encryption for sensitive data if required
* Ensure file storage uses encrypted volumes.
* Verify that cryptographic mechanisms are properly configured and functional.

#### Infrastructure Operator and App Operator Responsibilities

* Monitor and verify that cryptographic encryption remains enabled throughout the system lifecycle.
* Manage cryptographic key rotation in accordance with customer policies.
* Audit encryption configurations periodically to confirm compliance
* Respond to any encryption failures or key management issues.
* Ensure that any new storage resources are created with appropriate cryptographic protection.

## Proof and Remarks

### Mendix SOC 3 Compliance Report 

A report detailing Cryptographic Control and Key Management is available in [Conveyor (page 43)](https://app.conveyor.com/profile/mendix/d/mendix-isae-3000-soc-3/H68STe).

### Runtime S3 Encryption: AES Application-Layer Encryption for File Documents

The Mendix Runtime provides a native, application-layer cryptographic mechanism for encrypting `System.FileDocument` data at rest in S3 storage, independent of any bucket-level server-side encryption:

* `com.mendix.storage.s3.EncryptionKeys` - List of keys which can be used to encrypt and decrypt data at rest in S3. The right key to decrypt the data with is automatically selected.
* Supports key rotation with multiple base64-encoded keys.
* Mendix 11.6.0 and newer enforces AES as the only supported algorithm.

This is a Mendix Runtime-enforced AES encryption. Data is encrypted by the runtime before being written to S3, so it is encrypted at rest regardless of infrastructure configuration. Key rotation is supported by specifying multiple keys; the correct decryption key is selected automatically.

For more information, see [S3 Storage Service Settings](https://docs.mendix.com/refguide/custom-settings/#s3-storage-service-settings).

### FIPS 140-2 Mode: Validated Cryptographic Modules Across All Private Mendix Platform Components

The related [SC-13](/private-mendix-platform/nist-controls/sc-13/) control documents that all Mendix components support operation with FIPS 140-2 validated cryptographic modules when deployed in FIPS mode. This is directly applicable to SC-28 (01), as it defines the cryptographic standard used for at-rest encryption.

Mendix fully supports operation in FIPS 140-2 compliant environments. All major components of the Mendix platform are capable of running with FIPS mode enabled, ensuring that cryptographic operations consistently use FIPS-validated cryptographic modules.

FIPS mode covers the following:

* Mendix Runtime - FIPS-compliant cryptography for data at rest, in transit, and digital signatures
* Mendix Operator - FIPS-validated cryptographic operations for all Kubernetes deployments
* Private Mendix Platform - FIPS mode enabled across all infrastructure services, including apps built and deployed on Private Mendix Platform
* Mendix Studio Pro - FIPS-compliant build and development toolchain

The output confirms the system is operating in FIPS mode (`fips_enabled: 1`), ensuring that all cryptographic operations used for data protection and digital signatures utilize FIPS-validated modules. This demonstrates compliance with federal standards by restricting the information system to organization-defined, approved cryptographic types for all security-sensitive functions.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2801-1.png" class="no-border" >}}

### External Key Management Integration: AWS KMS, Azure Key Vault, HashiCorp Vault

The related [SC-12](/private-mendix-platform/nist-controls/sc-12/) control documents that Private Mendix Platform integrates with enterprise key management systems for the full cryptographic key lifecycle - the required complement to SC-28 (01)'s cryptographic mechanisms.

Mendix supports integration with external key management solutions such as AWS KMS, Azure Key Vault, and HashiCorp Vault, allowing organizations to enforce their own policies for key generation, distribution, storage, rotation, and destruction.

Three public documentation pages confirm the Private Mendix Platform-specific implementations.

* For information about IRSA (IAM Roles for Service Accounts) without static credentials at rest, see [Configuring External Secret Management with AWS Secret Manager](/private-mendix-platform/configure-aws-secret-manager/).
* For information about Kubernetes password-less pod authentication through OIDC, see [Configuring External Secret Management with HashiCorp Vault](/private-mendix-platform/configure-hashicorp-vault/).
* For information about Azure AD Workload Identity and User-Assigned Managed Identity, see [Configuring External Secret Management with Azure Key Vault](/private-mendix-platform/configure-azure-key-vault/).

All three integrations eliminate static credentials at rest. AWS uses IAM and KMS for AES encryption of stored secrets. Vault uses its native transit encryption engine (AES-256-GCM). Azure Key Vault
uses FIPS 140-2 validated HSM-backed keys.

### Operator Secret Store: Database and External Credential Backends for Operator-Managed Secrets

The Mendix Operator supports externalizing environment-level secrets (database credentials, storage access keys, app constants, admin passwords) to external secret stores, protecting them
with each provider's native cryptographic mechanisms at rest.

The following stores are supported:
* HashiCorp Vault
* AWS Secrets Manager
* Azure Key Vault
* Google Secret Manager
* Existing Kubernetes Secret

Incorrect use of a secret storage may reduce the security of your app. Consult the store providers on production security setup and enable `etcd` encryption in Enterprise Kubernetes distributions.

The explicit `etcd` encryption recommendation directly addresses Kubernetes-native secrets at rest. `Etcd` is the key-value store where Kubernetes Secrets are persisted, and without encryption-at-rest enabled on etcd, unencrypted secrets would exist on disk.

For more information, see [Retrieve Environment-Sensitive Data from a Secret Store](/developerportal/deploy/secret-store-credentials/).

### Private Mendix Platform Credential Storage: AES Encryption in Database

The related IA-05(07) control proves that all Private Mendix Platform-managed platform credentials stored in the internal database use AES encryption.

The Project Admin PAT is stored in the Private Mendix Platform database and encrypted using the Advanced Encryption Standard (AES) algorithm.

Private Mendix Platform retrieves the Project Admin PAT from AWS Secrets Manager, where it is securely stored and encrypted using the Advanced Encryption Standard (AES) managed by AWS Key Management Service (AWS KMS).

This demonstrates that cryptographic protection is applied at the application layer inside Private Mendix Platform itself, not delegated entirely to infrastructure, satisfying the SC-28 (01) requirement that the information system implements the cryptographic mechanism.

### HashiCorp Vault External Secret Management

The [1.24.2 release note](/releasenotes/private-platform/1-24/#1242) provides date-stamped public proof that Private Mendix Platform specifically implemented and released cryptographic-at-rest protection through Vault KV v2:

*Private Mendix Platform supports Hashicorp Vault as an external secret management solution alongside the traditional database storage option.*

Vault KV v2 stores secrets encrypted at rest using AES-256-GCM with Vault's own encryption keys, separately managed from the application.

### Strict TLS for Database Connections: Cryptographic Protection of Data in Transit to Storage

Private Mendix Platform storage plans enforce strict TLS for all database connections, ensuring cryptographic protection of data moving between the runtime and the storage backend where at-rest data resides.

**Strict TLS** specifies if TLS should always be validated. Enabling this setting enforces full TLS certificate validation and requires encryption when connecting to the PostgreSQL/SQL Server. This applies to PostgreSQL (static, IRSA, and Managed Identity), SQL Server (static and Managed Identity), and MinIO. Azure SQL and Azure Postgres support Strict TLS natively.

This prevents any cleartext data from traversing the path between the Mendix Runtime and the encrypted at-rest storage, ensuring the cryptographic protection chain is unbroken.

For more information, see [Storage Plans: Postgres](/developerportal/deploy/private-cloud-storage-plans/#database-postgres).

### Istio or Service Mesh Support - Supported Environments

As described in [Supported Providers: Networking](/developerportal/deploy/private-cloud-supported-environments/#networking), Service Mesh Support is a supported networking option for Private Mendix Platform. This confirms that Istio service mesh (which enforces mTLS between pods) is an officially supported and documented configuration for Private Mendix Platform deployments.

The cluster-wide `PeerAuthentication` manifest (called `default` in the `istio-system` namespace) enforces a Global STRICT mTLS policy. This ensures that all internal communications across all namespaces are encrypted and authenticated, effectively preventing unauthorized or unencrypted information transfer at the internal system boundaries.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2801-2.png" class="no-border" >}}

### RuntimeAutomountServiceAccountToken: false - Cluster Configuration

Private Mendix Platform defaults the value of `runtimeAutomountServiceAccountToken` to `false`, which means that runtime pods cannot use the Kubernetes API to communicate with or enumerate other pods. This directly prevents API-plane lateral movement between application pods. 

For more information, see [Creating a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-cluster/#advanced-deployment-settings).

### Non-root / No Privilege Escalation - Containerized App Architecture

Runtime containers run as non-root with `allowPrivilegeEscalation: false`, removing the OS-level capability needed to intercept or spoof pod-to-pod network traffic (for example, ARP spoofing, or packet capture).

For more information, see [Containerized Mendix App Architecture](/developerportal/deploy/private-cloud-cluster/#containerized-architecture).

### API Credential Automounting Disabled - Operator Release Notes

As described in the [January 26, 2026 release note](/releasenotes/developer-portal/mendix-for-private-cloud/#0.10.7), License Manager CLI v0.10.7 and newer automatically disables API credential automounting for PCLM deployments, significantly limiting unnecessary access.

The Operator actively enforces that pods cannot acquire Kubernetes API credentials at runtime, closing the path by which a compromised pod could query the API server to discover and target other pods. 