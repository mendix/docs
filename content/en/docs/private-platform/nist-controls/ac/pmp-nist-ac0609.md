---
title: "AC-06 (09) Auditing Use Of Privileged Functions"
linktitle: "AC-06 (09)"
url: /private-mendix-platform/nist-controls/ac-0609/
description: "Documents the Private Mendix Platform's compliance with the AC-06 (09) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 (09) control.

| Control ID | AC-06 (09) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system audits the execution of privileged functions.

### Supplemental Guidance

Misuse of privileged functions, either intentionally or unintentionally by authorized users, or by unauthorized external entities that have compromised information system accounts, is a serious and ongoing concern and can have significant adverse impacts on organizations. Auditing the use of privileged functions is one way to detect such misuse, and in doing so, help mitigate the risk from insider threats and the advanced persistent threat (APT). Related control: AU-2.

## Responsibility

### Mendix Responsibility

Private Mendix Platform provides audit logs for execution of privileged functions. The audit logs must be targetable, meaning that the customer admin can determine where audit logs are sent or written to. 

### Customer Responsibility

The customer admin is responsible for determining where audit logs are sent (written to), and planning on more than one target database or S3 storage.

### Shared Responsibility

* App level – The customer is responsible for implementing this log and audit control in an appropriate manner inside their own apps. The Mendix Runtime logs admin functions that are executed within its scope. Whoever builds and operates the Mendix apps is responsible for logging and auditing administrative functions in these scopes.
* Platform level – The Private Mendix Platform logs all executions of privileged functions.
* Infrastructure level – The Mendix Kubernetes Operator and Interactor components log admin functions that are executed within their scopes. Whoever builds and operates the running infrastructure is responsible for logging and auditing administrative functions in those scopes.

## Guidance

### Mendix Responsibility

* Private Mendix Platform implements log all executions of the following privileged functions:

    * All admin actions

        * All changes to resources, including apps, components, and so on
        * All changes to general and feature-specific settings
        * All changes to accounts, users, and SCIM offboarding

    * All group management actions

        * Group admin changes
        * Group membership changes

    * All user actions

        * First-time SSO login, password resets, PAT creation
        * App owner, team membership, and sharing group changes
        * Deploy actions, changes to the Environment details pag, constants, and so on
        * API change actions for each user

* Private Mendix Platform provides audit logs which must be *targetable*, meaning the customer admin can determine where audit logs are sent (written to), and plan on more than one target. This includes the following:

    * Support to directly write audit log to external database
    * Support to externally persist (archive) audit log after expiration of duration
    * Support to write logfiles to multiple storage targets

* Private Mendix Platform provides the **Customer Admin > Manage > (Platform) > Activity Log > Log Settings** tab along with the following:

    * Provide setting to define target storage to persist (Archive) logs after expiration of duration
    * Provide setting to define external target database to send (write) logs
    * Provide setting to define logging format (PDF, DOC, JSON, XML)

### Customer Responsibility

* The customer admin is responsible for determine where audit logs are sent/written to, and plan on more than one target database or S3 storage.
* Customer is responsible for setup and manage the infra resource of the target database or s3 storage where audit logs are sent (written to).

### Shared Responsibility

* MX4PC, and the Mendix Runtime log Admin functions that are executed within their scope.  
* The customer admin can use the kubectl tool to get the logs of Mendix Operator, interactor (agent), and Private Mendix Platform Runtime by running the following command:

```text
kubectl -n {platform-deployed-namespace} logs {mendix-agent-pod-name} > mendix-agent.log
kubectl -n {platform-deployed-namespace} logs {mendix-operator-pod-name} > mendix-operator.log
kubectl -n {platform-deployed-namespace} logs {mxplatform-master-pod-name} -c mendix > mxplatform-master-mendix.log
kubectl -n {platform-deployed-namespace} logs {mxplatform-master-pod-name} -c m2ee-sidecar > mxplatform-master-m2ee-sidecar.log
Whomever builds & operates the Mendix Apps and the running infrastructure is responsible for logging and auditing administrative functions in those scopes.
```

## Proof and Remarks

Private Mendix Platform provides the following settings to define S3 storage targets to persist (archive) logs:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0609-1.png" class="no-border" >}}

Private Mendix Platform provides the following settings to define external database targets to send (write) logs:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0609-2.png" class="no-border" >}}

Private Mendix Platform provides the following settings to define logging the format (PDF, DOC, JSON, XML):

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0609-3.png" class="no-border" >}}

Private Mendix Platform provides the following settings to configure the period (duration) to archive or backup the logs permanently:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0609-4.png" class="no-border" >}}

Private Mendix Platform provides the following settings archive, back up, or download logs permanently after a period (duration) in days:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0609-5.png" class="no-border" >}}
