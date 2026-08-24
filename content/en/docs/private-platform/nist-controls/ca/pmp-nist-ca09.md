---
title: "CA-09 Internal System Connections"
linktitle: "CA-09"
url: /private-mendix-platform/nist-controls/ca-09/
description: "Documents the Private Mendix Platform's compliance with the CA-09 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CA-09 control.

| Control ID | CA-09 |
| --- | --- |
| Control category | CA - Security Assessment and Authorization |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Authorizes internal connections of organization-defined information system components or classes of components to the information system.
* Documents, for each internal connection, the interface characteristics, security requirements, and the nature of the information communicated. 

### Supplemental Guidance

This control applies to connections between organizational information systems and (separate) constituent system components (that is, intra-system connections) including, for example, system connections with mobile devices, notebook or desktop computers, printers, copiers, facsimile machines, scanners, sensors, and servers. 

Instead of authorizing each individual internal connection, organizations can authorize internal connections for a class of components with common characteristics and/or configurations, for example, all digital printers, scanners, and copiers with a specified processing, storage, and transmission capability or all smart phones with a specific baseline configuration.

The following controls are related to this control:

* [AC-03](/private-mendix-platform/nist-controls/ac-03/)
* [AC-04](/private-mendix-platform/nist-controls/ac-04/)
* [AC-18](/private-mendix-platform/nist-controls/ac-18/)
* [AC-19](/private-mendix-platform/nist-controls/ac-19/)
* [AU-02](/private-mendix-platform/nist-controls/au-02/)
* [AU-12](/private-mendix-platform/nist-controls/au-12/)
* [CA-07](/private-mendix-platform/nist-controls/ca-07/)
* CM-02
* IA-03
* SC-07
* [SI-04](/private-mendix-platform/nist-controls/si-04/)

## Responsibility

### Customer Responsibility

Customer is responsible for implementing this control in an appropriate manner in their organization. This includes establishing policies and procedures for authorizing and documenting all internal connections between information system components to ensure compliance with federal requirements. The customer must ensure that interface characteristics, security requirements, and the nature of information communicated for each internal connection are documented, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and FIPS 200, which establish requirements for authorizing and documenting internal system connections within federal information systems. Customers operating within a FedRAMP or DoD SRG environment must ensure all internal connections are formally authorized, documented with interface characteristics and security requirements, and monitored throughout their lifecycle.

To meet these requirements, the customer must carry out the following actions:

1. Authorize and socument internal connections.

    The customer must authorize and document all internal connections made by the Mendix app and associated infrastructure. For each connection, the documentation must include interface characteristics, security requirements, and the nature of the information communicated, in accordance with NIST SP 800-53 Rev 4 CA-09 requirements.

2. Ensure authorized connections only.

    The Infra Implementer and App Implementer must ensure the infrastructure and Mendix app only make authorized connections as documented by the customer. This includes implementing network segmentation, access control lists, and connection validation mechanisms to prevent unauthorized internal connections per NIST SP 800-53 AC-3 and SC-7.

3. Maintain connection documentation over lifecycle.

    The Infra Operator and App Operator must ensure that these internal connections and the associated documentation stay current over the lifecycle of the solution. This includes performing periodic reviews of authorized connections, updating documentation when connections change, and removing or re-authorizing connections as the system evolves.
