---
title: "SC-18 System and Communications Protection - Mobile Code"
linktitle: "SC-18"
url: /private-mendix-platform/nist-controls/sc-18/
description: "Documents the Private Mendix Platform's compliance with the SC-18 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-18 control.

| Control ID | SC-18 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization: 

* Defines acceptable and unacceptable mobile code and mobile code technologies. 
* Establishes usage restrictions and implementation guidance for acceptable mobile code and mobile code technologies.
* Authorizes, monitors, and controls the use of mobile code within the information system.

### Supplemental Guidance

Decisions regarding the employment of mobile code within organizational information systems are based on the potential for the code to cause damage to the systems if used maliciously. Mobile code technologies include, for example, Java, JavaScript, ActiveX, Postscript, PDF, Shockwave movies, Flash animations, and VBScript. Usage restrictions and implementation guidance apply to both the selection and use of mobile code installed on servers and mobile code downloaded and executed on individual workstations and devices (for example, smart phones).

The following controls are related to this control:

* AU-2
* AU-12
* CM-2
* CM-6
* SI-3

For more information, refer to the NIST Special Publication 800-28; and DoD Instruction 8552.01.

## Responsibility

### Customer Responsibility

This task is not a Mendix responsibility. It is the responsibility of the Customer to determine what unacceptable mobile code and mobile code technologies are.

## Guidance

### Customer Responsibility

The Customer must define and document:

* Acceptable and unacceptable mobile code technologies (e.g., Java, JavaScript, ActiveX, PDF, and so on)
* Usage restrictions and implementation guidance for each allowed mobile code technology
* Authorization and monitoring procedures for mobile code within the information system

It is the responsibility of the Infra Implementer, App Implementer, Infra Operator, and App Operator to only use allowed mobile code and mobile code technologies throughout the lifecycle of the Mendix solution as directed by the Customer.