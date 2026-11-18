---
title: "System Administrator Settings - Advanced"
linktitle: "Advanced"
url: /private-mendix-platform/admin-system/advanced/
description: "Provides details on the advanced settings that are available to system administrators."
weight: 30
---

## Introduction

In this section, you can adjust the advanced configuration settings of your Private Mendix Platform.

## Capabilities

The settings in this section allow you to configure the basic aspects of your Private Mendix Platform:

* **Enable App Projects?** - Recommended. Enables you to create and manage your app projects. Enables app projects and related settings across the portal. Must be enabled for CI/CD capabilities.
* **Enable Marketplace?** - Recommended. Enables you to use the Private Platform's Marketplace capabilities to upload, import and manage Marketplace contents. The Marketplace enabled here is hosted entirely within your Private Mendix Platform.
* **Enable Build and Deploy** - Recommended. Enables you to use the Private Platform's CI/CD capabilities to build and deploy apps. Enables the Build and Deploy pipeline, environments, metrics, logging, and related settings.
* **Enable Identity & Access Integration?** - Optional. Enable users to log in using SSO by configuring your IdP integration.
* **Allow sign up?** - Optional. Enable users to log in with a local user account, instead of or in addition to SSO.
* **Enable Webhooks?** - Optional. Webhooks allow to send information between platform and external systems, and can be triggered by events around Apps, Users, Groups, Marketplace and CI/CD.
* **Enable License Management?** - Recommended. Upload your license bundle to automatically provision app licenses through Private Cloud License Manager. For more information, see Private Cloud License Manager.

## Operational

In this section, you can access the list of scheduled events and the Mx Model Reflection tool.

### Scheduled Event

This tab shows a list of all the scheduled tasks and actions in the system, together with start time, end time, and status.

{{< figure src="/attachments/private-platform/pmp-wizard6.png" class="no-border" >}}

### Mx Model Reflection

For more information about this platform-supported module, refer to [Mx Model Reflection](/appstore/modules/model-reflection/).
