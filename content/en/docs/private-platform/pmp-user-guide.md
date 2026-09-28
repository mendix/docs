---
title: "Private Mendix Platform User Guide"
url: /private-mendix-platform/user-guide/
description: "Documents the business-as-usual administrator tasks for the Private Mendix Platform."
weight: 50
aliases:
    - /private-mendix-platform-user-guide/
---

## Introduction

See the following articles for information about the business-as-usual use cases available for Private Mendix Platform.

## Configuring Your User Profile and Settings

Your user account is created by the administrator of your Private Mendix Platform. After you log in for the first time, you can configure some of your profile settings by clicking the user icon in the top right corner of the screen, and then selecting **Manage My Account** from the drop-down.

{{< figure src="/attachments/private-platform/pmp-ug1.png" class="no-border" >}}

### Profile {#profile}

In the **Profile** tab, you can configure general information about yourself. This includes the following information:

* Full name (for example, Jane Doe)
* User name (for example, jdoe)
* Display language

{{% alert color="info" %}}
You cannot change your email, user role, or user group. If this information must be updated, contact your Private Mendix Platform administrator.
{{% /alert %}}

### Change Password

In the **Change Password** tab, you can set a new password for your account. The password must fulfill the following criteria:

* Minimum of 8 characters
* Contains an uppercase letter
* Contains a number
* Minimum one special character

### Personal Access Tokens

Personal Access Tokens (PATs) are used as alternatives to passwords. They are designed to be used when the client application needs to get access on behalf of a specific platform user, but the user is not “present” at the time of access, so the user cannot login via a browser (web SSO). The client application can be any application (meaning, even an app not built with Mendix).

