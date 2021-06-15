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

* Install content from the Marketplace via Studio Pro
* Download widgets and modules from the Marketplace into Studio Pro
* Use other Marketplace content in Studio Pro

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Familiarize yourself with the [Marketplace Overview](app-store-overview)

## 3 Downloading Content from the Marketplace {#downloading}

To download content from the Marketplace via Studio Pro, follow these steps:

1. Open Studio Pro and sign in with your Mendix credentials.

2. Open the project in which you want to install a component.

3.  Click the Marketplace icon in the top menu bar to open it in Studio Pro:

	![](attachments/app-store-content/toolbar.png)

4.  On the Marketplace overview page, find the content to use in your app. The **Categories** gives you an overview of which types of contents you can download. You can use the **Search** bar to find the specific project or component.

	![](attachments/app-store-content/marketplace.png)
    
	{{% alert type="info" %}}
	Results for Marketplace content searches done in Studio Pro may differ from those done in the [online Marketplace](app-store-overview) due to sync issues.
	{{% /alert %}}

5.  Click the content or **Read more** to view the details of the content:

	![](attachments/app-store-content/item-details.png)

6. Click **Download** to download the content to your app. 

    Make sure that you download the correct version. The version must be compatible with the Studio Pro version that you use. Check the **Mendix Version** in the **Overview**. Do not download the content that requires a higher **Mendix version** than the Studio Pro that you use. You can download older versions of the content in the **All Versions** tab.

    ![](attachments/app-store-content/versions.png)

After you download the content:
* If the content is a project, it is created on your hard-drive and is opened in Studio Pro
* If the content is a component, it is downloaded directly into your project
## 4 Using Content in Studio Pro {#widget}

After you download the content, you can use the content in your app. 

{{% alert type="info" %}}
For more information on what the content works, go to the **Documentation** tab on the page of this content in the Marketplace.
{{% /alert %}}

![](attachments/app-store-content/widget-documentation.png)



### 4.1 Using a Widget

You can download a widget from the Marketplace and use it in your project. We will use the [Rating](../widgets/rating) widget as an example. You can follow the steps to use any widget from the Marketplace.

#### 4.1.1 Adding the Widget

To add the Rating widget from the Marketplace via Studio Pro, follow these steps:

1. [Download the Rating widget from the marketplace to your project](#downloading).

2. Click **Add widget**. The **Select Widget** dialog box opens.

   ![](attachments/app-store-content/add-widget.png)

3. In the **Filter** bar, enter *Rating*. The downloaded widget is found in the **Add-on** widgets category. 

   ![](attachments/app-store-content/select-widget.png)

4. Click the **Rating** widget and click **Select**. 

5. In the page of your project, click where you want to drop the widget. After you release the mouse button, the widget is placed in the page.

   ![](attachments/app-store-content/widget-dropped-in-page.png)

   {{% alert type="info" %}}
   If you want to delete a widget from the project, go to **App** > **Show App Directory in Explorer**, and remove the *.mpk* file from the **widgets** folder.
   {{% /alert %}}

#### 4.1.2 Configuring a Widget

After you place a widget in your page, there can be some new errors in the **Errors** pane. That is because you need to configure the widget.

To configure the widget, follow these steps:

1. Go to the **Errors** pane and check the error message. This error shows after you drop the **Rating** widget into the page:

   ![](attachments/app-store-content/widget-errors.png)

2. In the page, double-click the Rating widget. The **Edit Rating** dialog box opens. The **Attribute** field shows **(none)** . This means that no attribute is assigned, which causes the error.

   ![](attachments/app-store-content/edit-rating.png)


3. Click **Select** to select an attribute. In this example, we select the attribute **ProductRating**. This is the attribute of an entity that we already created.

   ![](attachments/app-store-content/select-attribute.png)

4. In the **Edit Rating** dialog box, click **OK**. The error in the **Errors** pane should be resolved.

### 4.2 Using a Module

You can also download entire modules from the Marketplace. The modules include whole functionality and integrations that can be very helpful when you are building your applications.

In this section, we will use the [Email with templates](../modules/email-with-templates) module as an example. You can follow the steps to use any module from the Marketplace.

#### 4.2.1 Adding the Module

To add the Email with template module from the Marketplace via Studio Pro, follow these steps:

1. [Download the Email with templates module from the marketplace to your project](#downloading). 

   The **Import Module** dialog box opens:

   ![](attachments/app-store-content/import-module.png)

   * **Add as a new module** – if you select this option, new entities are created in your project
   * **Replace existing module** – if you select this option, you need to specify which **Module to replace**

   {{% alert type="warning" %}}When you select **Replace existing module**, a warning will show you which files in the app directory will be overwritten. If you click **OK**, these files will be replaced by the standard files. Be careful with this option when you have made changes to a module that you downloaded – once the files are replaced, you will have the standard Marketplace module again, with new entities and attributes. The entities and attributes that you renamed and their respective tables and columns represented in the database are all deleted. We recommend that you do not make changes to the downloaded modules, unless you will not update your content in the future and understand the implications of your changes.{{% /alert %}}

2. In the **Import Module** dialog box, click **Import**.

3. Wait until a pop-up window shows **The module was successfully imported into your project.** 

4. Click **OK**.

5. Open the **App Explorer** and find the **EmailTemplate** module.

![](attachments/app-store-content/email-template-app-explorer.png)

{{% alert type="info" %}}Unlike a widget, you can see a module in your App Explorer. A module contains a domain model, pages, and microflow logic. A module downloaded from the Marketplace stores files if the module contains files (for example, files that are contained in the **userlib** or **resource** folders). In addition, a module downloaded from the Marketplace has a light blue icon to differentiate it from the development modules. Sometimes additional widgets are added when you download a module. For example, **Image Crop** module contains the **Image Cropper** widget.{{% /alert %}}

#### 4.2.1 Configuring the Module

Each module that you download from the Marketplace is different. Some modules can cause errors because they are connected to other modules. For example, when you download the Email with templates module, you also need to download the [Mx Model Reflection](../modules/model-reflection) module and [Encryption](../modules/encryption) module to make the errors disappear. If you run into any problems, always check the **Documentation** tab on the page of this content in the Marketplace for installation guidelines and details on any dependencies.

To use the Email with templates module in Studio Pro, see [Email with templates](../modules/email-with-templates).

### 4.3  Using a Project or Layout {#project-layout}

Downloading a project or layout will create a new project structure in the the location that you enter. After clicking **Download**, a window will appear where you can specify how the project should be created.

{{% alert type="info" %}}
You cannot create a new project in an existing repository that is not empty.
{{% /alert %}}

### 4.4 Using a Theme

Downloading a theme is very similar to downloading a widget. Like a widget, a theme is added to the project structure – in the **theme** folder of your app. A theme downloaded from the Marketplace will immediately be set as the active theme for your project. You can find out which theme is active for your project in the app  project **Settings**.

To delete a theme, remove the ZIP file from your project's **theme** folder.

## 5 Read More

* [Marketplace Overview](app-store-overview)
* [How to Share Marketplace Content](share-app-store-content)
* [Marketplace Content Support](app-store-content-support)
* [Properties Common in the Page Editor](/refguide/common-widget-properties)
* [My Top 5 Mendix Widgets for Speeding Up Application Development](http://www.mendix.com/blog/top-5-mendix-widgets-speeding-application-development/)

