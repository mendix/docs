---
title: "AC-12 Force Logout Session Termination"
linktitle: "AC-12"
url: /private-mendix-platform/nist-controls/ac-12/
description: "Documents the Private Mendix Platform's compliance with the AC-12 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-12 control.

| Control ID | AC-12 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime |

## Control

Session termination addresses the termination of user-initiated logical sessions, in contrast to [SC-10](https://csf.tools/reference/nist-sp-800-53/r5/sc/sc-10/), which addresses the termination of network connections associated with communications sessions (that is, network disconnect). A logical session (for local, network, and remote access) is initiated whenever a user (or process acting on behalf of a user) accesses an organizational system. Such user sessions can be terminated without terminating network sessions. Session termination ends all processes associated with a user's logical session except for those processes that are specifically created by the user (that is, session owner) to continue after the session is terminated. Conditions or trigger events that require automatic termination of the session include organization-defined periods of user inactivity, targeted responses to certain types of incidents, or time-of-day restrictions on system use.

## Responsibility

### Mendix Responsibility

Private Mendix Platform provides a way to force logout all users. Private Mendix Platform admins can click a button to terminate all active sessions.

## Guidance

### Mendix Responsibility

In Admin mode, Private Mendix Platform admins can access the **Logout All Users** option under **User Management > Actions**. 

## Proof and Remarks

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-12-1.png" class="no-border" >}}
