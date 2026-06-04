---
title: "RA-02 Security Categorization"
linktitle: "RA-02"
url: /private-mendix-platform/nist-controls/ra-02/
description: "Documents the Private Mendix Platform's compliance with the RA-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the RA-02 control.

| Control ID | RA-02 |
| --- | --- |
| Control category | RA - Risk Assessment |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Categorizes information and the information system in accordance with applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance.
* Documents the security categorization results (including supporting rationale) in the security plan for the information system.
* Ensures that the security categorization decision is reviewed and approved by the authorizing official or authorizing official designated representative.

### Supplemental Guidance

Clearly defined authorization boundaries are a prerequisite for effective security categorization decisions. Security categories describe the potential adverse impacts to organizational operations, organizational assets, and individuals if organizational information and information systems are comprised through a loss of confidentiality, integrity, or availability. Organizations conduct the security categorization process as an organization-wide activity with the involvement of chief information officers, senior information security officers, information system owners, mission/business owners, and information owners/stewards. Organizations also consider the potential adverse impacts to other organizations and, in accordance with the USA PATRIOT Act of 2001 and Homeland Security Presidential Directives, potential national-level adverse impacts. Security categorization processes carried out by organizations facilitate the development of inventories of information assets, and along with CM-8, mappings to specific information system components where information is processed, stored, or transmitted.

The following controls are related to this control:

* CM-8
* MP-4
* RA-3
* SC-7

For more information, refer to the FIPS Publication 199; and NIST Special Publications 800-30, 800-39, and 800-60.

## Responsibility

### Customer Responsibility

The Customer is responsible for implementing this control in an appropriate manner in their organization. This includes categorizing information and the Mendix solution in accordance with applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance to ensure compliance with federal requirements. The customer must ensure that security categorization results, including supporting rationale, are documented in the security plan, reviewed, and approved by the authorizing official within their environment.

## Guidance

### Customer Responsibility

This control is governed by FIPS Publication 199, NIST SP 800-30, NIST SP 800-39, NIST SP 800-60, and NIST SP 800-53 Rev 5, which establish security categorization requirements for federal information systems based on potential adverse impacts to organizational operations, assets, and individuals. Customers operating within a FedRAMP or DoD SRG environment must categorize the Mendix solution according to confidentiality, integrity, and availability impact levels, and ensure the categorization decision is reviewed and approved by the authorizing official.

To meet these requirements, the customer must carry out the following actions:

* Document and maintain security categorization. 

    The customer must document and maintain the security categorization (SC) of the Mendix solution in accordance with FIPS 199 and NIST SP 800-60 guidance, describing the potential adverse impacts through loss of confidentiality, integrity, or availability. The categorization results and supporting rationale—covering the entire system boundary including both application components and underlying infrastructure—must be documented in the system security plan (SSP) and approved by the authorizing official or designated representative.

* Collaborate with App and Infra Implementers on categorization.

    Engage both App  Implementer and Infra Implementer to collaborate on any impacts to the security categorization resulting from the design, configuration, or hosting characteristics of the Mendix solution. The customer must ensure that the App Implementer provides details on application-level security and data flows, while the Infra Implementer provides comprehensive documentation on the underlying infrastructure (e.g., cloud environment, virtual networking, and FIPS-validated encryption) to support accurate categorization and boundary definition.

* Maintain ongoing security categorization throughout the lifecycle.

    Direct both App Operator and Infra Operators to provide ongoing collaboration around any impacts to the security categorization over the system's lifecycle. This includes reporting significant changes to the application, data processed, or the underlying infrastructure (e.g., architectural shifts or changes in cloud services). The customer must establish procedures to review and update the security categorization at organization-defined frequencies or whenever operational changes occur, ensuring the categorization remains accurate and current.
