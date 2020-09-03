---
title: "3DViewer"
#category: "Modules"
#parent: "Enter the parent document filename of this document if necessary (for example, "design-the-architecture"); if there is a category, remove this parent line"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
#description: "3D Visualization provides a viewing capability of JT models with flexible combination of 3D Visualization Widgets. You can view and operate the model, list model product structure tree, and take advanced operations like make measurement and sectioning in the 3D Visualization Widgets."
#tags: ["3DVisualization", "CAD", "app store", "app store component", "platform support"]
---

## 1 Introduction

The [3DViewer](https://appstore.home.mendix.com/link/app/114764/) module lets you upload, visualize and operate on 3D JT files in your web applications. The module contains Java actions, JavaScript actions, domain models, nanoflows, micro-flows and a set of 3D widgets that enable you build app to work with 3D models (JT, ) . The module include whole functionalities and integrations that can be very helpful when you are building your own 3D applications. All you need to do is drag and drop items and configure them. This module does the heavylifting job for you so you don't have to build from scratch. 

### 1.1 Typical Use Cases

You can use the module when you want to upload, store and visualize 3D JT models in your application, and perform some basic operations such us  model product structure tree, PMI Tree.

### 1.2 Features

The module enables you to do the following:

- Display JT files
- Quick intuitive controls to navigate a product structure
- Zoom, rotate, fit all
- Ability to turn parts on and off
- Display PMI
- Ability to select and deselect parts
- Display Model Views
- Loading models from different data sources (Mendix database, Teamcenter)
- Display part/assembly properties
- Create 3D cross sections
- Examine your model from preset viewing angles

### 1.3 Dependencies

If you want to visualize models stored in Teamcenter, Teamcenter Connector module v2.1.0  is required for 3DViewer module to connect and load model from Teamcenter:
* [Teamceneter Connector](https://appstore.home.mendix.com/link/app/111627/)

### 1.4 Limitations

- **Container3D** widget acts as a context sharing container for other 3D widgets, therefore every other 3D widgets need to be put inside **Container3D** widget.
- One **Container3D** widget can only contain one **Viewer** widget

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

### View model using Mendix database as data source

No prerequisites needed.

### View model using Teamcenter as data source

Download Teamcenter Connector module from Mendix App Store

## 3 Installation

If you app does not have the **3DViewer** module, it is available from the Mendix App Store [here](httpt://w). Follow the instructions in [How to Use App Store Content in Studio Pro](https://docs.mendix.com/appstore/general/app-store-content) to import it into your app.

1. Import the 3DViewer module into your app project.
2. (Optional)Download Teamcenter Connector module v2.1.0 into your app project
3.  Map 'Administrator' and 'User' module role of installed modules to the applicable user roles in your app.
4.  Add the **Startup** microflow to your navigation structure. Set this microflow as `After startup` step in project settings.

## 4 Configuration

### 4.1 Initializing the 3DViewer Module on App Startup

To automatically start this  module, create a "Startup" microflow, add **VisServerAction** java action to the microflow, set return type as Boolean ,value = true. **Startup** microflow needs to be set as the startup microflow (via **Project** > **Settings** > **Server** > **After startup**). 

## 5 3D Widgets

These are the widgets include in this module along with links to their configuration details. For more details, please see [3DViewer widgets]

| Widget                                          | Description                                                                                                                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Container3D](https://xxx)                      | Where every 3D widgets should be placed in to get the shared context .                                                                                                                           |
| [PMI Tree](https://xxx)                         | Provides a hierarchical tree display of a model's product manufactoring information, model views and design groups.                                                                              |
| [PS Tree](https://xxx)                          | Provides a hierarchical classification of the items which form a product.                                                                                                                        |
| [PS Tree Table](https://xxx)                    | A configurable tree table to display attributes of your choice.                                                                                                                                  |
| [Sectioning](https://xxx)                       | Provides default animations for contents and widgets.                                                                                                                                            |
| [Tool bar item camera mode](https://xxx)        | Provides ability to control the apperance of surface objects displayed in the view, The option determine whether surface objects are represented on the display by facet geometry, edge geometry |
| [Tool bar item camera orientation](https://xxx) | Provides default animations for contents and widgets.                                                                                                                                            |
| [Tool bar item explode slider](https://xxx)     | The explode slider allows you to create an exploded view of your assembly                                                                                                                        |
| [Tool bar item fit all](https://xxx)            | Provides capability to scale the model to fit within the viewing window                                                                                                                          |
| [Tool bar item render mode](https://xxx)        | Provides default animations for contents and widgets.                                                                                                                                            |
| [Tool bar item selection mode](https://xxx)     | Provides capability to select on model part, edge, face, body.                                                                                                                                   |
| [Uploader](https://xxx)                         | Enables user to upload their own model to be viewed in browser or the app.                                                                                                                       |
| [Viewer](https://xxx)                           | Provides viewing window of your 3D Model when you open a model, zoom or rotate                                                                                                                   |
## 6 Using 3DViewer

3DViewer mainly provides a set of widgets to visualize JT models and a set of nanoflows, java actions to bring in the data.
Given that you start from a blank app template in Mendix Studio Pro, you can follow the instructions below.

### 6.1 To upload 3D JT model in browser and view right away, follow these steps:

1. Place a **Container3D** widget in home page
2. Put **Uploader** widget and **Viewer** widget into **Container3D** widget, give them a layout
3. Set height of **Viewer** widget. (Toggle to see the preview)
4. Create an Entity called **UploadedModel** in app module Domain Model.
5. Wrap **Uploader** widget and **Viewer** widget inside a new **DataView** widget. 
6. Create a nanoflow **CreatedUploadedModel** and set this as data source of **DataView**
7. Pass uploaded model `Model ID` and `Model Souce Type` from **Uploader** widget to **Viewer** widget.

Run Locally, you can now upload JT file and view directly in the browser.

![](attachments/{sub-folder with same name as doc file}/{image filename}.png)

Additionally, you can put other 3D Widgets into the page to add more functionality to this simple demo, to perform more operations on the model.

### 6.2 Manage models

Usually you will need to manage the models that are uploaded and stored in the data storage. 3DViewer provide **GetModelList** and *DeleteModel* nanoflows to help you build model data management functionality into your app.

### 6.2.1 Build model list

Follow these steps:

1. Copy **GetModelList** nanoflow to your app module.  Depending on where you want to pull model from, you can customise the input parameter `SourceType`.
2. Add a popup page to display modellist on button click or other event of your choice.
3. Place a **ListView** widget in Popup page, set nanoflow **GetModeList** as Data Source 

### 6.2.2 Delete model

There might be some models that you don't want in the database. You can delete them too. **DeleteModel** nanoflow is provided to achieve this. Follow these steps:

1. Copy **DeleteModel** nanoflow to your app module.  
2. For model list item, add a **Delete** button
3. Set Onclick Event of **Delete** button to **DeleteModel**.

### 6.2.3 Open Model from Model list

Now that you are able to get a list of model and also delete them, you also want to click on a model in the model list and visualize it.

As Viewer Widget need `Model ID` and `Model Source Type` to visualize a model, you will need to pass at least these two value from `ModelDocuement` to the Viewer Widget

### 6.3 Handle Viewer  events

Multiple events can be picked up by Viewer widget and can be used by you to build your customized event handling logic. 

Mainly 3 types of events can be picked on Viewer Widget:

**On Selection Change**:By selecting one attribute to set SelectionSet, you can get information of selected part.  
**OnError**: By selecting one attribute to set OnError event to, you can pick up error exposed by Viewer.  
**On Progress Change**: By selecting one attribute to set Progress value to, you can get the current loading status and loading percentage of model, product structure tree, PMI tree. 


### 6.4 Load Model from Teamcenter
To be added when TC is separated from current module.

## 7 Read More
* {Link 1}
* {Link2} – {an explanation when necessary especially if this is a third-party link}

{Make sure this section contains a bulleted list only with explanations where necessary. Do not just repeat cross-references you used throughout the document, but list useful supplementary links here.}
