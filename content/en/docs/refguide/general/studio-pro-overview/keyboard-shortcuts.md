---
title: "Keyboard Shortcuts"
url: /refguide/keyboard-shortcuts/
weight: 12
description: "Describes the shortcut keys available in Studio Pro."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## Introduction

This document summarizes the shortcut keys available in Studio Pro. This document is divided into sections which indicate where you can use the keys.

## General Shortcut Keys

These keys are available in multiple places within Studio Pro and work generically.

### Panes and Editors

These keys are active within the [Dockable Panes](#panes) and editors, such as the Domain Model, Pages, Workflows, Microflows, or the Navigation editor.

#### All Panes and Editors {#panes}

You can navigate between Studio Pro panes (for example, the domain model editor or the **Errors** pane) using <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>. This opens a selection dialog where you can choose a pane using the mouse, <kbd>Ctrl</kbd> + arrow keys, or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>. You are taken to the selected pane when you click the main mouse button or release the <kbd>Ctrl</kbd> key.

{{< figure src="/attachments/refguide/studio-pro-overview/ctrl-tab-navigation.png" class="no-border" >}}

There are alternative ways to navigate between tabs within panes: 

| Windows | Mac | Description |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> - <kbd>0</kbd> | Not available | Switch to tab at selected tab position in the current window. |
| <kbd>Ctrl</kbd> + <kbd>Page&nbsp;up</kbd> / <kbd>Page&nbsp;down</kbd> | Not available | Switch to next/previous tab in active pane. |

Most menu items also have shortcut keys assigned to them that can be used in all panes. These are shown in the menus, listed in the [Menu Shortcut Keys](#menu-shortcuts) section, below, and are listed on the documentation page for each menu under [Menus](/refguide/menus/).

#### Editors Only {#editors-only}

The following key combinations work in the editors, such as the Domain Model, Pages, Workflows, Microflow, or Navigation editor.

| Windows | Mac | Description |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>Command</kbd> + <kbd>C</kbd> | Copy the selected element to the clipboard. |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>Command</kbd> + <kbd>V</kbd> | Paste the contents of the clipboard in the current editor. |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>Command</kbd> + <kbd>X</kbd> | Move the selected element to the clipboard. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>Command</kbd> + <kbd>Y</kbd> | Redo the last undone action in an editor pane. |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>Command</kbd> + <kbd>Z</kbd> | Undo the last action in an editor pane. |
| <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Not Available | Navigate between open editors (opens pane navigation dialog where editors are called *active files*). |
| <kbd>Ctrl</kbd> + Mouse scroll wheel | <kbd>Command</kbd> + Mouse scroll wheel | Zooms in or out. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Minus&nbsp;sign</kbd> | Not available | Zooms in or out. |
| <kbd>Shift</kbd> + Mouse&nbsp;scroll&nbsp;wheel | <kbd>Shift</kbd> + Mouse&nbsp;scroll&nbsp;wheel | Scrolls left or right. Works as if you were using the horizontal scroll bar. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | Not available | Copy the inline styles, classes, and design properties of a widget. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> | Not available | Paste the widget styling onto another selected widget. |

#### Panes Only

The following key combinations work in the panes of Studio Pro:

| Windows | Mac | Description |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F7</kbd> | Not available | Navigate between panes (opens pane navigation dialog where panes are called *active tool windows*). |

### Dialog Boxes

In most dialog boxes for editing properties, the following shortcut keys can be used:

| Windows | Mac                               | Description |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | <kbd>Command</kbd> + <kbd>Enter</kbd> | Confirms all changes and closes the dialog box. Works as if the **OK** button was clicked. This is especially useful if the focus is on a multi-line text box; otherwise, pressing <kbd>Enter</kbd> will have the same effect. |
| <kbd>Esc</kbd> | Not available | Cancels all changes and closes the dialog box. Works as if the **Cancel** button was clicked. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Not available | Switches between tabs in a tabbed dialog box. |

In most edit grids (such as the list of attributes in the entity properties), the following shortcut keys can be used:

| Windows | Mac                            | Description |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | <kbd>Ctrl</kbd> + <kbd>N</kbd> | Creates a new item. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Edits the currently selected item. |
| <kbd>Delete</kbd> | Not available | Deletes the currently selected item (or items). |
| <kbd>↑</kbd> / <kbd>↓</kbd> | <kbd>↑</kbd> / <kbd>↓</kbd> | Selects previous/next item. |
| <kbd>Ctrl</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> | Not available | Moves selected item (or items) up/down. |

## Domain Model Editor Shortcut Keys

The following shortcut keys are available in the domain model editor:

| Windows | Mac                                     | Description |
| --- | --- | --- |
| <kbd>F2</kbd> | <kbd>Fn</kbd> + <kbd>F2</kbd> | Edits the name of the selected entity, attribute, or association. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>Command</kbd> + <kbd>A</kbd> | Selects all entities. |
| <kbd>Ctrl</kbd> | <kbd>Command</kbd> | When pressing the <kbd>Ctrl</kbd>/<kbd>Command</kbd>, you can select additional entities components. Clicking a selected entity while holding <kbd>Ctrl</kbd>/<kbd>Command</kbd> will deselect it. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Edits the properties of the currently selected entity, attribute, or association in a dialog box. |
| <kbd>Esc</kbd> | <kbd>Esc</kbd> | Clears selection. |

## Page Editor Shortcut Keys

The following shortcut keys are available in the page editor:

| Windows | Mac | Description |
| --- | --- | --- |
| Arrow keys | Arrow keys| Moves the selection box to the widget or element in the direction of the arrow key. For example, if currently a label is selected and you press the right arrow key, the text box to the right of it becomes selected. |
| <kbd>Ctrl</kbd> + arrow&nbsp;keys | Not available | Moves the currently selected item up/down or left/right. This works on table columns and rows, tab pages, data grid and data view buttons, search fields, etc. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Edits the properties of the currently selected object in a dialog box. |
| <kbd>F2</kbd> | <kbd>Fn</kbd> + <kbd>F2</kbd> | Edits the caption of a label or button, or the contents of text, inline on the page. You can also just start typing a letter or a digit and the caption will be replaced by what you type. |

## Microflow and Nanoflow Editor Shortcut Keys

For an overview of the supported shortcut keys in the microflow and nanoflow editors, see the [Keyboard Support](/refguide/microflows/#keyboard) section in *Microflows*. The supported shortcut keys are the same in the microflow, nanoflow, and rule editors. 

## Debugger Shortcut Keys {#debugger-shortcuts}

The following shortcut keys are available for the debugger:

| Windows | Mac | Description |
| --- | --- | --- |
| <kbd>Alt</kbd> + <kbd>F5</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> | **Step into** – moves the debugger into the sub-microflow/sub-nanoflow or loop. |
| <kbd>Alt</kbd> + <kbd>F6</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F6</kbd> | **Step over** – moves the debugger to the next step in the same workflow/microflow/nanoflow. |
| <kbd>Alt</kbd> + <kbd>F7</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F7</kbd> | **Step out** – instructs the debugger to leave the sub-microflow/sub-nanoflow or loop. |
| <kbd>Alt</kbd> + <kbd>F8</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F8</kbd> | **Continue** – instructs the debugger to continue until it reaches another breakpoint. |
| <kbd>Alt</kbd> + <kbd>F9</kbd> | <kbd>Option</kbd> + <kbd>Fn</kbd> + <kbd>F9</kbd> | **Continue all** – instructs the debugger to continue all currently paused microflows/nanoflows until it reaches another breakpoint. |

## Menu Shortcut Keys {#menu-shortcuts}

The following shortcut keys are assigned to menu actions that can be used in all panes. These are also shown in the menus and listed on the documentation page for each menu under [Menus](/refguide/menus/).

| Windows | Mac                                                          | Description |
| --- | --- | --- |
| <kbd>F1</kbd> | <kbd>Fn</kbd> + <kbd>F1</kbd> | Help. |
| <kbd>F3</kbd> | <kbd>Fn</kbd> + <kbd>F3</kbd> | Highlights the next find result in the **Find Results** pane and open it in an editor. |
| <kbd>Shift</kbd> + <kbd>F3</kbd> | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F3</kbd> | Highlights the previous find result in the **Find Results** pane and open it in an editor. |
| <kbd>F4</kbd> | <kbd>Fn</kbd> + <kbd>F4</kbd> | Synchronizes the app directory. |
| <kbd>Ctrl</kbd> + <kbd>F4</kbd> | <kbd>Command</kbd> + <kbd>Q</kbd> | Exits. |
| <kbd>F5</kbd> | <kbd>Fn</kbd> + <kbd>F5</kbd> | Runs the app locally so you can view the app. |
| <kbd>Shift</kbd> + <kbd>F5</kbd> | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> | Stops the currently running app. |
| <kbd>Ctrl</kbd> + <kbd>F5</kbd> | <kbd>Ctrl</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> | Deploys to licensed cloud node. |
| <kbd>F6</kbd> | <kbd>Fn</kbd> + <kbd>F6</kbd> | Deploys for Eclipse. |
| <kbd>F7</kbd> | <kbd>Fn</kbd> + <kbd>F7</kbd> | Creates a deployment package. |
| <kbd>F8</kbd> | <kbd>Fn</kbd> + <kbd>F8</kbd> | Highlights the next error in the **Errors** pane and open it in an editor. |
| <kbd>Shift</kbd> + <kbd>F8</kbd> | <Kbd>Shift</Kbd> + <kbd>Fn</kbd> + <kbd>F6</kbd> | Highlights the previous error result in the **Errors** pane and open it in an editor. |
| <kbd>F9</kbd> | <kbd>Fn</kbd> + <kbd>F9</kbd>| Shows the currently running app in the browser (responsive). |
| <kbd>Ctrl</kbd> + <kbd>F9</kbd> | <kbd>Ctrl</kbd> + <kbd>Fn</kbd> + <kbd>F9</kbd> | Shows the currently running app in the browser (phone simulation). |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F9</kbd> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F9</kbd> | Shows the currently running app in the browser (tablet simulation). |
| <kbd>F11</kbd> | <kbd>Fn</kbd> + <kbd>F11</kbd> | Enables and disable full screen mode. |
| <kbd>Shift</kbd> + <kbd>F11</kbd> | <kbd>Shift</kbd> + <kbd>Fn</kbd> + <kbd>F11</kbd> | Enables and disable distraction free mode. |
| <kbd>Ctrl</kbd> + <kbd>F</kbd> | <kbd>Command</kbd> + <kbd>F</kbd> | Opens search dialog box. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | Opens advanced search dialog box. |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> | <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>F</kbd> | Displays usages of the selected object. |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | <kbd>Command</kbd> + <kbd>G</kbd> | Goes to any document or domain model element. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Cycles through the configured languages. |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | <kbd>Command</kbd> + <kbd>N</kbd> | Creates a new document. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | Creates a new app. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | Opens an existing app or app package. |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | <kbd>Command</kbd> + <kbd>S</kbd> | Saves the changes in the currently active document tab. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Saves the changes in all open documents. |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | <kbd>Command</kbd> + <kbd>W</kbd> | Closes the current document. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> | <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> | Closes all document tabs. |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | Deletes the selected element. |

## Read More

* [App Explorer](/refguide/app-explorer/)
* [Menus](/refguide/menus/)
* [Best Practices for Development](/refguide/dev-best-practices/)
* [Best Practices for App Performance](/refguide/community-best-practices-for-app-performance/)
