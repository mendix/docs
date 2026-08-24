---
title: "AC-02 (02) Account Management - Removal Of Temporary / Emergency Accounts"
linktitle: "AC-02 (02)"
url: /private-mendix-platform/nist-controls/ac-0202/
description: "Documents the Private Mendix Platform's compliance with the AC-02 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 (02) control.

| Control ID | AC-02 (02) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The information system automatically removes or; disables temporary and emergency accounts after an: organization-defined time period for each type of account.

### Supplemental Guidance

This control enhancement requires the removal of both temporary and emergency accounts automatically after a predefined period of time has elapsed, rather than at the convenience of the systems administrator.

## Responsibility

### Customer Responsibility

Private Mendix Platform does not provision temporary or emergency accounts outside of normal pre-provisioning and login (SSO) mechanisms.

## Guidance

### Customer Responsibility

To effectively manage temporary and emergency accounts, organizations should:

* Define specific time limits for each type of account based on operational needs and security requirements.
* Configure the information system to automatically disable or remove these accounts once the defined period expires.
* Regularly review account activity and ensure that no temporary or emergency account remains active beyond its authorized timeframe.
* Document the procedures for account creation, monitoring, and removal to ensure compliance and accountability.
