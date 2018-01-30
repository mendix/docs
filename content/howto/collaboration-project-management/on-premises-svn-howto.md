---
title: "Work with an on-premises version control server"
category: "Collaboration & Project Management"
tags: ["on-premises"]
---

## 1 Introduction

When developing Mendix applications, changes to these applications are stored in a version control system. This system is called Team Server and is part of the Mendix Platform. This means that the application's files are stored in the Mendix online environment.

While this is the recommended way of working for almost all Mendix developers, you may prefer to store your application's files in a system that is controlled by your own organization.

**This how-to will teach you how to do the following:**

* Configure your Mendix projects to work with your own (on-premises) version control system

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have knowledge of Subversion
* Have have access to an SVN server (for details, see [3 On-Premises Version Control Server](#3))

## 3 On-Premises Version Control Server<a name="3"></a>

For version control, the Mendix Modeler uses the [Subversion](https://subversion.apache.org) system (also known as SVN). This how-to will not describe how to set up an SVN server from scratch; typically, this will be taken care of by the IT department of your organization.

This how-to assumes that you have an SVN server at your disposal as well as the following:

* You know the location of the SVN server – usually this is an address similar to an internet URL (for example, `https://svn.example.com:9876/repos/myapp`)
* You possess credentials (username and password) that give you access to the SVN server

## 4 Repositories

Subversion uses repositories for storing all the data of your version-controlled project. Each Subversion server can contain many different repositories.

For the purposes of this how-to, there are two important points to know about repositories.

The first point is that Mendix requires you to store each Mendix application in a separate repository. It's not possible to share a single repository with different Mendix applications.

The second point is that, when uploading a project to a repository, the Mendix Modeler requires this repository to be empty (except for the recommended SVN layout as described in [Recommended Repository Layout](http://svnbook.red-bean.com/en/1.7/svn.tour.importing.html#svn.tour.importing.layout) in *Version Control with Subversion*). Specifically, this means that the repository should contain only three empty folders, called **branches**, **tags**, and **trunk**.

Usually, repositories are created and maintained by the administrator of your SVN server. For more details about repositories, see [Repository Administration](http://svnbook.red-bean.com/en/1.7/svn-book.html#svn.reposadmin) in *Version Control with Subversion*.

In the following sections of this how-to, it is assumed that you have a repository available for your application.

## 5 SVN Versions

The Mendix Modeler has a (built-in) Subversion client that uses version 1.7 of the SVN working copy format. This client should be compatible with any 1.x version of the SVN server, so you could use, for example, a 1.6.x or 1.9.x SVN server as well.

{{% alert type="info" %}}

SVN clients newer than 1.7 use an updated working copy format, which means that when you use a separate SVN client (for example [TortoiseSVN](https://tortoisesvn.net/)) to work on your Mendix project, you cannot use a 1.8.x or 1.9.x (or newer) version of this client. That is because it would upgrade your working copy, and then the Mendix Modeler would not be able read it anymore.

{{% /alert %}}

## 6 Creating a New Application

Currently, there's no direct way of creating and storing a new application in your on-premises SVN server. Instead, to create a new app, please follow these steps:

1. Create a new Mendix application from either the [Mendix Portal](https://sprintr.home.mendix.com/index.html) or the Mendix Desktop Modeler.<br>
    * If you create the app from the Mendix Portal, open it in the Mendix Desktop Modeler to download it to your local machine (for more information, see [Syncing the Web Modeler with the Desktop Modeler](/refguide/desktop-webmodeler)<br>
    * If you create the app from the Desktop Modeler, click **Yes** when asked whether you want to enable the Team Server
2. The new project now contains a link to the location of the Mendix Team Server. To replace this with the address of your own SVN server, please create a ticket in the [Mendix Support Portal](https://support.mendix.com/hc/en-us) specifying your project and the address of your SVN server. This address must include the name of the repository you're going to use for your app (for example, `https://svn.example.com:9876/repos/myapp`).
3. Please wait for confirmation from Mendix before continuing the process.
4. Close all the running Mendix Modelers.
5. Open the folder in which your project is stored.
6. Delete the *.svn* and *.mendix-cache* folders (note that these folders may be hidden, in which case you'll need to enable the option in your file explorer to make them visible). By deleting these folders, any references to the Mendix Team Server are removed. Now, your app is ready to be uploaded to your own SVN server.
7. Double-click the .*mpr* file in the same folder to open the project again in the Mendix Desktop Modeler. For example, if your app is called **MyApp**, this file will have the name **MyApp.mpr**. Alternatively, you can start the Desktop Modeler, click **My Apps** > **Open App**, and browse to the abovementioned *.mpr* file to open your project.
7. When the project is opened in the Desktop Modeler, select **Team** > **Upload to Team Server...** in the top menu.
8. In the dialog box that appears, select **Existing repository** and the name of your project (for example, **MyApp**), and then press 'OK'. The app should now upload to your on-premises SVN server.

## 7 Related Content

* [How to Use Team Server and Version Control](using-team-server-_-version-control)
* [Team Server Reference Guide](/refguide/team-server)
