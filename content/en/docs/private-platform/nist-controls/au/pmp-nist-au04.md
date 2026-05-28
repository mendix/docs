---
title: "AU-04 Audit Storage Capacity"
linktitle: "AU-04"
url: /private-mendix-platform/nist-controls/au-04/
description: "Documents the Private Mendix Platform's compliance with the AU-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-04 control.

| Control ID | AU-04 |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The organization allocates the audit record storage capacity in accordance with the organization-defined audit record storage requirements.

### Supplemental Guidance

Organizations consider the types of auditing to be performed and the audit processing requirements when allocating audit storage capacity. Allocating sufficient audit storage capacity reduces the likelihood of such capacity being exceeded and resulting in the potential loss or reduction of auditing capability.

The following controls are related to this control:

* AU-2
* AU-5
* AU-6
* AU-7
* AU-11
* SI-4

## Responsibility

### Customer Responsibility

The customer is responsible for identifying appropriate audit storage. 

The infrastructure implementer is responsible for allocating the storage as required. 

The infrastructure operator is responsible for ensuring that the storage is appropriately managed and maintained.

## Guidance

### Customer Responsibility

The customer should identify and define appropriate audit storage types, such as database or S3 storage, according to the organization's storage requirements for audit records.

The customer should allocate sufficient audit storage capacity to avoid capacity being exceeded and resulting in the potential loss or reduction of auditing capability.

## Proof and Remarks

Mendix is not responsible for this task. The customer must define audit storage type and allocate storage capacity.