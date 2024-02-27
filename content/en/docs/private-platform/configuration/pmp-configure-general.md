---
title: "Configure the General Settings of the Private Mendix Platform"
linktitle: "Configure the General Settings"
url: /private-mendix-platform-configuration/general/
description: "Documents the general configuration for the Private Mendix Platform."
weight: 10
tags: ["private mendix platform",  "private platform", "general configuration"]
---

## 1 Configuring General Settings

General configuration settings allow you to manage the basic aspects of your Private Mendix Platform, such as the platform name and branding, toggling certain capabilities on or off, and viewing the licensing status.. The settings in this section are largely configured  when you run the initial configuration wizard, but you can still review and adjust them later during the implementation process.

## 2 General

The **General** tab allows you to configure information about your organization, and optionally also the Certified Mendix Partner that is working with you on implementing Private Mendix Platform. You can also use it to configure your locale settings.

{{% alert color="info" %}}
Changing your locale sets locale-dependent formats, such as date and time, to the preferred format of the selected locale. The settings are applied to the Private Mendix Platform (for example, in the Marketplace or Developer Portal), not in the apps created through the Platform.
{{% /alert %}}

## 3 Branding

The settings in this section allow you to configure custom branding for your Private Mendix Platform. You can customize the title of the Platform as shown in the top bar, upload your logo, or change the image on the login page.

{{< figure src="/attachments/private-platform/pmp-wizard1.png" >}}

## 4 Support

In this section, you can provide your own help and support instructions for users of your Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-wizard1.png" >}}

Users can then see these instructions on the **Logs and Events** page for their app.

## 5 Capabilities

The settings in this section allow you to configure the basic aspects of your Private Mendix Platform.

### 5.1 Use projects management?

Recommended. Enables you to create and manage your app projects. Enables app projects and related settings across the portal. Must be enabled for CI/CD capabilities.

### 5.2 Enable Marketplace?

Recommended. Enables you to use the Private Platform's Marketplace capabilities to upload, import and manage Marketplace contents. The Marketplace enabled here is hosted entirely within your Private Mendix Platform.

### 5.3 Use own IDP?

Optional. Enable users to login using SSO by configuring your IdP integration.

### 5.4 Use Webhooks?

Optional. Webhooks allow to send information between platform and external systems, and can be triggered by events around Apps, Users, Groups, Marketplace and CI/CD.

### 5.5 Use License Manager for app licensing?

Recommended. Upload your license bundle to automatically provision app licenses through Private Cloud License Manager. For more information, see Private Cloud License Manager.

## 6 License

On this page, you can view the status of your Private Mendix Platform license, and upload a new license bundle if necessary.

[Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/) must be used to manage the Private Mendix Platform license. It can also be used to manage and provision your own app licenses.

Private Mendix Platform licenses are either **valid** or **not found**; when not found, the Platform operates in developer mode, where access to some features and capabilities is restricted.

{{< figure src="/attachments/private-platform/pmp-wizard2.png" >}}

When valid, licenses can have the following statuses:

* Active (shown in green)
* About to expire (shown in yellow)
* Expired (shown in red)