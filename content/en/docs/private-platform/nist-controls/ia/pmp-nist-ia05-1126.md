---
title: "IA-05 1126 Sensitive Data in Installer"
linktitle: "IA-05 1126"
url: /private-mendix-platform/nist-controls/ia-05-1126/
description: "Documents the Private Mendix Platform's compliance with the IA-05 1126 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 1126 control.

| Control ID | IA-05 1126 |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Org |

## Control

The organization ensures that unencrypted static authenticators are not embedded in applications or access scripts or stored on function keys.

### Supplemental Guidance

Organizations exercise caution in determining whether embedded or stored authenticators are in encrypted or unencrypted form. If authenticators are used in the manner stored, then those representations are considered unencrypted authenticators. This is independent of whether that representation is perhaps an encrypted version of something else (for example, a password).

## Responsibility

### Mendix Responsibility

Private Mendix Platform installation supports retrieving environment-sensitive data from external secret storage (AWS secrets manager, Key Vault, and so on).

### Customer Responsibility

The customer must set up the external secret manager and properly configure the corresponding secrets.

## Guidance

### Customer Responsibility

Customer must implement an external secrets store to manage sensitive data.

1. Set up and configure the secret storage provider, for example, HashiCorp Vault, AWS Secret Manager or Azure Key Vault.
2. Install and configure a Kubernetes Secrets Store CSI driver, for example, AWS Secrets Manager CSI Secrets Store. This driver is installed globally for the entire cluster.
3. Configure keys at external secret manager.
4. When installing Private Mendix Platform with the Installer, select **Use Secret Provider** for the storage plan and database plan.

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051126-1.png" class="no-border" >}}

## Proof and Remarks

Selecting **AWS** as the secret provider:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051126-2.png" class="no-border" >}}

Selecting **Azure Key Vault** as the secret provider:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051126-3.png" class="no-border" >}}

Selecting **HashiCorp Vault** as the secret provider:

{{< figure src="/attachments/private-platform/nist-ia/nist-ia-051126-4.png" class="no-border" >}}
