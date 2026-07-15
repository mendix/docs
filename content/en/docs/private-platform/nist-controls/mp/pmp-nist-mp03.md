---
title: "MP-03 - Media Marking"
linktitle: "MP-03"
url: /private-mendix-platform/nist-controls/mp-03/
description: "Documents the Private Mendix Platform's compliance with the MP-03 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MP-03 control.

| Control ID | MP-03 |
| --- | --- |
| Control category | MP - Media Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Marks information system media indicating the distribution limitations, handling caveats, and applicable security markings (if any) of the information.
* Exempts organization-defined types of information system media from marking as long as the media remain within organization-defined controlled areas.

### Supplemental Guidance

The term security marking refers to the application/use of human-readable security attributes. The term security labeling refers to the application/use of security attributes with regard to internal data structures within information systems. For more information, see AC-16.

Information system media includes both digital and non-digital media. Digital media includes, for example, diskettes, magnetic tapes, external or removable hard disk drives, flash drives, compact disks, and digital video disks. Non-digital media includes, for example, paper and microfilm. Security marking is generally not required for media containing information determined by organizations to be in the public domain or to be publicly releasable. 

However, some organizations may require markings for public information indicating that the information is publicly releasable. Marking of information system media reflects applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance.

The following controls are related to this control:

* AC-16
* PL-2
* RA-3

For more information, refer to the FIPS Publication 199.

## Responsibility

### Customer Responsibility

The customer is responsible for the determination of appropriate media handling markings and exemptions for the Mendix solution. This is because these markings are direct reflections of the customer's specific data classification policies, regulatory compliance obligations (for example, for classified information, or privacy data), and internal security standards.

App and Infra Implementers and Operators are responsible for ensuring that the Mendix solution and apps are configured and operated to strictly adhere to these customer-defined media marking directives and exemptions.

## Guidance

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer to determine what media handling markings as well as exemptions are appropriate for the Mendix solution. 

It is the responsibility of the Infra Implementer to ensure the infrastructure properly supports the customer's designated media handling markings and exemptions.

It is the responsibility of the App Implementer to ensure the Mendix app marks media and provides media marking exemptions in compliance with the customer's directives.

it is the responsibility of the Infra Operator and the App Operator to ensure ongoing compliance with media marking and exemptions as directed by the customer over the lifecycle of the Mendix solution.