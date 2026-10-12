---
title: "SA-05 - Information System Documentation"
linktitle: "SA-05"
url: /private-mendix-platform/nist-controls/sa-05/
description: "Documents the Private Mendix Platform's compliance with the SA-05 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-05 control.

| Control ID | SA-05 |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization obtains administrator and user documentation for the information system that describes secure configuration, installation, operation, security functions/mechanisms, and known vulnerabilities.

## Responsibility

### Mendix Responsibility

* Mendix provides detailed and up-to-date administrator and user security documentation for the core Private Mendix Platform components.
* Mendix ensures documentation includes descriptions of secure functions, interaction methods, and guidance for maintaining the security posture of the platform.

### Customer Responsibility

* The Infra Implementer is responsible for providing and maintaining documentation for the underlying infrastructure (EKS, AWS GovCloud), including secure installation, hardening procedures, and system recovery SOPs.
* The App Implementer is responsible for documenting the security configurations specific to the Mendix app, including user access controls and integration security.
* The Infra and App Operators are responsible for ensuring all documentation is protected, kept current, and distributed to authorized personnel as required.

## Guidance

### Mendix Responsibility

* Mendix facilitates the acquisition of documentation by providing transparency into its security architecture, which supports customer efforts in meeting SOC2 or FedRAMP documentation requirements.

### Customer Responsibility

* The customer must ensure that documentation is robust enough to support secure operations. This includes documenting attempts to obtain information when official documentation is unavailable.
* The customer must implement access controls to protect security-related documentation from unauthorized disclosure, in accordance with the organization's risk management strategy.

## Proof and Remarks

### Infrastructure Security and Operations Manual (Infra Implementer)

* Automated deployment and hardening: The official Private Mendix Platform documentation is operationalized through internal Infrastructure-as-Code (IaC) and automated CI/CD pipelines.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-05-1.png" class="no-border" >}}

* Pipeline verification - The GitLab Pipeline (comprising of `InfraPlan`, `InfraApply`, and `InstallPMP` stages) serves as the primary technical record for the secure installation and hardening of the EKS environment.
* Secure startup and recovery - Documentation of the automated node replacement logic via ASG and the secure re-registration process for hardened EKS worker nodes (for example, handling `Unreachable` node scenarios).
* Platform hardening guide - Detailed SOPs for implementing the Deny-by-Default Security Group strategy and enforcing mTLS with Istio. For more information, see the following documents:

    * [Control traffic to your AWS resources using security groups - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html) 
    * [Security best practices for your VPC - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
    * [Authentication Policy](https://istio.io/latest/docs/tasks/security/authentication/authn-policy/#globally-enforcing-mtls-in-strict-mode)
    * [PeerAuthentication](https://istio.io/latest/docs/reference/config/security/peer_authentication/)
    * [Authentication Policy](https://istio.io/latest/docs/tasks/security/authentication/authn-policy/#before-you-begin)

### Functional Configuration & Port Inventory (App Implementer)

* Technical reference - Documentation identifying the specific use cases for ports 8080, 8800, and 8900, as well as the secure outbound-only communication model of the Mendix Operator.

    For more information, see the following documents:

    * Port 8900 of the Mendix app Sidecar: 

        * [Monitoring Environments in Mendix on Kubernetes](/developerportal/deploy/private-cloud-monitor/#enable-metrics-scraping)
        * [Creating a Mendix on Kubernetes Cluster](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#customize-liveness)

    * Port 8080 of the Mendix app Runtime container: [System Requirements](https://docs.mendix.com/refguide/system-requirements/#firewall-settings)

* Mendix app User Guide - Documentation outlining user-accessible security functions and instructions for secure interaction with the Platform.

### Vulnerability and Lifecycle Management

* Remediation procedures - See the below internal documentation screenshot outlining the Mendix Vulnerability Management Process. Additionally, Mendix meets or exceeds all federally mandated vulnerability patching timelines across the Mendix product portfolio and CVE fixes are listed in product release notes for tracking.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-3.png" class="no-border" >}}

* Platform Runtime hardening - Evidence of maintaining the platform on the latest supported runtime (for example, Java 21) to mitigate EOL risks.

### Governance and External Assurance

* Standard Platform documentation - The organization uses the official [Private Mendix Platform documentation](/private-mendix-platform/) as the baseline for secure installation.
* Mendix maintains a comprehensive SOC2 Type II report that independently validates the security engineering processes, ensuring that the identification of functions and protocols is integrated into the development lifecycle to meet industry standards.

    {{% alert color="info" %}}
    Customers and prospects can request access to the latest SOC2 report using [Conveyor](https://app.conveyor.com/profile/mendix).
    {{% /alert %}}

* Implementation verification - This external guidance is validated against the internal EKS Deployment Manifests to ensure alignment with organizational security requirements (for example, restricted ports and localized data processing).
