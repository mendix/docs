---
title: "Work with On-Premises Version Control Server"
category: "Collaboration"
menu_order: 60
tags: ["on-premises"]
---

## 1 Introduction

When developing Mendix applications, changes to these applications are stored in a version control system. This system is called [Team Server](/developerportal/develop/team-server) and is part of the Mendix Platform. This means that the application's files are stored in the Mendix online environment. For more information, see [Version Control](/refguide/version-control).

While this is the recommended way of working for almost all Mendix developers, you may prefer to store your application's files in a system that is controlled by your own organization.

{{% alert type="warning" %}}
You will not be able to use Mendix Studio for collaborative development if you use an on-premises version control server. Collaborative development between Studio and Studio Pro will only work if you use the Mendix Team Server.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Configure your Mendix app projects to work with your own (on-premises) version control system

{{% alert type="info" %}}
For version control, Mendix uses both the [Subversion](https://subversion.apache.org) system (also known as SVN) and [Git](https://git-scm.com). This how-to will not describe how to set up a version control server from scratch; typically, this will be taken care of by the IT department of your organization.
{{% /alert %}}

Here you can find the relevant information on how to work with [SVN](./on-premises-svn-howto) or [Git](./on-premises-git-howto) on-premises version control server. 

