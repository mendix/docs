---
title: "Configuring Private Mendix Platform"
url: /private-mendix-platform/configuration/
description: "Documents the initial configuration for the Private Mendix Platform."
weight: 30
aliases:
    - /private-mendix-platform-configuration/
---

## 1 Introduction

This document provides an overview of the initial configuration options for Private Mendix Platform.

### 1.1 Accessing the Configuration Settings

As a user with Administrator access rights, you can access the Private Mendix Platform configuration settings by performing the following steps:

1. Switch to Admin Mode by clicking the profile picture in the top right corner of the screen and selecting **Switch to Admin Mode**.
2. Open the navigation menu by clicking the icon in the top left corner.
3. Click **Settings**.

Some of the settings that you configure here are initially set by the [Private Platform Configuration Wizard](/private-mendix-platform/quickstart/#wizard). Administrators can also update them at any time after the initial configuration.

## 2 Configuring General Settings

General configuration settings allow you to manage the basic aspects of your Private Mendix Platform, such as the platform name and branding, toggling certain capabilities on or off, and viewing the licensing status. The settings in this section are largely configured  when you run the initial configuration wizard, but you can still review and adjust them later during the implementation process.

### 2.1 General

The **General** tab allows you to configure information about your organization, and optionally also the Certified Mendix Partner that is working with you on implementing Private Mendix Platform. You can also use it to configure your locale settings.

{{% alert color="info" %}}
Changing your locale sets locale-dependent formats, such as date and time, to the preferred format of the selected locale. The settings are applied to the Private Mendix Platform (for example, in the Marketplace or Mendix Portal), not in the apps created through the Platform.
{{% /alert %}}

### 2.2 Branding

The settings in this section allow you to configure custom branding for your Private Mendix Platform. You can customize the title of the Platform as shown in the top bar, upload your logo, or change the image on the login page.

{{< figure src="/attachments/private-platform/pmp-wizard1.png" class="no-border" >}}

### 2.3 Support

In this section, you can provide your own help and support instructions for users of your Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-wizard1.png" class="no-border" >}}

Users can then see these instructions on the **Logs and Events** page for their app.

### 2.4 Capabilities

The settings in this section allow you to configure the basic aspects of your Private Mendix Platform.

#### 2.4.1 Use projects management?

Recommended. Enables you to create and manage your app projects. Enables app projects and related settings across the portal. Must be enabled for CI/CD capabilities.

#### 2.4.2 Enable Marketplace?

Recommended. Enables you to use the Private Platform's Marketplace capabilities to upload, import and manage Marketplace contents. The Marketplace enabled here is hosted entirely within your Private Mendix Platform.

#### 2.4.3 Use own IDP?

Optional. Enable users to login using SSO by configuring your IdP integration.

#### 2.4.4 Use Webhooks?

Optional. Webhooks allow to send information between platform and external systems, and can be triggered by events around Apps, Users, Groups, Marketplace and CI/CD.

#### 2.4.5 Use License Manager for app licensing?

Recommended. Upload your license bundle to automatically provision app licenses through Private Cloud License Manager. For more information, see Private Cloud License Manager.

### 2.5 License

On this page, you can view the status of your Private Mendix Platform license, and upload a new license bundle if necessary.

[Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/) must be used to manage the Private Mendix Platform license. It can also be used to manage and provision your own app licenses.

Private Mendix Platform licenses are either **valid** or **not found**; when not found, the Platform operates in developer mode, where access to some features and capabilities is restricted.

{{< figure src="/attachments/private-platform/pmp-wizard2.png" class="no-border" >}}

When valid, licenses can have the following statuses:

* Active (shown in green)
* About to expire (shown in yellow)
* Expired (shown in red)

## 3 Email Settings

Email settings allow you to manage your the SMTP server settings used by Private Mendix Platform. These settings are necessary to ensure that your system can send out email notifications. You can also configure additional settings such as email templates, view your email queue, and manage recurring tasks.

### 3.1 Templates

In this tab, you can create and manage the templates for any standard notification emails that you want your app to send, such as automated reports, assigned tasks, or others. Templates created here can then be referenced in microflows.

{{< figure src="/attachments/private-platform/pmp-wizard3.png" class="no-border" >}}

### 3.2 Emails

In this tab, you can view the following details about the emails sent from your system:

* **Queued** - A list of all emails queued to be sent, regardless of delivery status.
* **Sent** - A list of all emails that were successfully sent.
* **Failed** - A list of emails that could not be sent after a maximum number of attempts defined in the Configuration tab.
* **Logs** - Errors and other messages that were logged while attempting to send emails. You can search the list by date, message type and content, or the microflow that triggered the email.

### 3.3 Configuration

In this tab, you can configure SMTP server settings for your email account.

{{< figure src="/attachments/private-platform/pmp-wizard4.png" class="no-border" >}}

### 3.4 Administrative Tasks

In this tab, you can trigger various scheduled tasks, such as sending queued emails or cleaning the email queue.

## 4 Marketplace Settings

For Private Mendix Platform, the Marketplace is also private and hosted entirely within the platform itself. The settings in this section allow you to configure the administrative settings for publishing and downloading content to and from the private Marketplace.

### 4.1 Approvals

In this tab, you can configure whether contents that users publish to the private Marketplace requires administrator approval before publishing.

### 4.2 Content Import

You can populate your private Marketplace with contents by importing a zip file that contains the content packages along with a *package.json* file. To enable content import from the import bundle, you must unpack it and point Private Mendix Platform to the location of the json file by following these steps:

1. Download the Marketplace Bundle with contents available in a zip file. If you do not have access to the bundle, contact your Mendix point of contact.
2. Unzip the files to an internal location which Private Mendix Platform can access via HTTP or HTTPS. Do not change the directory structure.
3. If using a self-signed certificate for your internal locations, configure Mendix Operator to trust your private Certificate Authorities. For more information, see [Creating a Private Cloud Cluster](/developerportal/deploy/standard-operator/#custom-tls).
4. In the **Content Import** tab, in the **Marketplace import bundle URL** field, enter the root URL of the *package.json* file included in the Marketplace download. 

    For example, if the *package.json* can be accessed at the URL `https://<your domain>/release/marketplace/Marketplace-1.0/package.json`, enter the following URL: `https://<your domain>/release/marketplace/Marketplace-1.0/`.

5. Set the toggle **Enable content import with external source** to **ON**.
6. Click **Save** to enable content import from this bundle.

## 5 Mx Version Settings

In this section, you can view or disable the versions of Mendix Studio Pro that your users are allowed to download.

## 6 Authentication

In this section, you can configure SSO authentication for your users logging in to Private Mendix Platform. OIDC and SAML are supported as protocols.

### 6.1 IdP Integration (OIDC)

You can configure SSO authentication with the OIDC protocol. For more information, see [OIDC Client Configuration](/appstore/modules/oidc/#client-configuration).

### 6.2 IdP Integration (SAML)

To configure SSO authentication with the SAML protocol, first [configure the service provider](/appstore/modules/saml/#configure-sp) in the **SP Configuration** tab, and then [create the IdP-specific settings](/appstore/modules/saml/#idp-specific-settings) in the **IdP Configuration** tab.

To [debug the configuration](/appstore/modules/saml/#debugging-the-configuration), you can view the log files in the **Log** tab.

### 6.3 OIDC Provider

The settings under this tab control the connection between Studio Pro and the platform. They should not be changed without advanced knowledge of the platform. Stop and restart the Private Platform portal if you are having trouble logging in with Studio Pro.

### 6.4 Studio Pro Login

If you have configured more than one authentication method (for example, SSO and local user), you can specify which method is used as the default one for the Studio Pro login.

### 6.5 SCIM Provisioning

System for Cross-Domain Identity Management (SCIM) is a protocol that simplifies user access management for applications. Private Mendix Platform uses the SCIM standard to pre-provision selected users onto your Platform without the users having to manually log in through SSO first.

To enable SCIM provisioning, perform the following steps:

1. Log in to Private Mendix Platform as an administrator.
2. In the **Authentication** section, click the **IdP Integration (OIDC)** or the **IdP Integration (SAML)** tab.
3. Edit your IdP configuration, and then click the **Provisioning** tab.
4. In the **Just in time provisioning** section, map the IdP attributes to the matching Mendix object attributes.
5. In the **Authentication** section, click the **SCIM Provisioning** tab, and then click **New**.
6. In the **IDP Configuration Page** dialogue, enter a name for the connection, and obtain the token for your identity provider by clicking **Copy**.
7. Enter the token in the configuration panel of your identity provider and verify that the connection is working. 

## 7 DevOps Settings

In this section, you can configure settings related to managing your app projects and CI/CD capabilities.

### 7.1 Version Control System

To create applications and collaborate, configure the connection to your version control repository. GitHub, GitLab, and Bitbucket are supported as version control systems. For more information, see [Configuring the Version Control System for Private Mendix Platform](/private-mendix-platform-version-control/).

### 7.2 CI/CD

Configure CI/CD capabilities for your app. If you enable this option, you must also specify your CI system, configure the necessary settings, and register a Kubernetes cluster. Tekton, Jenkins, and [Kubernetes](/private-mendix-platform-configure-k8s/) are supported. You can also configure a custom template for your CI/CD capabilities.

{{< figure src="/attachments/private-platform/pmp-wizard5.png" class="no-border" >}}

#### 7.2.1 Configuring CI/CD Pipelines with Manual Approval

If your production and development environments must be fully air-gapped and separated from each other, and you want to limit the ability to deploy packages to either selected users or an automated pipeline with manual approval, you can configure your cluster type to be **Upload MDA**.

{{< figure src="/attachments/private-platform/pmp-wizard7.png" class="no-border" >}}

Selecting this option allows you to specify an S3 bucket. This bucket is then used as the destination where the deployment package is uploaded at the end of the pipeline, instead of being deployed to the production environment. Designated approvers can then retrieve the package from the S3 bucket and manually deploy it to the target environment.

## 8 Platform Log

For auditing purposes, you can view a log of the most recent actions taken by users of the platform. 

### 8.1 Recent Actions

This tab contains a list of the recent actions, logged for the time period specified in the **Log Settings** tab. The following actions are logged:

* Creating and editing user accounts
* Creating and deleting apps
* Creating app packages
* Changing platform settings

You can use the **Search** field to search for a specific action by name.

### 8.2 Archived Actions

This tab contains a list of actions that were archived after the period specified in the **Log Settings** tab has expired. You can download the archive if required for auditing purposes.

### 8.3 Log Settings

You can select how long the actions are kept in the logs, in days. The minimum number of days is 1, and the maximum is 365.

## 9 Advanced Settings

In this section, you can adjust the advanced configuration settings of your Private Mendix Platform.

### 9.1 MxAdmin Settings

By default, the platform has a default system administrator account called MxAdmin. You can disable the account by setting the **Disable MxAdmin** toggle to **Yes**.

{{% alert color="info" %}}
Ensure that you have at least one other user with the System Administrator role assigned before disabling MxAdmin.
{{% /alert %}}

### 9.2 MxAdmin Emails

To help ensure that any issues are promptly reported and resolved, you can specify one or more root email addressed that should be notified in case of system issues.

### 9.3 Scheduled Event

This tab shows a list of all the scheduled tasks and actions in the system, together with start time, end time, and status.

{{< figure src="/attachments/private-platform/pmp-wizard6.png" class="no-border" >}}
