---
title: "CM-07 (01) - Least Functionality (Periodic Review)"
linktitle: "CM-07 (01)"
url: /private-mendix-platform/nist-controls/cm-0701/
description: "Documents the Private Mendix Platform's compliance with the CM-0 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-07 (01) control.

| Control ID | CM-07 (01) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Reviews the information system at an organization-defined frequency to identify unnecessary or nonsecure functions, ports, protocols, and services.
* Disables organization-defined functions, ports, protocols, and services within the information system deemed to be unnecessary and/or nonsecure.

### Supplemental Guidance

The organization can either make a determination of the relative security of the function, port, protocol, and/or service, or base the security decision on the assessment of other entities. Bluetooth, FTP, and peer-to-peer networking are examples of less than secure protocols.

The following controls are related to this control:

* AC-18
* CM-7
* IA-2

## Responsibility

### Customer Responsibility

It is the customer's responsibility to periodically review the information system to identify unnecessary or nonsecure functions, ports, protocols, and services, and then disable them to reduce the attack surface. It is also the customer's responsibility to determine the appropriate frequency for these reviews.

## Guidance

### Customer Responsibility

#### Define and Document Restrictions

The customer should establish and perform periodic security reviews.

Define review frequency:

* Establish organization-defined review intervals (for example, monthly, quarterly, annually).
* Consider more frequent reviews for high-risk or internet-facing systems.
* Schedule reviews after significant system changes or threat landscape updates.
* Align reviews with vulnerability assessment cycles.

Conduct comprehensive reviews:

* Inventory all active functions, ports, protocols, and services.
* Assess each component for necessity and security posture.
* Review vendor security advisories and CVE databases.
* Evaluate based on current threat intelligence.
* Document findings and recommendations.

The Infra Implementer is responsible for:

* Implementing disablement of unnecessary or insecure functions at the infrastructure level.
* Updating firewall rules and network policies.
* Patching or removing insecure protocols from operating systems and containers.
* Hardening Kubernetes configurations to disable unnecessary features.
* Testing changes in non-production environments before production deployment.
* Ensuring infrastructure remains compliant with customer security requirements.

The App implementer is responsible for:

* Reviewing Mendix app functionality and removing unused features.
* Disabling unnecessary Mendix modules or widgets.
* Updating application configurations to remove insecure protocols.
* Removing deprecated or insecure integrations.
* Ensuring the Mendix app only exposes required services.
* Testing application functionality after changes.
