---
title: "IR-06 Incident Reporting"
linktitle: "IR-06"
url: /private-mendix-platform/nist-controls/ir-06/
description: "Documents the Private Mendix Platform's compliance with the IR-06 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IR-06 control.

| Control ID | IR-06 |
| --- | --- |
| Control category | IR - Incident Response |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Customer - Infra |

## Control

The organization:

* Requires personnel to report suspected security incidents to the organizational incident response capability within an organization-defined time period.
* Reports security incident information to organization-defined authorities.

### Supplemental Guidance

The intent of this control is to address both specific incident reporting requirements within an organization and the formal incident reporting requirements for federal agencies and their subordinate organizations. Suspected security incidents include, for example, the receipt of suspicious email communications that can potentially contain malicious code. 

The types of security incidents reported, the content and timeliness of the reports, and the designated reporting authorities reflect applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance. Current federal policy requires that all federal agencies (unless specifically exempted from such requirements) report security incidents to the United States Computer Emergency Readiness Team (US-CERT) within specified time frames designated in the US-CERT Concept of Operations for Federal Cyber Security Incident Handling.

The following controls are related to this control:

* IR-04
* IR-05
* IR-08

For more information, refer to the NIST Special Publication 800-61, and the [Cybersecurity and Infrastructure Security Agency](https://www.cisa.gov/) webpage.

## Responsibility

### Mendix Responsibility

Mendix is responsible for monitoring, reporting, and responding to security incidents and vulnerabilities in the Mendix Runtime, Mendix Operator, Private Mendix Platform and Studio Pro, following applicable U.S. government regulations and adhering to the Mendix security incident management processes.

### Customer Responsibility

The customer is responsible for ensuring that security incidents and vulnerabilities within their scope are properly reported and addressed.

## Guidance

### Mendix Responsibility

Mendix reports and responds to security incidents and vulnerabilities within the Mendix Runtime, Mendix Operator, Private Mendix Platform and Studio Pro in accordance with applicable U.S. government regulations and aligned with the Mendix security incident management processes.

### Customer Responsibility

It is the responsibility of the Customer, Infra Implementer, App Implementer, Infra Operator, and App Operator to report and respond to security incidents and vulnerabilities within their scope of work and responsibility.

## Proof and Remarks

Mendix meets or exceeds US Federal Regulations around CVE remediation times. See our Vulnerability Management policy in [Conveyor](https://app.conveyor.com/profile/mendix) for more information.

{{< figure src="/attachments/private-platform/nist-ir/nist-ir-06-1.png" class="no-border" >}}
