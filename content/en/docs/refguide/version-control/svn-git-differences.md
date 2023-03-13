---
title: "Migrating from SVN to Git: Steps After Migration and Process Differences"
linktitle: "Migrating from SVN to Git"
url: /refguide/svn-git-differences/
category: "Version Control"
weight: 45
tags: ["git", "svn", "subversion", "byo-git", "byo-svn"]
---

## 1 Introduction

Your team's Scrum Master can migrate your app from SVN to Git version control system. After migration is completed, there are [certain steps](#after-migration) you need to take to proceed working on this app. There are also process differences between SVN and Git that are useful to note when you start working in Git. 

{{% alert type="info" %}}

There are no changes in the process for Studio users.

{{% /alert %}}

## 2 Checking App Out after Migration {#after-migration}

After migration, existing local copies are no longer linked to a working version control system. To be able to work on your app and store your changes in the version control system, you need to check out (re-download) the app from Team Server. Do the following:

1. Open Studio Pro, select the app that was migrated to Git (you can identify it by a Git icon), and click **Open** in Studio Pro to download the Git version of your app. Once this is completed you can make changes and store them in version control system.

2. Remove previous local copies of the app to avoid working on the wrong app version.

## 3 Differences in Collaboration: Committing, Pushing, Updating (Pulling), and Merging 

SVN is a centralized version control system, whereas Git is a distributed system. This means that in SVN all interactions go directly to a central server, while Git has the concept of a local repository where you can make changes.

In SVN, it is possible to retrieve changes and apply them directly on uncommitted changes. In Git, however, conflict resolution can only be done on committed changes. This means you have to commit locally before being able to retrieve changes from other developers. The advantage is that you can always see what you changed and you cannot accidentally override your local changes when you are resolving conflicts.

When making a commit, in SVN it directly goes to the centralized server, while Git only creates a local commit and to submit your local commit(s) to the centralized server you need to *push* your changes (pushing changes is selected by default in the **Commit** dialog box).

| Action      | SVN                                                          | Git                                                          |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Update/Pull | Retrieves changes from the server and applies them directly on your local copy of the app. | Retrieves changes from the server. Changes can only be applied to your local copy of the app if you do not have any uncommited changes. If you have uncommited changes, you need to either *revert* them or *commit* them first. Note that in Git this operation is typically called *Pull* instead of *Update*. |
| Commit      | Submits changes to the server.                               | Creates a *local* commit: a set of changes with a message that you can jump back to. Changes are not submitted to the server, unless you check the **Push** checkbox. |
| Push        | N/a                                                          | Submits *all* local commits to the server. If other developers have pushed changes to the server that are not in your local app yet, you have to *update*/*push* first. |
| Port fix    | Port fix transports the actual commit from one branch and applies it to another. You need to commit the change. | Port fix transports the actual commit from one branch and directly applies it, including author and commit text to another branch. This means you do not need to explicitly commit your change. |

## 4 Differences in Revision Numbers

In SVN, commits are done to a central server which enforces the commit order. These commits are represented with a number that is generally sequentially increasing (e.g. 1, 2, 3, 4, 5).

In Git, committing is done locally at first. Then commits are sent to other repositories and they should be uniquely identifiable. Therefore, commits in Git are represented with a SHA-1/SHA-256 hash (e.g. f0e165, bb2327, 76d34e, c31247), as they can be generated in a distributed setting and still be the same on different clients with identical changes.

## 5 Proxy Support {#proxy-support}

Studio Pro communicates to Git repositories by two means: LibGit2 library or Git command line interface (Git CLI). LibGit2 provides a nice and clean repository object model that is in intensive use during local repository operations. However, it is not performant enough when it comes to communication with remove Git servers. This is when Git CLI is used and Studio Pro switches to the client while performing fetch, pull and push operations (that is why the Git for Windows package, which ships Git CLI to your computer, is an integral part of Studio Pro installation). Therefore, any operation that requires transferring data to/from remote Git repositories, uses GitCLI client.

Unfortunately, Git for Windows is not synchronized with the system proxy settings by default, which means it may be tricky to integrate them into Studio Pro seamlessly. We are trying our best to provide integration as soon as possible, but as a workaround you can configure the proxy settings directly by either overriding **http_proxy**, **https_proxy** and **all_proxy** (for more information, see [Git documentation] (https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy) or by setting the proxy URL in your local **.git/config** via the folowwing commands:

* Configure the proxy settings:

    `git config --local http.proxy [protocol://][user[:password]@]proxyhost[:port]`
* Check that the setting has changed:

    `git config --local http.proxy`

You can also use `--global` modifier for applying the changes system-wise, but it is not recommended if you are using Git not only for Mendix development.

## 6 Interacting with Version Control Outside Studio Pro

It is possible to [set up a third-party tool to connect to the Team Server](/refguide/version-control-faq/#third-party-tools) for both SVN and Git. However, migrating to Git requires a different tool: instead of TortoiseSVN you can use tools like TortoiseGit or GitHub Desktop.

## 7 Read More

* [Migrate to Git](/developerportal/collaborate/migrate-to-git/)
