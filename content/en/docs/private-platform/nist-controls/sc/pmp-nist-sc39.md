---
title: "SC-39 System and Communications Protection - Process Isolation"
linktitle: "SC-39"
url: /private-mendix-platform/nist-controls/sc-39/
description: "Documents the Private Mendix Platform's compliance with the SC-39 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-39 control.

| Control ID | SC-39 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime |

## Control

The information system maintains a separate execution domain for each executing process.

### Supplemental Guidance

Information systems can maintain separate execution domains for each executing process by assigning each process a separate address space. Each information system process has a distinct address space so that communication between processes is performed in a manner controlled through the security functions, and one process cannot modify the executing code of another process. Maintaining separate execution domains for executing processes can be achieved, for example, by implementing separate address spaces. This capability is available in most commercial operating systems that employ multi-state processor technologies.

The following controls are related to this control:

* AC-3
* AC-4
* AC-6
* SA-4
* SA-5
* SA-8
* SC-82
* SC-3

## Responsibility

### Mendix Responsibility

This is a Mendix responsibility. The control is inherently implemented by the Mendix Runtime, Mendix Operator, and Private Mendix Platform architecture.

## Guidance

### Mendix Responsibility

Process isolation is naturally achieved through the architecture of the Mendix Runtime and the containerized deployment model used by Private Mendix Platform.

#### Execution Domain Separation Mechanisms

* Each Mendix application instance runs in a separate Kubernetes pod with isolated process space.
* The Mendix Runtime maintains separate execution domains for each application instance.
* Each pod has its own separate address space enforced by the underlying operating system and container runtime.
* Kubernetes namespace isolation provides additional logical separation between applications.
* The Mendix Operator manages application lifecycles while maintaining isolation between instances.
* Inter-process communication is controlled through Kubernetes network policies and service mesh.

#### Security Guarantees

* One application instance cannot access the memory or modify the code of another instance.
* Each process has a distinct address space managed by the container runtime (containerd/CRI-O).
* Communication between processes is mediated through controlled network interfaces.
* Kubernetes resource limits (CPU, memory) enforce isolation at the resource level.
* Security contexts and seccomp profiles further restrict process capabilities.

This isolation is automatic and inherent to the platform architecture. No customer configuration is required to achieve process isolation, as it is enforced by the underlying Kubernetes and container runtime technologies.

## Proof and Remarks

### Pod-per-App Isolation

For more information, see [Production Environments](/developerportal/deploy/private-cloud-environments/#production-environments).

### Namespace Isolation

For more information, see [Non-production Environments: Fine-grained](/developerportal/deploy/private-cloud-environments/#fine-grained).

### Containerized Architecture

For more information, see [Containerized Mendix App Architecture](/developerportal/deploy/private-cloud-cluster/#containerized-architecture).

### One Operator per Namespace

You must ensure that each namespace is exclusively managed by a single Operator. The deployment of two Operators, particularly with distinct versions, to manage the same namespace, may lead to conflicts, resulting in the cancellation and rollback of each Operator's modifications. For more information, see [Running the Mendix Operator in Standard Mode](/developerportal/deploy/standard-operator/).

### Resource Limits (CFS Process Termination Due to Out-of Memory Issues)

For more information, see the following topics:

* [Custom JVM Heap Memory](/developerportal/deploy/private-cloud-deploy/#custom-jvm-heap-memory)
* [Out of Memory Killed Error](/developerportal/deploy/private-cloud-deploy/#out-of-memory-killed-error)