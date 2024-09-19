---
title: "Clone Type"
url: /refguide/clone-type/
weight: 40
description: Describes full and partial clone types for Git. 
---

{{% alert color="info" %}}
Different clone types are available in Studio Pro version 10.12.0 and above.
{{% /alert %}}

## Introduction

The Git version control system defaults to downloading a full copy of the repository on the server. Studio Pro allows you to select a different mechanism for cloning to optimize for your needs, such as working offline or working with a large repository.

## Clone Types

Currently Studio Pro supports two different clones types. Different types only affect the way the repository is stored on your local device and does not affect the app itself.

By default Mendix advises customers to use a full clone, with a slightly longer initial download as a trade-off to a more seamless experience while working. For customers that have accumulated a [large repository](/refguide/troubleshoot-repository-size/) over time, using a partial clone can relieve the pressure of initial download and therefore speed up development.

### Full Clone

A full clone is the default clone type for Git, it downloads a full copy of the repository on the server. 

There are several advantages to this clone type:

* A full copy allows you to do some operations on the command line without contacting the server. As Git operations like a `detached head` are not supported in Studio Pro, the benefits are limited. 
* Operations like [combining changes](/refguide/merge-algorithm/) can be significantly faster when working with a full clone. Even though the latest changes still have to be downloaded from the server, your local repository already contains a part of it, which saves time.

The disadvantage of this close type is that downloading a full clone can take significantly longer. A 2GB repository needs to be completely downloaded and unpacked, even though the usage of the full history locally is very limited.

### Partial Clone

The term "partial clone" is used for different types of cloning. In Studio Pro, a `blobless clone` is used. When performing a blobless clone, the metadata with the full commit history is downloaded without the actual file contents.

{{% alert color="info" %}}
In this case Studio Pro can see an image was changed in multiple commits, but you cannot load an older version of the image without an internet connection, which is possible with a full clone.
{{% /alert %}}

There are several advantages to this clone type:

* Cloning goes faster: as only relevant data is downloaded you can get started very quickly.
* Limited disk space usage: your local repository will be much smaller compared to a full clone.

The disadvantage of this close type is that additional download may be needed: when [combining changes](/refguide/merge-algorithm/) from an older branch, more data will have to be downloaded compared to the full clone, which can take slightly longer. The same applies when interacting with the history.

## Preferences

You can change the [clone type](/refguide/preferences-dialog/#clone) for future clone operations, such as downloading an app or checking out another branch of an app you already downloaded. Changing this setting will not affect apps that you have already downloaded.

You can also change this preference from the **Open App** dialog box selecting **Preferences** on the left.

## Changing Clone Type

Mendix Studio Pro allows you to convert a partial clone you have downloaded to a full clone. Git will be instructed to download all the missing data so you will end up with a full clone.

To convert your partial clone to a full clone, navigate to **Help** > **Support** > **Convert to full clone...**. This option is disabled if your app is already a full clone. 

In the dialog box that opens, you can start the conversion, which is a blocking operation, meaning you cannot use Studio Pro during it. The duration of this process depends on the size of your repository, your internet connection, and your computer's performance.
