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
* GitHub Enterprise Cloud
* Bitbucket
* Azure DevOps

To select the repository type, perform the following steps:

1. Switch to Admin Mode by clicking the profile picture in the top right corner of the screen and selecting **Switch to Admin Mode**.
2. In the left navigation menu, open the **Settings** section. 
3. Click **Version Control**. 

## GitLab

This section describes the configuration of a GitLab repository. Private Mendix Platform supports both GitLab SaaS and self‑managed GitLab instances.

### Prerequisites

Before configuring GitLab for Private Mendix Platform, ensure that you fulfill the following prerequisites:

* You have access to a GitLab SaaS account or a self‑managed GitLab server.
* A GitLab group exists to host applications created by the Private Mendix Platform.
* You can generate Personal Access Tokens (PATs) with the required scopes.
* For Automatic Access Provisioning, a GitLab administrator (root) Personal Access Token is available.

### Configuration

* **Host URL** - This is the host URL of your GitLab server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your GitLab server host name is `mygitlab.example.com`, you should input `https://mygitlab.example.com` here.
* **Group ID** - All the apps on Private Mendix Platform are created under a GitLab group. You need to create a group in GitLab and then input the *Group ID* in this field.
* **Group owner PAT** - This is the PAT from the above group owner. When generating the access token for group owner, select all scopes and set expiration date to **never**.
* **Automatic Access Provisioning** - If you use a self-managed GitLab server, you can enable this feature to automatically create GitLab user and PAT for private platform users. During logging in the platform, user email is used as unique key to search in GitLab server. If this email name is not registered in GitLab, Private Mendix Platform creates a GitLab user with this email. A PAT is then generated for this user. 
* **Admin PAT** - This is the PAT of the GitLab administrator, which is the root user access token with all scopes selected.

### Normal User Credentials

When the **Automatic Access Provisioning** is disabled, private platform users need to manually input the GitLab user id and PAT at first login.

* **User ID** - The user ID (integer number) of this GitLab user. It is not the user name. You can obtain the value from the user profile page.
* **Personal Access Token** - The access token of this GitLab user.

### Supported Predefined Push Rules

Private Mendix Platform supports only the following predefined GitLab push rules:

* Reject unverified users. 
    
    Users can only push commits to this repository if the committer email is one of their own verified emails.

* Reject inconsistent user names.

    Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

* Check whether the commit author is a GitLab user

    Commits are restricted to existing GitLab users.

{{< figure src="/attachments/private-platform/pmp-vc1.png" alt="Version Control Settings for Gitlab" class="no-border" >}}

## GitHub

This section describes the configuration of a GitHub repository. Private Mendix Platform supports GitHub Enterprise Server and GitHub Enterprise Cloud.

### Prerequisites

Before configuring GitHub for Private Mendix Platform, ensure that you fulfill the following prerequisites:

* You have access to GitHub Enterprise Server or GitHub Enterprise Cloud.
* A GitHub organization exists to host applications created by the Private Mendix Platform.
* You can generate Personal Access Tokens (PATs) with sufficient permissions to manage repositories and organization access.
* For GitHub Enterprise Server with Automatic Access Provisioning enabled, a GitHub administrator‑level PAT is available.
* For GitHub Enterprise Cloud with Data Residency enabled, an OAuth App can be created in the GitHub organisation.

### Common Configuration {#common-config}

The following configuration applies to all GitHub server types, unless stated otherwise.

* **Organization Name** - All the apps on Private Mendix Platform are created under an organization. You need to create an organization to host all the Mendix apps. Type the organization name into this field.
* **Organization Owner PAT** - This is the Personal Access Token (PAT) of the organization owner. The PAT must have sufficient permissions to manage repositories and organization access. It is recommended to use a classic PAT with the required scopes selected and the expiration date set to **No Expiration**.

### GitHub Enterprise Server

* **Host URL** - This is the host URL of your GitHub server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your GitHub server host name is `mygithub.example.com`, you should input `https://mygithub.example.com` here.
* **Automatic Access Provisioning** - If you are running a self-managed GitHub enterprise server, you can enable this feature to automatically create GitHub users and Personal Access Tokens for Private Mendix Platform users. When logging in to the platform, the user email is used as unique key to search in GitHub server. If this email name is not registered in GitHub, Private Mendix Platform creates a GitHub user with this email. A PAT is then generated for this user. 
* **AdminPAT** - This is the PAT of the GitHub Enterprise Server administrator. The token must be generated with sufficient privileges to manage users and access permissions.

{{< figure src="/attachments/private-platform/pmp-vc2.png" alt="Version Control Settings for GitHub Enterprise Server" class="no-border" >}}

### GitHub Enterprise Cloud

{{% alert color="info" %}}
Automatic access provisioning is not supported for GitHub Enterprise Cloud.
{{% /alert %}}

