---
title: "3D Viewer Installation and Configuration"
url: /partners/siemens/3d-viewer/installation-configuration/
weight: 1
description: "Describes how to install and configure the 3D Viewer app service."
---

## Installation

### Obtaining a License Token {#obtain-license-token}

3D Viewer is a premium Siemens product which requires a valid purchase and commercial license for production use.

You can use 3D Viewer without a license in your local development environment with [Mendix Studio Pro](/releasenotes/studio-pro/). For details, refer to [Run Locally or Preview](/deployment/#run-locally-or-preview).
However, a license is required to deploy your application to any server environment. This includes:

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* Self-managed or [on-premises](/developerportal/deploy/on-premises-design/) infrastructures, such as:    

    * [Kubernetes](/developerportal/deploy/private-cloud/)
    * [Docker](/developerportal/deploy/docker-deploy/)
    * [Azure](/developerportal/deploy/mendix-on-azure/)
    * [SAP BTP](/developerportal/deploy/sap-cloud-platform/)
    
For details, refer to [Deploying Apps](/deployment/).

To request a trial license token, click the **Contact Us** button on the [3D Viewer Marketplace page](https://marketplace.mendix.com/link/component/118345) or send an email to MX3DViewerHelp.sisw@siemens.com.

Once you have obtained a license token, configure it as described in [Configuring the License Token](#configure-license-token).

### Installing the Component in Your App

To download and install the 3D Viewer app service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/use-content/#import) section in *Using Marketplace Content*. After the app service is installed, you can see a collection of ready-to-use items under the **Viewer3D** folder and a collection of 3D widgets in the **Add-on widget** category in the **Toolbox**.

## Initializing on App Startup

To use the 3DViewer features, your app needs to be bound to the 3D Viewer service. This is achieved by executing a microflow when the app starts. The 3D Viewer contains a Java action called **VisServerAction**, which can start the 3D Viewer service for you. Call this Java action from your app's after-startup microflow, and this will automatically start the 3D Viewer when the app starts (running after startup usually means you want to run a specific tool all the time.).

If you app does not have an after-startup microflow set, follow these steps:

1. Create a **Startup** microflow and add the **Viewer3D/USE_ME/VisServerAction** Java action to it.
2. Set the return type of the microflow to **Boolean** with a **Value** of **true**.
3. Set this microflow as the **After startup** step via **App Settings** > **Runtime** > [After startup](/refguide/app-settings/#after-startup).

If your app already has a microflow set to execute after startup, you need to extend it with the **Viewer3D/USE_ME/VisServerAction** Java action and configure it as described in the above steps. 

## Configuration

### Predefined Entities {#predefined-entities}

The **ModelDocument** entity is a conceptual entity that incorporates all the information of a model. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

{{< figure src="/attachments/partners/siemens/3d-viewer/modeldocument.jpg" alt="modeldocument" class="no-border" >}}

| Attribute | Description |
| --- | --- |
| **ModelId** | A unique string to identify the model. |
| **ModelName** | The name of the model. |
| **Source** | Indicates where the model is from. Currently it has two values: **Mendix** and **Teamcenter**. When the source is **Mendix**, it indicates the model is from Mendix file storage. When the source is **Teamcenter**, it indicates the model is from a Teamcenter instance. |
| **Author** | The author of the model. |
| **CreationDate** | For models stored in Mendix file storage, the **CreationDate** corresponds to the time the JT model is first uploaded to the file storage. For models stored in Teamcenter, the **CreationDate** indicates the creation date of this model revision. |
| **FileSize** | The size of the model in bytes. |
| **FileType** | The 3D model format. |
| **Status** | Used specifically for models uploaded and stored in Mendix file storage. The **Status** has three values: **Complete** (indicates the uploading of a model to Mendix file storage is complete), **InProgress** (indicates the uploading is in progress), and **Error** (indicates the uploading failed). |
| **ErrorReason**  | The reason for the model upload error.|

The **Pagination** entity serves as an input parameter of the **GetModelListFromMendix** nanoflow. This allows you to paginate the model list returned by the nanoflow. If the values of the **Pagination** attributes are not specifically set, **GetModelListFromMendix** will return a full list of the models.

{{< figure src="/attachments/partners/siemens/3d-viewer/pagination.jpg" alt="pagination" class="no-border" >}}

| Attribute | Intended Use |
| --- | --- |
| Count | Indicates which page number to fetch. |
| PageSize | The item size of one page. |
| OffSet | The offset from the first item of the page. |

The **Markup** entity is a **System.Image** type of entity and denotes a markup image.

The **MxModelDocument** and **MxChildDocument** entities are internal entities, and in most cases, you will not need them. 

### Constants {#constants}

For Studio Pro 8.15, the **HTTPEndpoint** constant with the default value **visualization** is used to restrict the value of the **Endpoint** parameter used in the **Viewer3D/USE_ME/VisServerAction** Java action.

For Studio Pro 9.4 and above, **HTTPEndpoint** is renamed **Endpoint**, and you do not need to configure this constant.

The **ModelSourceType** constant with the value **Mendix** is used to signify the model source. You can use this constant to restrict the value of the **Data source** parameter in the **Uploader** widget, the **Model source type** parameter in the **Viewer** widget, or the value of the **Source** attribute in the **ModelDocument** entity.

The **LicenseToken** constant provides a valid license token for an app that uses this app service. As 3D Viewer is a commercial product, you need to have a valid license token and configure it correctly. For details on how to get and configure a license token, see the [Obtaining a License Token](#obtain-license-token) and [Configuring the License Token](#configure-license-token) sections.

### Microflow {#microflow}

The **DeleteModelFromMendix** microflow takes a **ModelDocument** object as an input parameter and deletes the corresponding model stored in the Mendix file storage.

{{< figure src="/attachments/partners/siemens/3d-viewer/deletemodelfrommendix.jpg" alt="deletemodelfrommendix" class="no-border" >}}

The **DownloadMarkup** microflow takes a **Markup** object as input parameter and downloads the image to a local directory.

{{< figure src="/attachments/partners/siemens/3d-viewer/downloadmarkup.jpg" alt="downloadmarkup" class="no-border" >}}

### Nanoflow {#nanoflow}

The **CreateModelDocumentFromFileDocument** nanoflow takes a **FileDocument** object as an input parameter to create a **ModelDocument** object to represent a user model file stored as the entity of **System.FileDocument** or its specialization. As the Viewer widget is prebuilt to take a **ModelDocument** object as the data source, this nanoflow allows you to get and visualize a model from your existing file storage.

{{< figure src="/attachments/partners/siemens/3d-viewer/CreateModelDocumentFromFileDocument.jpg" alt="CreateModelDocumentFromFileDocument" class="no-border" >}}

The **GetModelListFromMendix** nanoflow takes a **Pagination** object as an input parameter to fetch the model list from Mendix file storage and returns a list of **ModelDocuments** as a result. Each ModelDocument represents a model that is stored in the Mendix file storage.

{{< figure src="/attachments/partners/siemens/3d-viewer/getmodellistfrommendix.jpg" alt="getmodellistfrommendix" class="no-border" >}}

The **GetMarkupsFromMendix** nanoflow takes a **ModelDocument** object as an input parameter to fetch the markup images associated with this model and returns a list of **Markup** object as a result. Each markup represents an image that is stored in the Mendix file storage.

{{< figure src="/attachments/partners/siemens/3d-viewer/getmarkupsfrommendix.jpg" alt="getmarkupsfrommendix" class="no-border" >}}

### Java Action {#java-action}

The **VisServerAction** Java action is used to set up a visualization server infrastructure, which is critical for realizing all the functions that 3D Viewer provides. It is exposed as microflow actions. 

For 3D Viewer to work, you must set the app's after-startup microflow to call the **VisServerAction** Java action. 

### Widgets {#widgets}

#### Core Widgets

The **Core** widgets required to enable visualizing a 3D model are described below.

##### Container3D {#container3d}

The **Container3D** widget is a container widget designed to put other 3D widgets in (except Uploader widget, Uploader widget doesn't need to be placed within Container3D widget). It provides a shared context for 3D widgets to communicate with each other.

You can place this widget in any location of a page.

##### Uploader {#uploader}

The **Uploader** widget enables selecting one or more models from your local machine and uploading it to the Mendix file storage.

You can place this widget in any location of a page. 

On the **General** tab of the properties, the **Model ID**, and **Data source** attributes can be used to retrieve the uploading model's **Model ID** and **Model source type** values.

##### Viewer {#viewer}

The **Viewer** widget provides a viewing window of your 3D model.

Place this widget inside a [Container3D](#container3d) widget.

For this widget to visualize a model correctly, set the following properties:

* On the **Data Source** tab, configure the correct **Model ID** and **Model source type** properties:
    * Example valid **Model ID** values – the value of the ModelId attribute of a ModelDocument object, or the value of a Model ID attribute set by the Uploader widget property
    * Valid **Model Source Type** values – **Mendix** or **Teamcenter**; you can also use the **Viewer3D/USER_ME/ModelSourceType** constant
* On the **Transport** tab, make sure the **HttpEndpoint** is set to **@Viewer3D.HttpEndpoint** or **visualization**
* On the **Appearance** tab, make sure the widget has a fixed height (for example, set **Style** to **height:600px**, or make sure height of its parent is fixed); otherwise, the viewer will expand indefinitely
* On the **General** tab, there are some optional customization options for changing the widget's behavior:
    * **Viewer ID** – sets the id for the widget — this can be used later to get the viewer instance 
    * **Show coordinate system** – determines if a coordinate system will appear at the lower-left corner of the viewer 
    * **Show navigation cube** – determines if a navigation cube will appear at the upper-right corner of the viewer
    * **Show tooltip** determines if a tooltip will appear when the end-user clicks a model part; this accepts a Boolean value
    * **Automatically load parts** – determines if the model part will be loaded into the Viewer automatically; if set to **Yes**, the model will be automatically loaded as long as the Viewer receives the **Model ID** and **Model source type** values; if set to **No**, the model will only be loaded into the Viewer when triggered from the PS Tree part toggling (for this use case, add the [PS Tree](#ps-tree) widget so you can trigger the part loading by clicking the PS Tree)
    * **Advance configuration** – provides advanced configurations in JSON string format for Viewer. For details, refer to [Advanced Configuration](/partners/siemens/3d-viewer/advanced-configuration/).
* On the **Events** tab, there are some optional customization options for changing the widget's behavior:
    * **On selection change** – by binding a String attribute to the **Selection** property, you can use this attribute as an input parameter to add an action to trigger when the selection changes on the Viewer 
    * **On error** – by binding a String attribute to the **Error** property, you can obtain the error message raised by the Viewer and add custom actions to trigger when an error arises
    * **On progress change** – by binding a String attribute to the **Progress status** property, you can obtain the current model loading status; by binding a Decimal attribute to the **Progress percentage** property, you can obtain the current model loading percentage; you can also add custom actions triggered by this change
    * **On load** – by binding a Boolean attribute to the **Loaded** property, you can obtain information about if the product structure is loaded; you can also add custom actions triggered by this change

3D Viewer also exposes some APIs on the Viewer for you to invoke and implement custom logic that suits your needs. For information on how to use the 3D Viewer APIs and other details, see [Use the 3D Viewer API](/partners/siemens/3d-viewer-api/).

#### Panel Widgets {#panel-widgets}

The **Panel** widgets have an operation panel that contains an interactive item for the end-user to operate on.

Each panel widget should be placed in a [Container3D](#container3d) widget. A Viewer widget with the right data source should also be in the same Container3D widget.

##### PS Tree {#ps-tree}

The **PS Tree** widget presents a hierarchical tree view of the items that form a model. By toggling the tree node, the end-user can control which model parts are loaded into the Viewer. In addition, the widget supports searching the names of nodes using regular expressions and highlighting the results.

On the **General** tab, the following options are available:

* **Expand all** – determines if the model's product structure tree should be fully expanded at the initial load
* **Show search** – used to toggle a search bar that enables the end-user to enter a part name and search for the part in the widget
* **Show search options** – determines whether to display all node search results in the drop-down list
  
{{< figure src="/attachments/partners/siemens/3d-viewer/pstree-showsearchoptions.jpg" max-width=50% alt="show search options in PS Tree" >}}

* **Show leaf structure** – determines if the sub-part data should be displayed in the widget

##### PS Tree Table

The **PS Tree Table** widget presents a configurable tree table to display the product structure of a model and other model attributes of your choice.

Compared to the [PS Tree](#ps-tree) widget, this widget adds an additional configurable property called **Column**. You can expand the table by adding columns and specifying the property to be displayed in this column. Examples of predefined properties are **Volume**, **Mass**, **Units**, **HasPMI**, and **Density**. If you want to display other properties other than the predefined properties in the list, you can also add them by specifying valid properties defined in the model.

{{< figure src="/attachments/partners/siemens/3d-viewer/pstreetable-general.jpg" alt="pstreetable-general" class="no-border" >}}

##### PMI Tree {#pmi-tree}

The **PMI Tree** widget presents a hierarchical tree display of a model's product manufacturing information, model views, and design groups.

On the **General** tab, the **Expand all tree nodes** property determines if all tree nodes are expanded by default. When set to **Yes**, the end-user sees a PMI tree fully expanded by default on the widget load. When set to **No**, the PMI tree will not fully expand by default. 

Also on the **General** tab, the **Auto load** property determines if all PMI information should be automatically loaded into viewer once the PMI structure tree is loaded.

##### Section View {#section-view}

The **Section View** widget enables creating a section cut on the model and provides a section view from various angles.

Place this widget inside of a [Container3D](#container3d) widget. A [Viewer](#viewer) widget should be present in the same Container3D widget so that you can add a section plane on the model. 

No specific configuration is needed. With this widget, you can add, delete, and clear section planes to the model on your desired direction axis and clipping mode. For details on how this widget behaves in an app, refer to the [Creating 3D Section](/partners/siemens/3d-viewer/usage/#create-3d-section) section in *3D Viewer Usage*.

##### Markup Builder {#markup-builder}

The **Markup Builder** widget enables creating a 2D markup on a model and saving the annotated screenshot. Snapshots that contain 2D markup will be saved along with the model in Mendix file storage.

On **General** tab, by setting the **Enable** property you can switch the markup mode on or off. When set to **True**, model will be locked to a 2D dimension and will not react to mouse rotation. When set to **False**, the model will be unlocked and return to rotatable state.

Also on the **General** tab is the **markup color** property, which allows you to set the color of markup annotations. The valid values are [CSS legal color values](https://www.w3schools.com/CSSref/css_colors_legal.asp) (for example, RGB values, predefined color names, and hexadecimal color values).

On **Event** tab, by binding a Boolean attribute to the **Save** property, the save status of the markup image can be obtained after the end-user clicks **Save** on the Markup builder's panel. You can also add custom actions, such as showing a pop-up message, to this. When the attribute value changes to **True**, it means the markup image associated with the model is successfully saved in Mendix file storage. When the attribute value is **False**, this means the save is not successful. By setting the **Action** property, you can trigger an action based on the value of the **Save** status. 

##### Measurement {#measurement}

The **Measurement** widget enables performing measurements on 3D models, including measuring distance, angle, line length, radius, and area.

Place this widget inside of a [Container3D](#container3d) widget. A [Viewer](#viewer) widget should be present in the same Container3D widget so that you can use the options provided in the widget to perform measurements on the model. 

You can set the language of the measurement result in the **General** tab. The default language is English.

{{< figure src="/attachments/partners/siemens/3d-viewer/measurement-language.jpg" alt="measurement language"  >}}

No specific configuration is needed. With this widget, you can measure the distance, length, radius, area, and angle of a part or between parts. For details on how to perform measurements on a 3D model, refer to the [Performing 3D Measurements](/partners/siemens/3d-viewer/usage/#perform-measurements) section in *3D Viewer Usage*.

##### Preference {#preference}

The **Preference** widget allows you to set and save your personal preferences.

Place this widget inside of a [Container3D](#container3d) widget. A [Viewer](#viewer) widget should be present in the same Container3D widget so that you can use the options provided in the widget to filter PMI of the model.

With this widget, you can use the following filtering settings:

* Filter PMI entities by type

* Filter model view

* Filter design group

* Show assembly level PMI

For details on how this widget behaves in an application, refer to the [Setting Preferences](/partners/siemens/3d-viewer/usage/#set-preferences) section in *3D Viewer Usage*.

#### Toolbar Widgets

The **Toolbar** widgets do not require additional configuration. Simply place them within a [Container3D](#container3d) widget with the accompanying [Viewer](#viewer) widget.

| Widget | Description |
| --- | --- |
| Tool Bar Item Camera Mode | Provides the ability to control the appearance of surface objects displayed in the view. The option determines whether surface objects are represented on the display by facet geometry or edge geometry. |
| Tool Bar Item Camera Orientation | Enables viewing the model from different camera orientations. |
| Tool Bar Item Explode Slider | Enables creating an exploded view of your assembly. |
| Tool Bar Item Fit All | Enables fitting all the model parts in the Viewer. |
| Tool Bar Item Render Mode | Enables toggling between different model render modes. |
| Tool Bar Item Selection Mode | Provides the ability to select a model part, edge, face, and body. |
| Tool Bar Item Snapshot | Provides the ability to take a snapshot of the current Viewer and save the snapshot to a local machine. |

### Configuring the License Token {#configure-license-token}

Follow this guidance to configure a license token depending on your environment.

#### For an App Deployed in Mendix Cloud

If you deploy your app in Mendix Cloud, configure the license token in the [Mendix Portal](/developerportal/deploy/environments-details/).

Before you deploy your app, configure the app **Constants** in the deployment package.

{{< figure src="/attachments/partners/siemens/3d-viewer/licensetoken-cloudportal.jpg" alt="licensetoken-cloudportal" class="no-border" >}}

If you have already deployed your app, change the existing **LicenseToken** constant value on the **[Model Options](/developerportal/deploy/environments-details/#model-options)** tab and restart the app.

{{< figure src="/attachments/partners/siemens/3d-viewer/licensetoken-envdetails.jpg" alt="licensetoken-envdetails" class="no-border" >}}

#### For an App Deployed in Your Own Environment

If you deploy your app in your own environment, you need to configure the license token in your own environment. For more information, see [Deploying Apps](/deployment/).
