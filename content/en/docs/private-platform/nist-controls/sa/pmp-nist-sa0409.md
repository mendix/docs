---
title: "SA-04 (09) - Functions, Ports, Protocols, and Services"
linktitle: "SA-04 (09)"
url: /private-mendix-platform/nist-controls/sa-0409/
description: "Documents the Private Mendix Platform's compliance with the SA-04 (09) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-04 (09) control.

| Control ID | SA-04 (09) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization requires the developer of the information system, system component, or information system service to identify early in the system development life cycle, the functions, ports, protocols, and services intended for organizational use.

## Responsibility

### Mendix Responsibility

* Mendix provides detailed and up-to-date documentation of the ports, protocols, services, and components needed by the Mendix Runtime, Mendix Operator, Studio Pro, and Private Mendix Platform to operate.
* Mendix ensures the platform architecture minimizes the use of high-risk functions by adhering to secure-by-design principles during the product development lifecycle.

### Customer Responsibility

* The Infra Implementer is responsible for providing the required documentation for the underlying infrastructure and Private Mendix Platform implementation, identifying all necessary network flows and services early in the design phase.
* The App Implementer is responsible for identifying and documenting the functions, ports, and protocols specific to the Mendix app (custom logic, external integrations, and APIs).
* The Infra and App Operators are responsible for providing ongoing updates to the documentation over the entire lifecycle of the Mendix solution.

## Guidance

### Mendix Responsibility

* The Mendix Platform components are designed to facilitate early identification of security requirements. Mendix provides transparency into its internal communication standards to assist customers in their SOC2 or FedRAMP compliance efforts.

### Customer Responsibility

* It is the responsibility of the customer to ensure all required functions and services are documented early enough in the SDLC (Initial Requirements or Design) to allow for security influence on the design.
* The customer must understand and evaluate the trade-offs involved in blocking specific ports or services to avoid costly retrofitting of security controls after implementation.

## Proof and Remarks

### Infrastructure-Level Access Control (Infra Implementer)

* Edge security (LB) - Evidence from AWS Security Group configurations showing that only Port 443 is exposed for inbound organizational traffic at the Ingress Gateway. For more information, see [Control traffic to your AWS resources using security groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html#SecurityGroupRules).
* Internal node hardening - Terraform HCL snippets proving that application-specific ports (`8080`, `8800`, `8900`) are explicitly blocked at the VPC/Subnet Security Group layer, enforcing a *Deny-by-Default* posture. For more information, see [Security best practices for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html).

### Functional Port Identification (App Implementer)

* Runtime and management - Kubernetes Manifests and Helm configurations identifying the functional necessity of port 8080 (Business logic and PCLM), port 8800 (Sidecar health probes), and port 8900 (Sidecar administrative metrics).

    For more information, see the following documents:

    * Port 8900 of the Mendix app Sidecar: 

        * [Monitoring Environments in Mendix on Kubernetes](/developerportal/deploy/private-cloud-monitor/#enable-metrics-scraping)
        * [Creating a Mendix on Kubernetes Cluster](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#customize-liveness)

    * Port 8080 of the Mendix app Runtime container: [System Requirements](https://docs.mendix.com/refguide/system-requirements/#firewall-settings)

* Hardened controller design - `kubectl describe` outputs confirm that the Mendix Operator operates with no listening network ports (Port: `<none>`), interacting with the Kubernetes API exclusively through secure outbound requests to minimize the attack surface.

    The following screenshot shows the output of `#kubectl describe pod mendix-operator-xxxxxxxxxx-xxxxx -n [namespace]`:

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0409-1.png" class="no-border" >}}

### Compensating Security Mechanisms (Service Mesh)

* Encryption in transit: Exported Istio Peer Authentication policy (STRICT mode) ensures that all identified internal traffic is secured through mutual TLS (mTLS). This acts as a compensating control, ensuring zero-trust communication even for ports blocked at the infrastructure Security Group level.

    The following screenshot shows the output of `#kubectl get peerauthentication default -o yaml`

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0409-2.png" class="no-border" >}}

### Governance & External Assurance

Mendix maintains a comprehensive SOC2 Type II report that independently validates the security engineering processes, ensuring that the identification of functions and protocols is integrated into the development lifecycle to meet industry standards.

{{% alert color="info" %}}
Customers and prospects can request access to the latest SOC2 report using [Conveyor](https://app.conveyor.com/profile/mendix).
{{% /alert %}}
