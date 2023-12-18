---
title: "Preferences"
url: /refguide/preferences-dialog/
weight: 50
tags: ["studio pro", "preferences", "settings", "edit menu"]
---

## 1 Introduction

The **Preferences** option in the menu opens a dialog box where you can set user-specific preferences which apply to the whole of Studio Pro:

{{< figure src="/attachments/refguide/modeling/menus/edit-menu/preferences-dialog/preferences.png" alt="Preferences" width="600" >}}

## 2 General Tab {#general}

### 2.1 Interface {#interface}

#### 2.1.1 Keep Active Document Selected in the App Explorer

When enabled, **App Explorer** automatically highlights the document that is currently active. When this property is disabled, the selection in **App Explorer** remains unchanged when the active document changes.

#### 2.1.2 Show Styling For

The **Show styling for** setting configures which styling files are shown in the App Explorer. 

You can select one of the following options:

* **App Only** – This option covers the most common case and lets you customize your app-specific styling. By choosing this, you can see all files from the **theme** folder in App Explorer > **App** > **Styling**.
* **App and UI resources modules** (*Default*) – This option targets developers who would like to create or edit UI resources modules, for example, to build or extend your design system/theme. This option also adds a **Styling** folder to modules that are marked as UI resources, containing the files from the corresponding **themesource** folder.
* **App and all modules** – Additionally to the option above, this one adds a **Styling** folder to all modules, regardless of whether they are marked as UI resources or not.

