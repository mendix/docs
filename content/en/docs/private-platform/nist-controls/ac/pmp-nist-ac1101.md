---
title: "AC-11 (01) - Session Lock (Pattern-Hiding Displays)"
linktitle: "AC-11 (01)"
url: /private-mendix-platform/nist-controls/ac-1101/
description: "Documents the Private Mendix Platform's compliance with the AC-11 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-11 (01) control.

| Control ID | AC-11 (01) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership |  Mendix - Private Mendix Platform, Customer - Org |

## Control

The information system conceals, through the session lock, information previously visible on the display with a publicly viewable image.

### Supplemental Guidance

Publicly viewable images can include static or dynamic images, for example, patterns used with screen savers, photographic images, solid colors, clock, battery life indicator, or a blank screen, with the additional caveat that none of the images convey sensitive information.

For more information, refer to OMB Memorandum 06-16.

## Responsibility

### Customer Responsibility

The customer administrator must configure this feature properly according to the organization's own access policy.

## Guidance

### Customer Responsibility

Private Mendix Platform provides the setting to configure idleness detection. Administrators can enable **Detect User Idle**, then configure the **Maximum duration before session lock** and enable **Require Pin to unlock**. This setting will lock user’s session after setting duration passed and ask for Pin to unlock.

## Proof and Remarks

To configure the setting, go to **Admin > Settings > Identity & Access**:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-1101-1.png" class="no-border" >}}

After the time specified in the **Maximum duration before session lock time** setting passes, the user needs to enter a PIN to unlock their session:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-1101-2.png" class="no-border" >}}

For information about implementing the function in your Mendix apps by building a widget which runs a JavaScript snippet with idle detection API, refer to the following topics:

* [Idle Detection API](https://developer.mozilla.org/en-US/docs/Web/API/Idle_Detection_API)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets-10/)