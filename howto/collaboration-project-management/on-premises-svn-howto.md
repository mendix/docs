---
title: "How to work with an on-premises version control server"
space: "Mendix 7 How-To's"
category: "Collaboration & Project Management"
---
# How to work with an on-premises version control server

## Introduction

When developing Mendix applications, changes to these applications are stored in a *version control system*. This system, which we call the 'Team Server', is part of the Mendix platform, which means that the application's files are stored in the Mendix online environment.

While this is the recommended way of working for almost all Mendix developers, you may prefer storing your application's files in a system that is controlled by your own organization.

This how-to describes how to configure your Mendix projects to work with your own (on-premises) version control system.

## On-premises version control server
For version control, the Mendix Modeler uses the [Subversion](https://subversion.apache.org) system (also known as SVN). This how-to will **not** describe how to set up an SVN server from scratch; it assumes that you have one already at your disposal. Typically this has been taken care of by the IT department of your organization. This means that:

* You know the location of the SVN server. Usually this is an address similar to an internet URL, for example: `https://svn.example.com:9876/repos/myapp`.
* You possess credentials (a username and a password) that give you access to the SVN server.

## Repositories
Subversion uses so-called *repositories* for storing all the data of your version-controlled project. Each Subversion server can contain many different repositories.

For the purposes of this how-to, there're two important things to know about repositories:

1. Mendix requires you to **store each Mendix application in a separate repository**. It's not possible to share a single repository with different mendix applications.
2. When uploading a project to a repository, the Mendix Modeler requires this repository to be empty, except for the recommended SVN layout as described in the [SVN manual](http://svnbook.red-bean.com/en/1.7/svn.tour.importing.html#svn.tour.importing.layout). Specifically, this means that the repository should contain only three empty folders called `branches`, `tags` and `trunk`.

Usually, repositories are created and maintained by the administrator of your SVN server. For more details about repositories see [this chapter](http://svnbook.red-bean.com/en/1.7/svn-book.html#svn.reposadmin) of the SVN manual. In the following sections of this how-to we assume that you have a repository available for your application.

## SVN versions
The Mendix Modeler has a (built-in) Subversion client that uses the 1.7 version of the SVN working copy format. This client should be compatible with any 1.x version of the SVN server, so you could use for example a 1.6.x or 1.9.x SVN server as well.

Please note though, that SVN *clients* newer than 1.7 use an updated working copy format, which means that when you use a separate SVN client (for example [TortoiseSVN](https://tortoisesvn.net/)) to work on your Mendix project, you cannot use a 1.8.x or 1.9.x (or newer) version of this client, since that would upgrade your working copy, and then the Mendix Modeler cannot read it anymore.

## Creating a new application
Currently, there's no direct way of creating and storing a new application in your on-premises SVN server. Instead, please follow these steps:

1. Create a new Mendix application from either the Mendix online portal, or from within the Mendix Modeler. In the latter case, make sure you say 'Yes' when asked whether you want to enable the Team Server. If the project was created from the online portal, open it in the Mendix Modeler to download it to your local machine.
2. The new project now contains a link to location of the Mendix Team Server. To replace this with the address of your own SVN server, please create a ticket in the Mendix support portal, specifying your project and the address of your SVN server. This address must include the name of the repository you're going to use for your app, for example: `https://svn.example.com:9876/repos/myapp`.

Now, please wait for confirmation from Mendix before continuing the process.

3. Close all running Mendix Modelers.
4. Open the folder in which your project is stored, and delete the `.svn` and `.mendix-cache` folders. Note that these folders may be hidden, in which case you'll need to enable an option in your file explorer to make them visible. By deleting these folders, any references to the Mendix Team Server are removed. Now your app is ready to be uploaded to your own SVN server.
5. Double-click the `mpr` file in the same folder to open the project again in the Mendix Modeler. For example, if your app is called `MyApp` then this file will have the name `MyApp.mpr`. Alternatively, you can start the Modeler, click the 'Open App' button and browse to the abovementioned `mpr` file to open your project.
6. When the project is opened, select the menu item 'Upload to Team Server...' from the Modeler's 'Team' menu. In the dialog that now appears, select the option 'Existing repository' and the name of your project (for example `MyApp`), and press 'OK'. The application should now upload to your on-premises SVN server.

## See also
* [How to Use Team Server and Version Control](using-team-server-_-version-control)
* [Team Server Reference Guide](/refguide/team-server)
