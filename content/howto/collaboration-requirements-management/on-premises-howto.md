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

The following how-to’s will guide you through the process of configuring your Mendix app projects to work with your own (on-premises) version control system:

* [How to Work with SVN On-Premises Version Control Server](on-premises-svn-howto)
* [How to Work with Git On-Premises Version Control Server](on-premises-git-howto)
