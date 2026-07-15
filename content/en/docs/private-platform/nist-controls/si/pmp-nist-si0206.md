---
title: "SI-02 (06) Flaw Remediation - Removal of Previous Versions of Software or Firmware"
linktitle: "SI-02 (06)"
url: /private-mendix-platform/nist-controls/si-0206/
description: "Documents the Private Mendix Platform's compliance with the SI-02 (06) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-02 (06) control.

| Control ID | SI-02 (06) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization removes organization-defined software and firmware components after updated versions have been installed.

### Supplemental Guidance

Previous versions of software components that are not removed from the information system after updates have been installed may be exploited by adversaries. Some information technology products may remove older versions of software automatically from the information system.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the Customer.

## Guidance

### Shared Responsibility

#### Mendix - Private Mendix Platform

For Private Mendix Platform upgrades, when upgrading a component version, the old version of the corresponding component is automatically removed. There is no coexistence of new and old versions. Customers do not need to manually remove old component versions.

The Private Mendix Platform upgrade process ensures the following:

* Old container images are replaced with new images during upgrade.
* Previous versions of Private Mendix Platform components are not retained after a successful upgrade.
* Kubernetes deployment rollout strategies ensure clean replacement of old pods.
* Old `PersistentVolumeClaims` and `ConfigMaps` are updated or removed as needed.

#### Customer - Infrastructure and Organization

The customer is responsible for:

* Defining what software and firmware components need to be removed after upgrades.
* Establishing procedures for verifying the removal of old versions.
* Documenting exceptions where old versions must be retained temporarily.

##### Implementer and Operator Responsibilities

* Infra Implementer - Ensure infrastructure components comply with this control.
* Infra Operator - Remove old versions of infrastructure software during upgrades as dictated by the customer.
* App Operator - Remove old versions of custom application dependencies during upgrades as dictated by the customer.

## Proof and Remarks

For information about upgrading Private Mendix Platform, see [Upgrading the Private Mendix Platform](/private-mendix-platform/quickstart/#upgrade).

Helm is the package manager for Kubernetes which handles the deployment and management of applications within the environment. Whenever the Private Mendix Platform instance is upgraded, the old version is automatically removed by Helm, and there is no coexistence of new and old versions.

{{< figure src="/attachments/private-platform/nist-si/nist-si-0206-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-si/nist-si-0206-2.png" class="no-border" >}}