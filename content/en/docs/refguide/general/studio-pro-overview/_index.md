---
title: "Studio Pro Overview"
url: /refguide/studio-pro-overview/
weight: 10
description: "Describes Studio Pro in general, for example, tabs and menus."
aliases:
    - /refguide/desktop-modeler-overview.html
    - /refguide/desktop-modeler-overview
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## Introduction

Mendix Studio Pro is a tool for creating, viewing, and editing your Mendix applications.

One Studio Pro instance can have only one app open at a time, but you can open two Studio Pro instances when necessary.

{{% alert color="info" %}}
When Studio Pro is open, press <kbd>F1</kbd> to open the relevant documentation.
{{% /alert %}}

This document describes the user interface of Mendix Studio Pro:

{{< figure src="/attachments/refguide/studio-pro-overview/studio-pro-diagram.png" alt="Diagram of the home page of Studio Pro, which labels each section of the home page layout." class="no-border" >}}

## Top Bar {#top-bar}

The Studio Pro top bar contains the following items:

* [Menus](#menus) 
* [Buttons to run and view your app](#run-and-view)
* [Links to the Mendix Portal and Marketplace](#links) 

### Menus {#menus}

In the Studio Pro top bar, you can see several menus, such as [Edit](/refguide/edit-menu/), [View](/refguide/view-menu/), and [Version Control](/refguide/version-control-menu/). Each menu contains items that allow you to perform various actions, such as to [create a deployment package](/refguide/create-deployment-package-dialog/), set [preferences](/refguide/preferences-dialog/), or view the [**Errors**](/refguide/errors-pane/) pane. 

For more information, see [Menus](/refguide/menus/). 

### Run and View App {#run-and-view}

Deploy your app by clicking the **Publish** or **Run Locally** ({{% icon name="controls-play" %}}) buttons. To view your deployed app, click **View App**. 

{{< figure src="/attachments/refguide/studio-pro-overview/view-and-publish.png" alt="View and Publish buttons" class="no-border" >}}

For more information on deployment in Mendix, see [Deploying Apps](/deployment/).

For more information on deploying and versioning your app, see the [Versioning an App Deployed to the Cloud](/refguide/using-version-control-in-studio-pro/#versioning-app) section in *Using Version Control in Studio Pro*. 

### Links and User Profile Menu {#links}

You can find links to the [Mendix Portal](/developerportal/) and [Marketplace](/appstore/) in the upper-right corner of Studio Pro.

Your profile picture is displayed next to these links if you are signed in. When you click the profile picture, the drop-down menu is displays your full name and email, a link to your user profile, and the **Sign Out** option. 

## App Explorer

An app consists of individual files (also known as documents) and settings that are grouped in folders and [modules](/refguide/modules/). The complete structure of your app can be viewed in the [App Explorer](/refguide/app-explorer/).

## Working Area {#working-area}

A working area is a current document tab that you work in. The working area and its settings differs depending on the editor (for example, pages, microflows, domain model editors) and the type of document. 

### Document Tabs {#documents}

{{% alert color="info" %}}
This section describes documents in the working area, not panes that you can open and position around the working area. For more information on pane behavior, see the [Layout of Panes](/refguide/view-menu/#layout-of-panes) section in *View Menu*.
{{% /alert %}}

The documents you view and edit are shown in tabs. 

You can have multiple tabs open, similar to a modern web browser. These tabs can be closed, reordered, and shown side-by-side. 

Each document has its own save state, history, and future, so undo and redo actions are unlimited.

## Dockable Panes {#panes}

Dockable panes can be positioned around the working area and contain various elements and settings.

{{< figure src="/attachments/refguide/studio-pro-overview/pane-example.png" alt="Properties Pane Example" width="300" class="no-border" >}}

For example, you can view the [list of errors](/refguide/errors-pane/), run the [Best Practice Recommender](/refguide/best-practice-recommender/), configure properties of a specific document or an element, or view the toolbox. For more information on panes and their layout, see [View Menu](/refguide/view-menu/).

## Status Bar {#status-bar}

At the bottom of the Studio Pro main window pane is a status bar:

{{< figure src="/attachments/refguide/studio-pro-overview/status-bar.png" class="no-border" >}}

On the left is the current status of your app.

On the right are the version control buttons (branch status, incoming commits, outgoing commits). You can use these buttons to open the **Branch Line Manager**, as well as your commit history. For more information, see [Version Control](/refguide/version-control/).

Next to version control is the currently selected language. If you have set up multiple languages in your app, you can use the drop-down to change the language you are currently using. For more information, see [Language Menu](/refguide/translatable-texts/).

## Read More

* [Keyboard Shortcuts](/refguide/keyboard-shortcuts/)
* [App Explorer](/refguide/app-explorer/)
* [Menus](/refguide/menus/)
* [Best Practices for Development](/refguide/dev-best-practices/)
* [Best Practices for App Performance](/refguide/community-best-practices-for-app-performance/)
