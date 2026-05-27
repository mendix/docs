---
title: "AC-20 (02) Use Of External Information Systems - Portable Storage Devices"
linktitle: "AC-20 (02)"
url: /private-mendix-platform/nist-controls/ac-2002/
description: "Documents the Private Mendix Platform's compliance with the AC-20 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-20 (02) control.

| Control ID | AC-20 (2) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Designates individuals authorized to post information onto a publicly accessible information system.
* Trains authorized individuals to ensure that publicly accessible information does not contain nonpublic information.
* Reviews the proposed content of information prior to posting onto the publicly accessible information system to ensure that nonpublic information is not included.
* Reviews the content on the publicly accessible information system for nonpublic information at an organization-defined frequency and removes such information, if discovered.

### Supplemental Guidance

In accordance with federal laws, Executive Orders, directives, policies, regulations, standards, and/or guidance, the general public is not authorized access to non-public information (for example, information protected under the Privacy Act and proprietary information). This control addresses information systems that are controlled by the organization and accessible to the general public, typically without identification or authentication. The posting of information on non-organization information systems is covered by organizational policy.

The following controls are related to this control:

* AC-3
* AC-4
* AT-2
* AT-3
* AU-13

## Responsibility

### Customer Responsibility

The customer is responsible for designating the individuals allowed provide publicly accessible information, train them, ensure they review proposed public content, and ensure they monitor public content.

The app implementer is responsible for ensuring that proper access and review controls are built for publicly accessible information.

## Guidance

By default, Private Mendix Platform  does not expose any information publicly. If solutions built and deployed on PMP require public information sharing, the customer should designate and train authorized individuals. Additionally, the customer should review proposed public content prior to publishing, and ensure that nonpublic information is not published.

Management and control practices may include periodic scanning all Mendix solutions with Publicly Accessible Content to ensure no private information is available.

## Proof and Remarks

Mendix is not responsible for this task.