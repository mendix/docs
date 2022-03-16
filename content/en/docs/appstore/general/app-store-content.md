---
title: "Use Marketplace Content in Studio Pro"
url: /appstore/general/app-store-content/
category: "General Info"
weight: 20
tags: ["marketplace", "Studio Pro"]
description: "Covers the basics of how to access the Marketplace from Studio Pro and provides examples of how to add a widget and module to your app."
aliases:
    - /community/app-store/use-app-store-content-in-the-modeler.html
    - /developerportal/app-store/app-store-content.html
    - /developerportal/app-store/use-app-store-content-in-the-modeler.html
    - /community/app-store/use-app-store-content-in-the-modeler
    - /developerportal/app-store/app-store-content
    - /developerportal/app-store/use-app-store-content-in-the-modeler
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors "downloading", "widget", and "project-layout" below are mapped, so they should not be removed or changed.
---

## 1 Introduction

This how-to covers the basics of accessing the Marketplace from Studio Pro and provides examples of how to add a widget and a module to your application.

**This how-to will teach you how to do the following:**

* Download content from the Marketplace via Studio Pro
* Use content (for example, widgets, modules, and others) downloaded from the Marketplace in Studio Pro

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the [Marketplace Overview](/appstore/general/app-store-overview/)

## 3 Installing Marketplace Content{#install}

There are three ways to install a Marketplace component:

