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

For more information about Personal Access Tokens, as well as creating and using them, see [Personal Access Token](/community-tools/mendix-profile/user-settings/#pat).

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

## Creating a New App

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

## Managing Your App

As a user of Private Mendix Platform, you can view the apps that you own directly on the home page of Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-ug4.png" class="no-border" >}}

This includes the apps that you created, as well as the apps that are shared with your user group. To view more details about an app, click on its tile.

{{< figure src="/attachments/private-platform/pmp-ug5.png" class="no-border" >}}

In the **Manage** section, you can you can quickly perform a number of actions:

* Edit details such as app name and description
* Invite users to work on the app
* View the Git revisions per branch for the app
* Assign the app to a new owner or group
* Archive the app, provided you are the only team member. You will be warned of the consequences and asked for confirmation before the app is archived.
* Delete the app, provided you are the only team member. You will be warned of the consequences and asked for confirmation before the app is deleted.

## Deploying Your App

In the **Deploy** section, you can configure the environment to which your app will be deployed.

1. Click **New Environment**.

    {{< figure src="/attachments/private-platform/pmp-ug6.png" class="no-border" >}}

2. Specify the following details about the environment:

    * **Internal Name** - The name for the environment. The environment name can only contain lowercase letters and numbers. You can have several environments for your app, for example *test*, *acceptance*, and *production*.
    * **Namespace** - An existing namespace. You can select any namespace of which you are a member.
    * **Storage Plan** - A storage plan set up in the namespace which you selected.
    * **Database Plan** - A database plan set up in the namespace which you selected.

3. Click **Create**, and then click **Proceed**.
4. After the environment is created, you can click **Operate** > **Deploy Environment** to deploy your app to this environment.

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
