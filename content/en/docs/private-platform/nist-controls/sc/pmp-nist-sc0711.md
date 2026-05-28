---
title: "SC-07 (11) System and Communications Protection - Boundary Protection - Restrict Incoming Communications Traffic"
linktitle: "SC-07 (11)"
url: /private-mendix-platform/nist-controls/sc-0711/
description: "Documents the Private Mendix Platform's compliance with the SC-07 (11) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-07 (11) control.

| Control ID | SC-07 (11) |
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

## Responsibility

### Customer Responsibility

It is the customer's responsibility to dictate rules & policies that prevent unauthorized exfiltration of information, as well as ensuring the compliance of Infrastructure Implementers and Operators.

## Guidance

### Customer Responsibility

Organizations should select appropriate tools and solutions to control and manage network communication effectively. The Customer is responsible for:

* Defining authorized sources for incoming communications.
* Defining authorized destinations for incoming communications.
* Implementing allow-lists for source/destination address pairs.
* Configuring firewalls and network policies to enforce authorized communications.
* Implementing deny-by-default policies (only explicitly authorized traffic is allowed).

#### Implementation Approaches

* Firewall rules that specify allowed source IP addresses and destination ports.
* Kubernetes Network Policies that define ingress rules.
* Service mesh policies (for example, `Istio AuthorizationPolicy`) for fine-grained control.
* Cloud provider security groups with ingress rules.
* Application-level access controls to validate source identity.

#### Implementer Responsibilities

* Infra Implementer: Adhere to the customer's dictated controls and ensure correct implementation of ingress filtering.
* App Implementer: Ensure the Mendix App only accepts inbound communication if allowed by customer policy.

#### Operator Responsibilities

* Infra Operator: Ensure ongoing compliance with ingress communication restrictions.
* Infra Operator: Monitor for unauthorized incoming communication attempts.
* App Operator: Ensure ongoing compliance with application-level access controls.

## Proof and Remarks

Mendix is not responsible for this task.