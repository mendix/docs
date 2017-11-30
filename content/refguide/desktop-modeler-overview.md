---
title: "Desktop Modeler Overview"
parent: "desktop-modeler"
---

## 1 Introduction

The Mendix Desktop Modeler is the place where you create, view and edit your Mendix application. This is called a [project](project) in the Modeler. A project consists of many documents that are grouped in [modules](modules) and folders. There are some project-level settings but the core of the functionality will be inside modules. Examples of documents are the [project settings](project-settings), [domain model](domain-model), [pages](pages) and [microflows](microflows). The Modeler can have one project open at the same time. You can, however, open two Modeler instances when necessary.

This documentation describes the graphical user interface of the Modeler. The rest of the documentation follows the structure of the project explorer.

{{% alert type="success" %}}

Use F1 in the Modeler to quickly jump to the right page in the documentation.

{{% /alert %}}

## 2 Dockable Windows

The Modeler supports quite a number of dockable windows or docks. You can close some to just show the ones you are interested in at the moment. You can always reopen them by using the View menu. Here is a table with all available dockable windows.

| Dockable window | Description |
| --- | --- |
| Breakpoints | Shows all breakpoints in the project. You can enable/disable breakpoints from here. |
| Changes | For [Team Server](team-server) projects, this dock shows the local changes to the project since the last commit. You can commit changes, update to the latest revision and view the history from here. |
| Connector | Shows what elements can be connected to the currently selected element. For example, when a button is a selected, the connector will show microflows that you can drag and drop onto the button to connect them. |
| Console | Shows the output of the Mendix Runtime while running an application. |
| Debugger | This can be used to debug your application. |
| Documentation | Shows the documentation for the currently selected element (if applicable). |
| Error List | Shows the errors and warning currently in your project. |
| Find Results | Shows the results of the latest find action. You can search for text, for usages of an element (e.g. attribute) and for unused items. There are two find results docks. If you lock the results of the first dock, the second one will be used for subsequent find operations until you unlock it. |
| Get Started | Shows information on how to get started with the Mendix Modeler. |
| Project Explorer | Shows the complete structure of your project including all documents inside the modules. By default the active document is always selected in the project explorer so you can quickly see where the document you are editing is in the tree. You can change this behavior in the preferences window (menu Edit > Preferences). |
| Properties | Shows properties of the currently selected element. This is where a lot of editing in the Modeler takes place. |
| Stories | For [Team Server](team-server) enabled projects, this dock shows the stories of the current sprint. |
| Toolbox | Shows the tools that can be used in the current editor. For example, in a page you can insert all kinds of widgets (text box, data view etc.) by dragging them from the toolbox to your form. |
| Variables | You can view the current values of variables here when debugging your application. |

## 3 Document Tabs

Documents that you are viewing and/or editing at the moment are shown in tabs. You can have any number of tabs open just like in a modern web browser. They can be closed, reordered, and shown side by side. Each document has its own save state (are there unsaved changes?) and undo history/future. Undo and redo are unlimited.

## 4 Menus

Using items in the menu bar of the Modeler you can create new projects, deploy and run them, search for texts and more.

| File menu | Description | Shortcut key |
| --- | --- | --- |
| New Document | Creates a new document within the project that is currently open. You can choose the name, location and type of the document. | Ctrl+N |
| New Project | Creates a new, single-developer project. A single-developer project is simply a file (with extension '.mpr' for Mendix Project) that is stored in the local file system. | Ctrl+Shift+N |
| Open Project | Opens an existing single-developer project (.mpr) or a project package (.mpk). See New Project for information on single-developer projects. | Ctrl+Shift+O |
| Recent Projects | Shows a list of recently opened projects for quick opening. |   |
| Save | Saves the changes in the currently active document tab. | Ctrl+S |
| Save All | Saves the changes in all documents that are open. | Ctrl+Shift+S |
| Close | Closes the current document. You will be asked to save or discard changes when needed. | Ctrl+W |
| Close All | Closes all document tabs. You will be asked to save or discard changes when needed. | Ctrl+Shift+W |
| Close Project | Closes the currently open project and return to the start page. |   |
| Export as Image | Exports the current document as an image in PNG format. The following document types can be exported as image: forms, microflows, domain models, document templates and XML mappings. |   |
| Export Project Package | Exports the current app to a project package (.mpk) file. This is useful for example when you want to give someone the entire app, or when you need to provide a test app when submitting a ticket. |   |
| Import Project Package | Imports a project package that was created with the 'Export Project Package' menu item. |   |
| Exit | Closes the Modeler | |

