---
title: "Preferences"
parent: "edit-menu"
menu_order: 50
tags: ["studio pro", "preferences", "settings", "edit menu"]
---

## 1 Introduction

The **Preferences** option in the menu opens a dialog box where you can set user-specific preferences which apply to the whole of Studio Pro:

![Preferences](attachments/preferences-dialog/preferences.jpg)

## 2 General Tab

### 2.1 Interface

#### 2.1.1 Keep Active Document Selected in App Explorer

When enabled, **App Explorer** automatically highlights the document that is currently active. When this property is disabled, the selection in **App Explorer** remains unchanged when the active document changes.

### 2.2 Mendix Assist

#### 2.2.1 Logic Bot

The **Logic Bot** tab contains the following settings:

* **Enable MxAssist Logic Bot** – when enabled, [MxAssist Logic Bot](mx-assist-logic-bot) is activated and can give you suggestions for microflow activities. You can also switch MxAssist Logic Bot on and off in the top right corner of the microflow editor.
* **Show Suggestions for System Variables** – when enabled, MxAssist Logic Bot will include system objects in its suggestions (for example, it can suggest that you change system objects like currentUser or currentSession).

#### 2.2.2 Performance Bot

The **Performance Bot** tab contains the **Show recommendation in editors** setting. When enabled, [MxAssist Performance Bot](mx-assist-performance-bot) highlights elements that contain performance issues in visual editors. 

### 2.3 Error List

#### 2.3.1 Auto-Check Delay

The **Auto-check delay** is the number of milliseconds that Studio Pro waits after a change, before starting the consistency checks. Increase this setting for large apps if Studio Pro responses slowly after changes.

#### 2.3.2 Highlight Shown Errors and Warnings in the Editor

When **Highlight shown errors and warnings in the editor** is checked, the errors and warnings which are currently shown in the Error List (as determined by the **Errors** and **Warnings** toggle buttons and the suppression rules) will be highlighted on the affected elements in the editor.

### 2.4 Deployment

#### 2.4.1 JDK directory

This is the directory in which the Java Development Kit (JDK) is located on the computer on which you deploy the application. Usually, the correct directory is located automatically.

The JDK is necessary to run Mendix applications, because the Mendix Runtime is written in Java.

#### 2.4.2 Enable Run Optimizations

Enable this setting to increase the speed at which a running application is updated after changes have been made in Studio Pro. When only pages, layouts or snippets have been changed, an entire restart of the application is skipped to decrease deployment time. Also, no Java compilation is performed when no relevant files have changed.

## 3 Model Tab

### 3.1 When Prompted by a Widget to Automatically Fill Its Contents, Select 'Yes' by Default

This setting defines the default response to the question whether to automatically fill the contents of a data widget. This question is asked, for example, when dragging an Entity onto a Data View widget. When enabled, the pre-selected answer is **yes**; otherwise, it is **no**.

## 4 Version Control Tab

### 4.1 File Comparison

#### 4.1.1 Executable

This is the path and name of the program that is used to view the details of file changes in the [commit dialog box](commit-dialog).

#### 4.1.2 Argument Pattern

This is the pattern from which the arguments are derived that are passed to the file comparison program. The following two placeholders can be used in this pattern:

* `{0}` – this is replaced with the name of the original file before the arguments are passed to the file comparison program
* `{1}` – this is replaced with the name of the changed file before the arguments are passed to the file comparison program

### 4.2 Enable Private Version Control with Subversion{#enable}

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/collaborate/team-server), but in another Subversion server to which you have access. This will allow you to specify the location of the app on the Subversion server when opening, downloading, or uploading the app.

### 4.3 Enable Private Version Control with Git

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/collaborate/team-server), but in a private Git server to which you have access. This will allow you to specify the location of the app on the Git server when opening, downloading, or uploading the app. In this section, you also need to specify name and email values that will be used to identify your commits with Git.

## 5 Advanced Tab

### 5.1 Proxy Server

Sometimes the computer running Studio Pro cannot access the internet directly, but has to connect to a proxy server that requires authentication. If this is the case, then these settings can be used to specify the user name and password to connect to the proxy server.

## 6 New Features Tab {#new-features}

The **New features** tab allows you to turn new features on and off. These are features which are being worked on but are either not yet developed sufficiently to remove the previous version, or which are currently optional.

{{% alert type="info" %}}
You need to restart Studio Pro for changes to these settings to take effect.
{{% /alert %}}

### 6.1 New Version of the Connector {#new-connector}

With this option, you can enable the new version of the [Connector](view-menu#connector). Should you find any issues in the new version, you can switch back to the old version by clearing this check box.

Default: *disabled*

### 6.2 New Version of the App Explorer {#new-project-explorer}

With this option, you can enable the new version of the [App Explorer](project-explorer). Should you find any issues in the new version, you can switch back to the old version by clearing this check box.

Default: *enabled*

### 6.3 New Version of the Toolbox {#new-toolbox}

With this option, you can enable the new version of the [Toolbox](/refguide/view-menu#toolbox). Should you find any issues in the new version, you can switch back to the old version by clearing this check box.

Default: *enabled*

### 6.4 New Merge Algorithm with Fine-Grained Conflict Resolution

With this option, you can enable the new merge algorithm that is used when you update your app or merge changes in it. For more information on the algorithm, see [New Merge Algorithm with Fine-Grained Conflict Resolution](new-merge-algorithm).

Default: *disabled*

### 6.5 Team Server Git

With this options, Studio Pro will start using the Git version of Team Server. Your projects will be created with a Git Version Control Backend, and will be built and deployed to a Git oriented infrastructure. This is a Beta features, and not yet suited to production usage. After applying this setting, you will need to restart Studio Pro for it to take effect.

Default: *disabled*

## 7 Read More

* [Upload to Version Control Server](upload-to-version-control-dialog)
* [How to Work with an On-Premises Version Control Server](/howto/collaboration-requirements-management/on-premises-svn-howto)
