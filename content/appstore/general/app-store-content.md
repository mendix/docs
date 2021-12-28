---
title: "Use Marketplace Content in Studio Pro"
category: "General Info"
menu_order: 20
tags: ["marketplace", "Studio Pro"]
description: "Covers the basics of how to access the Marketplace from Studio Pro and provides examples of how to add a widget and module to your app."
aliases:
    - /community/app-store/use-app-store-content-in-the-modeler.html
    - /developerportal/app-store/app-store-content.html
    - /developerportal/app-store/use-app-store-content-in-the-modeler.html
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

* Familiarize yourself with the [Marketplace Overview](app-store-overview)

## 3 Installing Marketplace Content{#install}

There are three ways to install a Marketplace component:

* [Download]( #downloading) the component from the Marketplace within Studio Pro
* [Import](#import) the component from the **App Explorer** (only for modules and connectors)
* Manually [add](#add) the component into the app directory (only for *.mxmodule* files for modules and *.mpk* files for widgets)

### 3.1 Downloading Content from the Marketplace Within Studio Pro {#downloading}

1. Open Studio Pro and sign in with your Mendix credentials.

2. Open the app in which you want to install the component from the Marketplace.

3. Click the Marketplace icon in the top menu bar to open it in Studio Pro:

    ![Marketplace icon](attachments/app-store-content/toolbar.png)

    The Marketplace opens within Studio Pro. The **Categories** menu item on the left side gives an overview of which types of content are available.

4. Use the **Search** bar to find the component that you need to download.

    {{% alert type="warning" %}}Results for Marketplace content searches within Studio Pro may differ from those in the [online Marketplace](app-store-overview) due to synchronization issues.{{% /alert %}}

    ![Search result for rating](attachments/app-store-content/marketplace.png)

5.  Click the component (or the **Read more** button on the right side) to show the details of the component.

6. Check the **Mendix Version** on the **Overview** tab. Do not download a component that requires a higher **Mendix version** than the Studio Pro that you use.

    * Click **Download** to download the latest version of the component

    ![Details of Rating widget](attachments/app-store-content/item-details.png)

    * To download an older version, go to the **All Versions** tab and **Download** the right version.

    ![All Versions tab](attachments/app-store-content/versions.png)

7. If you download a widget, wait until a pop-up window states that the module was successfully imported. Click **OK**. You can find the imported widget or connector in the **Toobox**.

8. If you download a component or a connector, the **Import Module** dialog box opens. Perform the following steps:

    1. In the **Import Module** dialog box, select one of these options:

        * **Add as a new module** – if you select this option, new entities are created in your app

        * **Replace existing module** – if you select this option, you need to specify which **Module to replace**

          {{% alert type="warning" %}}In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your app. If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard App Store content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

    2. Click **Import**.

    2. Wait until a pop-up window states that the module was successfully imported. Click **OK**. You can find the imported module or connector in the **App Explorer**.

9. If you download an app, the **Download Marketplace App** dialog box opens. Perform the following steps:

    1. Select where the app should be stored: **New Mendix Team Server**, **Existing Mendix Team Server**, or **Locally on disk**.
    2. After you do step 1, more settings become available. Change settings if needed.
    3. Click **OK**.

    After the app is downloaded, it opens automatically in Studio Pro.

### 3.2 Import Content from the App Explorer

{{% alert type="info" %}}This procedure is only used to import a module or a connector. You cannot use it to import a widget, a template, or an app.{{% /alert %}}

1. Go to the [Marketplace](https://marketplace.mendix.com/) and with your Mendix credentials.

2. **Search** the component and open the component page.

3. Check the **Usage** information on the right side. Do not download a component that requires a higher **Mendix version** than the Studio Pro that you use.

      * Click **Download** to download the latest version of the component

      ![marketplace-version-requirement-download](attachments/app-store-content/marketplace-version-requirement-download.png)

      * To download an older version, go to the **Releases** tab and **Download** the right version.

      ![releases-download](attachments/app-store-content/releases-download.png)

4. In the **App Explorer**, right-click the app, click **Import module package**, and then select the module or the connector that you downloaded.

      ![import-module-in-app-explorer](attachments/app-store-content/import-module-in-app-explorer.png)

      The **Import Module** dialog box opens. 

5.  In the **Import Module** dialog box, select one of these options:

    * **Add as a new module** – if you select this option, new entities are created in your app
    * **Replace existing module** – if you select this option, you need to specify which **Module to replace**

    {{% alert type="warning" %}}In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your app. If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard App Store content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

6. Click **Import**. 

7. Wait until a pop-up window states that the module was successfully imported. Click **OK**. You can find the imported module in the **App Explorer**.

### 3.3 Manually Add Content into the App Directory

{{% alert type="info" %}}Only use this procedure to import *.mxmodule* files for modules and *.mdk* files for widgets. You cannot use it to import *.mdk* files for modules.{{% /alert %}}

1. Go to the [Marketplace](https://marketplace.mendix.com/) and with your Mendix credentials.

2. **Search** the component and open the page.

3. Click **Download** to download the component.

   {{% alert type="info" %}}Make sure that you download the correct version. The version must be compatible with the Studio Pro version that you use. Do check the **Mendix Version** on the **Overview** tab. Do not download a compontent that requires a higher **Mendix version** than the Studio Pro that you use. You can download older versions of the component on the **All Versions** tab.{{% /alert %}}

   ![All Versions tab](attachments/app-store-content/versions.png)

4. Open Studio Pro and sign in with your Mendix credentials.

5. Open the app in which you want to install the component from the Marketplace.

6. On the menu bar, go to **App** > **Show App Directory in Explorer**. The app directory opens.

7. Add the component into the app directory as follows:

   * If it is an *.mxmodule* file, add it into the **modules** folder – you need to create this folder if it is not present

   * If it is an *.mpk* file for a widget, add it into the **widgets** folder

8. In Studio Pro, go to **App** > **Synchronize App Directory** on the menu bar.

9. Wait until the synchronization is finished. You can find the added module in the **App Explorer**, and you can find the added widget in the **Toolbox**.

## 4 Using Content in Studio Pro

After you download a component, you can use the component in your app. 

{{% alert type="info" %}}
For more information on how a component works, check the **Documentation** tab on the page of the component in the Marketplace.
{{% /alert %}}

![Documentation tab](attachments/app-store-content/widget-documentation.png)

### 4.1 Using a Widget  {#widget}

#### 4.1.1 Adding a Widget to a Page

After you [install](#install) the widget from the marketplace to your app, there are two ways to add the widget from the Marketplace via Studio Pro:

* Add a widget from the **Toolbox**

* Add a widget via the **Add widget** option

##### 4.1.1.1 Adding a Widget from the Toolbox 

1. Open the page where you want to add the widget.

2. In the **Toolbox**, **search** the name of the widget, for example *Rating*. The widget is found.

   ![Rating widget found in the toolbox](attachments/app-store-content/toolbox-rating.png)

3. Drag the widget to the place on the page where you want it to be.

##### 4.1.1.2 Adding a Widget via the Add Widget Option

1. Click **Add widget** on the top on the page where you want to add the widget. The **Select Widget** dialog box opens.

    ![Add widget](attachments/app-store-content/add-widget.png)

3. In the **Filter** bar, enter the name of the widget, for example *Rating*. The widget is found. 

    ![Rating widget highlighted in Select Widget dialog box](attachments/app-store-content/select-widget.png)

4. Click the widget and then click **Select**. 

5. In the page of your app, click where you want to drop the widget. The widget is added to the location where the mouse pointer is.

    ![Rating widget in the page](attachments/app-store-content/widget-dropped-in-page.png)

#### 4.1.2 Updating a Widget to a Newer Version

To update a widget in your app to a newer version, follow these steps:

1. Open the app in which you want to update the widget.

2. Click the Marketplace icon in the top menu bar to open the Marketplace in Studio Pro:

   ![Marketplace icon](attachments/app-store-content/toolbar.png)

3. Find the widget in the Marketplace.

4. Click the component or **Read more** to view the details of the component.

5. Go to the **All Versions** tab.

   ![all-versions-tab](attachments/app-store-content/all-versions-tab.png)

6. Click **Download** to download the latest version. The **Question** dialog box opens and asks if you want to overwrite the existing package.

7. Click **Yes** to proceed. 

The widget is updated to the latest version.

#### 4.1.3 Deleting a Widget

1. In Studio Pro, go to **App** > **Show App Directory in Explorer** on the menu bar to open the app directory.

2. Go to the **widgets** folder.

3. Remove the *.mpk* file for the widget.

4. In Studio Pro, go to **App** > **Synchronize App Directory**.

The widget is removed from your app.

#### 4.1.4 Configuring a Widget

After you place a widget in your page, some new errors can appear in the [Errors](/refguide/errors-pane) pane. That is because you still need to configure the widget.

To configure the widget, follow these steps:

1. Go to the **Errors** pane and check the error message. This error shows after you drop the **Rating** widget into the page:

    ![Errors pane](attachments/app-store-content/widget-errors.png)

2. In the page, double-click the Rating widget. The **Edit Rating** dialog box opens and the **Attribute** field shows **(none)** – this means that no attribute is assigned, which causes the error.

    ![Edit Rating dialog box](attachments/app-store-content/edit-rating.png)


3. Click **Select** to select an attribute. In this example, we select the attribute **ProductRating**. This is the attribute of an entity that we already created.

    ![ProductRating selected in Select Attribute dialog box](attachments/app-store-content/select-attribute.png)

4. In the **Edit Rating** dialog box, click **OK**. The error in the **Errors** pane should disappear.

### 4.2 Using a Module {#module}

After you [install](#install) a module, you can use it. A module includes the whole functionality and integration that can be very helpful when you are building your application.

A module contains a domain model, pages, and microflow logic. Sometimes, additional widgets are added when you download a module. For example, **Image Crop** module contains the **Image Cropper** widget.

A module downloaded from the Marketplace stores files if the module contains files (for example, files that are contained in the **userlib** or **resource** folders). In addition, a module downloaded from the Marketplace has a light blue icon to differentiate it from the development modules.

#### 4.2.2 Updating a Module

1. Open the app in which you want to update the module.

2. Click the Marketplace icon in the top menu bar to open the Marketplace in Studio Pro:

   ![Marketplace icon](attachments/app-store-content/toolbar.png)

3. Find the module in the Marketplace.

4. Click the module or **Read more** to view the details of the module.

5. Go to the **All Versions** tab.

6. Click **Download** to download the latest version. The **Import Module** dialog box opens.

   ![Import Module dialog box](attachments/app-store-content/import-module.png)

7. Select **Replace existing module** and click **Import**.

8. When the **Warning** dialog box shows the files that will be overwritten, click **OK**.

9. Wait until a pop-up window states that the module was successfully imported. Click **OK**.

The module is updated to the latest version.

#### 4.2.3 Configuring a Module

Each module that you download from the Marketplace is different. Some modules can cause errors because they are connected to other modules. For example, when you download the Email with Templates module, you also need to download the [Mx Model Reflection](/appstore/modules/model-reflection) module and [Encryption](/appstore/modules/encryption) module to make the errors disappear. If you run into any problems, always check the **Documentation** tab on the page of this module in the Marketplace for installation guidelines and details on any dependencies.

For details on configuring the Email with Templates module in Studio Pro, see [Email with Templates](/appstore/modules/email-with-templates).

### 4.3  Using an App or Layout {#project-layout}

Downloading an app or layout will create a new app structure in the location that you enter. After you click **Download**, a window will appear where you can specify how the app should be created.

{{% alert type="info" %}}
You cannot create a new app in an existing repository that is not empty.
{{% /alert %}}

### 4.4 Using a Theme

Downloading a theme is very similar to downloading a widget. Like a widget, a theme is added to the app structure – in the **theme** folder of your app. A theme downloaded from the Marketplace will immediately be set as the active theme for your app. You can find out which theme is active for your app in the app **Settings**.

{{% alert type="info" %}}
If you want to delete a theme from the app, go to **App** > **Show App Directory in Explorer** to open the app folder, and then remove the ZIP file from the **theme** folder.
{{% /alert %}}

## 5 Read More

* [Marketplace Overview](app-store-overview)
* [How to Share Marketplace Content](share-app-store-content)
* [Marketplace Content Support](app-store-content-support)
* [Properties Common in the Page Editor](/refguide/common-widget-properties)
* [My Top 5 Mendix Widgets for Speeding Up Application Development](http://www.mendix.com/blog/top-5-mendix-widgets-speeding-application-development/)

