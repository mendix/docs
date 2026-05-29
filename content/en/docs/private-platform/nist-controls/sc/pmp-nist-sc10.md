---
title: "SC-10 System and Communications Protection - Network Disconnect"
linktitle: "SC-10"
url: /private-mendix-platform/nist-controls/sc-10/
description: "Documents the Private Mendix Platform's compliance with the SC-10 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-10 control.

| Control ID | SC-10 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Mendix - Operator, Customer - Infra, Customer - Org |

## Control

The information system terminates the network connection associated with a communications session at the end of the session or after an organization-defined time period of inactivity.

### Supplemental Guidance

This control applies to both internal and external networks. Terminating network connections associated with communications sessions include, for example, de-allocating associated TCP/IP address/port pairs at the operating system level, or de-allocating networking assignments at the application level if multiple application sessions are using a single, operating system-level network connection. Time periods of inactivity may be established by organizations and include, for example, time periods by type of network access or for specific network accesses.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix and the customer.

## Guidance

### Mendix Responsibility

The Mendix Runtime supports network disconnection and timeouts in accordance with industry standards. Private Mendix Platform leverages Kubernetes-native networking and service mesh capabilities to manage network connection lifecycles.

Specifically, the platform provides the following mechanisms for network session termination:

* TCP connection timeouts are enforced at the ingress controller level (for example, NGINX) to terminate idle network connections after a configurable period of inactivity.
* The Mendix Runtime terminates network connections associated with ended user sessions, de-allocating the associated resources at the application level.
* Service mesh integration (Linkerd or Istio, if deployed) provides additional network-level connection management, including automatic termination of idle connections and mTLS session lifecycle management.
* Kubernetes network policies enforce connection boundaries, ensuring that terminated sessions do not maintain residual network paths.

### Customer Responsibility

It is the customer's responsibility to determine an appropriate network connection timeout for the Mendix solution deployed in their environment. The customer must:

* Define organization-specific inactivity timeout periods for network connections, considering the sensitivity of the data and the risk profile of the environment.
* Ensure that the infrastructure (for example, load balancers, firewalls, ingress controllers) is configured to enforce the defined network connection timeout policies.
* Ensure that the Mendix App terminates network sessions in alignment with the Customer's directives. It is the responsibility of the App Implementer to configure appropriate timeout settings within the Mendix application.
* Ensure that the Infra Operator maintains ongoing network session termination and timeouts as directed by the Customer throughout the lifecycle of the Mendix solution.

## Proof and Remarks

Mendix supports configuring session timeouts and configuring related settings. The documentation below can be referenced for the details and associated settings: 

* [Session Management](/refguide/session-management/)
* [Advanced Custom Settings in Mendix Runtime](/refguide/tricky-custom-runtime-settings/#session-duration)
* [Runtime Customization](/refguide/custom-settings/#SessionTimeout)

The custom runtime settings can be configured on the **Runtime** tab of the environment details page.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-10-1.png" class="no-border" >}}