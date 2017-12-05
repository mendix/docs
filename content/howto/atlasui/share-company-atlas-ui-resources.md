---
title: "Share Company Atlas UI Resources"
category: "Atlas UI"
tags: ["Atlas", "UI", "UX", "user experience"]
---

## 1 Introduction

Creating company UI resources is a great way to let Mendix developers quickly create new beautiful applications with out-of-the-box company-branded themes, page templates, and building blocks. This is a great way to align multiple apps with the same UI resources, keeping your company brand as well as look and feel consistent. 

**This how-to will teach you how to do the following:**

* Share the UI Resources module
* Maintain the UI Resources module

## 2 Exporting Your Company Atlas UI Resources

When your custom resources are ready to be shared with multiple developers or apps, you can export the module from the **Project Explorer** in the Desktop Modeler. To do this, right-click the **UI Resources** module, export it, and save it:

![](attachments/howto/sharing_export_uiresources.png)

You are free to change the name of the module after it has been exported as a UI resource package.

The module can now be imported in other apps or uploaded to the Mendix App Store. It is also possible to make the module available for private use only, so that everybody in your company can benefit from and extend it.

In the next section, the process of sharing UI resources will be made clear.

## 3 Sharing and Maintaining Your Company Atlas UI Resources

The Mendix App Store is a great way to share UI resources throughout your company. Everybody in your company can benefit from using these UI resources, and you can document and keep track of changes made to the resources. Never worry about losing your UI resources or making errors, because everything is taken care of with the Mendix App Store version control system.

There are two important options to keep in mind when uploading a UI resources module:

* **Publish to** – this option lets you share the UI resources in a private app store (company-only) or with the public audience (the entire Mendix community)
* **Category** – choose the **UI Resources** category to make the module available as a UI resources module

![](attachments/howto/sharing_appstore_addcontent.png)

When you upload new UI resources to the public Mendix App Store, the content will need to be reviewed and approved by Mendix. However, when you publish UI resources to a private app store, the content will not have to be reviewed, and it will be directly available in your company after publishing.

## 4 Using Your Company Atlas UI Resources

This section describes how Mendix developers in your company can benefit from the UI Resources module.

### 4.1 Including the UI Resources Module With a Company Starter App

A UI Resources module is a great way to keep all the UI resources centralized in your application. It would be a lot of work to download the UI Resources module every time a Mendix developer starts a new Mendix app. An easier way to share the UI Resources for new Mendix apps is to create a blank company starter app with the UI Resources module already included. This blank app can also be extended with logic and data, depending on what your Mendix developers need to quickly create Mendix applications.

Let’s start with creating a new Mendix application in the Mendix Developer Portal or directly in the Mendix Desktop Modeler:

1.  Under the **Starter Apps** tab, select the **Blank App**, and open the new app in the Desktop Modeler.

    ![](attachments/howto/sharing_createnewapp.png)

2. Expand at the **App Store modules** at the Mendix **Project** level and find the default **Atlas_UI_Resources** module. Right-click this module and delete it:

    ![](attachments/howto/sharing_delete_module.png)

3. Now it’s time to import your company UI resources (if you have not created the UI resources yet, see [How to Create Company UI Resources](create-company-atlas-ui-resources)). Import these resources by clicking **App Store** in the top toolbar of the Desktop Modeler, and then selecting **UI Resources** in the left sidebar **Categories** menu.
4. Download the company UI resources module you have created.
5. When the download is complete, the UI resources will be visible in the **App Store modules** in **Project Explorer**.  Be sure to check if all the errors are resolved before continuing.

Now that you have added your company UI resources to your company starter app, you can share the app in the Mendix App Store just as you did with the company UI resources (see the next section for details). The company starter app will be available for your Mendix developers to use whenever they want to create a new app, allowing them to save time and skip downloading the company UI resources separately.

#### 4.1.1 Sharing and Maintaining Your Company Starter App

Now that you have created a company starter app, the next step is to share it with your company. The easiest way to do this is by uploading it to your private app store.

There are four important options to keep in mind when uploading your company starter app:

* **Publish to** – this option must be set to **Private App Store**
* **Category** – select the **Create New App**
* **Sub category** – select the **Starter Apps** sub-category to make the app available in the "create new app flow" for the Mendix Platform
* **Impressions** – impressions contain the images that are shown when creating a new app in the Mendix Platform

![](attachments/howto/sharing_appstore_addcontent_starterapp.png)

These are examples of app impression images:

![](attachments/howto/sharing_createnewapp_detail.png)

### 4.2 Using the UI Resources Module from the Mendix App Store

The UI Resources module can be easily downloaded through the Mendix App Store in the Desktop Modeler. By downloading the UI Resources module in existing Mendix apps, developers can benefit from all the new UI resources.

To use the UI Resources module from teh Mendix App Store, follow these steps:

1.  Open the Mendix App Store in the Desktop Modeler and then select **UI Resources** in the left sidebar **Categories** menu:

    ![](attachments/howto/sharing_appstore_modeler.png)

    The available UI resources will appear in the middle section of the App Store. The **Private** label indicates that the UI resources are only available for your company.

2. Select the UI resources that have been created by your company:

    ![](attachments/howto/sharing_appstoredetail_modeler.png)

3. To download the UI resources inside your project, click **Download**. After downloading your company's UI Resources module, it will appear under **App Store modules**. The module can always be updated by downloading a new version from the Mendix App Store when new resources are added.
