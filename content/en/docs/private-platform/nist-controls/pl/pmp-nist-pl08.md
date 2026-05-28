---
title: "PL-08 Information Security Architecture"
linktitle: "PL-08"
url: /private-mendix-platform/nist-controls/pl-08/
description: "Documents the Private Mendix Platform's compliance with the PL-08 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the PL-08 control.

| Control ID | PL-08 |
| --- | --- |
| Control category | PL - Planning |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Develops an information security architecture for the information system that:

    * Describes the overall philosophy, requirements, and approach to be taken with regard to protecting the confidentiality, integrity, and availability of organizational information.
    * Describes how the information security architecture is integrated into and supports the enterprise architecture.
    * Describes any information security assumptions about, and dependencies on, external services.

* Reviews and updates the information security architecture at an organization-defined frequency to reflect updates in the enterprise architecture.
* Ensures that planned information security architecture changes are reflected in the security plan, the security Concept of Operations (CONOPS), and organizational procurements/acquisitions.

### Supplemental Guidance

This control addresses actions taken by organizations in the design and development of information systems. The information security architecture at the individual information system level is consistent with and complements the more global, organization-wide information security architecture described in PM-7 that is integral to and developed as part of the enterprise architecture. The information security architecture includes an architectural description, the placement/allocation of security functionality (including security controls), security-related information for external interfaces, information being exchanged across the interfaces, and the protection mechanisms associated with each interface. In addition, the security architecture can include other important security-related information, for example, user roles and access privileges assigned to each role, unique security requirements, the types of information processed, stored, and transmitted by the information system, restoration priorities of information and information system services, and any other specific protection needs.

In today's modern architecture, it is becoming less common for organizations to control all information resources. There are going to be key dependencies on external information services and service providers. Describing such dependencies in the information security architecture is important to developing a comprehensive mission/business protection strategy. Establishing, developing, documenting, and maintaining under configuration control, a baseline configuration for organizational information systems is critical to implementing and maintaining an effective information security architecture. 

The development of the information security architecture is coordinated with the Senior Agency Official for Privacy (SAOP) or Chief Privacy Officer (CPO) to ensure that security controls needed to support privacy requirements are identified and effectively implemented. PL-8 is primarily directed at organizations (that is, internally focused) to help ensure that organizations develop an information security architecture for the information system, and that the security architecture is integrated with or tightly coupled to the enterprise architecture through the organization-wide information security architecture.

In contrast, SA-17 is primarily directed at external information technology product/system developers and integrators (although SA-17 could be used internally within organizations for in-house system development). SA-17, which is complementary to PL-8, is selected when organizations outsource the development of information systems or information system components to external entities, and there is a need to demonstrate consistency with the organization's enterprise architecture and information security architecture.

The following controls are related to this control:

* CM-2
* CM-6
* PL-2
* PM-7
* SA-5
* SA-17, Appendix J

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes describing the overall information security philosophy, requirements, and approach for protecting confidentiality, integrity, and availability, as well as how the security architecture integrates with enterprise architecture to ensure compliance with federal requirements. The customer must ensure that the information security architecture for the Mendix solution is developed, documented, reviewed at defined frequencies, and updated to reflect changes in enterprise architecture, security plans, and operational concepts in coordination with implementation and operations teams.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 5 (PL Family), PM-7, and FIPS 200, which require organizations to develop and maintain a comprehensive information security architecture that is integrated with enterprise architecture and addresses protection of organizational information. Customers operating within a FedRAMP or DoD SRG environment must ensure their information security architecture for the Mendix solution describes security philosophy, requirements, approach, external service dependencies, and how infrastructure and application components support overall security objectives.

To meet these requirements, the customer must carry out the following actions:

* Develop overall information security philosophy, requirements, and approach.

    Describe the overall philosophy, requirements, and approach around information security for the Mendix solution with regard to protecting confidentiality, integrity, and availability of organizational information as specified in NIST SP 800-53 Rev 5 and FIPS 200. Document how the information security architecture is integrated into and supports the enterprise architecture, and describe information security assumptions about and dependencies on external services including the Mendix platform and infrastructure components.

* Establish infrastructure and application security architecture documentation. 

    Ensure that the Infra Implementer documents how the infrastructure security architecture achieves the Customer's information security directives and supports the enterprise architecture, including placement and allocation of security functionality, security controls, external interfaces, and protection mechanisms. Ensure that the App Implementer documents the Mendix application's security architecture showing how it achieves the Customer's information security directives, supports the enterprise architecture, and addresses user roles, access privileges, information types processed, and specific protection needs as described in PM-7.

* Coordinate architecture changes and maintain current documentation. 

    Establish procedures to ensure that the Infra Operator and App Operator coordinate with the Customer to reflect planned information security architecture changes in the security plan, security CONOPS, and other organizational documents including procurements and acquisitions. Review and update the information security architecture at organization-defined frequencies to reflect updates in the enterprise architecture, ensuring coordination with the Senior Agency Official for Privacy (SAOP)/Chief Privacy Officer (CPO) as described in NIST SP 800-53 Rev 5.