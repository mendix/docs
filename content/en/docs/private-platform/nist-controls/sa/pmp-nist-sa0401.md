---
title: "SA-04 (01) – Functional Properties of Security Controls"
linktitle: "SA-04 (01)"
url: /private-mendix-platform/nist-controls/sa-0401/
description: "Documents the Private Mendix Platform's compliance with the SA-04 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-04 (01) control.

| Control ID | SA-04 (01) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The organization requires the developer of the information system, system component, or information system service to provide a description of the functional properties of the security controls to be employed.

### Supplemental Guidance

Functional properties of security controls describe the functionality (that is, security capability, functions, or mechanisms) visible at the interfaces of the controls and specifically exclude functionality and data structures internal to the operation of the controls.

The following controls are related to this control:

* SA-5

## Responsibility

### Mendix Responsibility

* Mendix is responsible for providing the required documentation of security controls for the Mendix Operator, Mendix Runtime, Private Mendix Platform, and Studio Pro.
* Mendix ensures that the functional properties of the platform-level security controls are documented and kept up to date as the platform evolves.

### Customer Responsibility

* The customer is responsible for providing descriptions of the functional properties for security controls implemented at the infrastructure level and within the specific Mendix applications.
* The customer must coordinate with internal stakeholders to ensure the documentation covers the full scope of the deployed environment.

## Guidance

### Mendix Responsibility

Mendix provides the foundational security control descriptions for its core components. 

### Customer Responsibility

* It is the responsibility of the Infra Implementer to provide descriptions of the infrastructure-level security control's functional properties.
* It is the responsibility of the App Implementer to provide descriptions of the Mendix app security control's functional properties.
* It is the responsibility of the Infra Operator to keep the infrastructure documentation up to date.
* It is the responsibility of the App Operator to keep the Mendix app documentation up to date.

## Proof and Remarks

### Mendix Operator (Mendix for Private Cloud)

As the deployment operator within the private infrastructure, MX4PC’s security functional properties are centered on isolation and secure connectivity:

* Security boundary - MX4PC enables application deployment within the organization’s custom security firewalls, ensuring that sensitive data remains within the private network.
* FIPS-Validated cryptography - Private Mendix Platform is architected to utilize FIPS 140-2/140-3 validated cryptographic modules provided by the underlying infrastructure. By integrating with a FIPS-enabled Service Mesh (for example, Istio), the platform ensures that all data-in-transit between platform interfaces and Kubernetes pods is encrypted using compliant algorithms. This leveraging of infrastructure-level security ensures the platform adheres to federal encryption standards.
* FedRAMP and IL Compliant Images - All system images used within the PMP environment are hardened and maintained to meet FedRAMP and DoD Impact Level (IL) compliance requirements. These images are scanned and verified to ensure they are free of non-compliant configurations or unauthorized packages.
* Access management - Leverages Kubernetes RBAC (Role-Based Access Control) to strictly limit the Operator's access to cluster resources, maintaining the principle of least privilege.
* Infrastructure governance - By leveraging the Mendix Private Cloud Operator, the platform enforces standardized deployment templates, ensuring that all managed apps adhere to the security baselines defined within the customer's Kubernetes cluster.

For more information, see [Mendix on Kubernetes](/developerportal/deploy/private-cloud/).

### Mendix Runtime

The Mendix Runtime is the core engine executing business logic, featuring "built-in" and "immutable" security functional properties:

* Declarative access control - Enforces a robust security matrix by validating user roles against Entity-level access rules, and Microflow and Page execution rights at the kernel level.
* The Mendix Runtime provides built-in protections against common web vulnerabilities:
    * SQL injection is mitigated through the use of parameterized queries generated from OQL/XPath expressions.
    * Cross-site scripting (XSS) is mitigated via context-aware output encoding in the Mendix client framework, provided that standard widgets and rendering mechanisms are used.
    * Cross-site request forgery (CSRF) protection is enforced through anti-CSRF tokens in client-server communication.
    * Session security is enhanced through support for secure cookie attributes such as HttpOnly, Secure, and SameSite.

These protections are effective when applications are developed following Mendix best practices and without bypassing built-in mechanisms (for example, custom JavaScript or HTML rendering).

For more information, see [Mendix Runtime](/refguide/runtime/).

### Studio Pro

Studio Pro provides security validation during the modeling and development phase:

* Consistency checks - The IDE performs automated consistency and validation checks during development to identify potential security misconfigurations, such as mismatches between page access and entity access permissions. These checks provide guidance but require developer action to remediate.
* Model-level security configuration - The platform supports model-level security configuration, including security levels such as Prototype and Production. In Production mode, Studio Pro enforces the definition of access control rules (for example, entity-level CRUD permissions, module roles, and page access), preventing deployment without a complete security configuration.
* Software composition analysis (SCA) - The platform provides governance over reusable components (for example, Marketplace modules and widgets), including versioning and update management. Additional Software Composition Analysis (SCA) for custom Java or JavaScript dependencies may require integration with external security scanning tools.

For more information, see [Security](/refguide/security/).

### Private Mendix Platform-Specific Security Functional Properties

As a low-code management platform built on Mendix, Private Mendix Platform provides the following security functional properties within the customer's managed environment:

* Identity and access orchestration - Private Mendix Platform facilitates integration with enterprise Identity Providers (IdP). Its functional property ensures that all administrative actions are authenticated against corporate identity policies before granting access to the Private Mendix Platform management interface. Private Mendix Platform supports seamless integration with enterprise Identity Providers (for example, Azure AD) via OIDC (OpenID Connect) or SAML 2.0 to implement secure Single Sign-On (SSO).

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0401-1.png" class="no-border" >}}

* Deployment governance (security gates) - Private Mendix Platform acts as a centralized governance layer for application lifecycles. It provides comprehensive Role-Based Access Control (RBAC) mechanisms to enforce strict deployment gates. These controls restrict the ability to build Mendix application images, deploy images to Kubernetes environments, and manage environment configurations to authorized personnel only. This ensures that only validated application packages are promoted to production through a controlled and auditable process.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0401-2.png" class="no-border" >}}

* Administrative auditability - Private Mendix Platform captures and maintains detailed audit trails of all platform-level configurations and deployment activities. The platform provides functional mechanisms to export these audit logs to customer-managed persistent storage, such as Amazon S3 buckets or an external PostgreSQL database. This enables customers to aggregate and analyze security events using their own tools and ensures long-term log retention as required by federal standards.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0401-3.png" class="no-border" >}}

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0401-4.png" class="no-border" >}}

* Secure secret management - Private Mendix Platform provides a functional interface for managing application-specific secrets (for example, credentials, certificates). It ensures these sensitive data points are injected into the runtime environment through secure mechanisms like Kubernetes Secrets, keeping them encrypted and isolated from the application model. Beyond standard Kubernetes Secrets, Private Mendix Platform natively supports integration with enterprise-grade secret stores, including AWS Secrets Manager and Azure Key Vault. This allows for the centralized management of sensitive data using hardware-backed security.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0401-5.png" class="no-border" >}}

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0401-6.png" class="no-border" >}}

* Session timeout management - To mitigate the risk of unauthorized access through unattended workstations, Private Mendix Platform enforces an inactivity session timeout. The Platform monitors user activity and automatically terminates or locks the session after a predefined period of inactivity. This ensures that security tokens are invalidated when not in use, preventing long-lived session exploitation.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0401-7.png" class="no-border" >}}
