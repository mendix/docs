---
title: "Studio Pro Overview"
url: /refguide9/studio-pro-overview/
description: "Describes Studio Pro in general, for example, tabs, menus, and shortcut keys."
weight: 10
aliases:
    - /refguide9/desktop-modeler-overview.html
    - /refguide9/desktop-modeler-overview
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## Introduction

Mendix Studio Pro is a tool for creating, viewing, and editing your Mendix applications.

One Studio Pro instance can have only one app open at a time, but you can open two Studio Pro instances when necessary.

{{% alert color="info" %}}
When Studio Pro is open, press <kbd>F1</kbd> to quickly jump to documentation.
{{% /alert %}}

This document describes the user interface of Mendix Studio Pro:

{{< figure src="/attachments/refguide9/modeling/studio-pro-overview/studio-pro-diagram.png" alt="Studio Pro Diagram" class="no-border" >}}

## Top Bar {#top-bar}

The Studio Pro top bar contains the following items:

* [Menus](#menus) 
* [Buttons to run and view your app](#run-and-view)
* [Links to Apps and Marketplace](#links) 

### Menus {#menus}

In the Studio Pro top bar, you can see several menus, such as **Switch-to** menu, [Edit](/refguide9/edit-menu/), [View](/refguide9/view-menu/), and [Version Control](/refguide9/version-control-menu/). Each menu contains menu items that allow you to perform various actions, for example, to [create a deployment package](/refguide9/create-deployment-package-dialog/), set [preferences](/refguide9/preferences-dialog/), or view the [**Errors**](/refguide9/errors-pane/) pane. 

For more information on menus, see [Menus](/refguide9/menus/). 

### Run and View App {#run-and-view}

You can deploy your app by clicking **Publish** or **Run Locally** ({{% icon name="controls-play" %}}). To view your deployed app, click **View App**. 

{{< figure src="/attachments/refguide9/modeling/studio-pro-overview/view-and-publish.png" alt="View App, Publish, and Run Locally buttons" class="no-border" >}}

For more information on deployment in Mendix, see [Deploying Apps](/deployment/).

For more information on deploying your app and versioning it, see the [Versioning an App Deployed to the Cloud](/refguide9/using-version-control-in-studio-pro/#versioning-app) section in *Using Version Control in Studio Pro*. 

### Links and User Profile Menu {#links}

You can find links to [Apps](/developerportal/) and [Marketplace](/appstore/) in the upper-right corner of Studio Pro.

Your profile picture is displayed next to them if you are signed in. When you click the profile picture, the drop-down menu is displayed with your full name and email, as well as links to your user profile, My Apps screen, and signing out option. 

## App Structure (App Explorer)

An app consists of individual files (*documents*) and settings that are grouped in folders and [modules](/refguide9/modules/). The complete structure of your app can be viewed in the [App Explorer](/refguide9/app-explorer/). 

## Working Area {#working-area}

A working area is a current document tab that you work in. The working area and its settings differs depending on the editor (for example, pages, microflows, domain model editors) and type of the document. 

### Document Tabs {#documents}

The documents you view and edit are shown in tabs. 

{{% alert color="info" %}}
This section describes documents in the working area, not panes that you can open and position around the working area. For more information on behavior of panes, see the [Layout of Panes](/refguide9/view-menu/#layout-of-panes) section in *View Menu*.
{{% /alert %}}

You can have a number of tabs open, just like in a modern web browser. They can be closed, reordered, and shown side by side. 

Each document has its own save state, history, and future, so undo and redo actions are unlimited.

## Dockable Panes {#panes}

Dockable panes can be positioned around the working area and contain various elements and settings:

{{< figure src="/attachments/refguide9/modeling/studio-pro-overview/pane-example.png" alt="Properties Pane Example" width="300" class="no-border" >}}

For example, you can view [list of errors](/refguide9/errors-pane/) or run [MxAssist Performance bot](/refguide9/mx-assist-performance-bot/), configure properties of a specific document or an element, view toolbox. For more information on panes and their layout, see [View Menu](/refguide9/view-menu/).

## Status Bar {#status-bar}

At the bottom of the Studio Pro main window pane is a status bar. On the left is the current status of Studio Pro:

{{< figure src="/attachments/refguide9/modeling/studio-pro-overview/status-bar.png" alt="Status Bar Example" class="no-border" >}}

On the right is the currently selected language. If you have set up multiple languages in your app you can change the currently selected language by clicking here. For more information see [Language Menu](/refguide9/translatable-texts/).

## Shortcut Keys

This section summarizes the shortcut keys available in Studio Pro. It is divided into sections which indicate where you can use the keys.

### General Shortcut Keys

These keys are available in multiple places within Studio Pro and work generically.

#### Panes and Editors

These keys are active within the [Dockable Panes](#panes) and editors, such as the Domain Model, Pages, Workflows, Microflows, or the Navigation editor.

##### All Panes and Editors

You can navigate between Studio Pro panes (for example, the domain model editor or the **Errors** pane) using <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>. This opens a selection dialog where you can choose a pane using the mouse, <kbd>Ctrl</kbd> + arrow keys, or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>. You are taken to the selected pane when you click the main mouse button or release the <kbd>Ctrl</kbd> key.

{{< figure src="/attachments/refguide9/modeling/studio-pro-overview/ctrl-tab-navigation.png" class="no-border" >}}

There are alternative ways to navigate between tabs within panes: 

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> - <kbd>0</kbd> | Switch to tab at selected tab position in the current window. |
| <kbd>Ctrl</kbd> + <kbd>Page&nbsp;up</kbd> / <kbd>Page&nbsp;down</kbd> | Switch to next/previous tab in active pane. |

Most menu items also have shortcut keys assigned to them that can be used in all panes. These are shown in the menus, listed in the [Menu Shortcut Keys](#menu-shortcuts) section, below, and also listed on the documentation page for each menu under [Menus](/refguide9/menus/).

##### Editors Only {#editors-only}

The following key combinations work in the editors, such as the Domain Model, Pages, Workflows, Microflow, or Navigation editor.

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | Copy the selected element to the clipboard. |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | Paste the contents of the clipboard in the current editor. |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | Move the selected element to the clipboard. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Redo the last undone action in an editor pane. |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo the last action in an editor pane. |
| <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Navigate between open editors (opens pane navigation dialog where editors are called *active files*). |
| <kbd>Ctrl</kbd> + Mouse scroll wheel | Zooms in or out. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + &nbsp;<kbd>Minus&nbsp;sign</kbd> | Zooms in or out. |
| <kbd>Shift</kbd> + Mouse&nbsp;scroll&nbsp;wheel | Scrolls left or right. Works as if you were using the horizontal scroll bar. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | Copy the inline styles, classes, and design properties of a widget. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> | Paste the widget styling onto another selected widget. |

##### Panes Only

The following key combinations work in the panes of Studio Pro:

| Key                                                    | Description                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F7</kbd> | Navigate between panes (opens pane navigation dialog where panes are called *active tool windows*). |

#### Dialog Boxes

In most dialog boxes for editing properties, the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Confirms all changes and closes the dialog box. Works as if the **OK** button was clicked. This is especially useful if the focus is on a multi-line text box; otherwise, pressing <kbd>Enter</kbd> will have the same effect. |
| <kbd>Esc</kbd> | Cancels all changes and closes the dialog box. Works as if the **Cancel** button was clicked. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Switches between tabs in a tabbed dialog box. |

In most edit grids (such as the list of attributes in the entity properties), the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Creates a new item. |
| <kbd>Enter</kbd> | Edits the currently selected item. |
| <kbd>Delete</kbd> | Deletes the currently selected item(s). |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Selects previous/next item. |
| <kbd>Ctrl</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> | Moves selected item(s) up/down. |

### Domain Model Editor Shortcut Keys

The following shortcut keys are available in the domain model editor:

| Key | Description |
| --- | --- |
| <kbd>F2</kbd> | Edits the name of the selected entity, attribute, or association. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Selects all entities. |
| <kbd>Ctrl</kbd> | When pressing the <kbd>Ctrl</kbd>, you can select additional entities components. Clicking a selected entity while holding <kbd>Ctrl</kbd> will deselect it. |
| <kbd>Enter</kbd> | Edits the properties of the currently selected entity, attribute, or association in a dialog box. |
| <kbd>Esc</kbd> | Clears selection. |

### Page Editor Shortcut Keys

The following shortcut keys are available in the page editor:

| Key | Description |
| --- | --- |
| Arrow keys | Moves the selection box to the widget or element in the direction of the arrow key. For example, if currently a label is selected and you press the right arrow key, the text box to the right of it becomes selected. |
| <kbd>Ctrl</kbd> + arrow&nbsp;keys | Moves the currently selected item up/down or left/right. This works on table columns and rows, tab pages, data grid and data view buttons, search fields, etc. |
| <kbd>Enter</kbd> | Edits the properties of the currently selected object in a dialog box. |
| <kbd>F2</kbd> | Edits the caption of a label or button, or the contents of text, inline on the page. You can also just start typing a letter or a digit and the caption will be replaced by what you type. |

### Microflow and Nanoflow Editor Shortcut Keys

The following shortcut keys are available in the microflow and nanoflow editors:

| Key | Description |
| --- | --- |
| Arrow keys | Moves the selection box to the activity or element in the direction of the arrow key. For example, if currently a show page activity is selected and you press the right arrow key, the end event to the right of it becomes selected. |
| <kbd>Ctrl</kbd> + arrow&nbsp;keys | Moves the currently selected item up/down or left/right. |
| <kbd>Enter</kbd> | Edits the properties of the currently selected object in a dialog box. |
| <kbd>F2</kbd> | Edits the name of the return value of the currently selected activity. This shortcut will not function on activities that do not return a result. |
| <kbd>Shift</kbd>  | By holding <kbd>Shift</kbd> when resizing an activity, it will stay centered at its current position and expand equally in all directions. |
| <kbd>Ctrl</kbd>  | When pressing the <kbd>Ctrl</kbd>, you can select additional activities. Clicking a selected component while holding <kbd>Ctrl</kbd> will deselect it. |

### Debugger Shortcut Keys {#debugger-shortcuts}

The following shortcut keys are available for the debugger:

| Key | Description |
| --- | --- |
| <kbd>Alt</kbd> + <kbd>F5</kbd> | *Step into* – moves the debugger into the sub-microflow/sub-nanoflow or loop. |
| <kbd>Alt</kbd> + <kbd>F6</kbd> | *Step over* – moves the debugger to the next step in the same workflow/microflow/nanoflow. |
| <kbd>Alt</kbd> + <kbd>F7</kbd> | *Step out* – instructs the debugger to leave the sub-microflow/sub-nanoflow or loop. |
| <kbd>Alt</kbd> + <kbd>F8</kbd> | *Continue* – instructs the debugger to continue until it reaches another breakpoint. |

### Menu Shortcut Keys {#menu-shortcuts}

The following shortcut keys are assigned to menu actions that can be used in all panes. These are also shown in the menus and listed on the documentation page for each menu under [Menus](/refguide9/menus/).

| Key | Description |
| --- | --- |
| <kbd>F1</kbd> | Help. |
| <kbd>F3</kbd> | Highlights the next find result in the **Find Results** pane and open it in an editor. |
| <kbd>Shift</kbd> + <kbd>F3</kbd> | Highlights the previous find result in the **Find Results** pane and open it in an editor. |
| <kbd>F4</kbd> | Synchronizes the app directory. |
| <kbd>Ctrl</kbd> + <kbd>F4</kbd> | Exits. |
| <kbd>F5</kbd> | Runs the app locally so you can view the app. |
| <kbd>Shift</kbd> + <kbd>F5</kbd> | Stops the currently running app. |
| <kbd>Ctrl</kbd> + <kbd>F5</kbd> | Deploys to licensed cloud node. |
| <kbd>F6</kbd> | Deploys for Eclipse. |
| <kbd>F7</kbd> | Creates a deployment package. |
| <kbd>F8</kbd> | Highlights the next error in the **Errors** pane and open it in an editor. |
| <kbd>Shift</kbd> + <kbd>F8</kbd> | Highlights the previous error result in the **Errors** pane and open it in an editor. |
| <kbd>F9</kbd> | Shows the currently running app in the browser (responsive). |
| <kbd>Ctrl</kbd> + <kbd>F9</kbd> | Shows the currently running app in the browser (phone simulation). |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F9</kbd> | Shows the currently running app in the browser (tablet simulation). |
| <kbd>F11</kbd> | Enables and disable full screen mode. |
| <kbd>Shift</kbd> + <kbd>F11</kbd> | Enables and disable distraction free mode. |
| <kbd>Ctrl</kbd> + <kbd>F</kbd> | Opens search dialog box. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | Opens advanced search dialog box. |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> | Displays usages of the selected object. |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | Goes to any document or domain model element. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Cycles through the configured languages. |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Creates a new document. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | Creates a new app. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | Opens an existing app or app package. |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Saves the changes in the currently active document tab. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Saves the changes in all open documents. |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Closes the current document. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> | Closes all document tabs. |
| <kbd>Delete</kbd> | Deletes the selected element. |

## Read More

* [App Explorer](/refguide9/app-explorer/)
* [Menus](/refguide9/menus/)
