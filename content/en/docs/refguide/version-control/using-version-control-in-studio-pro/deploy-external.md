---
title: "Working with External Tools"
url: /refguide/version-control-external-tools/
weight: 80
description: "Describes how to work external tools to deploy packages."
---

## Introduction

Studio Pro takes care of some file management automatically. If you add or remove custom widgets, they are automatically added or removed from version control too. Some files and directories (for example, deployment and releases directories) are automatically ignored so that they are not committed to version control.

We advise you to always commit and update/pull inside Studio Pro, because, in this way, useful metadata is added to your revisions. Studio Pro has ways to recover from external updates or merges but it is best to not depend on that.

### External Tools {#external-tools}

If you are doing more advanced changes to files, like adding Java actions or resources to your app, you will have to install a separate tool on your computer and perform some operations yourself: you can use [TortoiseGit](https://tortoisegit.org/) (can be downloaded for free).

{{% alert color="info" %}}
Studio Pro adds metadata on the Mendix version of your app to each revision when you commit or create a branch. Therefore, when committing or merging using third-party tools, it may no longer be possible to deploy to Mendix Cloud. This can be fixed by making a commit using Studio Pro so that the correct metadata is present again.
{{% /alert %}}

{{% alert color="warning" %}}
Manually modifying files belonging to the  [*.mpr* storage format](/refguide/version-control/glossary/#mpr-format) such as the *.mpr* file or the *mprcontents* directory (for example, when resolving file conflicts through third-party tooling), will lead to a corrupted state. To recover from a corrupted state a previous commit will need to be restored.
{{% /alert %}}

{{% alert color="warning" %}}
Studio Pro automatically performs the necessary post-processing steps when you download a Git clone through its user interface. Using the Git command line to create a Git clone or using a clone created by a third-party tool in Studio Pro is not supported.
{{% /alert %}}

### Authenticating to Team Server {#authenticating}

When using external tools, you might be asked to authenticate separately to Team Server.

Connecting to Git is done using a personal access token (PAT). For more information on how to create a PAT, see the [Personal Access Tokens](/portal/user-settings/#pat) section of *Mendix Profile*.

To connect to Git, you need to use the following URL and credentials:

* URL: `https://git.api.mendix.com/<your AppID>.git`
* Username: your Mendix account username (alternatively, you can use the word *pat* as your username)
* Password: the PAT you created – the PAT must include the scopes `mx:modelrepository:repo:write`, `mx:modelrepository:repo:read`, and/or `mx:modelrepository:write` under *Model Repository*

### Adding and Deleting Files and Directories

If you add or delete files (or directories) using Windows Explorer, Studio Pro automatically adds or deletes these from version control too. A folder is no longer tracked if all the files in the folder are removed.

Make sure you use the **Export** feature of TortoiseGit if you are copying a directory that is already under version control in your app.

### Branching and Deploying

If you perform branching outside of Studio Pro, you will not be able to immediately deploy to Mendix Cloud. That is because Studio Pro adds metadata about the Mendix version of your app to each revision when you commit or create a branch, which is needed by the Mendix Cloud deployment. Branching outside of Studio Pro means that metadata is missing from your branch, thus your app cannot successfully be deployed.

To fix this, make a small commit on your branch in Studio Pro (for example, changing a documentation field). Studio Pro will then add the metadata that Mendix Cloud deployment requires, and you will be able to deploy your app.

### Reverting Accidental Studio Pro App Model Upgrade

When working in different apps with different Studio Pro versions, you may one day find yourself with an app model upgraded and committed to a newer Studio Pro version, while the rest of your team is not yet ready to upgrade. 

To revert this version upgrade of the app model, use the Git tool of your preference to revert the change.

### Integrating Git in a Build Pipeline

When building deployment packages in a pipeline outside the Mendix platform, you will need to retrieve a specific commit from the Git server. To avoid downloading the full repository every time you can use a clone with limited depth (*shallow clone*). With a minimal amount of data to retrieve, the operation is a lot faster and takes less toll on the version control server.

You can use the commands below to download a shallow clone. Note that they should only be used to download a single revision, as Studio Pro is not compatible with working on a shallow clone.

```text
# make a new blank repository in the current directory
git init

# add a remote
git remote add origin url://to/source/repository

# fetch a commit (or branch or tag) of interest with limited history
git fetch --depth 1 origin <sha1-of-commit-of-interest>

# reset this repository's master branch to the commit of interest
git reset --hard FETCH_HEAD
```


