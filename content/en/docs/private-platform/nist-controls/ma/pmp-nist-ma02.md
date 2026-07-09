---
title: "MA-02 Controlled Maintenance"
linktitle: "MA-02"
url: /private-mendix-platform/nist-controls/ma-02/
description: "Documents the Private Mendix Platform's compliance with the MA-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MA-02 control.

| Control ID | MA-02 |
| --- | --- |
| Control category | MA - Maintenance |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization:

* Schedules, performs, documents, and reviews records of maintenance and repairs on information system components in accordance with manufacturer or vendor specifications and/or organizational requirements.
* Approves and monitors all maintenance activities, whether performed on site or remotely and whether the equipment is serviced on site or removed to another location.
* Requires that organization-defined personnel or roles explicitly approve the removal of the information system or system components from organizational facilities for off-site maintenance or repairs.
* Sanitizes equipment to remove all information from associated media prior to removal from organizational facilities for off-site maintenance or repairs.
* Checks all potentially impacted security controls to verify that the controls are still functioning properly following maintenance or repair actions.
* Includes organization-defined maintenance-related information in organizational maintenance records.

### Supplemental Guidance

This control addresses the information security aspects of the information system maintenance program and applies to all types of maintenance to any system component (including applications) conducted by any local or nonlocal entity (for example, in-contract, warranty, in- house, software maintenance agreement). System maintenance also includes those components not directly associated with information processing and/or data/information retention such as scanners, copiers, and printers. 

Information necessary for creating effective maintenance records includes, for example: 

* Date and time of maintenance
* Name of individuals or group performing the maintenance
* Name of escort, if necessary
* Description of the maintenance performed
* Information system components or equipment removed or replaced (including identification numbers, if applicable). 

The level of detail included in maintenance records can be informed by the security categories of organizational information systems. Organizations consider supply chain issues associated with replacement components for information systems. 

The following controls are related to this control:

* CM-3
* CM-4
* MA-4
* MP-6
* PE-16
* SA-12
* SI-2.

## Responsibility

### Customer Responsibility

The customer and their designated operators (Infra Operator, App Operator) are responsible for implementing, documenting, approving, and performing maintenance on the specific infrastructure (for example, Private Mendix Platform) and Mendix applications deployed within their environment.

## Guidance

### Customer Responsibility

Mendix provides robust release notes, as well as reports and responds to security vulnerabilities within the Mendix products in accordance with appropriate regulations. 

It is the customer's responsibility to provide maintenance policies and procedures, including but not limited to documentation requirements. 

It is the responsibility of the Infra Operator to perform maintenance on the infrastructure and Private Mendix Platform in compliance with the customer's maintenance policies. 

It is the responsibility of the App Operator to perform maintenance on the Mendix app in compliance with the customer's maintenance policies.