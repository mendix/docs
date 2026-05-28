---
title: "SC-21 System and Communications Protection - Secure Name and Address Resolution Service (Recursive or Caching Resolver)"
linktitle: "SC-21"
url: /private-mendix-platform/nist-controls/sc-21/
description: "Documents the Private Mendix Platform's compliance with the SC-21 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-21 control.

| Control ID | SC-21 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system requests and performs data origin authentication and data integrity verification on the name and address resolution responses the system receives from authoritative sources.

### Supplemental Guidance

Each client of name resolution services either performs this validation on its own, or has authenticated channels to trusted validation providers. Information systems that provide name and address resolution services for local clients include, for example, recursive resolving or caching domain name system (DNS) servers. DNS client resolvers either perform validation of DNSSEC signatures, or clients use authenticated channels to recursive resolvers that perform such validations. Information systems that use technologies other than the DNS to map between host/service names and network addresses provide other means to enable clients to verify the authenticity and integrity of response data.

The following controls are related to this control:

* SC-20
* SC-22

For more information, refer to the NIST Special Publication 800-81.

## Responsibility

### Customer Responsibility

This task is not a Mendix responsibility. It is the customer's responsibility to work with the Infra Implementer to ensure that DNSSEC validation is properly implemented.

## Guidance

### Customer Responsibility

The customer and Infra Implementer must ensure that:

* DNS client resolvers validate DNSSEC signatures on responses from authoritative DNS servers
* Recursive resolvers or caching DNS servers perform data origin authentication and integrity verification
* Clients use authenticated channels to trusted validation providers if not performing validation directly
* DNS infrastructure supports validation of DNSSEC signatures in accordance with NIST SP 800-81

It is the responsibility of the Infra Operator to ensure ongoing compliance with DNSSEC validation requirements.