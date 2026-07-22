---
title: "CM-06 Configuration Settings"
linktitle: "CM-06"
url: /private-mendix-platform/nist-controls/cm-06/
description: "Documents the Private Mendix Platform's compliance with the CM-06 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-06 control.

| Control ID | CM-06 |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization: 

* Establishes and documents configuration settings for information technology products employed within the information system using organization-defined security configuration checklists that reflect the most restrictive mode consistent with operational requirements.
* Implements the configuration settings.
* Identifies, documents, and approves any deviations from established configuration settings for organization-defined information system components based on organization-defined operational requirements.
* Monitors and controls changes to the configuration settings in accordance with organizational policies and procedures.

### Supplemental Guidance

Configuration settings are the set of parameters that can be changed in hardware, software, or firmware components of the information system that affect the security posture and/or functionality of the system. Some examples of nformation technology products for which security-related configuration settings can be defined include the following:

* Mainframe computers
* Servers (for example, database, electronic mail, authentication, web, proxy, file, domain name)
* Workstations
* Input/output devices (for example, scanners, copiers, and printers)
* Network components (for example, firewalls, routers, gateways, voice and data switches, wireless access points, network appliances, sensors)
* Operating systems
* Middleware
* Applications. 

Security-related parameters are parameters which impact the security state of information systems, including the parameters required to satisfy other security control requirements. Security-related parameters include, for example the following:

* Registry settings
* Account, file, directory permission settings
* Settings for functions, ports, protocols, services, and remote connections. 

Organizations establish organization-wide configuration settings and subsequently derive specific settings for information systems. The established settings become part of the systems configuration baseline. 

Common secure configurations (also referred to as security configuration checklists, lockdown and hardening guides, security reference guides, security technical implementation guides) provide recognized, standardized, and established benchmarks that stipulate secure configuration settings for specific information technology platforms or products, and instructions for configuring those information system components to meet operational requirements. 

Common secure configurations can be developed by a variety of organizations including, for example, information technology product developers, manufacturers, vendors, consortia, academia, industry, federal agencies, and other organizations in the public and private sectors. 

Common secure configurations include the United States Government Configuration Baseline (USGCB), which affects the implementation of CM-06 and other controls, such as AC-19 and CM-07. The Security Content Automation Protocol (SCAP) and the defined standards within the protocol (for example, Common Configuration Enumeration) provide an effective method to uniquely identify, track, and control configuration settings. OMB establishes federal policy on configuration requirements for federal information systems.

The following controls are related to this control:

* AC-19
* CM-02
* CM-03
* CM-07
* SI-04

For more information, refer to the following:

* OMB Memoranda 07-11, 07-18, 08-22
* NIST Special Publications 800-70, 800-128
* Web: [NVD - Home](http://nvd.nist.gov/), [NCP - National Checklist Program Checklist Repository](http://checklists.nist.gov/).

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes determining which security hardened configurations are required for their environment to ensure compliance with federal requirements. The customer must ensure that configuration settings, security baselines, deviation approvals, and change monitoring processes are documented, reviewed, and enforced within their environment.

#### Infra Implementer

The Infra Implementer is responsible for ensuring that the infrastructure and CI/CD stack is appropriately hardened based on the customer's requirements.

#### App Implementer

The App Implementer is responsible for ensuring the Mendix app is built in such a way that it can successfully operate in the hardened environment.

#### Infra Operator

The Infra Operator is responsible for ensuring continued compliance as infrastructure and customer requirements change.

#### App Operator

The App Operator is responsible for ensuring continued compliance as the application and customer requirements change.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4, NIST SP 800-70, and NIST SP 800-128, which establish requirements for implementing and managing security configuration settings for federal information systems. Customers operating within a FedRAMP or DoD SRG environment must ensure that all information system components are configured according to security configuration checklists that reflect the most restrictive mode consistent with operational requirements.

To meet these requirements, the customer must carry out the following actions:

1. Establish security configuration baselines.

    The customer must determine which security hardened configurations are required for their environment, establishing configuration settings using recognized security configuration checklists (for example, USGCB, CIS Benchmarks, DISA STIGs) that reflect the most restrictive mode consistent with operational requirements, in accordance with NIST SP 800-70 and OMB Memoranda 07-11.

2. Ensure infrastructure and application hardening.

    The Infra Implementer must ensure that the infrastructure and CI/CD stack is appropriately hardened based on the customer's requirements, and the App Implementer must ensure the Mendix App is built to successfully operate in the hardened environment. Any deviations from established configuration settings must be documented and approved by the customer, as described in NIST SP 800-128.

3. Monitor and maintain configuration compliance.

    The Infra Operator and App Operator must ensure continued compliance as the infrastructure, application, and customer requirements change. This includes implementing automated configuration monitoring, documenting and approving deviations, and controlling changes to configuration settings in accordance with organizational policies, as described in NIST SP 800-53 CM-3 and SI-4.

#### Infra Implementer

The Infra Implementer is responsible for ensuring that the infrastructure and CI/CD stack is appropriately hardened based on the customer's security configuration requirements. This includes applying security configuration checklists to operating systems, network devices, cloud services, and container platforms.

The Infra Implementer must perform the following tasks:

* Configure all infrastructure components according to the customer's security configuration checklists, applying DISA STIGs, CIS Benchmarks, or other approved hardening guides to operating systems, network devices, and cloud services.
* Configure the CI/CD deployment pipeline with security hardening measures, including access controls, artifact integrity verification, and secure build environment configurations.
* Document all implemented configuration settings and any deviations from the established baselines, providing justification for each deviation for customer review and approval.

#### App Implementer

The App Implementer is responsible for ensuring that the Mendix application is built and configured to operate successfully within the Customer's security hardened environment while maintaining appropriate security settings at the application level.

The App Implementer must perform the following tasks:

* Implement the most restrictive application security settings consistent with operational requirements, including authentication configuration, session management, and data protection settings within the Mendix application.
* Test the Mendix application in the hardened environment to verify that it operates correctly with all security configuration settings applied, identifying and resolving any compatibility issues.
* Document all application-level configuration settings and any deviations from the established baselines for Customer review and approval.

#### Infra Operator

The Infra Operator is responsible for ensuring continued infrastructure configuration compliance as infrastructure components are updated and Customer requirements evolve over time.

The Infra Operator must perform the following tasks:

* Implement automated configuration monitoring to detect deviations from established security baselines across all infrastructure components.
* Ensure all changes to infrastructure configuration settings follow the organization's change control process and are documented, approved, and tracked.
* Provide regular configuration compliance reports to the customer, including any deviations detected and remediation actions taken.

#### App Operator

The App Operator is responsible for ensuring continued application configuration compliance as the Mendix application evolves and customer requirements change.

The App Operator must perform the following tasks:

* Implement monitoring to detect deviations from established application security configuration settings and alert on unauthorized changes.
* Ensure all changes to application configuration settings follow the organization's change control process and are approved before implementation.
* Provide regular application configuration compliance reports to the customer, including any deviations detected and remediation actions taken.
