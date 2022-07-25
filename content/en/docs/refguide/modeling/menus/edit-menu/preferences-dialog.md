---
title: "Preferences"
url: /refguide/preferences-dialog/
weight: 50
tags: ["studio pro", "preferences", "settings", "edit menu"]
---

## 1 Introduction

The **Preferences** option in the menu opens a dialog box where you can set user-specific preferences which apply to the whole of Studio Pro:

{{< figure src="/attachments/refguide/modeling/menus/edit-menu/preferences-dialog/preferences.png" alt="Preferences" >}}

## 2 General Tab {#general}

### 2.1 Interface {#interface}

#### 2.1.1 Keep Active Document Selected in App Explorer

When enabled, **App Explorer** automatically highlights the document that is currently active. When this property is disabled, the selection in **App Explorer** remains unchanged when the active document changes.

#### 2.1.2 Show Styling For

The **Show styling for** setting configures, which styling files are shown in the App Explorer. 

You can select one of the following options:

* **App Only** – This option covers the most common case and lets you customize your app-specific styling. By choosing this, you can see all files from the **theme** folder in App Explorer > **App** > **Styling**.
* **App and UI resources modules** (*Default*) – This option targets developers who would like to create or edit UI resources modules, e.g. to build or extend your design system/theme. This option also adds a **Styling** folder to modules that are marked as UI resources, containing the files from the corresponding **themesource** folder.
* **App and all modules** – Additionally to the option above, this one adds a **Styling** folder to all modules, regardless of whether they are marked as UI resources or not.

For more information about the styling editor, see the [Using the Styling Editor](/howto/front-end/customize-styling-new/#styling-editor) section in *How to Customize Styling*.

### 2.2 Error List

#### 2.2.1 Auto-Check Delay

The **Auto-check delay** is the number of milliseconds that Studio Pro waits after a change, before starting the consistency checks. Increase this setting for large apps if Studio Pro responses slowly after changes.

#### 2.2.2 Highlight Shown Errors and Warnings in the Editor

When **Highlight shown errors and warnings in the editor** is checked, the errors and warnings which are currently shown in the Error List (as determined by the **Errors** and **Warnings** toggle buttons and the suppression rules) will be highlighted on the affected elements in the editor.

### 2.3 Deployment

#### 2.3.1 JDK directory

This is the directory in which the Java Development Kit (JDK) is located on the computer on which you deploy the application. Usually, the correct directory is located automatically.

The JDK is necessary to run Mendix applications, because the Mendix Runtime is written in Java.

#### 2.3.2 Enable Run Optimizations

Enable this setting to increase the speed at which a running application is updated after changes have been made in Studio Pro. When only pages, layouts or snippets have been changed, an entire restart of the application is skipped to decrease deployment time. Also, no Java compilation is performed when no relevant files have changed.

### 3 Mendix Assist Tab

#### 3.1 Logic Bot

The **Logic Bot** tab contains the following settings:

* **Enable MxAssist Logic Bot** – when enabled, [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/) is activated and can give you suggestions for microflow activities. You can also switch MxAssist Logic Bot on and off in the top right corner of the microflow editor.
* **Show Suggestions for System Variables** – when enabled, MxAssist Logic Bot will include system objects in its suggestions (for example, it can suggest that you change system objects like currentUser or currentSession).

#### 3.2 Performance Bot

The **Performance Bot** tab contains the **Show recommendation in editors** setting. When enabled, [MxAssist Performance Bot](/refguide/mx-assist-performance-bot/) highlights elements that contain performance issues in visual editors. 


## 4 Model Tab

### 4.1 When Prompted by a Widget to Automatically Fill Its Contents, Select 'Yes' by Default

This setting defines the default response to the question whether to automatically fill the contents of a data widget. This question is asked, for example, when dragging an Entity onto a Data View widget. When enabled, the pre-selected answer is **yes**; otherwise, it is **no**.

## 5 Version Control Tab

### 5.1 File Comparison

#### 5.1.1 Executable

This is the path and name of the program that is used to view the details of file changes in the [commit dialog box](/refguide/commit-dialog/).

#### 5.1.2 Argument Pattern

This is the pattern from which the arguments are derived that are passed to the file comparison program. The following two placeholders can be used in this pattern:

* `{0}` – this is replaced with the name of the original file before the arguments are passed to the file comparison program
* `{1}` – this is replaced with the name of the changed file before the arguments are passed to the file comparison program

### 5.2 Enable Private Version Control with Subversion {#enable}

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/collaborate/team-server/), but in another Subversion server to which you have access. This will allow you to specify the location of the app on the Subversion server when opening, downloading, or uploading the app.

### 5.3 Enable Private Version Control with Git 

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/collaborate/team-server/), but in a private Git server to which you have access. This will allow you to specify the location of the app on the Git server when opening, downloading, or uploading the app. In this section, you also need to specify name and email values that will be used to identify your commits with Git.

## 6 Advanced Tab

### 6.1 Proxy Server

Sometimes the computer running Studio Pro cannot access the internet directly, but has to connect to a proxy server that requires authentication. If this is the case, then these settings can be used to specify the user name and password to connect to the proxy server.

## 7 New Features Tab {#new-features}

The **New features** tab allows you to turn new features on and off. These are features which are being worked on but are either not yet developed sufficiently to remove the previous version, or which are currently optional.

{{% alert color="info" %}}
You need to restart Studio Pro for changes to these settings to take effect.
{{% /alert %}}

### 7.1 Dark Mode Preview {#dark-mode}

The **Dark mode** option allows you to preview to the dark mode of the Studio Pro user interface. 

{{% alert color="info" %}}
Not all screens of Studio Pro support the dark mode yet.
{{% /alert %}}

Default: *disabled*

### 7.2 New Version of My App Screen 

With this option, you can enable the new version of **My Apps** screen. Should you find any issues in the new version, you can switch back to the old version by clearing this check box.

Default: *enabled*

### 7.3 New Merge Algorithm with Fine-Grained Conflict Resolution

With this option, you can enable the new merge algorithm that is used when you update your app or merge changes in it. For more information on the algorithm, see [New Merge Algorithm with Fine-Grained Conflict Resolution](/refguide/new-merge-algorithm/).

Default: *enabled*

### 7.4 Team Server Git {#git}

With this option, Studio Pro starts using the Git version of the Team Server. Your apps will be created with a Git Version Control back end and will be built and deployed to a Git-oriented infrastructure. 

{{% alert color="warning" %}}
This is a Beta feature, and not yet suited for production usage. For more information on Beta products, see [Beta Releases](/releasenotes/beta-features/). 
{{% /alert %}}

After applying this setting, you need to restart Studio Pro.

Default: *disabled*

## 8 Read More

* [Upload to Version Control Server](/refguide/upload-to-version-control-dialog/)
* [How to Work with an On-Premises Version Control Server](/howto/collaboration-requirements-management/on-premises-svn-howto/)
