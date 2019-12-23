---
title: "Menus"
category: "App Modeling"
description: "Describes Studio Pro menus."
menu_order: 12
tags: ["Studio Pro", "menu", "top bar"]
---

## 1 Introduction

The top-bar of Studio Pro contains the following menus:

* [File](#file) – allows you to manage documents and projects
* [Edit](#edit) – allows you to perform editing functions such as search or copy within Studio Pro
* [View](#view) – allows you to choose how Studio Pro and dockable panes within Studio Pro are displayed
* [Project](#project) – contains project-wide settings
* [Run](#run) – contains actions for deploying and monitoring your app 
* [Version Control](#version-control) – contains setting for version control
* [Language](#language) – contains language and translation settings
* [Help](#help)  – allows you to view documentation, [Mendix Forum](https://forum.mendixcloud.com/index4.html), open log file directory, or view information on  the current information of Studio Pro

## 2 File Menu {#file}

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

## 3 Edit Menu {#edit}

The **Edit** menu allows you to perform editing functions, such as cut/copy/paste. You can also set [preferences](preferences-dialog) via this menu. For more information on the **Edit** menu, see  [Edit Menu](edit-menu).

## 4 View Menu {#view}

The **View** menu allows you to view dockable panes, to enable the full screen mode, and reset the project layout. For more information on the **View** menu and its items, see [View Menu](view-menu).

## 5 Project Menu {#project}

In the **Project** menu, you can view and/or manipulate settings that are connected to your project and deployment. For more information on the **Project** menu, see [Project Menu](project-menu).

## 6 Run Menu {#run}

The **Run** menu contains actions for deploying and monitoring your app, such as **Run**, **Run locally**, or **Debugger**. For more information on the **Run** menu, see [Run Menu](run-menu). 

## 7 Version Control Menu {#version-control}

In the **Version Control** menu, you can view and/or manipulate settings on the version control. More information on the **Version Control** menu, see [Version Control Menu](version-control-menu).

## 8 Language Menu {#language}

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Current Language** | Displays the current language of your app project. | |
| **Language Settings** | Opens the **Project Settings** dialog box to the **Languages** tab so that you can adjust the language configuration of the app project. | |
| **Batch Replace** | Opens a dialog window in which you can correct texts within one language. This is useful to check whether texts presented to the user are consistent. |   |
| **Batch Translate** | Opens a dialog window in which you can quickly translate many texts from one language to another. |   |
| **Language Operations** | Opens a dialog window in which you can copy, move, swap, or delete all translations in a given language for selected modules. |   |

## 9 Help Menu {#help}

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Help** | Opens the documentation page about the currently selected element. If an entity is selected, for example, the documentation for entities will be shown. | <kbd>F1</kbd> |
| **Help Contents** | Opens the start page of the documentation in the default web browser. |   |
| **Ask a Question** | Opens the [Mendix Forum](https://forum.mendixcloud.com/index4.html) in the default web browser. |   |
| **Open Log File Directory** | Opens the log files for your app project locally. |   |
| **About Mendix Studio Pro** | Shows information about the current version of Mendix Studio Pro. |   |

## 10 Read More

* [Studio Pro Overview](studio-pro-overview)