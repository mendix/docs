---
title: "SA-04 - System and Services Acquisition"
linktitle: "SA-04"
url: /private-mendix-platform/nist-controls/sa-04/
description: "Documents the Private Mendix Platform's compliance with the SA-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-04 control.

| Control ID | SA-04 |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization includes the following requirements, descriptions, and criteria, explicitly or by reference, in the acquisition contract for the information system, system component, or information system service:

a. Security functional requirements
b. Security strength requirements
c. Security assurance requirements
d. Security-related documentation requirements
e. Requirements for protecting security-related documentation
f. Description of the information system development environment
g. Acceptance criteria.

## Responsibility

### Customer Responsibility

* Contractual mandate - It is the customer's sole responsibility to ensure that all seven specific security requirements (*a* through *g*) are explicitly defined in their procurement contracts for any information system or service.
* Scope - This applies to the acquisition of the Mendix Platform itself, and any other information services (IdP, Cloud Storage, Managed Services).
* Legal compliance - The customer must ensure the language used in contracts complies with federal laws (for example, FISMA) and Executive Orders.

## Guidance

### Customer Responsibility

To comply with SA-04, the customer should include the following criteria in their acquisition and specification documents:

* Security functional requirements (*a* and *b*) - Specify that the product must support FIPS-validated encryption (FIPS 140-2) and industry-standard authentication (SAML/OIDC).
* Assurance and documentation (*c* and *d*) - Explicitly require the provider to deliver SOC2 Type II reports, ISO 27001 certificates, or FedRAMP Authorization packages as part of the delivery.
* Environment description (*f*) - Require the vendor to provide architectural diagrams and descriptions of the development lifecycle (SDLC) to ensure the system operates in a secure environment.
* Acceptance criteria (*g*) - Define that final payment/acceptance is contingent upon passing security gate reviews, such as vulnerability scans or successful integration testing with the organization's PIV/CAC infrastructure.

## Proof and Remarks

This task is the responsibility of the customer. The responsibility for acquisition contracts lies entirely with the customer's procurement and legal departments.

Mendix makes Compliance Certifications (for example, SOC2, ISO 27001) available through the Mendix Support Portal or upon request from your Mendix Account Representative. Customers are encouraged to reference these official artifacts as a *Security Appendix* in their acquisition contracts to satisfy the assurance requirements of SA-04.

{{% alert color="info" %}}
Customers and prospects can request access to the latest SOC2 report using [Conveyor](https://app.conveyor.com/profile/mendix).
{{% /alert %}}
