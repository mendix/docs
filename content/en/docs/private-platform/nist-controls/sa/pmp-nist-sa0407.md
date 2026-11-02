---
title: "SA-04 (07) - NIAP-Approved Protection Profiles and FIPS-Validated Cryptography"
linktitle: "SA-04 (07)"
url: /private-mendix-platform/nist-controls/sa-0407/
description: "Documents the Private Mendix Platform's compliance with the SA-04 (07) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-04 (07) control.

| Control ID | SA-04 (07) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization:

* Limits the use of commercially provided information assurance (IA) and IA-enabled information technology products to those products that have been successfully evaluated against a National Information Assurance Partnership (NIAP)-approved Protection Profile for a specific technology type, if such a profile exists; and
* Requires, if no NIAP-approved Protection Profile exists for a specific technology type but a commercially provided information technology product relies on cryptographic functionality to enforce its security policy, that the cryptographic module is FIPS-validated.

## Responsibility

### Mendix Responsibility

* Mendix ensures that core platform components (Mendix Operator, Mendix Runtime, Private Mendix Platform) are engineered to operate within environments that utilize NIAP-approved and FIPS-validated products.
* Mendix maintains compatibility with FIPS-validated cryptographic modules used by the underlying infrastructure for enforcing security policies.

### Customer Responsibility

* The Infra Implementer is responsible for ensuring that all underlying infrastructure components (for example, OS, Cloud Services, Hardware) are NIAP-compliant or FIPS-validated.
* The App Implementer is responsible for ensuring that any third-party integrations or custom extensions added to the Mendix app comply with IA standards.

## Guidance

### Mendix Responsibility

* The Mendix Platform components are not standalone Information Assurance (IA) products, but they are designed to run on IA-enabled infrastructure that conforms to NIAP Protection Profiles.
* Mendix supports the use of FIPS 140-2/140-3 validated cryptographic modules for data-at-rest and data-in-transit encryption within the Private Mendix Platform architecture.

### Customer Responsibility

* It is the responsibility of the Infra Implementer to select and configure NIAP-approved IA products for the hosting environment.
* The App Operator must monitor the application configuration to ensure that only approved cryptographic protocols (for example, TLS 1.2 or TLS 1.3) and FIPS-validated cryptographic modules are utilized for end-user access.

## Proof and Remarks

### NIAP Compatibility (Infrastructure Layer)

* Validated OS and containers: Private Mendix Platform is deployed on hardened, FIPS-enabled Kubernetes distributions (for example, AKS, EKS) that utilize NIAP-evaluated container hosts.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0407-1.png" class="no-border" >}}

    {{% alert color="info" %}}
    If the returned result is 1, it indicates that this node is operating in FIPS mode.
    {{% /alert %}}

* Security policy enforcement - Platform orchestration through the Mendix Operator relies on infrastructure-level IA products to maintain environmental integrity.

### FIPS-Validated Cryptographic Modules

* TLS/SSL encryption - Private Mendix Platform utilizes FIPS-validated cryptographic modules provided by the cloud provider (for example, AWS KMS, Azure Key Vault) or the underlying BoringSSL/OpenSSL FIPS modules for securing external system interfaces.
* Database encryption - Data-at-rest encryption for the Mendix Runtime database is enforced using FIPS 140-2/3 compliant storage encryption provided by the infrastructure provider (for example, Cloud Service Provider).

### Integration Security (Shared Responsibility)

* Mendix capability - Private Mendix Platform and its security modules (OIDC/SAML) are compatible with FIPS-compliant cryptographic providers. When deployed with the validated Bouncy Castle FIPS (BC-FIPS) modules, these components utilize strong encryption standards (for example, AES-256, RSA-2048+) for identity token verification and session security.
* Implementation - All external connectivity for authentication is restricted to encrypted channels (HTTPS).
* Customer scope - The customer is responsible for ensuring their Identity Provider (IdP) endpoints and certificates meet the required IA standards.

### Verification Artifacts

* Infrastructure audit logs - Evidence of FIPS-mode enablement at the Kubernetes and Load Balancer levels.
* Configuration manifests - Terraform and Helm charts reflect the requirement for secure, encrypted communication channels as part of the *Security by Design* implementation.
* Implementation evidence: containerized FIPS configuration - To ensure the Mendix Runtime strictly adheres to FIPS 140-2 requirements, the container image is engineered with a hardened cryptographic provider layer. The following architectural adjustments are implemented during the build process:

    * Cryptographic module integration - Validated FIPS cryptographic jars (for example, `*-fips-*.jar`) are injected into the runtime bundle directory.
    * Security provider hardening - The JVM security configuration (`java.security`) is customized to prioritize FIPS-compliant providers and disable non-compliant algorithms.

    Sample Dockerfile snippet:

    ```text
    # Base image using FIPS-compatible RHEL
    FROM [REDACTED_REGISTRY]/runtime-base:[version]-rhel
    
    # Inject FIPS-validated Cryptographic Modules
    COPY ./[CRYPTO_MODULE_NAME]-fips-[VERSION].jar /opt/mendix/runtime/bundles/
    COPY ./[CRYPTO_MODULE_NAME]-fips-[VERSION].jar /opt/mendix/runtime/bundles/

    # Enforce FIPS-only security policy via java.security
    COPY ./local.security /etc/java/[REDACTED_PATH]/conf/security/java.security
    RUN chmod 644 /etc/java/[REDACTED_PATH]/conf/security/java.security
    ```

### Development Environment Compliance (Studio Pro)

#### Mendix Capability

Mendix Studio Pro is engineered to utilize general-purpose cryptography provided by the .NET Framework, which inherits the FIPS-compliant cryptographic modules of the underlying Windows Operating System.

#### Implementation

When Studio Pro is installed on a Windows environment with FIPS mode enabled, it automatically routes cryptographic operations through the OS-level FIPS-validated modules.

The Studio Pro core team has validated these capabilities specifically for the Windows-based development environment.

#### Customer Scope (Shared Responsibility)

The customer is responsible for ensuring that the developer's local workstations or Virtual Desktop Infrastructure (VDI) are configured in FIPS-compliant mode and run on supported Windows versions.
