---
title: "Download File"
parent: "client-activities"
menu_order: 20
tags: ["studio pro", "download file", "client activities"]
aliases:
    - /refguide/Download+File.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert type="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

The **Download file** activity can be used to enable the browser to download a specific file. The end-user either sees a download pop-up window or the file is shown directly in the browser.

{{% image_container width="300" %}}
![Download File Example](attachments/client-activities/download-file.png)
{{% /image_container %}}

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

![Download File Properties](attachments/client-activities/download-file-properties.png)

The **Download file** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 File document

File document specifies the file to be downloaded. The file data is stored in an object of entity System.FileDocument or a specialization of this entity.

### 3.2 Show File in Browser

**Show file in browser** defines whether the file is downloaded to a location specified by the end-user or shown directly in the browser.

| Option | Description |
| --- | --- |
| True | File is downloaded to the location for temporary internet files and shown on a new page in the browser. |
| False | File is downloaded to the location specified by the end-user. |

{{% alert type="info" %}}

On mobile devices files are always shown in a browser window.

{{% /alert %}}

Many browsers implement pop-up window blockers preventing them from being opened non-interactively, such as through a microflow. For mobile devices, this means that triggering downloads from a microflow is only possible after disabling the pop-up window blocker. You could consider using a **File Manager** widget to let the user initiate the download manually.

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}