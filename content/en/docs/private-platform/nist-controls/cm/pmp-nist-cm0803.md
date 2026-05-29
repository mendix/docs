---
title: "CM-08 (03) - Information System Component Inventory（Automated Unauthorized Component Detection"
linktitle: "CM-08 (03)"
url: /private-mendix-platform/nist-controls/cm-0803/
description: "Documents the Private Mendix Platform's compliance with the CM-08 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-08 (03) control.

| Control ID | CM-08 (03) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Employs automated mechanisms at an organization-defined frequency to detect the presence of unauthorized hardware, software, and firmware components within the information system.
* Takes the following actions when unauthorized components are detected: 

    * Disables network access by such components.
    * Isolates the components.
    * Notifies organization-defined personnel or roles.

### Supplemental Guidance

This control enhancement is applied in addition to the monitoring for unauthorized remote connections and mobile devices. Monitoring for unauthorized system components may be accomplished on an ongoing basis or by the periodic scanning of systems for that purpose. Automated mechanisms can be implemented within information systems or in other separate devices. Isolation can be achieved, for example, by placing unauthorized information system components in separate domains or subnets or otherwise quarantining such components. This type of component isolation is commonly referred to as sandboxing.

The following controls are related to this control:

* AC-17
* AC-18
* AC-19
* CA-7
* SI-3
* SI-4
* SI-7
* RA-5

## Responsibility

### Customer Responsibility

The customer is responsible for determining the automated mechanisms used to detect unauthorized components within the information system, including the frequency of detection. The customer is also responsible for defining the actions to be taken when unauthorized components are detected, such as disabling network access, isolating the components, or notifying designated personnel.

To operationalize this, the customer relies on the following roles:

* The Infra Implementer shall ensure that the chosen automated detection mechanisms are properly implemented and functioning as intended.
* The Infra Operator shall ensure ongoing monitoring and compliance, and shall take appropriate actions in coordination with the Customer when unauthorized components are identified.

The customer retains overall accountability for the effectiveness of the detection strategy and response actions.

## Guidance

### Customer Responsibility

To meet this control requirement, the customer should follow the guidance below.

#### Select Automated Detection Mechanisms

The customer must evaluate and select appropriate automated tools or capabilities to detect unauthorized components. These may include vulnerability scanners, configuration assessment tools, endpoint detection and response solutions, network access control systems, or continuous monitoring platforms. The detection frequency should be defined based on the system’s risk profile and operational environment (for example, continuous, daily, or weekly).

#### Define Response Actions

The customer must establish a clear response strategy for when unauthorized components are detected. Typical actions include disabling network access to the component, isolating it from the rest of the system (for example, moving to a separate subnet or sandbox), and notifying designated security or operations personnel. The customer should document these actions in an incident response or security monitoring procedure.

#### Coordinate with Implementers and Operators

The customer is responsible for communicating the selected mechanisms and response actions to the Infra Implementer and Infra Operator. The Infra Implementer must be engaged to deploy and configure the detection tools properly. The Infra Operator must be trained to monitor detection results, investigate alerts, and execute the defined response actions when unauthorized components are found.

#### Ensure Ongoing Compliance

The customer should periodically review the effectiveness of the detection mechanisms and response actions, especially after system changes or new threat intelligence. The Infra Operator should provide regular reports on detections and actions taken, which the customer uses to verify compliance and adjust the strategy as needed.