---
title: "CM-07 (02) - Least Functionality (Prevent Program Execution)"
linktitle: "CM-07 (02)"
url: /private-mendix-platform/nist-controls/cm-0702/
description: "Documents the Private Mendix Platform's compliance with the CM-07 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-07 (02) control.

| Control ID | CM-07 (02) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system prevents program execution in accordance with one or more organization-defined policies regarding software program usage and restrictions, and rules authorizing the terms and conditions of software program usage.

### Supplemental Guidance

The following controls are related to this control:

* CM-8
* PM-5

## Responsibility

### Customer Responsibility

It is the customer's responsibility to establish and enforce policies or rules that define which software programs are authorized for use within the information system, and implement mechanisms to prevent the execution of any programs that do not comply with these policies or terms and conditions.

## Guidance

### Customer Responsibility

#### Customer

It is the responsibility of the customer to determine what policies and terms and conditions are required before the Mendix App is allowed to execute.

* Define the software execution approach (whitelisting, blacklisting, or hybrid).
* Establish the approval workflow and authorization requirements for software.
* Specify acceptable use terms and conditions.
* Identify approved software sources, repositories, and container image registries.
* Define code signing or digital signature requirements.
* Set execution restrictions based on user role, system type, or environment.
* Establish licensing and compliance requirements.
* Define policies for container image approval and vulnerability scanning.
* Communicate all policies to Infra Implementer and App Implementer.

#### Infra Implementer

It is the responsibility of the Infra Implementer to ensure the infrastructure complies with the policies defined by the Customer.

* Implement application whitelisting or execution control mechanisms at the infrastructure level.
* Configure platform security controls to enforce execution restrictions.
* Deploy admission controllers to validate software and container image approval status.
* Implement endpoint protection or application control solutions.
* Enforce code integrity and digital signature verification where required.
* Configure runtime security controls.
* Ensure infrastructure enforcement mechanisms align with Customer policies.

#### App Implementer

It is the responsibility of the App Implementer to ensure the Mendix App complies with the policies defined by the customer.

* Ensure the Mendix application meets all customer software approval requirements.
* Use only approved Mendix marketplace modules and components.
* Follow customer-defined secure development practices.
* Document all third-party dependencies and provide software bill of materials.
* Ensure the application complies with licensing and usage terms.
* Implement application-level execution controls as required by customer policies.
* Coordinate with customer for approval of any new modules or dependencies.

#### Infra Operator

It is the responsibility of the Infra Operator to ensure ongoing compliance of the infrastructure with the customer's policies.

* Monitor for unauthorized software execution attempts.
* Update execution control mechanisms as approved software changes.
* Investigate and respond to policy violations.
* Maintain and patch infrastructure-level enforcement tools.
* Audit container image deployments and runtime configurations.
* Report compliance status and incidents to customer.

#### App Operator

It is the responsibility of the App Operator to ensure ongoing compliance of the Mendix App with the customer's policies.

* Ensure deployed Mendix applications meet approval requirements.
* Monitor application runtime behavior for policy deviations.
* Coordinate with customer for approval of new modules or updates.
* Maintain application inventory and dependency tracking.
* Report any compliance deviations to customer.
* Ensure running applications remain within approved execution boundaries.