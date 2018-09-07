---
title: "Desktop Modeler Overview"
category: "Desktop Modeler"
description: "Describes the Desktop Modeler in general: tabs, menus, shortcut keys."
menu_order: 10
tags: ["desktop modeler"]
---

## 1 Introduction

The Mendix Desktop Modeler is the tool for creating, viewing, and editing your Mendix applications. A Mendix app is called a [project](project) in the Modeler. A project consists of many documents that are grouped in [modules](modules) and folders. There are some project-level settings, but the core of the functionality is inside the modules. Examples of documents are [project settings](project-settings), [domain models](domain-model), [pages](pages), and [microflows](microflows). One Modeler instance can have only one project open at a time, but you can open two Modeler instances when necessary.

This documentation describes the graphical user interface of the Modeler. The rest of the documentation follows the structure of the project explorer.

{{% alert type="success" %}}

Press <kbd>F1</kbd> while in the Desktop Modeler to quickly jump to the right page in the documentation.

{{% /alert %}}

## 2 Dockable Window Panes {#dockable-panes}

The Modeler supports a number of dockable window panes. You can close some panes to just show the ones you need at the moment, but you can always reopen them via the **View** menu. 

The table below describes all the available dockable window panes.

| Pane | Description |
| --- | --- |
| <a name="breakpoints">Breakpoints</a> (via Debug Windows) | Shows all breakpoints in the project. You can enable/disable breakpoints from here. |
| <a name="changes">Changes</a> | For [Team Server](team-server) projects, this pane shows the local changes to the project since the last commit. You can commit changes, update to the latest revision and view the history from here. |
| <a name="connector">Connector</a> | Shows what elements can be connected to the currently selected element. For example, when a button is a selected, the connector will show microflows that you can drag and drop onto the button to connect them. |
| <a name="console">Console</a> | Shows the output of the Mendix Runtime while running an application. |
| <a name="debugger">Debugger</a> (via Debug Windows) | This can be used to debug your application. |
| <a name="documentation">Documentation</a> | Shows the documentation for the currently selected element (if applicable). |
| <a name="error-list">Error List</a> | Shows the errors and warning currently in your project. |
| <a name="find-results">Find Results</a> | Shows the results of the latest find action. You can search for text, for usages of an element (for example, attribute) and for unused items. There are two **Find Results** panes. If you lock the results of the first pane, the second one will be used for subsequent find operations until you unlock it. |
| <a name="get-started">Get Started</a> | Shows useful resources for getting started with the Mendix Modeler. |
| <a name="project-explorer">Project Explorer</a> | Shows the complete structure of your project including all documents inside the modules. By default the active document is always selected in the project explorer so you can quickly see where the document you are editing is in the tree. You can change this behavior in the **Edit** > **Preferences** window pane. |
| <a name="properties">Properties</a> | Shows properties of the currently selected element. This is where a lot of editing in the Modeler takes place. |
| <a name="stories">Stories</a> | For [Team Server](team-server) enabled projects, this pane shows the stories of the current sprint. |
| <a name="toolbox">Toolbox</a> | Shows the tools that can be used in the current editor. For example, in a page you can insert all kinds of widgets (for example, text box and data view) by dragging them from the **Toolbox** to your form. |
| <a name="variables">Variables</a> (via Debug Windows) | You can view the current values of variables here when debugging your application. |

## 3 Document Tabs

Documents that you are viewing and/or editing at the moment are shown in tabs. You can have a number of tabs open, just like in a modern web browser. They can be closed, reordered, and shown side by side. Each document has its own save state and history/future. Undo and redo actions are unlimited.

## 4 Menus {#menus}

Using items in the menu bar of the Modeler, you can create new projects, deploy and run them, search for text, and more.

### 4.1 File Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| New Document | Creates a new document within the project that is currently open. You can choose the name, location and type of the document. | <kbd>Ctrl</kbd> + <kbd>N</kbd> |
| New Project | Creates a new single-developer project. A single-developer project is simply a file (with the extension *.mpr* , which stands for "Mendix project") that is stored in the local file system. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> |
| Open Project | Opens an existing single-developer project (*.mpr*) or a project package (*.mpk*). See **New Project** above for information on single-developer projects. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> |
| Recent Projects | Shows a list of recently opened projects for quick opening. |   |
| Save | Saves the changes in the currently active document tab. | <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| Save All | Saves the changes in all documents that are open. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> |
| Close | Closes the current document. You will be asked to save or discard changes when needed. | <kbd>Ctrl</kbd> + <kbd>W</kbd> |
| Close All | Closes all document tabs. You will be asked to save or discard changes when needed. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> |
| Close Project | Closes the currently open project and return to the start page. |   |
| Export as Image | Exports the current document as an image in the *.png* format. The following document types can be exported as images: forms, microflows, domain models, document templates, and XML mappings. |   |
| Export Project Package | Exports the current app to a project package (*.mpk*) file. This is useful for example when you want to give someone the entire app, or when you need to provide a test app when submitting a ticket. |   |
| Import Project Package | Imports a project package that was created with the **Export Project Package** menu item. |   |
| Exit | Closes the Modeler | |

