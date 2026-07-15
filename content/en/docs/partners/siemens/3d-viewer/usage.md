---
title: "3D Viewer Usage"
url: /partners/siemens/3d-viewer/usage/
weight: 2
description: "Describes how to use the 3D Viewer app service."
---

## Introduction

3D Viewer provides a set of widgets to visualize 3D models and a set of nanoflows and Java Actions to bring in the data.

When you start from a blank app template in Mendix Studio Pro, you can follow the steps below to visualize your local 3D model quickly.

## Uploading and Viewing a 3D Model in Your Browser

For the [Viewer](/partners/siemens/3d-viewer/installation-configuration/#viewer) widget to visualize a 3D model, two data source attributes should be set: **Model ID** and **Model source type**. To enable uploading 3D models and visualizing them directly on the page, a set of these attributes should be returned by the [Uploader](/partners/siemens/3d-viewer/installation-configuration/#uploader) widget and set to that of the Viewer widget.

The procedure shows how to configure this visualization, using a JT file as an example:

1. Place a [Container3D](/partners/siemens/3d-viewer/installation-configuration/#container3d) widget on the page.
2. Put the Uploader and Viewer widgets into the Container3D widget and give them a layout.
3. Set a fixed height of the Viewer widget (toggle to **Design mode** to see the preview).
4. Create an entity and call it *UploadedModel* in your app module's domain model.
5. Wrap the Uploader and Viewer widgets inside a new data view widget.
6. Create a nanoflow, call it *CreatedUploadedModel*, and set this as the data source of the data view.
7. Create two attributes for the UploadedModel entity. Set them to receive the value returned from the Uploader's **Data source** and **UploadModelId**:

    {{< figure src="/attachments/partners/siemens/3d-viewer/uploader-uploadedmodelinfo.jpg" alt="uploader-uploadedmodelinfo" class="no-border" >}}

8. On the **Data Source** tab, set the data source attributes of the Viewer widget by setting **Model ID** to **UploadedModelID** and **Model source type** to **Mendix**:

    {{< figure src="/attachments/partners/siemens/3d-viewer/viewer-datasourceuploaded.jpg" alt="viewer-datasourceuploaded" class="no-border" >}}

9. On the **General** tab, set **Automatically load parts** to **Yes**, which enables loading the model automatically upon successful upload.
10. Run your app locally. You can now upload a JT file and view it directly in the browser:

    {{< figure src="/attachments/partners/siemens/3d-viewer/runlocally-uploadandview.jpg" alt="runlocally-uploadandview" class="no-border" >}}

## Displaying Model Loading Progress with Progress Bar Widget {#displaying-model-loading}

When the end-user is uploading or loading a model, they may want to know the uploading and loading progress. The uploading progress in the Uploader widget can seen in the uploader panel :

{{< figure src="/attachments/partners/siemens/3d-viewer/uploader-uploadedstatus.jpg" alt="uploader-uploadedstatus" class="no-border" >}}

Loading progress in the Viewer widget can be obtained via the **Progress status** and **Progress percentage** attributes in the **Events** tab.

Follow these steps to display the model loading progress:

1. Create an entity called *PageObject*, add a decimal attribute called *LoadingProgress* with a default value of `= 0` (as the [Progress Bar](/appstore/widgets/progress-bar/) widget expects a decimal value).
2. Create a nanoflow called *createPageObject* that returns a **PageObject** object.  
3. Wrap the [Container3D](/partners/siemens/3d-viewer/installation-configuration/#container3d) widget with a data view and set the **Data source** of the data view to the **createPageObject** nanoflow.
4. Set the value of the **LoadingProgress** attribute by setting the **Progress percentage** property:

    {{< figure src="/attachments/partners/siemens/3d-viewer/viewer-progresspercentage.jpg" alt="viewer-progresspercentage" class="no-border" >}}

5. Add the Progress Bar widget to the page and set **PageObject.LoadingProgress** as the **Progress Attribute** on the **Values** tab.
6. Run your app locally. You can see the real-time model loading progress:

    {{< figure src="/attachments/partners/siemens/3d-viewer/runlocally-loadingprogress.jpg" alt="runlocally-loadingprogress" class="no-border" >}}

## Previewing Models Without Uploading

To preview a model directly without uploading to Mendix file storage, drag and drop the file into the Viewer. If you want to upload the model after the preview, just click the **Upload to Mendix File Storage** icon on the upper-left corner of the Viewer. 

{{< figure src="/attachments/partners/siemens/3d-viewer/upload-to-mendix-file-storage.png"  class="no-border" >}}

## Utilizing More 3D Functionality

You can add more 3D widgets to the page to enable more 3D functionalities and arrange the layout of them as needed. For example:

{{< figure src="/attachments/partners/siemens/3d-viewer/structuremode-more3dwidgets.jpg" alt="structuremode-more3dwidgets" class="no-border" >}}

## Managing Uploaded Models

In previous use case, you can only visualize the model you upload.

Usually, you will also need to manage the models that are uploaded and stored in the data storage. 3D Viewer provides the **GetModelListFromMendix** nanoflow and **DeleteModelFromMendix** microflow to help you build model data management functionality into your app.

### Building a Model List

The Mendix native [list view](/refguide/list-view/) can be used to display the model list by following these steps:

1. Use the **View3D/USE_ME/GetModelListFromMendix** nanoflow or copy it to your app module. A list of **ModelDocument** objects will be returned after calling the nanoflow.
2. Add a [pop-up page](/refguide/page-properties/#pop-up) to display the model list via a button click or another event of your choice.
3. Place a list view in the page and set the **GetModelListFromMendix** nanoflow as the **Data source**.
4. As **GetModelListFromMendix** requires a **Pagination** parameter input, wrap the list view with a data view. Then, create a nanoflow called *CreatePaginationObject* nanoflow and set that nanoflow as the list view's **Data source**.
5. Fill in the list item with the information you are interested in:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openmodelpopup-listview.jpg" alt="openmodelpopUp-listview" class="no-border" >}}

### Opening a Model from the Model List

Once you have the model list, you may want to click to select a model from the list and view the model. As the **Viewer** widget expects **ModelId** and **Model Source Type** to visualize a model, such information of the selected model needs to be passed to the [Viewer](/partners/siemens/3d-viewer/installation-configuration/#viewer) widget. Since each list item is a **ModelDocument** object and this object contains various pieces of information about the selected model (including ModelId and Model Source Type), you need to pass this object to the Viewer widget.

Follow these steps for configuration:

1. Define the **On click** action for the list view to pass the selected model to the Viewer widget that is present in another page (so the selected model can be loaded into the viewer). An example approach is to create an entity that is associated with the **ModelDocument** entity defined in the **Viewer3D** module's domain model. Make the object a shared object between the page the Viewer is in and the model list page. In this example, you are creating a **PageObject** with this home page: 

    {{< figure src="/attachments/partners/siemens/3d-viewer/homepage-pageobject.jpg" alt="homepage-pageobject" class="no-border" >}}

    This is the model pop-up page:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openmodelpopup-pageobject.jpg" alt="openmodelpopUp-pageobject" class="no-border" >}}

2. Set the **On click** action of the model list item, then change the **ModelDocument** object with which the **PageObject** is associated to return the value so that home page can be refreshed on a PageObject change:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openselectedmodel-nanoflow.jpg" alt="openselectedmodel-nanoflow" class="no-border" >}}

3. Run your app locally. You will get a simple model list where you can select which model to open and visualize it with the home-page viewer:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openmodellistpopup-demo.jpg" alt="openmodellistpopup-demo" class="no-border" >}}

### Deleting a Model

There might be some models that you do not want in the database, so you can delete these, too. The 3D Viewer app service provides the **DeleteModelFromMendix** microflow to achieve this.

Follow these steps to delete a model from the database:

1. Use the **Viewer3D/USE_ME/DeleteModelFromMendix** microflow directly or copy it to one of your app modules.
2. DeleteModelFromMendix expects a **ModelDocument** (which represents a model stored in Mendix file storage) as an input parameter. After successful execution, the model will be deleted from Mendix file storage. In the previous steps, a model list was built, each list item of which is a ModelDocument. For a model list item, add a [Delete button](/refguide/button-widgets/).
3. Create a nanoflow called *DeleteModel* and set **ModelDocument** as the input parameter. Then, call the **DeleteModelFromMendix** microflow and commit the **ModelDocument**:

    {{< figure src="/attachments/partners/siemens/3d-viewer/deletemodel-nanoflow.jpg" alt="deletemodel-nanoflow" class="no-border" >}}

4. Set the **On click** event of the **Delete** button to the **DeleteModel** nanoflow.
5. Run your app locally. You should be able to delete a model by clicking **Delete**.

Now you are able to get a list of models, select a list item to open a model, and delete the model.

## Handling Viewer Events

Multiple events can be picked up by the [Viewer](/partners/siemens/3d-viewer/installation-configuration/#viewer) widget and can be used to build your customized event handling logic.

There are four main types of events that can be picked up on the Viewer widget, which are described in the sections below.

### On Selection Change {#on-selection-change}

By selecting one attribute to set **Selection**, you can get information on the selected part (for this you might need to work with Viewer APIs; if you have inquiries on how to use the Viewer APIs, please contact [Siemens Support](https://support.sw.siemens.com/en-US/)).

**Selection** takes a String attribute. You can define an attribute and bind that attribute to Selection property. In a running app, when user select on a model part, the selection event will be triggered, and the selected part info will be populated to this Selection attribute. You can easily get this selected object information (psid and viewer)and use it in the actions. 

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onselectionchange-result.jpg" alt="viewer-onselectionchange-result" class="no-border" >}}

Like other Mendix events, you can select from a list of actions upon a model part selection for **Action**. One possible use case is utilizing `GET` APIs exposed by the Viewer (for example, get `Boundingbox` by `PSID`, set the material by `PSID` in a JavaScript action, include this in a nanoflow, and set the **Action** to call this nanoflow).

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onselect-sample.jpg" alt="viewer-onselect-sample" class="no-border" >}}

### On Error {#on-error}

By selecting one attribute to set the **Error** event, you can pick up an error exposed by the Viewer.

**Error** takes a String attribute. You can define an attribute and bind that attribute to this property. In a running app, when there's problem visualizing a model, the error event will be triggered, and the error information will be populated to this Error attribute. You can easily obtain this error message raised by viewer and add custom actions to trigger when error arises.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewerevent-onerror.jpg" alt="viewerevent-onerror" class="no-border" >}}

Like other Mendix events, you can select from a list of actions upon a Viewer error for **Action**. One possible use case is show a error pop-up page to let user know the error details.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onerror-sample.jpg" alt="viewer-onerror-sample" class="no-border" >}} 

### On Progress Change {#on-progress-change}

By selecting one attribute for the **Progress status** value, you can get the current loading status and the loading percentage of the model, product structure tree, and [PMI tree](/partners/siemens/3d-viewer/installation-configuration/#pmi-tree).

**Progress status** takes a String attribute. You can define an attribute and bind that attribute to this property. In a running app, upon loading a model, product structure tree, PMI tree, and PMI shape, the load progress status information will be populated to this attribute. You can easily get this model loading status information (`Notloaded`, `Loading`, `Loaded`)and use it in the actions.

**Progress percentage** takes a Decimal attribute. You can define an attribute and bind that attribute to this property. In a running app, upon loading a model, product structure tree, PMI tree, and PMI shape, the load progress percentage information will be populated to this attribute.You can easily get this loading percentage and use it in the actions.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onprogress.jpg" alt="viewer-onprogress" class="no-border" >}} 

Like other Mendix events, you can select from a list of actions upon progress change for **Action**. One possible use case is use a progress bar widget to display captured model loading percentage to user. 

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onprogress-sample.jpg" alt="viewer-onprogress-sample" class="no-border" >}}

For more information, see [Displaying Model Loading Progress with Progress Bar Widget](#displaying-model-loading). 

### On Load {#on-load}

By selecting one attribute for the **Loaded** value, you can get the current loading status of the product structure tree.

**OnLoad** takes a Boolean type attribute. You can define an attribute and bind that attribute to this property. In a running app, when you open a model, product structure tree will need to be loaded first, the product structure tree load event will be triggered, and the product structure load information will be populated to this attribute. You can get the current loading status of product structure tree and use it in the actions.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onload-result.jpg" alt="viewer-onload-result" class="no-border" >}}

Like other Mendix events, you can select from a list of actions upon the product structure tree loaded status for **Action**. In order to call the **On Load** action, you must bind a valid **Loaded** value. One possible use case is show a pop-up page to let user know if product structure is successfully loaded.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onload-sample.jpg" alt="viewer-onload-sample" class="no-border" >}}

## Creating a 3D Section {#create-3d-section}

When a model is loaded in the viewer, the [Section View](/partners/siemens/3d-viewer/installation-configuration/#section-view) widget enables the following:

* Inspecting the interior structure of a model by adding standard section planes
* Deleting a section plane
* Clearing all section planes
* Clipping away parts
* Positioning a plane

The sections below present operations within the Section View widget.

{{< figure src="/attachments/partners/siemens/3d-viewer/sectionview-designmode.jpg" alt="sectionview-designmode" class="no-border" >}}

### Action

* **Add** – Use this to add a section plane. First, select the axis along which you would like to section the model, then click **Add**. You will see a section plane of the desired axis added to the scene. The default position of the newly added section plane is in the middle of the bounding box of the direction selected.
* **Delete** – Use this to delete a selected section plane. Click the edge of the section plane to select it (when selected, the section plane edges are highlighted in yellow color). Then, click **Delete**.
* **Clear** – Use this to clear all the section planes added to the scene.

### Direction

* **X Direction** – sets the X axis of the default coordinate system as the reference
* **Y Direction** – sets the Y axis of the default coordinate system as the reference
* **Z Direction** – sets the Z axis of the default coordinate system as the reference

For example, if you select **Y Direction**, then the cross section is created on the ZX plane.

### Clipping

When a section plane is selected (and highlighted in yellow), you can choose which part of the model you would like to clip away by selecting a clipping option:

* **Off** – do not clip
* **Both** – clip both sides, showing the 2D intersecting curve on the section plane
* **Near** – clip away the positive side (toward the **Direction**)
* **Far** – clip away the negative side (away from the **Direction**)

### Position

You can move the position sliders to adjust the position of the section plane along its axis. You can also type in an exact position to place the section plane at an exact position.

You can add multiple section planes to cut the model in different directions. After the section, you can save a snapshot of a section view. You can also add markup annotations on the section view and save them for later review.

### SectionManipulator

An advanced end-user can enable the SectionManipulator to move / rotate the section plane using [advanced configuration](/partners/siemens/3d-viewer/advanced-configuration/). There are two flavors as illustrated below:

| enable SectionManipulator | enable SectionHandle |
| ---  | --- |
| {{< figure src="/attachments/partners/siemens/3d-viewer/sectionManipulator.png" alt="sectionManipulator" class="no-border" >}} | {{< figure src="/attachments/partners/siemens/3d-viewer/sectionHandle.png" alt="sectionHandle" class="no-border" >}} |

## Performing 3D Measurements {#perform-measurements}

When a model is loaded into the viewer, the [Measurement](/partners/siemens/3d-viewer/installation-configuration/#measurement) widget provides a set of tools to measure different geometrical entities:

{{< figure src="/attachments/partners/siemens/3d-viewer/measurement-panel.jpg" alt="measurement-panel" class="no-border" >}}

The sections below describe these tools.

### Measurement Mode

* **Distance** – measure the distance between two part features
* **Length** – measure the length of a line
* **Radius** – measure the radius of a circular edge or surface
* **Angle** – measure the angle between two edges or surfaces
* **Area** – measure the area of a surface

### Action

* **Delete** – select one measurement result, then click **Delete** and the selected measurement result will be removed from the scene
* **Clear** – clear all the measurement results in the scene

## Setting Preferences {#set-preferences}

You can change the settings of the Preference widget to customize the behavior of the model and set it up to suit your needs.

{{< figure src="/attachments/partners/siemens/3d-viewer/preferences-general.png" alt="preferences-general" class="no-border" >}}

Click **Preference** to display the dialog. You can set your filter as a preference in any combination you like, and when you click the **OK** button, the filter will take effect the next time you open a file; the **Reset** button clears all settings. This method can only set the preference when your application is running, but we also provide a more advanced method - before the application starts - to set your preference. For details, refer to [Advanced Configuration](/partners/siemens/3d-viewer/advanced-configuration/).
