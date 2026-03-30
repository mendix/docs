---
title: "Version Control"
url: /refguide/version-control/
description: "Gives definitions and explains the version control process."
weight: 30
no_list: false
description_list: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## Introduction

Version Control allows you to manage your app development in two ways:

* Firstly, it allows you to store ([commit](/refguide/version-control/glossary/#commit)) the current revision of your model and all its resources. You give it an identifier so that you can get that revision again and share it with other team members.
* Secondly, it allows work to take place on multiple [development lines](/refguide/version-control/glossary/#development-line) so that several different features can be worked on at once. These development lines can then be [merged](/refguide/version-control/glossary/#merge) back together so that your [main line](/refguide/version-control/glossary/#main-line) contains all the completed features that have been worked on separately.

Version control in Mendix is built on top [Git](https://git-scm.com). The concepts will be familiar to seasoned users of these version control systems (VCS). Mendix simplifies the VCS commands by building them into Studio Pro and the Mendix Portal.

## Mendix Team Server

[Mendix Team Server](/developerportal/repository/team-server/) is the Mendix-hosted environment that stores all Mendix apps. It facilitates versioning your apps by integrating them into a version control system. Mendix Studio Pro integrates with the Team Server allowing you to create and update apps, commit changes, and merge model versions with one click.

## Peer Review and Merging

Studio Pro supports peer review and merging through the version control functionalities available in Studio Pro. For more information on how to set this process up, see [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/).

Currently, Mendix does not support pull or merge requests through the Team Server for Mendix. When using third-party tools it is possible to review the following code extensions:

* code for Java and JavaScript actions
* HTML/CSS for theming

## Frequently Asked Questions

### What Version Control System Is Team Server Built On? {#which-team-server}

Mendix Team Server is based on proven technology. Initially it was based only on top of Subversion (SVN), also called Team Server SVN. The Team Server only supports storing apps using Git technology, referred to as Team Server Git. 

### How Much Storage Space Is Provided with Team Server?

Storage space is unlimited for apps connected to a commercial license. 1 GB of free storage is provided for your company account for apps not (yet) connected to a commercial license.

### What Happens with My Valuable and Confidential Data?

Mendix adheres to strict security standards and considers you the sole owner of your data. Only Mendix Cloud Infrastructure Engineers can access data and will only do so for troubleshooting. Your data is backed up for one year, and the backups are retained for one year after app deletion. You can get a backup of your data at any time by using default Git tools, or, if your app was deleted, by filing a [Mendix Support](https://support.mendix.com/) ticket.

### Can I Use the Subversion Version of the Team Server?

No, in Mendix 11, we are supporting only Git-versioned apps. You need to migrate your SVN app to Git to use Mendix 11. For more information on how to migrate, see [Migrate to Git](/developerportal/general/migrate-to-git/) in *Apps*.

### Can I Use Third-Party Tools to Connect to the Team Server? {#third-party-tools}

Yes, as the Team Server is based on a full implementation of Git. You can directly use third-party tools like GitHub Desktop. For more information on how to set this up, see the [External Tools](/refguide/version-control-external-tools/#external-tools) section in *Using Version Control in Studio Pro*. 

### Is It Possible to Connect to a Third-Party or On-Premises Version Control Server?

Yes, it is possible to connect to a third-party Git version control repository, which is often called BYO-GIT (Bring Your Own Git).

For more information about limitations and the supported Git repositories, see the [Introduction](/refguide/on-premises-git/#intro) and [Preparing Your Repository](/refguide/on-premises-git/#preparing-your-repo) sections in *Working with Git On-Premises Version Control Server*.

## Documents in This Category
