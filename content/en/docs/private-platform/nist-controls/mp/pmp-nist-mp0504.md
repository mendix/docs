---
title: "MP-05 (04) - Cryptographic Protection"
linktitle: "MP-05 (04)"
url: /private-mendix-platform/nist-controls/mp-0504/
description: "Documents the Private Mendix Platform's compliance with the MP-05 (04) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MP-05 (04) control.

| Control ID | MP-05 (04) |
| --- | --- |
| Control category | MP - Media Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system implements cryptographic mechanisms to protect the confidentiality and integrity of information stored on digital media during transport outside of controlled areas.

### Supplemental Guidance

This control enhancement applies to both portable storage devices (for example, USB memory sticks, compact disks, digital video disks, external or removable hard disk drives) and mobile devices with storage capability (for example, smart phones, tablets, e-readers).

The following controls are related to this control:

* [MP-02](/private-mendix-platform/nist-controls/mp-02/)

For more information, refer to the FIPS Publication 199 and NIST Special Publication 800-60.

## Responsibility

### Shared Responsibility

While the Mendix Runtime provides the capability for encryption at rest, the overall responsibility for defining, configuring, and ensuring compliance with data encryption policies when digital information is stored on devices transported outside of controlled areas lies with the customer, along with their App and Infra Implementers and Operators. 

## Guidance

### Shared Responsibility

The Mendix Runtime provides the capability for encryption at rest of all data that is a part of the Mendix app, including data stored on mobile devices.  

It is the responsibility of the Infra Implementer to ensure that encryption at rest is properly configured for the infrastructure and Private Mendix Platform.  

It is the responsibility of the App Implementer to ensure the Mendix app is configured for encryption at rest, and also properly encrypts all data saved or stored manually by the user as directed by customer requirements.  

It is the responsibility of the Infra Operator and the App Operator to ensure ongoing compliance with data encryption for information stored on digital media during transport outside of controlled areas as directed by the customer.

## Proof and Remarks

While the Mendix Runtime provides the capability for encryption at rest, the overall responsibility for defining, configuring, and ensuring compliance with data encryption policies when digital information is stored on devices transported outside of controlled areas lies with the customer, along with their App and Infra Implementers and Operators.  

Additionally, mobile device encryption at rest is supported (Apple and Android), as well as custom file-storage encryption. For more information, refer to the following topics:

* [Offline Data Security: Local Data Safety](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/local-data-security/#local-data-safety)
* [Updating Encryption Keys for S3 File Storage](/refguide/s3-encryption-key-update/)
