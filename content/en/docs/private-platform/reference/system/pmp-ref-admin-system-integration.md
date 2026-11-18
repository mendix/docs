---
title: "System Administrator Settings - Integrations"
linktitle: "Integrations"
url: /private-mendix-platform/admin-system/integrations/
description: "Provides details on the integration settings that are available to system administrators."
weight: 20
---

## Introduction

In the **Integrations** section of the administrator menu, you can configure settings related to identity and access, version control, CI/CD, and others.

## Identity & Access {#identity}

In this section, you can configure SSO authentication for your users logging in to Private Mendix Platform. OIDC and SAML are supported as protocols.

### IdP Integration (OIDC)

You can configure SSO authentication with the OIDC protocol. For more information, see [Runtime Configuration of Your IdP at Your App](/appstore/modules/oidc/#runtime-idp-app).

### IdP Integration (SAML)

To [configure SSO authentication with the SAML protocol](/appstore/modules/saml/), first configure the service provider in the **SP Configuration** tab, and then create the IdP-specific settings in the **IdP Configuration** tab.

To debug the configuration, you can view the log files in the **Log** tab.

### OIDC Provider

The settings under this tab control the connection between Studio Pro and the platform. They should not be changed without advanced knowledge of the platform. Stop and restart the Private Platform portal if you are having trouble logging in with Studio Pro.

### SCIM Provisioning

System for Cross-Domain Identity Management (SCIM) is a protocol that simplifies user access management for applications. Private Mendix Platform uses the SCIM standard to pre-provision selected users onto your Platform without the users having to manually log in through SSO first.

To enable SCIM provisioning, perform the following steps:

1. Log in to Private Mendix Platform as an administrator.
2. In the **Authentication** section, click the **IdP Integration (OIDC)** or the **IdP Integration (SAML)** tab.
3. Edit your IdP configuration, and then click the **Provisioning** tab.
4. In the **Just in time provisioning** section, map the IdP attributes to the matching Mendix object attributes.
5. In the **Authentication** section, click the **SCIM Provisioning** tab, and then click **New**.
6. In the **IDP Configuration Page** dialogue, enter a name for the connection, and obtain the token for your identity provider by clicking **Copy**.
7. Enter the token in the configuration panel of your identity provider and verify that the connection is working.

### MxAdmin Settings

By default, the platform has a default system administrator account called MxAdmin. You can disable the account by setting the **Disable MxAdmin** toggle to **Yes**.

{{% alert color="info" %}}
Ensure that you have at least one other user with the System Administrator role assigned before disabling MxAdmin.
{{% /alert %}}

### Preferences

You can configure the following preferences for login sessions in Private Mendix Platform:

* **Inactivity Period for Automatic Account Disabling (Hours)** - The number of hours after which an unused account is disabled; if set to 0, accounts are not automatically disabled
* **Maximum Concurrent Sessions Per User Account** - The maximum number of concurrent login sessions that users can have; if set to 0, logging in while another session is running (for example, on a different browser or machine) ends the previous session and logs the user off
* **Failed Login Attempts to Lockout** - The number of failed login attempts after which the user account is locked for the duration specified below; if set to 0, accounts are not automatically locked out
* **Account Lockout Duration (Minutes)** - The number of minutes after which a locked out account is reactivated; if set to 0, locked out accounts must be reactivated by an administrator

By default, all of these options are disabled (that is, set to a *0* value). To enable any of them, enter a number greater than zero into the corresponding field.

## Project Management

You can integrate your Private Mendix Platform with [Jira by Atlassian](https://www.atlassian.com/software/jira) to manage your sprints and roadmap. Enabling the integration links your commits from Mendix Studio Pro directly to your user stories in Jira. The integration requires an active Jira license and a user with admin rights.

To enable the connection, click **Connect Jira**, and then provide the following information:

* URL of your Jira environment
* [Your Jira project key](https://support.atlassian.com/jira-software-cloud/docs/what-is-an-issue/#Project-keys)
* User name of a Jira admin user
* [API token of a Jira admin user](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

## Version Control

To create applications and collaborate, configure the connection to your version control repository. GitHub, GitLab, Azure DevOps Services, and Bitbucket are supported as version control systems. For more information, see [Configuring the Version Control System for Private Mendix Platform](/private-mendix-platform-version-control/).

## Build

Settings in this section allow you to configure your CI/CD capabilities and Build pipeline.

### Build Utility

Configure CI/CD capabilities for your app. If you enable this option, you must also specify your CI system, configure the necessary settings, and register a Kubernetes cluster. Jenkins, [AzureDevops](/private-mendix-platform/configure-azure/) and [Kubernetes](/private-mendix-platform-configure-k8s/) are supported. You can also configure a [custom template](/private-mendix-platform/reference-guide/admin/company/#manual-deployment) for your CI/CD capabilities.

### Build Steps {#build-steps}

In the **Build Steps** tab, you can configure the steps that constitute the pipeline.

By default, the Build pipeline consists of the following steps:

**Trigger Pipeline** > **Prepare Build** > **Start Build** > **Save Build Artifact** > **Complete Build**

For Kubernetes CI, you can configure the pipeline to include additional steps after the pipeline is triggered, and before the build is completed. These additional steps can include webhook and REST calls, or manual approval for the build.

The **Pipeline Type** section allows you to designate a pipeline as a main pipeline for all your apps, as well as create draft pipelines which you can use to test or run specific applications. If you designate a pipeline as **Draft**, you can specify the applications which should use the pipeline. For more information about configuring the pipelines, see [Configuring the Pipeline Type](#configuring-pipeline-type).

### Configuring the Pipeline Type {#configuring-pipeline-type}

Build and Deploy pipelines can be marked as Main or Draft. This lets you test pipeline changes on a single app without disrupting builds and deployments for everything else.

Administrators configuring build templates can see the application names for template selection purposes. Visibility of applications in this dropdown does not grant access to App Management functionality or application administration capabilities.

Managing pipelines and assigning apps requires both the Build and App Management permissions on your role. With both permissions, the **Apps** dropdown lists every app you have access to, and only those apps. Without App Management, the **Apps** dropdown is unavailable and you cannot assign an app to a draft pipeline.

Without Build, you cannot create or edit build pipelines. With neither, pipeline management is not available.

Permission changes take effect immediately. If App Management is removed from your role, you can no longer edit the pipeline or see its app in the dropdown.

Main pipelines are the default pipelines for all apps. They apply to all apps in the **Apps** column. You can have only one main Build pipeline. For Deploy pipelines, you can have one main pipeline for each DTAP environment.

Draft pipelines allow you to configure a targeted override for testing or app-specific needs. They apply to one specific app, or no app. You can have any number of draft pipelines, as long as their scopes do not overlap. 

When a build or deployment is triggered, Private Mendix Platform selects the pipeline as follows:

* Build - If the app has a draft pipeline associated with it, that draft is used. Otherwise the main build pipeline is used.
* Deploy - If the app has a draft pipeline that includes the target DTAP environment, that draft is used. Otherwise the main pipeline for that environment is used.

Deploy draft pipelines are scoped per environment. For example, a draft for *MyApp* covering Test and Acceptance is used for those two environments only. A deployment of *MyApp* to Production still uses the main Production pipeline.

If no main pipeline is configured, builds and deployments fail with an error.

To create and configure pipelines, perform the following steps:

1. To designate a main pipeline, toggle the setting to **On**. The **Apps** dropdown is removed and the pipeline shows all apps.
2. To designate a pipeline as draft, toggle the setting to **Off**, and then perform the following steps:

    * Select an app project in the **Apps** dropdown.
    * For deploy pipelines, select one or more DTAP environments.

    Options already used by another draft pipeline are not available in the dropdown.

Removing a draft pipeline's app association returns that app to the main pipeline for future builds and deployments.

An app can have only one draft Build pipeline. When adding a second draft Build pipeline, you must confirm that you want to move the app from the previous pipeline to current pipeline.

Only one main Build and one main Deploy pipeline must exist at any time. When you toggle a draft pipeline to main, the new pipeline becomes the main pipeline for all apps, and the previous pipeline becomes a draft with no app association. If you toggle a main pipeline to draft, you must select the new main pipeline from the available drafts. If no draft pipeline exist, the system shows a warning state and builds and deployments cannot run until you designate a main pipeline. It is also impossible to delete the main pipeline without selecting another main pipeline first.

You can duplicate your pipelines. All configured steps of a duplicated pipeline are copied into a new pipeline that always starts as a draft, with an empty name, no app association, and the placeholder name **New Pipeline**. You must specify a name before you can save your changes.

## Deployment {#deployment}

Settings in this section allow you to configure your Deployment pipelines.

### Deployment Method

Private Mendix Platform supports the following deployment methods:

* Kubernetes Interactor-Agent Mode
* Kubernetes Standalone Mode

### Deployment Steps {#deploy-steps}

In the **Deployment Steps** tab, you can configure the steps that constitute the pipeline.

By default, the Deploy pipeline consists of the following steps:

**Trigger Pipeline** > **Get Deployment Artifact** > **Deploy App** > **Complete Deployment**

You can configure the pipeline to include additional steps after each default step. These additional steps can include webhook and REST calls, or manual approval for the build.

You can also configure the pipeline to take into consideration the type of changes. Selecting the **Changes/updates to an app environment** check box allows you to bypass the deployment steps and instead simply restart the app in case of changes to the app environment (such as the app constants or the number of replicas).

The **Pipeline Type** section allows you to designate a pipeline as a main pipeline for all your apps, as well as create draft pipelines which you can use to test or run specific applications. If you designate a pipeline as **Draft**, you can specify the applications which should use the pipeline, as well as the DTAP purpose (that is, whether it is used for Acceptance, Deployment, or Testing). For more information about configuring the pipelines, see [Configuring the Pipeline Type](#configuring-pipeline-type).

### Security

To help fulfill compliance requirements related to account control, Private Mendix Platform now supports disabling the default MxAdmin account for apps at deployment. This setting effectively removes the ability to access the app using the default system admin account, and is only recommended when combined with default use of an SSO module to avoid lockout.

### Settings

In the **Settings** tab, you can customize the resource presets by specifying each preset's request and limit values for CPU and memory.
