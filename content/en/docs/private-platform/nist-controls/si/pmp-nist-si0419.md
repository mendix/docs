---
title: "SI-04 (19) Information System Monitoring - Individuals Posing Greater Risk"
linktitle: "SI-04 (19)"
url: /private-mendix-platform/nist-controls/si-0419/
description: "Documents the Private Mendix Platform's compliance with the SI-04 (19) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-04 (19) control.

| Control ID | SI-04 (19) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | DOD IMPACT LEVEL 4 |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization implements organization-defined additional monitoring of individuals who have been identified by organization-defined sources as posing an increased level of risk.

### Supplemental Guidance

Indications of increased risk from individuals can be obtained from a variety of sources including human resource records, intelligence agencies, law enforcement organizations, and other credible sources. The monitoring of individuals is closely coordinated with management, legal, security, and human resources officials within organizations conducting such monitoring and complies with federal legislation, Executive Orders, policies, directives, regulations, and standards.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility.

## Guidance

### Customer Responsibility

The customer is responsible for identifying individuals requiring additional monitoring based on defined risk indicators and for specifying the scope and type of enhanced monitoring to be applied, such as detailed logging or session recording. The customer also defines sources of risk indicators, coordinates monitoring activities with management, legal, security, and human resources functions, and ensures that all monitoring activities comply with applicable laws, regulations, and organizational policies.

#### Infrastructure and Application Implementers

Infrastructure and Application Implementers ensure that additional monitoring capabilities can be enabled at the infrastructure and application layers in accordance with customer requirements.

#### Infrastructure and Application Operators

Infrastructure and Application Operators apply additional monitoring to identified individuals as directed by the customer. Centralized logging of Mendix component activities is used to support monitoring, review, and analysis of elevated‑risk user behavior.