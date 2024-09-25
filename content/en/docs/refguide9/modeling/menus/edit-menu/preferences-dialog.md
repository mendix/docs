---
title: "Preferences"
url: /refguide9/preferences-dialog/
weight: 50
---

## Introduction

The **Preferences** option in the menu opens a dialog box where you can set user-specific preferences which apply to the whole of Studio Pro:

{{< figure src="/attachments/refguide9/modeling/menus/edit-menu/preferences-dialog/preferences.png" alt="Preferences" width="600" class="no-border" >}}

## General Tab {#general}

### Interface {#interface}

#### Keep Active Document Selected in App Explorer

When enabled, **App Explorer** automatically highlights the document that is currently active. When this property is disabled, the selection in **App Explorer** remains unchanged when the active document changes.

#### Show Styling For

The **Show styling for** setting configures, which styling files are shown in the App Explorer. 

You can select one of the following options:

* **App Only** – This option covers the most common case and lets you customize your app-specific styling. By choosing this, you can see all files from the **theme** folder in App Explorer > **App** > **Styling**.
* **App and UI resources modules** (*Default*) – This option targets developers who would like to create or edit UI resources modules, for example, to build or extend your design system/theme. This option also adds a **Styling** folder to modules that are marked as UI resources, containing the files from the corresponding **themesource** folder.
* **App and all modules** – Additionally to the option above, this one adds a **Styling** folder to all modules, regardless of whether they are marked as UI resources or not.