* **Data Residency** - When toggled **off**, you only need to configure the [common settings](#common-config). When toggled **on**, OAuth‑based authentication is required.
* **Dedicated Host URL** – This is the dedicated GitHub Enterprise Cloud host URL associated with the data residency configuration for your organization.
* **OAuth App Configuration** – You must create an OAuth App in GitHub with the **Authorization Callback URL** set to the callback URL provided by the Private Mendix Platform.

    * **Client ID** – The Client ID generated by the GitHub OAuth App.
    * **Client Secret** – The Client Secret generated by the GitHub OAuth App.

{{< figure src="/attachments/private-platform/pmp-vc3.png" alt="Version Control Settings for GitHub Enterprise Cloud" class="no-border" >}}

### Normal User Credentials

When Automatic Access Provisioning is disabled or not available, Private Mendix Platform users must manually enter their GitHub credentials at first login. The user must be invited to the organization as an organization member.

* **User Name** – The GitHub login name of this user.
* **Personal Access Token** – The Personal Access Token of this GitHub user. The token must have sufficient permissions to access and push to the assigned repositories.

## Bitbucket

This section describes the configuration of a Bitbucket repository. Private Mendix Platform supports self‑managed Bitbucket Enterprise Servers.

## Prerequisites

Before configuring Bitbucket for Private Mendix Platform, ensure that you fulfill the following prerequisites:

* You have access to a self‑managed Bitbucket Enterprise Server.
* A Bitbucket project exists to host applications created by the Private Mendix Platform.
* You can generate Personal Access Tokens (PATs) for Bitbucket users.
* For Automatic Access Provisioning, Bitbucket system administrator credentials are available.

## Configuration

* **Host URL** - This is the host URL of your Bitbucket enterprise server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your Bitbucket enterprise server host name is `mybitbucket.example.com`, you should input `https://mybitbucket.example.com` here.
* **Project Key** - All the Mendix apps on the Private Mendix Platform are created under a Bitbucket project. You must create an project to host all the Mendix apps and input the project key in this field. You can view the project key at `https://mybitbucket.example.com/projects`.
* **Project Admin PAT** - This is the Personal Access Token of a Bitbucket project administrator user.

### Automatic Access Provisioning

If you are running a self‑managed Bitbucket Enterprise Server, you can enable this feature to automatically create Bitbucket users and Personal Access Tokens for Private Mendix Platform users.

During login to the platform, the user email address is used as a unique key to search in the Bitbucket server. If the email address is not registered in Bitbucket, Private Mendix Platform creates a Bitbucket user using the email address as the username. A Personal Access Token is then generated for this user.

Bitbucket Enterprise Server allows the same email address to be associated with multiple users. To ensure uniqueness during automatic provisioning, the user email address is used as the Bitbucket username.

* **Admin Username** – The username of the Bitbucket system administrator.
* **Admin Password** – The password of the Bitbucket system administrator.

### Normal User Credentials

When the Automatic Access Provisioning is disabled, Private Mendix Platform users must manually input the Bitbucket credentials at first login. 

This user needs to be invited into the project with the **Create repository** permission. You can add users and grant permissions at `https://mybitbucket.example.com/projects/<PROJECT KEY>/permissions`.

* **User Name** - The Bitbucket login name of this user. 
* **Personal Access Token** - The Personal Access Token of this Bitbucket user. The permission level must be at least **Project Admin**, and the expiration date should be set to **No Expiration**.

{{< figure src="/attachments/private-platform/pmp-vc4.png" alt="Version Control Settings for Bitbucket" class="no-border" >}}

## AzureDevOps

This section describes the configuration of an Azure DevOps repository for use with the Private Mendix Platform.

### Prerequisites

Before configuring Azure DevOps for Private Mendix Platform, ensure that you fulfill the following prerequisites:

* You have access to an Azure DevOps organization.
* An Azure DevOps project exists to host applications created by the Private Mendix Platform.
* You can generate Personal Access Tokens (PATs) in Azure DevOps.
* A Microsoft Entra ID (Azure AD) application can be registered.

### Microsoft Entra ID Configuration

To use AzureDevOps as the repository,  you must first register an application in [Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application), and take note of the following information:

* Application ID (client ID)
* Directory ID (tenant ID)
* Client Secret

For the API permissions, select **user_impersonation**.

For the web callback URL, enter a URL in the following format: `YOUR_APP_ROOT/oauth-callback/`.

### Azure DevOps Configuration

In Azure DevOps, perform the following tasks:

1. Create an organization.
2. Generate a Personal Access Token (PAT) for the admin user.
3. Create users who will work with Private Mendix Platform.
4. Assign those users the Basic access level.

### Private Mendix Platform Configuration

* **Host URL** - This is the host URL of your Azure DevOps enterprise server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your Azure DevOps enterprise server host name is `myazure.example.com`, you should input `https://myazure.example.com` here.
* **Organization** – Enter the name of the Azure DevOps organization that you created.
* **Organization Admin PAT** – Enter the Personal Access Token of the Azure DevOps organization admin user.

#### Azure OAuth Config

1. Click **New**.
2. Fill out the following information:

    * **Name** - Enter a meaningful name for the OAuth configuration.
    * **Client ID** - Enter the Application ID that you obtained from Microsoft Entra ID.
    * **Tenant ID** - Enter the Directory ID that you obtained from Microsoft Entra ID.
    * **Client Secret** - Enter the Client Secret that you obtained from Microsoft Entra ID.
    * **Resource** - Enter the following value: `499b84ac-1321-427f-aa17-267ca6975798/.default`.
    * **Single OAuth Account** - Set to **No**.
    * **Default config** - Set to **Yes**.
    * **Active** - Set to **Yes**.

#### Normal User Credentials

Users must generate their own PAT to work with Azure DevOps by doing the following steps:

1. Log in to Private Mendix Platform.
2. Click **Manage My Account** > **Service Credentials**.
3. Click **Register New Credentials** > **Azure DevOps**, then click **Get My Azure PAT**.
4. On the Microsoft login screen, input you Azure user credentials to verify and authorize the app.
5. Wait for the PAT and Azure user email to be displayed on the **Service Credentials** page in Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-vc5.png" alt="Version Control Settings for Azure DevOps" class="no-border" >}}