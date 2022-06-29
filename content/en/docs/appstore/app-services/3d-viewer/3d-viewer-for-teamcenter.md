---
title: "3D Viewer for Teamcenter"
url: /appstore/app-services/3d-viewer-for-teamcenter/
description: "3D Viewer for Teamcenter is an add-on module for the 3D Viewer app service. It adds additional functionality to enable fetching a JT model from a Teamcenter instance and visualize it using existing 3D Viewer widgets."
tags: ["3d visualization", "3d viewer", "cad", "app store", "marketplace", "component", "platform support", "teamcenter"]
---

## 1 Introduction

The [3D Viewer for Teamcenter](https://marketplace.mendix.com/link/component/118608) module lets you connect, search, and fetch JT models from a Teamcenter instance with the help of the [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627). This is an add-on module to the [3D Viewer](/appstore/app-services/3d-viewer/) app service that provides easy-to-use nanoflows and microflows that help you work with 3D models.

### 1.1 Typical Use Cases

You can use this module to search and fetch JT models that are stored in a Teamcenter instance and use [3D Viewer](/appstore/app-services/3d-viewer/) widgets to visualize the fetched models. Once a model is fetched, you can perform some basic operations, such as navigating the model product structure tree and PMI tree, sectioning, and many more operations enabled by the 3D Viewer out-of-the-box tools. 

{{% alert color="warning" %}}
Using this module alone will not be enough to visualize a 3D model.
{{% /alert %}}

### 1.2 Features

This module enables doing the following:

* Logging in to a Teamcenter instance
* Searching models from Teamcenter by setting revision rules
* Getting a model associated with item revision 
* Visualizing and inspecting  a model when used with the 3D Viewer app service

### 1.3 Dependencies

If you want to visualize models stored in a Teamcenter instance, you also need to import the following components into your app:

* [3D Viewer](https://marketplace.mendix.com/link/component/118345) app service – this provides out-of-the-box widgets and the domain model entities needed to visualize a JT model
* [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627) – this is required for the 3D Viewer app service to connect and load the model from Teamcenter

### 1.4 Limitations

To visualize a model from Teamcenter, the limitations are similar to those of 3D Viewer. For details, see the [Limitations](/appstore/app-services/3d-viewer/#limitations) section of *3D Viewer*.

## 2 Prerequisites

Make sure you have the following prerequisites in place:

* [Studio Pro 9.4.0](/releasenotes/studio-pro/9.4/) or above installed
* A living Teamcenter instance (you need the **Teamcenter Host Address** and **Teamcenter FMS URL** to configure the Teamcenter instance – for more information, see the [Reusing Teamcenter Login APIs to Get Access to Teamcenter Instance Data](#reusing) section below)
* A Teamcenter account (it is best to have both an admin user account and a non-admin user account)

## 3 Installation

To visualize a model fetched from a Teamcenter instance, you need to import the components below into your app (follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) as necessary):

* [3D Viewer for Teamcenter](https://marketplace.mendix.com/link/component/118608)
* [3D Viewer](https://marketplace.mendix.com/link/component/118345) app service（v.2.0.0 or above). 
* [Teamcenter connector](https://marketplace.mendix.com/link/component/111627)(v.3.3.0)

After downloading and importing, you need to map the **Administrator** and **User** [module roles](/refguide/module-security/#module-role) of the installed components to the applicable [user roles](/refguide/user-roles/) in your app.

## 4 Initializing on App Startup

To automatically start this module, follow these steps:

1. Create a **Startup** microflow and add the **Viewer3D/USE_ME/VisServerAction** and **Viewer3D_TC/USE_ME/VisServerAction_TC** Java actions to the microflow.
2. Set the return type as Boolean with a **Value** of **true**.
3. Set the microflow as the after-startup step via **Project Settings** > **Runtime** > **After startup**.
4.  Double-click the **Visualization Server** Java action and make sure the **Http endpoint** is set as `@Viewer3D.HttpEndpoint`:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-startupflow.jpg" alt="teamcenter-startupflow" >}}

## 5 Usage

The 3D Viewer app service provides a set of widgets to visualize JT models as well as a set of nanoflows and Java actions to bring in the data stored in Mendix file storage. Meanwhile, the Teamcenter connector module provides full-scale APIs for you to interact with a Teamcenter instance.  

The 3D Viewer for Teamcenter module acts as an intermediate layer between the two components above. It mainly utilizes the APIs provided by the Teamcenter connector and provides nanoflows, Java actions, and microflows to get JT-format model data from the Teamcenter instance.  

To visualize and operate on the JT model from Teamcenter, use the 3D widgets that are included in the 3D Viewer app service to visualize the data obtained from the 3D Viewer for Teamcenter.

### 5.1 Reusing Teamcenter Login APIs to Get Access to Teamcenter Instance Data {#reusing}

To get data from Teamcenter, the end-user of your app needs to be authenticated and authorized. The Teamcenter connector provides both admin and user login logic in the **Marketplace Modules** > **TcConnector** > **Published** > **APIs** > **Login** folder. Since you are building an app to enable the end-user to fetch data from Teamcenter and visualize it in the app, you will need to build a login for the end-user so that they can enter their Teamcenter user name and password to access Teamcenter data.

Follow these steps to build this login:

1. Add a **Login** [button](/refguide/button-widgets/) to a page in your app.
2. Set the **On click** action to the **Viewer3D_TC** > **USE_ME** > **Login** > **LoginTeamcenter** microflow.
3.  Run your app locally. When you click **Login**, you will be shown the Teamcenter admin page where you can add, edit, and manage the Teamcenter instance you want to connect to by providing the **Teamcenter Host Address** and **Teamcenter FMS URL** and setting the instance to **Active**:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-configuration.jpg" alt="teamcenter-configuration" >}}

4.  Return to the **Login**, where you can enter your Teamcenter account to log in to the Teamcenter instance that you configured and set to active:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-teamcenterlogin.jpg" alt="teamcenter-teamcenterlogin" >}}

{{% alert color="info" %}}
The above is an example Teamcenter login flow included in the **Viewer3D_TC** module. There are other Teamcenter login APIs provided in **TcConnector** > **Published** > **APIs** > **Login**, and you can choose how to use them based on your needs.
{{% /alert %}}

### 5.2 Getting a List of Corresponding Models from Teamcenter

The **SearchTC** nanoflow in the 3D Viewer For Teamcenter module enables setting search criteria (for example, for searching by item name, item ID, or revision ID ）and fetching a model list. This nanoflow will first check if an active Teamcenter user session is alive and then perform the search, so logging in is essential before performing the model search. A list of ModelDocument objects will be returned as a result of this nanoflow, which means this nanoflow can be set as the data source of a list view widget. Additionally, by using **Viewer3D_TC** > **USER_ME** > **ShowBOMLineQueryPopUp**, you can apply specific revision rules to the search and get different model data returned.

Follow these steps to get the list:

1. Create an **Open TC model** button and add it to a page in your app.
2. Set the **On click** action of the button to show a [pop-up page](/refguide/page-properties/#pop-up).
3. Add a list view to the pop-up page and set the **Data source** to **Viewer3D_TC/USE_ME/SearchTC**.
4. Wrap the list view with a [data view](/refguide/data-view/), as the SearchTC nanoflow requires a SearchCriteria object as the input parameter.
5. Create a simple nanoflow and name it *createSearchCriteriaObject* that creates a default **SearchCriteria** object and returns it as result. Set the **Data source** of the data view to this new nanoflow.
6.  Add a [text box](/refguide/text-box/) and **Search** button to allow the end-user to type in an item name (as in, a model name) and perform a search:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-tcmodellist.jpg" alt="teamcenter-tcmodellist" >}}

6.  To enable showing the model list for the search results, the input parameter of the SearchTC nanoflow's SearchCriteria object needs to be updated on a button click. So, when the end-user types in a model name in the text box, make sure the model name is saved to the **TCItemName** attribute of the **SearchCriteria** object:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-textboxchange.jpg" alt="teamcenter-textboxchange" >}}

	And when the end-user clicks the **Search** button, make sure the change is synchronized for the list view widget to refresh the list: 

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-searchsync.jpg" alt="teamcenter-searchsync" >}}

7. Verify your model search page looks like this:   

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-wrapdataviews.jpg" alt="teamcenter-wrapdataviews" >}}  

8. Run your app locally, then log in to Teamcenter and open the the Teamcenter model pop-up window. Type in a model name and search. You will see a list of models that contain the entered item name.

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-samplesearch.jpg" alt="teamcenter-samplesearch" >}}

### 5.3 Opening a Model from the Model list

Now that you can get a list of models from calling the SearchTC nanoflow, you may want to visualize these models. The SearchTC nanoflow returns a list of ModelDocument objects, and for the models to be visualized, it is necessary to use the 3D widgets that are part of 3D Viewer. **Model ID** and **Model Source Type** are the unique identifiers for every JT model, and with these two properties, you can access and operate JT models. The ModelDocument object contains attributes (most importantly, the model ID and model source type) that are needed to identify and visualize a JT model in the 3D widgets. As the 3D Viewer needs the model ID and model source type to visualize a model, you will need to pass the ModelDocument object to the 3D Viewer widget.

Since you built a model list pop-up page, one scenario is to select a list item on the pop-up page, then return the ModelDocument object to the home page to be visualized there. Follow these steps to enable this:

1.  Add a new entity that you name *PageObject* and associate it with the **ModelDocument** entity that is defined in **Viewer3D/Domain Model**:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-pageobject.jpg" alt="teamcenter-pageobject" >}}

2. On your app's home page, wrap the main area with a data view, then create a nanowflow called *createPageObject* that creates a default PageObject object and returns it. Set this nanoflow as the **Data source** of the data view.
3.  On the home page, add another data view within the previous data view, and set the **Data source** of the new data view to **Context**. This way you can access the ModelDocument object associated with the PageObject:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-homepagedataviews.jpg" alt="teamcenter-homepagedataviews " >}}

4. Find the 3D widgets in the **Toolbox** and add them to the inner data view (for details on the usage of each widget, see [3D Viewer](/appstore/app-services/3d-viewer/)). Now you can set the **Model ID** and **Model Source Type** that the 3D Viewer widget needs:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-setviewermodelid.jpg" alt="teamcenter-setviewermodelid " >}}  

5. On the open TC model pop-up page, add an outermost data view, select **Context** as its **Data source**, then select **PageObject**:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-popuppageobject.jpg" alt="teamcenter-popuppageobject" >}}

6. Create a nanoflow that you name *OpenSelectedModel* and set it as the **On click** action for the list view. This nanoflow enables updating the ModelDocument associated with the PageObject and returns an updated PageObject. Every time the end-user clicks a model list item, PageObject will be updated, and the home page that the end-user is on will be updated to the newly selected model.

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-openselectedmodel.jpg" alt="teamcenter-openselectedmodel" >}}

7. Run your app locally. You will be able to view the selected model.

{{% alert color="info" %}}
There are other ways to visualize a model. The key idea is to pass a valid model ID and model source type to the 3D Viewer widget.
{{% /alert %}}

### 5.4 Search with Custom BOMLine Query 

Other than searching Teamcenter server to get a list of ModelDocument objects with a default BOMLine query, **Viewer_3D** also provides you with a **ShowBOMLineQueryPopUp** page that can enable you to set custom queries. 

The **ShowBOMLineQueryPopUp** page requires a **ModelDocument** object as an input parameter, which allows you to set the specific revision rules you want to apply to a model and get the model data based on these revision rules. If nothing is specifically set on the page, the **SearchTC** nanoflow will execute with the default default BOMLine query.

Follow these steps to set custom revision rules:

1. Add a button that you name *Set Revision Rule* to the **ModelDocument** list item.
2.  Create a nanoflow called *ShowBOMLineQueryPopUp* that simply shows the **Viewer3D_TC/USE_ME/ShowBOMLineQueryPopUp**:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-showbomlinequery-nano.jpg" alt="teamcenter-showbomlinequery-nano" >}}

3. Set the **ShowBOMLineQueryPopUp** nanoflow as the button's **On click** action:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-setrevisionrules.jpg" alt="teamcenter-setrevisionrules" >}}

3. Run your app locally. You will be able to set a revision rule on the selected model and fetch the model with the needed information:

	{{< figure src="/attachments/appstore/app-services/3d-viewer/3d-viewer-for-teamcenter/teamcenter-setrevisionpage.jpg" alt="teamcenter-setrevisionpage" >}}

### 5.5 Create a ModelDocument from an Item Revision

A **ModelDocument** entity type object is the unique identifier defined across 3D Viewer to visualize a model. In addition to getting a list of ModelDocument returned from the **SearchTC** nanoflow, **Viewer3D_TC** also contains the **GetModelDocumentByTCItemRevision** microflow for you to construct a legal ModelDocument directly from an item revision. This adds more flexibility for getting your model in Teamcenter visualized. 

## 6 Read More

* [3D Viewer](/appstore/app-services/3d-viewer/)
