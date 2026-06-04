---
title: "AC-20 Use Of External Information Systems"
linktitle: "AC-20"
url: /private-mendix-platform/nist-controls/ac-20/
description: "Documents the Private Mendix Platform's compliance with the AC-20 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-20 control.

| Control ID | AC-20 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization establishes terms and conditions, consistent with any trust relationships established with other organizations owning, operating, and/or maintaining external information systems, allowing authorized individuals to:

* Access the information system from external information systems.
* Process, store, or transmit organization-controlled information using external information systems.

### Supplemental Guidance

External information systems are information systems or components of information systems that are outside of the authorization boundary established by organizations and for which organizations typically have no direct supervision and authority over the application of required security controls or the assessment of control effectiveness. External information systems include, for example: (i) personally owned information systems/devices (for example, notebook computers, smart phones, tablets, personal digital assistants); (ii) privately owned computing and communications devices resident in commercial or public facilities (for example, hotels, train stations, convention centers, shopping malls, or airports); (iii) information systems owned or controlled by nonfederal governmental organizations; and (iv) federal information systems that are not owned by, operated by, or under the direct supervision and authority of organizations. This control also addresses the use of external information systems for the processing, storage, or transmission of organizational information, including, for example, accessing cloud services (for example, infrastructure as a service, platform as a service, or software as a service) from organizational information systems.

For some external information systems (that is, information systems operated by other federal agencies, including organizations subordinate to those agencies), the trust relationships that have been established between those organizations and the originating organization may be such, that no explicit terms and conditions are required. Information systems within these organizations would not be considered external. 

These situations occur when, for example, there are pre-existing sharing or trust agreements (either implicit or explicit) established between federal agencies or organizations subordinate to those agencies, or when such trust agreements are specified by applicable laws, Executive Orders, directives, or policies. Authorized individuals include, for example, organizational personnel, contractors, or other individuals with authorized access to organizational information systems and over which organizations have the authority to impose rules of behavior with regard to system access. Restrictions that organizations impose on authorized individuals need not be uniform, as those restrictions may vary depending upon the trust relationships between organizations. Therefore, organizations may choose to impose different security restrictions on contractors than on state, local, or tribal governments.

This control does not apply to the use of external information systems to access public interfaces to organizational information systems (for example, individuals accessing federal information through [Making government services easier to find | USAGov](http://www.usa.gov/)). Organizations establish terms and conditions for the use of external information systems in accordance with organizational security policies and procedures. Terms and conditions address as a minimum: types of applications that can be accessed on organizational information systems from external information systems; and the highest security category of information that can be processed, stored, or transmitted on external information systems. If terms and conditions with the owners of external information systems cannot be established, organizations may impose restrictions on organizational personnel using those external systems.

The following controls are related to this control:

* AC-3
* AC-17
* AC-19
* CA-3
* PL-4
* SA-9

For more information, refer to the FIPS Publication 199.

## Responsibility

### Customer Responsibility

The customer is responsible for executing appropriate terms and conditions with whomever implements and operates the Mendix application, Mendix infrastructure, hosting infrastructure, and so on.  

## Guidance

As appropriate, customers should establish terms and conditions with other organizations to use external information systems, allowing authorized individuals to access Private Mendix Platform and/or Mendix applications, from external information systems, processing, storing, or transmitting the Private Mendix Platform data and/or Mendix application data, using external information systems.

Customers should establish access authorization procedures and keep records of which personnel and external systems are permitted to access Private Mendix Platform and its Mendix apps from external information systems. Access permissions should be regularly reviewed and updated, with timely removal of accounts no longer required. Use of firewalls, VPNs, and other network security measures is recommended to further protect access from external information systems.

## Proof and Remarks

Mendix is not responsible for this task. Customers will be the implementer and the operator for their Mendix app and the supporting infrastructure.
