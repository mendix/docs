---
title: "AC-11 Make Session Lock Duration and Timeout Configurable"
linktitle: "AC-11"
url: /private-mendix-platform/nist-controls/ac-11/
description: "Documents the Private Mendix Platform's compliance with the AC-11 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-11 control.

| Control ID | AC-11 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership |  Mendix - Private Mendix Platform, Customer - Org |

## Control

The information system:

* Prevents further access to the system by initiating a session lock after an organization-defined time period of inactivity or upon receiving a request from a user.
* Retains the session lock until the user reestablishes access using established identification and authentication procedures.

## Responsibility

### Mendix Responsibility

It is the responsibility of Mendix to provide the ability for time-based inactivity session locks in both Private Mendix Platform as well as for customers to implement these locks in their own Mendix applications.

### Customer Responsibility

It is the customer's responsibility to determine appropriate duration inactive session locks.

It is the responsibility of the Infra Implementer and Operator to configure these session locks in Private Mendix Platform, and keep them current based on the customer's needs.

It is the App Implementer and Operator's responsibility to configure inactive session locks for individual Mendix applications in compliance with the customer's needs.

## Guidance

### Customer Responsibility

#### Infra Implementer and Operator

In Private Mendix Platform, the session lock is configurable. The user can configure the length of a session duration, and define if a notification will be shown to the user before the session duration ends.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-11-1.png" class="no-border" >}}

#### App Implementer and Operator

Inactive session locks for individual Mendix applications can be implemented with a Mendix pluggable widget plus JavaScript absolute timeout logic.

The following is a recommended implementation pattern and flow:

1. Read the configured timeout value.

    1. Create a custom pluggable widget that accepts **sessionTimeoutSeconds** (and optionally **warningBeforeSeconds**) as widget properties.
    2. Bind these properties to an application-local configuration source (for example, a constants module, a settings entity, or an admin-managed page).
    3. Define governance for these values at the customer application level, including change approval, testing, and release controls.

2. Start absolute session timers at login or session creation.

    1. When the user session is established, record the session start time (or receive it from a trusted backend source).
    2. Use **setTimeout** to schedule a warning before expiration and a forced lock or logout at the configured timeout.
    3. Do not reset these timers based on user interaction. Activity must not extend the session lifetime.

3. Enforce locking and re-authentication.

    1. When absolute timeout is reached, block further interaction with protected pages.
    2. Redirect users to the login flow or a dedicated re-authentication page, and require valid authentication before access is restored.
   3. Log session-expiration lock events (and optional warning acknowledgements) in application audit logs when required by policy.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-11-2.png" class="no-border" >}}

For more information, refer to the following topics:

* Mendix Pluggable Widgets Overview - [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* Build a Pluggable Widget (Mendix How-to) - [Build a Pluggable Web Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/)
* MDN Web Docs - [setTimeout - Window: setTimeout() method - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
* MDN Web Docs - [clearTimeout - Window: clearTimeout() method - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
* MDN Web Docs - [Date.now - Date.now() - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)

{{% alert color="info" %}}
Customer application teams should document their chosen timeout values, warning behavior, and re-authentication flow in application runbooks, so that operational and development teams can apply configuration changes consistently.
{{% /alert %}}

## Proof and Remarks

To access the configuration page, in Private Mendix Platform, go to **Admin > Settings > Identity & Access > Preferences**:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-11-3.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-11-4.png" class="no-border" >}}

The Private Mendix Platform session timeout configuration applies only to Private Mendix Platform sessions and does not control sessions inside customer-hosted Mendix applications. If customers require equivalent AC-11-compliant behavior in their own applications, they must implement the full session-expiration and re-authentication flow independently within the app, as discussed above.

For more details on how to properly configure and implement inactive session locks for individual Mendix applications, see [Session Management](/refguide/session-management/).