---
title: "Open App"
url: /refguide/open-app-dialog/
weight: 20
description: "Describes the Open App flow and the Open App dialog box"
aliases:
    - /refguide/open-project-dialog.html
    - /refguide/open-project-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

To open an app in Mendix Studio Pro, do one of the following:

* Select **File** > **Open App**
* Click **Open App** on the Studio Pro landing page

The **Open App** dialog box will open, where you can [select an app](#select-app) from your apps, [open an app locally](#open-locally),[open an app from a private Git repository](#open-private) or [import an app package](#import-app):

{{< figure src="/attachments/refguide/modeling/menus/file-menu/open-app-dialog/open-app.png" alt="Open App" class="no-border" width="700" >}}

Apps can be located on the Team Server, on another Git server, or on the local disk. When opening an app from the Team Server or another Git server, Studio Pro will check whether you have already downloaded this app. If so, it will simply open it. If not, the app will be downloaded from the version control server first. 

## Opening an App

### Selecting an App {#select-app}

You can select an app from the list of your apps. Once you have selected an app, you can either choose a [branch line](/refguide/version-control/#branches) that you would like to open or click **Open in Studio Pro** and the branch that is indicated in the **Current Branch** column will open:

{{< figure src="/attachments/refguide/modeling/menus/file-menu/open-app-dialog/select-app.png" class="no-border" width="700" >}}

### Opening App Locally {#open-locally}

For opening an app you already have on disk, click **Open App Locally** in the left sidebar and point to the app file.

### Opening a Private App {#open-private}

For opening an app you already have in a [Git On-Premises Version Control Server](/refguide/on-premises-git/), click **Open Private App** in the left sidebar. You will need to enter the **App repository address**, credentials for the repository, choose the **Development line** (branch) and indicate where you want to store it on the disk.

### Importing App Package {#import-app}

You can also import an app package and open it. Click **Import App Package** in the left sidebar. For more information on how to import an app package, see [Import App Package](/refguide/import-app-package-dialog/).

### Preferences

Clicking **Preferences** opens a dialog box with a subset of the preferences you can set in [Preferences](/refguide/preferences-dialog/). The preferences you can change are as follows:

* Studio Pro Theme
* Default Page Editor
* Rendering
* [Clone type](/refguide/preferences-dialog/#clone)

## Read More

* [Import App Package](/refguide/import-app-package-dialog/)
