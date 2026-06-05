---
title: "SC-08 (02) System and Communications Protection - Transmission Confidentiality and Integrity- Pre/Post Transmission Handling"
linktitle: "SC-08 (02)"
url: /private-mendix-platform/nist-controls/sc-0802/
description: "Documents the Private Mendix Platform's compliance with the SC-08 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-08 (02) control.

| Control ID | SC-08 (02) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | DOD IMPACT LEVEL 5 |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Mendix - Operator, Customer - Infra |

## Control

The information system maintains the confidentiality and/or integrity of information during preparation for transmission and during reception.

### Supplemental Guidance

Information can be either unintentionally or maliciously disclosed or modified during preparation for transmission or during reception including, for example, during aggregation, at protocol transformation points, and during packing or unpacking. These unauthorized disclosures or modifications compromise the confidentiality or integrity of the information.

The following controls are related to this control:

* AU-10

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

Mendix provides full encryption at rest for data and leverages Istio for full encryption in transit:

* Data is encrypted at rest and remains encrypted until needed for processing.
* Encryption in transit protects data during transmission inside and between Kubernetes pods.
* All information in the Private Mendix Platform is encrypted at rest and in transit.
* Encryption mechanisms leverage FIPS-compliant cryptography and industry standard mechanisms.
* Protocol transformation is handled securely by the service mesh.

#### Pre- and Post-Transmission Protection

* Data encrypted at rest until loaded into memory for processing.
* Encrypted channels established before data transmission begins.
* Data validated and checked for integrity before and after transmission.
* Secure aggregation and protocol transformation within the service mesh.
* TLS sidecar containers handle encryption or decryption at pod boundaries.

#### Important Technical Note

Mendix apps can only receive HTTP traffic and require a sidecar container in their pods to handle TLS. For the Private Mendix Platform, the recommendation is either Linkerd (which is easier to install if your ingress controller supports it) or Istio. Istio is recommended because it handles everything - not only main ingress traffic but also additional pod-to-pod communication for things like Prometheus metrics and any admin or status ports.

### Customer Responsibility

It is the customer's responsibility to:

* Define requirements for protecting information during preparation for transmission and reception.
* Determine what mechanisms are needed at protocol transformation points.
* Establish procedures for validating data integrity during aggregation and packing or unpacking.

#### Implementer Responsibilities

* Infra Implementer: Ensure infrastructure information is protected at all transmission points.
* Infra Implementer: Configure service mesh to handle protocol transformation securely.
* Infra Implementer: Deploy TLS sidecar containers (Istio or Linkerd) for Mendix applications.
* App Implementer: Enable additional controls as required by the Customer.

#### Operator Responsibilities

* Infra Operator: Ensure ongoing protection during all transmission phases.
* App Operator: Monitor for any integrity issues during data transmission.

## Proof and Remarks

The presence of the `istio-proxy sidecar` and the `MUTUAL TLS` mode on the ingress gateway ensures that information integrity and confidentiality are maintained at every protocol transformation point. This configuration protects data during the packing and unpacking phases of transmission by enforcing cryptographic verification from the moment traffic enters the mesh until it reaches the application container.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0802-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0802-2.png" class="no-border" >}}
