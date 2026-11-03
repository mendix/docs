---
title: "Configuring Your User Profile and Settings"
linktitle: "User Profile and Settings"
url: /private-mendix-platform/user-profile/
description: "Documents the user profile configuration for the Private Mendix Platform."
weight: 10
---

## Introduction

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
 see [Company Administrators: Webhooks](/private-mendix-platform/reference-guide/admin/company/#webhooks).

You can edit or delete an existing webhook by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the **Action** column for the webhook you want to change, and then selecting **Edit** or **Delete**.