### 4.2 Edit Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| Undo | Undoes the last action in a document tab. Undo and redo actions are unlimited. | <kbd>Ctrl</kbd> + <kbd>Z</kbd> |
| Redo | Redoes the last action that was undone in a document tab. | <kbd>Ctrl</kbd> + <kbd>Y</kbd> |
| Cut | Copies the selected element to the clipboard and delete it. | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| Copy | Copies the selected element to the clipboard. | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Paste | Pastes the contents of the clipboard in the current editor. | <kbd>Ctrl</kbd> + <kbd>V</kbd> |
| Delete | Deletes the selected element. | <kbd>Delete</kbd> |
| Find | Searches the model for text. The following texts are searched: all texts that appear in the end user interface (captions of labels, buttons, etc); names and documentation of documents; entity, association, and attribute names and documentation; access rule documentation; form widget names; captions and documentation of microflow objects; variable definitions in microflow. | <kbd>Ctrl</kbd> + <kbd>F</kbd> |
| Find Advanced | Opens a dialog box that allows for advanced search operations. Examples are searching for any document type and searching for unused documents. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> |
| Find Usages | Opens the **Find Results** pane and displays usages of the selected object. | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> |
| Next Find Result | Highlights the next find result in the **Find Results** pane and open it in an editor. | <kbd>F3</kbd> |
| Previous Find Result | Highlights the previous find result in the **Find Results** pane and open it in an editor. | <kbd>Shift</kbd> + <kbd>F3</kbd> |
| Go to | Quickly navigates to any document or domain model element in the project by typing a few letters and pressing <kbd>Enter</kbd>. | <kbd>Ctrl</kbd> + <kbd>G</kbd> |
| Next Error | Highlights the next error in the **Error List** pane and open it in an editor. | <kbd>F8</kbd> |
| Previous Error | Highlights the previous error result in the **Error List** pane and open it in an editor. | <kbd>Shift</kbd> + <kbd>F8</kbd> |
| Preferences | Opens the **Preferences** dialog box, where you can set your general, model, and advanced editing preferences. |  |

