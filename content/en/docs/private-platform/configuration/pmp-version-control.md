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
* Azure DevOps Services (cloud, `dev.azure.com`)
* Azure DevOps Server (on-premises), version 2022.1 or above

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

## Azure DevOps

This section describes the configuration of an Azure DevOps repository for use with the Private Mendix Platform. Private Mendix Platform supports two deployment types:

| Deployment Type | Use For | Authentication |
| --- | --- | --- |
| **Azure DevOps Services (cloud)** | `dev.azure.com` | Microsoft Entra ID OAuth, which creates the users' Personal Access Tokens (PATs), plus an organization admin PAT |
| **Azure DevOps Server (on-premises)** | Your own Azure DevOps Server, version 2022.1 or above | PATs only. Private Mendix Platform does not call Microsoft Entra ID or `dev.azure.com` |

Select the type in **Settings** > **Version Control** > **Azure DevOps** > **Deployment Type**. Existing configurations and settings exports from earlier versions use **Azure DevOps Services (cloud)**.

### Azure DevOps Services (Cloud)

#### Prerequisites

Before configuring Azure DevOps Services for Private Mendix Platform, ensure that you fulfill the following prerequisites:

* You have access to an Azure DevOps organization.
* An Azure DevOps project exists to host applications created by the Private Mendix Platform.
* You can generate Personal Access Tokens (PATs) in Azure DevOps.
* A Microsoft Entra ID (Azure AD) application can be registered.
* Your Azure DevOps organization must be connected to the same Microsoft Entra ID tenant as the app registration used for Azure OAuth.

#### Microsoft Entra ID Configuration

To use Azure DevOps Services as the repository, you must first register an application in [Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application), and take note of the following information:

* Application ID (client ID)
* Directory ID (tenant ID)
* Client Secret

For the API permissions, select **user_impersonation**.

For the web callback URL, enter a URL in the following format: `YOUR_APP_ROOT/oauth-callback/`.

#### Azure DevOps Configuration

In Azure DevOps, perform the following tasks:

1. Create an organization.
2. Generate a Personal Access Token (PAT) for the admin user.
3. Create users who will work with Private Mendix Platform.
4. Assign those users the Basic access level.

#### Private Mendix Platform Configuration

* **Deployment Type** - Select **Azure DevOps Services (cloud)**.
* **Host URL** - The Azure DevOps Services URL, `https://dev.azure.com`.
* **Organization** – Enter the name of the Azure DevOps organization that you created.
* **Organization Admin PAT** – Enter the Personal Access Token of the Azure DevOps organization admin user.

##### Azure OAuth Config

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

##### Normal User Credentials

Users must generate their own PAT to work with Azure DevOps by doing the following steps:

1. Log in to Private Mendix Platform.
2. Click **Manage My Account** > **Service Credentials**.
3. Click **Register New Credentials** > **Azure DevOps**, then click **Get My Azure PAT**.
4. On the Microsoft login screen, input you Azure user credentials to verify and authorize the app.
5. Wait for the PAT and Azure user email to be displayed on the **Service Credentials** page in Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-vc5.png" alt="Version Control Settings for Azure DevOps Services" class="no-border" >}}

### Azure DevOps Server (On-Premises) {#azure-devops-server}

With Azure DevOps Server, Private Mendix Platform creates one project with one Git repository for every app in a project collection of your server, manages the members of that project, shows branches and commits, and builds apps with the Kubernetes build method. All calls use PATs over HTTPS and go to your server only.

#### Prerequisites

Before configuring Azure DevOps Server for Private Mendix Platform, ensure that you fulfill the following prerequisites:

