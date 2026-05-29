---
title: "SC-07 (10) System and Communications Protection - Boundary Protection Prevent Unauthorized Exfiltration"
linktitle: "SC-07 (10)"
url: /private-mendix-platform/nist-controls/sc-0710/
description: "Documents the Private Mendix Platform's compliance with the SC-07 (10) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-07 (10) control.

| Control ID | SC-07 (10) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization prevents the unauthorized exfiltration of information across managed interfaces.

### Supplemental Guidance

Safeguards implemented by organizations to prevent unauthorized exfiltration of information from information systems include, for example: 

* Strict adherence to protocol formats
* Monitoring for beaconing from information systems
* Monitoring for steganography
* Disconnecting external network interfaces except when explicitly needed
* Disassembling and reassembling packet headers
* Employing traffic profile analysis to detect deviations from the volume/types of traffic expected within organizations or call backs to command and control centers. 

    Devices enforcing strict adherence to protocol formats include, for example, deep packet inspection firewalls and XML gateways. These devices verify adherence to protocol formats and specifications (for example, file formats) and detect traffic anomalies.

The following controls are related to this control:

* SI-3

For more information, refer to the NIST Special Publications 800-41, and 800-77.

## Responsibility

### Customer Responsibility

It is the customer's responsibility to provide requirements for unauthorized exfiltration controls.

## Guidance

### Customer Responsibility

The customer is responsible for implementing safeguards to prevent unauthorized exfiltration, including:

* Defining requirements for preventing unauthorized data exfiltration.
* Implementing deep packet inspection firewalls or XML gateways.
* Monitoring for beaconing and command-and-control traffic.
* Employing traffic profile analysis to detect anomalies.
* Monitoring for steganography techniques.
* Implementing data loss prevention (DLP) solutions.
* Enforcing strict adherence to protocol formats.

#### Implementer Responsibilities

* Infra Implementer: Ensure the infrastructure adheres to exfiltration prevention controls.
* Infra Implementer: Deploy and configure DLP, firewall, and monitoring tools as directed by the customer.
* App Implementer: Ensure the Mendix App adheres to exfiltration prevention controls.
* App Implementer: Implement proper authorization and access controls to prevent data leakage.

#### Operator Responsibilities

* Infra Operator: Ensure ongoing compliance with exfiltration prevention controls.
* Infra Operator: Monitor for suspicious traffic patterns indicating potential exfiltration.
* App Operator: Ensure ongoing compliance with access controls and data protection measures.

## Proof and Remarks

The system utilizes Istio sidecar proxies as managed interfaces for all outbound communications, ensuring that traffic is intercepted for protocol validation and telemetry collection to support anomaly detection.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0710-1.png" class="no-border" >}}

The presence of the `BlackHoleCluster` and `PassthroughCluster` within the Envoy configuration demonstrates that all outbound traffic is processed through an internal routing table, allowing the system to either permit or sinkhole traffic based on defined security constraints.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0710-2.png" class="no-border" >}}

The application pod is in full synchronization with the Istio control plane, ensuring all traffic is intercepted by a managed interface governed by current security configurations.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0710-3.png" class="no-border" >}}