| Edit menu | Description | Shortcut key |
| --- | --- | --- |
| Undo | Undo the last action in a document tab. Undo and redo are unlimited. | Ctrl+Z |
| Redo | Redo the last action that was undone in a document tab. | Ctrl+Y |
| Cut | Copy the selected element to the clipboard and delete it. | Ctrl+X |
| Copy | Copy the selected element to the clipboard. | Ctrl+C |
| Paste | Paste the contents of the clipboard in the current editor. | Ctrl+V |
| Delete | Delete the selected element. | Delete |
| Find | Search the model for a text. The following texts are searched: all texts that appear in the end user interface (captions of labels, buttons, etc); names and documentation of documents; entity, association and attribute names and documentation; access rule documentation; form widget names; captions and documentation of microflow objects; variable definitions in microflow. | Ctrl+F |
| Find Advanced | Opens a dialog that allows for advanced search operations. Examples are searching for any document type and searching for unused documents. | Ctrl+Shift+F |
| Next Find Result | Highlight the next find result in the Find Results dock and open it in an editor. | F3 |
| Previous Find Result | Highlight the next find result in the Find Results dock and open it in an editor. | Shift+F3 |
| Go to | Quickly navigate to any document or domain model element in the project by typing a few letters and pressing Enter. | Ctrl+G |
| Next Error | Highlight the next error in the Error List dock and open it in an editor. | F8 |
| Previous Error | Highlight the next find result in the Error List dock and open it in an editor. | Shift+F8 |

| View menu | Description | Shortcut key |
| --- | --- | --- |
| Start Page | Opens the start page in a tab in the Modeler. |   |
| Breakpoints | Opens the dockable window '[Breakpoints](modeler)'. |   |
| Changes | Opens the dockable window '[Changes](modeler)'. |   |
| Connector | Opens the dockable window '[Connector](modeler)'. |   |
| Console | Opens the dockable window '[Console](modeler)'. |   |
| Documentation | Opens the dockable window '[Documentation](modeler)'. |   |
| Error List | Opens the dockable window '[Error List](modeler)'. |   |
| Find Results 1 | Opens the dockable window '[Find Results 1](modeler)'. |   |
| Find Results 2 | Opens the dockable window '[Find Results 2](modeler)'. |   |
| Project Explorer | Opens the dockable window '[Project Explorer](modeler)'. |   |
| Properties | Opens the dockable window '[Properties](modeler)'. |   |
| Stories | Opens the dockable window '[Stories](modeler)'. |   |
| Toolbox | Opens the dockable window '[Toolbox](modeler)'. |   |
| Fullscreen | Temporarily hides all dockable windows so that the tabbed documents can be shown in fullscreen. | F11 |
| Reset Layout | Resets the layout of the Modeler to factory defaults. |   |

| Project menu | Description | Shortcut key |
| --- | --- | --- |
| Synchronize Project Directory | If necessary, this action creates folders inside the project directory (resources, widgets, theme etc.). It also reads the widget packages that are currently inside the widgets folders. For example, if you add widgets to the widgets folder, you needs to synchronize the project directory for them to appear in the form toolbox. | F4 |
| Show Project Directory in Explorer | Shows the directory that contains the project file (.mpr) and other assets such as resources and Java actions in Windows Explorer. |   |
| Deploy for Eclipse | Deploy the project to the deployment directory. The Java stubs are generated so that you can start editing them in Eclipse. This action does not compile the Java actions. Use this if you are writing Java actions and you want to compile and debug them through Eclipse. | F6 |
| Create Deployment Package | Create a Mendix deployment package (.mda) which contains all necessary files to run the project. This can be used if you want to deploy your project on a Windows server or on the Mendix custom cloud. | F7 |
| Clean Deployment Directory | Cleans the deployment directory. |   |
| Deploy to the Mendix Cloud | Deploys the latest committed revision of a Team Server project to the associated Mendix Cloud node. | Ctrl+F5 |

| Run menu | Description | Shortcut key |
| --- | --- | --- |
| Run | Deploy and run the project locally. The Console dock is activated and this shows the output of the server that runs the project. | F5 |
| Stop | Stop the currently running project. | Shift+F5 |
| Default log level | Allows setting the default log level before running the project locally. |   |
| Show Web Client in Browser | Shows the web client for the currently running project in the browser. | F9 |
| Show Mobile Client in Browser | Shows the mobile client for the currently running project in the browser. | Ctrl+F9 |