### 4.3 View Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| Changes | Opens the dockable window pane [Changes](#changes). |   |
| Connector | Opens the dockable window pane [Connector](#connector). |   |
| Console | Opens the dockable window pane [Console](#console). |   |
| Documentation | Opens the dockable window pane [Documentation](#documentation). |   |
| Error List | Opens the dockable window pane [Error List](#error-list). |   |
| Find Results 1 | Opens the dockable window pane [Find Results 1](#find-results). |   |
| Find Results 2 | Opens the dockable window pane [Find Results 2](#find-results). |   |
| Project Explorer | Opens the dockable window pane [Project Explorer](#project-explorer). |   |
| Properties | Opens the dockable window pane [Properties](#properties). |   |
| Stories | Opens the dockable window pane [Stories](#stories). |   |
| Toolbox | Opens the dockable window pane [Toolbox](#toolbox). |   |
|  Debug Windows > Breakpoints | Opens the dockable window pane [Breakpoints](#breakpoints). |   |
|  Debug Windows > Debugger | Opens the dockable window pane [Debugger](#debugger). |   |
|  Debug Windows > Variables | Opens the dockable window pane [Variables](#variables). |   |
| Full Screen | Temporarily hides all dockable window panes so that the tabbed documents can be shown in full screen. |<kbd>F11</kbd> |
| Reset Layout | Resets the layout of the Modeler to factory defaults. |   |

### 4.4 Project Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| Update | Updates the local app to the latest revision that was committed to the version control server. |  |
| Commit | Commits all local changes made to the app since the previous commit to the version control server. |  |
| Show Changes on Disk | Opens a dialog that shows which files on disk have been changed since the last commit. |  |
| More Versioning > History | Shows the history of committed revisions of the app. |   |
| More Versioning > Download from Version Control Server | Downloads an app from the Team Server or another SVN server. This creates a local working copy of the app for development. |   |
| More Versioning > Upload to Version Control Server | Uploads a local app to a new or existing Team Server repository, or to another SVN server. This is only possible if the app is not yet version controlled. |   |
| More Versioning > Manage Branch Lines | Manages branch lines on the version control server that can be used to develop functionality separately from the main line. |   |
| More Versioning > Merge Changes Here | Merges changes that were committed in another development line to the development line that is currently opened in the Modeler. |   |
| More Versioning > Reverse Merge Changes | Allows locally rolling back changes that were committed to the version control repository. These local changes can then be committed as a new revision. |   |
| More Versioning > Sync with Web Modeler | Syncs your app project with the Web Modeler. For more information, see [How to Sync the Web Modeler with the Desktop Modeler](/howto/web-modeler/syncing-webmodeler-desktop). |   |
| More Versioning > Finish Sync with Web Modeler | Finishes the sync with the Web Modeler. |   |
| More Versioning > Cancel Sync with Web Modeler | Cancels the sync with the Web Modeler. |   |
| More Versioning > Add Snapshot of Data | Creates a snapshot of the built-in database and adds that to the version control repository. This is especially useful for adding test data to your app or for demo purposes. |   |
| Tools > Batch update button icons | Opens the **Batch Update Button Icons** dialog box so that you can configure the batch update of many button icons at once.  |   |
| Tools > Batch update layouts | Opens the **Batch Update Layouts** dialog box so that you can configure the batch update of the layouts of many pages at once.  |  |
| Tools > Batch convert Split panes | Opens the **Batch Convert Split Panes** dialog box so that you can configure the batch update. |  |
| Tools > Check Widgets | Checks that the widgets you have implemented in the app project have been built correctly. | |
| Synchronize Project Directory | If necessary, this action creates folders inside the project directory (resources, widgets, theme, etc.). It also reads the widget packages that are currently inside the widgets folders. For example, if you add widgets to the widgets folder, you needs to synchronize the project directory for them to appear in the form toolbox. | <kbd>F4</kbd> |
| Show Project Directory in Explorer | Shows the directory that contains the project file (*.mpr*) and other assets such as resources and Java actions in Windows Explorer. |   |
| Deploy for Eclipse | Deploys the project to the deployment directory. The Java stubs are generated so that you can start editing them in Eclipse. This action does not compile the Java actions. Use this if you are writing Java actions and you want to compile and debug them through Eclipse. | <kbd>F6</kbd> |
| Create Deployment Package | Creates a Mendix Deployment Archive package (*.mda*) that contains all necessary files to run the project. This can be used if you want to deploy your project on a Windows server or on a custom Mendix Cloud. | <kbd>F7</kbd> |
| Clean Deployment Directory | Cleans the deployment directory. |   |
| Deploy to Licensed Cloud Node | Deploys the latest committed revision of a Team Server project to the associated Mendix Cloud node. | <kbd>Ctrl</kbd> + <kbd>F5</kbd> |

### 4.5 Run Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| Run | Deploys and run the project locally. The **Console** pane is activated and this shows the output of the server that runs the project. | <kbd>F5</kbd> |
| Run on Cloud Foundry | Opens the **Edit Cloud Foundry Settings** dialog box so you can run your app on Cloud Foundry. | |
| Edit Cloud Foundry Settings | Opens the **Edit Cloud Foundry Settings** dialog box so you can edit your Cloud Foundry settings. | |
| Run Locally | Runs the project locally so you can view the app. | <kbd>F5</kbd> |
| Stop | Stops the currently running project. | <kbd>Shift</kbd> + <kbd>F5</kbd> |
| Configuration | Sets the configuration level (**Default**). | |
| Default log level | Allows setting the default log level before running the project locally. The options are **Trace**, **Debug**, **Info** (default), **Warning**, **Error**, **Critical**. |   |
| Debug | Allows you to connect the [Debugger](#debugger). | |
| Responsive Browser | Shows the web client for the currently running project in the browser. | <kbd>F9</kbd> |
| Tablet Browser | Shows the tablet mobile client for the currently running project in the browser. | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F9</kbd> |
| Phone Browser | Shows the mobile client for the currently running project in the browser. | <kbd>Ctrl</kbd> + <kbd>F9</kbd> |
| Hybrid Phone App Online | Views the app as a phone app online. | |
| View in the Mendix App | Views the app via the [Mendix mobile app](getting-the-mendix-app). | |

### 4.6 Language Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| Current Language | Displays the current language of your app project. | |
| Language Settings | Opens the **Project Settings** dialog box to the **Languages** tab so that you can adjust the language configuration of the app project. | |
| Batch Replace | Opens a form in which you can correct texts within one language. This is useful to check whether texts presented to the user are consistent. |   |
| Batch Translate | Opens a form in which you can quickly translate many texts from one language to another. |   |
| Language Operations | Opens a form in which you can copy, move, swap, or delete all translations in a given language for selected modules. |   |

### 4.7 Help Menu

| Menu Item | Description | Shortcut Key |
| --- | --- | --- |
| Help | Opens the documentation page about the currently selected element. If an entity is selected, for example, the documentation for entities will be shown. | <kbd>F1</kbd> |
| Help Contents | Opens the start page of the documentaton in the default web browser. |   |
| Ask a Question | Opens the [Mendix Forum](https://forum.mendixcloud.com/index4.html) in the default web browser. |   |
| Open Log File Directory | Opens the log files for your app project locally. |   |
| About Mendix Modeler | Shows information about the current version of the Mendix Modeler. |   |

## 5 General Shortcut Keys

In the main window pane, <kbd>Ctrl</kbd> + <kbd>Tab</kbd> can be used to navigate between all open documents. Other shortcut keys that can be used in the main window pane can be found next to their relevant menu item in the [Menus](#menus) section above.

In most dialog boxes for editing properties, the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Confirms all changes and closes the form. Works as if the **OK** button was clicked. This is especially useful if the focus is on a multi-line text box; otherwise, pressing <kbd>Enter</kbd> will have the same effect. |
| Escape | Cancels all changes and closes the form. Works as if the **Cancel** button was clicked. |
| <kbd>Ctrl</kbd> + Mouse scroll wheel | Zooms in or out. This works in all editors. |
| <kbd>Shift</kbd> + Mouse scroll wheel | Scrolls left or right. Works as if you were using the horizontal scroll bars. |

In most edit grids (such as the list of attributes in the entity properties), the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Creates a new item. |
| <kbd>Enter</kbd> | Edits the currently selected item. |
| <kbd>Delete</kbd> | Deletes the currently selected item(s). |

## 6 Domain Model Editor Shortcut Keys

The following shortcut keys are available in the domain model editor:

| Key | Description |
| --- | --- |
| <kbd>F2</kbd> | Edits the name of the selected element. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Selects all entities. |
| <kbd>Esc</kbd> | Clears selection. |

## 7 Form Editor Shortcut Keys

The following shortcut keys are available in the form editor:

| Key | Description |
| --- | --- |
| Arrow keys | Moves the selection box to the widget or element in the direction of the arrow key. For example, if currently a label is selected and you press the right arrow key, the text box to the right of it becomes selected. |
| <kbd>Ctrl</kbd> + arrow keys | Moves the currently selected item up/down or left/right. This works on table columns and rows, tab pages, grid and data view buttons, search fields, etc. |
| <kbd>Enter</kbd> | Edits the properties of the currently selected object in a dialog box. |
| <kbd>F2</kbd> | Edits the caption of a label or button inline in the form. You can also just start typing a letter or a digit and the caption will be replaced by what you type. |

## 8 Microflow Editor Shortcut Keys

The following shortcut keys are available in the microflow editor:

| Key | Description |
| --- | --- |
| Arrow keys | Moves the selection box to the activity or element in the direction of the arrow key. For example, if currently a show page activity is selected and you press the right arrow key, the end event to the right of it becomes selected. |
| <kbd>Ctrl</kbd> + arrow keys | Moves the currently selected item up/down or left/right. |
| <kbd>Enter</kbd> | Edits the properties of the currently selected object in a dialog box. |
| <kbd>F2</kbd> | Edits the name of the variable generated by the currently selected activity. This shortcut will not function on activities that do not result in a variable. |
| <kbd>Home</kbd> | Highlights and focus on the start event of the current microflow. |
| <kbd>End</kbd> | Highlights and focus on an end event in the current microflow. If there are multiple end events, clicking **End** multiple times will toggle between the different events. |
| <kbd>Shift</kbd> when resizing an activity | When resizing the entity, by holding <kbd>Shift</kbd> , the microflow component will stay centered at its current position and will expand equally in all directions. |
| <kbd>Ctrl</kbd> when selecting multiple activities | When pressing the <kbd>Ctrl</kbd>, you can select additional microflow components. Clicking a selected component while holding <kbd>Ctrl</kbd> will deselect it. |
