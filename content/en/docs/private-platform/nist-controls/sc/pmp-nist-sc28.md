---
title: "SC-28 System and Communications Protection - Protection of Information at Rest"
linktitle: "SC-28"
url: /private-mendix-platform/nist-controls/sc-28/
description: "Documents the Private Mendix Platform's compliance with the SC-28 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-28 control.

| Control ID | SC-28 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system protects the confidentiality and/or integrity of organization-defined information at rest.

### Supplemental Guidance

This control addresses the confidentiality and integrity of information at rest and covers user information and system information. Information at rest refers to the state of information when it is located on storage devices as specific components of information systems. System-related information requiring protection includes, for example, configurations or rule sets for firewalls, gateways, intrusion detection or prevention systems, filtering routers, and authenticator content. Organizations may employ different mechanisms to achieve confidentiality and integrity protections, including the use of cryptographic mechanisms and file share scanning. Integrity protection can be achieved, for example, by implementing Write-Once-Read-Many (WORM) technologies. Organizations may also employ other security controls including, for example, secure off-line storage in lieu of online storage when adequate protection of information at rest cannot otherwise be achieved and/or continuous monitoring to identify malicious code at rest. 

The following controls are related to this control:

* AC-3
* AC-6
* CA-7
* CM-3
* CM-5
* CM-6
* PE-3
* SC-8
* SC-13
* SI-3
* SI-7

For more information, refer to the NIST Special Publications 800-56, 800-57, and 800-111.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform provide the capability to fully encrypt Mendix application data at rest. The platform leverages underlying infrastructure encryption capabilities and ensures that data stored in databases, file storage, and persistent volumes can be protected.

Specifically, the Mendix platform:

* Supports encryption at rest for all data stored in databases (PostgreSQL, Oracle, SQL Server, and so on).
* Leverages Kubernetes persistent volume encryption capabilities for application data.
* Supports encrypted storage for file documents and binary data.
* Provides configuration options to enable and enforce encryption at rest.
* Integrates with infrastructure-level encryption mechanisms (for example, AWS EBS encryption, Azure Disk Encryption).

### Customer Responsibility

It is the customer's responsibility to:

* Define what information requires encryption at rest based on data sensitivity and organizational policies.
* Determine whether confidentiality, integrity, or both protections are required.
* Select appropriate encryption mechanisms and key management strategies.

#### Infrastructure Implementer Responsibilities

* Configure the infrastructure to provide encryption at rest capabilities (for example, enable EBS encryption, Azure Disk Encryption).
* Ensure Private Mendix Platform is deployed with encryption at rest enabled for databases and persistent volumes.
* Configure database encryption (for example, Transparent Data Encryption for SQL databases).
* Implement encryption for all storage systems that will hold Mendix application data.

#### App Implementer Responsibilities

* Ensure the Mendix application properly leverages encryption at rest settings.
* Configure file storage to use encrypted persistent volumes.
* Verify that sensitive data fields are stored in encrypted database columns where required.

#### Infrastructure Operator and App Operator Responsibilities

* Monitor and verify that encryption at rest remains enabled throughout the system lifecycle.
* Ensure that any new storage volumes or databases are created with encryption enabled.
* Audit storage configurations periodically to confirm encryption compliance.
* Respond to any encryption failures or degradation events.

## Proof and Remarks

### Mendix SOC 3 Compliance Report 

