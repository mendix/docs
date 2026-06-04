---
title: "AU-09 Protection Of Audit Information"
linktitle: "AU-09"
url: /private-mendix-platform/nist-controls/au-09/
description: "Documents the Private Mendix Platform's compliance with the AU-09 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-09 control.

| Control ID | AU-09 |
| --- | --- |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

### AU-08

The information system protects audit information and audit tools from unauthorized access, modification, and deletion.

### Supplemental Guidance

The audit information includes all information needed to successfully audit information system activity (for example, audit records, audit settings, and audit reports). This control focuses on technical protection of audit information. Physical protection of audit information is addressed by media protection controls and physical and environmental protection controls. 

The following controls are related to this control:

* AC-3
* AC-6
* MP-2
* MP-4
* PE-2
* PE-3
* PE-6

## Responsibility

### Customer Responsibility

#### Platform-Level

Access to audit information and audit tools within Private Mendix Platform is restricted to Admin roles, who are able to view the information. Modification and deletion capabilities are not supported.

#### Infra-Level

The customer's infrastructure implementer is responsible for ensuring that proper controls are applied to audit information, tools, and systems of record. Mendix is not responsible for this task.

#### App-Level

THe App Implementer is responsible for protecting audit information. Mendix is not responsible for this task.

## Guidance

### Customer Responsibility

The customer should identify appropriate persons as Audit Users with the Admin Role granted. These users are able to access and view the audit information, and ensure that any unauthorized access, modification or deletion are not allowed.

The customer should ensure that audit information and systems of record are protected physically on storage media in the system environment.

## Proof and Remarks

Private Mendix Platform restricts the rights to access and view audit information. Only users with the Admin role are allowed to view this information:

{{< figure src="/attachments/private-platform/nist-au/nist-au-09-1.png" class="no-border" >}}
