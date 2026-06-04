---
title: "PL-01 - Security Planning Policy And Procedures"
linktitle: "PL-01"
url: /private-mendix-platform/nist-controls/pl-01/
description: "Documents the Private Mendix Platform's compliance with the PL-01 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the PL-01 control.

| Control ID | PL-01 |
| --- | --- |
| Control category | PL - Planning |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Develops, documents, and disseminates to organization-defined personnel or roles:

    * A security planning policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance.
    * Procedures to facilitate the implementation of the security planning policy and associated   security planning controls.

* *Reviews and updates the current:

    * Security planning policy at an organization-defined frequency.
    * Security planning procedures at an organization-defined frequency.

### Supplemental Guidance

This control addresses the establishment of policy and procedures for the effective implementation of selected security controls and control enhancements in the *PL* family. Policy and procedures reflect applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance. Security program policies and procedures at the organization level may make the need for system-specific policies and procedures unnecessary. The policy can be included as part of the general information security policy for organizations or conversely, can be represented by multiple policies reflecting the complex nature of certain organizations. The procedures can be established for the security program in general and for particular information systems, if needed. The organizational risk management strategy is a key factor in establishing policy and procedures.

The following controls are related to this control:

* PM-9

For more information, refer to the NIST Special Publications 800-12, 800-18, and 800-100.

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes establishing comprehensive security planning policies and procedures that address purpose, scope, roles, responsibilities, management commitment, and coordination among all parties involved in deploying and operating the Mendix solution to ensure compliance with federal requirements. The customer must ensure that these policies and procedures are developed, documented, disseminated to appropriate personnel, reviewed at defined frequencies, and updated to reflect inputs from infrastructure implementers and operators throughout the solution lifecycle.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 5 (*PL* family), NIST SP 800-12, NIST SP 800-18, NIST SP 800-100, and FIPS 200, which collectively establish the minimum security planning requirements for federal information systems. Customers operating within a FedRAMP or DoD SRG environment must ensure their security planning policies and procedures meet these baseline requirements, including documentation, dissemination, review, and update processes that address organizational risk management strategy and coordination among all stakeholders.

To meet these requirements, the customer must carry out the following actions:

* Develop and implement comprehensive security planning policies and procedures.

    Establish security planning policies that address purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance requirements as specified in NIST SP 800-18 and FIPS 200. Document procedures to facilitate implementation of the security planning policy and associated controls, and define organization-defined frequencies for reviewing and updating both policies and procedures in alignment with NIST SP 800-53 Rev 5.

* Establish input collection process from implementation teams.

    Create a formal process to collect and incorporate security planning input from the Infra Implementer regarding impacts that the infrastructure and Private Mendix Platform will have on security planning, and from the App Implementer regarding impacts that Mendix applications will have on security planning. Ensure this input is integrated into the organization's security planning policy and procedures to reflect the complete Mendix solution architecture.

* Maintain ongoing communication with operations teams.

    Establish procedures to ensure that the Infra Operator and App Operator keep the customer continuously informed of security planning implications throughout the entire lifecycle of the Mendix solution. This includes implementing regular reporting mechanisms, change notification processes, and feedback loops to capture operational insights that may affect security planning policies and procedures as outlined in NIST SP 800-100.
