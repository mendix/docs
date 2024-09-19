---
title: "Working with Git On-Premises Version Control Server"
linktitle: "Git On-Premises Version Control Server"
url: /refguide/on-premises-git/
weight: 60
description: "Introduces how to work with Git on-premises version control server."
aliases:
    - /howto/collaboration-requirements-management/on-premises-git-howto/
---

## Introduction {#intro}

When developing Mendix applications, changes to these applications are stored in a version control system. This system is called [Team Server](/developerportal/general/team-server/) and is part of the Mendix Platform. This means that the application's files are stored in the Mendix online environment. For more information, see the [Version Control Reference Guide](/refguide/version-control/).

While using Team Server is the recommended for most Mendix developers, you may prefer to store your application's files in a system controlled by your own organization. For version control, Mendix uses [Git](/refguide/on-premises-git/). This document describes how to work with Git version control system.

{{% alert color="info" %}}
This document does not describe how to set up a Git server from scratch; typically, this will be taken care of by the IT department of your organization.
{{% /alert %}}

{{% alert color="info" %}}When you use a third-party Git version control repository, the following products and capabilities are not available:

* Publishing and deploying to Mendix Cloud directly from Studio Pro
* Building deployment packages on the Mendix Portal directly from the Team Server
* Using integrated platform APIs such as the [App repository API](/apidocs-mxsdk/apidocs/app-repository-api/), [Build API](/apidocs-mxsdk/apidocs/build-api/), [Platform SDK](/apidocs-mxsdk/mxsdk/), [Projects API](/apidocs-mxsdk/apidocs/projects-api/), [Epics API](/apidocs-mxsdk/apidocs/epics-api/), and [User management API](/apidocs-mxsdk/apidocs/user-management-api/)
* [AQM](/addons/aqm-addon/){{% /alert %}}

## Prerequisites

Make sure you have completed the following prerequisites:

