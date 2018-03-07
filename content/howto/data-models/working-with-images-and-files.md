---
title: "Work with Images and Files"
category: "Data Models"
tags: []
---

## 1 Introduction

This how-to explains how you can work with images and files with Mendix. Out of the box Mendix supports uploading of files and images. It also allows you to view images and download files that you uploaded. First you need to create your own domain model and define which entities are images and which are files. This is done by the concept of 'inheritance', sometimes called 'generalization'. By inheriting from 'System.Image' your own entity gets all the properties of the system image entity. This means that you can use the standard platform widgets to upload and view images. The same goes for file documents.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Read [How to Create a Basic Data Layer](create-a-basic-data-layer)

## 3 Images

1.  Open your domain model and create an entity called **MyImage**.
2.  Double-click the entity to open its properties.
3.  Click **Select** at the **Generalization** property to open the entity selector.

    ![](attachments/18448741/18582124.png)

4.  Select **System.Image** and click the **Select** button.

    ![](attachments/18448741/18582123.png)

5.  Click **OK** in the entities property form. Your entity now inherits all properties from the 'System.Image' entity you selected and should look like this:

    ![](attachments/18448741/18582136.png)

6.  Create an overview and detail page to manage objects of the entity that you just created. Your detail page should look like this:

    ![](attachments/18448741/18582131.png)

7.  Open the **detail page** and double click the ImageUploader to open its properties. On this form you can select the maximum file size, and thumbnail width and height. Mendix automatically generates a thumbnail for the images you upload via the ImageUploader.

    ![](attachments/18448741/18582130.png)

8.  Double click the ImageViewer to open its properties. On this form you can select the default image, width, height and if the viewer should show the thumbnail or full image.

    ![](attachments/18448741/18582129.png)

## 4 File Documents

1.  Open your domain model and create an entity **MyDocument**.
2.  Double click the entity to open its **properties.**
3.  Click **Select** at the **Generalization** property to open the entity selector.
4.  In the **Select Entity** dialog box, select **System.FileDocument**.
5.  Click **OK** in the entities property form. Your entity now inherits all properties from the **System.FileDocument** entity you selected and should look like this:

    ![](attachments/18448741/18582126.png)

6.  Create an overview and detail page to manage objects of the entity that you just created. If you don't know how to create those pages, take a look at [this](../ux/create-your-first-two-overview-and-detail-pages) how-to. Your detail page should look like this:

    ![](attachments/18448741/18582125.png)

7.  Open the detail page and double click the FileManager to open its properties. On this form you can select the maximum file size and allowed file extensions.

    ![](attachments/18448741/18582122.png)

## 5 Navigation and Security

1.  Create a navigation item for your overview page to start using it. If you don't know how to setup the navigation structure, take a look at [How to Set Up the Navigation Structure](../ux/setting-up-the-navigation-structure).
2.  If you turned on security for this application you need to configure page access on both the overview and detail pages. If you don't know how to configure page access, take a look at [How to Create a Secure App](../security/create-a-secure-app).

## 6 Related Content

*   [How to Work with Images and Files](working-with-images-and-files)
*   [How to Create a Basic Data Layer](create-a-basic-data-layer)
*   [How to Work with Object Events](working-with-object-events)
*   [How to Denormalize Data to Improve Performance](denormalize-data-to-improve-performance)
*   [How to Set Up Data Validation](setting-up-data-validation)
*   [How to Find the Root Cause of Runtime Errors](../monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors)
*   [How to Manage Sprints and Stories](/developerportal/howto/managing-your-application-requirements-with-mendix)
*   [How to Perform the Scout and Windows 10 Workaround](../ux/perform-scout-and-windows-10-workaround)
*   [How to Generate a Personal SSH2 Key Pair](../security/generating-a-personal-ssh2-key-pair)
*   [How to Create a Chainable Custom Widget](../custom-widget-development/create-a-chainable-custom-widget)

