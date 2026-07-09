---
title: "PL-08 (01) Defense In Depth"
linktitle: "PL-08 (01)"
url: /private-mendix-platform/nist-controls/pl-0801/
description: "Documents the Private Mendix Platform's compliance with the PL-08 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the PL-08 (01) control.

| Control ID | PL-08 (01) |
| --- | --- |
| Control category | PL - Planning |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization designs its security architecture using a defense-in-depth approach that:

* Allocates organization-defined security safeguards to organization-defined locations and architectural layers.
* Ensures that the allocated security safeguards operate in a coordinated and mutually
reinforcing manner.

### Supplemental Guidance

Organizations strategically allocate security safeguards (procedural, technical, or both) in the security architecture so that adversaries have to overcome multiple safeguards to achieve their objective. Requiring adversaries to defeat multiple mechanisms makes it more difficult to successfully attack critical information resources (that is, increases adversary work factor) and also increases the likelihood of detection. The coordination of allocated safeguards is essential to ensure that an attack that involves one safeguard does not create adverse unintended consequences (for example, lockout, cascading alarms) by interfering with another safeguard. Placement of security safeguards is a key activity. Greater asset criticality or information value merits additional layering. Thus, an organization may choose to place anti-virus software at organizational boundary layers, email and web servers, notebook computers, and workstations to maximize the number of related safeguards adversaries must penetrate before compromising the information and information systems.

The following controls are related to this control:

* SC-29
* SC-36

## Responsibility

### Customer Responsibility

Customer is responsible for implementing this control in an appropriate manner in their organization. This includes choosing appropriate tools, security safeguards, and solutions to implement a defense-in-depth approach to security architecture design, with strategic allocation across organizational and architectural layers to ensure compliance with federal requirements. The customer must ensure that security safeguards are properly implemented, coordinated, and operate in a mutually reinforcing manner across the Mendix solution throughout its lifecycle.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 5 (PL Family, SC-29, SC-36) and FIPS 200, which require organizations to design security architectures using defense-in-depth principles with strategically allocated security safeguards across multiple layers and locations. Customers operating within a FedRAMP or DoD SRG environment must ensure their Mendix solution implements defense-in-depth through coordinated security safeguards that operate in a mutually reinforcing manner to increase adversary work factor and likelihood of detection.

The following steps define the customer's obligations for this control:

* Choose and define Defense-in-Depth security safeguards and allocation strategy. 

    Select appropriate security tools and solutions to implement a defense-in-depth approach for the Mendix solution architecture, defining organization-defined security safeguards (procedural, technical, or both) and their allocation to specific locations and architectural layers as specified in NIST SP 800-53 Rev 5. Ensure that safeguards are strategically placed to maximize the number of mechanisms adversaries must overcome, with greater layering applied to more critical assets and higher-value information, and that coordination between safeguards prevents adverse unintended consequences such as lockout or cascading alarms.

* Ensure implementation teams adhere to dictated controls.

    Direct the Infra Implementer to adhere to the Customer's dictated controls and ensure correct implementation of software or hardware security tools across the infrastructure supporting the Private Mendix Platform, including proper placement at organizational boundary layers, servers, and system components. Direct the App Implementer to ensure the Mendix application adheres to these defense-in-depth controls, implementing security safeguards within the application layer that coordinate with infrastructure-level protections as described in SC-29 and SC-36.

* Maintain ongoing compliance through Operations teams.

    Establish procedures for the Infra Operator and App Operator to ensure ongoing compliance with the defense-in-depth controls as dictated by the Customer throughout the Mendix solution lifecycle. Implement monitoring, validation, and update processes to verify that allocated security safeguards continue to operate in a coordinated and mutually reinforcing manner, adjusting configurations as needed to maintain effectiveness against evolving threats while preventing safeguard interference.
