---
title: "MP-02 - Media Access"
linktitle: "MP-02"
url: /private-mendix-platform/nist-controls/mp-02/
description: "Documents the Private Mendix Platform's compliance with the MP-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MP-02 control.

| Control ID | MP-02 |
| --- | --- |
| Control category | MP - Media Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization restricts access to organization-defined types of digital and/or non-digital media to organization-defined personnel or roles.

### Supplemental Guidance

Information system media includes both digital and non-digital media. Digital media includes, for example, diskettes, magnetic tapes, external or removable hard disk drives, flash drives, compact disks, and digital video disks. Non-digital media includes, for example, paper and microfilm. 

Restricting non-digital media access includes, for example, denying access to patient medical records in a community hospital unless the individuals seeking access to such records are authorized healthcare providers. Restricting access to digital media includes, for example, limiting access to design specifications stored on compact disks in the media library to the project leader and the individuals on the development team.

The following controls are related to this control:

* AC-3
* IA-2
* MP-4
* PE-2
* PE-3
* PL-2

## Responsibility

### Customer Responsibility

The customer is responsible for determining which personnel or roles should have access to specific types of media (digital and non-digital). 

App and Infra Implementers and Operators are responsible for configuring and maintaining the Mendix solution and apps to rigorously enforce these customer-defined media access directives.

## Guidance

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer to determine what personnel or roles should have access to what types of media (digital and non-digital).

It is the responsibility of the Infra Implementer to ensure that the infrastructure properly implements media restrictions in compliance with the customer's directives. 

It is the responsibility of the App Implementer to ensure that the Mendix app properly implements media restrictions in compliance with the customer's directives.

It is the responsibility of the Infra Operator and App Operator to ensure ongoing compliance with the customer's media restriction directives throughout the lifecycle of the Mendix solution.