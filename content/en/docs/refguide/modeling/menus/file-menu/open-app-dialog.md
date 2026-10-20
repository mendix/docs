---
title: "Open App"
url: /refguide/open-app-dialog/
weight: 20
description: "Describes how to open an app in Studio Pro using the Open App dialog box."
aliases:
    - /refguide/open-project-dialog.html
    - /refguide/open-project-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

To open an app in Mendix Studio Pro, do one of the following:

* Select **File** > **Open App**
* Click **Open App** on the Studio Pro landing page

The **Open App** dialog box opens. You can [select an app](#select-app) from your apps, [open an app locally](#open-locally), [open an app from a private Git repository](#open-private), or [import an app package](#import-app):

{{< figure src="/attachments/refguide/modeling/menus/file-menu/open-app-dialog/open-app.png" alt="Open App dialog box" class="no-border" width="700" >}}

Apps can be located on the Team Server, on another Git server, or on the local disk. When you open an app from the Team Server or another Git server, Studio Pro checks whether you have already downloaded it. If so, Studio Pro opens it. If not, Studio Pro downloads the app from the version control server first. 

## Opening an App

### Selecting an App {#select-app}

You can select an app from the list of your apps. After you select an app, you can choose a [branch line](/refguide/version-control/glossary/#branches) to open or click **Open in Studio Pro**. When you click **Open in Studio Pro**, Studio Pro opens the branch indicated in the **Current Branch** column.

{{< figure src="/attachments/refguide/modeling/menus/file-menu/open-app-dialog/select-app.png" alt="Select App screen showing list of apps with current branch column" class="no-border" width="700" >}}

### Opening an App Locally {#open-locally}

To open an app you already have on disk, click **Open App Locally** in the left sidebar and point to the app file.

### Opening a Private App {#open-private}

To open an app you already have in a [Git On-Premises Version Control Server](/refguide/on-premises-git/), click **Open Private App** in the left sidebar. Enter the **App repository address**, credentials for the repository, choose the **Development line** (branch), and indicate where you want to store it on the disk.

### Importing an App Package {#import-app}

You can also import an app package and open it. Click **Import App Package** in the left sidebar. For more information, see [Import App Package](/refguide/import-app-package-dialog/).

### Preferences

Clicking **Preferences** opens a dialog box with a subset of the preferences you can set in [Preferences](/refguide/preferences-dialog/). The preferences you can change are as follows:

* Studio Pro Theme
* Default Page Editor
* Rendering
* [Clone type](/refguide/preferences-dialog/#clone)

### Opening Studio Pro

You can open the full Studio Pro IDE directly by clicking **Open Studio Pro** without selecting or creating an app. This gives you immediate access to development tools such as the Log Directory and the **Preferences** dialog box.

## Read More

* [Import App Package](/refguide/import-app-package-dialog/)
