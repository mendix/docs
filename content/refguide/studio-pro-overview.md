---
title: "Studio Pro Overview"
category: "App Modeling"
description: "Describes Studio Pro in general: tabs, menus, shortcut keys."
menu_order: 10
tags: ["Studio Pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped on the landing page, update the link there if renaming or moving it.
---

## 1 Introduction

Mendix Studio Pro is the tool for creating, viewing, and editing your Mendix applications. A Mendix app is called a [project](project) in Studio Pro. A project consists of many documents that are grouped in [modules](modules) and folders. There are some project-level settings, but the core of the functionality is inside the modules. Examples of documents are [project settings](project-settings), [domain models](domain-model), [pages](pages), and [microflows](microflows). One Studio Pro instance can have only one project open at a time, but you can open two Studio Pro instances when necessary.

This documentation describes the graphical user interface of Studio Pro. The rest of the documentation follows the structure of the project explorer.

{{% alert type="info" %}}
Press <kbd>F1</kbd> while in Studio Pro to quickly jump to the right page in the documentation.
{{% /alert %}}

## 2 Document Tabs

The documents you view and edit are shown in tabs. You can have a number of tabs open, just like in a modern web browser. They can be closed, reordered, and shown side by side. Each document has its own save state, history, and future, so undo and redo actions are unlimited.

## 3 File Menu {#menus}

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **New Document** | Creates a new document within the project that is currently open. You can choose the name, location and type of the document. | <kbd>Ctrl</kbd> + <kbd>N</kbd> |
| **New Project** | Creates a new single-developer project. A single-developer project is simply a file (with the extension *.mpr* , which stands for "Mendix project") that is stored in the local file system. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> |
| **Open Project** | Opens an existing single-developer project (*.mpr*) or a project package (*.mpk*). See **New Project** above for information on single-developer projects. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> |
| **Recent Projects** | Shows a list of recently opened projects for quick opening. |   |
| **Save** | Saves the changes in the currently active document tab. | <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| **Save All** | Saves the changes in all documents that are open. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> |
| **Close** | Closes the current document. You will be asked to save or discard changes when needed. | <kbd>Ctrl</kbd> + <kbd>W</kbd> |
| **Close All** | Closes all document tabs. You will be asked to save or discard changes when needed. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> |
| **Close Project** | Closes the currently open project and return to the start page. |   |
| **Export as Image** | Exports the current document as an image in the *.png* format. The following document types can be exported as images: pages, microflows, domain models, document templates, and XML mappings. |   |
| **Export Project Package** | Exports the current app to a project package (*.mpk*) file. This is useful for example when you want to give someone the entire app, or when you need to provide a test app when submitting a ticket. |   |
| **Import Project Package** | Imports a project package that was created with the **Export Project Package** menu item. |   |
| **Exit** | Closes Studio Pro | |

## 4 Edit Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Undo** | Undoes the last action in a document tab. Undo and redo actions are unlimited. | <kbd>Ctrl</kbd> + <kbd>Z</kbd> |
| **Redo** | Redoes the last action that was undone in a document tab. | <kbd>Ctrl</kbd> + <kbd>Y</kbd> |
| **Cut** | Copies the selected element to the clipboard and delete it. | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| **Copy** | Copies the selected element to the clipboard. | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| **Paste** | Pastes the contents of the clipboard in the current editor. | <kbd>Ctrl</kbd> + <kbd>V</kbd> |
| **Delete** | Deletes the selected element. | <kbd>Delete</kbd> |
| **Find** | Searches the model for text. The following texts are searched: all texts that appear in the end-user interface (for example captions of labels or buttons); names and documentation of documents; entity, association, and attribute names and documentation; access rule documentation; page widget names; captions and documentation of microflow objects; and names of items in microflows. | <kbd>Ctrl</kbd> + <kbd>F</kbd> |
| **Find Advanced** | Opens a dialog box that allows for advanced search operations. Examples are searching for any document type and searching for unused documents. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> |
| **Find Usages** | Opens the **Find Results** pane and displays usages of the selected object. | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> |
| **Next Find Result** | Highlights the next find result in the **Find Results** pane and open it in an editor. | <kbd>F3</kbd> |
| **Previous Find Result** | Highlights the previous find result in the **Find Results** pane and open it in an editor. | <kbd>Shift</kbd> + <kbd>F3</kbd> |
| **Go to** | Quickly navigates to any document or domain model element in the project by typing a few letters and pressing <kbd>Enter</kbd>. | <kbd>Ctrl</kbd> + <kbd>G</kbd> |
| **Next Error** | Highlights the next error in the **Error List** pane and open it in an editor. | <kbd>F8</kbd> |
| **Previous Error** | Highlights the previous error result in the **Error List** pane and open it in an editor. | <kbd>Shift</kbd> + <kbd>F8</kbd> |
| **Preferences** | Opens the **Preferences** dialog box, where you can set your general, model, and advanced editing preferences. |  |

## 5 View Menu {#view}

The **View** menu allows you to view dockable panes, to enable the full screen mode, and reset the project layout. For more information on the **View** menu and its items, see [View Menu](view-menu).

## 6 Project Menu

In the **Project** menu, you can view and/or manipulate settings that are connected to the version control or deployment. For more information on the **Project** menu, see [Project Menu](project-menu).

## 7 Run Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Run** | Deploys and run the project locally. The **Console** pane is activated and this shows the output of the server that runs the project. | <kbd>F5</kbd> |
| **Run on Cloud Foundry** | Opens the **Edit Cloud Foundry Settings** dialog box so you can run your app on Cloud Foundry. | |
| **Edit Cloud Foundry Settings** | Opens the **Edit Cloud Foundry Settings** dialog box so you can edit your Cloud Foundry settings. | |
| **Run Locally** | Runs the project locally so you can view the app. | <kbd>F5</kbd> |
| **Stop** | Stops the currently running project. | <kbd>Shift</kbd> + <kbd>F5</kbd> |
| **onfiguration** | Sets the configuration level (**Default**). | |
| **efault log level** | Allows setting the default log level before running the project locally. The options are **Trace**, **Debug**, **Info** (default), **Warning**, **Error**, **Critical**. |   |
| **Debug** | Allows you to connect the [Debugger](view-menu#debugger). | |
| **Responsive Browser** | Shows the web client for the currently running project in the browser. | <kbd>F9</kbd> |
| **Tablet Browser** | Shows the tablet mobile client for the currently running project in the browser. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F9</kbd> |
| **Phone Browser** | Shows the mobile client for the currently running project in the browser. | <kbd>Ctrl</kbd> + <kbd>F9</kbd> |
| **Hybrid Phone App Online** | Views the app as a phone app online. | |
| **View in the Mendix App** | Views the app via the [Mendix Mobile app](getting-the-mendix-app). | |

## 8 Language Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Current Language** | Displays the current language of your app project. | |
| **Language Settings** | Opens the **Project Settings** dialog box to the **Languages** tab so that you can adjust the language configuration of the app project. | |
| **Batch Replace** | Opens a dialog window in which you can correct texts within one language. This is useful to check whether texts presented to the user are consistent. |   |
| **Batch Translate** | Opens a dialog window in which you can quickly translate many texts from one language to another. |   |
| **Language Operations** | Opens a dialog window in which you can copy, move, swap, or delete all translations in a given language for selected modules. |   |

## 9 Help Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Help** | Opens the documentation page about the currently selected element. If an entity is selected, for example, the documentation for entities will be shown. | <kbd>F1</kbd> |
| **Help Contents** | Opens the start page of the documentation in the default web browser. |   |
| **Ask a Question** | Opens the [Mendix Forum](https://forum.mendixcloud.com/index4.html) in the default web browser. |   |
| **Open Log File Directory** | Opens the log files for your app project locally. |   |
| **About Mendix Studio Pro** | Shows information about the current version of Mendix Studio Pro. |   |

## 10 Shortcut Keys

### 10.1 General Shortcut Keys

In the main window pane, <kbd>Ctrl</kbd> + <kbd>Tab</kbd> can be used to navigate between all open documents. Other shortcut keys that can be used in the main window pane can be found next to their relevant menu item in the [Menus](#menus) section above.

In most dialog boxes for editing properties, the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Confirms all changes and closes the dialog window. Works as if the **OK** button was clicked. This is especially useful if the focus is on a multi-line text box; otherwise, pressing <kbd>Enter</kbd> will have the same effect. |
| <kbd>Esc</kbd> | Cancels all changes and closes the dialog window. Works as if the **Cancel** button was clicked. |
| <kbd>Ctrl</kbd> + Mouse scroll wheel | Zooms in or out. This works in all editors. |
| <kbd>Shift</kbd> + Mouse scroll wheel | Scrolls left or right. Works as if you were using the horizontal scroll bars. |

In most edit grids (such as the list of attributes in the entity properties), the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Creates a new item. |
| <kbd>Enter</kbd> | Edits the currently selected item. |
| <kbd>Delete</kbd> | Deletes the currently selected item(s). |

### 10.2 Domain Model Editor Shortcut Keys

The following shortcut keys are available in the domain model editor:

| Key | Description |
| --- | --- |
| <kbd>F2</kbd> | Edits the name of the selected element. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Selects all entities. |
| <kbd>Esc</kbd> | Clears selection. |

### 10.3 Page Editor Shortcut Keys

The following shortcut keys are available in the page editor:

| Key | Description |
| --- | --- |
| Arrow keys | Moves the selection box to the widget or element in the direction of the arrow key. For example, if currently a label is selected and you press the right arrow key, the text box to the right of it becomes selected. |
| <kbd>Ctrl</kbd> + arrow keys | Moves the currently selected item up/down or left/right. This works on table columns and rows, tab pages, grid and data view buttons, search fields, etc. |
| <kbd>Enter</kbd> | Edits the properties of the currently selected object in a dialog box. |
| <kbd>F2</kbd> | Edits the caption of a label or button inline on the page. You can also just start typing a letter or a digit and the caption will be replaced by what you type. |

### 10.4 Microflow Editor Shortcut Keys

The following shortcut keys are available in the microflow editor:

| Key | Description |
| --- | --- |
| Arrow keys | Moves the selection box to the activity or element in the direction of the arrow key. For example, if currently a show page activity is selected and you press the right arrow key, the end event to the right of it becomes selected. |
| <kbd>Ctrl</kbd> + arrow keys | Moves the currently selected item up/down or left/right. |
| <kbd>Enter</kbd> | Edits the properties of the currently selected object in a dialog box. |
| <kbd>F2</kbd> | Edits the name of the return value of the currently selected activity. This shortcut will not function on activities that do not return a result. |
| <kbd>Home</kbd> | Highlights and focus on the start event of the current microflow. |
| <kbd>End</kbd> | Highlights and focus on an end event in the current microflow. If there are multiple end events, clicking **End** multiple times will toggle between the different events. |
| <kbd>Shift</kbd> when resizing an activity | When resizing the entity, by holding <kbd>Shift</kbd> , the microflow component will stay centered at its current position and will expand equally in all directions. |
| <kbd>Ctrl</kbd> when selecting multiple activities | When pressing the <kbd>Ctrl</kbd>, you can select additional microflow components. Clicking a selected component while holding <kbd>Ctrl</kbd> will deselect it. |

### 10.5 Microflow Debugger Shortcut Keys {#debugger-shortcuts}

The following shortcut keys are available for the the microflow debugger:

| Key | Description |
| --- | --- |
| <kbd>Alt</kbd> + <kbd>F5</kbd> | *Step into* – moves the debugger into the sub-microflow or loop.  |
| <kbd>Alt</kbd> + <kbd>F6</kbd> | *Step over* – moves the debugger to the next step in the same microflow. |
| <kbd>Alt</kbd> + <kbd>F7</kbd> | *Step out* – instructs the debugger to leave the sub-microflow or loop.  |
| <kbd>Alt</kbd> + <kbd>F8</kbd> | *Continue* – instructs the debugger to continue until it reaches another breakpoint. |
