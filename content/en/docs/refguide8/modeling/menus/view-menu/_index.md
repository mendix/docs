---
title: "View Menu"
url: /refguide8/view-menu/
description: "Describes the View Menu in Studio Pro."
weight: 20
---

## Introduction

Studio Pro supports a number of dockable window panes, such as the **Changes** and **Errors** panes. You can close some panes to just show the ones you need at the moment, but you can always reopen them via the **View** menu. 

Via this menu you can also enable or disable the [full screen mode](#full-screen) or [reset the layout](#reset-layout) of your project to the default.  

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/view-menu.png" alt="View Menu"   width="300"  class="no-border" >}}

## Layout of Panes {#layout-of-panes}

You can change the default layout of panes and arrange them in the layout you like.

{{% alert color="info" %}}
Note that this section describes the behavior of panes, not the behavior of documents in the working area. For more information on the behavior of documents open in the working area, see the [Document Tabs](/refguide8/studio-pro-overview/#documents) section in *Studio Pro Overview*.
{{% /alert %}}

When you drag a pane, you can see arrows that indicate where you can position this pane. You can position the pane either inside the current pane (arrows grouped together) or make it full-window height or width (individual arrows on the borders). Each position is labelled and explained below:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/interaction-with-panes.png" class="no-border" >}}

1. Within the current *pane* you can position a pane in one of the following ways:

    1. Pane-height – left 
    2. Pane-height – right 
    3. Pane-height – top
    4. Pane-height – bottom
    5. New pane as a new tab

        {{% alert color="info" %}}If you try to position the pane as a new pane inside the working area, it will be opened as a dialog box.{{% /alert %}}

2. Within the current *window* you can position a pane in one of the following ways:

    1. Full-window height – left
    2. Full-window height – right
    3. Full-window height – top
    4. Full-window height – bottom

The video below shows examples of how to position a pane:

<video width="640" height="360" controls src="/attachments/refguide8/view-menu/positioning-panes.mp4">VIDEO</video>
If you have several panes grouped together in tabs, you can change the position of all the tabs at once by dragging the top-bar. To change the position of an individual tab, drag the tab itself. 

## Menu Items

Menu items of the **View** menu are described in sections below.

### Changes

For version control enabled projects (projects with [Team Server](/developerportal/general/team-server/) or other SVN servers), the [Changes pane](/refguide8/changes-pane/) shows the local changes to the app since the last commit. You can commit changes, update to the latest revision, and view the history from here. 

This pane has two levels, so when you zoom into a changed document, you can review all the changes within that document without going back and forth between levels. The zoomed-in level of the pane is split into two grids, with elements on the left and properties on the right. Selecting an element on the left presents the changed properties on the right:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/changes.gif" class="no-border" >}}

### Connector {#connector}

The **Connector** pane displays elements that can be connected to the currently selected element. For example, when a button is a selected, the **Connector** shows microflows that you can drag onto the button to connect them.

### Data Hub {#data-hub}

The [Data Hub pane](/refguide8/data-hub-pane/) allows you to browse the [Catalog](/catalog/) and integrate registered data sources that are available for your organization. You can add [external entities](/refguide8/external-entities/) to your app via this pane and view entities and services already consumed in your project. 

### Console {#console}

The **Console** pane displays the output of the [Mendix Runtime](/refguide8/runtime/) while running an application.

### Documentation

The **Documentation** pane displays the documentation for the currently selected element (if applicable).

### Error List

The [Errors pane](/refguide8/errors-pane/) displays the [errors](/refguide8/consistency-errors/), warnings, and deprecations that exist in your app.

### Find Results {#find}

This pane displays the results of the latest find action. You can search for text, usages of an element (for example, an attribute), and unused items.

There are two **Find Results** panes. If you lock the results of the first pane, the second one is used for subsequent find operations until you unlock the first one.

### Project Explorer

The [Project Explorer](/refguide8/project-explorer/) pane displays the complete structure of your app, including all the documents inside the modules. By default, the active document is always selected, so you can quickly see where the document you are editing is in the tree. You can change this behavior in **Edit** > [Preferences](/refguide8/preferences-dialog/).

### Properties

The **Properties** pane displays the properties of the currently selected element. This is where a lot of editing in Studio Pro takes place.

### Stories

For [Team Server](/developerportal/general/team-server/) app, the **Stories** pane shows the stories of the current Sprint. For more information on the **Stories** pane and how to interact with it, see [Stories Pane](/refguide8/stories-pane/). 

### Toolbox {#toolbox}

The **Toolbox** pane displays the tools that can be used in the current editor. For example, in a page you can insert all kinds of widgets (for example, [data widgets](/refguide8/data-widgets/)) by dragging them from the **Toolbox** onto your page.

### Debug Windows

For more information on debugging, see [How to Debug Microflows](/howto8/monitoring-troubleshooting/debug-microflows/).

#### Breakpoints

The **Breakpoints** pane shows all the breakpoints in your app. You can enable and disable breakpoints from here.

#### Debugger {#debugger}

The **Debugger** tool can be used to debug your application.

#### Variables

In the **Variables** pane, you can view the current values of variables, lists, and objects when debugging your application.

### Full Screen {#full-screen}

The **Full Screen** mode hides the title bar and makes the window fill the entire screen. This version of **Full Screen** was introduced in Studio Pro [8.3.0](/releasenotes/studio-pro/8.3/#830); in previous versions, the **Full Screen** mode closed all dockable window panes. 
Shortcut key: <kbd>F11</kbd>

### Distraction Free Mode {#distraction-free}

The **Distraction Free Mode** does the same as the **Full Screen** mode above, but also closes all dockable window panes. This was introduced in Studio Pro [8.3.0](/releasenotes/studio-pro/8.3/#830).

Shortcut key: <kbd>Shift</kbd> + <kbd>F11</kbd>

### Reset Layout {#reset-layout}

Resets the layout of dockable window panes to factory defaults.

## Read More

* [Changes Pane](/refguide8/changes-pane/)
* [Errors Pane](/refguide8/errors-pane/)
* [Project Explorer](/refguide8/project-explorer/)
* [Studio Pro Overview](/refguide8/studio-pro-overview/)
