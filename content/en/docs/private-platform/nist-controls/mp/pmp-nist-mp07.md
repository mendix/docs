---
title: "MP-07 - Media Use"
linktitle: "MP-07"
url: /private-mendix-platform/nist-controls/mp-07/
description: "Documents the Private Mendix Platform's compliance with the MP-07 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MP-07 control.

| Control ID | MP-07 |
| --- | --- |
| Control category | MP - Media Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization restricts or prohibits the use of organization-defined types of information system media on organization-defined information systems or system components using organization-defined security safeguards.

### Supplemental Guidance

Information system media includes both digital and non-digital media. Digital media includes, for example, diskettes, magnetic tapes, external/removable hard disk drives, flash drives, compact disks, and digital video disks. 

Non-digital media includes, for example, paper and microfilm. This control also applies to mobile devices with information storage capability (for example, smart phones, tablets, E-readers). 

In contrast to [MP-02](/private-mendix-platform/nist-controls/mp-02/), which restricts user access to media, this control restricts the use of certain types of media on information systems, for example, restricting or prohibiting the use of flash drives or external hard disk drives.

Organizations can employ technical and nontechnical safeguards (for example, policies, procedures, rules of behavior) to restrict the use of information system media. Organizations may restrict the use of portable storage devices, for example, by using physical cages on workstations to prohibit access to certain external ports, or disabling/removing the ability to insert, read or write to such devices. 

Organizations may also limit the use of portable storage devices to only approved devices including, for example, devices provided by the organization, devices provided by other approved organizations, and devices that are not personally owned. 

Finally, organizations may restrict the use of portable storage devices based on the type of device, for example, prohibiting the use of writeable, portable storage devices, and implementing this restriction by disabling or removing the capability to write to such devices.

The following controls are related to this control:

* [AC-19](/private-mendix-platform/nist-controls/ac-19/)
* PL-04

## Responsibility

### Customer Responsibility

The primary responsibility for implementing media restrictions and safeguards rests with the customer, with their Implementers and Operators ensuring compliance. This is because media restrictions and safeguards are intrinsically linked to the customer's unique operational context, including their specific data classification policies, internal security requirements, and adherence to various regulatory and legal frameworks (for example, data privacy laws, industry-specific compliance standards). 

Mendix provides a robust platform and the technical capabilities to enable the enforcement of these controls, but it does not possess the inherent knowledge of the customer's sensitive data landscape, their risk appetite, or the detailed legal and business mandates that dictate how media should be handled. Therefore, the customer, as the data owner and the entity ultimately accountable for data governance and compliance, is the sole party capable of defining and establishing these critical media restrictions and safeguards. 

The  App and Infra Implementers and Operators then translate these customer-defined policies into concrete configurations and operational practices within the Mendix solution, ensuring rigorous enforcement throughout its lifecycle.

## Guidance

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer to implement media restrictions and safeguards.

It is the responsibility of the Infra Implementer to ensure the infrastructure complies with the customer's media restrictions and safeguards.

It is the responsibility of the App Implementer to ensure the Mendix app complies with the customer's media restrictions and safeguards.

It is the responsibility of the Infra Operator and App Operator to ensure the Mendix solution complies with the customer's media restrictions and safeguards throughout the system's lifecycle.