A report detailing Cryptographic Control and Key Management is available in [Conveyor (page 43)](https://app.conveyor.com/profile/mendix/d/mendix-isae-3000-soc-3/H68STe).

### S3 File Storage: Application-Level Encryption at Rest (com.mendix.storage.s3.EncryptionKeys)

The Mendix Runtime custom settings expose a dedicated encryption-at-rest configuration for S3-backed file document storage:

* `com.mendix.storage.s3.EncryptionKeys` — List of keys which can be used to encrypt and decrypt data at rest in S3. The right key to decrypt the data with is automatically selected.
* Supports key rotation with multiple base64-encoded keys.
* Mendix 11.6.0 and newer enforces AES as the only supported algorithm.

This is a Mendix Runtime-level encryption capability for System.FileDocument entities stored in S3, independent of any S3 bucket-level server-side encryption.

For more information, see [S3 Storage Service Settings](https://docs.mendix.com/refguide/custom-settings/#s3-storage-service-settings).

### Database Transport Encryption: DatabaseUseSsl and Strict TLS

The Mendix Runtime supports encrypted connections to databases via DatabaseUseSsl, and the Mendix Operator storage plans support Strict TLS for PostgreSQL, SQL Server, and MinIO:

* `Strict TLS` - Enables full TLS certificate validation and requires encryption when connecting to the PostgreSQL server.
* PostgreSQL - Strict TLS with full certificate validation
* SQL Server and Azure SQL - Strict TLS supported
* MinIO - TLS via HTTPS schema in the endpoint URL
* Self-signed certificates - Supported through a custom CA trust store

This protects database credentials and data-in-transit to the storage backend, complementing at-rest encryption configured at the infrastructure layer.

For more information, see the relevant sections of [Storage Plans](/developerportal/deploy/private-cloud-storage-plans/#database-postgres).

### Database Authentication: Short-Lived Tokens Replace Static Passwords (IRSA or Managed Identity)

Private Mendix Platform storage plans support replacing static database passwords with short-lived, automatically rotated tokens, eliminating a significant class of credential-at-rest exposure.

For AWS IRSA (Operator 2.12 and newer), static passwords are replaced with short-lived tokens, which are automatically maintained by EKS.

For Azure Managed Identity (Operator 2.17 and newer), static passwords are replaced with short-lived tokens, which are automatically maintained by AKS.

No static credentials are stored at rest when IRSA/Managed Identity is configured. The credential material exists only as a short-lived token in memory.

For more information, see the relevant sections of [Storage Plans](/developerportal/deploy/private-cloud-storage-plans/#database-postgres).

### Private Mendix Platform Credential Storage: AES Encryption in Database

The related control IA-05 (07) indicates that all Private Mendix Platform credentials stored in the internal database are encrypted using AES.

The Project Admin PAT is stored in the PMP database and encrypted using the Advanced Encryption Standard (AES) algorithm.

Private Mendix Platform retrieves the Project Admin PAT from AWS Secrets Manager, where it is securely stored and encrypted using the Advanced Encryption Standard (AES) managed by AWS Key Management Service (AWS KMS).

This covers VCS PATs, build cluster tokens, registry passwords, SMTP passwords, marketplace credentials, and cluster manager API tokens. All are stored encrypted at rest in either the Private Mendix Platform database (AES) or an external secret manager (AES or AWS KMS).

### External Secret Management: HashiCorp Vault

Since version 1.24.2 Private Mendix Platform supports Hashicorp Vault as an external secret management solution alongside the traditional database storage option.

The integration uses Vault's KV version 2 secrets engine with Kubernetes Auth Method (that is, password-less OIDC-based pod authentication). All Platform credentials (such as VCS PATs, build tokens, registry passwords, storage keys, SMTP passwords) can be stored externally in Vault, where they are protected by Vault's transit encryption at rest.

For more information, see the following documents:

* [Configuring a Secret Store with HashiCorp Vault](/developerportal/deploy/secret-store-credentials/#hashicorp)
* [Private Mendix Platform 1.24.2 Release Notes](/releasenotes/private-platform/1-24/#1242)

### External Secret Management: AWS Secrets Manager

Private Mendix Platform supports AWS Secrets Manager as an alternative credential storage backend, accessed through IRSA (IAM Roles for Service Accounts). No static AWS credentials stored at rest. Credentials such as VCS PATs, build cluster tokens, and registry passwords are stored in AWS Secrets Manager (encrypted by AWS KMS) and fetched at runtime using the pod's assigned IAM role identity.

For more information, see [Retrieve Environment-Sensitive Data from a Secret Store](/developerportal/deploy/secret-store-credentials/).

### Read-Only Root Filesystem: Prevents Malicious Code from Writing to Storage

Starting in Mendix Operator 2.21.0, all system containers mount `readOnlyRootFilesystem: true` by default. Mendix app container images are locked down by default - they run as a non-root user, cannot request elevated permissions, and file ownership and permissions prevent modification of system and critical paths.

This is an integrity protection control for information at rest inside the container filesystem, directly referenced in NIST SC-28 supplemental guidance as a *Write-Once-Read-Many* equivalent mechanism. Malicious code cannot modify the container's stored filesystem state.

For more information, see [Read-only RootFS](/developerportal/deploy/private-cloud-cluster/#readonlyrootfs).

### EnableFileDocumentCaching Security Guard for Sensitive Data at Rest

The Mendix Runtime provides the [EnableFileDocumentCaching](/refguide/custom-settings/#EnableFileDocumentCaching) setting to prevent sensitive file documents from being cached to local disk. By default, caching is set to `false`. Customers are advised to only enable caching if they are sure that the file documents will not contain any sensitive information. This direct data-at-rest protection control at the runtime layer prevents sensitive `System.FileDocument` data from being written to the local container filesystem where it would exist at rest without encryption.

### SC-28 (01) - FIPS Mode: AES-256 and FIPS 140-2 Validated Cryptography

The sibling control SC-28 (01) documents the cryptographic protection mechanisms available in Private Mendix Platform, including support for FIPS 140-2 validated modules when deployed in FIPS mode. Private Mendix Platform supports FIPS-compliant deployments on supported Kubernetes distributions, ensuring that AES-256 is used for data at rest.