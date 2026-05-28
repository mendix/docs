---
title: "SC-07 (12) System and Communications Protection - Boundary Protection - Host-Based Protection"
linktitle: "SC-07 (12)"
url: /private-mendix-platform/nist-controls/sc-0712/
description: "Documents the Private Mendix Platform's compliance with the SC-07 (12) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-07 (12) control.

| Control ID | SC-07 (12) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization implements organization-defined host-based boundary protection mechanisms at organization-defined information system components.

### Supplemental Guidance

Host-based boundary protection mechanisms include, for example, host-based firewalls. Information system components employing host-based boundary protection mechanisms include, for example, servers, workstations, and mobile devices.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

The Mendix Operator and Private Mendix Platform support host-based boundary protection through the customer's infrastructure implementation:

* AWS security groups act as host-based virtual firewalls for each Amazon EC2 instance.
* Security groups are assigned to instances based on the purpose of the instances or servers.
* Security group rules reference a source IP or security group and a destination IP or security group to allow traffic.
* Inbound traffic that is not allowed in a security group is denied by default.
* Customers can implement third-party solutions (for example, Trend Micro DSM agents) on Mendix servers for anti-malware, HIPS, and HIDS.

#### Additional Mechanisms

* `IPtables` or `nftables` for host-based firewall rules within containers or nodes.
* Kubernetes security contexts for restricting container capabilities.
* Pod security policies or admission controllers for enforcing security standards.

### Customer Responsibility

It is the customer's responsibility to:

* Determine what host-based boundary protection mechanisms are required
* Define which information system components require host-based protection
* Select appropriate host-based firewall or protection solutions
* Establish policies for host-based firewall rules

#### Implementer Responsibilities

* Infra Implementer: Implement the proper host-based boundary protection mechanisms
* Infra Implementer: Configure security groups, host firewalls, and protection agents
* Infra Implementer: Deploy host-based intrusion detection/prevention systems as required

#### Operator Responsibilities

* Infra Operator: Ensure ongoing compliance with host-based protection requirements
* Infra Operator: Monitor host-based firewall rules and update as needed
* Infra Operator: Maintain host-based protection agents (updates, configuration)

## Proof and Remarks

Mendix is inherently compatible with these controls as it is designed to run within secured, customer-managed cloud environments. It seamlessly integrates with AWS Security Groups, Kubernetes security contexts, and third-party host-protection agents to ensure each platform component is shielded by granular, host-based boundary mechanisms.

An AWS security group configured to allow traffic only on ports 80 and 443:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0712-1.png" class="no-border" >}}

Kubernetes security contexts for restricting container capabilities:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-0712-2.png" class="no-border" >}}