---
title: "SA-10 (01) - Software and Firmware Integrity Verification"
linktitle: "SA-10 (01)"
url: /private-mendix-platform/nist-controls/sa-1001/
description: "Documents the Private Mendix Platform's compliance with the SA-10 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-10 (01) control.

| Control ID | SA-10 (01) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization requires the developer of the information system, system component, or information system service to enable integrity verification of software and firmware components.

## Responsibility

### Mendix Responsibility

* Mendix implements and provides documented software integrity verification procedures for all product releases, including the Mendix Runtime, Mendix Operator, Private Mendix Platform, and Studio Pro.

### Customer Responsibility

* The customer is responsible for determining acceptable integrity verification approaches.
* The Infra Implementer is responsible for verifying the integrity of the infrastructure and Private Mendix Platform components during implementation.
* The App Implementer is responsible for verifying the integrity of development tools and ensuring the Mendix App's integrity can be verified throughout its delivery.
* The Infra and App Operators are responsible for ongoing verification throughout the lifecycle of the solution.

## Guidance

### Customer Responsibility

* Verification mechanisms - Mendix provides various tools and techniques (for example, checksums, digital signatures, and secure one-way hashes) to detect unauthorized changes.
* Implementation check - It is the Infra Implementer and Operator's responsibility to ensure that all downloaded software components and updates are validated against Mendix-provided integrity markers before they are introduced into their implementation of Private Mendix Platform, the Mendix Runtime, Studio Pro, or other parts of the customer's Mendix landscape.

## Proof and Remarks

### Multi-Layered Software Integrity Verification and Secure Supply Chain

#### Vendor Artifact Verification and Sourcing (Infra Implementer)

* Official download portal verification - Private Mendix Platform installation binaries and command-line tools are obtained exclusively from the Mendix Download Portal.
* Signed container registry - Evidence of pulling Private Mendix Platform components and Runtime images exclusively from the Mendix Official Signed Registry. This ensures that the base images for the Private Mendix Platform Operator and associated services are authentic and trusted.

    For more information, see the following documents:
    
    * [Sigstore Overview](https://docs.sigstore.dev/about/overview/)
    * [Introduction | Kyverno](https://kyverno.io/docs/introduction/)

* Binary and CLI verification - As shown in the following screenshot, Mendix provides explicit checksums (SHA-256) for each release. The Infra Implementer performs mandatory verification of these hashes (for example, comparing the portal's `450b1cab...` string with the local file hash) before execution in the deployment environment. This ensures the integrity of the Private Mendix Platform installer and prevents the use of corrupted or tampered files.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-1001-1.png" class="no-border" >}}

#### Application Delivery and Runtime Integrity (App Implementer)

* Runtime self-checks - The Mendix Runtime incorporates built-in integrity verification mechanisms that perform self-checks of core components during application startup to detect unauthorized modifications.
* Development tooling validation - Verification that Mendix Studio Pro is obtained through official channels, with its integrity confirmed by Mendix's Digital Signature during the installation process.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-1001-2.png" class="no-border" >}}

* Deployment consistency - For custom Mendix apps, the CI/CD pipeline ensures that the build artifact's integrity is maintained from the development stage to the production environment, matching the approved versioned models.

    For more information, see the following documents:
    
    * NIST Special Publication 800-204D
    * [Verifying artifacts | SLSA](https://slsa.dev/spec/v1.0/verifying-artifacts)

#### Ongoing Compliance and Audit Trail

* Immutable digest logging - Deployment logs and GitLab records capture the specific Image Digests used in every release, providing a non-repudiable audit trail that proves the integrity of the software throughout its operational lifecycle.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-1001-3.png" class="no-border" >}}

* Vendor-guided integrity verification (shared responsibility) - The organization enforces software integrity by utilizing the official cryptographic SHA checksums and Image Digests provided by Mendix. As prescribed in Mendix's official guides, customers are required to download all Private Mendix Platform components, MX4PC stacks, and installation tools exclusively from authorized Mendix official channels. The integrity of these assets is manually verified by the customer by validating the SHA checksums or Image Digests prior to and during the installation process to ensure no tampering has occurred.

    For more information, refer to the screenshots and documentation above.

{{% alert color="info" %}}
While deployment is initiated through versioned tags (for example, `v1.2.3`), the organization captures and logs the unique Image Digest (SHA256) automatically generated by the Mendix Official Registry during the initial pull. By referencing this immutable digest in our deployment records, we ensure that the software image remains untampered and consistent with the vendor-certified baseline throughout its lifecycle.
{{% /alert %}}
