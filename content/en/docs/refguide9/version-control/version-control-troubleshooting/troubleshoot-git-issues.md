---
title: "Solving Git Issues"
url: /refguide9/troubleshoot-git-issues/
weight: 20
description: "Describes a list of problems and fixes for Git version control issues."
tags: ["version control", "troubleshoot", "Studio Pro", "Git"]
---

## 1 Introduction

This document describes known issues with Git version control and the ways to fix them.

## 2 Troubleshooting

### 2.1 Getting an `The project contains changes that have not been committed yet. Please commit first before attempting to merge again. While you have not changes any files.` Error {#css-error}

You may get `The project contains changes that have not been committed yet. Please commit first before attempting to merge again. While you have not changes any files.` error when you feel there are no uncommitted changes. 

This happens due to line endings in CSS files not being handled properly. Thus, sometimes after reverting all changes or applying other version control operations the css.map files show up in the **Changes on Disk** dialog box.
To prevent the css.map be flagged as changed you can perform the following workaround:

1. Create `.gitattributes` file in **\theme-cache** folder of your application (if you have a Windows machine, make sure that a .txt extension is **not** applied by default). 
2. Add the following content to the file: 
   `* text eol=lf`
3. Save the file, and commit and push your changes.

From now, on Git will restore the files with the correct line endings and this will not be seen as a change.  

{{% alert color="info" %}}

The workaround corrects the issue for future commits. If you have other branches that were created before the fix, you need to add the same `.gitattributes` file in those branches as well.

{{% /alert %}}

### 2.2 Proxy Servers Are Not Supported

Studio Pro communicates to Git repositories by two means: LibGit2 library or Git command line interface (Git CLI). LibGit2 provides a nice and clean repository object model that is in intensive use during local repository operations. However, it is not performant enough when it comes to communication with remote Git servers. This is when Git CLI is used and Studio Pro switches to the client while performing fetch, pull and push operations (that is why the Git for Windows package, which ships Git CLI to your computer, is an integral part of Studio Pro installation). Therefore, any operation that requires transferring data to/from remote Git repositories, uses GitCLI client.

Unfortunately, Git for Windows is not synchronized with the system proxy settings by default, which means it may be tricky to integrate them into Studio Pro seamlessly. We are trying our best to provide integration as soon as possible, but as a workaround you can configure the proxy settings directly by either overriding **http_proxy**, **https_proxy** and **all_proxy** (for more information, see [Git documentation] (https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy)) or by setting the proxy URL in your local **.git/config** via the following commands:

* Configure the proxy settings:

  `git config --local http.proxy [protocol://][user[:password]@]proxyhost[:port]`

* Check that the setting has changed:

  `git config --local http.proxy`

You can also use `--global` modifier for applying the changes system-wise, but it is not recommended if you are using Git not only for Mendix development.

### 2.3 Connection Problems When Cloning the Git Repository

If you face connection problems when cloning the Git repository using the **Open App** or **Download App** dialog box, the first thing to check is whether the URL of the remote Git repository is correct. It should not be copied from the browser address bar. Most Git services have a noticeable colored **Clone** button which provides the correct URL in a pop-up window. You should use this URL with Studio Pro.

### 2.4 Customer-Facing Issues

For Studio Pro developers to be able to troubleshoot issues that the customers face with beta Git support, Studio Pro provides a logging mechanism.

When filing a Git support issue with Mendix Support, attach the log files doing the following:

1. Navigate to the **Help** menu > **Open Log File Directory**:

    {{< figure src="/attachments/refguide9/version-control/on-premises-git/troubleshoot-git-issues/open-log-file-directory-menu.png" alt="Download from Version Control Server dialog" >}}

2. Copy the file called *log.txt* into your ticket. You can also attach additional *log.X.txt* files if they exist.

### 2.5 Git Properties Useful for Troubleshooting

{{% alert color="warning" %}}
The properties described below might contain personal information. We advise you to make sure that all the private information is removed before sharing it. 
{{% /alert %}}

There are properties of the Git repository that provide you with the information useful for troubleshooting different issues. Execute the following in the command line in the app’s folder:

`git status -b` — provides information on the current state of the repository

`git remote -v` — lists the remotes specified for the repository

`git config --list --show-origin --show-scope` — provides information on user's Git config

### 2.6 Other Issues

You may encounter the following issues:

* **Proxy servers are not supported** — we do not support connecting to Git repositories from behind a proxy server yet (for a workaround, see the [Proxy Support](/refguide9/svn-git-differences/#proxy-support) section in *Differences between Git and SVN*)
* **Getting an "Oops" pop-up menu when setting a name and an email for Git in the Preferences dialog box or while committing** — the problem might occur if there is no global Git config file on the PC yet. To fix this issue, you can use the Git command line client and do the following:
  * Specify the user name:
    `git config --global user.name "<Name>"`
  * Specify the email:
    `git config --global user.email "<Email>"`
  * Any of these commands will create a global Git config. Subsequent interactions via the Studio Pro interface will succeed from now on.

 
