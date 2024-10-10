---
title: "Clone Type"
url: /refguide9/clone-type/
weight: 40
description: Describes full and partial clone types for Git. 
---

{{% alert color="info" %}}
Different clone types are available when using Git in Studio Pro version 9.24.28 and above.
{{% /alert %}}

## Introduction

The Git version control system defaults to downloading a full copy of the repository from the server. Studio Pro allows you to select a different cloning mechanism to allow you to optimize for your needs, such as working offline or working with a large repository.

## Clone Types

Currently, Studio Pro supports two different clones types. The clone type only affects the way the repository is stored on your local device and does not affect the app itself.

By default Mendix advises customers to use a full clone. This trades a slightly longer initial download for a more seamless experience while working.

If you have have accumulated a [large repository¹](/refguide/troubleshoot-repository-size/) over time, you can use a partial clone to shorten the initial download and therefore speed up development.

*¹This links to a Mendix 10 document, but it also applies to Mendix 9 apps using Git.*

### Full Clone

A full clone is the default clone type for Git, it downloads a full copy of the repository on the server. 

There are several advantages to this clone type:

* A full copy allows you to do some operations on the command line without contacting the server. However, Git operations like a `detached head` are not supported in Studio Pro, so the benefits are limited. 
* Operations like [combining changes](/refguide9/new-merge-algorithm/) can be significantly faster when working with a full clone. Even though the latest changes have to be downloaded from the server, your local repository already contains part of it, which saves time.

The disadvantage of this clone type is that downloading a full clone can take significantly longer. A 2GB repository needs to be completely downloaded and unpacked, even though you make limited use of the locally-held full history.

### Partial Clone

The term "partial clone" is used for different types of cloning. In Studio Pro, a `blobless clone` is used. When performing a blobless clone, the metadata with the full commit history is downloaded without the actual file contents.

{{% alert color="info" %}}
In this case Studio Pro can see an image was changed in multiple commits but, unlike a full clone, you cannot load an older version of the image without an internet connection.
{{% /alert %}}

There are several advantages to this clone type:

* Cloning goes faster. Only relevant data is downloaded so you can get started very quickly.
* Limited disk space usage. Your local repository will be much smaller compared to a full clone.

The disadvantage of this clone type is that you may need an additional download. For example, when [combining changes](/refguide9/new-merge-algorithm/) from an older branch, more data will have to be downloaded compared to the full clone. This means it can take slightly longer. The same applies when interacting with the history.

## Preferences

You can change the [clone type](/refguide9/preferences-dialog/#clone) for future clone operations, such as downloading an app or checking out another branch of an app you already downloaded. Changing this setting will not affect apps that you have already downloaded.

## Converting a Partial Clone to a Full Clone

Mendix Studio Pro allows you to convert a partial clone you have downloaded to a full clone. Git will be instructed to download all the missing data so you will end up with a full clone.

To convert your partial clone to a full clone, click **Help** > **Support** > **Convert to full clone...**. This option is disabled if your app is already a full clone. 

In the dialog box that opens, you can start the conversion, which is a blocking operation, meaning you cannot use Studio Pro during it. The duration of this process depends on the size of your repository, your internet connection, and your computer's performance.
