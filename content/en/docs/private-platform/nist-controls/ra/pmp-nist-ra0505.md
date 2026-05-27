---
title: "RA-05 (05) Vulnerability Scanning - Privileged Access"
linktitle: "RA-05 (05)"
url: /private-mendix-platform/nist-controls/ra-0505/
description: "Documents the Private Mendix Platform's compliance with the RA-05 (05) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the RA-05 (03) control.

| Control ID | RA-05 (03) |
| --- | --- |
| Control category | RA - Risk Assessment |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The information system implements privileged access authorization to organization- identified information system components for selected organization-defined vulnerability scanning activities.

### Supplemental Guidance

In certain situations, the nature of the vulnerability scanning may be more intrusive or the information system component that is the subject of the scanning may contain highly sensitive information. Privileged access authorization to selected system components facilitates more thorough vulnerability scanning and also protects the sensitive nature of such scanning.

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes identifying information system components requiring privileged access for vulnerability scanning and ensuring scanning tools have appropriate authorization levels to ensure compliance with federal requirements. The customer must ensure that privileged access for vulnerability scanning is documented, controlled, and validated to facilitate thorough scanning while protecting the sensitive nature of such access within their environment.

## Guidance

### Customer Responsibility

This control enhancement is governed by NIST SP 800-53 Rev 5, NIST SP 800-40, and NIST SP 800-115, which recognize that certain vulnerability scanning activities require privileged access to information system components to perform more intrusive or thorough scans, particularly for components containing highly sensitive information or requiring authenticated scanning for comprehensive vulnerability detection. Customers operating within a FedRAMP or DoD SRG environment must implement privileged access authorization for vulnerability scanning tools to ensure comprehensive coverage while maintaining appropriate access controls and audit trails for such privileged activities.

To meet these requirements, the customer must carry out the following actions:

* Identify components requiring privileged scanning access.

    The customer must identify organization-defined information system components of the Mendix solution that require privileged access for effective vulnerability scanning, such as components requiring authenticated scans, intrusive testing, or access to sensitive configuration data. This determination must be based on the security categorization, risk assessment, and the need for thorough vulnerability detection as specified in NIST SP 800-115.

* Ensure infrastructure and Platform privileged access.

    Direct Infra Implementer to ensure that the customer's identified vulnerability scanning tools have the appropriate level of privileged access to the infrastructure and Private Mendix Platform to effectively perform vulnerability scans, including authenticated scanning, configuration audits, and patch level verification. The Customer must ensure such privileged access is properly authorized, documented, and protected, with appropriate audit logging of privileged scanning activities.

* Maintain privileged access throughout lifecycle.

    Direct the App Implementer to ensure the customer's identified vulnerability scanning tools have appropriate privileged access to the Mendix App for effective application vulnerability scanning, and require Infra Operator and App Operator to ensure scanning tools continue to have appropriate privileged access throughout the lifecycle. The customer must regularly review and validate privileged access authorizations for vulnerability scanning, ensuring credentials remain current, access remains properly controlled, and privileged scanning activities are monitored and audited.