---
title: "Configuring the Version Control System for Private Mendix Platform"
url: /private-mendix-platform-version-control/
description: "Documents the initial configuration for the Private Mendix Platform."
weight: 30
tags: ["private mendix platform",  "private platform", "private marketplace", "version control"]
---

## 1 Introduction

Private Mendix Platform supports the following types of Git repositories as the Mendix app code repository:

* GitLab (both SaaS and self-managed)
* GitHub Enterprise Server
* Bitbucket
* Azure DevOps

To select the repository type, click  **DevOps Settings** > **Version Control System** > **Git Host Type**. 

## 2 GitLab

This section describes the configuration of a GitLab repository.

### 2.1 DevOps Settings

{{< figure src="/attachments/private-platform/pmp-vc1.png" >}}

#### 2.1.1 Host URL

This is the host URL of your GitLab server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your GitLab server host name is mygitlab.example.com, you should input `https://mygitlab.example.com` here.

#### 2.1.2 Group ID

All the apps on Private Mendix Platform are created under a GitLab group. You need to create a group in GitLab and then input the *Group ID* in this field.

{{< figure src="/attachments/private-platform/pmp-vc2.png" >}}

#### 2.1.3 Group owner PAT

This is the PAT from the above group owner. When generating the access token for group owner, select all scopes and set expiration date to never.

#### 2.1.4 Automatic Access Provisioning

If you use a self-managed GitLab server, you can enable this feature to automatically create GitLab user and PAT for private platform users. During logging in the platform, user email is used as unique key to search in GitLab server. If this email name is not registered in GitLab, Private Mendix Platform creates a GitLab user with this email. A PAT is then generated for this user. 

#### 2.1.5 Admin PAT

This is the PAT of the GitLab administrator, which is the root user access token with all scopes selected.

### 2.2 Normal User Credentials

When the **Automatic Access Provisioning** is disabled, private platform users need to manually input the GitLab user id and PAT at first login.

#### 2.2.1 User ID

The user ID (integer number) of this GitLab user. It is not the user name. You can obtain the value from the user profile page.

#### 2.2.2 Personal Access Token

The access token of this GitLab user.

## 3 Github

This section describes the configuration of a Github repository.

### 3.1 DevOps Settings

{{< figure src="/attachments/private-platform/pmp-vc3.png" >}}

#### 3.1.1 Host URL

This is the host URL of your GitHub server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your GitHub server host name is mygithub.example.com, you should input `https://mygithub.example.com` here.

#### 3.1.2 Organization Name

All the apps on Private Mendix Platform are created under an organization. You need to create an organization to host all the Mendix apps. Type the organization name into this field.

#### 3.1.3 Organization Owner PAT

Input the classic PAT of this organization owner into this field.  You need select at least these scopes: `repo admin:org user delete_repo`. The expiration date is set to **No Expiration**.

#### 3.1.4 Automatic Access Provisioning

If you are running a self-managed GitHub enterprise server, you can enable this feature to automatically create GitHub user and PAT for private platform users. During logging in to the platform, the user email is used as unique key to search in GitHub server. If this email name is not registered in GitHub, Private Mendix Platform creates a GitHub user with this email. A PAT is then generated for this user. 

#### 3.1.5 AdminPAT

This is the PAT of the GitHub enterprise instance administrator. When generating this PAT, all scopes should be selected.

### 3.2 Normal User Credentials

When the **Automatic Access Provisioning** is disabled, Private Mendix Platform users need to manually input the GitHub user name and PAT at first login.

{{% alert color="info" %}}
This user needs to be invited into this organization as a organization member.
{{% /alert %}}

#### 3.2.1 User Name
The user name (login name) of this GitHub user. 

#### 3.2.2 Personal Access Token

The access token of this GitHub user. To make it easier, you can also select all the scopes. The expiration date is set to No Expiration.

## 4 Bitbucket

This section describes the configuration of a Bitbucket repository.

### 4.1 DevOps Settings

{{< figure src="/attachments/private-platform/pmp-vc4.png" >}}

#### 4.1.1 Host URL

This is the host URL of your Bitbucket enterprise server. The format should be `https://<HOST>`. There is no slash in the end. For example, if your Bitbucket enterprise server host name is mybitbucket.example.com, you should input `https://mybitbucket.example.com` here.

#### 4.1.2 Project key

All the Mendix apps on private platform are created under a project. You need to create an project to host all the Mendix apps. Input the project key in this field. You can go to `https://mybitbucket.example.com/projects` to view the project key.

#### 4.1.3 Project Admin PAT

Input the access token of a project admin user.

#### 4.1.4 Automatic Access Provisioning

If you are running a self managed Bitbucket enterprise server, you can enable this feature to automatically create Bitbucket user and PAT for private platform users. During logging in to the platform, the user email is used as unique key to search in Bitbucket server. If this email name is not registered in Bitbucket, Private Mendix Platform creates a Bitbucket user with this email as the user name. A PAT is then generated for this user. 

Bitbucket enterprise server allows to use same email for multiple users. To make the Bitbucket user unique by email, the email name is used to be the Bitbucket user name when doing the automatic provisioning.

#### 4.1.5 Admin Username

Bitbucket system admin user name.

#### 4.1.6 Admin Password

Bitbucket system admin user password.

### 4.2 Normal User Credentials

When the Automatic Access Provisioning is disabled, Private Mendix Platform users need to manually input the Bitbucket user name and PAT at first login. 

This user needs to be invited into the project with the **Create repository** permission. You can go to `https://mybitbucket.example.com/projects/<PROJECT KEY>/permissions` to add a user and grant permission.

#### 4.2.1 User Name

The user name (login name) of this Bitbucket user. 

#### 4.2.2 Personal Access Token

The Access token of this Bitbucket user. The permission should be at least `Project Admin`. The expiration date is set to **No Expiration**.