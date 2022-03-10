---
title: "Work with an On-Premises Version Control Server"
url: /howto7/collaboration-requirements-management/on-premises-svn-howto/
category: "Collaboration & Requirements Management"
weight: 60
tags: ["on-premises"]
---

## 1 Introduction

When developing Mendix applications, changes to these applications are stored in a version control system. This system is called Team Server and is part of the Mendix Platform. This means that the application's files are stored in the Mendix online environment.

While this is the recommended way of working for almost all Mendix developers, you may prefer to store your application's files in a system that is controlled by your own organization.

**This how-to will teach you how to do the following:**

* Configure your Mendix apps to work with your own (on-premises) version control system

{{% alert color="info" %}}
For version control, the Mendix Modeler uses the [Subversion](https://subversion.apache.org) system (also known as SVN). This how-to will not describe how to set up an SVN server from scratch; typically, this will be taken care of by the IT department of your organization.
{{% /alert %}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have knowledge of Subversion
* Have have access to an SVN server
* You know the location of the SVN server – usually this is an address similar to an internet URL (for example, `https://svn.example.com:9876/repos/myapp`)
* You possess credentials (username and password) that give you access to the SVN server

## 3 Repositories

Subversion uses repositories for storing all the data of your version-controlled app. Each Subversion server can contain many different repositories.

For the purposes of this how-to, there are two important points to know about repositories.

Firstly, Mendix requires you to store each Mendix application in a separate repository. It is not possible to place multiple Mendix apps into a single repository.

Usually, repositories are created and maintained by the administrator of your SVN server. For more details about repositories, see [Repository Administration](http://svnbook.red-bean.com/en/1.7/svn-book.html#svn.reposadmin) in *Version Control with Subversion*.

In the following sections of this how-to, it is assumed that you have a repository available for your application.

## 4 SVN Versions

The Mendix Modeler has a (built-in) Subversion client that uses version 1.7 of the SVN working copy format. This client should be compatible with any 1.x version of the SVN server, so you could use, for example, a 1.6.x or 1.9.x SVN server as well.

{{% alert color="info" %}}

SVN clients newer than 1.7 use an updated working copy format, which means that when you use a separate SVN client (for example [TortoiseSVN](https://tortoisesvn.net/)) to work on your Mendix app, you cannot use a 1.8.x or 1.9.x (or newer) version of this client. That is because it would upgrade your working copy, and then the Mendix Modeler would not be able read it anymore.

{{% /alert %}}

## 5 Creating a New Application

Currently, there is no direct way of creating and storing a new application in your on-premises SVN server. Instead, to create a new app, please follow these steps:

1. Create a new Mendix application from either the [Developer Portal](https://sprintr.home.mendix.com/index.html) or the Mendix Desktop Modeler.<br>
    * If you create the app from the Developer Portal, open it in the Mendix Desktop Modeler to download it to your local machine <br>
    * If you create the app from the Desktop Modeler, click **Yes** when asked whether you want to enable the Team Server
2. The new app now contains a link to the location of the Mendix Team Server. To replace this with the address of your own SVN server, please create a ticket in the [Mendix Support Portal](https://support.mendix.com/hc/en-us) specifying your app and the address of your SVN server. This address must include the name of the repository you're going to use for your app (for example, `https://svn.example.com:9876/repos/myapp`).
3. **Please wait for confirmation from Mendix before continuing the process**.
4. Close all the running Mendix Modelers.
5. Open the folder in which your app is stored.
6. Delete the *.svn* and *.mendix-cache* folders (note that these folders may be hidden, in which case you'll need to enable the option in your file explorer to make them visible). By deleting these folders, any references to the Mendix Team Server are removed. Now, your app is ready to be uploaded to your own SVN server.
7. Double-click the .*mpr* file in the same folder to open the app again in the Mendix Desktop Modeler. For example, if your app is called **MyApp**, this file will have the name **MyApp.mpr**. Alternatively, you can start the Desktop Modeler, click **My Apps** > **Open App**, and browse to the abovementioned *.mpr* file to open your app.
8. When the app is opened in the Desktop Modeler, select **Project** > **More Versioning** > **Upload to Version Control Server** in the top menu.
9. In the dialog box that appears, select **Existing repository** and the name of your app (for example, **MyApp**), and then press 'OK'. The app should now upload to your on-premises SVN server.

## 7 Read More

* [Version Control](/refguide7/version-control/)
* [Team Server Reference Guide](/refguide7/team-server/)
