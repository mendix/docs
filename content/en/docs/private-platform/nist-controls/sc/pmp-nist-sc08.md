---
title: "SC-08 System and Communications Protection - Transmission Confidentiality and Integrity"
linktitle: "SC-08"
url: /private-mendix-platform/nist-controls/sc-08/
description: "Documents the Private Mendix Platform's compliance with the SC-08 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-08 control.

| Control ID | SC-08 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FedRAMP Moderate |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The information system protects the confidentiality and integrity of transmitted information.

### Supplemental Guidance

This control applies to both internal and external networks and all types of information system components from which information can be transmitted (for example, servers, mobile devices, notebook computers, printers, copiers, scanners, facsimile machines). Communication paths outside the physical protection of a controlled boundary are exposed to the possibility of interception and modification. Protecting the confidentiality and/or integrity of organizational information can be accomplished by physical means (for example, by employing protected distribution systems) or by logical means (for example, employing encryption techniques). 

Organizations relying on commercial providers offering transmission services as commodity services rather than as fully dedicated services (that is, services which can be highly specialized to individual customer needs), may find it difficult to obtain the necessary assurances regarding the implementation of needed security controls for transmission confidentiality and integrity. In such situations, organizations determine what types of confidentiality or integrity services are available in standard, commercial telecommunications service packages. If it is infeasible or impractical to obtain the necessary security controls and assurances of control effectiveness through appropriate contracting vehicles, organizations implement appropriate compensating security controls or explicitly accept the additional risk.

The following controls are related to this control:

* AC-17
* PE-4

For more information, refer to the NIST Special Publications 800-52, 800-77, 800-81, 800-113, and 800-177.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

Mendix provides full encryption at rest and encryption in transit through the Mendix Runtime and Mendix Operator:

* All information in the Private Mendix Platform is encrypted at rest and in transit.
* The Mendix Runtime supports TLS encryption for all network communications.
* HTTPS/TLS is used for all web traffic to Mendix applications.
* Database connections can be encrypted using TLS.
* Inter-service communication within Kubernetes can be encrypted using service mesh (Istio).
* File uploads and downloads are transmitted over encrypted channels.

#### Encryption Mechanisms

* TLS 1.2 or higher for HTTPS connections
* Mutual TLS (mTLS) for service-to-service communication in service mesh
* Encrypted database connections (TLS for PostgreSQL, SQL Server, and so on)
* Encrypted persistent volume connections

### Customer Responsibility

It is the customer's responsibility to:

* Determine what information requires confidentiality and integrity protection during transmission.
* Define encryption requirements for different types of data and communication paths.
* Select appropriate encryption algorithms and key lengths.
* Establish policies for protecting information in transit.

#### Implementer Responsibilities

* Infra Implementer: Ensure infrastructure information is protected as required.
* Infra Implementer: Configure TLS certificates and encryption for all external-facing services.
* Infra Operator: Ensure infrastructure information transmission remains protected.
* App Implementer: Enable additional information transmission controls in the Mendix app as required by the Customer.
* App Operator: Ensure the Mendix app information transmission remains protected.

## Proof and Remarks

Mendix natively supports full encryption in transit by leveraging the Mendix Runtime and Operator to enforce TLS 1.2+ for all web traffic, database connections, and file transfers. It integrates seamlessly with service meshes like Istio for mTLS and ensures that application data remains protected across both internal and external network boundaries.

Mendix supports TLS for database connections through the **Strict TLS** option in the Operator.

For more information, see [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/#standard-postgresql-database).

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-08-1.png" class="no-border" >}}

The customer can enable TLS during PMP installation so that all traffic in transit is encrypted using TLS. For more information, see [Private Mendix Platform Quick Start Guide](/private-mendix-platform/quickstart/#installing-the-private-mendix-platform).

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-08-2.png" class="no-border" >}}

Mendix supports encryption at rest. It can be configured through the following settings:

* For AWS S3, see [Runtime Customization](/refguide/custom-settings/#commendixstorages3EncryptionKeys)
* For Azure, see [Runtime Customization](/refguide/custom-settings/#azure-blob)
* For RDS, refer to the following screenshot:

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-08-3.png" class="no-border" >}}