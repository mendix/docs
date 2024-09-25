---
title: "Configuring the Version Control System for Private Mendix Platform"
url: /private-mendix-platform/version-control/
description: "Documents the initial configuration for the Private Mendix Platform."
weight: 30
aliases:
    - /private-mendix-platform-version-control/
---

## Introduction

Private Mendix Platform supports the following types of Git repositories as the Mendix app code repository:

* GitLab (both SaaS and self-managed)
* GitHub Enterprise Server
* Bitbucket
* Azure DevOps

To select the repository type, click  **DevOps Settings** > **Version Control System** > **Git Host Type**. 

## GitLab

This section describes the configuration of a GitLab repository.

### DevOps Settings

{{< figure src="/attachments/private-platform/pmp-vc1.png" class="no-border" >}}

#### Host URL

This is the host URL of your GitLab server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your GitLab server host name is mygitlab.example.com, you should input `https://mygitlab.example.com` here.

#### Group ID

All the apps on Private Mendix Platform are created under a GitLab group. You need to create a group in GitLab and then input the *Group ID* in this field.

{{< figure src="/attachments/private-platform/pmp-vc2.png" class="no-border" >}}

#### Group owner PAT

This is the PAT from the above group owner. When generating the access token for group owner, select all scopes and set expiration date to never.

#### Automatic Access Provisioning

If you use a self-managed GitLab server, you can enable this feature to automatically create GitLab user and PAT for private platform users. During logging in the platform, user email is used as unique key to search in GitLab server. If this email name is not registered in GitLab, Private Mendix Platform creates a GitLab user with this email. A PAT is then generated for this user. 

#### Admin PAT

This is the PAT of the GitLab administrator, which is the root user access token with all scopes selected.

### Normal User Credentials

When the **Automatic Access Provisioning** is disabled, private platform users need to manually input the GitLab user id and PAT at first login.

#### User ID

The user ID (integer number) of this GitLab user. It is not the user name. You can obtain the value from the user profile page.

#### Personal Access Token

The access token of this GitLab user.

## GitHub

This section describes the configuration of a GitHub repository.

### DevOps Settings

{{< figure src="/attachments/private-platform/pmp-vc3.png" class="no-border" >}}

#### Host URL

This is the host URL of your GitHub server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your GitHub server host name is mygithub.example.com, you should input `https://mygithub.example.com` here.

#### Organization Name

All the apps on Private Mendix Platform are created under an organization. You need to create an organization to host all the Mendix apps. Type the organization name into this field.

#### Organization Owner PAT

Input the classic PAT of this organization owner into this field.  You need select at least these scopes: `repo admin:org user delete_repo`. The expiration date is set to **No Expiration**.

#### Automatic Access Provisioning

If you are running a self-managed GitHub enterprise server, you can enable this feature to automatically create GitHub user and PAT for private platform users. During logging in to the platform, the user email is used as unique key to search in GitHub server. If this email name is not registered in GitHub, Private Mendix Platform creates a GitHub user with this email. A PAT is then generated for this user. 

#### AdminPAT

This is the PAT of the GitHub enterprise instance administrator. When generating this PAT, all scopes should be selected.

### Normal User Credentials

When the **Automatic Access Provisioning** is disabled, Private Mendix Platform users need to manually input the GitHub user name and PAT at first login.

{{% alert color="info" %}}
This user needs to be invited into this organization as a organization member.
{{% /alert %}}

#### User Name

The user name (login name) of this GitHub user. 

#### Personal Access Token

The access token of this GitHub user. To make it easier, you can also select all the scopes. The expiration date is set to No Expiration.

## Bitbucket

This section describes the configuration of a Bitbucket repository.

### DevOps Settings

{{< figure src="/attachments/private-platform/pmp-vc4.png" class="no-border" >}}

#### Host URL

This is the host URL of your Bitbucket enterprise server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your Bitbucket enterprise server host name is mybitbucket.example.com, you should input `https://mybitbucket.example.com` here.

#### Project key

All the Mendix apps on private platform are created under a project. You need to create an project to host all the Mendix apps. Input the project key in this field. You can go to `https://mybitbucket.example.com/projects` to view the project key.

#### Project Admin PAT

Input the access token of a project admin user.

#### Automatic Access Provisioning

If you are running a self managed Bitbucket enterprise server, you can enable this feature to automatically create Bitbucket user and PAT for private platform users. During logging in to the platform, the user email is used as unique key to search in Bitbucket server. If this email name is not registered in Bitbucket, Private Mendix Platform creates a Bitbucket user with this email as the user name. A PAT is then generated for this user. 

Bitbucket enterprise server allows to use same email for multiple users. To make the Bitbucket user unique by email, the email name is used to be the Bitbucket user name when doing the automatic provisioning.

#### Admin Username

Bitbucket system admin user name.

#### Admin Password

Bitbucket system admin user password.

### Normal User Credentials

When the Automatic Access Provisioning is disabled, Private Mendix Platform users need to manually input the Bitbucket user name and PAT at first login. 

This user needs to be invited into the project with the **Create repository** permission. You can go to `https://mybitbucket.example.com/projects/<PROJECT KEY>/permissions` to add a user and grant permission.

#### User Name

The user name (login name) of this Bitbucket user. 

#### Personal Access Token

The Access token of this Bitbucket user. The permission should be at least `Project Admin`. The expiration date is set to **No Expiration**.

## AzureDevOps

This section describes the configuration of an AzureDevOps repository.

### Microsoft Entra ID Configuration

To use AzureDevOps as the repository, first make sure to register an app in [Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application), and take note of the following information:

* Application ID (client ID)
* Directory ID (tenant ID)
* Client Secret

For the API permissions, select **user_impersonation**.

For the web callback URL, enter a URL in the following format: `YOUR_APP_ROOT/oauth-callback/`.

### Azure DevOps Configuration

In Azure DevOps, you must create an organization and a PAT for the admin user. You must also create the users that will use the Azure DevOps with Private Mendix Platform, and assign them Basic access level.

### DevOps Settings

{{< figure src="/attachments/private-platform/pmp-vc5.png" class="no-border" >}}

#### Host URL

This is the host URL of your Azure DevOps enterprise server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your Azure DevOps enterprise server host name is myazure.example.com, you should input `https://myazure.example.com` here.

#### Org

Input the name of the organization that you created in Azure DevOps.

#### Project Admin PAT

Input the admin user PAT that you created in Azure DevOps.

#### Azure OAuth Config

Click **New**, and then fill out the following information:

* **Name** - Enter a meaningful name
* **Client ID** - Enter the Application ID that you obtained from Microsoft Entra ID
* **Tenant ID** - Enter the Directory ID that you obtained from Microsoft Entra ID
* **Client Secret** - Enter the Client Secret that you obtained from Microsoft Entra ID
* **Resource** - `499b84ac-1321-427f-aa17-267ca6975798/.default`
* **Single O auth account** - **No**
* **Default config** - **Yes**
* **Active** - **Yes**

### Normal User Credentials

Users must generate their own PAT to work with Azure DevOps by doing the following steps:

1. Log in to Private Mendix Platform.
2. Click **Manage My Account** > **Service Credentials**.
3. Click **Register New Credentials** > **Azure DevOps**, then click **Get My Azure PAT**.
4. On the Microsoft login screen, input you Azure user credentials to verify and authorize the app.
5. Wait for the PAT and Azure user email to be displayed on the **Service Credentials** page in Private Mendix Platform.
