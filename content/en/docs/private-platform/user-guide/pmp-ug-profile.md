---
title: "Configure the Private Mendix Platform User Profile and Settings"
linktitle: "Configure the User Profile and Settings"
url: /private-mendix-platform-user-guide/profile/
description: "Contains information about configuring the user profile and settings for the Private Mendix Platform."
weight: 10
tags: ["private mendix platform",  "private platform", "user guide", "user profile", "user settings"]
---

## 1 Introduction

Your user account is created by the administrator of your Private Mendix Platform. After you log in for the first time, you can configure some of your profile settings by clicking the user icon in the top right corner of the screen, and then selecting **Manage My Account** from the drop-down.

{{< figure src="/attachments/private-platform/pmp-ug1.png" >}}

## 2.1 Configuring the Profile {#profile}

In the **Profile** tab, you can configure general information about yourself. This includes the following information:

* Full name (for example, Jane Doe)
* User name (for example, jdoe)
* Display language

{{% alert color="info" %}}
You cannot change your email, user role, or user group. If this information must be updated, contact your Private Mendix Platform administrator.
{{% /alert %}}

## 3 Changing the Password

In the **Change Password** tab, you can set a new password for your account. The password must fulfill the following criteria:

* Minimum of 8 characters
* Contains an uppercase letter
* Contains a number
* Minimum one special character

### 3 Managing Personal Access Tokens

Personal Access Tokens (PATs) are used as alternatives to passwords. They are designed to be used when the client application needs to get access on behalf of a specific platform user, but the user is not “present” at the time of access, so the user cannot login via a browser (web SSO). The client application can be any application (meaning, even an app not built with Mendix).

For more information about Personal Access Tokens, as well as creating and using them, see [Personal Access Token](/community-tools/mendix-profile/user-settings/#pat).

### 4 Managing Service Credentials {#service-credentials}

In the **Service Credentials** tab, you can view and manage the credentials for various external systems that Private Mendix Platform can connect with. These services include Github, Gitlab, Bitbucket, and AzureDevOps, used for managing your app projects.

To create or work on app projects in Private Mendix Platform, you must create an access token in Github, Gitlab, AzureDevOps, or Bitbucket, and then add it in the **Service Credentials** tab. The token must have read and write access to a repository where the app project is stored.
