---
title: "CM-08 - Information System Component Inventory"
linktitle: "CM-08"
url: /private-mendix-platform/nist-controls/cm-08/
description: "Documents the Private Mendix Platform's compliance with the CM-08 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-08 control.

| Control ID | CM-08 |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization:
* Develops and documents an inventory of information system components that:

    * Accurately reflects the current information system.
    * Includes all components within the authorization boundary of the information system.
    * Is at the level of granularity deemed necessary for tracking and reporting.
    * Includes organization-defined information deemed necessary to achieve effective information system component accountability.

* Reviews and updates the information system component inventory at an organization-defined frequency.

### Supplemental Guidance

Organizations may choose to implement centralized information system component inventories that include components from all organizational information systems. In such situations, organizations ensure that the resulting inventories include system-specific information required for proper component accountability (for example, information system association, information system owner).

Information deemed necessary for effective accountability of information system components includes, for example, hardware inventory specifications, software license information, software version numbers, component owners, and for networked components or devices, machine names and network addresses. Inventory specifications include, for example, manufacturer, device type, model, serial number, and physical location.

The following controls are related to this control:
* CM-02
* [CM-06](/private-mendix-platform/nist-controls/cm-06/)
* PM-05

For more information, refer to NIST Special Publication 800-128.

## Responsibility

### Mendix Responsibility

* Provide detailed documentation identifying the inventory of all components that are part of the following Mendix products:

    * Mendix Runtime
    * Mendix Operator
    * Studio Pro
    * Private Mendix Platform

* Update the component inventory documentation with each new version release of the above products.

### Customer Responsibility

Customer must define inventory granularity and required component details , establish a review frequency, and coordinate with infrastructure and application implementers and operators to keep both infrastructure and Mendix app inventories accurate and up to date.  

It is the responsibility of the Infra Implementer to provide a full system component list of the infrastructure, and the App Implementer to provide a full component list for the Mendix app.  

It is the responsibility of the Infra Operator to keep the infrastructure list up to date, and the App Operator to keep the Mendix app list up to date.

## Guidance

### Mendix Responsibility

Mendix formally documents and identifies all components included in:

* Mendix Runtime
* Mendix Operator
* Studio Pro
* Private Mendix Platform

The documentation includes component names, versions, dependencies, and other information necessary for customers to maintain accountability over components within their authorization boundary.

Whenever a new version of any of the above products is released, Mendix updates the corresponding component inventory documentation to reflect:

* New components added
* Version changes
* Removed or deprecated components
* Updated dependencies

### Customer Responsibility

To meet this control requirement, the customer should follow the guidance below.

#### Define Inventory Requirements

The customer must define the level of detail and granularity required for their information system component inventory to achieve effective component accountability. This includes determining the scope of components to be tracked (all components within the authorization boundary), the types of information to be captured for each component (such as hardware specifications, software versions, network addresses, and ownership), and the appropriate granularity for tracking and reporting needs. These requirements should be documented based on the customer's own risk, compliance, and operational context.

#### Establish Review and Update Frequency

The customer must establish how often the component inventory is reviewed and updated. The frequency may be continuous (real-time), periodic (such as monthly or quarterly), or event-driven (triggered by system changes or incidents), depending on the customer's operational environment and compliance obligations. The customer should ensure that inventory updates occur as an integral part of component installations, removals, and system updates.

#### Integrate Mendix Component Information

The customer is responsible for obtaining and incorporating Mendix-provided component information into their own asset inventory. Mendix provides detailed component inventory documentation, including a Software Bill of Materials (SBOM), for Mendix Runtime, Mendix Operator, Studio Pro, and Private Mendix Platform, updated with each new version release. The customer can ingest this information into their asset inventory system.

#### Coordinate with Implementation and Operations Teams

The customer must work with Infra Implementer, App Implementer, Infra Operator and App Operator to maintain accurate inventories.

##### Infra Implementer

The Infra Implementer must perform for the following tasks:

* Provide complete infrastructure component inventory.
* Document all virtual machines, containers, network devices.
* Specify Kubernetes cluster components and configurations.
* Include operating system versions and patch levels.

##### App Implementer

The App Implementer must perform for the following tasks:

* Provide complete Mendix application component inventory.
* Document all deployed Mendix apps and their versions.
* List all Mendix modules, widgets, and third-party integrations.
* Specify custom code components and dependencies.

##### Infra Operator

The Infra Operator must perform for the following tasks:

* Keep infrastructure inventory up to date as changes occur.
* Update inventory during patching, upgrades, and maintenance.
* Detect and report unauthorized infrastructure components.
* Maintain accuracy of network and system information.

##### App Operator

The App Operator must perform for the following tasks:

* Keep Mendix app inventory up to date as apps are deployed or updated.
* Track app lifecycle (development, staging, production).
* Update inventory when apps are modified or decommissioned.
* Monitor for unauthorized application deployments.

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

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-08-1.png" class="no-border" >}}