---
title: "Upgrade the Private Mendix Platform"
url: /private-mendix-platform-quickstart/upgrade/
description: "Documents the upgrade process for the Private Mendix Platform."
weight: 40
tags: ["private mendix platform",  "private platform", "upgrade"]
---

## 1 Introduction

This document provides a guide for upgrading the Private Mendix Platform.

## 2 Upgrading the Private Mendix Platform

If you have installed Private Mendix Platform before, you can upgrade it by doing the following steps:

1. Ensure that your Mendix Operator version is 2.12 or newer.
2. Reinstall PCLM as described in the [Installing Private Cloud License Manager](#install-pclm) section above.
3. Run the command `./installer platform -n=<namespace name>`, where `-n` indicates the namespace where your Private Mendix Platform is installed.
4. Click **Upgrade Namespace**.

    {{< figure src="/attachments/private-platform/pmp-upgrade1.png" >}}

5. Verify the following settings:
    
    * **Persist Config** - When enabled, this setting locks the Private Mendix Platform configuration, so that it can no longer be modified from the user interface.
    * **Project Management** - Recommended. Enables you to create and manage your app projects. Enables app projects and related settings across the portal. Must be enabled for CI/CD capabilities.
    * **Marketplace** - Recommended. Enables you to use the Private Platform's Marketplace capabilities to upload, import and manage Marketplace contents. The Marketplace enabled here is hosted entirely within your Private Mendix Platform.
    * **Marketplace Approvals** - Optional. If enabled, contents that users publish to the private Marketplace require administrator approval before publishing.
    * **Marketplace Import** - Optional. Enables content import with an external source.
    * **IDP** - Optional. Enable users to login using SSO by configuring your IdP integration.
    * **Webhook** - Optional. Webhooks allow to send information between platform and external systems, and can be triggered by events around Apps, Users, Groups, Marketplace and CI/CD.

6. Click **Run Upgrade**.

    {{< figure src="/attachments/private-platform/pmp-upgrade2.png" >}}

{{% alert color="info" %}}
For the Svix component, you can use the Svix panel to upgrade directly.
{{% /alert %}}