| Team menu | Description | Shortcut key |
| --- | --- | --- |
| Update | Updates the local app to the latest revision that was committed to the version control server. |   |
| Commit | Commits all local changes made to the app since the previous commit to the version control server. |   |
| Show changes on disk | Opens a dialog that shows which files on disk have been changed since the last commit. |   |
| History | Shows the history of committed revisions of the app. |   |
| Download from version control server | Downloads an app from the Team Server or another SVN server. This creates a local working copy of the app for development. |   |
| Upload to version control server | Uploads a local app to a new or existing Team Server repository, or to another SVN server. This is only possible if the app is not yet version controlled. |   |
| Manage branch lines | Manages branch lines on the version control server that can be used to develop functionality separately from the main line. |   |
| Merge changes here | Merges changes that were committed in another development line to the development line that is currently opened in the Modeler. |   |
| Reverse merge changes | Allows locally rolling back changes that were committed to the version control repository. These local changes can then be committed as a new revision. |   |
| Add snapshot of data | Creates a snapshot of the built-in database and adds that to the version control repository. This is especially useful for adding test data to your app, or for demo purposes. |   |

| Tools menu | Description | Shortcut key |
| --- | --- | --- |
| Batch Translate | Open a form in which you can quickly translate many texts from one language to another. |   |
| Batch Replace | Open a form in which you can correct texts within one language. This is useful to check whether texts presented to the user are consistent. |   |
| Language Operations | Open a form in which you can copy, move, swap or delete all translations in a given language for selected modules. |   |\

| Help menu | Description | Shortcut key |
| --- | --- | --- |
| Help | Open the documentation page about the currently selected element. If an entity is selected, for example, the documentation for entities will be shown. | F1 |
| Help Contents | Open the start page of the documentaton in the default web browser. |   |
| Getting Started | Open a dialog that offers useful resources for getting started with the Mendix Modeler. |   |
| Ask a Question | Opens the community forum in the default web browser. |   |
| About Mendix Modeler | Show information about the current version of the Mendix Modeler. |   |

## 5 General Shortcut Keys

In the main window, Ctrl+Tab can be used to navigate between all open documents. Other shortcut keys that can be used in the main window can be found next to their relevant menu item in the Menus section above.

In most dialogs for editing properties, the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| Ctrl+Enter | Confirm all changes and closes the form. Works as if the 'OK' button was pressed. This is especially useful if the focus is on a multi-line text box, because otherwise Enter will do the same. |
| Escape | Cancel all changes and closes the form. Works as if the 'Cancel' button was pressed. |
| CTRL + Mouse Scroll Wheel | Zoom in or out. This works in all editors. |
| SHIFT + Mouse Scroll Wheel | Scroll left or right. Works as if you were using the horizontal scroll bars. |

In most edit grids such as the list of attributes in the entity properties dialog, the following shortcut keys can be used:

| Key | Description |
| --- | --- |
| Ctrl+N | Create a new item. |
| Enter | Edit the currently selected item. |
| Delete | Delete the currently selected item(s). |

## 6 Domain Model Editor Shortcut Keys

The following shortcut keys are available in the domain model editor:

| Key | Description |
| --- | --- |
| F2 | Edit the name of the selected element. |
| Ctrl+A | Select all entities. |
| Esc | Clear selection. |

## 7 Form Editor Shortcut Keys

The following shortcut keys are available in the form editor:

| Key | Description |
| --- | --- |
| Arrow keys | Move the selection box to the widget or element in the direction of the arrow key. For example, if currently a label is selected and you press the right arrow key, the text box to the right of it becomes selected. |
| Ctrl+arrow keys | Move the currently selected item up/down or left/right. This works on table columns and rows, tab pages, grid and data view buttons, search fields, etc. |
| Enter | Edit the properties of the currently selected object in a pop-up dialog. |
| F2 | Edit the caption of a label, button etc. inline in the form. You can also just start typing a letter or a digit and the caption will be replaced by what you type. |

## 8 Microflow Editor Shortcut Keys

The following shortcut keys are available in the microflow editor:

| Key | Description |
| --- | --- |
| Arrow keys | Move the selection box to the activity or element in the direction of the arrow key. For example, if currently a show page activity is selected and you press the right arrow key, the end event to the right of it becomes selected. |
| Ctrl+arrow keys | Move the currently selected item up/down or left/right. |
| Enter | Edit the properties of the currently selected object in a pop-up dialog. |
| F2 | Edit the name of the variable generated by the currently selected activity. This shortcut will not function on activities that do not result in a variable. |
| Home | Highlight and focus on the start event of the current microflow. |
| End | Highlight and focus on an end event in the current microflow. If there are multiple end events, pressing the End key multiple times will toggle between the different events. |
| Shift
_When re-sizing an activity_ | When re-sizing the entity, by holding the SHIFT key the microflow component will stay centered at its current position and will expand equally in all directions. |
| Ctrl
_When selecting multiple activities_ | When pressing the CTRL key, you can select additional microflow components. Clicking on a selected component while holding the CTRL key will deselect it. |
