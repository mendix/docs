---
title: "SA-03 System Development Life Cycle"
linktitle: "SA-03"
url: /private-mendix-platform/nist-controls/sa-03/
description: "Documents the Private Mendix Platform's compliance with the SA-03 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-03 control.

| Control ID | SA-03 |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Manages the information system using an organization-defined system development life cycle that incorporates information security considerations
* Defines and documents information security roles and responsibilities throughout the system development life cycle.
* Identifies individuals having information security roles and responsibilities.
* Integrates the organizational information security risk management process into system development life cycle activities.

### Supplemental Guidance

A well-defined system development life cycle provides the foundation for the successful development, implementation, and operation of organizational information systems. To apply the required security controls within the system development life cycle requires a basic understanding of information security, threats, vulnerabilities, adverse impacts, and risk to critical missions and business functions. 

The security engineering principles in SA-8 cannot be properly applied if individuals that design, code, and test information systems and system components (including information technology products) do not understand security. Therefore, organizations include qualified personnel, for example, chief information security officers, security architects, security engineers, and information system security officers in system development life cycle activities to ensure that security requirements are incorporated into organizational information systems. 

It is equally important that developers include individuals on the development team that possess the requisite security expertise and skills to ensure that needed security capabilities are effectively integrated into the information system. Security awareness and training programs can help ensure that individuals having key security roles and responsibilities have the appropriate experience, skills, and expertise to conduct assigned system development life cycle activities. 

The effective integration of security requirements into enterprise architecture also helps to ensure that important security considerations are addressed early in the system development life cycle and that those considerations are directly related to the organizational mission/business processes. This process also facilitates the integration of the information security architecture into the enterprise architecture, consistent with organizational risk management and information security strategies. 

The following controls are related to this control:

* AT-3
* PM-7
* SA-8

For more information, refer to the NIST Special Publications 800-37 and 800-64.

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes defining and managing an organization-defined system development life cycle that incorporates information security considerations at every phase, defining and documenting information security roles and responsibilities throughout the SDLC, and identifying qualified individuals to fulfill these roles to ensure compliance with federal requirements. The customer must ensure that the organizational information security risk management process is integrated into all system development life cycle activities for the Mendix solution, and that all parties involved in implementing and operating the solution understand and apply appropriate security considerations as directed by the customer.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 5 (SA-3), NIST SP 800-37 (Risk Management Framework), NIST SP 800-64 (Security Considerations in the System Development Life Cycle), and FIPS 200, which collectively require organizations to manage information systems using a defined SDLC that incorporates information security considerations throughout all phases. Customers operating within a FedRAMP or DoD SRG environment must establish an organization-defined SDLC, define security roles and responsibilities, identify qualified personnel, and integrate risk management processes into development, implementation, and operational activities.

To meet these requirements, the customer must carry out the following actions:

1. Define and document organization-defined system development life cycle.

    Establish and document an organization-defined system development life cycle for the Mendix solution that incorporates information security considerations at every phase, as required by NIST SP 800-64. Define and document information security roles and responsibilities throughout the SDLC, identify individuals having security roles and responsibilities (such as chief information security officers, security architects, security engineers, and information system security officers), and ensure these individuals possess the requisite security expertise and skills as outlined in NIST SP 800-53 Rev 5 supplemental guidance.

2. Integrate risk management into SDLC activities.

    Integrate the organizational information security risk management process into all system development life cycle activities for the Mendix solution in accordance with NIST SP 800-37. Ensure that security requirements are addressed early in the SDLC, that security considerations are directly related to organizational mission and business processes, and that the information security architecture is integrated into the enterprise architecture consistent with organizational risk management strategies.

3. Establish direct SDLC compliance across all implementation and operations roles.

    Establish clear direction for how the Infra Implementer must deliver the infrastructure and Private Mendix Platform, how the App Implementer must deliver Mendix applications, how the Infra Operator must deliver infrastructure changes, and how the App Operator must deliver application changes—all in compliance with the customer-defined SDLC. Ensure all parties appropriately incorporate information security concerns at each phase as directed by the Customer, provide input on resources needed to support SDLC compliance, and maintain security considerations throughout the entire lifecycle of the Mendix solution.