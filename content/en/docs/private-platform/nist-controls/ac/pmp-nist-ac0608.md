---
title: "AC-06 (08) Least Privilege (Privilege Levels For Code Execution)"
linktitle: "AC-06 (08)"
url: /private-mendix-platform/nist-controls/ac-0608/
description: "Documents the Private Mendix Platform's compliance with the AC-06 (08) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 (08) control.

| Control ID | AC-06 (08) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system prevents organization-defined software from executing at higher privilege levels than users executing the software.

### Supplemental Guidance

In certain situations, software applications or programs need to execute with elevated privileges to perform required functions. However, if the privileges required for execution are at a higher level than the privileges assigned to organizational users invoking such applications or programs, those users are indirectly provided with greater privileges than assigned by organizations.

## Responsibility

### Mendix Responsibility

The Mendix Operator team is responsible for developing and maintaining the official runtime base image, which always runs as a non-privileged user (UID=1001, non-root). This image is required for all Mendix apps, including the Private Mendix Platform itself, ensuring that neither the Platform nor user applications can execute as privileged users.

Mendix provides mechanisms (such as integration with AWS IRSA) to allow binding of restricted cloud roles, supporting the enforcement of least privilege cloud permissions for apps.

The team ensures the security and compliance of the runtime image, platform services, and permission enforcement mechanisms, performing ongoing assessments and patching of any discovered vulnerabilities.

### Customer Responsibility

The customer is responsible for the following tasks:

* Deploy and use only the official Mendix runtime base image. Never modify the image to elevate user permissions; all applications must run as a non-privileged user.
* Correctly configure AWS IRSA or similar cloud-native role bindings, granting only those permissions strictly needed for each Mendix App to function, following the principle of least privilege and avoiding over-provisioning.
* Regularly review and refine cloud permissions assigned through IRSA, and align them with best practices and the operational requirements of each app.

## Guidance

### Customer Responsibility

Always follow official guidance and use the runtime base image provided by Mendix Operator, which enforces application processes to run under UID=1001. Never run applications as root or any other privileged user.

Make full use of IRSA (or equivalent mechanisms) for providing cloud permissions. Configure every app to have access only to those AWS resources necessary for its business use case - no more, no less.

Periodically review all assigned roles/policies and remove unnecessary permissions from app service accounts ("zero trust, least privilege").

When extending Apps or integrating additional components, do not attempt to escalate container or process privileges. Any request for additional cloud permissions must be risk-assessed and why it is strictly necessary must be justified.

Operations and development teams should routinely audit app and platform permissions, continually improving the baseline in collaboration with Mendix support.

## Proof and Remarks

Mendix applications run with normal user permissions and do not require privilege permissions, or permission escalation.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0608-1.png" class="no-border" >}}

Private Mendix Platform offers a default runtime base image which uses normal user permissions to run Mendix applications.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0608-2.png" class="no-border" >}}

For information about configuring Mendix storage plans with IRSA, see [Storage Plans](/developerportal/deploy/private-cloud-storage-plans/#walkthrough-aws-irsa).