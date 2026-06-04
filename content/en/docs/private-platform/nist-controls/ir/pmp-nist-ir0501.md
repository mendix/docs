---
title: "IR-05 (01) Automated Tracking, Data Collection, and Analysis"
linktitle: "IR-05 (01)"
url: /private-mendix-platform/nist-controls/ir-0501/
description: "Documents the Private Mendix Platform's compliance with the IR-05 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IR-05 (01) control.

| Control ID | IR-05 (01) |
| --- | --- |
| Control category | IR - Incident Response |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Operator, Customer - Infra |

## Control

The organization employs automated mechanisms to assist in the tracking of security incidents, and in the collection and analysis of incident information.

### Supplemental Guidance

Automated mechanisms for tracking security incidents, and collecting and analyzing incident information include, for example, the Einstein network monitoring device and monitoring online Computer Incident Response Centers (CIRCs) or other electronic databases of incidents.

The following controls are related to this control:

* AU-7
* IR-4

## Responsibility

### Customer Responsibility

The customer is responsible for defining the automated mechanisms and tools for detecting, tracking, investigating, and analyzing security incidents. They direct how these mechanisms should be integrated into the infrastructure, platform, and applications.

The customer also ensures that such integrations are maintained and updated in response to changes throughout the system lifecycle.

## Guidance

### Customer Responsibility

It is the responsibility of the customer to determine what automated mechanisms and tools should be employed for detecting, tracking, investigating, and analyzing security incidents.

It is the responsibility of the Infra Implementer to integrate the infrastructure and Private Mendix Platform with the automated security incident mechanisms dictated by the customer.

It is the responsibility of the App Implementer to integrate the Mendix app with the automated security incident mechanisms dictated by the customer.

It is the responsibility of the Infra Operator to ensure the infrastructure and Private Mendix Platform remain integrated with the automated security incident mechanisms dictated by the customer and App Operator to do the same for the Mendix app.

It is also the responsibility of the Infra Operator and App Operator to respond to changes to the automated security incident mechanisms dictated by the customer as well as infrastructure and Mendix App changes.
