---
title: "Preferences"
parent: "dialogs"
tags: ["studio pro"]
---

## 1 Introduction

This dialog box contains Studio Pro-wide user-specific settings.

## 2 General Tab

### 2.1 Interface

#### 2.1.1 Keep Active Document Selected in the Project Explorer

When enabled, **Project Explorer** automatically highlights the document that is currently active. When this property is disabled, the selection in the **Project Explorer** remains unchanged when the active document changes.

### 2.2 Error List

#### 2.2.1 Auto-Check Delay

The **Auto-check delay** is the number of milliseconds that Studio Pro waits after a change, before starting the consistency checks. Increase this setting for large projects if Studio Pro responses slowly after changes.

### 2.3 Deployment

#### 2.3.1 JDK directory

This is the directory in which the Java Development Kit (JDK) is located on the computer on which you deploy the application. Usually, the correct directory is located automatically.

The JDK is necessary to run Mendix applications, because the Mendix Runtime is written in Java.

#### 2.3.2 Enable Run Optimizations

Enable this setting to increase the speed at which a running application is updated after changes have been made in Studio Pro. When only pages, layouts or snippets have been changed, an entire restart of the application is skipped to decrease deployment time. Also, no Java compilation is performed when no relevant files have changed.

## 3 Model Tab

### 3.1 When Prompted by a Widget to Automatically Fill Its Contents, Select 'Yes' by Default

This setting defines the default response to the question whether to automatically fill the contents of a data widget. This question is asked, for example, when dragging an Entity onto a Data View widget. When enabled, the pre-selected answer is **yes**; otherwise, it is **no**.

## 4 Advanced Tab

### 4.1 File Comparison

#### 4.1.1 Executable

This is the path and name of the program that is used to view the details of file changes in the [commit dialog box](commit-dialog).

#### 4.1.2 Argument Pattern

This is the pattern from which the arguments are derived that are passed to the file comparison program. The following two placeholders can be used in this pattern:

* `{0}` – this is replaced with the name of the original file before the arguments are passed to the file comparison program
* `{1}` – this is replaced with the name of the changed file before the arguments are passed to the file comparison program

### 4.2 Version Control

#### 4.2.1 Enable Private Version Control {#enable}

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/develop/team-server), but in another Subversion server to which you have access. This will allow you to specify the location of the app on the Subversion server when opening, downloading, or uploading the app.

### 4.3 Proxy Server

Sometimes the computer running Studio Pro cannot access the internet directly, but has to connect to a proxy server that requires authentication. If this is the case, then these settings can be used to specify the user name and password to connect to the proxy server.

## 5 New Features Tab {#new-features}

### 5.1 Project Explorer

#### 5.1.1 New Version of the Project Explorer

Select this option when you want to enable the new version of the [Project Explorer](project-explorer). Should you find any issues in the new version, you can switch back to the old version by clearing this check box.

{{% alert type="info" %}}
This option requires a restart.
{{% /alert %}}

### 5.2 Toolbox

#### 5.2.1 New Version of the Toolbox

Select this option when you want to enable the new version of the [Toolbox](/refguide/view-menu#toolbox). Should you find any issues in the new version, you can switch back to the old version by clearing this check box.

{{% alert type="info" %}}
This option requires a restart.
{{% /alert %}}

### 5.3 Diffing and Merging

#### 5.3.1 New Version of the Changes Pane {#new-changes}

Select this option when you want to enable the new version of the [Changes](changes-pane) pane. Should you find any issues in the new version, you can switch back to the old version by clearing this check box.

{{% alert type="info" %}}
This option requires a restart.
{{% /alert %}}

## 6 Read More

* [Upload to Version Control Server](upload-to-version-control-dialog)
* [How to Work with an On-Premises Version Control Server](/howto/collaboration-requirements-management/on-premises-svn-howto)