* [Download]( #downloading) the component from the Marketplace within Studio Pro – this works for all types of marketplace components, except [app services](/appstore/app-services/)
* [Import](#import) the component from the **App Explorer** – this works for [connectors](/appstore/connectors/), [modules](/appstore/modules/), and [app services](/appstore/app-services/)
* [Manually add](#add) the component into the app directory – this only works for [widgets](/appstore/widgets/)

### 3.1 Downloading Content from the Marketplace Within Studio Pro {#downloading}

{{% alert color="info" %}}This procedure only works for all types of marketplace components, except [app services](/appstore/app-services/).{{% /alert %}}

1. Open Studio Pro and sign in with your Mendix credentials.
2. Open the app in which you want to install the component from the Marketplace.
3.  Click the Marketplace icon in the top menu bar to open it in Studio Pro:

    {{< figure src="/attachments/appstore/general/app-store-content/toolbar.png" alt="Marketplace icon" >}}

    The Marketplace opens within Studio Pro. The **Categories** menu item on the left side gives an overview of which types of content are available.

4.  Use the **Search** bar to find the component that you want to download.

    {{% alert color="warning" %}}Results for Marketplace content searches within Studio Pro may differ from those in the [online Marketplace](/appstore/general/app-store-overview/) due to synchronization issues.{{% /alert %}}

    {{< figure src="/attachments/appstore/general/app-store-content/marketplace.png" alt="Search result for rating" >}}

5.  Click the component (or the **Read more** button on the right side) to show the details of the component.
6.  Check the **Mendix Version** on the **Overview** tab. Do not download a component that requires a higher **Mendix version** than the Studio Pro that you use.

    * Click **Download** to download the latest version of the component

        {{< figure src="/attachments/appstore/general/app-store-content/item-details.png" alt="Details of Rating widget" >}}

    * To download an older version, go to the **All Versions** tab and **Download** the right version.

        {{< figure src="/attachments/appstore/general/app-store-content/versions.png" alt="All Versions tab" >}}

7. If you download a widget, wait until a pop-up window states that the module was successfully imported. Click **OK**. You can find the imported widget in the **Toobox**.
8. If you download a component or a connector, the **Import Module** dialog box opens. Perform the following steps:
    1.  In the **Import Module** dialog box, select one of these options:

        * **Add as a new module** (default option when the module is downloaded to your app for the first time ) – if you select this option, new entities and attributes will be created in your app

        * **Replace existing module** (default option when the module already exists in your app) – if you select this option, you need to specify which **Module to replace**

            {{% alert color="warning" %}}If you have made any changes to the existing module, selecting **Replace existing module** option will replace all the changes that you made, for example, your renamed entities, attributes, and associations as well as their respective tables and columns represented in the database will all be replaced. Your user data will stay if you have not changed entities, attributes, or associations. If you have changed data types, your user data can be influenced as well. For more information, see [Attribute Type Migration](/refguide/attributes-type-migration/).{{% /alert %}}
        
    2. Click **Import**.
    3. Wait until a pop-up window states that the module was successfully imported. Click **OK**. You can find the imported module or connector in the **App Explorer**.
9. If you download an app, the **Download Marketplace App** dialog box opens. Perform the following steps:
    1. Select where the app should be stored: **New Mendix Team Server**, **Existing Mendix Team Server**, or **Locally on disk**. More settings become available.
    2. Change settings if needed.
    3. Click **OK**.

    After the app is downloaded, the app opens automatically in Studio Pro.

### 3.2 Importing Content from the App Explorer {#import}

{{% alert color="info" %}}This procedure works for [connectors](/appstore/connectors/), [modules](/appstore/modules/), and [app services](/appstore/app-services/).{{% /alert %}}

1. Go to the [Marketplace](https://marketplace.mendix.com/) and sign in with your Mendix credentials.
2. **Search** the component and open the component page.
3.  Check the **Usage** information on the right side. Do not download a component that requires a higher **Mendix version** than the Studio Pro that you use.

    *  Click **Download** to download the latest version of the component

        {{< figure src="/attachments/appstore/general/app-store-content/marketplace-version-requirement-download.png" alt="marketplace-version-requirement-download" >}}

    *  To download an older version, go to the **Releases** tab and **Download** the right version.

        {{< figure src="/attachments/appstore/general/app-store-content/releases-download.png" alt="releases-download" >}}

4.  In the **App Explorer**, right-click the app, click **Import module package**, and then select the component that you downloaded.

    {{< figure src="/attachments/appstore/general/app-store-content/import-module-in-app-explorer.png" alt="import-module-in-app-explorer" >}}

    The **Import Module** dialog box opens. 

5.  In the **Import Module** dialog box, select one of these options:
    *  **Add as a new module** (default option when the module is downloaded to your app for the first time ) – if you select this option, new entities and attributes will be created in your app
    *  **Replace existing module** (default option when the module already exists in your app) – if you select this option, you need to specify which **Module to replace**
        {{% alert color="warning" %}}If you have made any changes to the existing module, selecting **Replace existing module** option will replace all the changes that you made, for example, your renamed entities, attributes, and associations as well as their respective tables and columns represented in the database will all be replaced. Your user data will stay if you have not changed entities, attributes, or associations. If you have changed data types, your user data can be influenced as well. For more information, see [Attribute Type Migration](/refguide/attributes-type-migration/).{{% /alert %}}

6. Click **Import**. 
7. Wait until a pop-up window states that the module was successfully imported. Click **OK**. 

You can find the imported module or connector in the **App Explorer**.

### 3.3 Manually Adding Content into the App Directory {#add}

{{% alert color="info" %}}This procedure only works for [widgets](/appstore/widgets/).{{% /alert %}}

1. Go to the [Marketplace](https://marketplace.mendix.com/) and sign in with your Mendix credentials.
2. **Search** the component to find the component.
3. Open the component page.
4.  Check the **Usage** information on the right side. Do not download a component that requires a higher **Mendix version** than the Studio Pro that you use.

    *  Click **Download** to download the latest version of the component

        {{< figure src="/attachments/appstore/general/app-store-content/marketplace-rating-version-requirement.png" alt="All Versions tab" >}}

    *  To download an older version, go to the **Releases** tab and **Download** the right version

        {{< figure src="/attachments/appstore/general/app-store-content/marketplace-rating-all-releases-download.png" alt="marketplace-rating-all-releases-download" >}}

5. Open Studio Pro and sign in with your Mendix credentials.
6. Open the app in which you want to install the component from the Marketplace.
7. On the menu bar, go to **App** > **Show App Directory in Explorer**. The app directory opens.
8.  Add the component into the app directory as follows:
    * If it is a widget, add it into the **widgets** folder
    * If it is an *.mxmodule* file, add it into the **modules** folder – you need to create this folder if it is not present
9. In Studio Pro, go to **App** > **Synchronize App Directory** on the menu bar.
10. Wait until the synchronization is finished.

You can find the added widget in the **Toolbox** and you can find the added *.mxmodule* in the **App Explorer**.

## 4 Using Content in Studio Pro

After you download a component, you can use the component in your app. For detailed information on how a component works, check the **Documentation** tab on the page of the component in the Marketplace.

{{< figure src="/attachments/appstore/general/app-store-content/widget-documentation.png" alt="Documentation tab" >}}

### 4.1 Using a Widget  {#widget}

#### 4.1.1 Adding a Widget to a Page

After you [install](#install) the widget from the marketplace in your app, there are two ways to add the widget from the Marketplace via Studio Pro:

* Add a widget from the **Toolbox**
* Add a widget using the **Add widget** option

##### 4.1.1.1 Adding a Widget from the Toolbox 

1. Open the page where you want to add the widget.
2.  In the **Toolbox**, **search** the name of the widget, for example *Rating to find the widget.

    {{< figure src="/attachments/appstore/general/app-store-content/toolbox-rating.png" alt="Rating widget found in the toolbox" >}}

3. Drag the widget to the place on the page where you want it to be.

##### 4.1.1.2 Adding a Widget Using the Add Widget Option

1.  Click **Add widget** on the top on the page where you want to add the widget. The **Select Widget** dialog box opens.

    {{< figure src="/attachments/appstore/general/app-store-content/add-widget.png" alt="Add widget" >}}

2.  In the **Filter** bar, enter the name of the widget, for example *Rating*, to find the widget.

    {{< figure src="/attachments/appstore/general/app-store-content/select-widget.png" alt="Rating widget highlighted in Select Widget dialog box" >}}

3. Click the widget and then click **Select**. 
4.  In the page, click where you want to drop the widget. The widget is added to the location where the mouse pointer is.

    {{< figure src="/attachments/appstore/general/app-store-content/widget-dropped-in-page.png" alt="Rating widget in the page" >}}

#### 4.1.2 Updating a Widget to a Newer Version

To update a widget in your app to a newer version, go to the Marketplace to download the right version, and [install](#install) it in your app.

#### 4.1.3 Configuring a Widget

After you place a widget in your page, some new errors can appear in the [Errors](/refguide/errors-pane/) pane. That is because you still need to configure the widget. In this procedure, we use the Ratings widget as an example.

To configure the widget, follow these steps:

1.  Go to the **Errors** pane and check the error message. This error shows after you drop the **Rating** widget into the page:

    {{< figure src="/attachments/appstore/general/app-store-content/widget-errors.png" alt="Errors pane" >}}

2.  In the page, double-click the Rating widget. The **Edit Rating** dialog box opens and the **Attribute** field shows **(none)** – this means that no attribute is assigned, which causes the error.

    {{< figure src="/attachments/appstore/general/app-store-content/edit-rating.png" alt="Edit Rating dialog box" >}}

3.  Click **Select** to select an attribute. In this example, we select the attribute **ProductRating**. This is the attribute of an entity that we already created.

    {{< figure src="/attachments/appstore/general/app-store-content/select-attribute.png" alt="ProductRating selected in Select Attribute dialog box" >}}

4. In the **Edit Rating** dialog box, click **OK**. The error in the **Errors** pane disappears.

### 4.2 Using a Module {#module}

After you [install](#install) a module in your app, you can use it.

A module downloaded from the Marketplace has a light blue icon to differentiate it from the development modules.

#### 4.2.1 Updating a Module to a Newer Version{#update-module}

To update a module in your app to a newer version, go to the Marketplace to download the right version, and [install](#install) it in your app. When the **Import Module** dialog box opens, select **Replace existing module** and click **Import**.

{{% alert color="warning" %}}If you have made any changes to the existing module, selecting **Replace existing module** option will replace all the changes that you made, for example, your renamed entities, attributes, and associations as well as their respective tables and columns represented in the database will all be replaced. Your user data will stay if you have not changed entities, attributes, or associations. If you have changed data types, your user data can be influenced as well. For more information, see [Attribute Type Migration](/refguide/attributes-type-migration/).{{% /alert %}}

{{< figure src="/attachments/appstore/general/app-store-content/import-module.png" alt="Import Module dialog box" >}}

#### 4.2.2 Configuring a Module

Each module that you download from the Marketplace is different. Some modules can cause errors because they are connected to other modules. For example, after you download the Email with Templates module, you also need to download the [Mx Model Reflection](/appstore/modules/model-reflection/) module and [Encryption](/appstore/modules/encryption/) module to make the errors disappear. If you run into any problems, always check the **Documentation** tab on the page of this module in the Marketplace for installation guidelines and details on any dependencies.

### 4.3  Using an App or Layout {#project-layout}

Downloading an app or layout will create a new app structure in the location that you enter. After you click **Download**, a window will appear where you can specify how the app should be created.

{{% alert color="info" %}}
You cannot create a new app in an existing repository that is not empty.
{{% /alert %}}

### 4.4 Using a Theme

Downloading a theme is very similar to downloading a widget. Like a widget, a theme is added to the app structure – in the **theme** folder of your app. A theme downloaded from the Marketplace will immediately be set as the active theme for your app. You can find out which theme is active for your app in the app **Settings**.

## 5 Deleting Marketplace Content from Your App

### 5.1 Deleting a Widget

1. In Studio Pro, go to **App** > **Show App Directory in Explorer** on the menu bar to open the app directory.
2. Go to the **widgets** folder.
3. Remove the *.mpk* file for the widget.
4. In Studio Pro, go to **App** > **Synchronize App Directory**.

The widget is removed from your app.

### 5.2 Deleting a Module

1. In the **App Explorer**, find the module that you want to delete.
2.  Right-click the module and select **Delete** from the pop-up menu. A warning pop-up window opens.

    {{% alert color="warning" %}} Once you delete a module, all your user data will be lost – even if you later install the module again. If you want to replace the existing module with a different version, do not delete the module – [update the module](#update-module) instead.{{% /alert %}}

3. When you are sure that you want to delete the module and existing user data, click **Delete module and user data**.

The module and user data are removed from your app.

### 5.3 Deleting a Theme

1. In Studio Pro, go to **App** > **Show App Directory in Explorer** on the menu bar to open the app directory.
2. Go to the **theme** folder.
3. Remove the ZIP file for the theme.
4. In Studio Pro, go to **App** > **Synchronize App Directory**.

The theme is removed from your app.

## 6 Read More

* [Marketplace Overview](/appstore/general/app-store-overview/)
* [Import & Export Objects](/howto/integration/importing-and-exporting-objects/#3-exporting-objects)
* [How to Share Marketplace Content](/appstore/general/share-app-store-content/)
* [Marketplace Content Support](/appstore/general/app-store-content-support/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
* [My Top 5 Mendix Widgets for Speeding Up Application Development](http://www.mendix.com/blog/top-5-mendix-widgets-speeding-application-development/)

