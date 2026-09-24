---
title: "CM-05 (03) Access Restrictions for Change - Signed Components"
linktitle: "CM-05 (03)"
url: /private-mendix-platform/nist-controls/cm-0503/
description: "Documents the Private Mendix Platform's compliance with the CM-05 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-05 (03) control.

| Control ID | CM-05 (03) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system prevents the installation of organization-defined software and firmware components without verification that the component has been digitally signed using a certificate that is recognized and approved by the organization. 

### Supplemental Guidance

Software and firmware components prevented from installation unless signed with recognized and approved certificates include, for example, software and firmware version updates, patches, service packs, device drivers, and basic input output system (BIOS) updates. Organizations can identify applicable software and firmware components by type, by specific items, or a combination of both. Digital signatures and organizational verification of such signatures, is a method of code authentication.

The following controls are related to this control:

* [CM-07](/private-mendix-platform/nist-controls/cm-07/)
* [SC-13](/private-mendix-platform/nist-controls/sc-13/)
* SI-07

## Responsibility

### Mendix Responsibility

Mendix is responsible for implementing and maintaining this control at the platform level.

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes defining which software and firmware components must be digitally signed and which certificates are recognized and approved to ensure compliance with federal requirements. The customer must ensure that digital signature verification policies, approved certificate lists, and enforcement mechanisms are documented, reviewed, and enforced within their environment.

#### Infra Implementer

The Infra Implementer is responsible for ensuring that proper CI/CD deployment steps are implemented and restrict deployment as expected based on digital signature requirements.

#### App Implementer

The App Implementer is responsible for ensuring that the Mendix app is appropriately signed as dictated by the Customer.

#### Infra Operator

The Infra Operator is responsible for ensuring that the infrastructure remains compliant with digital signature requirements through changes.

#### App Operator

The App Operator is responsible for ensuring that the Mendix app remains compliant with digital signature requirements through changes.

## Guidance

### Mendix Responsibility

The Private Mendix Platform is delivered as a self-contained release bundle intended to run in air-gapped environments with no dependency on Mendix Cloud connectivity. Mendix publishes platform-specific installer bundles for the supported operating systems used to run the installer tooling, including Windows, macOS, and Linux. 

The inspected Windows release package (`pmp-binary-windows`) contains Windows PE console executables for *installer.exe*, *mxpc-cli.exe*, and *mx-pclm-cli.exe*. Inspection of the binaries shows Go build markers, which is consistent with the installer tooling being compiled from Go and packaged per operating system. 

