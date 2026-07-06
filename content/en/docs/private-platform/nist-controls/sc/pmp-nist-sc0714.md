---
title: "SC-07 (14) System and Communications Protection - Boundary Protection - Protects Against Unauthorized Physical Connections"
linktitle: "SC-07 (14)"
url: /private-mendix-platform/nist-controls/sc-0714/
description: "Documents the Private Mendix Platform's compliance with the SC-07 (14) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-07 (14) control.

| Control ID | SC-07 (14) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | DOD IMPACT LEVEL 6 |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization protects against unauthorized physical connections at organization-defined managed interfaces.

### Supplemental Guidance

Information systems operating at different security categories or classification levels may share common physical and environmental controls, since the systems may share space within organizational facilities. In practice, it is possible that these separate information systems may share common equipment rooms, wiring closets, and cable distribution paths. Protection against unauthorized physical connections can be achieved, for example, by employing clearly identified and physically separated cable trays, connection frames, and patch panels for each side of managed interfaces with physical access controls enforcing limited authorized access to these items. 

The following controls are related to this control:

* PE-4
* PE-19

## Responsibility

### Customer Responsibility

It is the responsibility of the Customer to take appropriate physical security measures.

## Guidance

### Customer Responsibility

The Customer is responsible for ensuring that interfaces between information systems at different levels of security are effectively managed and segregated to protect against security threats posed by unauthorized physical connections.

Physical security measures include:

* Clearly identified and physically separated cable trays for different security levels.
* Separate connection frames and patch panels for each side of managed interfaces.
* Physical access controls enforcing limited authorized access to network equipment.
* Segregated equipment rooms and wiring closets for systems at different classification levels.
* Physical barriers preventing unauthorized cable connections.
* Regular physical audits of network connections.
* Tamper-evident seals on network equipment and patch panels.

#### Implementer Responsibilities

* Infra Implementer: Implement the physical security measures dictated by the customer.
* Infra Implementer: Design and deploy physically separated network infrastructure as required.

#### Operator Responsibilities

* Infra Operator: Ensure ongoing compliance with Customer's physical connection security measures.
* Infra Operator: Perform regular physical inspections of network infrastructure.
* Infra Operator: Investigate and respond to any unauthorized physical connections.

## Proof and Remarks

Mendix is not responsible for this task.
