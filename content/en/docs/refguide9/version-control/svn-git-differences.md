---
title: "Differences Between Git and SVN"
url: /refguide9/svn-git-differences/
weight: 45
aliases:
    - /refguide/svn-git-differences	
---


## Introduction

With Studio Pro version 9.12 and above, users can choose whether to start a new app with SVN or Git version control. Git offers [several advantages](/refguide9/version-control-faq/#git-advantages) over SVN and provides a way to have a stronger and more robust collaboration with your team members. However, there are some differences in the way you commit changes and the way you collaborate, as well as some downsides when working with large repositories. This document describes the most prominent changes between Git and SVN.

For more information on how to migrate to Git, see [Migrate to Git](/developerportal/general/migrate-to-git/).

{{% alert color="info" %}}
For existing apps in Mendix 9, Mendix recommends sticking to SVN version control until planning an upgrade to Mendix 10, unless you require Git-specific capabilities.

Mendix 10 no longer supports SVN as version control system in Studio Pro. When planning to upgrade your app to Mendix 10, first migrate to Git within Mendix 9.
{{% /alert %}}

## Differences in Collaboration: Committing, Pushing, Updating (Pulling), and Merging 

SVN is a centralized version control system, whereas Git is a distributed system. When making a commit, in SVN it directly goes to the centralized server, while Git only creates a local commit and to submit your local commit(s) to the centralized server you need to *push* your changes (pushing changes is selected by default in the **Commit** dialog box). As a result, your local changes are committed faster, and you can roll back to a previous state without having to contact the version control server.

{{< figure src="/attachments/refguide9/version-control/svn-git-differences/local-repo-and-team-server.png" alt="Local Repository and Team Server" class="no-border" >}}

This also means you can fully integrate the changes from your other developers locally, without having to do the merge on the remote server. These operations are relatively fast in comparison to SVN.

For example, you are developing a feature together with another developer on the same branch. You both have the same starting point (3). When your colleague commits a change, you can choose to retrieve these changes and integrate them. To enable this, we ask developers to first commit existing changes locally (6), so the changes can be automatically merged when they are retrieved by other developers. After this you commit the merged result, and optionally push the merged result (7) to be used by your colleague. Because changes are already explicitly committed, you can always see what you changed and you cannot accidentally override your local changes when you are resolving conflicts.

{{< figure src="/attachments/refguide9/version-control/svn-git-differences/incoming-changes.png" alt="Incoming changes in Git" class="no-border" >}}

The table below outlines the main differences between SVN and Git:

| Action      | SVN                                                          | Git                                                          |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Update/Pull | Retrieves changes from the server and applies them directly on your local copy of the app. | Retrieves changes from the server. Changes can only be applied to your local copy of the app if you do not have any uncommitted changes. If you have uncommitted changes, you need to either *revert* them or *commit* them first. Note that in Git this operation is typically called *Pull* instead of *Update*. |
| Commit      | Submits changes to the server.                               | Creates a *local* commit: a set of changes with a message that you can jump back to. Changes are not submitted to the server, unless you check the **Push** checkbox. |
| Push        | N/A                                                          | Submits *all* local commits to the server. If other developers have pushed changes to the server that are not in your local app yet, you have to *update*/*pull* first. |
| Port fix    | Port fix transports the actual commit from one branch and applies it to another. You need to commit the change. | Port fix transports the actual commit from one branch and directly applies it, including author and commit text to another branch. This means you do not need to explicitly commit your change. |

## Differences in Revision Numbers

In SVN, commits are done to a central server which enforces the commit order. These commits are represented with a number that is generally sequentially increasing (for example, 1, 2, 3, 4, 5).

In Git, committing is done locally at first. Then commits are sent to other repositories and they should be uniquely identifiable. Therefore, commits in Git are represented with a SHA-1/SHA-256 hash (for example, f0e165, bb2327, 76d34e, c31247), as they can be generated in a distributed setting and still be the same on different clients with identical changes.

## Support for Fully Distributed Version Control

To support Git's distributed version control system, every user who clones a Git repository essentially creates a full copy of the entire project. This includes its entire history. 

This local history allows for complete independence, enabling users to work offline, commit changes, and explore the project's history seamlessly without the need for a constant connection to a central server.

A downside of this is that a fresh checkout (called a 'clone' in Git), will taker longer compared to SVN. Where a checkout in SVN only downloads the last revision (which might be, for example, 100MB), doing a clone in Git means downloading the entire repository (which could be 1.2GB for the same repository). 

## Proxy Support {#proxy-support}

Studio Pro communicates to Git repositories by two means: LibGit2 library or Git command line interface (Git CLI). LibGit2 provides a nice and clean repository object model that is in intensive use during local repository operations. However, it is not performant enough when it comes to communication with remote Git servers. This is when Git CLI is used and Studio Pro switches to the client while performing fetch, pull and push operations (that is why the Git for Windows package, which ships Git CLI to your computer, is an integral part of Studio Pro installation). Therefore, any operation that requires transferring data to/from remote Git repositories, uses GitCLI client.

Unfortunately, Git for Windows is not synchronized with the system proxy settings by default, which means it may be tricky to integrate them into Studio Pro seamlessly. We are trying our best to provide integration as soon as possible, but as a workaround you can configure the proxy settings directly by either overriding **http_proxy**, **https_proxy** and **all_proxy** (for more information, see [Git documentation](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy)) or by setting the proxy URL in your local **.git/config** via the following commands:

* Configure the proxy settings:

    `git config --local http.proxy [protocol://][user[:password]@]proxyhost[:port]`
* Check that the setting has changed:

    `git config --local http.proxy`

You can also use `--global` modifier for applying the changes system-wise, but it is not recommended if you are using Git not only for Mendix development.

## Interacting with Version Control Outside Studio Pro

It is possible to [set up a third-party tool to connect to the Team Server](/refguide9/version-control-faq/#third-party-tools) for both SVN and Git. However, migrating to Git requires a different tool: instead of TortoiseSVN you can use tools like TortoiseGit or GitHub Desktop.

## Read More

* [Migrate to Git](/developerportal/general/migrate-to-git/)
