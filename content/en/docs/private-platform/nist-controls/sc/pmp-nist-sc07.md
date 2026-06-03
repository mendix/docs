---
title: "SC-07 System and Communications Protection - Boundary Protection"
linktitle: "SC-07"
url: /private-mendix-platform/nist-controls/sc-07/
description: "Documents the Private Mendix Platform's compliance with the SC-07 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-07 control.

| Control ID | SC-07 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Customer - Infra, Customer - Org |

## Control

The information system: 

* Monitors and controls communications at the external boundary of the system and at key internal boundaries within the system. 
* Implements subnetworks for publicly accessible system components that are physically and logically separated from internal organizational networks. 
* Connects to external networks or information systems only through managed interfaces consisting of boundary protection devices arranged in accordance with an organizational security architecture.

### Supplemental Guidance

Managed interfaces include, for example, gateways, routers, firewalls, guards, network-based malicious code analysis and virtualization systems, or encrypted tunnels implemented within a security architecture (for example, routers protecting firewalls or application gateways residing on protected subnetworks). Subnetworks that are physically or logically separated from internal networks are referred to as demilitarized zones or DMZs. Restricting or prohibiting interfaces within organizational information systems includes restricting external web traffic to designated web servers within managed interfaces and prohibiting external traffic that appears to be spoofing internal addresses. Organizations consider the shared nature of commercial telecommunications services in the implementation of security controls associated with the use of such services. Commercial telecommunications services are commonly based on network components and consolidated management systems shared by all attached commercial customers, and may also include third party-provided access lines and other service elements. Such transmission services may represent sources of increased risk despite contract security provisions.

The following controls are related to this control:

* AC-4
* AC-17
* CA-3
* CM-7
* CP-8
* IR-4
* RA-3
* SC-5
* SC-13

For more information, refer to the NIST Special Publications 800-41, and 800-77.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

The Mendix Operator and Private Mendix Platform ensure communication monitoring and control through managed interfaces:

* AWS CNI (Container Network Interface) for Kubernetes pod traffic routing.
* Tetrate Istio FIPS edition for service mesh providing secure communication.
* Communication monitoring and control between individual pods within the Kubernetes cluster.
* Networks are inherently separated from the external network.
* All external communication goes through managed network interfaces (Ingress controllers).
* Istio provides mTLS encryption for service-to-service communication.

#### Key Technologies

* AWS CNI: Native Kubernetes networking for pod-to-pod communication.
* Tetrate Istio FIPS edition: Service mesh with FIPS 140-2 compliant encryption.
* Ingress controllers: Managed interfaces for external traffic (for example, NGINX).
* Kubernetes Network Policies: Define allowed communication paths.

### Customer Responsibility

It is the customer's responsibility to:

* Determine the proper level of separation between networks and information systems.
* Define required boundary protections for communication ingress and egress.
* Establish security architecture with managed interfaces (firewalls, gateways, routers).
* Implement DMZ/subnetworks for publicly accessible components.
* Configure network segmentation and access controls.

#### Implementer Responsibilities

* Implement the infrastructure and PMP to ensure compliance with boundary protection requirements.
* Configure firewalls, network policies, and Ingress controllers.
* Implement network segmentation in accordance with customer security architecture.

#### Operator Responsibilities

* Ensure ongoing compliance with boundary protection throughout the lifecycle.
* Monitor network traffic for unauthorized communication patterns.
* Update firewall rules and network policies as needed.

## Proof and Remarks

Boundary protection is maintained by limiting external system boundaries to a managed gateway. This interface permits traffic only on validated ports:

* Port 15021: This is the Health Check port.
* Port 80: Usually configured to immediately redirect to 443 (Permanent Redirect).
* Port 443: The primary Managed Interface for encrypted production traffic.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-07-1.png" class="no-border" >}}

The cluster-wide `PeerAuthentication` manifest (named default in the `istio-system` namespace) enforces a `Global STRICT mTLS` policy. This ensures that all internal communications across all namespaces are encrypted and authenticated, effectively preventing unauthorized or unencrypted information transfer at the internal system boundaries.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-07-2.png" class="no-border" >}}
