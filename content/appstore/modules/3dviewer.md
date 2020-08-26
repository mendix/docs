---
title: "3DViewer"
#category: "Modules"
#parent: "Enter the parent document filename of this document if necessary (for example, "design-the-architecture"); if there is a category, remove this parent line"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
#description: "3D Visualization provides a viewing capability of JT models with flexible combination of 3D Visualization Widgets. You can view and operate the model, list model product structure tree, and take advanced operations like make measurement and sectioning in the 3D Visualization Widgets."
#tags: ["3DVisualization", "CAD", "app store", "app store component", "platform support"]
---

## 1 Introduction

The [3DViewer](https://appstore.home.mendix.com/link/app/114764/) module lets you upload, load, visualize and operate on 3D JT files in your web applications. The module contains Java actions, JavaScript actions, domain models, nanoflows, micro-flows and a set of 3D widgets that enable you build app to work with JT models . The module include whole functionalities and integrations that can be very helpful when you are building your own 3D applications. All you need to do is drag and drop items and configure them. This avoids building 3D rendering liba. 
### 1.1 Typical Use Cases 
You can use the module when you want to upload, store and visualize 3D JT models in your application, and perform some basic operations such us  model product structure tree, PMI Tree.
### 1.2 Features 
The module consists of micrflow actions, xxxxxx that enables doing the following: 
 (Version 1)
- Displays JT files (both shattered and monolithic)
- Product Structure Navigation and part search
- Zoom, rotate, fit all
- Ability to turn parts on and off
- Displays PMI
- Ability to select and deselect parts
- Display Model Views
- Loading models from VisService, Teamcenter, application server file system
- Display part/assembly properties
- Quick intuitive controls to nagivate a product structure 
- Create 3D cross sections
- Examine your model from preset viewing angles 

Visualization Tools Available: (Version 2)
- 3D Navigation (Rotate and zoom 3D Models)
- 3D PS (Navigate product structure trees)
- 3D PMI (View PMI in your model)
- 3D Selection (Select parts and pick part features)
- 3D Section (Create 3D cross sections)
- 3D Standard Views (Examine your model from preset viewing angles)

### 1.3 Dependencies
3DViewer module uses some APIs provided by Teamcenter Connector module v2.1.0 to enable searching and loading model from Teamcenter:
* [Teamceneter Connector](https://appstore.home.mendix.com/link/app/111627/)

### 1.4 Limitations

**This how-to will teach you how to do the following:**

* Create...
* Build...
* Configure...

## 2 Prerequisites

{If there are no prerequisites, leave this section out}

Before starting this how-to, make sure you have completed the following prerequisites:

* Register a SAM account
* Create a group called VisualizationUser
* Create a policy
* Attach the policy to the group
* Create a user belongs to the group
* Generate its `accessKey` and `secretAccessKey`

## 3 Installation

1. Import the 3DViewer module into your app project
2. Download Teamcenter Connector module v2.1.0 into your app project
3.  Map 'Administrator' and 'User' module role of above 2 modules to the applicable user roles in your app.
4.  Add the **Startup** microflow to your navigation structure. Set this microflow as `After startup` step in project settings. 

## 4 Configuration

Some constants are needed in the startup microflow.  This microflow will provide connectivity to the backend service, and will be set as "After startup" step in project settings, which means this microflow will automatically be executed after the application has been started up.

Therefore at least 2 constants need to be set, `SamAccessKey` and `SAMSecretAccessKey`. Simply go to `Project -> Settings->Configurations tab->Edit-> Constants tab-> New -> Select contants in Viewer3D module-> Set SamAccessKey and SAMSecretAccessKey respectively.`

## 5 {Title of Section Using Present Participle Verb/Gerund}

To {do this task}, follow these steps:

1. {Step 1}
2. {Step 2}

![](attachments/{sub-folder with same name as doc file}/{image filename}.png)

### 3.1 {Title of Sub-Section}

{Use sub-sections for more detail.}

## 6 3D Widgets

These are the widgets include in this module along with links to their configuration details.

| Widget                                          | Description                                                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [Container3D](https://xxx)                      | Where every 3D widgets should be placed in to get the shared context .                                              |
| [PMI Tree](https://xxx)                         | Provides a hierarchical tree display of a model's product manufactoring information, model views and design groups. |
| [PS Tree](https://xxx)                          | Provides a hierarchical classification of the items which form a product.                                           |
| [Sectioning](https://xxx)                       | Provides default animations for contents and widgets.                                                               |
| [Tool bar item camera mode](https://xxx)        | Provides ability to control the apperance of surface objects displayed in the view, The option determine whether surface objects are represented on the display by facet geometry, edge geometry |
| [Tool bar item camera orientation](https://xxx) | Provides default animations for contents and widgets.                                                               |
| [Tool bar item explode slider](https://xxx)     | The explode slider allows you to create an exploded view of your assembly                                           |
| [Tool bar item fit all](https://xxx)            | Provides capability to scale the model to fit within the viewing window                                             |
| [Tool bar item render mode](https://xxx)        | Provides default animations for contents and widgets.                                                               |  | [Tool bar item selection mode](https://xxx) | Provides capability to |
| [Uploader](https://xxx)                         | Enables user to upload their own model to be viewed in browser or the app.                                          |
| [Url image viewer](https://xxx)                 | Provides display of model thumbnail.                                                                                |
| [Viewer](https://xxx)                           | Provides viewing window of your 3D Model when you open a model, zoom or rotate                                      |

## 7 Read More
* {Link 1}
* {Link2} – {an explanation when necessary especially if this is a third-party link}

{Make sure this section contains a bulleted list only with explanations where necessary. Do not just repeat cross-references you used throughout the document, but list useful supplementary links here.}

