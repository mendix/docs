---
title: "3D Viewer for Teamcenter"
category: "App Services"
description: "3D Viewer for Teamcenter is an add-on module for the 3D Viewer app service. It adds additional functionality to enable fetching a JT model from a Teamcenter instance and visualizit it using existing 3D Viewer widgets. 
#tags: ["3d visualization", "3d viewer", "cad", "app store", "marketplace", "component", "platform support", "teamcenter"]
---
## 1 Introduction

The 3D Viewer for Teamcenter app service lets you connect to a Teamcenter instance and then visualize and operate on 3D JT models. It provides nanoflows and microflows that enable you to find and fetch a JT model from Teamcenter.

### 1.1 Typical Use Cases

You can use this app service to search and fetch JT models that are stored in a Teamcenter instance and use [3D Viewer](3d-viewer) widgets to visualize the fetched models. Once a model is fetched, you can perform some basic operations, such us navigating the model product structure tree and PMI tree, sectioning, and many more operations enabled by the 3D Viewer out-of-the-box tools. 

{{% alert type="warning" %}}
Using this app service alone will not be enough to visualize a 3D model.
{{% /alert %}}

### 1.2 Features

This app servcice enables doing the following:

* Log in to a Teamcenter instance
* Search  models from Teamcenter
* Get a model by setting revision rules
* Visualize and perform operations on model when used with 3D Viewer app service

### 1.3 Dependencies

If you want to visualize models stored in Teamcenter, you will also need to import the following components into your app project:

