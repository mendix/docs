---
title: "Clone type"
url: /refguide/clone-type/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
Different clone types were introduced in Mendix version 10.12.
{{% /alert %}}

## 1 Introduction

The Git version control system defaults to downloading a full copy of the repository on the server. Studio Pro allows you to select a different mechanism for cloning to optimize for your needs, such as working offline, or working with a large repository.

## 2 Clone types

Currently Studio Pro supports two different clones types. This only affects how the repository is stored on your local device, and does not affect the app itself whatsoever.

By default we advise customers to use a full clone, with a slightly longer initial download as a trade-off to a more seamless experience while working. For customers that have accumulated a [large repository](/refguide/troubleshoot-repository-size/) over time, using a partial clone can relieve the pressure of initial download and therefore speed up development.

### 2.1 Full clone

A full clone is the default behavior for Git. This downloads a full copy of the repository on the server. 

**Advantages:**
* On the commandline a full copy allows you to do some operations without contacting the server. As Git operations like a 'detached head' are not supported in Studio Pro, the benefits are limited. 
* Operations like merging can be significantly faster when working with a full clone. Even though the latest changes still have to be downloaded from the server, your local repository already contains a part of it, which saves time.

**Disadvantages:**
* Downloading a full clone can take significantly longer. A 2GB repository would need to be completely downloaded and unpacked, even though the use of having the full history locally is very limited.

### 2.2 Partial clone

The terminology 'partial clone' is used for various different types of cloning. In Studio Pro we specifically use a 'blobless clone'. When downloading the metadata of the full commit history will be downloaded, without the contents itself. 

{{% alert color="info" %}}
In this case Studio Pro can see an image was changed in multiple commits, but you can't load an older version of the image without an internet connection, which is possible with a full clone.
{{% /alert %}}

**Advantages:**
* Fast clone experience: as only relevant data is downloaded you can get started very quickly.
* Limited disk space usage: your local repository will be much smaller compared to a full clone.

**Disadvantages:**
* Extra download moments: when conducting a merge with an older branch, more data will have to be downloaded compared to the full clone, which can take slightly longer. The same applies when interacting with your history.

## 3 Preferences

You can change the [Clone type](/refguide/preferences-dialog/#clone) for future clone operations, such as downloading an app or checking out another branch of an app you already downloaded. Changing this setting will not affect apps that you have already downloaded.

You can also change this preference from the App launcher before opening an app, by selecting `Preferences` on the left.

## 4 Changing clone type

Mendix Studio Pro allows you to convert a partial clone you have downloaded to a full clone. Under the hood, Git will be instructed to download all the missing data so you will end up with a full clone.

To convert your partial clone to a full clone, navigate to `Help -> Support -> Convert to full clone...`. This option is disabled if your project is already a full clone. 

From the dialog that opens you can start the conversion, which is a blocking operation, meaning you can't use Studio Pro in the meantime. The duration of this process depends on the size of your repository, your internet connection, and your computer's performance.
