---
title: "Work with SVN On-Premises Version Control Server"
url: /howto/collaboration-requirements-management/on-premises-svn-howto/
weight: 10
tags: ["on-premises", "svn", "version control"]
---

## 1 Introduction

When developing Mendix applications, changes to these applications are stored in a version control system. This system is called [Team Server](/developerportal/collaborate/team-server/) and is part of the Mendix Platform. This means that the application's files are stored in the Mendix online environment. For more information, see [Version Control](/refguide/version-control/).	

While this is the recommended way of working for almost all Mendix developers, you may prefer to store your application's files in a system that is controlled by your own organization. For version control, Mendix uses the [Subversion](https://subversion.apache.org) system (also known as SVN) and [Git](/howto/collaboration-requirements-management/on-premises-git-howto/). This how-to describes how to work with SVN version control system.	

{{% alert color="info" %}}	
This how-to will not describe how to set up an SVN server from scratch; typically, this will be taken care of by the IT department of your organization.	
{{% /alert %}}

{{% alert color="warning" %}}	
You will not be able to use Mendix Studio for collaborative development if you use an on-premises version control server. Collaborative development between Studio and Studio Pro will only work if you use the Mendix Team Server.	
{{% /alert %}}	

This how-to will teach you how to do the following:	

* Configure your Mendix apps to work with SVN (on-premises) version control system	

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have knowledge of Subversion
* Have access to an SVN server and possess credentials (username and password) that give you access to that SVN server
* Know the location of the SVN server – usually this is an address similar to an internet URL (for example, `https://svn.example.com:9876/repos/myapp`)

## 3 Repositories

Subversion uses repositories for storing all the data of your version-controlled app. Each Subversion server can contain many different repositories.

For the purposes of this how-to, there are two important points to know about repositories.

First, Mendix requires you to store each Mendix application in a separate repository. It is not possible to place multiple Mendix apps into a single repository.

Second, when uploading an app to a repository, Mendix requires the repository to be empty (except for the recommended SVN layout, as described in [Recommended Repository Layout](http://svnbook.red-bean.com/en/1.7/svn.tour.importing.html#svn.tour.importing.layout)). Specifically, this means that the repository should contain only three empty folders, called **branches**, **tags**, and **trunk**.

Usually, repositories are created and maintained by the administrator of your SVN server. For more details about repositories, see [Repository Administration](http://svnbook.red-bean.com/en/1.7/svn-book.html#svn.reposadmin).

In the following sections of this how-to, it is assumed that you have a repository available for your application.

## 4 SVN Versions

Mendix Studio Pro has a (built-in) Subversion client that uses version 1.9 of the SVN working copy format. This client should be compatible with any 1.x version of the SVN server, so you could use, for example, a 1.6.x or 1.9.x SVN server as well.

{{% alert color="warning" %}}
Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions are NOT compatible.

This means that, if you use a separate SVN client (for example [TortoiseSVN](https://tortoisesvn.net/)) to work on your Mendix app, you must always use the version which matches your app model. If you open a local model from Mendix version 7.x or 6.x with the latest version of TortoiseSVN, **you will no longer be able to open it in Mendix**.{{% /alert %}}

## 5 Creating a New App to Store in an On-Premises SVN Server

To create a new app to store in your on-premises SVN server, you must create the app from Studio Pro by following these steps:

1. Click **New App** on the **My Apps** page.
2. In the **App Settings** dialog box, click **No** for **Enable online services**.
3. In the top menu of Studio Pro, go to **Edit** > **Preferences** > **Advanced** and make sure the **Enable private version control** box is checked.
4. In the top menu, select **Version Control** > **Upload to Version Control Server**.
5. In the [Upload to Version Control Server](/refguide/upload-to-version-control-dialog/) dialog box, select **Private server**.
6. In the **App repository address** field, enter the address of your SVN server. This address must include the name of the repository you are going to use for your app (for example, `https://svn.example.com:9876/repos/myapp`).
7. Click **OK** to connect to the server.

## 6 Moving an App from Mendix Team Server to an SVN Server

To look at moving an app from Mendix Team Server to a private SVN server, we will use the scenario of creating a new app in the [Developer Portal](/developerportal/). In this case a Team Server app is created automatically.

{{% alert color="warning" %}}
For the purpose of creating an app to store in your on-premises SVN server, this is a deprecated workflow.
{{% /alert %}}

1. Click **Create App** in the [Developer Portal](https://sprintr.home.mendix.com/index.html).
2. After you have created your app, click the arrow next to **Edit App**, select **Edit in Mendix Studio Pro**, then open the app in the relevant Studio Pro version. You need to open your app in Studio Pro in order to download it to your local machine (for more information, see [Version Control](/refguide/version-control/)).
3. Your app contains a link to the location of the Mendix Team Server by default. To replace this with the address of your own SVN server, create a ticket in the [Mendix Support Portal](https://support.mendix.com/) specifying your app and the address of your SVN server. This address must include the name of the repository you are going to use for your app (for example, `https://svn.example.com:9876/repos/myapp`). This will allow Mendix Support to change the URL of your app.
4. Wait for confirmation from Mendix Support before continuing the process.
5. With all instances of Studio Pro closed, open the folder in which your app is stored locally.
6. Delete the **.svn** and **.mendix-cache** folders (note that these folders may be hidden, in which case you will need to enable the option in your file explorer to make them visible). By deleting these folders, references to the Mendix Team Server are removed. Now, your app is ready to be uploaded to your own SVN server.
7. Double-click the **.mpr** file in the app folder to open the app again in Studio Pro (for example, if your app is called **MyApp**, this file will have the name **MyApp.mpr**). Alternatively, you can start Studio Pro, click **My Apps** > **Open App**, and browse to the abovementioned local **.mpr** file to open your app.
8. When the app is opened in Studio Pro, go to the  top menu, select **Edit** > **Preferences** > **Advanced**. and make sure the **Enable private version control** box is checked.
9. In the top menu, select **Version Control** > **Upload to Version Control Server**.
10. In the [Upload to Version Control Server](/refguide/upload-to-version-control-dialog/) dialog box, select **Private server**.
11. In the **App repository address** field, enter the address of your SVN server. This address must include the name of the repository you are going to use for your app (for example, `https://svn.example.com:9876/repos/myapp`).
12. Click **OK** to connect to the server.

## 7 Read More

* [Version Control](/refguide/version-control/)
* [Team Server](/developerportal/collaborate/team-server/)
* [Upload to Version Control Server](/refguide/upload-to-version-control-dialog/)
