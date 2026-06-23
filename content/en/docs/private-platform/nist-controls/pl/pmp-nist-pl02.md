---
title: "PL-02 - System Security Plan"
linktitle: "PL-02"
url: /private-mendix-platform/nist-controls/pl-02/
description: "Documents the Private Mendix Platform's compliance with the PL-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the PL-02 control.

| Control ID | PL-02 |
| --- | --- |
| Control category | PL - Planning |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Develops a security plan for the information system that:

    * Is consistent with the organization's enterprise architecture.
    * Explicitly defines the authorization boundary for the system.
    * Describes the operational context of the information system in terms of missions and business processes.
    * Provides the security categorization of the information system including supporting rationale.
    * Describes the operational environment for the information system and relationships with or connections to other information systems.
    * Provides an overview of the security requirements for the system.
    * Identifies any relevant overlays, if applicable.
    * Describes the security controls in place or planned for meeting those requirements including a rationale for the tailoring and supplementation decisions.
    * Is reviewed and approved by the authorizing official or designated representative prior to plan implementation.

* Distributes copies of the security plan and communicates subsequent changes to the plan to organization-defined personnel or roles.
* Reviews the security plan for the information system at an organization-defined frequency.
* Updates the plan to address changes to the information system or environment of operation, or problems identified during plan implementation or security control assessments.
* Protects the security plan from unauthorized disclosure and modification.

### Supplemental Guidance

Security plans relate security requirements to a set of security controls and control enhancements. Security plans also describe, at a high level, how the security controls and control enhancements meet those security requirements, but do not provide detailed, technical descriptions of the specific design or implementation of the controls or enhancements. Security plans contain sufficient information (including the specification of parameter values for assignment and selection statements either explicitly or by reference) to enable a design and implementation that is unambiguously compliant with the intent of the plans and subsequent determinations of risk to organizational operations and assets, individuals, other organizations, and the Nation if the plan is implemented as intended. Organizations can also apply tailoring guidance to the security control baselines in Appendix D and CNSS Instruction 1253 to develop overlays for community-wide use or to address specialized requirements, technologies, or missions or environments of operation (for example, DoD-tactical, Federal Public Key Infrastructure, or Federal Identity, Credential, and Access Management, space operations). Appendix I provides guidance on developing overlays.

Security plans need not be single documents; the plans can be a collection of various documents including documents that already exist. Effective security plans make extensive use of references to policies, procedures, and additional documents (e.g., design and implementation specifications) where more detailed information can be obtained. This reduces the documentation requirements associated with security programs and maintains security-related information in other established management/operational areas related to enterprise architecture, system development life cycle, systems engineering, and acquisition. For example, security plans do not contain detailed contingency plan or incident response plan information but instead provide explicitly or by reference, sufficient information to define what needs to be accomplished by those plans.

The following controls are related to this control:

* AC-2
* AC-6
* AC-14
* AC-17
* AC-20
* CA-2
* CA-3
* CA-7
* CM-9
* CP-2
* IR-8
* MA-4
* MA-5
* MP-2
* MP-4
* MP-5
* PL-7
* PM-1
* PM-7
* PM-8
* PM-9
* PM-11
* SA-5
* SA-17

For more information, refer to the NIST Special Publication 800-18.*

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes developing a comprehensive system security plan for the Mendix solution that addresses enterprise architecture alignment, authorization boundaries, operational context, security categorization, security controls, and tailoring decisions to ensure compliance with federal requirements. The customer must ensure that the security plan is created, reviewed, approved, distributed, regularly updated, and protected from unauthorized disclosure and modification in collaboration with implementation and operations teams throughout the solution lifecycle.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 5 (PL Family), NIST SP 800-18, and FIPS 200, which establish requirements for developing, maintaining, and protecting system security plans for federal information systems. Customers operating within a FedRAMP or DoD SRG environment must ensure their system security plan comprehensively documents the security posture of the Mendix solution, including all security controls, authorization boundaries, and operational contexts.

In order to demonstrate compliance, the customer is expected to implement the measures outlined below:

* Develop comprehensive system security plan for the Mendix solution.

    Create a system security plan that defines authorization boundaries, describes operational context in terms of missions and business processes, provides security categorization with supporting rationale, describes the operational environment and system relationships, provides security requirements overview, identifies relevant overlays, and describes security controls with tailoring rationale as specified in NIST SP 800-18 and FIPS 200. Ensure the plan is reviewed and approved by the authorizing official prior to implementation, and establish processes for distributing copies and communicating changes to organization-defined personnel.

* Establish collaborative planning process with implementation and operations teams.

    Create a formal collaboration framework where the Infra Implementer ,App Implementer，Infra Operator, and App Operatorwork together with the Customerto create and maintain an evergreen security plan for the Mendix solution throughout its lifecycle. This collaboration must ensure that all infrastructure and application-level security controls, configurations, and operational procedures are accurately documented and continuously updated in the system security plan.

* Implement review, update, and protection procedures.

    Establish organization-defined frequencies for reviewing the security plan in accordance with NIST SP 800-53 Rev 5, and implement procedures to update the plan to address changes to the information system, environment of operation, or problems identified during plan implementation or security control assessments. Protect the security plan from unauthorized disclosure and modification through appropriate access controls and handling procedures, ensuring all stakeholders maintain current versions throughout the Mendix solution lifecycle.
