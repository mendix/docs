---
title: "3D Viewer"
category: "App Services"
menu_order: 1
tags: ["3d visualization", "cad", "app store", "marketplace", "component", "platform support"]
---

## 1 Introduction

The 3D Viewer app service lets you upload, visualize, and operate on 3D JT files in your web applications, using Mendix File Storage to store models. The app service contains Java actions, JavaScript actions, domain models, nanoflows, microflows, and a set of 3D widgets that enable you build apps to work with 3D models via the JT format. The app service includes whole functionalities and integrations that can be very helpful when you are building your own 3D applications. All you need to do is drag and drop items and configure them.

{{% todo %}}[Add link to component]{{% /todo %}}

This app service does the heavy-lifting for you so you do not have to build a 3D-rendering engine from scratch.

Here is an overview of what The 3DViewer contains following:

| Category                                   | Name                                                                                                                                                                                                                                                                                      |
| :----------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Predefined Entity](#51-predefined-entity) | ModelDocument, Pagination                                                                                                                                                                                                                                                                 |
| [Constants](#52-constants)                 | HttpEndpoint, ModelSourceType                                                                                                                                                                                                                                                             |
| [Nanoflow](#54-nanoflow)                   | GetModelListFromMendix                                                                                                                                                                                                                                                                    |
| [Microflow](#53-microflow)                 | DeleteModelFromMendix                                                                                                                                                                                                                                                                     |
| [Java Action](#54-java-action)             | VisServerAction                                                                                                                                                                                                                                                                           |
| [Widgets](#55-widgets)                     | Container3D, Markup builder, PMI tree, PS Tree,  PS Tree Table, Section view, Toolbar item camera mode,Toolbar item camera orientation, Toolbar item explode slider, Toolbar item fit all, Toolbar item render mode, Toolbar item selection mode, Toolbar item snapshot, Uploader, Viewer |

### 1.1 Typical Use Cases

You can use this app service when you want to upload, store, and visualize 3D JT models in your application. You can perform some basic operations, such us navigating the model product structure tree, the **Product Manufacturing Information** (PMI) tree, creating section views and 2D Markups.

### 1.2 Features

This app service enables you to do the following:

* Display a 3D model (the JT format is currently supported)
* Use quick intuitive controls to navigate product structure
* Zoom, rotate, fit all, and pan
* Turn parts on and off
* Display PMI
* Select and clear selection of parts
* Display model views
* Load models from Mendix file storage
* Display part/assembly properties
* Create 3D cross-sections
* Examine your model from preset viewing angles
* Create 2D Markup on model and save snapshot
  
### 1.3 Limitations {#limitations}

The 3D Viewer app service includes a few 3D widgets. These are the limitations on how these widgets should be placed:

* The **Container3D** widget acts as a context-sharing container for other 3D widgets. Therefore, every other 3D widget needs to be put inside the Container3D widget. If 3D widgets are placed outside of the Container3D widget, you will see error in [Design mode](/refguide/page#design-mode).
* One **Container3D** widget can only contain one **Viewer** widget. If multiple Viewer widgets are placed inside a Container3D widget, you will see error message in [Design mode](/refguide/page#design-mode).
* The **MarkupBuilder** widget, **Tool bar** widgets only works when **Viewer** widget is added to the page.

Currently, only JT models with version 9 and above are supported.

## 2 Installation

Follow the instructions in [How to Use App Store Content in Studio Pro](../general/app-store-content) to import the app service into your app.

After importing, you need map the **Administrator** and **User** [module roles](/refguide/module-security#module-role) of the installed modules to the applicable [user roles](/refguide/user-roles) in your app.

## 3 Initializing the 3D Viewer App Service on App Startup

To automatically start this app service, create a **Startup** microflow, add the **Viewer3D/USE_ME/VisServerAction** Java action to the microflow, then set the return type as **Boolean** with a **Value** of **true**.

![startupmicroflow](attachments/3d-viewer/startupmicroflow.jpg)

You need to set this microflow as the after-startup step via **Project Settings** > **Runtime** > [After startup](/refguide/project-settings#after-startup):

![afterStartup](attachments/3d-viewer/afterstartup.jpg)

## 4 3DViewer content

### 4.1 Predefined Entity

**ModelDocument** entity is an entity that incorporates all information of a model. You can choose to inherit from this entity, set an association to the entity or copy this entity to your module.
![modeldocument](attachments/3d-viewer/modeldocument.jpg)
| Attribute    | Description                                                                                                  |
| :----------- | :----------------------------------------------------------------------------------------------------------- |
| ModelId      | An unique string to  identify a model                                                                        |
| ModelName    | A file name                                                                                                  |
| Source       | Indicate where the model is stored, 3DViewer can visualize model from Source "Mendix" or Source "Teamcenter" |
| Author       | Indicate the author of the model                                                                             |
| CreationDate | Indicate the time when model is uploaded and stored in Mendix File Storage                                   |
| FileSize     | Indicate the size of the model                                                                               |
| FileType     | Indicate the 3D model format, currently only JT format is supported                                          |
| ErrorReason  | Indicate why error occurs when loading a model                                                               |


**Pagination** entity serves as an input parameter of **GetModelListFromMendix** nanoflow. It allows you to paginate model list returned by the nanoflow. If value of **Pagination** attributes are not specifically set, **GetModelListFromMendix** will return a full list of model.
![pagination](attachments/3d-viewer/pagination.jpg)
| Attribute | Intended use                                    |
| :-------- | :---------------------------------------------- |
| Count     | Indicate which page number to fetch             |
| PageSize  | Indicate the item size of one page              |
| OffSet    | Indicate offset from the first item of the page |

### 4.2 Constants

Constant `HttpEndpoint` with value "visualization" is needed to set **VisServerAction** java action's Transport http endpoint value.

Constant `ModelSourceType` with value "Mendix" is used to signify the model source.

### 4.3 Microflow

**DeleteModelFromMendix** microflow takes a ModelDocument object as input parameter, and delete the corresponding model stored in Mendix File Storage.

![deletemodelfrommendix](attachments/3d-viewer/deletemodelfrommendix.jpg)

### 4.4 Nanoflow

**GetModelListFromMendix** nanoflow takes a Pagination object as an input to fetch model list from Mendix File Storage, and return a list of ModelDocuments as a result. Each ModelDocument represents a model that is stored in Mendix File Storage.

![getmodellistfrommendix](attachments/3d-viewer/getmodellistfrommendix.jpg)

### 4.5 Java Action

**VisServerAction** Java action is used to set up visualization server infrastructure, it is critical to realise all the functions 3DViewer provides. It is exposed as microflow actions. It is important to set app's AfterStartup microflow to call VisServerAction.

### 4.6 Widgets

#### 4.6.1 Core Widgets

These are core widgets that are required to enable visualizing 3D JT Model.

| Widget      | Description                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Container3D | A special container widget designed to put other 3D widgets in, it provides a shared context for 3D widgets to communicate with each other. |
| Uploader    | Enables you to select JT model from local machine and upload to Mendix Storage                                                              |
| Viewer      | Provides a viewing window of your 3D model                                                                                                  |

Usage:

**Container3D** - Place it in any place of a page.

**Uploader** - Place it inside Container3D widget. In **General** tab, `Progress percentage`, `Model ID` and `Data source` attributes can be used to retrieve uploading model's upload status, model ID and model source type.
![uploadergeneral](attachments/3d-viewer/uploadergeneral.jpg)

**Viewer** -  Place it inside Container3D widget. For Viewer widget to visualize a model correctly: 
- In **Data Source** tab,  `Model ID` and `Model source type` needs to be specified.
- In **Transport** tab,  make sure the HttpEndpoint is `@Viewer3D.HttpEndpoint`
- In **Appearance** tab, give the viewer a fixed height, for example, `height:600px`.Viewer widget needs to have a fixed height.

Besides, Viewer widget provides customization options to change Viewer widget's behavior. In **General** tab, `Show coordinate system` and `Show navigation cube` determines if coordinate system and navigation cube will appear in the viewer; `Show tooltip` determines if a tooltip will pop up when you click on a model part, it accepts boolean value `false` or `true`; `Automatically load parts` determines if model part will be loaded into viewer automatically, if set to yes, model will be automatically loaded into the viewer as long as Viewer receives `Model ID` and `Model source type` values, if set to no, model will only be loaded to the viewer when triggered from PS tree part toggling.

#### 4.6.2 Panel widgets

These are widgets that have an operation panel that contain interactive item for user to operate on.
| Widget         | Description                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PS Tree        | Provides a hierarchical tree view of the items that form a model. By toggling tree node, user can control which model parts will be loaded into viewer.         |
| PS Tree Table  | A configurable tree table to display the model attributes of your choice.                                                                                       |
| PMI Tree       | Provides a hierarchical tree display of a model's product manufacturing information, model views, and design groups.                                            |
| Section View   | Allows you to create a section cut on the model and provides section view from various angle                                                                    |
| Markup Builder | Allows you to create 2D markup on model and save annotated screenshot, snapshots that contain 2D markup will saved along with the model in Mendix File Storage. |

Usage :

**PS Tree** - Place it in a **Container3D** widget, a **Viewer** widget with right data source should also be in the same **Container3D** widget. In **General** tab, `Expand all` determines if model's product structure tree should be fully expanded at the initial load; use `Show search` to ggle on and off a search bar that enables user to enter part name and search part in the PS tree; `Show lead structure` determines if subpart data should be displayed in the PS tree.

**PS Tree Table** - Place it in a **Container3D** widget, a **Viewer** widget with right data source should also be in the same **Container3D** widget. Compared to **PS Tree**, **PS Tree Table** adds an additional configurable attribute for you, `Column`, it allows you to create new columns to form a tree  table view, it accepts a String with `,` to separate column names.

**PMI Tree** - Place it in a **Container3D** widget, a **Viewer** widget with right data source should also be in the same **Container3D** widget.

**Section View**: Place it in a **Container3D** widget, a **Viewer** widget with right data source should also be in the same **Container3D** widget.

**Markup Builder**: Place it in a **Container3D** widget, a **Viewer** widget with right data source should also be in the same **Container3D** widget.

#### 4.6.3 Toolbar widgets

These are widgets that don't require additional configuration. Simply place them in **Container3D** widget with accompanying **Viewer** widget.

| Widget                           | Description                                                                                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tool bar item camera mode        | Provides the ability to control the appearance of surface objects displayed in the view. The option determines whether surface objects are represented on the display by facet geometry or edge geometry. |
| Tool bar item camera orientation | Allows you to view the model from different camera orientations.                                                                                                                                          |
| Tool bar item explode slider     | Allows you to create an exploded view of your assembly.                                                                                                                                                   |
| Tool bar item fit all            | Allows you to fit all the model parts in the viewer.                                                                                                                                                      |
| Tool bar item render mode        | Allows you to toggle between different model render modes.                                                                                                                                                |
| Tool bar item selection mode     | Provides the ability to select a model part, edge, face, and body.                                                                                                                                        |
| Tool bar item snapshot           | Provides the ability to take snapshot of current viewer and save the snapshot to local machine                                                                                                            |

## 6 Using 3D Viewer  

3D Viewer mainly provides a set of widgets to visualize JT models and a set of nanoflows and Java Actions to bring in the data.

Given that you start from a blank app template in Mendix Studio Pro, you can follow the instructions below to visualize your local JT model quickly.

### 6.1 Uploading & Viewing a 3D JT Model in Your Browser

For the **Viewer** widget to visualize a JT model, two data source attributes should be set: **Model ID** and **Model source type**. To enable uploading 3D JT models and visualizing them directly on the page, a set of these attributes should be returned by the **Uploader** widget and set to that of the **Viewer** widget.

Follow these steps to configure this visualization:

1. Place a **Container3D** widget on a page.
2. Put the **Uploader** widget and **Viewer** widget into the **Container3D** widget and give them a layout.
3. Set a fixed height of the **Viewer** widget (toggle to **Design mode** to see the preview).
4. Create an entity called **UploadedModel** in your app module's domain model.
5. Wrap the **Uploader** and **Viewer** widgets inside a new [data view](/refguide/data-view).
6. Create a nanoflow, call it *CreatedUploadedModel*, and set this as data source of the data view.
7.  Create two attributes for the **UploadedModel** entity. Set them to receive the value returned from the **Uploader**'s **Data source** and **UploadModelId**:

	![uploader-uploadedmodelinfo](attachments/3d-viewer/uploader-uploadedmodelinfo.jpg)

8.  Set the data source attributes of the **Viewer** widget by setting **Model ID** to **UploadedModelID** and **Model Source Type** to **Mendix**:

	![viewer-datasourceuploaded](attachments/3d-viewer/viewer-datasourceuploaded.jpg)

9.  Set **Automatically load parts** to **Yes**, which enables loading the model automatically upon successful upload:

	![viewer-autoloadparts](attachments/3d-viewer/viewer-autoloadparts.jpg)

10. Run your app project locally. You can now upload a JT file and view it directly in the browser:

	![runlocally-uploadandview](attachments/3d-viewer/runlocally-uploadandview.jpg)

### 6.2 Displaying Model Loading Progress with Progress Bar Widget

When the end-user is uploading or loading a model, they may want to know the uploading and loading progress.

Uploading progress in the **Uploader** widget can be obtained via the **Progress percentage** property:

![uploader-uploadedstatus](attachments/3d-viewer/uploader-uploadedstatus.jpg)

Loading progress in the **Viewer** widget can be obtained via the **Progress status** and **Progress percentage** attributes. 

Follow these steps to display the model loading progress:

1. Create an entity called *PageObject*, add decimal type attribute called *LoadingProgress* with a default value of `= 0` (as the **Progress bar** widget expects a decimal value).
2. Create a nanoflow called *createPageObject* that returns a **PageObject** object.  
3. Wrap **Container3D** with a data view and set the **Data source** of the data view to the **createPageObject** nanoflow.
4.  Set the value of the **LoadingProgress** attribute by setting the **Progress percentage** property:

	![viewer-progresspercentage](attachments/3d-viewer/viewer-progresspercentage.jpg)

5.  Add the **Progress Bar** to the page and set **PageObjectLoadingProgress** as the **Progress Attribute**:

	![progressbar-progressattribute](attachments/3d-viewer/progressbar-progressattribute.jpg)  

6. Run your app locally. You can see the real-time model loading progress:

	![runlocally-loadingprogress](attachments/3d-viewer/runlocally-loadingprogress.jpg)

To display the upload loading progress, the steps are similar.

### 6.3 Utilizing More 3D Functionality

You can add more 3D widgets to the page to enable more 3D functionalities and arrange the layout of them as to your need. For example:

![structuremode-more3dwidgets](attachments/3d-viewer/structuremode-more3dwidgets.jpg)

This is the example in design mode:

![designMode-more3dwidgets](attachments/3d-viewer/designmode-more3dwidgets.jpg)

### 6.4 Managing Uploaded Models

In the previous use case, you can only visualize the model you upload.

Usually you will also need to manage the models that are uploaded and stored in the data storage. 3D Viewer provides the **GetModelListFromMendix** nanoflow and **DeleteModelFromMendix** microflow to help you build model data management functionality into your app.

#### 6.4.1 Building a Model List

The Mendix native [list view](/refguide/list-view) can be used to display the model list by following these steps:

1. Use the **View3D/USER_ME/GetModelListFromMendix** nanoflow or copy it to your app module. A list of **ModelDocument** objects will be returned after calling the nanoflow.
2. Add a [pop-up page](/refguide/page-properties#pop-up) to display the model list via a button click or another event of your choice.
3. Place a list view in the page and set the **GetModelListFromMendix** nanoflow as the **Data source**.
4. As **GetModelListFromMendix** requires a **Pagination** parameter input, wrap the list view with a data view. Then, create a nanoflow called *CreatePaginationObject* nanoflow and set that nanoflow as the list view's **Data source**.
5.  Fill in the list item with the information you are interested in:

	![openmodelpopUp-listview](attachments/3d-viewer/openmodelpopup-listview.jpg)

#### 6.4.2 Opening a Model from the Model List

Once you have the model list, you may want to click to select a model from the list and view the model. As the **Viewer** widget expects **ModelId** and **Model Source Type** to visualize a model, such information of the selected model needs to be passed to the **Viewer** widget. Since each list item is a **ModelDocument** object and this object contains various pieces of information about the selected model (including **ModelId** and **Model Source Type**), you need to pass this object to the **Viewer** widget.

Follow these steps for configuration:

1.  Define the **On click** action for the list view so as to pass the selected model to the **Viewer** widget that is present in another page (so the selected model can be loaded into the viewer). An example approach is to create an entity that is associated with the **ModelDocument** entity defined in the **Viewer3D** module's domain model. Make the object a shared object between the page the **Viewer** is in and the model list page. In this example, you are creating a **PageObject** with this home page: 

	![homepage-pageobject](attachments/3d-viewer/homepage-pageobject.jpg)

	This is the model pop-up page:  

	![openmodelpopUp-pageobject](attachments/3d-viewer/openmodelpopup-pageobject.jpg)

2.  Set the **On click** action of the model list item, then change the **ModelDocument** object with which the **PageObject** is associated to return the value so that home page can be refreshed on a **PageObject** change:

	![openselectedmodel-nanoflow](attachments/3d-viewer/openselectedmodel-nanoflow.jpg)

3. Run your app locally. You will get a simple model list where you can select which model to open and visualize it with the home-page viewer:

	![openmodellistpopup-demo](attachments/3d-viewer/openmodellistpopup-demo.jpg)

#### 6.4.3 Deleting a Model

There might be some models that you do not want in the database, so you can delete these too. The 3D Viewer app service provides the **DeleteModelFromMendix** microflow to achieve this.

Follow these steps to delete a model from the database:

1. Use the **Viewer3D/USE_M3/DeleteModelFromMendix** microflow directly or copy it to one of your app modules.
2.  **DeleteModelFromMendix** expects a ModelDocument(which represents a model stored in Mendix File Storage) as input parameter, after the successful execution, the model will be deleted from Mendix File Storage. From previous steps, you built a model list, each list item is a ModelDocument. For a model list item, add a **Delete** button:

	![deletemodel-deletebutton](attachments/3d-viewer/deletemodel-deletebutton.jpg)

3.  Create a nanoflow called *DeleteModel* and set **ModelDocument** as the input parameter. Then, call the **Viewer3D/USE_M3/DeleteModelFromMendix** microflow and commit the **ModelDocument**:

	![deletemodel-nanoflow](attachments/3d-viewer/deletemodel-nanoflow.jpg)

4. Set the **On click** event of the **Delete** button to the **DeleteModel** nanoflow.
5. Run your app locally, you should be able to delete a model by clicking "Delete".

Now you are able to get a list of models, select a list item to open a model, and delete the model.

### 6.5 Handling Viewer Events

Multiple events can be picked up by the **Viewer** widget and can be used to build your customized event handling logic.

There are three main types of events that can be picked up on the **Viewer** widget:

![viewer-viewerevents](attachments/3d-viewer/viewer-viewerevents.jpg)

* **On Selection Change** – by selecting one attribute to set **SelectionSet**, you can get information on the selected part
* **OnError** – by selecting one attribute to set the **On error** event, you can pick up an error exposed by the **Viewer**
* **On Progress Change** – by selecting one attribute for the **setProgress** value, you can get the current loading status and the loading percentage of the model, product structure tree, and PMI tree

## 7 Loading & Visualizing a Model from Teamcenter

JT models from other data sources can also be visualized. Specifically, if you would like to load and visualize models from Teamcenter, you can use a combination of this 3D Viewer app service with the [3D Viewer for Teamcenter](3d-viewer-for-teamcenter) module to achieve this.

## 8 Read More

* [3D Viewer for Teamcenter](3d-viewer-for-teamcenter)
