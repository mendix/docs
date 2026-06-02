---
title: "AC-19 Access Control For Mobile Devices"
linktitle: "AC-19"
url: /private-mendix-platform/nist-controls/ac-19/
description: "Documents the Private Mendix Platform's compliance with the AC-19 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-19 control.

| Control ID | AC-19 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Establishes usage restrictions, configuration requirements, connection requirements, and implementation guidance for organization-controlled mobile devices.
* Authorizes the connection of mobile devices to organizational information systems.

### Supplemental Guidance

A mobile device is a computing device that: 

1. Has a small form factor such that it can easily be carried by a single individual.
2. Is designed to operate without a physical connection (for example, wirelessly transmit or receive information)
3. Possesses local, non-removable or removable data storage.
4. Includes a self-contained power source. 

Mobile devices may also include voice communication capabilities, on-board sensors that allow the device to capture information, and/or built-in features for synchronizing local data with remote locations. Examples include smart phones, e-readers, and tablets. 

Mobile devices are typically associated with a single individual and the device is usually in close proximity to the individual; however, the degree of proximity can vary depending upon on the form factor and size of the device. The processing, storage, and transmission capability of the mobile device may be comparable to or merely a subset of desktop systems, depending upon the nature and intended purpose of the device. 

Due to the large variety of mobile devices with different technical characteristics and capabilities, organizational restrictions may vary for the different classes and types of such devices. Usage restrictions and specific implementation guidance for mobile devices include, for example, the following:

* Configuration management
* Device identification and authentication
* Implementation of mandatory protective software (for example, malicious code detection, firewall)
* Scanning devices for malicious code
* Updating virus protection software
* Scanning for critical software updates and patches
* Conducting primary operating system (and possibly other resident software) integrity checks
* Disabling unnecessary hardware (for example, wireless, infrared)

Organizations are cautioned that the need to provide adequate security for mobile devices goes beyond the requirements in this control. Many safeguards and countermeasures for mobile devices are reflected in other security controls in the catalog allocated in the initial control baselines as starting points for the development of security plans and overlays using the tailoring process. There may also be some degree of overlap in the requirements articulated by the security controls within the different families of controls. AC-20 addresses mobile devices that are not organization-controlled.

The following controls are related to this control:

* AC-3
* AC-7
* AC-18
* AC-20
* CA-9
* CM-2
* IA-3
* MP-2
* MP-4
* MP-5
* PL-4
* SC-7
* SC-43
* SI-3
* SI-4

For more information, refer to the OMB Memorandum 06-16 and NIST Special Publications 800-114, 800-124, and 800-164.

## Responsibility

### Customer Responsibility

The customer is responsible for establishing usage restrictions, configuration requirements, connection requirements, and implementation guidance for organization-controlled mobile devices.

The customer must also authorize the connection of mobile devices to organizational information systems, according to their policy.

## Guidance

Customers must define policies and procedures for mobile device usage, including allowable device types, required security configurations (for example, mandatory protective software, firmware updates, disabling unnecessary hardware), and conditions for connecting devices to information systems.

Mobile device connection to organizational systems should be explicitly authorized and logged, ensuring only approved devices with compliant security configurations are allowed access.

Device management practices may include periodic scanning for malicious code, mandatory virus protection updates, operating system integrity checks, and device authentication.

Infrastructure implementers and operators are responsible for managing mobile device capabilities in accordance with customer-defined requirements and policies.

These controls apply at the physical and network layers (OSI Model Level 1); they do not pertain to application-layer controls or to the Mendix platform.

The customer is solely responsible for compliance with mobile device access controls.

## Proof and Remarks

This control is not relevant for applications (level 7).