* [3D Viewer](3d-viewer) app service – this component provides out-of-the-box widgets and the domain model entities needed to visualize a JT model
* [Teamcenter](https://appstore.home.mendix.com/link/app/111627/) connector – this component is required for the 3D Viewer app service to connect and load the model from Teamcenter

### 1.4 Limitations

To visualize a model from Teamcenter, the limitations are similar to those of 3D Viewer. For details, see the [Limitations](3d-viewer#limitations) section of *3D Viewer*.

## 2 Prerequisites

Make sure you have the following prerequisites:

* [Studio Pro 8.13.1](https://appstore.home.mendix.com/link/modelers/) or above installed
* A living Teamcenter instance (need `Teamcenter host address` and `Teamcenter FMS url` to configure the Teamcenter instance)
* A Teamcenter account (it is better to have both an admin user account and a non-admin user account)

## 3 Installation

To visualize a model fetched from a Teamcenter instance, you need to import the components below into your app project. Follow the instructions in [How to Use App Store Content in Studio Pro](../general/app-store-content) to import these components:

* 3D Viewer for Teamcenter
* [3D Viewer](3d-viewer) app service
* [Teamcenter](https://appstore.home.mendix.com/link/app/111627/) connector (v2.1.0 or above) 

After importing, you need map the **Administrator** and **User** [module roles](/refguide/module-security#module-role) of the installed components to the applicable [user roles](/refguide/user-roles) in your app.

## 4 Initializing on App Startup

To automatically start this app service, create a **Startup** microflow, add **Viewer3D/USE_ME/VisServerAction** and **Viewer3D_TC/USE_ME/VisServerAction_TC** Java actions to the microflow, then set the return type as Boolean with a **Value** of **true**.

You need to set this microflow as the after-startup step via **Project Settings** > **Runtime** > **After startup**.

Finally, double-click the **Visualization Server** Java action and make sure **Http endpoint** is set as `@Viewer3D.HttpEndpoint`:

![teamcenter-startupflow](attachments/3d-viewer-for-teamcenter/teamcenter-startupflow.jpg)

## 5 Using 3D Viewer For Teamcenter

The 3D Viewer app service provides a set of widgets to visualize JT models as well as a set of nanoflows and Java actions to bring in the data stored in Mendix file storage. Meanwhile, the Teamcenter connector module provides full-scale APIs for you to interact with a Teamcenter instance.  

The 3D Viewer for Teamcenter app service acts as an intermediate layer between the two components above. It mainly utilizes the APIs provided by the Teamcenter connector and provides nanoflows, Java actions, and microflows to get JT-format model data from the Teamcenter instance.  

To visualize and operate on the JT model from Teamcenter, use the 3D widgets that are included in the 3D Viewer app service to visualize the data obtained from the 3D Viewer for Teamcenter.

![teamcenter-startupflow](attachments/3d-viewer-for-teamcenter/teamcenter-startupflow.jpg)

### 5.1 Reusing Teamcenter Login APIs to Get Access to Teamcenter Instance Data

To get data from Teamcenter, the end-user needs to be authenticated and authorized. The Teamcenter connector provides both admin login logic and user login logic in the **App Store Modules** > **TcConnector** > **Published** > **APIs** > **Login** folder. Since you are building an app to enable the end-user to fetch data from Teamcenter and visualize it in the app, you will need to build a login for the end-user so that they can enter their Teamcenter user name and password to access the Teamcenter data.

Follow these steps to build this login:

1. Add a **Login** [button](/refguide/button-widgets) to a page in your app.
2. Set the **On click** action to the **TcConnector** > **Published** > **APIs** > **Login** > **ExexuteAdminLogin** microflow.
3.  Run your app locally. When you click **Login**, you will be shown the Teamcenter Admin page where you can add, edit, and manage the Teamcenter instance that you want to connect to by providing the **Teamcenter Host Address** and **Teamcenter FMS URL** and set the instance to **Active**:

 ![teamcenter-configuration](attachments/3d-viewer-for-teamcenter/teamcenter-configuration.jpg)

4.  Return to THE **Login**, where you can enter your Teamcenter account to log in to the Teamcenter instance that you configured and set to active:

 ![teamcenter-teamcenterlogin](attachments/3d-viewer-for-teamcenter/teamcenter-teamcenterlogin.jpg)

{{% alert type="info" %}}
The above is an example Teamcenter login flow. There are other Teamcenter login APIs provided in **TcConnector** > **Published** > **APIs** > **Login**, and you can choose how to use them based on your needs.
{{% /alert %}}

### 5.2 Getting a List of Corresponding Models from Teamcenter

The **SearchTC** nanoflow in the 3D Viewer For Teamcenter app service enables setting search criteria and fetching a model list. This nanoflow will first check if an active Teamcenter user session is live and then perform the search, so logging in is essential before performing the model search. A list of **ModelDocument** objects will be returned as a result of this nanoflow; therefore, the nanoflow can be set as the data source of a [list view](/refguide/list-view). Additionally, by using **3dViewer_TC** > **USER_ME** > **SetRevisionRule**, you can apply specific revision rules to the search and get different model data returned.

Follow these steps to get the list:

1. Create an **Open TC model** button and add it to a page in your app
2. Set the **On click** action of the button to show a [pop-up page](/refguide/page-properties#pop-up).
3. Add a list view to the pop-up page and set the **Data source** to **Viewer3D_TC/USE_ME/SearchTC**.
4. Wrap the list view with a [data view](/refguide/data-view), as the **SearchTC** nanoflow requires a **SearchCriteria** object as the input parameter. So, then create a simple nanoflow named *createSearchCriteria* that creates a default **SearchCriteria** object and returns it as result. Set the **Data source** of the data view to this new nanoflow.
5.  Add a [text box](/refguide/text-box) and **Search** button to allow user to type in an item name (as in, a model name) and perform a search:

 ![teamcenter-tcmodellist](attachments/3d-viewer-for-teamcenter/teamcenter-tcmodellist.jpg)

6.  To enable showing the model list via the **Search** button click, the input parameter of the **SearchTC** nanoflow's **SearchCriteria** object needs to be updated on a button click. So, when end-user types in a model name in the text box, the model name should be saved to the **TCItemName** attribute of the **SearchCriteria** object:

 ![teamcenter-textboxchange](attachments/3d-viewer-for-teamcenter/teamcenter-textboxchange.jpg)

 And when the end-user clicks the **Search** button, the change needs to be synchronized for List view widget to refresh the list. 
![teamcenter-searchsync](attachments/3d-viewer-for-teamcenter/teamcenter-searchsync.jpg)

7.  In the [console](/refguide/view-menu#console), there will be an error stating that the **Pagination** and **TCModelParamArray** parameters are missing for the **SearchTC** nanoflow input, so you need to fix this.
 * **Pagination** is an entity defined in the **Viewer3D**'s domain mode, so by setting values of its attribute, you can get a paginated model list. For now, just use the default setting, which is all in one page.  
 * **TCModelParamArray** is an entity defined in the **Viewer3D_TC**'s domain model. It defines a set of attributes where you can set revision rules and return different model data based on these revision rules. For now, just use its default revision rule.

 Since you are missing these two input parameters for the **SearchTC** nanoflow, wrap it with two data views, with one data view including the nanoflow that returns the **Pagination** object and the **TCModelParamArray** object set as the **Data source** for the other nanoflow.

 ![teamcenter-wrapdataviews](attachments/3d-viewer-for-teamcenter/teamcenter-wrapdataviews.jpg)  

8.  Run your app locally. Then log in to Teamcenter and open the the Teamcenter model pop-up window. Type in a model name and search. You will see a list of models that contain the entered item name.

 ![teamcenter-samplesearch](attachments/3d-viewer-for-teamcenter/teamcenter-samplesearch.jpg)

### 5.3 Opening a Model from the Model list

Now that you are able to get a list of models, you may want to visualize these models. For the models to be visualized, the 3D widgets that are part of 3D Viewer are necessary. The **ModelDocument** object contains attributes (most importantly, **ModelId** and **Model Source Type**) that are needed to identify and visualize a model in the 3D widgets.
As the 3D Viewer needs **Model ID** and **Model Source Type** to visualize a model, you will need to pass the **ModelDocument** object to the 3D Viewer widget.

Since you built a model list pop-up page, one scenario is to select a list item on the pop-up page, then return the **ModelDocument** object to then home page to be visualized there. Follow these steps to enable this:

1.  Add an entity called **PageObject** and associate it with the **ModelDocument** entity that is defined in **Viewer3D/Domain Model**:

 ![teamcenter-pageobject](attachments/3d-viewer-for-teamcenter/teamcenter-pageobject.jpg)

2. On your app's home page, wrap the main area with a data view, then create a nanowflow called *createPageObject* that creates a default **PageObject** object and returns it. Set this nanoflow as the **Data source** of the data view.
3.  On the home page, add another data view within the previous data view, and set the **Data source** of the new data view to **Context**. This way you can access the **ModelDocument** object associated with the **PageObject**:

 ![teamcenter-homepagedataviews ](attachments/3d-viewer-for-teamcenter/teamcenter-homepagedataviews.jpg)

4. Find the 3D widgets in the **Toolbox** and add them to the inner data view. Now you can access and set the **ModelId** and **Model Source Type** that the 3D Viewer widget needs.

 ![teamcenter-setviewermodelid ](attachments/3d-viewer-for-teamcenter/teamcenter-setviewermodelid.jpg)  

5. On the open TC model pop-up page, add an outmost data view, select **Context** as its **Data source**, then select **PageObject**:

 ![teamcenter-popuppageobject](attachments/3d-viewer-for-teamcenter/teamcenter-popuppageobject.jpg)

6. Create a nanoflow called *OpenSelectedModel* and set it as the **On click** action for the list view. This nanoflow enables updating the **ModelDocument** associated with the **PageObject** and returns an updated **PageObject**. Every time the end-user clicks a model list item, **PageObject** will be updated, and the home page where the end-user is will be updated to the newly selected model.

 ![teamcenter-openselectedmodel](attachments/3d-viewer-for-teamcenter/teamcenter-openselectedmodel.jpg)

Run your app locally. You will be able to view the selected model.

{{% alert type="info" %}}
There are other ways to visualize a model. The key idea is to pass a valid **ModelId** and **Model Source Type** to the 3D Viewer widget.
{{% /alert %}}

### 5.4 Setting Custom Revision Rules

**SearchTC** requires a **TCModelParamsArray** object as an input parameter, which allows you to set the specific revision rules you want to apply to a model and get the model data based on these revision rules. If **TCModelParamsArray** is not specifically set, **SearchTC** will execute with the default revision rules.

Follow these steps to set custom revision rules:

1. Add a button called *Set revision rule* to a list item.
2. Set the **Viewer3D_TC/USE_ME/SetRevisionRules** nanoflow as the button's **On click** action:

 ![teamcenter-setrevisionrules](attachments/3d-viewer-for-teamcenter/teamcenter-setrevisionrules.jpg)

Run your app locally. You will be able to set a revision rule on the selected model and fetch the model with the needed information:

![teamcenter-setrevisionpage](attachments/3d-viewer-for-teamcenter/teamcenter-setrevisionpage.jpg)