* Azure DevOps Server 2022.1 or above (REST API 7.1). Versions 2022.1 and 2022.2 are tested. Earlier versions are not supported.
* A project collection that hosts the apps created by Private Mendix Platform. Each app gets its own project.
* A dedicated service account (not a personal account) that is a member of **Project Collection Administrators** of that collection, with a PAT (see [Personal Access Tokens](#ado-server-pats)).
* Private Mendix Platform can reach the server over HTTPS. The server certificate contains the host name of the Host URL in its Subject Alternative Name (SAN).
* If the server certificate is not issued by a public certificate authority (CA): the issuing CA certificate in PEM format (see [Certificates](#ado-server-certificates)).
* For Kubernetes builds: the requirements in [Azure DevOps Server Builds](/private-mendix-platform/configure-k8s/#azure-devops-server).

#### Private Mendix Platform Configuration

* **Deployment Type** - Select **Azure DevOps Server (on-premises)**.
* **Host URL** - The server URL without the collection, in the format `https://<HOST>`, optionally with a port and a virtual directory, for example `https://ado.example.com` or `https://ado.example.com/tfs`. There is no slash at the end.
* **Collection** - The name of the project collection, for example `DefaultCollection`.
* **Organization Admin PAT** - The PAT of the service account. You can also store it in an external secret store (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).

When you save, Private Mendix Platform checks the connection, the server type and the PAT, and shows an error code if the check fails (see [Troubleshooting](#ado-server-troubleshooting)). The **Azure OAuth Config** section is not used for Azure DevOps Server and is hidden.

{{% alert color="warning" %}}
Use HTTPS. An `http://` Host URL is accepted, but the PATs are then sent unencrypted; Private Mendix Platform logs a warning.
{{% /alert %}}

{{< figure src="/attachments/private-platform/pmp-vc6.png" alt="Version Control Settings for Azure DevOps Server" class="no-border" >}}

#### Personal Access Tokens {#ado-server-pats}

| PAT | Owner | Scopes |
| --- | --- | --- |
| Organization Admin PAT | The service account | Project and Team (Read, write & manage); Code (Read, write & manage); Identity (Read & manage) |
| Users' PAT | Each user, their own account | Code (Read & write); Project and Team (Read) |

A PAT works only in the collection where it was created. A PAT is checked when it is saved; if it expires or is revoked later, Git actions and builds fail with an authentication error (AZ003) until a new PAT is entered.

Recommended PAT policy:

* Create the Organization Admin PAT for a dedicated service account that is a member of **Project Collection Administrators** only. Grant exactly the scopes in the table, never full access. Choose the longest lifetime your policy allows, at most one year, and replace the PAT in Private Mendix Platform before it expires. Azure DevOps adds the account that creates a project to that project's default team, so this account appears as a member of every app project that Private Mendix Platform creates; with a personal account, that person appears in every project and the PAT stops working when they leave.
* Users' PATs need the scopes Code (Read & write) and Project and Team (Read) only. When a user's PAT expires, Git actions and builds of that user fail with AZ003 until the user enters a new PAT.
* Private Mendix Platform never exports PATs and never writes them to logs.

#### Normal User Credentials

Each user creates a PAT of their own account in Azure DevOps Server (**User settings** > **Personal access tokens**, on the collection used by Private Mendix Platform) and enters it in Private Mendix Platform:

1. Log in to Private Mendix Platform. On the first login, enter the PAT on the welcome page; later, click **Manage My Account** > **Service Credentials** > **Register New Credentials** > **Azure DevOps**.
2. Enter the **Personal Access Token** and save.

Private Mendix Platform validates the PAT and stores the account name that the server reports for it. This account name is what Private Mendix Platform adds to the project groups when the user gets a role on an app. The **Get My Azure PAT** button is not available for Azure DevOps Server.

#### Certificates {#ado-server-certificates}

If the server certificate is issued by a private or internal CA, add the CA certificate to the trust of Private Mendix Platform, using the Mendix runtime setting `CACertificates` or the Mendix Operator custom CA secret. The certificate must contain the host name of the Host URL in its SAN. Without trust, saving fails with AZ005.

On Kubernetes with the Mendix Operator, follow these steps:

1. Save the CA certificate (PEM) of the Azure DevOps Server as `ado-ca.crt`.
2. If a custom CA secret is already configured (`spec.trust.customCASecretName` in the Operator configuration), append the new certificate to the existing bundle, so that the CAs already in it stay trusted. Replace `NAMESPACE` with the namespace of Private Mendix Platform, and the secret name if yours differs:

    ```text
    kubectl -n NAMESPACE get secret mendix-custom-ca -o jsonpath='{.data.custom\.crt}' | base64 -d > bundle.crt
    printf '\n' >> bundle.crt
    cat ado-ca.crt >> bundle.crt
    kubectl -n NAMESPACE create secret generic mendix-custom-ca --from-file=custom.crt=bundle.crt --dry-run=client -o yaml | kubectl -n NAMESPACE apply -f -
    ```

3. If no custom CA is configured yet, create the secret and set `spec.trust.customCASecretName` as described in [Obtaining and Configuring the CA Certificate](/private-mendix-platform/configure-k8s/#ca-certificate).
4. Restart Private Mendix Platform (`kubectl -n NAMESPACE rollout restart deployment/mxplatform-master`) and save the Version Control settings again.

The build pods do not read this secret; see [Azure DevOps Server Builds](/private-mendix-platform/configure-k8s/#azure-devops-server).

#### Studio Pro and Windows Authentication {#ado-server-studio-pro}

Developers open an app with **Edit in Studio Pro**. Private Mendix Platform gives Studio Pro the repository URL and the user's PAT; Studio Pro then does all Git work itself, directly against Azure DevOps Server. Studio Pro uses two Git clients, LibGit2Sharp (inside Studio Pro) and Git for Windows. Both must trust the server certificate, and both follow the setting **Edit** > **Preferences** > **Version control** > **Git** > **Enable Current Windows User Authentication for git**. The setting is off by default and must match what your server offers.

To find out what your server offers, request the collection URL without credentials and read the `WWW-Authenticate` header:

```text
curl.exe -k -sS -o NUL -D - https://YOUR-SERVER/YOUR-COLLECTION/_apis/projects | findstr /i www-authenticate
```

| The Server Offers | Enable Current Windows User Authentication for git | Git Setting on the Windows Machine | What Signs In to Git |
| --- | --- | --- | --- |
| Negotiate and NTLM (Windows authentication on, the default) | **On** | `git config --global http.emptyAuth true` | The signed-in Windows user. The machine must be joined to the domain, and the Windows account must be the account of the PAT saved in Private Mendix Platform. The PAT is not sent to the server. |
| Bearer and Basic only (Windows authentication off) | **Off** | None | The PAT from the user's Private Mendix Platform profile |

{{< figure src="/attachments/private-platform/pmp-vc7.png" alt="Studio Pro preferences, Version control, Git" class="no-border" >}}

To set up a Windows machine (once per Windows user, or by group policy), follow these steps:

1. Trust the server certificate in Windows. Skip this step if the certificate is from a public CA or your company CA is distributed by group policy. Otherwise, import the CA certificate (or the self-signed server certificate) into **Trusted Root Certification Authorities** of the current user; no administrator rights are needed:

    ```text
    Import-Certificate -FilePath .\ado-ca.cer -CertStoreLocation Cert:\CurrentUser\Root
    ```

2. Let Git for Windows use the Windows certificate store. Git for Windows has its own CA list and rejects your CA even after step 1:

    ```text
    git config --global http.sslBackend schannel
    ```

3. For Windows authentication only: let Git use the signed-in Windows user, and select the **Enable Current Windows User Authentication for git** checkbox in Studio Pro. Studio Pro gives Git no credential in this mode; without this setting Git asks its credential helper, which cannot prompt inside Studio Pro, and fails with exit code 128:

    ```text
    git config --global http.emptyAuth true
    ```

4. For Basic only: leave the checkbox cleared and do not set `http.emptyAuth`.
5. Restart Studio Pro and open an app from the app list.

{{< figure src="/attachments/private-platform/pmp-vc8.png" alt="Studio Pro setting per server type and the messages for mismatches" class="no-border" >}}

If opening the app fails, check the following messages. The Git output of Studio Pro is in `%LOCALAPPDATA%\Mendix\log\<STUDIO PRO VERSION>\git\git.log.txt`.

| Message | Cause | What to Do |
| --- | --- | --- |
| *user cancelled certificate check* | Windows does not trust the server certificate | Step 1 |
| *SSL certificate problem: self-signed certificate* (in the Git log) | Git for Windows uses its own CA list | Step 2 |
| *Git command line client has exited with code 128*, with *terminal prompts disabled* in the Git log | Git got a 401 and no credential | Windows authentication server: step 3. Basic-only server: clear the checkbox |
| *too many redirects or authentication replays* | The checkbox is cleared and the server offers NTLM, so the PAT was answered with NTLM | Select the checkbox and set `http.emptyAuth true` |
| *Git command line client has exited with code 128*, with *couldn't find remote ref refs/notes/mx_metadata* in the Git log | The repository was pushed with plain Git and has no Studio Pro notes yet; not an authentication error | Commit and push once from Studio Pro |
| 401 or 403 after a successful connection | The Windows account is not the account of the PAT saved in Private Mendix Platform, or the user has no role with Git access on the app | Save a PAT of the Windows account; check the app role |

{{% alert color="info" %}}
A PAT cannot be used against a server that offers NTLM: Studio Pro's Git library answers NTLM and the PAT fails. Use Windows authentication in that case. Windows authentication uses Kerberos when the client can obtain a ticket and NTLM otherwise; the settings above are the same for both. Kerberos needs a service principal name (SPN) for the host name that users type, registered for the identity of the Azure DevOps application pool.
{{% /alert %}}

For the Azure DevOps Server administrator: Windows authentication is a setting of the IIS site and, on servers with the `/tfs` virtual directory, also of that application; the application setting wins. If you change it, check both levels and confirm the result with the `curl` command above. Private Mendix Platform itself does not need Windows authentication; it signs in with PATs.

#### Repository Membership

Private Mendix Platform manages access to each app's project with the Organization Admin PAT:

* Access follows the app roles in Private Mendix Platform. A user gets repository access through a role that includes Git access, either given directly on the app (creator, invite, ownership transfer) or inherited from the group that owns the app when that group has auto-invite enabled. Group changes are synchronized in the background.
* An app Owner or a company administrator becomes a member of **Project Administrators**; every other role with Git access becomes a member of **Contributors**. **Readers** is not used. Changing the role moves the user to the new group and removes the old one.
* Removing a member removes the user from these groups and from the project's default team. Access that the user gets through other groups you set up in Azure DevOps stays.
* To open and push in Studio Pro, a user needs Read and Contribute on the repository, which **Contributors** gives. No project or collection administrator role is needed.
* Only Mendix app projects are changed: projects that Private Mendix Platform created, and existing projects that hold exactly one repository with an `.mpr` file (apps added with Import Apps). Other projects are never changed.
* Azure DevOps Server can only find users it already knows, that is, users who signed in or used a PAT before, or who are members of a group in the collection (for example an Active Directory group). For other users, Private Mendix Platform logs a warning and changes nothing; a direct invite is cancelled.
* A user must have saved their own PAT in Private Mendix Platform before they can be added to a project, because the saved PAT provides the account name. The account forms `DOMAIN\user`, the plain account name and the email address are accepted; a name that matches more than one person is refused.

To manage project access only in Azure DevOps, set the constant `AzureDevopsIntegration.ServerManageMembership` to `false`. Private Mendix Platform then changes no groups and logs each skipped change.

#### Settings Export and Import

The settings export contains the deployment type, the Host URL and the collection. PATs are never exported; enter them again after the import.

#### Advanced Settings

| Constant | Default | Use |
| --- | --- | --- |
| `AzureDevopsIntegration.HttpConnectTimeoutMs` | 10000 | Time to open a connection to the server, in milliseconds (at most 600000) |
| `AzureDevopsIntegration.HttpRequestTimeoutMs` | 30000 | Time to wait for an answer, in milliseconds (at most 600000) |
| `AzureDevopsIntegration.ServerManageMembership` | true | `false` = do not change project groups (see Repository Membership) |

Outbound proxy: only the Java proxy properties (`https.proxyHost`, `https.proxyPort`, `http.nonProxyHosts`) are used; proxy authentication is not supported. Redirects are not followed; use the final URL as the Host URL.

#### Troubleshooting {#ado-server-troubleshooting}

| Code | Meaning | What to Do |
| --- | --- | --- |
| AZ003 | Authentication failed | Check that the PAT is valid, not expired, created on this collection, and has the required scopes |
| AZ004 | Server unreachable or no answer in time | Check the Host URL, port, firewall and proxy; raise the timeouts for a slow server. The first request after a server restart can be slow; retry once |
| AZ005 | Certificate not trusted | Add the issuing CA (see [Certificates](#ado-server-certificates)); check the SAN |
| AZ006 | The URL is Azure DevOps Services, but Azure DevOps Server is selected | Select the matching deployment type |
| AZ007 | The server answered with a redirect | Use the final URL (for example `https`) as the Host URL |
| AZ008 | Collection, project or repository not found | Check the Host URL and the collection |
| AZ009 | Request not supported | Use Azure DevOps Server 2022.1 or above |
| AZ010 | Server error, or the configuration could not be read | Check the server and the Private Mendix Platform log, then retry |
| AZ011 | Invalid value | Check the Host URL and the collection |

#### Limitations

* The **Azure DevOps** CI build utility is not supported with Azure DevOps Server; use the Kubernetes build method (see [Azure DevOps Server Builds](/private-mendix-platform/configure-k8s/#azure-devops-server)).
* An outbound proxy that requires authentication is not supported.
* Studio Pro cannot use a PAT against a server that offers NTLM; use Windows authentication.
* As with the other version control systems, repository access is not removed when a Private Mendix Platform user is deactivated, blocked or deleted, or when an identity provider group claim is removed. Remove the user from the app or group in Private Mendix Platform first, or remove the user from the Azure DevOps project by hand.
* Kubernetes builds clone the repository with the PAT of the user who starts the build (Basic authentication); that user needs read access to the repository.
* One Azure DevOps configuration per Private Mendix Platform instance: all apps of the instance use the same server and collection.
