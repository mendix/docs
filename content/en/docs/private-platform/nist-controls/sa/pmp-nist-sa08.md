---
title: "SA-08 - Security Engineering Principles"
linktitle: "SA-08"
url: /private-mendix-platform/nist-controls/sa-08/
description: "Documents the Private Mendix Platform's compliance with the SA-08 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-08 control.

| Control ID | SA-08 |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization applies information system security engineering principles in the specification, design, development, implementation, and modification of the information system.

## Responsibility

### Mendix Responsibility

Mendix applies security engineering principles in the design and development of the Private Mendix Platform core components, ensuring the platform architecture supports layered protections and secure-by-design standards.

### Customer Responsibility

* The customer is responsible for identifying, defining, and agreeing upon the specific system security engineering principles that must be applied to the system to meet their unique mission and regulatory requirements.
* The Infra Implementer is responsible for applying security engineering principles to the underlying infrastructure (AWS GovCloud, EKS), including the delineation of physical and logical security boundaries.
* The App Implementer is responsible for ensuring that the PMP platform configuration, custom integrations, and managed application environments adhere to sound security architecture principles.
* The Infra and App Operators are responsible for ensuring security principles are maintained during system modifications, upgrades, and ongoing maintenance.

## Guidance

### Customer Responsibility

* Layered protections - Implement defense-in-depth strategies, such as combining network-level Security Groups with application-level Service Mesh (Istio) encryption.
* Boundary delineation - Clearly define and enforce logical boundaries between different trust zones (for example, Ingress Gateway, Management Sidecars, and Runtime Pods).
* Threat modeling - Perform risk-based analysis to identify attack vectors and implement compensating controls (for example, mTLS, RBAC) to reduce risk to acceptable levels.

## Proof and Remarks

### Application of Layered Security Engineering Principles

#### Defense-in-Depth and Boundary Delineation (Infra Implementer)

* Network segmentation - Implementation of a multi-tier VPC architecture where EKS nodes are hosted in private subnets, with an Istio Ingress Gateway serving as the sole hardened entry point (Port 443). For more information, refer to the following topics:

    * [Security best practices for your VPC - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
    * [Ingress Gateways](https://istio.io/latest/docs/tasks/traffic-management/ingress/ingress-control/)

* Workload isolation - Use of Kubernetes Namespaces and NetworkPolicies to delineate logical boundaries between different environment tiers (for example, Testing, Staging, Production) and to isolate Private Mendix Platform management traffic from other cluster workloads. For more information, see [Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/).

#### Secure Platform Implementation (App Implementer)

* Administrative traffic isolation - Configuration of the Private Mendix Platform to offload administrative functions (Ports `8800/8900`) to dedicated sidecars, ensuring that the management plane is logically separated from the application data plane (Port `8080`). 

    For more information, refer to the following topics:

    * Port 8900 of the Mendix app sidecar - [Monitoring Environments in Mendix on Kubernetes](/developerportal/deploy/private-cloud-monitor/#enable-metrics-scraping)
    * Port 8900 of the Mendix app sidecar - [Creating a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-cluster/#customize-liveness)
    * Port 8080 of the Mendix app runtime container - [System Requirements](/refguide/system-requirements/#firewall-settings)

* Hardened control plane - Deployment of the Mendix Operator using a *Zero-Port* model, ensuring that all platform lifecycle operations are performed through secure outbound API requests, minimizing the inbound attack surface.

{{< figure src="/attachments/private-platform/nist-sa/nist-sa-08-1.png" class="no-border" >}}

#### Compensating Controls and Lifecycle Resilience

* Modernized platform runtime - Evidence of upgrading the platform's base runtime environment to JDK 21 to leverage advanced memory safety and security enhancements, reducing the overall risk profile of the runtime stack.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-08-2.png" class="no-border" >}}

    As shown in the Mendix Release Matrix, Java 21 is the mandated and supported long-term support (LTS) version for Mendix 10 and 11, ensuring the platform operates on a hardened, non-EOL (End-of-Life) runtime stack. For more information, see [Subscription to Innovation: Java 21 Support](https://www.mendix.com/blog/subscription-to-innovation-java-21-support/).

* Infrastructure resilience  Application of automated lifecycle principles, such as Auto Scaling Group (ASG) node replacement, ensuring the platform consistently operates on the latest hardened AMI images (for example, resolving aged or unreachable node states).

    For more information, refer to the following topics:

    * [What is Amazon EC2 Auto Scaling? - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html) 
    * [Use an instance refresh to update instances in an Auto Scaling group - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html)
    * [Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/autoscaling_group)
