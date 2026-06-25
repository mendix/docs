---
title: "CM-07 - Least Functionality"
linktitle: "CM-07"
url: /private-mendix-platform/nist-controls/cm-07/
description: "Documents the Private Mendix Platform's compliance with the CM-07 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-07 control.

| Control ID | CM-07 |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Configures the information system to provide only essential capabilities.
* Prohibits or restricts the use of organization-defined functions, ports, protocols, or services.

### Supplemental Guidance

Information systems can provide a wide variety of functions and services. Some of the functions and services, provided by default, may not be necessary to support essential organizational operations (for example, key missions, functions). Additionally, it is sometimes convenient to provide multiple services from single information system components, but doing so increases risk over limiting the services provided by any one component. 

Where feasible, organizations limit component functionality to a single function per device (for example, email servers or web servers, but not both). Organizations review functions and services provided by information systems or individual components of information systems, to determine which functions and services are candidates for elimination (for example, Voice Over Internet Protocol, Instant Messaging, auto-execute, and file sharing). 

Organizations consider disabling unused or unnecessary physical and logical ports and protocols (for example, Universal Serial Bus, File Transfer Protocol, and Hyper Text Transfer Protocol) on information systems to prevent unauthorized connection of devices, unauthorized transfer of information, or unauthorized tunneling. Organizations can utilize network scanning tools, intrusion detection and prevention systems, and end-point protections such as firewalls and host-based intrusion detection systems to identify and prevent the use of prohibited functions, ports, protocols, and services.

The following controls are related to this control:

* AC-6
* CM-2
* RA-5
* SA-5
* SC-7

For more information, refer to the DoD Instruction 8551.01.

## Responsibility

### Customer Responsibility

It is the customer's responsibility to identify and document the essential capabilities required for the information system, and configuring the system to operate with only those capabilities enabled.

The customer shall define and maintain a list of prohibited or restricted functions, ports, protocols, and services appropriate to their environment, and implement controls (for example, firewalls, host-based protections, scanning tools) to enforce these restrictions.

The Infra Implementer and Operator are responsible for executing the configuration and ongoing enforcement of these restrictions across infrastructure components, while Mendix does not assume responsibility for this control.

## Guidance

### Customer Responsibility

#### Define and Document Restrictions

The customer must provide restrictions or approvals for various capabilities, functions, ports, protocols, or services:

* Document prohibited functions: Identify functions that are not needed (for example, Voice Over IP, Instant Messaging, file sharing, auto-execute features).
* Define allowed ports and protocols: Create an approved list of required ports and protocols, explicitly deny all others.
* Restrict services: Limit services to those essential for mission/business functions.
* Consider single-function-per-component: Where feasible, dedicate components to single functions (for example, separate database and application servers).

#### Coordinate Infrastructure Implementation

The customer must coordinate with the Infra Implementer to ensure infrastructure compliance:

* Provide clear security requirements and approved configurations.
* Review network segmentation and firewall rules.
* Ensure host-based firewalls are configured appropriately.
* Verify that unnecessary services are disabled at the OS and container level.

The Infra Implementer is responsible for:

* Implementing network-level restrictions (firewalls, security groups, network policies).
* Hardening infrastructure components (Kubernetes nodes, container runtimes).
* Disabling unnecessary operating system services.
* Applying CIS benchmarks or DISA STIGs as directed by the customer.

#### Coordinate Application Implementation

The customer must coordinate with the App Implementer to ensure Mendix application compliance:

* Define which Mendix features and integrations are permitted.
* Review and approve external service connections.
* Ensure the Mendix app only uses approved protocols and ports.

The App Implementer is responsible for:

* Configuring Mendix applications to use only approved integrations.
* Removing unused modules and features from Mendix apps.
* Implementing application-level access controls.
* Ensuring the app adheres to the principle of least functionality.
