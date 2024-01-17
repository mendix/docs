---
title: "Solving Known Git Issues"
url: /refguide9/troubleshoot-git-issues/
linktitle: "Known Git Issues"
weight: 20
description: "Describes a list of problems and fixes for Git version control issues."
tags: ["version control", "troubleshoot", "Studio Pro", "Git"]
---

## 1 Introduction

This document describes known issues with Git version control and the ways to fix them.

## 2 Known Issues {#ki}

You may encounter the following issues:

* **Proxy servers are not supported** — we do not support connecting to Git repositories from behind a proxy server yet (for a workaround, see the [Proxy Support](/refguide9/svn-git-differences/#proxy-support) section in *Differences between Git and SVN*)
* **Getting an "Oops" pop-up menu when setting a name and an email for Git in the Preferences dialog box or while committing** — the problem might occur if there is no global Git config file on the PC yet. To fix this issue, you can use the Git command line client and do the following:
    * Specify the user name:
    `git config --global user.name "<Name>"`
    * Specify the email:
    `git config --global user.email "<Email>"`
    * Any of these commands will create a global Git config. Subsequent interactions via the Studio Pro interface will succeed from now on.
* **Merging branches results in no changes being applied** - When merging 2 branches, changes sometimes don't come trough.
To fix this issue please ensure the following steps are taken:
    1. Esnure user.name and user.email exist in your git config:
        * Specify the user name:
        `git config --global user.name "<Name>"`
        * Specify the email:
        `git config --global user.email "<Email>"` 
    2. Ensure the git version on you machine is 2.43.x or higher:
        * Check your instlaled git version by running the following command:
        `git version`
        * If needed install the correct version from the [git website](https://git-scm.com/download/win)
* **Getting an "The project contains changes that have not been committed yet. Please commit first before attempting to merge again. While you have not changes any files." error**  - when you feel there are no uncommitted changes.  
This happens due to line endings in CSS files not being handled properly. Thus sometimes after Revert all changes or other version control operations the css.map files show up in Changes on Disk dialog.
    To prevent the css.map be flagged as changed you can perform the following workaround:
    1. Create .gitattributes file in \theme-cache folder of your application
    2. Add the folowing content in there: 
    `* text eol=lf`
    3. Save the file. Commit and Push it.

    From now on git will restore the files with the correct line endings and this won’t be seen as a change.  

    Please note:  
    The workaround corrects the issue for future commits.
    If you have other branches that were created before the fix, you need to add the same .gitattributes file in those branches as well for it to work.

## 3 Troubleshooting

### 3.1 Connection Problems When Cloning the Git Repository

If you face connection problems when cloning the Git repository using the **Open App** or **Download App** dialog box, the first thing to check is whether the URL of the remote Git repository is correct. It should not be copied from the browser address bar. Most Git services have a noticeable colored **Clone** button which provides the correct URL in a pop-up window. You should use this URL with Studio Pro.

### 3.2 Customer-Facing Issues

For Studio Pro developers to be able to troubleshoot issues that the customers face with beta Git support, Studio Pro provides a logging mechanism.

When filing a Git support issue with Mendix Support, attach the log files doing the following:

1. Navigate to the **Help** menu > **Open Log File Directory**:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/troubleshoot-git-issues/open-log-file-directory-menu.png" alt="Download from Version Control Server dialog" >}}

2. Copy the file called *log.txt* into your ticket. You can also attach additional *log.X.txt* files if they exist.

### 3.3 Git Properties Useful for Troubleshooting

{{% alert color="warning" %}}
The properties described below might contain personal information. We advise you to make sure that all the private information is removed before sharing it. 
{{% /alert %}}

There are properties of the Git repository that provide you with the information useful for troubleshooting different issues. Execute the following in the command line in the app’s folder:

`git status -b` — provides information on the current state of the repository

`git remote -v` — lists the remotes specified for the repository

`git config --list --show-origin --show-scope` — provides information on user's Git config
