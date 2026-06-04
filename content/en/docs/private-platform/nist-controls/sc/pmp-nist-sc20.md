---
title: "SC-20 System and Communications Protection - Secure Name and Address Resolution Service (Authoritative Source)"
linktitle: "SC-20"
url: /private-mendix-platform/nist-controls/sc-20/
description: "Documents the Private Mendix Platform's compliance with the SC-20 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-20 control.

| Control ID | SC-20 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system:

* Provides additional data origin and integrity artifacts along with the authoritative name resolution data the system returns in response to external name and address resolution queries.
* Provides the means to indicate the security status of child zones and (if the child supports secure resolution services) to enable verification of a chain of trust among parent and child domains, when operating as part of a distributed, hierarchical namespace.

### Supplemental Guidance

This control enables external clients including, for example, remote Internet clients, to obtain origin authentication and integrity verification assurances for the host/service name to network address resolution information obtained through the service. Information systems that provide name and address resolution services include, for example, domain name system (DNS) servers. Additional artifacts include, for example, DNS Security (DNSSEC) digital signatures and cryptographic keys. DNS resource records are examples of authoritative data. The means to indicate the security status of child zones includes, for example, the use of delegation signer resource records in the DNS. The DNS security controls reflect (and are referenced from) OMB Memorandum 08-23.

The following controls are related to this control:

* AU-10
* SC-8
* SC-12
* SC-13
* SC-21
* SC-22

For more information, refer to the OMB Memorandum 08-23; and NIST Special Publication 800-81.

## Responsibility

### Customer Responsibility

This task is not a Mendix responsibility. It is the customer's responsibility to work with the Infra Implementer to ensure that DNSSEC is properly implemented.

## Guidance

### Customer Responsibility

The Customer and Infra Implementer must ensure that:

* DNS servers provide DNSSEC digital signatures and cryptographic keys with authoritative name resolution data.
* The DNS infrastructure supports delegation signer (DS) resource records to establish chain of trust.
* External clients can verify data origin authentication and integrity of DNS responses.
* DNSSEC is properly configured in accordance with OMB Memorandum 08-23 and NIST SP 800-81.

It is the responsibility of the Infra Operator to ensure ongoing compliance with DNSSEC requirements.
