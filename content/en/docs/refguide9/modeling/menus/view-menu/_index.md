---
title: "View Menu"
url: /refguide9/view-menu/
description: "Describes the View Menu in Studio Pro."
weight: 20
tags: ["view menu", "pane", "connector", "console", "find results", "widget developer console", "documentation pane", "full screen", "distraction free", "reset layout"]
---

## 1 Introduction

Studio Pro supports a number of dockable window panes, such as the **Changes** and **Errors** panes. You can close some panes to just show the ones you need at the moment, but you can always reopen them via the **View** menu. 

Via this menu you can also enable or disable the [full screen mode](#full-screen) or [reset the layout](#reset-layout) of your app to the default.  

{{< figure src="/attachments/refguide9/modeling/menus/view-menu/view-menu.png" alt="View Menu" >}}

## 2 Layout of Panes {#layout-of-panes}

You can change the default layout of panes and arrange them in the layout you like.

{{% alert color="info" %}}
Note that this section describes the behavior of panes, not the behavior of documents in the working area. For more information on the behavior of documents open in the working area, see the [Document Tabs](/refguide9/studio-pro-overview/#documents) section in *Studio Pro Overview*.
{{% /alert %}}

When you drag a pane, you can see arrows that indicate where you can position this pane. You can position the pane either inside the current pane (arrows grouped together) or make it full-window height or width (individual arrows on the borders). Each position is labelled and explained below:

{{< figure src="/attachments/refguide9/modeling/menus/view-menu/interaction-with-panes.png" >}}

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

If you have several panes grouped together in tabs, you can change the position of all the tabs at once by dragging the top-bar. To change the position of an individual tab, drag the tab itself. 

## 3 Menu Items

Menu items of the **View** menu are described in sections below.

### 3.1 App Explorer

The [App Explorer](/refguide9/app-explorer/) pane displays the complete structure of your app, including all the documents inside the modules. By default, the active document is always selected, so you can quickly see where the document you are editing is in the tree. You can change this behavior in **Edit** > [Preferences](/refguide9/preferences-dialog/). 

### 3.2 Changes

For version control-enabled apps (meaning, those with [Team Server](/developerportal/collaborate/team-server/) or other SVN servers), the [Changes pane](/refguide9/changes-pane/) shows the local changes to the app since the last commit. You can commit changes, update to the latest revision, and view the history from here. 

This pane has two levels, so when you zoom into a changed document, you can review all the changes within that document without going back and forth between levels. The zoomed-in level of the pane is split into two grids, with elements on the left and properties on the right. Selecting an element on the left presents the changed properties on the right:

<video width="640" height="360" controls src="/attachments/refguide9/view-menu/changes.mp4">VIDEO</video>

### 3.3 Connector {#connector}

The **Connector** pane displays elements that can be connected to the currently selected element. For example, when a button is a selected, the **Connector** shows microflows that you can drag onto the button to connect them.

### 3.4 Console {#console}

The **Console** pane displays the output of the [Mendix Runtime](/refguide9/runtime/) while running an application.

### 3.5 Data Hub {#data-hub}

The [Data Hub pane](/refguide9/data-hub-pane/) enables you to browse the [Catalog](/catalog/) and use registered data sources that are available for your organization in your app development. You can add [external entities](/refguide9/external-entities/) to your app via this pane and see entities and data sources already consumed in your app. 

### 3.6 Documentation

The **Documentation** pane displays the documentation for the currently selected element (if applicable).

### 3.7 Error List

The [Errors pane](/refguide9/errors-pane/) displays the [errors](/refguide9/consistency-errors/), warnings, and deprecations that exist in your app.

### 3.8 Find Results

This pane displays the results of the latest find action. You can search for text, usages of an element (for example, an attribute), and unused items.

There are two **Find Results** panes. If you lock the results of the first pane, the second one is used for subsequent find operations until you unlock the first one.

### 3.9 Marketplace

For details on using Mendix Marketplace components in your app modeling, see [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/).

### 3.10 MxAssist Performance Bot {#mx-bot}

For details on this intelligent virtual co-developer bot, see [MxAssist Performance Bot](/refguide9/mx-assist-performance-bot/).

### 3.11 Page Explorer

[Page Explorer](/refguide9/page-explorer/) gives a quick overview of the page layout and allows you to view and edit nested containers in the [Design mode](/refguide9/page/#design-mode).

### 3.12 Properties {#properties}

The **Properties** pane displays the properties of the currently selected element. This is where a lot of editing in Studio Pro takes place.

### 3.13 Stories

For [Team Server](/developerportal/collaborate/team-server/) app, the **Stories** pane shows the [stories](/developerportal/collaborate/stories/) of the current [Sprint](/developerportal/collaborate/stories/). For more information on the **Stories** pane and how to interact with it, see [Stories Pane](/refguide9/stories-pane/). 

### 3.14 Toolbox {#toolbox}

The **Toolbox** pane displays the tools that can be used in the current editor. For example, in a page you can insert all kinds of widgets (for example, [data containers](/refguide9/data-widgets/)) by dragging them from the **Toolbox** onto your page.

The **Toolbox** has a tile view showing larger icons and a list view showing a list of elements. You can switch between the tile and list view modes at the lower-right corner of the **Toolbox**. 

### 3.15 Widget Developer Console

This console helps you debug the configuration code of your widget that is responsible for conditionally visible properties, custom consistency checks, and **Structure mode** preview. This console shows logs from the `getProperties`, `getPreview`, `check`, and `getCustomCaption` functions, which can be defined inside the new configuration module (for more information, see the [Widget Developer Console](/apidocs-mxsdk/apidocs/pluggable-widgets-config-api/#widget-dev-console) section of *Configuration Module API for Pluggable Widgets*). 

### 3.16 Debug Windows

For more information on debugging, see [Debugging Microflows and Nanoflows](/refguide9/debug-microflows-and-nanoflows/).

#### 3.16.1 Breakpoints

The **Breakpoints** pane shows all the breakpoints in your app. You can enable and disable breakpoints from here.

#### 3.16.2 Debugger {#debugger}

The **Debugger** tool can be used to debug your application.

#### 3.16.3 Variables {#variables}

In the **Variables** pane, you can view the current values of variables, lists, and objects when debugging your application.

### 3.17 Full Screen {#full-screen}

The **Full Screen** mode hides the title bar and makes the window fill the entire screen. 

Shortcut key: <kbd>F11</kbd>

### 3.18 Distraction Free Mode {#distraction-free}

The **Distraction Free Mode** does the same as the **Full Screen** mode above, but also closes all dockable window panes.

Shortcut key: <kbd>Shift</kbd> + <kbd>F11</kbd>

### 3.19 Reset Layout {#reset-layout}

Resets the layout of dockable window panes to factory defaults.

## 4 Read More

* [Changes Pane](/refguide9/changes-pane/)
* [Errors Pane](/refguide9/errors-pane/)
* [App Explorer](/refguide9/app-explorer/)
* [Studio Pro Overview](/refguide9/studio-pro-overview/)
