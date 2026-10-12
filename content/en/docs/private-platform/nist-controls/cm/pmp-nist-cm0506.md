---
title: "CM-05 (06) Access Restrictions for Change - Limit Library Privileges"
linktitle: "CM-05 (06)"
url: /private-mendix-platform/nist-controls/cm-0506/
description: "Documents the Private Mendix Platform's compliance with the CM-05 (06) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-05 (06) control.

| Control ID | CM-05 (06) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | IL5 |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization limits privileges to change software resident within software libraries.

### Supplemental Guidance

Software libraries include privileged programs.

The following controls are related to this control:

* [AC-02](/private-mendix-platform/nist-controls/ac-02/)

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes defining and enforcing privilege limitations for all changes to software resident within software libraries to ensure compliance with federal requirements. The customer must ensure that access controls for software libraries, including privileged programs, are documented, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and FIPS 200, which establish requirements for limiting privileges to modify software within software libraries, including privileged programs. Customers operating within a FedRAMP or DoD SRG environment must ensure that only authorized personnel can change software in libraries, and that these privilege limitations are consistently enforced.

To meet these requirements, the customer must carry out the following actions:

1. Define software library privilege policies.

    The customer must define who is allowed to make changes to software libraries and components, and under what conditions. This includes establishing role-based access controls for software repositories, package registries, and deployment artifacts in accordance with NIST SP 800-53 Rev 4 AC-2 account management requirements.

2. Enforce privilege restrictions across all parties.

    The Infra Implementer, App Implementer, Infra Operator, and App Operator must respect the customer's privilege limitations throughout the lifecycle of the solution. This includes implementing technical controls such as repository branch protections, code signing requirements, and deployment pipeline restrictions that prevent unauthorized modifications to software libraries.

3. Review and audit library access privileges.

    The customer must periodically review and audit access privileges to software libraries to ensure compliance with the defined policies. This includes maintaining records of who has write access to software libraries, reviewing privilege assignments at organization-defined frequencies, and revoking unnecessary access in alignment with least privilege principles, as described in NIST SP 800-53 AC-06.