For more information about the styling editor, see the [Using the Styling Editor](/howto9/front-end/customize-styling-new/#styling-editor) section in *How to Customize Styling*.

### Error List

#### Auto-Check Delay

The **Auto-check delay** is the number of milliseconds that Studio Pro waits after a change, before starting the consistency checks. Increase this setting for large apps if Studio Pro responses slowly after changes.

#### Highlight Shown Errors and Warnings in the Editor

When **Highlight shown errors and warnings in the editor** is checked, the errors and warnings which are currently shown in the Error List (as determined by the **Errors** and **Warnings** toggle buttons and the suppression rules) will be highlighted on the affected elements in the editor.

### Deployment

#### JDK directory {#jdk}

Here the directories of the Java Development Kit (JDK) for each supported Java version can be selected. These JDKs are used when you locally deploy an application. Usually, the correct directories are located automatically.

A JDK is necessary to run Mendix applications, because the Mendix Runtime runs on the Java Virtual Machine (JVM).

#### Enable Run Optimizations

Enable this setting to increase the speed at which a running application is updated after changes have been made in Studio Pro. When only pages, layouts or snippets have been changed, an entire restart of the application is skipped to decrease deployment time. Also, no Java compilation is performed when no relevant files have changed.

#### Build Using Gradle {#gradle}

Enable this setting to build you app using Gradle. If this setting is disabled Ant is used instead.

#### Gradle Directory

A directory where Gradle is located on the computer that you use to deploy the application. The correct directory is usually located automatically.

Gradle is necessary to deploy Mendix applications if the **Build using Gradle** setting is enabled.

### Disk Location

#### Default App Directory{#default-directory}

This is the directory where new apps are stored. It is used in the [App Settings](/refguide9/new-app/#app-settings) dialog box when you create a new app. If a different directory is selected in the **App Settings** dialog box, that directory is stored as the new default app directory.

### Mendix Assist Tab

#### Logic Bot

The **Logic Bot** tab contains the following settings:

* **Enable MxAssist Logic Bot** – when enabled, [MxAssist Logic Bot](/refguide9/mx-assist-logic-bot/) is activated and can give you suggestions for microflow activities. You can also switch MxAssist Logic Bot on and off in the top right corner of the microflow editor.
* **Show Suggestions for System Variables** – when enabled, MxAssist Logic Bot will include system objects in its suggestions (for example, it can suggest that you change system objects like currentUser or currentSession).

#### Performance Bot

The **Performance Bot** tab contains the following settings:

* **Show recommendation in editors** – when enabled, [MxAssist Performance Bot](/refguide9/mx-assist-performance-bot/) highlights elements that contain performance issues in visual editors.

* **Automatically run an inspection after opening an app** – when enabled, [MxAssist Performance Bot](/refguide9/mx-assist-performance-bot/) automatically runs an inspection when an app is opened. If the app contains errors, the inspection will not run.

## Model Tab

### When Prompted by a Widget to Automatically Fill Its Contents, Select 'Yes' by Default

This setting defines the default response to the question whether to automatically fill the contents of a data widget. This question is asked, for example, when dragging an Entity onto a Data View widget. When enabled, the pre-selected answer is **yes**; otherwise, it is **no**.

## Version Control Tab

### File Comparison

#### Executable

This is the path and name of the program that is used to view the details of file changes in the [commit dialog box](/refguide9/commit-dialog/).

For example, you can see how to set up file comparison for Visual Studio Code below: 

```text
{path to VS Code}/Code.exe --wait --diff "{0}" "{1}"
```

#### Argument Pattern

This is the pattern from which the arguments are derived that are passed to the file comparison program. The following two placeholders can be used in this pattern:

* `{0}` – this is replaced with the name of the original file before the arguments are passed to the file comparison program
* `{1}` – this is replaced with the name of the changed file before the arguments are passed to the file comparison program

### Subversion 

#### Enable Private Version Control with Subversion {#enable}

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/general/team-server/), but in another Subversion server to which you have access. This will allow you to specify the location of the app on the Subversion server when opening, downloading, or uploading the app.

### Git 

#### Name

Specify your name for Git to use it in commit messages and make them more informative.

#### Email

Specify your email for Git to use it in commit messages and make them more informative.

#### Enable Automatic Repository Optimization {#optimization}

Select **Enable automatic repository optimization** to run Git repository optimization automatically on a regular basis. This helps you maintain the storage structure providing benefits from both performance and repository size perspectives. 

#### Number of Commits

This option is available when [Enable automatic repository optimization](#optimization) is on. Studio Pro keeps track of the number of commits made in the local repository. You can manually specify the minimum number of them to tell when to start background optimization. For more information, see [Git Storage Optimization](/refguide9/git-storage-optimization-dialog/).

#### Enable Private Version Control with Git 

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/developerportal/general/team-server/), but in a private Git server to which you have access. This will allow you to specify the location of the app on the Git server when opening, downloading, or uploading the app. In this section, you also need to specify name and email values that will be used to identify your commits with Git.

## Advanced Tab

### Proxy Server

Sometimes the computer running Studio Pro cannot access the internet directly, but has to connect to a proxy server that requires authentication. If this is the case, then these settings can be used to specify the user name and password to connect to the proxy server.

### Usage Data {#usage-data}

When the **Send Studio Pro usage data to Mendix** setting is enabled, Studio Pro sends usage data to Mendix that allows Mendix to identify issues and improve the user experience. The usage data does not contain sensitive information. It is possible to disable this feature, but it may affect the behavior of some features, prevent Mendix from identifying issues reported by the user, or affect tracking issues that are not reported yet. This setting is machine-specific and changing this feature does not affect any existing installed version.

{{% alert color="info" %}}
This functionality is currently available in Studio Pro 9.22 and above.
{{% /alert %}}

### Rendering {#rendering}

Hardware and driver issues may cause performance problems when running Studio Pro. These issues can appear in form of dialogs opening and closing much slower than expected, and general slowness of the UI. In case the hardware problems cannot be solved, it is possible to mitigate these issues by turning the **Enable software rendering mode** setting on. Enabling this setting requires a restart of Studio Pro to take effect. Running the application with this setting on may increase the CPU usage.

{{% alert color="info" %}}
This functionality is currently available in Studio Pro 9.24.
{{% /alert %}}

## Work Environment Tab

### Default Page Editor {#default-page-editor}

This option sets the default page editor mode that your page opens in: **Structure mode** or **Design mode**. For more information on page editor modes, see the [Page Editor Modes](/refguide9/page/#page-editor-modes) section in *Page*.

## New Features Tab {#new-features}

The **New features** tab allows you to turn new features on and off. These are features which are being worked on but are either not yet developed sufficiently to remove the previous version, or which are currently optional.

{{% alert color="info" %}}
You need to restart Studio Pro for changes to these settings to take effect.
{{% /alert %}}

### Browser Sign In

The **Use your default browser to sign in** option allows you to use your default browser to sign into Studio Pro. If there is an active Mendix session in your browser, you will be signed in with this session.

Default: *enabled*

### Dark Mode Preview {#dark-mode}

{{% alert color="info" %}}
This functionality is currently in [beta](/releasenotes/beta-features/).
{{% /alert %}}

The **Dark mode** option allows you to preview to the dark mode of the Studio Pro user interface. 

{{% alert color="info" %}}
Not all screens of Studio Pro support dark mode yet.
{{% /alert %}}

Default: *disabled*

### New Merge Algorithm with Fine-Grained Conflict Resolution

With this option, you can enable the new merge algorithm that is used when you update your app or merge changes in it. For more information on the algorithm, see [New Merge Algorithm with Fine-Grained Conflict Resolution](/refguide9/new-merge-algorithm/).

Default: *enabled*

### Properties Pane {#properties}

{{% alert color="info" %}}
This functionality is currently in [beta](/releasenotes/beta-features/).
{{% /alert %}}

The **New Properties pane preview** option allows you to enable the overhauled UI for viewing and changing properties in Studio Pro.

Default: *disabled*

## Read More

* [Upload to Version Control Server](/refguide9/upload-to-version-control-dialog/)
* [Working with an On-Premises Version Control Server](/refguide9/on-premises-svn/)
