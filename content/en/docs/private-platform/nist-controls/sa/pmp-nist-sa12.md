---
title: "SA-12 - Supply Chain Protection"
linktitle: "SA-12"
url: /private-mendix-platform/nist-controls/sa-12/
description: "Documents the Private Mendix Platform's compliance with the SA-12 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-12 control.

| Control ID | SA-12 |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Org |

## Control

The organization protects against supply chain threats to the information system, system component, or information system service by employing organization-defined security safeguards as part of a comprehensive, defense-in-breadth information security strategy.

### Supplemental Guidance

Information systems (including system components that compose those systems) need to be protected throughout the system development life cycle (that is, during design, development, manufacturing, packaging, assembly, distribution, system integration, operations, maintenance, and retirement). Protection of organizational information systems is accomplished through threat awareness, by the identification, management, and elimination of vulnerabilities at each phase of the life cycle and the use of complementary, mutually reinforcing strategies to respond to risk. Organizations consider implementing a standardized process to address supply chain risk with respect to information systems and system components, and to educate the acquisition workforce on threats, risk, and required security controls. 

Organizations use the acquisition/procurement processes to require supply chain entities to implement necessary security safeguards to: 

* Reduce the likelihood of unauthorized modifications at each stage in the supply chain.
* Protect information systems and information system components, prior to taking delivery of such systems or components.
* Employ stringent configuration management and quality control processes to ensure that organizations can trace the source of components
* Limit damage from the insertion of counterfeits. Organizations can establish supply chain-related security requirements in organizational procurements by using the NIST Special Publication 800-53 security controls and control enhancements as the basis for such requirements.

The following controls are related to this control:

* AT-3
* CM-8
* IR-4
* PE-16
* PL-8
* SA-3
* SA-4
* SA-8
* SA-10
* SA-14
* SA-15
* SA-18
* SA-19
* SC-29
* SC-30
* SC-38

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix (for Mendix products) and the customer (for their implementation).

## Guidance

### Mendix Responsibility

The Mendix Runtime, Mendix Operator, Private Mendix Platform, and Studio Pro support multiple forms of supply chain control during the Software Development Life Cycle (SDLC):

* Component scanning and vulnerability assessment during development.
* Software bill of materials (SBOM) generation for transparency.
* Container image scanning for known vulnerabilities.
* Signed container images and artifacts for integrity verification.
* Secure distribution channels for Mendix products.
* Configuration management and version control.
* Quality control processes throughout the SDLC.

Mendix supply chain security measures:

* Periodic vulnerability scanning of all Mendix product components.
* Full component vulnerability scanning for each PMP release.
* Secure build pipelines with automated security checks.
* Third-party dependency management and vetting.
* Regular security audits and penetration testing.

### Customer Responsibility

It is the customer's responsibility to:

* Define supply chain security requirements for the Mendix solution.
* Determine which kinds and levels of supply chain security are required based on risk assessment.
* Establish procurement processes that include supply chain security requirements.
* Verify that supply chain entities implement necessary security safeguards.
* Implement security controls throughout the system development life cycle.

Implementer responsibilities:

* Infra Implementer - Adhere to the customer's dictated supply chain controls during infrastructure development.
* Infra Implementer - Verify provenance of infrastructure components and third-party software.
* App Implementer - Adhere to the customer's dictated supply chain controls during development of the Mendix App.
* App Implementer - Scan application dependencies for vulnerabilities.
* App Implementer - Implement secure coding practices and code review processes.

Operator responsibilities:

* Infra Operator - Maintain ongoing compliance with supply chain security controls.
* Infra Operator - Monitor for supply chain threats and vulnerabilities.
* App Operator - Maintain ongoing compliance with supply chain security controls.
* App Operator - Apply security updates and patches in accordance with supply chain policies.

## Proof and Remarks

Mendix is certified with the following security certifications and Attestations. More information and detailed reports can be obtained on [Conveyor](https://app.conveyor.com/profile/mendix).

### Certifications

* ISO 27001 - Certified Information Security Management System (ISMS). Showcases risk management, supplier security controls, and continuous monitoring.
* ISO 27701 - Privacy extension to ISO 27001, demonstrates compliant handling of personal data across processors and third parties.
* ISO 27017 - Cloud security controls to ensure a secure shared responsibility model and supplier/cloud provider governance.
* ISO 27018 - Protection of personal data in cloud services, verifies privacy safeguards for customer data in cloud supply chains.
* ISO 22301 - Business continuity management ensures resilience and continuity across operations and critical suppliers.
* ISO 9001 - Quality management system; ensures consistent processes, including vendor management and service delivery quality.
* PCI-DSS – Payment security certification, strict protection of cardholder data, and processors.
* Cyber Essentials – UK certification, baseline protection against common cyber threats.

### SOC and ISAE Attestations

* ISAE 3000 Type 2 – Independent assurance (non-US) on operational effectiveness of security, availability, and privacy controls over time.
* SOC 2 Type 2 – Independent (US) audit confirming ongoing effectiveness of security, availability, confidentiality, and privacy controls.
* ISAE 3402 Type 2 – Independent (non-US) assurance on controls impacting financial reporting, including IT and supplier systems.
* SOC 1 Type 2 – Independent (US) assurance on controls relevant to customer financial reporting processes.
* ISAE 3000 C5 Type 2 – Independent assurance of cloud security controls aligned with the German BSI C5 framework.

### Compliant or Aligned Frameworks and Regulations

* DigiD – Dutch government authentication compliance program.
* HIPAA / HITECH – US healthcare data protection laws, compliance across systems and partners.
* FedRAMP – US government cloud authorization framework
* NIS2 – EU cybersecurity regulation includes supply chain risk management obligations.
* NEN 7510 – Dutch healthcare security standard
* CSA STAR Level 1 – Cloud security self-assessment

### Additional Information

To know about other components customers are dependent on, and what licenses they make use of, customers can [generate the SBOM of the app](/refguide/sbom-generation/).

The customers can additionally protect their supply chain by [scanning marketplace bundles](/private-mendix-platform/reference-guide/admin/company/#import-content) before importing them from the public Mendix Marketplace.
