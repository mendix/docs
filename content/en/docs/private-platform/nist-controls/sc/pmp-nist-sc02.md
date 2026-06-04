---
title: "SC-02 System and Communications Protection - Application Partitioning"
linktitle: "SC-02"
url: /private-mendix-platform/nist-controls/sc-02/
description: "Documents the Private Mendix Platform's compliance with the SC-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-02 control.

| Control ID | SC-02 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system separates user functionality (including user interface services) from information system management functionality.

### Supplemental Guidance

Information system management functionality includes, for example, functions necessary to administer databases, network components, workstations, or servers, and typically requires privileged user access. The separation of user functionality from information system management functionality is either physical or logical. Organizations implement separation of system management-related functionality from user functionality by using different computers, different central processing units, different instances of operating systems, different network addresses, virtualization techniques, or combinations of these or other methods, as appropriate. This type of separation includes, for example, web administrative interfaces that use separate authentication methods for users of any other information system resources. Separation of system and user functionality may include isolating administrative interfaces on different domains and with additional access controls.

The following controls are related to this control:

* SA-04
* SA-08
* SC-03

## Responsibility

### Shared Responsibility

Mendix and the customer are both responsible for their respective parts.

## Guidance

### Mendix Responsibility

The Mendix products inherently separate user functionality from administrative and system management functionality:

* Private Mendix Platform separates administrative and deployment permissions for the system and by individual apps.
* Administrative interfaces require separate authentication and elevated privileges.
* Regular users cannot access system management functions.
* The Mendix Runtime separates application logic from platform management.
* Different authentication mechanisms are used for user access versus administrative access.
* Role-based access control (RBAC) enforces separation between user and admin roles.

#### Examples of Separation

* Private Mendix Platform administrative console requires separate authentication from application user login.
* Kubernetes cluster administration is separate from application deployment.
* Database administration is separate from application data access.

### Customer Responsibility

It is the customer's responsibility to:

* Indicate what level of separation between user interface and information system management functionality is required.
* Define roles and permissions for administrative functions.
* Establish policies for accessing administrative interfaces.

#### Implementer Responsibilities

* Infra Implementer: Ensure that infrastructure and administrative user interfaces are separated from regular user interfaces.
* App Implementer: Separate administrative and regular user interfaces as dictated by the Customer.
* App Implementer: Implement role-based access controls to enforce separation.

#### Operator Responsibilities

* Infra Operator: Ensure ongoing compliance with separation requirements.
* App Operator: Verify that separation is maintained during application updates.

## Proof and Remarks

The Private Mendix Platform UI shows different interfaces for admins and for regular users.

The Admin home page showing all available admin actions:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-02-1.png" class="no-border" >}}

The User home page showing only actions available to users:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-02-2.png" class="no-border" >}}