* Make sure you have the right server provider. We currently only support Git Private Server. For more information, see the [Preparing Your Repository](#preparing-your-repo) section. 
* You have an unversioned Mendix app. For more information, see the [Creating an App](#create-app) section.

## Supported Authentication Mechanisms

Currently, Mendix only supports HTTP Basic authentication for Git service providers. With most providers, this takes the form of using of personal access tokens (PATs).

To use PAT (or another equivalent), you need to specify it in the **Password** field when Studio Pro requests credentials for the version control server:

{{< figure src="/attachments/refguide/version-control/on-premises-git/sign-in-dialog.png" alt="Sign In dialog" class="no-border" >}}

Currently Mendix keeps PAT using operating system supported solutions:

* For Windows, Mendix uses a credential locker mechanism, accessible to users by using Credential Manager.
* For MacOs, Mendix uses keychains, accessible to users by using Keychain Access.

## Setting Up the Environment

This section describes how to configure a Git versioned app in Studio Pro. You need a Git server and an initially unversioned Mendix app.

### Preparing Your Repository {#preparing-your-repo}

Mendix supports multiple Git service providers that are listed below. For more information on a specific provider and requirements for it, see [System Requirements](/refguide/system-requirements/). 

Studio Pro is able to use the following Git server providers:

* Azure DevOps Server
* Azure Repos
* GitHub.com
* GitHub Enterprise Edition
* GitLab.com
* GitLab EE
* GitLab CE
* Bitbucket.org
* Bitbucket Server
* Bitbucket Data Center

{{% alert color="info" %}} Please note that some Git server providers have added additional limitations to their Git offering, such as a limit on the size of individual files. In some cases the Mendix .MPR file can grow larger than 100MB. Please take this into account when choosing a provider. {{% /alert %}}

You need to create a private repository in the selected provider and create a personal access token (PAT) to provide access to it. The PAT is used as a password.

To interact with this private repository from Studio Pro, you need a link to the repository and a PAT.

### Preparing Studio Pro for Git {#preparing-git-support}

To use on-premise Git, you need to configure name and email values that will be used to identify your commit in Studio Pro by navigating to **Edit** > **Preferences** > **Version Control**:

{{< figure src="/attachments/refguide/version-control/on-premises-git/preferences-git.png" alt="Preferences dialog" class="no-border" >}}

Studio Pro now is set up to support Git.

### Creating an App {#create-app}

Create an unversioned app in Studio Pro:

{{< figure src="/attachments/refguide/version-control/on-premises-git/app-settings.png" alt="App Settings dialog" class="no-border" >}}

Once the app is created, you can upload it to your private Git repository. For more information on how to upload it, see the [Uploading to the Private Git Server](#upload-to-private-git-server) section below.

### Downloading from a Private Repository

{{% alert color="info" %}}
Please note that the libraries Mendix uses to operate Git do not support <kbd>Space</kbd> characters in Git repo URLs.
{{% /alert %}}

Now that you have a Git app on your server, you can download it to another directory or one of your team members can download it on their machine. Follow the steps below:

1. Under **Version Control > Download from Version Control Server**, select the **Private server** option and enter the URL of your repository, which contains the app you want to download. If you are not sure what URL to use, you can find this info in your Git server.
1. Enter the link to the repository in the **App repository address** and click **Connect**. Now you will have the option to change the directory where the app is downloaded to:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/download-from-version-control-server-extended.png" alt="Download from Version Control Server Extended dialog" class="no-border" >}}

1. Click **OK**. 
1. In the **Sign In** dialog box, enter your credentials:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/sign-in-dialog.png" alt="Sign In dialog" class="no-border" >}}

1. Enter username (it can be anything except empty) and use the PAT you saved earlier as the password. 

The app is downloaded and ready to be used with version control.

### Opening the Existing Git App

There are a few ways to open a Git Mendix app, as long as you have Studio Pro [Git support activated](#preparing-git-support).

#### Recent Apps List

In your **Recent Apps** list, you can click the app name and the app will open.

#### Recent Apps Menu

Under **File** > **Recent Apps**, you can select the app and open it.

#### Open App Form

The **Open App** form is accessible from two different places:

* **Open App** button on the **My Apps** tab
* Under menu **File > Open App**

In a form, there are two ways to open a Git app, by opening it from a previous checkout or by opening it locally on disk:

For the previous checkout method do the following:

1. Open from previous checkout.
2. Enable the **Private server** radio button and enter the link to the repository. 
3. Click **Connect**. 
4. If you have checked out the app at least once, you can then pick one of the existing locations on disk and the app will open (shown here with two previous checkouts):

    {{< figure src="/attachments/refguide/version-control/on-premises-git/open-app-dialog.png" alt="Open App dialog" class="no-border" >}}

For the previous local disk method do the following:

1. Select the **Locally on disk** option.
2. In a file browser dialog box, browse to the directory containing your app and double-click the *.mpr* file (or select it and click **Open**):

    {{< figure src="/attachments/refguide/version-control/on-premises-git/open-app-select-file.png" alt="Open App Select File" class="no-border" >}}

### Uploading to the Private Git Server {#upload-to-private-git-server}

Once you have an unversioned app, you can upload it to your private team server. 

{{% alert color="warning" %}}
The repository has to be completely empty (this includes the `README.md` and `.gitignore` files) and have no commmits in the history, or the upload will fail.
{{% /alert %}}

To upload your app, do the following:

1. Open the app in Studio Pro and go to **Version Control > Upload to Version Control Server**:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/upload-to-vc-menu.png" alt="Upload to Version Control Server Menu" class="no-border" >}}

2. In the **Upload to Version Control Server** dialog box, select **Private server**. 
3. Select **Git** as the private server type (if you have both **Subversion** and **Git** enabled in the **Preferences Form**). 
4. Enter the link to the repository you want to upload this app to and click **OK**:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/upload-to-vc-server.png" alt="Upload to Version Control Server dialog" class="no-border" >}}
    It might ask you to sign into the server, depending on whether you have previously signed in and choose to stay logged in.
5. You can see the upload process in the **Upload Project to Team Server** pop-up window.

The app is uploaded successfully. You can check on your private server and see that the app is now on the selected repository:

{{< figure src="/attachments/refguide/version-control/on-premises-git/project-uploaded-confirmation.png" alt="App Uploaded confirmation window" class="no-border" >}}

### Moving a Subversion App to Git

If you already have an existing versioned app (with Subversion) that you would like to upload to your Git private server instead, you can export it, then re-import it, and uploading it to your server.

{{% alert color="info" %}}
This creates an unversioned app, based on the branch you are working on in Studio Pro. This means that you will not get version history or other branches in the Git repo.

You can move the whole app, including branches and history, to the Mendix Git repository by following the instructions in [Migrate to Git](/developerportal/general/migrate-to-git/)
{{% /alert %}}

Follow the steps below:

1. Once the app is opened, go to **File > Export App Package**. 
2. In the **Export App Package** dialog box, browse to the location you would like to save the *.mpk* (Mendix Package) file, or accept the default location, a new **packages** folder in the root of the application folder. Take note of this location, as you will need it later. You can also rename the *.mpk* file (for example,*MyGitApp.mpk*) and the app will be named that way once you import it and upload it to the Git server:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/export-project-package-dialog.png" alt="Export App Package dialog" class="no-border" >}}

3. The **Progress** pop-up window appears, and once it is completed, you can close the app in **Studio Pro**:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/progress-dialog.png" alt="Progress dialog" class="no-border" >}}

4. Now you can import the package again, and from there you can choose to upload it to your Git private server. Go to **File** > **Import App Package**:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/import-project-package-menu.png" alt="Import App Package menu"   width="250"  class="no-border" >}}

5. Once the file browser dialog box is open, navigate to the location you save the *.mpk* file during the export process.
6. In the **Import App Package** dialog box, select **Private server** option in the **Where should we store your App?** section. 
7. In the **Private Server Type** option, select **Git** (if you have both **Subversion** and **Git** enabled in the **Preferences** form).  
8. Enter the link to the private repository in the address textbox and click **OK**. Remember, the repository **must be completely empty**, or **Studio Pro** will not be able to upload an app to it:

    {{< figure src="/attachments/refguide/version-control/on-premises-git/import-project-package-git-dialog.png" alt="Import Git Package menu" class="no-border" >}}

9. Click **OK**. 

After the import process is completed, your previous Subversion app will be now versioned using Git.

Note that your previous app still exists, **Studio Pro** will simply make an unversioned copy and upload it to your private Git server. So, in your **Recent Apps** list, you will still see both:

{{< figure src="/attachments/refguide/version-control/on-premises-git/recent-apps.png" alt="Recent Apps form" class="no-border" >}}

## Read More

* [Version Control Reference Guide](/refguide/version-control/)
* [Team Server](/developerportal/general/team-server/)
* [Upload to Version Control Server Reference Guide](/refguide/upload-to-version-control-dialog/)
