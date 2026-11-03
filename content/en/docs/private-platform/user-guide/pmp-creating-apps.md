---
title: "Creating and Managing Apps"
url: /private-mendix-platform/apps/
description: "Documents creating and managing apps in Private Mendix Platform."
weight: 20
---

## Introduction

Refer to the following sections for information about creating, managing, and deploying your applications.

## Installing Studio Pro

Before you can create your first app, you must first install Mendix Studio Pro by performing the following steps:

1. Log in to Private Mendix Platform.
2. On the home page, click **Download Studio Pro** and **Download Studio Pro Patch file**.

    {{< figure src="/attachments/private-platform/pmp-ug2.png" class="no-border" >}}

3. Install Studio Pro. For more information, see [Installing Studio Pro](/refguide/install/#install).
4. Extract the Studio Pro patch file to the *modeler* directory located in the Studio Pro installation directory, and let it patch the files inside.
5. Launch Studio Pro and log in to it with the same credentials as for Private Mendix Platform.

## Creating a New App {#create-app}

To create a new app, perform the following steps:

1. Log in to Private Mendix Platform.
2. If you have not already configured an access token for a GitLab, GitHub, AzureDevOps, or Bitbucket repository, click the user icon in the top right corner of the screen, and then click **Manage My Account** > **Service Credentials**. 

    For more information, see [Service Credentials](#service-credentials).

3. On the home page, click **Create App Project**.

    {{< figure src="/attachments/private-platform/pmp-ug3.png" class="no-border" >}}

4. Start the creation of your app by selecting a template. 

    For step-by-step examples and guides for new Mendix developers, refer to the following pages:

    * [Quick Starts](/quickstarts/)
    * [Learning path: Become a Rapid Developer](https://academy.mendix.com/link/paths/31/Become-a-Rapid-Developer)

## Managing Your App {#manage-app}

As a user of Private Mendix Platform, you can view the apps that you own directly on the home page of Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-ug4.png" class="no-border" >}}

This includes the apps that you created, as well as the apps that are shared with your user group. To view more details about an app, click on its tile.

{{< figure src="/attachments/private-platform/pmp-ug5.png" class="no-border" >}}

In the **General** section, you can you can quickly perform a number of actions:

* Edit details such as app name and description
* Invite users to work on the app
* View the Git revisions per branch for the app
* Assign the app to a new owner or group
* Archive the app, provided you are the only team member. You will be warned of the consequences and asked for confirmation before the app is archived.
* Delete the app, provided you are the only team member. You will be warned of the consequences and asked for confirmation before the app is deleted.

## Deploying Your App {#deploy}

In the **Deploy** section, you can configure the environment to which your app will be deployed.

1. Optional: In the **Environments** tab, create a new deployment package.
2. Click **Create Environment**.
3. Select your deployment package that you want to deploy to this environment, and then click **Next**. 
4. Specify the following details about the environment:

    * **Internal Name** - An automatically generated internal name for the environment. The environment name can only contain lowercase letters and numbers. 
    * **Display Name** - The name that will be displayed in the UI. You can have several environments for your app, for example *test*, *acceptance*, and *production*.
    * **Cluster** and **Namespace** - An existing cluster and its namespace.

5. Click **Next**.
6. After the environment is created, you can use the **Details** menu to perform additional actions such as deleting the environment, or starting and stopping the app.

### Deployment Purpose and DTAP Mode

When creating a new environment to deploy, you can select the environment purpose, which can be Development, Test, Acceptance, or Production. For the deployed Mendix App, this purpose corresponds to the runtime's `dtapMode`, which affects security and licensing. For example, whether demo users are available after deployment, whether production security is enabled, or whether the environment requests a license from the license manager service. Once the environment has been created, the environment purpose cannot be changed. 

On Private Mendix Platform, environments with the Development and Test purpose set the `dtapMode` to `D` (for Development), while Acceptance and Production environments operate in `dtapMode` `P` (for Production). This association cannot be changed. Please select the appropriate environment purpose when you're creating a new environment.

#### Runtime Behavior in Development Mode {#runtime-behavior-development-mode}

When the `dtapMode` is set to `D` (Development), the Mendix Runtime behaves differently than it does in Production mode. The following changes apply:

* The admin password strength is not verified.
* The admin password can be a single character (for example, `1`).
* Project security can be disabled in the model.
* Some log lines are printed at the info level instead of the debug level.
* Demo users are created if enabled.
* During shutdown, task queues stop after a shorter grace period.
* Enables additional websockets.

Do not use Development mode for production environments. Use Production mode (`P`) for environments that require the full security and runtime behavior.