For more information about Personal Access Tokens, as well as creating and using them, see [Personal Access Token](/portal/user-settings/#pat).

### Service Credentials {#service-credentials}

In the **Service Credentials** tab, you can view and manage the credentials for various external systems that Private Mendix Platform can connect with. These services include GitHub, GitLab, Bitbucket, and AzureDevOps, used for managing your app projects.

To create or work on app projects in Private Mendix Platform, you must create an access token in GitHub, GitLab, AzureDevOps, or Bitbucket, and then add it in the **Service Credentials** tab. The token must have read and write access to a repository where the app project is stored.

## Installing Mendix Studio Pro

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

## Managing Marketplace Content

If your organization has enabled the Marketplace for your Private Mendix Platform, you can build your own connectors and modules, and then share them on the Marketplace, so that other teams from your organization can use the connector in their own apps.

### Creating Marketplace Content

For more information about building a connector for your Mendix app, see the following topics:

* [Build a Connector](/appstore/creating-content/connector-guide-build/)
* [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/)

### Sharing Marketplace Content {#sharing}

To share the connector that you built, perform the following steps:

1. In Private Mendix Platform, click **My Content**.

    {{< figure src="/attachments/private-platform/pmp-ug7.png" class="no-border" >}}

2. Select a **Content type** for your component.
3. On the **General** page, enter a **Name** for your component.
4. Enter a **Description** of your component.
5. Select the **Studio Pro Version** for which the component is built.
6. Select the type of **License** you want applied to your app.
7. Select the **Cover Image** that will be displayed for your connector.
8. Click **Continue**.
9. On the **Package** page, in the **Upload MPK** field, click **Browse** and select the [.mpk file](/appstore/creating-content/connector-guide-build/#export-as-mpk) that you created for your component.
10. Click **Upload**.
11. Specify the **Version** of your component.
12. Provide a **Release Note** to describe the contents of the version you are uploading.

    {{< figure src="/attachments/private-platform/pmp-ug8.png" class="no-border" >}}

13. Click **Save & Continue**.
14. On the **Additional Info** page, provide instructions for users of your component.

    {{< figure src="/attachments/private-platform/pmp-ug9.png" class="no-border" >}}

15. Click **Save & Continue**.
16. Review and publish your changes. 

Depending on the process set up by your Private Mendix Platform administrator, your component may be subject to an approval process before it is shared with other users.

### Sharing Content with Groups

On the **Manage Group Content** page, you can share components with the user groups to which you belong.

1. In Private Mendix Platform, click **Group Content**.

    {{< figure src="/attachments/private-platform/pmp-ug10.png" class="no-border" >}}

2. Select a Content type for your component.
3. In the App Visibility section, select the group with which you want to share the component.

    {{< figure src="/attachments/private-platform/pmp-ug11.png" class="no-border" >}}

    If the group with which you want to share the content is not in the list, it means that you are not a member of that particular group. Contact your Private Mendix Platform administrator.

4. Follow the instructions in [Sharing Marketplace Content](#sharing).

## Monitoring

"Grafana, Loki, and Prometheus are the recommended monitoring stack for Kubernetes-based services like Private Mendix Platform. The customer is responsible for configuring the stack. For more information, see [Grafana Integration for Private Mendix Platform](/private-mendix-platform/grafana/).

### Logs & Events

From the **Logs** page, you can access the logs produced by your app. For information about configuring 

To access the logs, perform the following steps:

1. Open your app in the Private Mendix Platform portal.
2. In the left navigation pane, click **Monitoring > Logs & Events**.
3. Select the environment for which you want to view the logs.

You can filter the results by the following properties:

* **Container** - The container instance.
* **Retrieve last** - The number of results to retrieve.
* **Timespan** - The date and time range to display.
* **Filter by Log Level** - The highest log level to display. The following log levels are available:

    * **Trace** - Provides highly detailed information. Trace level messages are written only to logs.
    * **Debug** - Provides detailed information, typically of interest only when diagnosing problems.
    * **Info** - Confirms that things are working as expected.
    * **Warning** - Indicates that something unexpected happened or warns about an upcoming problem (for example, *disk space low*). The application is still working as expected.
    * **Error** - Indicates a serious problem that prevented the application from performing some function.
    * **Critical** - Indicates that a serious error has occurred; the application may be unable to continue running.

* **Keyword** - A keyword to use for filtering.

#### Help Me Function

On the **Logs & Events** page, you can also download the **Help Me** package, containing diagnostic logs which you can attach to a support ticket if needed. For more information about the **Help Me** function, see [Private Mendix Platform Events and the Help Me Function](/private-mendix-platform/support-help-me/).

### Metrics

The **Metrics** page contains detailed graphs about your app and its environment. You can use this page to monitor the performance and health of your app; for example, you can track the usage growth of your app or debug performance problems.

These statistics are displayed as trends over time. 

To view the graphs on **Metrics** page, perform the following steps:

1. Open your app in the Private Mendix Platform portal.
2. In the left navigation pane, click **Monitoring > Metrics**.
3. Select the environment and pod.

You can filter the results by the following properties:

* **Container** - The container instance.
* **Retrieve last** - The number of results to retrieve.
* **Timespan** - The date and time range to display.
* **Filter by Log Level** - The highest log level to display. The following log levels are available:

    * **Trace** - Provides highly detailed information. Trace level messages are written only to logs.
    * **Debug** - Provides detailed information, typically of interest only when diagnosing problems.
    * **Info** - Confirms that things are working as expected.
    * **Warning** - Indicates that something unexpected happened or warns about an upcoming problem (for example, *disk space low*). The application is still working as expected.
    * **Error** - Indicates a serious problem that prevented the application from performing some function.
    * **Critical** - Indicates that a serious error has occurred; the application may be unable to continue running.

* **Keyword** - A keyword to use for filtering.

### Webhooks {#webhooks}

Webhooks allow you to send information about your licensed Mendix app deployed to Private Mendix Platform to an external app or workflow. You can use them to trigger a step in an automated [Build](/private-mendix-platform/reference-guide/admin/system/#build-steps) or [Deployment](/private-mendix-platform/reference-guide/admin/system/#deploy-steps) pipeline.

#### Creating a New Webhook {#setting-up}

To set up a webhook, do the following:

1. On the **Webhooks** page, click **New Webhook**.
2. Enter the following information:

    * **Webhook Name** – This is a name which you can use to identify the webhook.
    * **URL** – This is the endpoint that will receive the payload when one of the event types selected in **Available Events** occurs.
    * **Validation Secret** – This is a secret that is shared with the endpoint to verify that it has been triggered by this webhook. If you leave this blank, a secret is generated automatically. You can see the generated value any time you return to edit the webhook.
    * **Available Events** – This is the event (or events) that triggers the webhook to send information to the endpoint. Company administrators can activate or deactivate specific event types in the **Webhooks > Event Management** tab of administrator menu. For more information, see [Company Administrators: Webhooks](/private-mendix-platform/reference-guide/admin/company/#webhooks).
    * **Custom Headers** – This is a key-value pair that is sent as an HTTP header to the endpoint. Company administrators can configure a predefined custom header in the **Webhooks > Preset Headers** tab of administrator menu. For more information, see [Company Administrators: Webhooks](/private-mendix-platform/reference-guide/admin/company/#webhooks).

You can edit or delete an existing webhook by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the **Action** column for the webhook you want to change, and then selecting **Edit** or **Delete**.