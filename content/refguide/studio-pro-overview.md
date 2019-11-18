---
title: "Studio Pro Overview"
category: "App Modeling"
description: "Describes Studio Pro in general: tabs, menus, shortcut keys."
menu_order: 10
tags: ["Studio Pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
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

### 5.1 Dockable Window Pane Menu Items {#dockable-panes}

Studio Pro supports a number of dockable window panes. You can close some panes to just show the ones you need at the moment, but you can always reopen them via the **View** menu. 

#### 5.1.1 Changes {#changes}

For [Team Server](/developerportal/develop/team-server) app projects, this pane shows the local changes to the app project since the last commit. You can commit changes, update to the latest revision, and view the history from here. 

This pane has two levels, so when you zoom into a changed document, you can review all the changes within that document without going back and forth between levels. The zoomed-in level of the pane is split into two grids, with elements on the left and properties on the right. Selecting an element on the left presents the changed properties on the right. To go back to the list of changed documents, click **Back**.

![](attachments/studio-pro-overview/changes.gif)

#### 5.1.2 Connector

This pane displays elements that can be connected to the currently selected element. For example, when a button is a selected, the **Connector** shows microflows that you can drag onto the button to connect them.

#### 5.1.3 Console

This pane displays the output of the [Mendix Runtime](runtime) while running an application.

#### 5.1.4 Documentation

This pane dispalys the documentation for the currently selected element (if applicable).

#### 5.1.5 Error List

This pane displays the [errors](consistency-errors) and warnings that exist in your app project.

#### 5.1.6 Find Results

This pane displays the results of the latest find action. You can search for text, usages of an element (for example, an attribute), and unused items.

There are two **Find Results** panes. If you lock the results of the first pane, the second one is used for subsequent find operations until you unlock the first one.

#### 5.1.7 Project Explorer

The [Project Explorer](project-explorer) pane displays the complete structure of your app project, including all the documents inside the modules. By default, the active document is always selected, so you can quickly see where the document you are editing is in the tree. You can change this behavior in **Edit** > [Preferences](preferences-dialog).

#### 5.1.8 Properties

This pane displays the properties of the currently selected element. This is where a lot of editing in Studio Pro takes place.

#### 5.1.9 Stories

For [Team Server](/developerportal/develop/team-server) app projects, this pane shows the [stories](/developerportal/collaborate/stories) of the current [Sprint](/developerportal/develop/planning-development)

#### 5.1.10 Toolbox

This pane displays the tools that can be used in the current editor. For example, in a page you can insert all kinds of widgets (for example, [data widgets](data-widgets)) by dragging them from the **Toolbox** to your page.

#### 5.1.11 Debug Windows

For more information on debugging, see [How to Debug Microflows](/howto/monitoring-troubleshooting/debug-microflows).

##### 5.1.11.1 Breakpoints

This pane shows all the breakpoints in your app project. You can enable and disable breakpoints from here.

##### 5.1.11.2 Debugger

This tool can be used to debug your application.

##### 5.1.11.3  Variables

In this pane, you can view the current values of variables, lists, and objects when debugging your application.

### 5.2 Other View Menu Items

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Full Screen** | Hides the title bar and makes the window fill the entire screen. This version of **Full Screen** was introduced in Studio Pro [8.3.0](/releasenotes/studio-pro/8.3#830); in previous versions, the **Full Screen** mode closed all dockable window panes. | <kbd>F11</kbd> |
| **Distraction Free Mode** | Same as the **Full Screen** mode above, but also closes all dockable window panes. This was introduced in Studio Pro [8.3.0](/releasenotes/studio-pro/8.3#830). | <kbd>Shift</kbd> + <kbd>F11</kbd> |
| **Reset Layout** | Resets the layout of Studio Pro to factory defaults. |   |

## 6 Project Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| **Update** | Updates the local app to the latest revision that was committed to the version control server. |  |
| **Commit** | Commits all local changes made to the app since the previous commit to the version control server. |  |
| **Show Changes on Disk** | Opens a dialog that shows which files on disk have been changed since the last commit. |  |
| **More Versioning** > **History** | Shows the history of committed revisions of the app. |   |
| **More Versioning** > **Download from Version Control Server** | Downloads an app from the Team Server or another SVN server. This creates a local working copy of the app for development. |   |
| **More Versioning** > **Upload to Version Control Server** | Uploads a local app to a new or existing Team Server repository, or to another SVN server. This is only possible if the app is not yet version controlled. |   |
| **More Versioning** > **Manage Branch Lines** | Manages branch lines on the version control server that can be used to develop functionality separately from the main line. |   |
| **More Versioning** > **Merge Changes Here** | Merges changes that were committed in another development line to the development line that is currently opened in Studio Pro. |   |
| **More Versioning** > **Reverse Merge Changes** | Allows locally rolling back changes that were committed to the version control repository. These local changes can then be committed as a new revision. |   |
| **More Versioning** > **Add Snapshot of Data** | Creates a snapshot of the built-in database and adds that to the version control repository. This is especially useful for adding test data to your app or for demo purposes. |   |
| **Tools** > **Batch update button icons** | Opens the **Batch Update Button Icons** dialog box so that you can configure the batch update of many button icons at once.  |   |
| **Tools** > **Batch update layouts** | Opens the **Batch Update Layouts** dialog box so that you can configure the batch update of the layouts of many pages at once.  |  |
| **Tools** > **Batch convert Split panes** | Opens the **Batch Convert Split Panes** dialog box so that you can configure the batch update. |  |
| **Tools** > **Update Widgets** | Presents the current versions of the widgets you are using in your app project, what the latest versions of the widgets are, and an update option. | |
| **Tools** > **Check Widgets** | Checks that the widgets you have implemented in the app project have been built correctly. | |
| **Synchronize Project Directory** | If necessary, this action creates folders inside the project directory (resources, widgets, theme, etc.). It also reads the widget packages that are currently inside the widgets folders. For example, if you add widgets to the widgets folder, you needs to synchronize the project directory for them to appear in the **Toolbox**. | <kbd>F4</kbd> |
| **Show Project Directory in Explorer** | Shows the directory that contains the project file (*.mpr*) and other assets such as resources and Java actions in Windows Explorer. |   |
| **Deploy for Eclipse** | Deploys the project to the deployment directory. The Java stubs are generated so that you can start editing them in Eclipse. This action does not compile the Java actions. Use this if you are writing Java actions and you want to compile and debug them through Eclipse. | <kbd>F6</kbd> |
| **Create Deployment Package** | Creates a Mendix Deployment Archive package (*.mda*) that contains all necessary files to run the project. This can be used if you want to deploy your project on a Windows server or on a custom Mendix Cloud. | <kbd>F7</kbd> |
| **Clean Deployment Directory** | Cleans the deployment directory. |   |
| **Deploy to Licensed Cloud Node** | Deploys the latest committed revision of a Team Server project to the associated Mendix Cloud node. | <kbd>Ctrl</kbd> + <kbd>F5</kbd> |

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
| **Debug** | Allows you to connect the [Debugger](#dockable-panes). | |
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
