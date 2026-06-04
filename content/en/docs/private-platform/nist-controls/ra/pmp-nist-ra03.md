---
title: "RA-03 Risk Assessment"
linktitle: "RA-03"
url: /private-mendix-platform/nist-controls/ra-03/
description: "Documents the Private Mendix Platform's compliance with the RA-03 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the RA-03 control.

| Control ID | RA-03 |
| --- | --- |
| Control category | RA - Risk Assessment |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Conducts an assessment of risk, including the likelihood and magnitude of harm, from the unauthorized access, use, disclosure, disruption, modification, or destruction of the information system and the information it processes, stores, or transmits.
* Documents risk assessment results in security plans, risk assessment reports, and  organization-defined documents.
* Reviews risk assessment results at an organization-defined frequency.
* Disseminates risk assessment results to organization-defined personnel or roles.
* Updates the risk assessment at an organization-defined frequency, or whenever there are significant changes to the information system or environment of operation (including the identification of new threats and vulnerabilities), or other conditions that may impact the security state of the system.

### Supplemental Guidance

Clearly defined authorization boundaries are a prerequisite for effective risk assessments. Risk assessments take into account threats, vulnerabilities, likelihood, and impact to organizational operations and assets, individuals, other organizations, and the Nation based on the operation and use of information systems. Risk assessments also take into account risk from external parties (e.g., service providers, contractors operating information systems on behalf of the organization, individuals accessing organizational information systems, outsourcing entities). In accordance with OMB policy and related E-authentication initiatives, authentication of public users accessing federal information systems may also be required to protect nonpublic or privacy-related information. As such, organizational assessments of risk also address public access to federal information systems.

Risk assessments (either formal or informal) can be conducted at all three tiers in the risk management hierarchy (i.e., organization level, mission/business process level, or information system level) and at any phase in the system development life cycle. Risk assessments can also be conducted at various steps in the Risk Management Framework, including categorization, security control selection, security control implementation, security control assessment, information
system authorization, and security control monitoring. RA-3 is noteworthy in that the control must be partially implemented prior to the implementation of other controls in order to complete the
first two steps in the Risk Management Framework. Risk assessments can play an important role in security control selection processes, particularly during the application of tailoring guidance, which includes security control supplementation.

The following controls are related to this control:

* RA-2
* PM-9

For more information, refer to OMB Memorandum 04-04; NIST Special Publication 800-30, and 800-39; [IDManagement](https://www.idmanagement.gov/).

## Responsibility

### Customer Responsibility

The Customer is responsible for implementing this control in an appropriate manner in their organization. This includes conducting, documenting, and managing comprehensive risk assessments of the Mendix solution that evaluate threats, vulnerabilities, likelihood, and magnitude of harm to ensure compliance with federal requirements. The customer must ensure that risk assessment results are documented, reviewed at organization-defined frequencies, disseminated to appropriate personnel, and updated whenever significant changes occur within their environment.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-30, NIST SP 800-39, NIST SP 800-53 Rev 5, OMB Memorandum 04-04, and FIPS 199, which establish risk assessment requirements for federal information systems across all tiers of the risk management hierarchy. Customers operating within a FedRAMP or DoD SRG environment must conduct risk assessments that evaluate the likelihood and magnitude of harm from unauthorized access, use, disclosure, disruption, modification, or destruction of the Mendix solution and the information it processes, stores, or transmits.

To meet these requirements, the customer must carry out the following actions:

* Conduct, Document, and Manage Comprehensive Risk Assessments. 

    The Customer must conduct comprehensive risk assessments of the Mendix solution in accordance with NIST SP 800-30 and NIST SP 800-39, evaluating threats, vulnerabilities, likelihood, and impact to organizational operations, assets, individuals, other organizations, and the Nation. Risk assessment results must be documented in the security plan, risk assessment report, or other organization-defined document, and disseminated to organization-defined personnel or roles.

* Establish collaborative risk assessment processes.

    The Customer must establish formal collaboration processes with Infra Implementer, App Implementer, Infra Operator, and App Operator to ensure all parties contribute to all aspects of the risk assessment process. This collaboration must encompass risk identification, risk analysis, risk evaluation, and risk response throughout all phases of the system development life cycle and all steps in the Risk Management Framework.

* Maintain ongoing risk assessment throughout the lifecycle.

    Direct all parties to provide ongoing collaboration on risk assessments throughout the lifecycle of the Mendix solution, ensuring risk assessments are reviewed at organization-defined frequencies and updated whenever significant changes occur to the information system, environment of operation, threat landscape, or other conditions that may impact the security state. The Customer must ensure risk assessments remain current and inform security control selection, implementation, assessment, authorization, and monitoring decisions.
