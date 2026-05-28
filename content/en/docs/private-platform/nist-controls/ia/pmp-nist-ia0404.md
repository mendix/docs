---
title: "IA-04 (04) Identifier Management (Identify User Status)"
linktitle: "IA-04 (04)"
url: /private-mendix-platform/nist-controls/ia-0404/
description: "Documents the Private Mendix Platform's compliance with the IA-04 (04) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-04 (04) control.

| Control ID | IA-04 (04) |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization manages individual identifiers by uniquely identifying each individual as
organization-defined characteristic identifying individual status.

### Supplemental Guidance

Characteristics identifying the status of individuals include, for example, contractors and foreign nationals. Identifying the status of individuals by specific characteristics provides additional information about the people with whom organizational personnel are communicating. For example, it might be useful for a government employee to know that one of the individuals on an email message is a contractor.

The following controls are related to this control:

* AT-2

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes establishing identity and authentication policies to ensure compliance with federal requirements. The customer must ensure that relevant documentation is maintained, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

#### Customer

Defines the categorizations, groups, or tags used to classify individuals, and applies the corresponding metadata in accordance with organizational and security requirements.

####  Infra Implementer

Ensures the customer's identity provider (IdP) supports the required categorizations, groups, or tags, and establishes secure, compliant integration between the infrastructure and the customer's IdP.

#### App Implementer

Ensures the Mendix app correctly reads and applies individual account metadata as specified by the customer, including the accurate handling of metadata during runtime operations.

#### Infra Operator and App Operator

Jointly maintains ongoing alignment with the customer's requirements by performing regular updates to individual account metadata, IdP configurations, and supporting infrastructure, and addresses any changes in categorization or tagging needs over time.