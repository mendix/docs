---
title: "View Menu"
category: "App Modeling"
description: "Describes the View Menu in Studio Pro."
menu_order: 15
tags: ["Studio Pro", "view menu", "top bar"]
---

## 1 Introduction

Studio Pro supports a number of dockable window panes, such as the **Changes** or **Errors** panes. You can close some panes to just show the ones you need at the moment, but you can always reopen them via the **View** menu. 

Via this menu you can also enable/disables the [full screen mode](#full-screen) and also [reset the layout](#reset-layout) of your project to default.  

## 2 Changes {#changes}

For [Team Server](/developerportal/develop/team-server) app projects, the [Changes pane](changes-pane) shows the local changes to the app project since the last commit. You can commit changes, update to the latest revision, and view the history from here. 

This pane has two levels, so when you zoom into a changed document, you can review all the changes within that document without going back and forth between levels. The zoomed-in level of the pane is split into two grids, with elements on the left and properties on the right. Selecting an element on the left presents the changed properties on the right:

![](attachments/studio-pro-overview/changes.gif)

## 3 Connector

This pane displays elements that can be connected to the currently selected element. For example, when a button is a selected, the **Connector** shows microflows that you can drag onto the button to connect them.

## 4 Console {#console}

This pane displays the output of the [Mendix Runtime](runtime) while running an application.

## 5 Documentation

This pane displays the documentation for the currently selected element (if applicable).

## 6 Error List

The [Errors pane](errors-pane) displays the [errors](consistency-errors), warnings, and deprecations that exist in your app project.

## 7 Find Results

This pane displays the results of the latest find action. You can search for text, usages of an element (for example, an attribute), and unused items.

There are two **Find Results** panes. If you lock the results of the first pane, the second one is used for subsequent find operations until you unlock the first one.

## 8 Project Explorer

The [Project Explorer](project-explorer) pane displays the complete structure of your app project, including all the documents inside the modules. By default, the active document is always selected, so you can quickly see where the document you are editing is in the tree. You can change this behavior in **Edit** > [Preferences](preferences-dialog).

## 9 Properties

This pane displays the properties of the currently selected element. This is where a lot of editing in Studio Pro takes place.

## 10 Stories

For [Team Server](/developerportal/develop/team-server) app projects, this pane shows the [stories](/developerportal/collaborate/stories) of the current [Sprint](/developerportal/develop/planning-development).

## 11 Toolbox

This pane displays the tools that can be used in the current editor. For example, in a page you can insert all kinds of widgets (for example, [data widgets](data-widgets)) by dragging them from the **Toolbox** to your page.

## 12 Debug Windows

For more information on debugging, see [How to Debug Microflows](/howto/monitoring-troubleshooting/debug-microflows).

### 12.1 Breakpoints

This pane shows all the breakpoints in your app project. You can enable and disable breakpoints from here.

### 12.2 Debugger

This tool can be used to debug your application.

### 12.3 Variables

In this pane, you can view the current values of variables, lists, and objects when debugging your application.

## 13 Full Screen Mode {#full-screen}

Hides the title bar and makes the window fill the entire screen. This version of **Full Screen** was introduced in Studio Pro [8.3.0](/releasenotes/studio-pro/8.3#830); in previous versions, the **Full Screen** mode closed all dockable window panes. 
Shortcut key: <kbd>F11</kbd>

## 14 Distraction Free Mode

Same as the **Full Screen** mode above, but also closes all dockable window panes. This was introduced in Studio Pro [8.3.0](/releasenotes/studio-pro/8.3#830).

Shortcut key: <kbd>Shift</kbd> + <kbd>F11</kbd>

## 15 Reset Layout {#reset-layout}

Resets the layout of dockable window panes to factory defaults.

## 16 Read More

