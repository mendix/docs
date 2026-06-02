---
title: "SC-23 (01) System and Communications Protection - Session Authenticity - Invalidate Session Identifiers at Logout"
linktitle: "SC-23 (01)"
url: /private-mendix-platform/nist-controls/sc-2301/
description: "Documents the Private Mendix Platform's compliance with the SC-23 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-23 (01) control.

| Control ID | SC-23 (01) |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system invalidates session identifiers upon user logout or other session termination.

### Supplemental Guidance

This control enhancement curtails the ability of adversaries from capturing and continuing to employ previously valid session IDs.

## Responsibility

### Customer Responsibility

This is task a Mendix responsibility. The control is implemented by the Mendix Runtime.

## Guidance

### Customer Responsibility

Session identifier invalidation is built into the Mendix Runtime session management implementation, and is therefore automatic for both Private Mendix Platform and Mendix applications.

When a user logs out or a session is terminated:

* The Mendix Runtime immediately invalidates the session identifier on the server side.
* The invalidated session identifier cannot be reused to access the system.
* Any subsequent requests using the invalidated session identifier are rejected.
* This protection applies to both user-initiated logouts and automatic session terminations (for example, timeout).

This behavior is automatic and requires no customer configuration. It prevents adversaries from capturing and reusing previously valid session identifiers.

## Proof and Remarks

For more information about session deletion, see [Mendix Session Deletion](/refguide/session-management/#session-deletion).

The Mendix runtime provides a variety of custom runtime settings to configure bespoke session lifecycle behavior.

* [com.mendix.core.SessionIdCookieName](/refguide/custom-settings/#commendixcoreSessionIdCookieName) can be set to define the name of the cookie value which represents the session ID. The default is ‘XASESSIONID’. 
* The [SessionTimeout](/refguide/custom-settings/#SessionTimeout) custom runtime setting defines after how much time a session becomes invalid (in milliseconds). 
* [AbsoluteSessionTimeout](/refguide/custom-settings/#AbsoluteSessionTimeout) defines after how much time a session becomes invalid (in milliseconds). After that timeout, a session becomes eligible for removal. As opposed to the SessionTimeout, the AbsoluteSessionTimeout timeout is not affected by user interactions. 
* [SessionValidationTimeout](/refguide/custom-settings/#AbsoluteSessionTimeout) defines the maximum caching time (in milliseconds) for sessions. This means that after signing out of a session, the session might still be accessible for the configured time on other nodes of the cluster, but only if that node has handled a previous request on that session just before the logout happened. Lowering it makes the cluster more secure, because the chance that the session is still accessible within the configured time window is smaller.
* [SessionKeepAliveUpdateBatchSize](/refguide/custom-settings/#SessionKeepAliveUpdateBatchSize) specifies how many sessions should be updated per batch when updating the LastActive attribute in the periodic system task.
* [EnableKeepAlive](/refguide/custom-settings/#EnableKeepAlive) defines whether the web client sends a keep alive request every SessionTimeout/2 milliseconds in order to prevent a session timeout. Each click in the browser also acts as KeepAlive. Disabling this property will result in the user being logged out automatically after SessionTimeout milliseconds of inactivity (default 10 minutes), even if the browser remains open.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2301-1.png" class="no-border" >}}

For more information about session management, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#preferences-1).

The **Logout All Users** option is available in Admin mode under [User Management > Actions](/private-mendix-platform/reference-guide/admin/company/#user-management):

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2301-2.png" class="no-border" >}}

The Private Mendix Platform System Admin can go to **Settings > Identity & Access Settings** and configure the maximum period for automatic session expiration, with the option to show a notification before logging the user out.

{{< figure src="/attachments/private-platform/nist-sc/nist-sc-2301-3.png" class="no-border" >}}