---

## 1 Introduction

The 3D Viewer app service lets you upload, visualize, and operate on 3D JT files in your web applications, using Mendix File Storage to store models. The app service contains out-of-the-box Java actions, JavaScript actions, domain models, nanoflows, microflows, and a set of 3D widgets that enable you to build apps to work with 3D models via the JT format. The app service includes whole functionalities and integrations that can be very helpful when you are building your own 3D applications. All you need to do is drag and drop items and configure them.

{{% todo %}}[Add link to component]{{% /todo %}}

This app service does the heavy-lifting for you so you do not have to build a 3D-rendering engine from scratch.

Here is an overview of what the 3DViewer contains:

| Category | Name |
| -------- | ---- |
* Perform 3D measurement on distance, angle, area, radius and and length
  
### 1.3 Limitations {#limitations}

The 3D Viewer app service includes a few 3D widgets. These are the limitations on how these widgets should be placed:

* The **Container3D** widget acts as a context-sharing container for other 3D widgets. Therefore, every other 3D widget (except **Uploader** widget)needs to be put inside the Container3D widget. If 3D widgets are placed outside of the Container3D widget, you will see error in [Design mode](/refguide/page#design-mode).
* One **Container3D** widget can only contain one **Viewer** widget. If multiple Viewer widgets are placed inside a Container3D widget, you will see error message in [Design mode](/refguide/page#design-mode).
* **Viewer** widget is used to display a 3D model, all other 3D widgets (except **Uploader** widget and **Container3D** widget) needs a **Viewer** widget present on the page to interact with.

Currently, only JT models with version 9 and above are supported.

## 2 Installation

Follow the instructions in [How to Use App Store Content in Studio Pro](../general/app-store-content) to import the app service module into your app.

![import-3dviewer](attachments/3d-viewer/import-3dviewer.jpg)
After importing, you need to map the **Administrator** and **User** [module roles](/refguide/module-security#module-role) of the installed modules to the applicable [user roles](/refguide/user-roles) in your app.

## 3 Initializing the 3D Viewer App Service on App Startup

To automatically start 3DViewer when app starts, create a **Startup** microflow, add the **Viewer3D/USE_ME/VisServerAction** Java action to the microflow, make sure the java action parameter **Http endpoint** is set to `Expression:@Viewer3D.HttpEndpoint`,  then set the return type of this microflow as **Boolean** with a **Value** of **true**. As the microflow which is set as the Afterstartup microflow needs a Boolean return value.

![startupmicroflow](attachments/3d-viewer/startupmicroflow.jpg)

You need to set this microflow as the after-startup step via **Project Settings** > **Runtime** > [After startup](/refguide/project-settings#after-startup):

![afterStartup](attachments/3d-viewer/afterstartup.jpg)

## 4 3DViewer content

### 4.1 Predefined Entity
| ModelName    | Name of a model.                                                                                                                                                                                                                                                          |
| Source       | Indicates where the model is from. Currently it has two values:**Mendix** and **Teamcenter**. When the source is **Mendix**, it indicates the model is from Mendix file storage, when the source is **Teamcenter**, it indicates the model is from a Teamcenter instance. |
| Author       | Indicates the author of the model.                                                                                                                                                                                                                                        |
| CreationDate | For models stored in Mendix file storage, the **CreationDate** corresponds to the time the JT model is first uploaded to the file storage. For models stored in Teamcenter, the **CreationDate** indicates the creation date of this model revision.                      |
| FileSize     | The size of the model in Byte.                                                                                                                                                                                                                                            |
| FileType     | The 3D model format. Currently only the JT format is supported.                                                                                                                                                                                                           |
| Status       | Used specifically for models uploaded and stored in Mendix file storage. The **Status** has 3 values: Complete, InProgress,Error, indicating if uploading of a model to Mendix file storage is Complete, or the uploading is still in progress, or the upload fails.   |  |
| ErrorReason  | Indicates the reason that causes a model upload error.                                                                                                                                                                                                                    |

The **Pagination** entity serves as an input parameter of the **GetModelListFromMendix** nanoflow. It allows you to paginate the model list returned by the nanoflow. If the values of the **Pagination** attributes are not specifically set, **GetModelListFromMendix** will return a full list of the models.

![pagination](attachments/3d-viewer/pagination.jpg)

### 4.2 Constants

The **HttpEndpoint** constant with the default value **visualization** is used to restrict value of parameter **HttpEndpoint** of the **Viewer3D/USE_ME/VisServerAction** Java action.

The **ModelSourceType** constant with the value **Mendix** is used to signify the model source, you can use this constant to restrict the value of parameter **Data source** in Uploader widget, the parameter **Model source type** in Viewer widget, or the value of Attribute **Source** in ModelDocument entity.

The **LicenseToken** constant is used to provide valid 3DViewer license token for the app that uses 3DViewer to be successfully deployed to Mendix Cloud. As 3DViewer is a commercial product and subject to a subscription fee, to be able to use 3DViewer functionalities in a deployed app, you will need a license token and set the value of constant **LicenseToken** to the license token in the deployment environment setting.

If you build and run an app that uses 3DViewer locally in studio pro, you do not need to provide a value for **LicenseToken** constant, just leave it empty. Making is always free!

For how to request and use a license token, please see [Obtain 3DViewer LicenseToken to deploy your app](#8-obtain-3dviewer-licensetoken-to-deploy-your-app) for more details.

### 4.3 Microflow

The **DeleteModelFromMendix** microflow takes a **ModelDocument** object as an input parameter and deletes the corresponding model stored in the Mendix file storage.

![deletemodelfrommendix](attachments/3d-viewer/deletemodelfrommendix.jpg)
	* On the **General** tab:  
	 **Show coordinate system** determines if a coordinate system will appear at the bottom-left of the viewer  
	 **Show navigation cube** determines if a navigation cube will appear at the top-tight corner of the viewer  
	 **Show tooltip** determines if a tooltip will pop up when you click on the model part; this accepts a Boolean value of **false** or  **true**  
	 **Automatically load parts** determines if the model part will be loaded into Viewer automatically; if set to **Yes**, the model will be automatically loaded as long as the Viewer receives the **Model ID** and **Model source type** values; if set to **No**, the model will only be loaded into the Viewer when triggered from the PS Tree part toggling, in this use case, you will need to add PS tree widget so you can trigger part loading by clicking on the PS tree.  
    ![viewer-general](attachments/3d-viewer/viewer-general.jpg)  
    * On the **Events** tab:  
     **On selection change** - by binding a String type attribute to the **Selection** property, you can use this attribute as an input parameter to add action to trigger when selection changes on the viewer.  
	 **On error**- by binding a String type attribute to the **Error** property, you can obtain the error message raised by viewer and add custom actions to trigger when error arises.  
	 **On progress change** - by binding a String type  attribute to **Progress status** property, you can obtain the current model loading status.  By binding a Decimal type attribute to **Progress percentage** property, you can obtain the current model loading percentage. You can also add custom actions triggered by this change.  
	 **On load** - by binding a Boolean type attribute to the **Loaded** property, you will be able to know if the product structure is loaded. You can also add custom actions triggered by this change.  
    ![viewer-events](attachments/3d-viewer/viewer-events.jpg)  
	 

These are the widgets that have an operation panel that contains an interactive item for the end-user to operate on:

| Widget         | Description                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PS tree        | Provides a hierarchical tree view of the items that form a model. By toggling the tree node, the end-user can control which model parts will be loaded into Viewer.    |
| PS tree Table  | A configurable tree table to display product structure of a model and other model attributes of your choice.                                                           |
| PMI tree       | Provides a hierarchical tree display of a model's product manufacturing information, model views, and design groups.                                                   |
| Section view   | Enables creating a section cut on the model and provides a section view from various angles.                                                                           |
| Markup builder | Enables creating 2D markup on a model and saving the annotated screenshot. Snapshots that contain 2D markup will be saved along with the model in Mendix file storage. |
| Measurement    | Enables performing measurements on 3D models including measuring Distance, Angle, Line length, Radius, Area                                                            |

Each panel widget should be placed in a **Container3D** widget. A **Viewer** widget with the right data source should also be in the same **Container3D** widget.

* **PS Tree** – On the **General** tab, the following options are available:
	* **Expand all** determines if the model's product structure tree should be fully expanded at the initial load
	* Use **Show search** to toggle a search bar that enables the end-user to enter a part name and search for the part in the PS Tree
	* **Show lead structure** determines if the sub-part data should be displayed in the PS Tree
![pstree-general](attachments/3d-viewer/pstree-general.jpg)  
* **PS Tree Table** – compared to the **PS Tree** widget, this widget adds an additional configurable property **Column**, you can expand the table by adding columns and specifying the property to be displayed in this column. Example predefined properties are: Volume, Mass, Units, HasPMI, Density. If you want to display other properties other than the predefined properties in the list, you can also add other property by specifying valid property defined in the model.
![pstreetable-general](attachments/3d-viewer/pstreetable-general.jpg)  
* **PMI tree** - On the **General** tab, the property **Expand all tree nodes** determines if all tree nodes are expanded by default. When set to `yes`, you will see a PMI tree fully expanded by default on this widget load; When set to `no`, PMI tree will not fully expand by default. 
![pmitree-general](attachments/3d-viewer/pmitree-general.jpg)
* **Section view** - Place it inside of a Container3D widget, a Viewer widget should be present in the same Container3D widget so you can add section plane on the model. No specific configuration is needed. With this widget, you can add, delete and clear section planes to the model on your desired direction axis and clipping mode. For details on how Section View behaves in an app. Please see [Create 3D Section](#71-create-3d-section)
* **Markup builder** - 
	* On **General** tab, by setting property **Enable** to true or false, you can switch on and off the markup mode, when set to `true`, model will be locked to a 2D dimension and won't react to mouse rotate, when set to `false`, model will be unlocked and return to rotatable state; another property is **Markup color**, it allows you to set color of markup annotation. Valid values are [CSS Legal color value](https://www.w3schools.com/CSSref/css_colors_legal.asp), for example, RGB value, predefined color names, hexadecimal color values.
    ![markup-general](attachments/3d-viewer/markup-general.jpg)
	* On **Event** tab, by binding a boolean type attribute to **Save** property, you will be able to obtain save status of the markup image after user click the Save button on the markup builder's panel, and add custom actions, such as show pop up message, to it. When the attribute values changes to `true`, it means the markup image associated with model is successfully saved in Mendix file storage; when the attribute value is `false`, it means the save is not successful. By setting **Action**, you can choose to trigger an action based on the value of **Save** status. 
    ![markup-events](attachments/3d-viewer/markup-events.jpg)
    
* **Measurement** - Place it inside of a Container3D widget, a Viewer widget should be present in the same Container3D widget so you can use measurement options provided in Measurement widget to perform measurement on the model. No specific configuration is needed. With this widget, you can add, delete and clear sections planes to the model on your desired direction axis and clipping mode. For details on how to perform measurement on a 3D model. Please see [Perform 3D Measurement](#72-perform-3d-measurement)

#### 4.6.3 Toolbar widgets

These widgets do not require additional configuration. Simply place them in a **Container3D** widget with the accompanying **Viewer** widget.

| Widget                           | Description                                                                                                                                                                                               |
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
	![runlocally-uploadandview](attachments/3d-viewer/runlocally-uploadandview.jpg)

### 6.2 Displaying Model Loading Progress with Progress Bar Widget

When the end-user is uploading or loading a model, they may want to know the uploading and loading progress.

Uploading progress in the **Uploader** widget can seen in the uploader panel :

![uploader-uploadedstatus](attachments/3d-viewer/uploader-uploadedstatus.jpg)

Loading progress in the **Viewer** widget can be obtained via the **Progress status** and **Progress percentage** attributes. 

Follow these steps to display the model loading progress:
	![progressbar-progressattribute](attachments/3d-viewer/progressbar-progressattribute.jpg)  

6. Run your app locally. You can see the real-time model loading progress:

	![runlocally-loadingprogress](attachments/3d-viewer/runlocally-loadingprogress.jpg)


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

Now you are able to get a list of models, select a list item to open a model, and delete the model.

### 6.5 Handling Viewer Events

Multiple events can be picked up by the **Viewer** widget and can be used to build your customized event handling logic.

There are four main types of events that can be picked up on the **Viewer** widget, here is an example setting:

![viewer-viewerevents](attachments/3d-viewer/viewer-viewerevents.jpg)

* **On Selection Change** – by selecting one attribute to set **SelectionSet**, you can get information on the selected part. For this you might need to work with Viewer APIs, if you have further inquiries on how to use Viewer APIs, please contact [Mendix Support](https://support.mendix.com/hc/en-us) and raise a ticket against 3DViewer development team.
* **OnError** – by selecting one attribute to set the **On error** event, you can pick up an error exposed by the **Viewer**
* **On Progress Change** – by selecting one attribute for the **setProgress** value, you can get the current loading status and the loading percentage of the model, product structure tree, and PMI tree
* **On load Change** – by selecting one attribute for the **loaded** value, you can get the current loading status of product structure tree.

## 7 Others

### 7.1 Create 3D Section

When a model is loaded in the viewer, the Section View widget enables you to inspect the interior structure of a model by adding standard section planes, delete a section plane, clear all section planes, position plane, clip away parts.

Here is a list of UI operations within the Section View widget.

![sectionview-designmode](attachments/3d-viewer/sectionview-designmode.jpg)  
**Action**:

Add - Add a section plane. First select an axis along which you would like to section the model, then click Add, you will see a section plane of the desired axis is added to the scene, the default position of the newly added section plane is in the middle of the bounding box of the direction selected.

Delete - Delete a selected section plane. Click on the edge of the section plane to select it, when selected, the section plane edges are highlighted in yellow color, then click Delete, this section plane will be deleted.

Area: Measure the area of a surface.  

**Dimension Controls**  
Remove: Select one measurement result, click Remove, the selected measurement result will be removed from the scene.  
Clear: Clear all measurement results in the scene.

## 8 Obtain 3DViewer LicenseToken to deploy your app

3DViewer is a commercial Mendix product that's subject to purchase and subscription fee. To deploy your app that uses 3DViewer successfully to the cloud, you will need provide a valid `LicenseToken` as environment variable, otherwise 3DViewer widget features may not work in your app.

### 8.1 Decide if you need to request a LicenseToken

If you use 3DViewer in your app, and you just need to run your app locally, for testing and trial purpose, no plan for deploy the app, you will not need to request a `LicenseToken`.

If you plan to use 3DViewer in your app, and decide to deploy your app to the cloud, then you will need to request a `LicenseToken`. 

### 8.2 Do I have to pay to get a LicenseToken

We provide one-month free trial. After the trial period ends, you are subject to pay for subscription fee.

### 8.3 How to request a LicenseToken

For the time being, to request free-trial and offical subscription `LicenseToken`, please provide **your company legal name**, **your email address**, **your full name**, and send these information to DIS_MXAWS_3DViewer_Support@mendix.com. You may be asked to provide more information. In the end you will receive a `LicenseToken` with an agreed expiration date.

### 8.4 How to configure LisenseToken for your app deployment

#### 8.4.1 Configure LicenseToken in Mendix Studio Pro

In Mendix Studio Pro, go to Pojrect Settings, in Configurations Tab, click to Edit, under Constants tab, create a new Constant with the predefined constant `Viewer3D.LicenseToken`, fill the Value with your obtained LicenseToken. Click OK to confirm the settings.
![licensetoken-inmendix](attachments/3d-viewer/licensetoken-inmendix.jpg)

Click Run to deploy your app to the cloud.

#### 8.4.2 Configure LicenseToken in Mendix Developer Portal

You can also add or update LicenseToken via Mendix Developer Portal.

![licensetoken-developerportal](attachments/3d-viewer/licensetoken-developerportal.jpg)
## 9 Loading & Visualizing a Model from Teamcenter

JT models from other data sources can also be visualized. Specifically, if you would like to load and visualize models from Teamcenter, you can use a combination of this 3D Viewer app service with the [3D Viewer for Teamcenter](3d-viewer-for-teamcenter) module to achieve this.

## 10 Read More

* [3D Viewer for Teamcenter](3d-viewer-for-teamcenter)
