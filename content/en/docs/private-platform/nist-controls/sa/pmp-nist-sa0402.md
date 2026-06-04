---
title: "SA-04 (02) – Design and Implementation Information"
linktitle: "SA-04 (02)"
url: /private-mendix-platform/nist-controls/sa-0402/
description: "Documents the Private Mendix Platform's compliance with the SA-04 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-04 (02) control.

| Control ID | SA-04 (02) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

Requires the organization to obtain design and implementation information for security controls, which may include (as applicable): security-relevant external system interfaces, high-level design, low-level design, and implementation-related documentation. The level of detail provided is defined by the organization and may include design specifications, configuration artifacts, and architecture descriptions.

## Responsibility

### Mendix Responsibility

* Provision of technical reference material - Mendix is responsible for maintaining and providing official technical documentation (including the Mendix Documentation portal and Private Mendix Platform-specific guides) that outlines the functional architecture and security principles of the Mendix Operator, Runtime, and Platform services.
* Transparency of security controls - Mendix ensures that the security-relevant configurations and interface specifications of the Platform are disclosed through standardized product manuals and deployment instructions, enabling customers to implement and verify security engineering principles within their environments.

### Customer Responsibility

* The customer is responsible for maintaining design documentation for any custom security extensions implemented at the infrastructure or customer's application level.
* The customer must ensure that the implementation of Private Mendix Platform within their specific network environment aligns with the provided security design.

## Guidance

### Mendix Responsibility

* Provision of technical reference materials - Mendix is responsible for maintaining and providing official technical documentation - including architectural overviews, deployment guides, and functional specifications - through the [Mendix Docs](https://docs.mendix.com/) portal.
* Security control transparency - Mendix ensures that the functional design and security logic of the platform are disclosed through standardized product manuals, enabling customers to perform independent security analysis and verification. 

### Customer Responsibility

* It is the responsibility of the Infra Implementer to document the infrastructure-level integration design.
* It is the responsibility of the App Implementer to document the application-level security architecture.
* The Infra Operator and App Operator are responsible for ensuring that the physical/logical implementation remains consistent with the documented design.

## Proof and Remarks

### High-Level Design (Architectural Decoupling)

* Decoupled control loop - Private Mendix Platform does not directly perform privileged Kubernetes operations. Instead, it interacts with the system through defined APIs and resource definitions representing desired state changes. For more information, see [Creating a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-cluster/#introduction).
* Independent execution - Mendix Operator is responsible for observing these desired state changes (for example, by using custom resources or API-driven configurations) and performing the corresponding actions within the cluster. The Operator follows the standard Kubernetes reconciliation pattern (watch and reconcile). For more information, see [Creating a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-cluster/#introduction).
* Privilege compartmentalization - This architecture enforces a separation between the user-facing control plane (Private Mendix Platform) and the execution layer (Operator). Private Mendix Platform does not require elevated Kubernetes privileges, while the Operator operates under a controlled RBAC scope. As a result, a compromise of the web-facing Private Mendix Platform application does not directly grant unauthorized access to perform arbitrary cluster-level operations without going through the Operator's controlled logic. For more information, see [Creating a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-cluster/#introduction).
* Credential abstraction with Portunus - When registering a customer's deployment cluster within Private Mendix Platform, the platform utilizes the Portunus private cloud component to handle cluster authentication. Instead of requiring the direct configuration and storage of high-privilege Kubernetes API Server Tokens within the Private Mendix Platform interface, Portunus acts as a secure identity proxy. This abstraction ensures that sensitive cluster credentials remain isolated from the management UI, significantly reducing the risk of credential leakage and enhancing the overall security posture of the multi-cluster orchestration.

{{% alert color="info" %}}
Portunus for Private Mendix Platform is a newly-developed component. It can be installed and used by simply using the Private Mendix Platform installer.
{{% /alert %}}

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0402-1.png" class="no-border" >}}

### Low-Level Design (Component Security)

* Runtime security model - Documentation describes how the Mendix Runtime enforces access control based on model-defined security (for example, entity access rules and microflow permissions), which are translated into runtime checks at the database and application logic layers. For more information, see [Security](/refguide/security/#security-in-studio-pro).
* Container hardening and image integrity - Containerized platform components are deployed using hardened container images following secure baseline configurations. Security measures include the use of minimal base images, non-root execution where applicable, image vulnerability scanning during image build process, and integrity validation of container artifacts prior to deployment.

    Sample Dockerfile snippet:

    ```text
    # Base image using FIPS-compatible RHEL
    FROM [REDACTED_REGISTRY]/runtime-base:[VERSION]-rhel
    
    # Inject FIPS-validated Cryptographic Modules
    COPY ./[CRYPTO_MODULE_NAME]-fips-[VERSION].jar /opt/mendix/runtime/bundles/
    COPY ./[CRYPTO_MODULE_NAME]-fips-[VERSION].jar /opt/mendix/runtime/bundles/
    
    # Enforce FIPS-only security policy via java.security
    COPY ./local.security /etc/java/[REDACTED_PATH]/conf/security/java.security
    RUN chmod 644 /etc/java/[REDACTED_PATH]/conf/security/java.security
    ```

### External System Interfaces (ESI)

* Identity provider integration - The Platform supports integration with external identity providers (for example, OIDC, SAML), with configuration and integration guidance available.

    For more information, see [Private Mendix Platform Quick Start Guide](/private-mendix-platform/quickstart/#configuring-idp-settings).

* Standardized secret management and injection - The Platform architecture implements a secure framework for managing sensitive credentials (for example, database passwords, API keys) outside the application model. It leverages external secret management services - including Azure Key Vault and AWS Secrets Manager - to facilitate the secure injection of credentials into the Private Mendix Platform and its managed applications. This ensures that secrets are managed as externalized configurations, protected by infrastructure-level encryption and access policies, rather than being hardcoded or stored within the deployment manifests.

    For more information, see the following documents:

    * [Configuring External Secret Management with Azure Key Vault](/private-mendix-platform/configure-azure-key-vault/#introduction)
    * [Configuring External Secret Management with AWS Secret Manager](/private-mendix-platform/configure-aws-secret-manager/#introduction)
    * [Retrieve Environment-Sensitive Data from a Secret Store](/developerportal/deploy/secret-store-credentials/#introduction)

### Implementation Representation

* Infrastructure as Code (IaC) - The Platform infrastructure is defined and managed using tools such as Terraform and Helm charts. These artifacts represent the intended system configuration and support consistent and repeatable deployments. The infra implementer is responsible for the required configuration.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0402-2.png" class="no-border" >}}
