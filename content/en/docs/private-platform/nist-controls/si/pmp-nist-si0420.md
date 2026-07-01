---
title: "SI-04 (20) Information System Monitoring - Privileged Users"
linktitle: "SI-04 (20)"
url: /private-mendix-platform/nist-controls/si-0420/
description: "Documents the Private Mendix Platform's compliance with the SI-04 (20) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-04 (20) control.

| Control ID | SI-04 (20) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | DOD IMPACT LEVEL 4 |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization implements organization-defined additional monitoring of privileged users.

### Supplemental Guidance

Privileged users (that is, users with elevated privileges) have the potential to inflict greater harm on organizational information systems. Additional monitoring of privileged user activities can help organizations detect and respond to insider threats and compromised accounts more quickly.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility.

## Guidance

### Customer Responsibility

The customer is responsible for defining additional monitoring requirements for privileged users, including identifying which roles qualify as privileged (for example, cluster administrators, database administrators, and Private Mendix Platform administrators). The customer establishes enhanced logging and monitoring requirements for privileged user activities and ensures that privileged actions are reviewed on a regular basis.

#### Infrastructure and Application Implementers

Infrastructure and Application Implementers implement Customer‑defined privileged user monitoring controls at their respective layers, including infrastructure‑level logging for administrative actions and application‑level monitoring within Mendix applications. Mendix does not provide a dedicated audit logging system. Organizations rely on Kubernetes‑provided logging capabilities and integrations with external logging and monitoring solutions to support privileged user activity monitoring.