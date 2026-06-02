---
title: "AC-17 (03) Remote Access (Managed Access Control Points)"
linktitle: "AC-17 (03)"
url: /private-mendix-platform/nist-controls/ac-1703/
description: "Documents the Private Mendix Platform's compliance with the AC-17 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-17 (03) control.

| Control ID | AC-17 (03) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The information system routes all remote accesses through an organization-defined number of managed network access control points.

### Supplemental Guidance

Limiting the number of access control points for remote accesses reduces the attack surface for organizations. Organizations consider the Trusted Internet Connections (TIC) initiative requirements for external network connections.

The following controls are related to this control:

* SC-7

## Responsibility

### Customer Responsibility

Customers are responsible for ensuring that remote access to their information systems is routed through the required number of managed network access control points, as defined by their organization. The creation, configuration, and maintenance of network infrastructure for access control is the responsibility of the infrastructure implementer and operator.

## Guidance

The customer, along with the infrastructure implementer and operator, must design and maintain a network topology that routes all remote access sessions through a defined number of managed network access control points (for example, firewalls, VPN gateways, DMZ appliances, and so on), in line with organizational policy and regulatory requirements.

The infrastructure implementer or operator is responsible for configuring and maintaining these access control points, ensuring their effectiveness and compliance with security standards such as Trusted Internet Connections (TIC) or similar initiatives.

Customers should periodically review access control point configuration and placement to verify all remote access is properly routed and monitored, reducing potential attack surfaces.

Any changes to access control points should be documented and tested to ensure continued compliance and operational effectiveness.

Mendix does not create, configure, or maintain network access control points in Private Mendix Platform. All such controls are managed at the infrastructure level by the customer and their designated providers.