Regardless of operating system, the release bundle model is the same. The bundle contains vendored deployment tools under *Tools/* (including Helm and Helmfile), platform and component Helm charts under *charts/*, Helmfile templates under *helmfile.d/*, and pre-packaged container image tar archives under *images/* for the core Private Mendix Platform components that were observed in the release (`mendix-private-platform`, `privatecloud-license-manager`, `svix-server`, and `mxpc-test`). 

Add-on components such as Build Agent, Private Cloud components, Maia, and PDF Document Generation are distributed as separate release bundles through the same [Private Mendix Platform download portal](http://privateplatform.mendix.com/). 

Mendix publishes a SHA-256 checksum for each release zip on the download portal so customers can verify the integrity of the downloaded bundle before extraction. Mendix does not currently publish a detached signature, public signing key, or per-image Cosign signature for the Private Mendix Platform installer bundle itself. Integrity therefore starts with the published checksum on the release zip and continues with customer-controlled verification after the bundled image tar files are migrated into the customer's private registry via installer init migrate. 

Private Mendix Platform can be installed in FIPS-compliant mode end-to-end (Mendix Runtime, Private Mendix Platform, Mendix Operator, Studio Pro). For deployment and integration details, refer to the [Private Mendix Platform documentation](/private-mendix-platform/) and the [Quick Start Guide](/private-mendix-platform/quickstart/).

Meeting these requirements requires the following actions:

1. Verify the release bundle checksum before extraction.

    Before extracting any Private Mendix Platform release zip downloaded from the Private Mendix Platform download portal, compute the SHA-256 checksum of the file and compare it byte-for-byte to the checksum published on the portal for that release; reject the bundle on any mismatch.

2. Treat the bundled images and charts as the controlled release contents.

    After checksum verification, extract the bundle and inventory the executables, Helm charts, Helmfile templates, and image tar files that will be introduced into the environment. Use the supplied `installer init migrate` workflow to push only those bundled images into the customer-controlled private registry, and treat that registry as the single source of truth for Private Mendix Platform image pulls so no Private Mendix Platform workload pulls from outside the customer boundary.

3. Pin and track approved Private Mendix Platform versions and resulting digests.

    Maintain an internal record of the Private Mendix Platform and add-on release versions in use, the SHA-256 of each downloaded zip, the relevant installer binaries and bundled charts introduced from that release, and the resulting image digests in the private registry, so every install or upgrade is traceable to a verified Mendix release.

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and FIPS 186-4 (Digital Signature Standard), which establish requirements for verifying the authenticity of software and firmware components through digital signatures before installation. Customers operating within a FedRAMP or DoD SRG environment must ensure that their systems prevent the installation of unauthorized software and firmware by requiring digital signature verification using organization-approved certificates.

To meet these requirements, the customer must carry out the following actions:

1. Define the trusted release and signing policy.

    The customer must define which Private Mendix Platform release bundles, mirrored platform images, application artifacts, and supporting software components must be verified by checksum versus digital signature, and which certificates or signing keys are recognized and approved by the organization.
    
    This includes establishing the approved source for Private Mendix Platform release zips from the download portal, the SHA-256 verification procedure for those bundles, and the list of approved certificate authorities or signing keys used for customer-signed mirrored images and application artifacts in accordance with FIPS 186-4 and NIST SP 800-53 SC-13.

2. Implement checksum and signature verification in delivery pipelines.

    The Infra Implementer must ensure that Private Mendix Platform release bundles are checksum-verified before extraction and mirroring, and that proper CI/CD and admission-control steps are implemented to verify customer-applied digital signatures on mirrored platform images before installation. The App Implementer must ensure that the Mendix App is signed and verified as dictated by the customer before deployment.

3. Maintain ongoing compliance through changes.

    The Infra Operator and App Operator must ensure that the infrastructure and Mendix App remain compliant with checksum and digital signature verification requirements through system changes. This includes verifying the published checksum for every new Private Mendix Platform or add-on release bundle, and verifying signatures on mirrored images, application artifacts, patches, updates, and new components before deployment per NIST SP 800-53 SI-7 software integrity requirements.

#### Infra Implementer

The Infra Implementer is responsible for implementing the registry, CI/CD, and Kubernetes-layer controls that establish a chain of trust for every component pulled into the Private Mendix Platform environment, including the bundled Private Mendix Platform and add-on container images, Helm charts, OS packages on worker nodes, and node-level firmware. 

Because Mendix distributes Private Mendix Platform through a checksum-verified release bundle rather than through a signed upstream registry, cryptographic signing and admission enforcement are performed by the customer after the bundled image tar files are imported into the customer-controlled private registry.

The Infra Implementer must perform the following tasks:

1. Establish a trusted mirror workflow for Private Mendix Platform images.

    After verifying the SHA-256 checksum of each Private Mendix Platform release zip from the Private Mendix Platform download portal, extract the bundled image tar files and mirror them into the customer's private registry using installer init migrate, then sign each pushed image inside the customer pipeline (for example with Cosign and a customer-approved key stored in a KMS/HSM) so downstream verification has a customer-controlled signature to check.

2. Enforce image signature verification at cluster admission.

    Deploy a cluster admission policy (Kyverno verifyImages, OPA Gatekeeper, or Connaisseur) configured with the Customer-approved keys, requiring a valid signature and digest pin on every image pulled into Private Mendix Platform namespaces; combine with registry pull-policy restrictions so only the customer-controlled mirror can serve Private Mendix Platform images.

3. Harden the node OS and trust store.

    Use only GPG-signed OS package repositories on worker nodes, enable Secure Boot and signed kernel modules, and centrally manage the organization trust store (approved CA roots, customer Cosign public keys, revocation lists) via configuration management with OCSP/CRL checking enabled.

#### App Implementer

The App Implementer is responsible for ensuring that the Mendix application artifact (MDA), its deployment image, and all third-party Marketplace modules and runtime dependencies are digitally signed within the customer's build pipeline and that the deployment process refuses anything unsigned or unverified. Private Mendix Platform itself runs apps via the Mendix Operator using an `oci-image://` source URL pointing at the customer registry, so the signing boundary lives in the customer pipeline that produces that image.

The App Implementer must perform the following tasks:

1. Sign the MDA and the application container image.

    In the build pipeline, generate a detached signature for the MDA (Cosign blob signing or GPG) and sign the resulting application container image with Cosign using a customer-approved key, publishing both the signature and a CycloneDX SBOM alongside the image in the private registry referenced by the Private Mendix Platform SourceUrl.

2. Verify Marketplace modules and dependencies at build time.

    Validate every Marketplace module (imported through the private Marketplace hosted inside Private Mendix Platform), Java or JS library, and third-party dependency against its published checksum or signature during the build, and fail the build on any mismatch or missing signature; record verification evidence as a build attestation.

3. Document and restrict access to signing keys.

    Document the application signing process - which keys or certificates are used, where keys are stored (HSM or KMS preferred), who can use them, and the verification steps the deployment pipeline performs - and review the documentation on each release.

#### Infra Operator

The Infra Operator is responsible for ensuring that infrastructure components remain compliant with digital signature requirements through ongoing operations, including patches, cluster upgrades, node OS updates, and Private Mendix Platform platform upgrades delivered as new release zips from the Private Mendix Platform download portal.

The Infra Operator must perform the following tasks:

1. Verify checksums and signatures before applying infrastructure changes.

    Before applying any cluster, node, or Private Mendix Platform platform update, verify the SHA-256 checksum of every Private Mendix Platform/add-on release zip against the value published on the Private Mendix Platform download portal, run cosign verify against the customer-applied signatures on the mirrored images and Helm charts, and validate GPG signatures on OS packages against the organization-approved key set; reject any update that fails verification.

2. Continuously monitor admission and pipeline enforcement.

    Verify on a defined cadence that the admission controller is in enforce (not audit) mode, that signature-verification policies cover all Private Mendix Platform namespaces, and that deployed image digests still match the customer-signed manifest; alert on drift or policy bypass.

3. Report and contain verification failures.

    Document every checksum or signature verification failure, block the affected component from installation, and notify the customer through the change-management process so the failure is investigated and resolved before any retry.

#### App Operator

The App Operator is responsible for ensuring that the deployed Mendix application remains compliant with digital signature requirements throughout its lifecycle, including releases, hotfixes, and Marketplace module updates.

The App Operator must perform the following tasks:

1. Verify application artifacts before each deployment.

    Before deploying any MDA or application container image referenced through Private Mendix Platform, run cosign verify on the application image and perform detached-signature verification on the MDA against the customer-approved key set, and reject any artifact that is unsigned, fails verification, or is not pinned by digest.

2. Continuously monitor application deployment compliance.

    Verify that the application deployment pipeline still enforces signature verification, that the running application image digest matches the customer-signed release manifest stored in the private registry, and that no unsigned Marketplace module or unverified dependency has been added since the last release.

3. Maintain a deployment and verification audit trail.

    Retain records of every application deployment - artifact digest, signature verification result, signing key identity, SBOM reference, deployer identity, and the specific application artifact version promoted through Private Mendix Platform - to support compliance auditing and incident investigation.

## Proof and Remarks

### Studio Pro

The Studio Pro Windows and Mac installers are signed using Microsoft Trusted Signing and the *Mendix Technology B.V.* validated organizational identity. For more information, see [Installing Mendix Studio Pro - Certificates](/refguide/install/#signing-certificates).

### Private Mendix Platform

In a pending release, Private Mendix Platform will add a signed installer where all sub-components are also signed.

### Download and Image Management

On the Download Portal, Mendix provides installers for different operating systems, along with checksums:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0503-1.png" class="no-border" >}}

On the **Image Management** page, the user can view the required images for Private Mendix Platform installation and use. It is possible to export an image manifest, then synchronize the image with the synchronization tool:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0503-2.png" class="no-border" >}}
