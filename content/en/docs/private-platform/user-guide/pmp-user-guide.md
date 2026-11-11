---
title: "Configuring Your User Profile and Settings"
linktitle: "User Profile and Settings"
url: /private-mendix-platform/user-profile/
description: "Documents the user profile configuration for the Private Mendix Platform."
weight: 10
---

## Introduction

Your user account is created by the administrator of your Private Mendix Platform. After you log in for the first time, you can configure your profile settings by clicking the user icon in the top right corner of the screen, and then clicking **Manage My Account**.

{{< figure src="/attachments/private-platform/pmp-ug1.png" class="no-border" >}}

## Profile {#profile}

On the **Profile** page, you can view general information about yourself. This includes the following information:

* Full name (for example, Jane Doe)
* User name (for example, jdoe)
* Email (for example, `jdoe@example.com`)
* Platform role (for example, System Admin)
* Group (for example, Digitalization Project Group)

{{% alert color="info" %}}
You can update your full name yourself. To update other information in this section, contact your Private Mendix Platform administrator.
{{% /alert %}}

{{< figure src="/attachments/private-platform/pmp-manage-profile.png" class="no-border" >}}

## Change Password

In the **Change Password** tab, you can set a new password for your account. The password must fulfill the following criteria:

* Minimum of 8 characters
* Contains an uppercase letter
* Contains a number
* Minimum one special character

## Personal Access Tokens

A Personal Access Token (PAT) is used to identify the user account and its corresponding privileges and permissions when interacting with Private Mendix Platform over APIs and other non-GUI interactions, for example, when setting up automated API calls to and from an external service. For more information, see [APIs for Private Mendix Platform](/apidocs-mxsdk/apidocs/private-platform/).

### Creating a PAT {#create-pat}

On the **Personal Access Tokens** page, you can create a new PAT. To do so, click **New Token**, and set the following characteristics of the PAT:

* **Token Name** - Give the PAT a name that reflects where or why you intend to use it.
* **Expiry Date** - Specify the date and time after which the token will expire. As a best practice, never set the expiration time for the token to be more than one year.
* **Scopes** - Select the scopes (authorizations) that you want to grant to your PAT. To reduce risk and impact, follow the least-privilege principle for token scope and use different tokens for different purposes instead of creating one token with a large scope.

After you click **Create**, the PAT appears on the **Personal Access Tokens** page. To copy it to your clipboard, click **Actions > Copy PAT**.

### Managing a PAT

To see the scopes of a PAT you have created, click **Actions > View Details**.

{{% alert color="info" %}}
You cannot see the secret token of a PAT here. You can only see that the PAT exists, along with its scopes. 
{{% /alert %}}

To delete a PAT, click **Actions > Delete**. This will prevent anyone who has obtained the PAT's secret token from successfully using it.

## Service Credentials {#service-credentials}

On the **Service Credentials** page, you can view and manage the credentials for various external systems that Private Mendix Platform can connect with. These services include GitHub, GitLab, Bitbucket, and AzureDevOps, used for managing your app projects. Depending on settings configured by the admin, they can automatically provisioned through the integrations or manually configured for the user account.

To create or work on app projects in Private Mendix Platform, you must create an access token in GitHub, GitLab, AzureDevOps, or Bitbucket, and then add it on the **Register Credentials** screen. The token must have read and write access to a repository where the app project is stored.

## Notifications {#notifications}

On the **Notification Settings** page, you can enable or disable the following notification types for Private Mendix Platform:

* **Alerts** - Notifications about events that require attention, for example, app availability and status
* **Following** - Notifications about comments and reactions to your stories, posts, or projects
* **Recommendation** - Notifications about new Private Mendix Platform releases
* **Requests/Approvals** - Notifications about status changes for your requests, for example, the publication of a Marketplace content item