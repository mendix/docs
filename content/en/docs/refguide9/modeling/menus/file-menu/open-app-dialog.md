---
title: "Open App"
url: /refguide9/open-app-dialog/
weight: 20
description: "Describes the Open App flow and the Open App dialog box"
aliases:
    - /refguide9/open-project-dialog.html
    - /refguide9/open-project-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

To open an app in Mendix Studio Pro, do one of the following:

* Select **File** > **Open App**
* Click **Open App** on the Studio Pro landing page

The **Open App** dialog box will open, where you can [select an app](#select-app) from your apps, [open an app locally](#open-locally), or [import an app package](#import-app):

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/open-app-dialog/open-app.png" alt="Open App" class="no-border" >}}

Apps can be located on the Team Server, on another SVN server, or on the local disk. When opening an app from the Team Server or another SVN server, Studio Pro will check whether you have already downloaded this app. If so, it will simply open it. If not, the app will be downloaded from the version control server first. 

## Opening an App

### Selecting an App {#select-app}

You can select an app from the list of your apps. Once you have selected an app, you can either choose a branch line that you would like to open or click **Open in Studio Pro** and the branch that is indicated in the **Current Branch** column will open:

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/open-app-dialog/select-app.png" class="no-border" >}}

### Opening App Locally {#open-locally}

For opening an app you already have on disk, click **Open App Locally** in the left sidebar and point to the app file.

### Importing App Package {#import-app}

You can also import and app package and open it. Click **Import App Package** in the left sidebar. For more information on how to import an app package, see [Import App Package](/refguide9/import-app-package-dialog/). 

## Read More

* [Import App Package](/refguide9/import-app-package-dialog/)
