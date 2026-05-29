---
title: "CM-10 (01) - Software Usage Restrictions (Open Source Software)"
linktitle: "CM-10 (01)"
url: /private-mendix-platform/nist-controls/cm-1001/
description: "Documents the Private Mendix Platform's compliance with the CM-10 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-10 (01) control.

| Control ID | CM-10 (01) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization establishes organization-defined restrictions on the use of open source software.

### Supplemental Guidance

Open source software refers to software that is available in source code form. Certain software rights normally reserved for copyright holders are routinely provided under software license agreements that permit individuals to study, change, and improve the software. From a security perspective, the major advantage of open source software is that it provides organizations with the ability to examine the source code. However, there are also various licensing issues associated with open source software including, for example, the constraints on derivative use of such software.

## Responsibility

### Mendix Responsibility

Mendix clearly defines what open source software is used within our products, and ensures that the licenses of these components are able to be used for all customers in compliance with relevant local laws.

### Customer Responsibility

The Customer determines what restrictions on open source software are appropriate.

The Infra Implementer ensures and documents that only compliant open source components are used in the infrastructure.

The App Implementer ensures and documents that only compliant open source components are used in the Mendix App.

The Infra Operator and App Operator ensure ongoing compliance.

## Guidance

#### Mendix Responsibility

* SBOM generation and delivery

    Mendix provides a Software Bill of Materials (SBOM) for each product release, listing all OSS components, versions, and associated licenses.

* License compliance review

    Before introducing any OSS component into a product, Mendix reviews its license for commercial distribution, sublicensing, and embedding in proprietary software.

* OSS inventory maintenance

    Mendix maintains a customer‑accessible inventory of OSS components used in its products.

### Customer Responsibility

To meet this control requirement, customers, implementers, and operators should follow the guidance below.

#### Customers

1. Define OSS restrictions.

    The customer should establish an internal OSS policy covering the following:

        * Prohibited license types (for example, GPL, AGPL, SSPL).
        * Licenses requiring approval.
        * Rules on modifying or redistributing OSS within Mendix products.

2. Review the Mendix SBOM.

    The customer compares the Mendix SBOM against their OSS policy. If a component violates their policy, the customer either accepts the risk, requests an exception, or does not use the affected product version.

3. Accept Mendix OSS policy.

    The customer formally accepts the Mendix OSS policy and the OSS components included in Mendix products as part of procurement or security onboarding.

4. Ensure local law compliance.

    The customer ensures that using Mendix products (including embedded OSS) complies with local laws and export controls.

#### Infrastructure Implementers

Ensure and document that only compliant OSS components are used in the infrastructure.

* Maintain an infrastructure OSS inventory (OS, databases, containers, monitoring tools).
* Run automated license scanning (for example, Snyk, Trivy, Black Duck).
* Document approval status for each component.

#### App Implementers

Ensure and document that only compliant OSS components are used in the Mendix app.

* Check Java actions, JavaScript actions, Marketplace modules, and third‑party libraries.
* Verify licenses against the customer's OSS policy before adding any OSS.
* Maintain an application OSS register.

#### Infrastructure Operators

Ensure ongoing compliance of OSS components in the infrastructure.

* Periodically (for example, monthly) rescan infrastructure OSS.
* Monitor for license changes in updates.
* Use CI/CD pipelines to block non‑compliant components.

#### App Operators

Ensure ongoing compliance of OSS components in the running Mendix app.

* When upgrading Mendix product versions or Marketplace modules, re‑check SBOM changes.
* Verify that runtime scripts or configurations do not introduce additional OSS.
* If non‑compliant OSS is found in production, roll back or request an exception.

## Proof and Remarks

The following figure shows the process flowchart for Open Source Software clearing at Mendix:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-1001-1.png" class="no-border" >}}