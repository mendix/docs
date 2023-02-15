---
title: "Differences between Git and SVN"
linktitle: "Differences between Git and SVN"
url: /refguide/svn-git-differences/
category: "Version Control"
weight: 45
tags: ["git", "svn", "subversion", "byo-git", "byo-svn"]
---


## Introduction

As of Mendix 9.21, Git is the default version control system in Studio Pro. Git offers [several advantages](version-control-faq/#git-advantages) over SVN, and we believe pathes a way to a stronger and more robust collabaration with your peers. Because of this, there are some difference in the way you commit changes and the way you collaborate. In this document we will walk you through the most prominent changes.

{{% alert type="info" %}}

If you still have to migrate to Git, check out our [guide](/developerportal/collaborate/migrate-to-git/).

{{% /alert %}}


## 2 Differences in Collaboration: Committing, Pushing, and Updating (Pulling)

SVN is a centralized version control system, whereas Git is a distributed system. This means that in SVN all interactions go directly to a central server, while Git has the concept of a local repository where you can make changes.

{{< figure src="/attachments/refguide/version-control/image10.png" alt="Local Repository and Team Server" >}}

This means you can fully integrate the changes from your fellow developers locally, without having to do the merge on the remote server. This means these operations will be relatively fast in comparison to SVN.

Take the following scenario. You are developing a feature together with someone else on the same branch. You both have the same starting point (3). When your colleague commits a change, you can choose to retrieve those changes and integrate them. To enable this, we ask developer to first commit existing changes locally (6), so they can be automatically merged when changes are retrieved from other developers. After this you commit the merged result, and optionally push the merged result (7) so they can be used by your colleague. Because changes are already explicitly committed, you can always see what you changed and you cannot accidentally override your local changes when you are resolving conflicts.

{{< figure src="/attachments/refguide/version-control/image11.png" alt="Incoming changes in Git" >}}

When making a commit, in SVN it directly goes to the centralized server, while Git only creates a local commit and to submit your local commit(s) to the centralized server you need to *push* your changes (pushing changes is selected by default in the **Commit** dialog box). This means your local changes are committed faster, and you can roll back to a previous state without having to contact the version control server.

| Action      | SVN                                                          | Git                                                          |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Update/Pull | Retrieves changes from the server and applies them directly on your local copy of the app. | Retrieves changes from the server. Changes can only be applied to your local copy of the app if you do not have any uncommited changes. If you have uncommited changes, you need to either *revert* them or *commit* them first. Note that in Git this operation is typically called *Pull* instead of *Update*. |
| Commit      | Submits changes to the server.                               | Creates a *local* commit: a set of changes with a message that you can jump back to. Changes are not submitted to the server, unless you check the **Push** checkbox. |
| Push        | N/a                                                          | Submits *all* local commits to the server. If other developers have pushed changes to the server that are not in your local app yet, you have to *update*/*pull* first. |

## 2 Differences in Revision Numbers

In SVN, commits are done to a central server which enforces the commit order. These commits are represented with a number that is generally sequentially increasing (e.g. 1, 2, 3, 4, 5).

In Git, committing is done locally at first. Then commits are sent to other repositories and they should be uniquely identifiable. Therefore, commits in Git are represented with a SHA-1/SHA-256 hash (e.g. f0e165, bb2327, 76d34e, c31247), as they can be generated in a distributed setting and still be the same on different clients with identical changes.

## 3 Proxy Support

It is currently not possible to use Git from behind an authenticated proxy. For more information, see the [Known Issues](/refguide/troubleshoot-git-issues/#ki) section of *Solving Known Git Issues*. If you depend on this functionality, it is sensible to postpone migration until support is realized. 

## 4 Interacting with Version Control Outside Studio Pro

It is possible to [set up a third-party tool to connect to the Team Server](/refguide/version-control-faq/#third-party-tools) for both SVN and Git. However, migrating to Git requires a different tool: instead of TortoiseSVN you can use tools like TortoiseGit or GitHub Desktop.

## 5 Read More

* [Migrate to Git](/developerportal/collaborate/migrate-to-git/)
