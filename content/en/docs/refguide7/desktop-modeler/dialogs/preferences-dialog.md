---
title: "Preferences Dialog"
url: /refguide7/preferences-dialog/
---
## 1 Introduction

With the **Preferences** dialog box you can set user-specific preferences which apply to the whole Desktop Modeler.

To open the **Preferences** dialog box, go to **Edit > Preferences**.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/preferences-dialog/preferences-dialog-box.png" >}}

## 2 General Tab

### 2.1 Interface

#### 2.1.1 Keep Active Document Selected in Project Explorer

When the check box is selected, **Project Explorer** automatically highlights the document that is currently active. When the check box is cleared, the selection in **Project Explorer** remains unchanged when the active document changes.

### 2.2 Error List

#### 2.2.1 Auto-check Delay

The **Auto-check delay** is the number of milliseconds that the Desktop Modeler waits after a change, before starting the consistency checks. Increase this setting for large projects if the Desktop Modeler responses slowly after changes.

### 2.3 Deployment

#### 2.3.1 JDK Directory

This is the directory in which the Java Development Kit (JDK) is located on the computer on which you deploy the application. Usually the correct directory is located automatically.

The JDK is necessary to run Mendix applications because the Mendix runtime is written in Java.

#### 2.3.2 Enable Run Optimizations

Enable this setting to increase the speed at which a running application is updated after changes have been made in the Desktop Modeler. When only pages, layouts, or snippets have been changed, an entire restart of the application is skipped to decrease deployment time. Also, no Java compilation is performed when no relevant files have changed.

## 3 Model Tab

### 3.1 When Prompted by a Widget to Automatically Fill Its Contents, Select 'Yes' by Default

This setting defines the default response to the question whether to automatically fill the contents of a data widget. This question is asked, for example, when dragging an Entity onto a Data View widget. When the check box is selected, the pre-selected answer is **yes**; otherwise it is **no**.

## 4 Advanced Tab

### 4.1 File Comparison

#### 4.1.1 Executable

This is the path and name of the program that is used to view the details of file changes in the [Commit dialog box](/refguide7/commit-dialog/).

#### 4.1.2 Argument Pattern

This is the pattern from which the arguments are derived that are passed to the file comparison program. The following two placeholders can be used in this pattern:

* `{0}` this is replaced with the name of the original file before the arguments are passed to the file comparison program

* `{1}` this is replaced with the name of the changed file before the arguments are passed to the file comparison program

### 4.2 Version Control

#### 4.2.1 Enable Private Version Control {#enabled}

Select this option when you want to work on an app that is not stored in [Mendix Team Server](/refguide7/team-server/), but in another SVN server to which you have access. This will allow you to specify the location of the app in the SVN server when, for example, opening or downloading an app, managing branch lines, or importing an app package.

### 4.3 Proxy Server

Sometimes the computer running the Desktop Modeler cannot access the internet directly, but has to connect to a proxy server that requires authentication. If this is the case, then these settings can be used to specify the user name and password to connect to the proxy server.

## 5 Read More

* [Upload to Version Control Server](/refguide7/upload-to-version-control-dialog/)
