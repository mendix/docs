---
title: "CM-08 (01) - Information System Component Inventory (Updates During Installations or Removals)"
linktitle: "CM-08 (01)"
url: /private-mendix-platform/nist-controls/cm-0801/
description: "Documents the Private Mendix Platform's compliance with the CM-08 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-08 (01) control.

| Control ID | CM-08 (01) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization updates the inventory of information system components as an integral part of component installations, removals, and information system updates.

## Responsibility

### Mendix Responsibility

Mendix provides component inventory documentation for Mendix Runtime, Mendix Operator, Studio Pro, and Private Mendix Platform. With each new version release, Mendix updates this documentation to clearly identify all components, versions, and dependencies in that release. This allows customers to reference accurate component information when they perform installations, removals, or updates of Mendix products.

### Customer Responsibility

Inventory updates must be executed concurrently with component installations, removals, or system updates.

The customer is responsible for establishing the processes and controls necessary to enable this capability, including the assignment of the following roles:

* The Infra Implementer must supply the complete infrastructure component list.
* The App Implementer must supply the complete Mendix application component list.
* The Infra Operator must maintain the infrastructure list and apply updates whenever changes occur, including patching, upgrades, and maintenance activities.
* The App Operator must maintain the Mendix application list and apply updates immediately upon deployment, modification, or decommission of any application component.

Additionally, the customer must define the required level of granularity for the component inventory and establish the frequency of inventory reviews.

## Guidance

### Mendix Responsibility

Mendix provides and maintains detailed component inventory documentation for the Mendix Runtime, Mendix Operator, Studio Pro, and Private Mendix Platform, and updates this documentation with each new version release.

### Customer Responsibility

To meet this control requirement, the customer should follow the guidance below.

#### Integrate Inventory Updates into Change Management

Every change request or ticket for an installation, removal, or update must include an inventory update as a required step before the ticket can be closed. Do not allow operational changes to be completed without verifying that the inventory accurately reflects the change.

#### Define Synchronous Workflows

Establish clear workflows for each type of change. For any installation, removal, or update, the inventory must be updated immediately after the change is completed and before the change ticket is closed. Accuracy of the updated inventory should be verified as part of the same workflow.

#### Assign Clear Roles

Ensure the following roles understand their inventory update obligations:

* Infra Implementer - Responsible for providing a full system component list of the infrastructure.
* App Implementer - Responsible for providing a full component list for the Mendix app.
* Infra Operator - Responsible for updating infrastructure inventory during patching, upgrades, and maintenance activities.
* App Operator - Responsible for updating Mendix application inventory during app deployments, updates, and removals.

#### Leverage Mendix Documentation for Update Events

When performing a Mendix platform update, the customer should:

* Obtain the SBOM and release documentation for the new version from Mendix.
* Compare it against the previous version to identify what has changed (new components, version bumps, removed components).
* Update the customer's asset inventory to reflect these changes at the time the platform update is deployed.

## Proof and Remarks

[Conveyor](https://app.conveyor.com/profile/mendix) includes the following portals:

* [Mendix Operator](https://app.conveyor.com/profile/mendix/d/mendix-operator/cwqIsc)
* [PMP Portal SBOM](https://app.conveyor.com/profile/mendix/d/pmp-portal-sbom/87vRAn)
* [Runtime](https://app.conveyor.com/profile/mendix/d/runtime/hiMac4)
* [Studio Pro Components](https://app.conveyor.com/profile/mendix/d/studio-pro-components/98TuRq)

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0801-1.png" class="no-border" >}}

For more information, refer to the following:

* [Mendix on Kubernetes Release Notes](/releasenotes/developer-portal/mendix-for-private-cloud/)
* [LTS, MTS, and Monthly Releases](/releasenotes/studio-pro/lts-mts/)
* [Private Mendix Platform Release Notes](/releasenotes/private-platform/)
* [SBOM Generation](/refguide/sbom-generation/)