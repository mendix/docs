---
title: "SC-04 System and Communications Protection - Information in Shared Resources"
linktitle: "SC-04"
url: /private-mendix-platform/nist-controls/sc-04/
description: "Documents the Private Mendix Platform's compliance with the SC-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-04 control.

| Control ID | SC-04 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Mendix - Operator, Customer - Infra, Customer - Org |

## Control

The information system prevents unauthorized and unintended information transfer via shared system resources.

### Supplemental Guidance

This control prevents information, including encrypted representations of information, produced by the actions of prior users/roles (or the actions of processes acting on behalf of prior users/roles) from being available to any current users/roles (or current processes) that obtain access to shared system resources (for example, registers, main memory, hard disks) after those resources have been released back to information systems. The control of information in shared resources is also commonly referred to as object reuse and residual information protection. 

This control does not address: 

* Information remanence which refers to residual representation of data that has been nominally erased or removed.
* Covert channels (including storage and/or timing channels) where shared resources are manipulated to violate information flow restrictions.
* Components within information systems for which there are only single users/roles.

The following controls are related to this control:

* AC-3
* AC-4
* MP-6

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

The Mendix Runtime and MX4PC (Operator) support separating app information to prevent unauthorized and unintended information transfer:

* The Mendix Runtime supports separating application information into one or multiple separate databases as required.
* Kubernetes pods are automatically separated by design, preventing information sharing between applications.
* Each application instance has isolated memory space.
* Database connections are scoped to individual applications.
* Kubernetes namespaces provide logical isolation between applications.

#### Resource Isolation Mechanisms

* Memory isolation: Each pod has isolated memory that is not shared with other pods.
* Network isolation: Kubernetes network policies control communication between pods.
* Process isolation: Processes in one pod cannot access resources of another pod.

### Customer Responsibility

It is the customer's responsibility to:

* Identify the appropriate level of information separation based on data sensitivity. 
* Define policies to prevent information transfer via shared resources.
* Determine whether separate databases are required for different applications or data classifications.

#### Implementer Responsibilities

* Infra Implementer: Separate information among databases for the Mendix App and MX4PC implementation as required by Customer policy.
* App Implementer: Configure database separation and isolation as dictated by the Customer.
* App Implementer: Ensure that applications do not share sensitive resources inappropriately.

#### Operator Responsibilities

* Infra Operator: Ensure ongoing compliance with information separation policies.
* App Operator: Verify that resource isolation is maintained during application updates.

## Proof and Remarks

Resource isolation is achieved by deploying Private Mendix Platform and application environments in discrete pods, ensuring strict process and memory sandboxing between system components.

Private Mendix Platform pod:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-04-1.png" class="no-border" >}}

Application pod:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-04-2.png" class="no-border" >}}

Private Mendix Platform and hosted applications utilize distinct database instances with independent authentication, ensuring logical and administrative data separation.

Private Mendix Platform database:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-04-3.png" class="no-border" >}}

Application database:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-04-4.png" class="no-border" >}}
