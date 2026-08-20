---
title: "CM-03 (06) Configuration Change Control - Cryptography Management"
linktitle: "CM-03 (06)"
url: /private-mendix-platform/nist-controls/cm-0306/
description: "Documents the Private Mendix Platform's compliance with the CM-03 (06) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-03 (06) control.

| Control ID | CM-03 (06) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | IL-4 |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization ensures that cryptographic mechanisms used to provide organization-defined security safeguards are under configuration management. 

### Supplemental Guidance

Regardless of the cryptographic means employed (for example, public key, private key, shared secrets), organizations ensure that there are processes and procedures in place to effectively manage those means. For example, if devices use certificates as a basis for identification and authentication, there needs to be a process in place to address the expiration of those certificates. 

The following controls are related to this control:

* [SC-13](/private-mendix-platform/nist-controls/sc-13/)

## Responsibility

### Mendix Responsibility

Mendix is responsible for implementing and maintaining this control at the platform level.

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes defining acceptable policies and procedures for the configuration management of cryptographic mechanisms to ensure compliance with federal requirements. The customer must ensure that all cryptographic keys, certificates, and shared secrets are inventoried, tracked, and managed under formal configuration management processes within their environment.

#### Infra Implementer

The Infra Implementer is responsible for ensuring all infrastructure-related cryptographic mechanisms are set up for configuration management as dictated by the customer.

#### App Implementer

The App Implementer is responsible for setting up cryptographic mechanisms in the Mendix app for configuration management as dictated by the customer.

#### Infra Operator

The Infra Operator is responsible for updating and maintaining cryptographic mechanisms as dictated by the customer throughout the system lifecycle.

#### App Operator

The App Operator is responsible for ensuring Mendix app access restrictions and auditing remain current through system changes.

## Guidance

### Mendix Responsibility

The Mendix Operator, Mendix Runtime, and Studio Pro provide the ability to securely store and manage secrets, including cryptographic mechanisms, according to configuration management policies and procedures. The Mendix platform supports integration with external secret management solutions and provides secure storage mechanisms for passwords, keys, and so on. Platform-level cryptographic mechanisms are managed through the Mendix deployment pipeline and can be configured through the Private Mendix Platform administration interface. For details on platform security and deployment configuration, refer to the [Mendix Security Guide](/refguide/security/).

Meeting these requirements requires configuring the Platform secret storage. Use the Mendix Platform's built-in secret management capabilities or integrate with an external vault solution (for example, HashiCorp Vault) to securely store and manage TLS certificates, encryption keys, and other cryptographic materials used by the platform.

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and FIPS 140-2, which establish requirements for the management and protection of cryptographic mechanisms used to provide security safeguards in federal information systems. Customers operating within a FedRAMP or DoD SRG environment must ensure that all cryptographic mechanisms, including TLS certificates, public and private keys, and other encryption keys, are under formal configuration management.

To meet these requirements, the customer must carry out the following actions:

1. Define cryptographic configuration management policies.

    The customer must dictate the acceptable policies and procedures for managing cryptographic mechanisms, including TLS certificates, public and private keys, shared secrets, and other encryption keys. These policies must address key generation, distribution, storage, rotation, revocation, and destruction in accordance with NIST SP 800-57 key management guidelines and FIPS 140-2 requirements.

2. Ensure infrastructure cryptographic compliance.

    The infra implementer must ensure all infrastructure-related cryptographic mechanisms are set up for configuration management as dictated by the customer, and the infra operator must update and maintain cryptographic mechanisms throughout the system lifecycle. This includes managing certificates for infrastructure components, tracking expiration dates, and implementing automated renewal processes according to SC-13 requirements.

3. Ensure application cryptographic compliance.

    The app implementer must set up cryptographic mechanisms in the Mendix app for configuration management as dictated by the customer. This includes configuring application-level encryption keys, TLS certificates, and API authentication tokens under formal change control processes aligned with NIST SP 800-57.

#### Infra Implementer

The Infra Implementer is responsible for ensuring all infrastructure-related cryptographic mechanisms are configured and placed under configuration management as dictated by the customer. This includes managing certificates, encryption keys, and shared secrets for operating systems, network devices, cloud services, and container platforms.

The Infra Implementer must perform the following tasks:

1. Inventory infrastructure cryptographic mechanisms.

    Create and maintain a comprehensive inventory of all infrastructure-level cryptographic mechanisms, including TLS certificates, SSH keys, API keys, and encryption keys used across infrastructure components.

2. Implement key and certificate management.

    Deploy automated certificate management and key rotation mechanisms for infrastructure components, ensuring that certificate expiration is tracked and renewals are performed before expiration.

3. Place cryptographic changes under configuration control. 

    Ensure all changes to infrastructure cryptographic mechanisms are subject to the organization's configuration change control process, including approval, documentation, and audit trail requirements.

#### App Implementer

The App Implementer is responsible for setting up cryptographic mechanisms within the Mendix application under configuration management as dictated by the customer. This includes managing application-level encryption keys, certificates, and secrets.

The App Implementer must perform the following tasks:

1. Configure Application Secret Management.

    Use the Mendix Platform's secret management capabilities or integrate with an external vault to manage application-level cryptographic materials, including API keys, encryption keys, and certificates.

2. Implement application certificate management.

    Configure the Mendix application's TLS certificates and any application-level certificates under formal configuration management, tracking expiration and renewal schedules.

3. Document cryptographic configurations.

    Document all application-level cryptographic configurations and ensure changes are tracked through the organization's change control process.

#### Infra Operator

The Infra Operator is responsible for the ongoing maintenance and updating of cryptographic mechanisms at the infrastructure level as dictated by the customer. This includes performing certificate rotations, key updates, and responding to cryptographic vulnerabilities.

The Infra Operator must perform the following tasks:

1. Perform regular certificate and key rotations.

    Execute scheduled certificate renewals and key rotations for infrastructure components in accordance with the customer's cryptographic management policies.

2. Monitor cryptographic mechanism health.

    Continuously monitor the status of infrastructure cryptographic mechanisms, including certificate expiration dates, key usage metrics, and compliance with FIPS 140-2 requirements.

3. Respond to cryptographic vulnerabilities.

    Promptly address cryptographic vulnerabilities (for example, compromised keys, deprecated algorithms) by updating or replacing affected mechanisms as directed by the customer's configuration management process.

## Proof and Remarks

In Private Mendix Platform, all of the credentials can be stored either in a database or in an external secret service.

### Database

The credentials are encrypted by Mendix's Encryption Module, which provides the AES algorithm to encrypt the credentials. 

The following screenshot of the email settings data in the database shows that the email server password is stored in a encrypted value:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0306-1.png" class="no-border" >}}

### External Secret

Private Mendix Platform currently supports using AWS Secret Manager, Azure Key Vault, and HashiCorp Vault as external secrets managers. 

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0306-2.png" class="no-border" >}}

### Building Custom Mendix Applications

When the App Implementer needs to leverage custom encryption, they can do so in a compliant manner by using the [Mendix Encryption Module](/appstore/modules/encryption/). The module allows leveraging the configuration management processes, policies, and systems dictated by the customer.