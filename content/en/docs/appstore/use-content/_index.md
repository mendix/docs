---
title: "Using Marketplace Content"
url: /appstore/use-content/
linktitle: "Using Marketplace Content"
weight: 2
description: "Covers the basics of how to access the Marketplace from Studio Pro and provides examples of how to add a widget and module to your app."
aliases:
    - /appstore/general/app-store-content/
    - /community/app-store/use-app-store-content-in-the-modeler/
    - /developerportal/app-store/app-store-content/
    - /developerportal/app-store/use-app-store-content-in-the-modeler/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors "downloading", "widget", and "project-layout" below are mapped, so they should not be removed or changed.
---

## Introduction

This how-to covers the basics of accessing the Marketplace from Studio Pro and provides examples of how to add a widget and a module to your application.

This how-to teaches you how to do the following:

* Download content from the Marketplace via Studio Pro
* Use content (for example, modules) downloaded from the Marketplace in Studio Pro

{{% alert color="warning" %}}
If you are using Studio Pro on a Mac with Parallels, see [this update](https://kb.parallels.com/112091#section7) for improving the loading time of Marketplace in Studio Pro.
{{% /alert %}}

## Installing Marketplace Content {#install}

There are three ways to install a Marketplace component, which are described in the sections below.

### Finding and Downloading Content in Studio Pro {#downloading}

#### For Studio Pro 9.19 and Above {#current-sp}

To download content in Studio Pro [9.19](/releasenotes/studio-pro/9.19/) and above, follow these steps:

1. Open Studio Pro and sign in with your Mendix credentials.

2. Open the app in which you want to install the component from the Marketplace.

3. To open the Marketplace in Studio Pro, you can either click the **View** menu in the top bar and select **Marketplace**, or you can click the Marketplace icon on the right side of the top bar

    {{< figure src="/attachments/appstore/use-content/toolbar.png" alt="Marketplace icon" class="no-border" >}}

    The **Marketplace** pane opens.

    {{< figure src="/attachments/appstore/use-content/marketplace.png" alt="Search result for rating" class="no-border" >}}

4. You can explore Marketplace content in the following ways:
    * Use **Search in the Marketplace** to find the component that you want to download
        * You can paste the content ID here if you copied it via the [Use in Studio Pro button](/appstore/component-details/) in the web Marketplace
    * Filter via the **Categories** and **Subcategories** drop-down menus, which correspond to the [Marketplace content types](/appstore/overview/)
    * Filter for **All Content**, **My Company Content**, or **Platform-Supported Content**

5. Select a component from the pane to see its details:

    {{< figure src="/attachments/appstore/use-content/component-details.png" alt="Details of Blank App example component" class="no-border" >}}

    The details presented here correspond to what you see on the [component details page](/appstore/component-details/) in the online Mendix Marketplace.

6. Click **Download** to download the component. The correct version of the component that is compatible with your Studio Pro version is integrated directly into your application (for widgets, version compatibility is not applicable). By default, the highest correct version of the component is downloaded. If you want to download an older component version, go to the **Releases** tab and click **Download** for the desired version.

7. Depending on whether the component is a widget, a module, an [extension](/appstore/modules/#introduction), (which is a special type of module), or an app, go to one of the sections below:

    * [Widgets](#widgets)
    * [Modules](#modules)
    * [Extensions](#extensions)
    * [Apps](#apps)

##### Widgets {#widgets}

If you download a widget, a pop-up window states the module was successfully imported. Click **OK**, and you can find the imported widget in the **Toolbox**.

##### Modules {#modules}

If you download a module, the **Import Module** dialog box opens, where you should perform the following steps:

1. Select one of these options:

   * **Add as a new module** (default option when the module is downloaded to your app for the first time ) – if you select this option, new entities and attributes are created in your app.

   * **Replace existing module** (default option when the module already exists in your app) – if you select this option, you need to specify which **Module to replace**

     {{% alert color="warning" %}}If you have made any changes to the existing module, selecting the **Replace existing module** option will replace all the changes that you made (for example, your renamed entities, attributes, and associations as well as their respective tables and columns represented in the database will all be replaced). Your user data will stay if you have not changed entities, attributes, or associations. If you have changed data types, your user data can be influenced as well. For more information, see [Attribute Type Migration](/refguide/attributes-type-migration/).{{% /alert %}}

2. Click **Import**.
   
3. Wait until a pop-up window states that the module was successfully imported. Click **OK**. You can find the imported module in the **App Explorer**. 

##### Extensions {#extensions}

If you download an [extension](/appstore/modules/#introduction), a warning dialog box opens.

* If you trust the extension, click **Trust module and enable extension**.

* If you decide to not trust the extension, you will get asked whether or not to trust the extension every time you reload the application. 

Click **OK** in the confirmation pop-up window. Your extension is now installed and is ready to use. Depending on the extension that you have installed, the functionality appears in a certain location of your app. Read the extension-specific documentation to get more information on how to use it.

If you do not want to trust the extension and would prefer to remove the extension altogether, you can remove the add-on module that was added.

{{< figure src="/attachments/appstore/use-content/trust-extension.png" alt="trust extension" >}}

##### Apps {#apps}

If you download an app, the **Download Marketplace App** dialog box opens, where you should perform the following steps:

1. Select where the app should be stored: **New Mendix Team Server**, **Existing Mendix Team Server**, or **Locally on disk**. 
2. Configure the necessary settings based on your storage choice.
3. Click **OK**.

    After the app is downloaded, it opens automatically in Studio Pro.

#### For Studio Pro 9.18 and Below

To download content in Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and below, follow these steps:

1. Open Studio Pro and sign in with your Mendix credentials.
2. Open the app in which you want to install the component from the Marketplace.
3. Click the Marketplace icon in the top menu bar to open it in Studio Pro. The Marketplace opens within Studio Pro. The **Categories** menu item on the left side gives an overview of which types of content are available.
4. Use the **Search** bar to find the component that you want to download. Note that results for Marketplace content searches within Studio Pro may differ from those in the online [Marketplace](/appstore/overview/) due to synchronization issue.
5. Click the component (or the **Read more** button on the right side) to show the details of the component.
6. Click **Download** to download the component. The correct version of the component that is compatible with your Studio Pro version is integrated directly into your application (for widgets, version compatibility is not applicable). By default, the highest correct version of the component is downloaded. If you want to download an older component version, go to the **Releases** tab and click **Download** for the desired version.
7. Depending on whether the component is a widget, a module, or an app, go to one of the sections above:

   * [Widgets](#widgets)
   * [Modules](#modules)
   * [Apps](#apps)

### Importing Content from Studio Pro's App Explorer {#import}

{{% alert color="info" %}}This procedure works for [modules](/appstore/modules/) (including [add-on and solution modules](/refguide/module-settings/#module-type)).{{% /alert %}}

To import content downloaded from the online Mendix Marketplace into Studio Pro, follow these steps:

1. Go to the [Marketplace](https://marketplace.mendix.com/) and sign in with your Mendix credentials.
2. Search in the online Marketplace for the component you want to download and open the [component details page](/appstore/component-details/).
3. Check **Usage** > **Version** to see the required Studio Pro version for the component. Do not download a component that requires a higher version than the one you are using.
4. Go to the **Releases** tab and **Download** the desired version. Mendix recommends using the latest version of the component if possible.
5. In the **App Explorer**, right-click the app, then click **Import module package**, and select the component you downloaded:

    {{< figure src="/attachments/appstore/use-content/import-module-in-app-explorer.png" alt="import-module-in-app-explorer" class="no-border" >}}

    The **Import Module** dialog box opens. 

6. In the **Import Module** dialog box, select one of these options:

    * **Add as a new module** (default option when the module is downloaded to your app for the first time ) – if you select this option, new entities and attributes are created in your app
    * **Replace existing module** (default option when the module already exists in your app) – if you select this option, you need to specify which **Module to replace**

        {{% alert color="warning" %}}If you have made any changes to the existing module, selecting the **Replace existing module** option will replace all the changes that you made (for example, your renamed entities, attributes, and associations as well as their respective tables and columns represented in the database will all be replaced). Your user data will stay if you have not changed entities, attributes, or associations. If you have changed data types, your user data can be influenced as well. For more information, see [Attribute Type Migration](/refguide/attributes-type-migration/).{{% /alert %}}
    
7. Click **Import**. 
8. Wait until a pop-up window states that the module was successfully imported. Click **OK**. 

You can find the imported module in the **App Explorer**.

### Manually Adding Content into App Directory {#add}

To manually add content downloaded from the online Mendix Marketplace into Studio Pro, follow these steps:

1. Go to the [Marketplace](https://marketplace.mendix.com/) and sign in with your Mendix credentials.
2. Search in the online Marketplace for the component you want to download and open the [component details page](/appstore/component-details/).
3. Check **Usage** > **Version** to see the required Studio Pro version for the component. Do not download a component that requires a higher version than the one you are using.
4. Click **Download** to download the latest version of the component. Or, if you want to download an older component version, go to the **Releases** tab and **Download** the desired version.
5. Open Studio Pro and sign in with your Mendix credentials.
6. Open the app in which you want to install the Marketplace component.
7. On the menu bar, click **App** > **Show App Directory in Explorer**. The app directory opens.
8. Add the component into the app directory as follows:
    * If it is a widget, add it into the **widgets** folder
    * If it is an *.mxmodule* file, add it into the **modules** folder (you need to create this folder if it does not already exist)
9. On the menu bar, click **App** > **Synchronize App Directory**.
10. Wait until the synchronization is finished.

You can find the added widget in the **Toolbox** or the added *.mxmodule* in the **App Explorer**.

## Using Content in Studio Pro

After you download a component, you can use the component in your app. For detailed information on how a component works, check the **Documentation** tab on the page of the component in the Marketplace.

### Using a Widget  {#widget}

#### Adding the Widget to a Page

After you [install](#install) the widget from the Marketplace in your app, there are two ways to add the widget from the Marketplace via Studio Pro.

To add a widget from the **Toolbox**, follow these steps:

1. Open the page where you want to add the widget.
2. In the **Toolbox**, search for the name of the widget (for example, *Rating* to find the widget):

    {{< figure src="/attachments/appstore/use-content/toolbox-rating.png" alt="Rating widget found in the toolbox" class="no-border" >}}

3. Drag the widget to the place on the page where you want it to be.

To add a widget using the **Add widget** option from the toolbar, follow these steps:

1. Click **Add widget** on the toolbar on the page where you want to add the widget. The **Select Widget** dialog box opens.

    {{< figure src="/attachments/appstore/use-content/add-widget.png" alt="Add widget" class="no-border" >}}

2. In the **Filter** bar, enter the name of the widget, for example *Rating*, to find the widget.

    {{< figure src="/attachments/appstore/use-content/select-widget.png" alt="Rating widget highlighted in Select Widget dialog box" class="no-border" >}}

3. Click the widget and then click **Select**. 
4. In the page, click where you want to drop the widget. The widget is added to the location where the mouse pointer is.

    {{< figure src="/attachments/appstore/use-content/widget-dropped-in-page.png" alt="Rating widget in the page" class="no-border" >}}

#### Updating the Widget to a Newer Version

To update the widget in your app to a newer version, go to the Marketplace to download the right version, and [install](#install) it in your app.

##### Maintaining Added Translations in a Widget to Update

In the scenario where you have an app with multiple languages in which you need to update an imported Marketplace widget that only comes with one language and where you have manually added translations for the additional languages you need, you can maintain the additional translations by following these steps:

1. Maintain the translations for the widget by [exporting them to Excel](/refguide/batch-translate/#export).
2. Update the widget via the steps described above.
3. [Import](/refguide/batch-translate/#import) the maintained translations from the Excel.

#### Configuring the Widget

After you place the widget in your page, some new errors can appear in the [Errors](/refguide/errors-pane/) pane. That is because you still need to configure the widget. In this procedure, the Ratings widget is used as an example.

To configure the widget, follow these steps:

1. Go to the **Errors** pane and check the error message. This error shows after you drop the **Rating** widget into the page:

    {{< figure src="/attachments/appstore/use-content/widget-errors.png" alt="Errors pane" class="no-border" >}}

2. In the page, double-click the Rating widget. The **Edit Rating** dialog box opens and the **Attribute** field shows **(none)** – this means that no attribute is assigned, which causes the error.

    {{< figure src="/attachments/appstore/use-content/edit-rating.png" alt="Edit Rating dialog box" class="no-border" >}}

3. Click **Select** to select an attribute. In this example, we select the attribute **ProductRating**. This is the attribute of an entity that we already created.

    {{< figure src="/attachments/appstore/use-content/select-attribute.png" alt="ProductRating selected in Select Attribute dialog box" class="no-border" >}}

4. In the **Edit Rating** dialog box, click **OK**. The error in the **Errors** pane disappears.

### Using a Module {#module}

After you [install](#install) a module in your app, you can use it.

A module downloaded from the Marketplace has a light blue icon to differentiate it from the development modules.

#### Updating the Module to a Newer Version {#update-module}

To update the module in your app to a newer version, follow these steps:

1. Before downloading the newer version, remove all the Java libraries that are only used by this module from the **userlib** folder in your app directory. Java libraries are accompanied by a blank *[Module].RequiredLib* file. This will help you identify by which module the Java libraries are used. Doing this prevents you from ending up with having conflicting Java libraries which cause unexpected issues. 

2. Go to the Marketplace to download the right version and [install](#install) it in your app. When the **Import Module** dialog box opens, select **Replace existing module** and click **Import**.

   {{% alert color="warning" %}}If you have made any changes to the existing module, selecting **Replace existing module** option will replace all the changes that you made, for example, your renamed entities, attributes, and associations as well as their respective tables and columns represented in the database will all be replaced. Your user data will stay if you have not changed entities, attributes, or associations. If you have changed data types, your user data can be influenced as well. For more information, see [Attribute Type Migration](/refguide/attributes-type-migration/).{{% /alert %}}

   {{< figure src="/attachments/appstore/use-content/import-module.png" alt="Import Module dialog box" class="no-border" >}}

3. Check the **userlib** folder in your app directory for duplicate Java libraries. If your **userlib** folder contains multiple versions of the same Java library, it is usually safe to delete the old ones and keep only the new one.

##### Maintaining Added Translations in a Module to Update

In the scenario where you have an app with multiple languages in which you need to update an imported Marketplace module that only comes with one language and where you have manually added translations for the additional languages you need, you can maintain the additional translations by following these steps:

1. Maintain the translations for the module by [exporting them to Excel](/refguide/batch-translate/#export).
2. Update the module via the steps described above.
3. [Import](/refguide/batch-translate/#import) the maintained translations from the Excel.

#### Configuring the Module

Each module that you download from the Marketplace is different. Some modules can cause errors because they are connected to other modules. For example, after you download the [Database Replication](/appstore/modules/database-replication/) module, you also need to download the [Mx Model Reflection](/appstore/modules/model-reflection/) module to accomplish the configuration. If you run into any problems, always check the **Documentation** tab on the page of this module in the Marketplace for installation guidelines and details on any dependencies.

Keep in mind that some modules you can download may come with their own user roles. If the **Security level** of your app is set to **Prototype/demo** or **Production**, you need to map the module roles to the applicable user roles in your app.

### Using a Starter App

Downloading a starter app (via **Create New App**) creates a new app structure in the storage location that you select. After you click **Download**, a window will appear where you can specify how the app should be created.

{{% alert color="info" %}}
You cannot create a new app in an existing repository that is not empty.
{{% /alert %}}

## Deleting Marketplace Content from Your App

To remove a widget from your app, follow these steps:

1. In Studio Pro, go to **App** > **Show App Directory in Explorer** on the menu bar to open the app directory.
2. Go to the **widgets** folder.
3. Remove the *.mpk* file for the widget.
4. In Studio Pro, go to **App** > **Synchronize App Directory**.

To remove a module and user data from your app, follow these steps:

1. In the **App Explorer**, find the module that you want to delete.
2. Right-click the module and select **Delete** from the pop-up menu. A warning pop-up window opens.

    {{% alert color="warning" %}} Once you delete a module, all your user data will be lost – even if you later install the module again. If you want to replace the existing module with a different version, do not delete the module – [update the module](#update-module) instead.{{% /alert %}}

3. When you are sure that you want to delete the module and existing user data, click **Delete module and user data**.

## Read More

* [Importing and Exporting Apps, Modules, Widgets, and Documents](/refguide/import-and-export/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
* [My Top 5 Mendix Widgets for Speeding Up Application Development](https://www.mendix.com/blog/top-5-mendix-widgets-speeding-application-development/)
