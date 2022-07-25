---
title: "Solve Known Git Issues"
url: /howto/collaboration-requirements-management/troubleshoot-git-issues/
description: "This document describes a list of problems and fixes for Git version control issues."
tags: ["version control", "troubleshoot", "Studio Pro", "Git"]
---

## 1 Introduction

This document describes known issues with Git version control and the ways to fix them.

## 2 Known Issues

You may encounter the following issues:

* **Proxy servers are not supported** — we do not support connecting to Git repositories from behind a proxy server yet. 
* **Getting an Oops pop-up menu when setting a name and an email for Git in the Preferences dialog box or while committing** — the problem might occur if there is no global Git config file on the PC yet. To fix this issue, you can use the Git command line client and do the following:
    - Specify the user name:
    `git config --global user.name "<Name>"`
    - Specify the email:
    `git config --global user.email "<Email>"`
    - Any of these commands will create a global Git config. Subsequent interactions via the Studio Pro interface will succeed from now on.


## 3 Troubleshooting

### 3.1 Connection Problems When Cloning the Git Repository

If you face connection problems when cloning the Git repository using the **Open App** or **Download App** dialog box, the first thing to check is whether the URL of the remote Git repository is correct. It should not be copied from the browser address bar. Most Git services have a noticeable colored **Clone** button which provides the correct URL in a pop-up window. You should use this URL with Studio Pro.


### 3.2 Customer-Facing Issues

For Studio Pro developers to be able to troubleshoot issues that the customers face with Beta Git support, Studio Pro provides a logging mechanism.


When filing a Git support issue with Mendix Support, attach the log files doing the following:

1.	Navigate to the **Help** menu > **Open Log File Directory**:

    {{< figure src="/attachments/howto/collaboration-requirements-management/on-premises-howto/on-premises-git-howto/troubleshoot-git-issues/open-log-file-directory-menu.png" alt="Download from Version Control Server dialog" >}}

2.	Copy the file called *log.txt* into your ticket. You can also attach additional *log.X.txt* files if they exist.

### 3.3 Git Properties Useful for Troubleshooting

{{% alert color="warning" %}}
The properties described below might contain personal information. We advise you to make sure that all the private information is removed before sharing it. 
{{% /alert %}}

There are properties of the Git repository that provide you with the information useful for troubleshooting different issues. Execute the following in the command line in the app’s folder:

`git status -b` — provides information on the current state of the repository

`git remote -v` — lists the remotes specified for the repository

`git config --list --show-origin --show-scope` — provides information on user's Git config

