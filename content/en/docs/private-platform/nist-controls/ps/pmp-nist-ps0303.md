---
title: "PS-03 (03) Personnel Screening - Information Requiring Special Protection"
linktitle: "PS-03 (03)"
url: /private-mendix-platform/nist-controls/ps-0303/
description: "Documents the Private Mendix Platform's compliance with the PS-03 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the PS-03 (03) control.

| Control ID | PS-03 (03) |
| --- | --- |
| Control category | PS - Personnel Security |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization ensures that individuals accessing an information system processing, storing, or transmitting information requiring special protection:

* Have valid access authorizations that are demonstrated by assigned official government duties.
* Satisfy organization-defined additional personnel screening criteria.

### Supplemental Guidance

Organizational information requiring special protection includes, for example, Controlled Unclassified Information (CUI) and Sources and Methods Information (SAMI). Personnel security criteria include, for example, position sensitivity background screening requirements.

## Responsibility

### Customer Responsibility

Customer is responsible for implementing this control in an appropriate manner in their organization. This includes determining that the Mendix solution requires special protection and validating that all personnel accessing the system have appropriate authorizations demonstrated by official government duties to ensure compliance with federal requirements. The customer must ensure that additional personnel screening criteria for accessing Controlled Unclassified Information (CUI) or other sensitive data are documented, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 5 and FIPS 199, which establish personnel screening requirements for information systems processing, storing, or transmitting information requiring special protection such as Controlled Unclassified Information (CUI) and Sources and Methods Information (SAMI). Customers operating within a FedRAMP or DoD SRG environment must ensure that all individuals accessing the Mendix solution have valid access authorizations and satisfy organization-defined additional screening criteria appropriate to the sensitivity level of the data.

In order to demonstrate compliance, the customer is expected to implement the measures outlined below:

* Determine special protection requirements and validate access authorizations.

    The Customer must determine whether the Mendix solution processes, stores, or transmits information requiring special protection (such as CUI or SAMI), and validate that all users have valid access authorizations demonstrated by assigned official government duties. This determination must align with NIST SP 800-53 Rev 5 requirements and federal data classification standards before granting any personnel access to the system.

* Establish and enforce additional screening criteria. 

    Define and implement organization-specific additional personnel screening criteria, including position sensitivity background screening requirements, for all roles associated with the Mendix solution. The Customer must ensure that Infra Implementer and App Implementer personnel pass all required screening before working on the Mendix solution, and that the  Infra Implementer  configures appropriate access restrictions within the infrastructure and Private Mendix Platform, while App Implementer implements access controls within the Mendix application as dictated by the customer.

* Maintain ongoing personnel and system compliance.

    Direct Infra Operator and App Operator to ensure continuous compliance with screening requirements and access authorizations throughout the system's lifecycle, including periodic re-verification of personnel credentials and access rights. The Customer must establish procedures for revoking access when personnel no longer meet screening criteria or when their official government duties change, ensuring that special protection requirements remain enforced at all times.