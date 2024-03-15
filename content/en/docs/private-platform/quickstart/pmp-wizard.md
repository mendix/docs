---
title: "Run the Private Mendix Platform Configuration Wizard"
linktitle: "Run the Configuration Wizard"
url: /private-mendix-platform-quickstart/wizard/
description: "Documents the configuration wizard of the Private Mendix Platform."
weight: 30
tags: ["private mendix platform",  "private platform", "private marketplace", "configuration wizard"]
---

## 1 Introduction

After you install Private Mendix Platform, run a one-time configuration wizard to configure the necessary settings.

## 2 Running the Private Platform Configuration Wizard {#wizard}

To start the wizard, log in to your Private Mendix Plaform app as an administrator. The wizard starts automatically and walks you through the required configuration steps. For more information about the available options, refer to the sections below.

{{% alert color="info" %}}
The settings that are enabled for your Private Mendix Platform depend on the service package that you have purchased. Because of that, some of the settings listed below may be disabled for your platform.
{{% /alert %}}

### 2.1 Configuring IdP Settings

In this step, you can specify whether you want to enable logging in via SSO for your users. Private Mendix Platform supports OIDC and SAML identity providers.

{{< figure src="/attachments/private-platform/pmp-wizard1.png" >}}

### 2.2 Configuring Management Settings

In this step, you can specify whether you want to create and manage your app projects in Private Mendix Platform. If you enable the project management, you must also specify the Git host that will be used for the project. This option must be enabled if you want your Private Mendix Platform to support CI/CD capabilities.

{{< figure src="/attachments/private-platform/pmp-wizard2.png" >}}

### 2.3 Configuring CI/CD Settings

In this step, you can enable CI/CD capabilities for your app. If you enable this option, you must also specify your CI system, configure the necessary settings, and register a Kubernetes cluster.

{{< figure src="/attachments/private-platform/pmp-wizard3.png" >}}

### 2.4 Configuring Marketplace Settings

In this step, you can enable your app to upload and download connectors from the Marketplace.

{{% alert color="info" %}}
The Marketplace enabled here is hosted entirely within your Private Mendix Platform.
{{% /alert %}}

{{< figure src="/attachments/private-platform/pmp-wizard4.png" >}}

### 2.5 Configuring Custom Branding Settings

In this step, you can customize the branding for your app. You may change the name that is displayed in the top bar, upload a new logo, or change the default login page image.

{{< figure src="/attachments/private-platform/pmp-wizard5.png" >}}

### 2.6 Reviewing and Confirming the Settings

After the wizard finishes running, you are logged in to your Private Mendix Platform. The settings that you previously selected are displayed on screen. You can review and update them now, or at a later point by using the **Settings** menu in the upper left corner of the screen.

## 3 Next Steps

After completing the installation and first-time configuration wizard, configure the remaining necessary settings. For more information, see [Configuring Private Mendix Platform](/private-mendix-platform-configuration/).
