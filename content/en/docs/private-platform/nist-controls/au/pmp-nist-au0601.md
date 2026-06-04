---
title: "AU 06 (01) Audit Review, Analysis, And Reporting - Process Integration"
linktitle: "AU-06 (01)"
url: /private-mendix-platform/nist-controls/au-0601/
description: "Documents the Private Mendix Platform's compliance with the AU-06 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-06 (01) control.

| Control ID | AU-06 (01) |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The organization employs automated mechanisms to integrate audit review, analysis, and reporting processes to support organizational processes for investigation and response to suspicious activities.

### Supplemental Guidance

Organizational processes benefiting from integrated audit review, analysis, and reporting include, for example, incident response, continuous monitoring, contingency planning, and Inspector General audits. 

The following controls are related to this control:

* AU-12
* PM-7

## Responsibility

### Customer Responsibility

The customer is responsible for deploying automated audit review mechanisms.

The infrastructure implementer and app implementer are responsible for ensuring that audit logs and records are delivered to those audit review mechanisms.

The infrastructure implementer and app implementer are responsible for ensuring that audit logs and records are properly flowing to the automated audit review mechanisms.  

## Guidance

### Customer Responsibility

The customer should define and setup automation mechanisms to integrate audit review, analysis, and reporting processes for investigation and response to suspicious activities.

The customer should integrate  audit review, analysis, and reporting processes that may include incident response, continuous monitoring, contingency planning, Inspector General audits, and so on.

## Proof and Remarks

Mendix is not responsible for this task. The customer must define audit storage type and allocate storage capacity.
