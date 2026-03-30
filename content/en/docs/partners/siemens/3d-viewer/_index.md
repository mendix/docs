---
title: "3D Viewer"
url: /partners/siemens/3d-viewer/
weight: 20
description: "Describes the configuration and usage of the 3D Viewer app service, which enables uploading, visualizing, and operating on 3D JT files in your web apps."
aliases:
  - /appstore/app-services/3d-viewer/index.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [3D Viewer](https://marketplace.mendix.com/link/component/118345) service lets you upload, visualize, and operate on JT files in your web applications, using Mendix file storage to store models. The app service contains out-of-the-box Java actions, JavaScript actions, [domain models](/refguide/domain-model/), [nanoflows](/refguide/nanoflows/), [microflows](/refguide/microflows/), and a set of 3D widgets that enable you to build apps to work with 3D models. Also included are whole functionalities and integrations that can be very helpful when building your own 3D applications. All you need to do is drag and drop items and configure them.

This app service does the heavy-lifting for you so you do not have to build a 3D-rendering engine from scratch.

Here is an overview of what the 3DViewer contains:

| Item | Name |
| ---  | --- |
| [Predefined entities](/partners/siemens/3d-viewer/installation-configuration/#predefined-entities) | ModelDocument, Pagination, Markup, MxChildDocument, MxModelDocument |
| [Constants](/partners/siemens/3d-viewer/installation-configuration/#constants) | HTTPEndpoint / Endpoint, LicenseToken, ModelSourceType |
| [Microflow](/partners/siemens/3d-viewer/installation-configuration/#microflow) | DeleteModelFromMendix, DownloadMarkup |
| [Nanoflow](/partners/siemens/3d-viewer/installation-configuration/#nanoflow) | CreateModelDocumentFromFileDocument, GetMarkupsFromMendix, GetModelListFromMendix |
| [Java action](/partners/siemens/3d-viewer/installation-configuration/#java-action) | VisServerAction |
| [Widgets](/partners/siemens/3d-viewer/installation-configuration/#widgets) | Container3D, Markup builder, Measurement, PMI tree, PS tree, PS tree table, Section view, Toolbar item camera mode, Toolbar item camera orientation, Toolbar item explode slider, Toolbar item fit all, Toolbar item render mode, Toolbar item selection mode, Toolbar item snapshot, Uploader, Viewer, Preference |

In most cases, you will only need what is contained in the **Viewer3D/USE_ME** folder. The content in the **Internal** folder is for internal use only and you will not need it.

## Typical Use Cases

You can use this app service when you want to upload, store, and visualize 3D models in your Mendix application. You can perform some basic operations, such us navigating the model product structure tree and the Product Manufacturing Information(PMI) tree, creating section views, 2D markups and much more.

## Features

This app service enables doing the following:

* Upload to and load models from Mendix file storage or your own file storage (both monolithic JT and shattered JT formats are supported)
* Open a model from a URL
* Preview a model
* Support multiple ways to view a model: zooming, rotating, fitting all, and panning
* Use quick intuitive controls to navigate product structure
* Turn parts on and off
* Select and clear selection of parts
* Examine your model from preset viewing angles
* Display PMI
* Display model views
* Display part/assembly properties
* Display exploded view
* Create 3D cross-sections
* Create 2D markup on model 
* Take snapshot of a model 
* Perform 3D measurement on distance, angle, area, radius, and length
* Set filter options for PMI and save as personal preferences

## Limitations {#limitations}

The 3D Viewer app service includes a few 3D widgets. These are some limitations on how these widgets should be placed in a page in Mendix Studio Pro:

* The **Container3D** widget acts as a context-sharing container for other 3D widgets, so 3D widgets can talk to each other and perform corresponding actions via this context. Therefore, every other 3D widget (except the **Uploader** widget) needs to be put inside the Container3D widget. If 3D widgets are placed outside of the Container3D widget, these widgets will not work as expected. In that case, you will be notified and see errors when you switch to **Design mode**. 

    {{< figure src="/attachments/partners/siemens/3d-viewer/widgetoutsidecontainer3d-structuremode.jpg" alt="widgetoutsidecontainer3d-structuremode" class="no-border" >}}

* One **Container3D** widget can only contain one **Viewer** widget. If multiple Viewer widgets are placed inside a Container3D widget, you will see error message in **Design mode**. 
* The **Viewer** widget is used to display a 3D model. All other 3D widgets (except the **Uploader** and **Container3D** widgets) need a Viewer widget present on the page to interact with.
* Supports the JT format (version 9 and above).
* Before uploading a shattered JT *.zip* file, make sure you are using UTF-8 encode to zip the JT files. For example, if you are using 7-Zip, make sure you enter *cu* in **Parameters**.

    {{< figure src="/attachments/partners/siemens/3d-viewer/shatteredjt-utf8.png" alt="shatteredjt-utf8" class="no-border" >}}

## Prerequisites

3D Viewer version 4.0.0 or above can be used with Studio Pro version [10.0.0](/releasenotes/studio-pro/10.0/) or above.

For more information about the requirements for other releases, see the releases history in the [component page](https://marketplace.mendix.com/link/component/118345) in the Marketplace.

## Read More

* Academy course: [Build a 3D Model Inspection App](https://academy.mendix.com/link/paths/115/Build-a-3D-Model-Inspection-App)
