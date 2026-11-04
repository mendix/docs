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

## Change Password

In the **Change Password** tab, you can set a new password for your account. The password must fulfill the following criteria:

* Minimum of 8 characters
* Contains an uppercase letter
* Contains a number
* Minimum one special character

## Personal Access Tokens

Personal Access Tokens (PATs) are used as alternatives to passwords. They are designed to be used when the client application needs to get access on behalf of a specific platform user, but the user is not present at the time of access, so the user cannot log in using a browser (web SSO). The client application can be any application (that is, even an app not built with Mendix).

### Creating a PAT {#create-pat}

On the **Personal Access Tokens** page, you can create a new PAT. To do so, click **New Token**, and set the following characteristics of the PAT:

* **Token Name** - Give the PAT a name that reflects where or why you intend to use it.
* **Expiry Date** - Specify the date and time after which the token will expire.
* **Scopes** - Select the scopes (authorizations) that you want to grant to your PAT.

After you click **Create**, the PAT appears on the **Personal Access Tokens** page. To copy it to your clipboard, click **Actions > Copy PAT**.

### Managing a PAT

To see the scopes of a PAT you have created, click **Actions > View Details**.

{{% alert color="info" %}}
You cannot see the secret token of a PAT here. You can only see that the PAT exists, along with its scopes. 
{{% /alert %}}

To delete a PAT, click **Actions > Delete**. This will prevent anyone who has obtained the PAT's secret token from successfully using it.

## Service Credentials {#service-credentials}

On the **Service Credentials** page, you can view and manage the credentials for various external systems that Private Mendix Platform can connect with. These services include GitHub, GitLab, Bitbucket, and AzureDevOps, used for managing your app projects.

To create or work on app projects in Private Mendix Platform, you must create an access token in GitHub, GitLab, AzureDevOps, or Bitbucket, and then add it on the **Register Credentials** screen. The token must have read and write access to a repository where the app project is stored.

## Notifications

On the **Notification Settings** page, you can enable or disable the following notification types for Private Mendix Platform:

* **Alerts** - Notifications about events that require attention, for example, app availability and status
* **Following** - Notifications about comments and reactions to your stories, posts, or projects
* ** Recommendation** - Notifications about new Private Mendix Platform releases
* **Requests/Approvals** - Notifications about status changes for your requests, for example, the publication of a Marketplace content item