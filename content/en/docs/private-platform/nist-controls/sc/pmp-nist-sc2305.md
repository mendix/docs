---
title: "SC-23 (05) System and Communications Protection - Session Authenticity - Allowed Certificate Authorities"
linktitle: "SC-23 (05)"
url: /private-mendix-platform/nist-controls/sc-2305/
description: "Documents the Private Mendix Platform's compliance with the SC-23 (05) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-23 (05) control.

| Control ID | SC-23 (05) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Org |

## Control

The information system only allows the use of organization-defined certificate authorities for verification of the establishment of protected sessions.

### Supplemental Guidance

Reliance on certificate authorities (CAs) for the establishment of secure sessions includes, for example, the use of Secure Socket Layer (SSL) and/or Transport Layer Security (TLS) certificates. These certificates, after verification by the respective certificate authorities, facilitate the establishment of protected sessions between web clients and web servers.

The following controls are related to this control:

* SC-13

## Responsibility

### Customer Responsibility

It is the customer's responsibility to ensure that only validated CA certificates are used for HTTP/TLS configuration.

## Guidance

### Customer Responsibility

The Mendix platform allows for using only certificates issued by certificate authorities (CAs) approved by the Customer. The platform provides the capability to configure and enforce the use of specific CA-issued certificates for establishing protected TLS/SSL sessions.

It is the customer's responsibility to:

* Indicate which certificate authorities (CAs) are approved for use in the organization
* If providing certificates, ensure that these are issued only by approved CAs
* Define and document the list of approved CAs in organizational security policies

#### Infrastructure Implementer and App Implementer Responsibilities

* The Infra Implementer must only use certificates provided by customer-approved CAs when creating the infrastructure.
* The App Implementer must only use certificates provided by customer-approved CAs when creating the Mendix app.

#### Infrastructure Operator and App Operator Responsibilities

* Ensure that the infrastructure and Mendix App remain in compliance by only using certificates issued or reissued by Customer-approved CAs.
* Monitor certificate expiration and renewal, ensuring all new certificates come from approved CAs.
* Reject any certificates not issued by approved CAs.

## Proof and Remarks

The following evidence demonstrates compliance with SC-23 (05):

* The Mendix Operator used by Private Mendix Platform [supports custom CA trust store — enforces org-defined CAs for all runtime/app TLS](/developerportal/deploy/standard-operator/#custom-tls).
* The Admin mode of Private Mendix Platform [explicitly instructs](/private-mendix-platform/reference-guide/admin/system/#configure-import) configuring CA trust for internal HTTPS.
* The Runtime [CACertificates setting pins CA trust for apps' outbound TLS](https://docs.mendix.com/refguide/custom-settings/#cacertificates).
* Ingress TLS through `cert-manager/secretName` [restricts inbound sessions to approved CA certs](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/advanced/) 
* The [storage-use-ca-certificates flag](/developerportal/deploy/secret-store-credentials/) enforces CA trust for storage-tier TLS.
* Global Operator [applies custom CA centrally across all managed namespace](/developerportal/deploy/global-operator/)

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2305-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2305-2.png" class="no-border" >}}