For more information about the styling editor, see the [Using the Styling Editor](/howto/front-end/customize-styling-new/#styling-editor) section in *How to Customize Styling*.

### 2.2 Error List

#### 2.2.1 Auto-Check Delay

The **Auto-check delay** is the number of milliseconds that Studio Pro waits after a change, before starting the consistency checks. Increase this setting for large apps if Studio Pro responses slowly after changes.

#### 2.2.2 Highlight Shown Errors and Warnings in the Editor

When **Highlight shown errors and warnings in the editor** is checked, the errors and warnings which are currently shown in the Error List (as determined by the **Errors** and **Warnings** toggle buttons and the suppression rules) will be highlighted on the affected elements in the editor.

### 2.3 Disk Location

#### 2.3.1 Default App Directory {#default-directory}

This is the directory where new apps are stored. It is used in the [App Settings](/refguide/new-app/#app-settings) dialog box when you create a new app. If a different directory is selected in the **App Settings** dialog box, that directory is stored as the new default app directory.

## 3 Deployment Tab {#deployment}

### 3.1 Deployment

#### 3.1.1 JDK directory

This is the directory in which the Java Development Kit (JDK) is located on the computer on which you deploy the application. Usually, the correct directory is located automatically.

The JDK is necessary to run Mendix applications, because the Mendix Runtime is written in Java.

#### 3.1.2 Enable Run Optimizations

Enable this setting to increase the speed at which a running application is updated after changes have been made in Studio Pro. When only pages, layouts or snippets have been changed, an entire restart of the application is skipped to decrease deployment time. Also, no Java compilation is performed when no relevant files have changed.

### 3.2 Build

#### 3.2.1 Gradle Directory

A directory where Gradle is located on the computer that you use to deploy the application. The correct directory is usually located automatically.

#### 3.2.2 Use Custom Repositories

Enabling this option allows you to specify which repositories should be used by Gradle. For more information, see the [Custom Repositories](/refguide/managed-dependencies/#custom-repos) section in *Managed Dependencies*.

#### 3.2.3 Repositories

Here you can specify which repositories to use for Gradle. The content of this field should be specified using Groovy syntax and is what is inside the `repositories { }` section in a Gradle build file. By default, this field contains: `mavenCentral()`.

## 4 Mendix Assist Tab

### 4.1 Logic Bot

The **Logic Bot** tab contains the following settings:

* **Enable MxAssist Logic Bot** – when enabled, [MxAssist Logic Bot](/refguide/mx-assist-logic-bot/) is activated and can give you suggestions for microflow activities. You can also switch MxAssist Logic Bot on and off in the top right corner of the microflow editor.
* **Show suggestions for system variables** – when enabled, MxAssist Logic Bot will include system objects in its suggestions (for example, it can suggest that you change system objects like `currentUser` or `currentSession`).

### 4.2 Best Practice Bot

The **Best Practice Bot** tab contains the following settings:

* **Show recommendation in editors** – when enabled, [MxAssist Best Practice Bot](/refguide/mx-assist-performance-bot/) highlights elements that contain anti-patterns in visual editors.

* **Automatically run an inspection after opening an app** – when enabled, [MxAssist Best Practice Bot](/refguide/mx-assist-performance-bot/) automatically runs an inspection when an app is opened. If the app contains errors, the inspection will not run.

## 5 Model Tab

### 5.1 When Prompted by a Widget to Automatically Fill Its Contents, Select 'Yes' by Default

This setting defines the default response to the question whether to automatically fill the contents of a data widget. This question is asked, for example, when dragging an Entity onto a Data View widget. When enabled, the pre-selected answer is **yes**; otherwise, it is **no**.

## 6 Version Control Tab {#version-control}

### 6.1 File Comparison

#### 6.1.1 Executable

This is the path and name of the program that is used to view the details of file changes in the [commit dialog box](/refguide/commit-dialog/).

For example, you can see how to set up file comparison for Visual Studio Code below: 

```text {linenos=false}
{path to VS Code}/Code.exe --wait --diff "{0}" "{1}"
```

#### 6.1.2 Argument Pattern

This is the pattern from which the arguments are derived that are passed to the file comparison program. The following two placeholders can be used in this pattern:

* `{0}` – this is replaced with the name of the original file before the arguments are passed to the file comparison program
* `{1}` – this is replaced with the name of the changed file before the arguments are passed to the file comparison program

### 6.2 Git{#git}

#### 6.2.1 Name

Specify your name for Git to use it in commit messages and make them more informative.

#### 6.2.2 Email

Specify your email for Git to use it in commit messages and make them more informative.

#### 6.2.3 Enable Automatic Repository Optimization {#optimization}

Select **Enable automatic repository optimization** to run Git repository optimization automatically on a regular basis. This helps you maintain the storage structure providing benefits from both performance and repository size perspectives. 

#### 6.2.4 Number of Commits

This option is available when [Enable automatic repository optimization](#optimization) is on. Studio Pro keeps track of the number of commits made in the local repository. You can manually specify the minimum number of them to tell when to start background optimization. For more information, see [Git Storage Optimization](/refguide/git-storage-optimization-dialog/).

#### 6.2.5 Enable Private Version Control with Git {#enable-with-Git}

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/general/team-server/), but in a private Git server to which you have access. This will allow you to specify the location of the app on the Git server when opening, downloading, or uploading the app. In this section, you also need to specify name and email values that will be used to identify your commits with Git.

#### 6.2.6 Enable Automatic Fetching from a Remote Repository{#enable-auto-fetch}

{{% alert color="info" %}}
This setting was introduced in Mendix version 10.2.
{{% /alert %}}

Select **Enable automatic fetching from a remote repository** to enable the [Automatic fetch mechanism](/refguide/auto-fetch/).

#### 6.2.7 Fetch Interval, Minutes

The number of minutes to wait after a fetch has started before performing another fetch. This must be between 1 and 120 minutes.

#### 6.2.8 Combine Local and Remote Changes

{{% alert color="info" %}}
This setting was introduced in Mendix version 10.5.
{{% /alert %}}

When [combining changes](/refguide/merge-algorithm/), for example when doing a Git pull, the user can choose between **Rebase** and **Merge** as the default action. This preference can be overridden for each merge which contains conflicts.

## 7 Work Environment Tab

### 7.1 Studio Pro Theme {#studio-pro-theme}

This option allows user to choose between Studio Pro themes: **Auto (System theme)**, **Light**, or **Dark**. The default is **Auto (System theme)**, which detects the theme set in the operating system and uses an appropriate theme for Studio Pro (**Light** or **Dark**). Changing this option requires a restart of Studio Pro to take effect.

### 7.2 Default Page Editor {#default-page-editor}

This option sets the default page editor mode that your page opens in: **Structure mode** (the default) or **Design mode**. For more information on page editor modes, see the [Page Editor Modes](/refguide/page/#page-editor-modes) section in *Page*.

### 7.3 Rendering {#rendering}

Hardware and driver issues may cause performance problems when running Studio Pro. These issues can appear in form of dialog boxes opening and closing much more slowly than expected, and general slowness of the UI. In case the hardware problems cannot be solved, it is possible to mitigate these issues by turning the **Enable software rendering mode** setting on. Enabling this setting requires a restart of Studio Pro to take effect. Running the application with this setting on may increase the CPU usage.

## 8 Advanced Tab

### 8.1 Proxy Server

Sometimes the computer running Studio Pro cannot access the internet directly, but has to connect to a proxy server that requires authentication. If this is the case, then these settings can be used to specify the user name and password to connect to the proxy server.

### 8.2 Usage Data {#usage-data}

When the **Send Studio Pro usage data to Mendix** setting is enabled, Studio Pro sends usage data to Mendix that allows Mendix to identify issues and improve the user experience. The usage data does not contain sensitive information. It is possible to disable this feature, but it may affect the behavior of some features, prevent Mendix from identifying issues reported by the user, or affect tracking issues that are not reported yet. This setting is machine-specific and changing this feature does not affect any existing installed version.

## 9 New Features Tab {#new-features}

### 9.1 Micro- And Nanoflow Editor

Logic editors are currently being redesigned. The beta logic editors are available to try out in Studio Pro 10.4.0. When **Use the Beta version as the default editor** setting is enabled, the beta logic editors will be the default editors for all your microflows, nanoflows, and rules. For more information, see [Logic Editors (Beta)](/refguide/logic-editors-beta/).

### 9.2 Visual Builder

In Studio Pro version 10.5, a new, visual, way of constructing XPath constraints was introduced. This is called Visual Builder for database constraints. The default way to construct XPath constraints is to write XPath expressions, but you can change the default by checking **Enable the Builder as the default XPath constraint editor**.

## 10 Read More

* [Upload to Version Control Server](/refguide/upload-to-version-control-dialog/)
