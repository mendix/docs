---
title: "AC-18 Wireless Access"
linktitle: "AC-18"
url: /private-mendix-platform/nist-controls/ac-18/
description: "Documents the Private Mendix Platform's compliance with the AC-18 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-18 control.

| Control ID | AC-18 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Establishes usage restrictions, configuration and connection requirements, and implementation guidance for wireless access.
* Authorizes wireless access to the information system prior to allowing such connections.

### Supplemental Guidance

Wireless technologies include, for example, microwave, packet radio (UHF/VHF), 802.11x, and Bluetooth. Wireless networks use authentication protocols (for example, EAP/TLS, PEAP), which provide credential protection and mutual authentication.

The following controls are related to this control:

* AC-2
* AC-3
* AC-17
* AC-19
* CA-3
* CA-7
* CM-8
* IA-2
* IA-3
* IA-8
* PL-4
* SI-4

For more information, refer to the NIST Special Publications 800-48, 800-94, and 800-97.

## Responsibility

### Customer Responsibility

The customer is responsible for establishing wireless access and usage restrictions, configuration and connection requirements, and access authorization prior to permitting wireless connections to the information system. Infrastructure implementers and operators are responsible for adhering to these restrictions.

## Guidance

Customers must define and document policies for the use of wireless technologies, including specifying usage restrictions, security requirements, allowed and prohibited device types, and network configuration standards (for example, acceptable authentication protocols).

Wireless access must be explicitly authorized by the customer before any device or user is permitted to connect to the information system.

Infrastructure implementers and operators are responsible for configuring and managing wireless infrastructure in compliance with the customer's restrictions and requirements, such as implementing strong encryption (for example, WPA2-Enterprise with EAP/TLS), segregation of wireless networks, or limitations on broadcast range.

Customers should regularly review wireless access configurations, maintain an inventory of authorized devices and users, and provide security awareness training on wireless access risks and procedures.

Mendix does not define, implement, or enforce wireless access controls within the Platform. All requirements and controls are managed by the customer and their implementation teams.