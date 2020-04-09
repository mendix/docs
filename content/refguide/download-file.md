---
title: "Download File"
parent: "client-activities"
menu_order: 2
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert type="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

The download-file action can be used to enable the browser to download a specific file. The user gets a download popup or the file is shown directly in the browser.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 File document

Input file document defines the file to be downloaded. The information of the file is stored in an object of entity System.FileDocument or a specialization.

## 3 Action Properties

### 3.1 Show File in Browser

Show file in browser defines whether the file is downloaded to a location specified by the user or shown directly in the browser.

| Option | Description |
| --- | --- |
| True | File is downloaded to the location for temporary internet files and shown on a new page in the browser. |
| False | File is downloaded to the location specified by the user. |

{{% alert type="info" %}}

On mobile devices files are always shown in a browser window.

{{% /alert %}}

Many browsers implement popup blockers preventing windows to be opened noninteractively, such as through a Microflow. For mobile devices this means that triggering downloads from a Microflow is only possible after disabling the popup blocker. You could consider using a FileManager widget to let the user initiate the download manually.
