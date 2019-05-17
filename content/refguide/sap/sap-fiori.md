---
title: "SAP Fiori"
category: "SAP"
menu_order: 100
description: "Considerations for building and deploying an SAP Fiori themed app to Fiori Launchpad"
tags: ["SAP", "Fiori", "Building Block", "Page Design", "Layout", "UI", "UX", "Launchpad", "Timeout", "Heartbeat", "SAP Fiori Launchpad"]
---

## 1 Introduction

This document explains extra configuration you need to make when running your app in the [SAP Fiori Launchpad](https://experience.sap.com/fiori-design-web/launchpad/). It also contains a summary of the building blocks you can use to create an SAP Fiori themed app.

## 2 SAP Fiori Launchpad

If you want to run your app from the **SAP Fiori Launchpad** you will need to configure your Mendix app. This is because the SAP Fiori Launchpad contains a timeout which does not identify that an unmodified Mendix App is still actively being used.

To prevent the timeout being activated incorrectly, you need to add the **Fiori Launchpad Session Heartbeat** widget to every page of your app. The widget sends a message to the SAP Fiori Launchpad when the page is opened or refreshed. This extends the timeout by another twenty minutes.

You can add the widget in one of the following ways:

{{% todo %}}[Confirm what is in the starter apps and Fiori UI Package]{{% /todo %}}

### 2.1 Using the Fiori Blank App Template

If you use the **Fiori Blank** app template, the widget is inserted automatically into all the navigation layouts in the **SAP_UI_Resources** module. This means that if you create your pages based on any of the following *navigation layouts*, they will automatically contain the widget:

* SAP_Default
* SAP_Default_Letterbox
* SAP_MasterDetail
* SAP_MasterDetail_Embedded
* SAP_Launchpad
* SAP_Default_Embedded
* SAP_Default
* SAP_MasterDetail_Letterbox
* PopupLayout

The **Fiori Blank** app template can chosen when creating a new app, or downloaded from the App Store here – https://appstore.home.mendix.com/link/app/53585/.

### 2.2 Adding the SAP Fiori UI Package

You can add SAP Fiori styling to an existing Mendix app by importing the **SAP Fiori UI Package**. This will add a set of *navigation layouts* in a new **SAP_UI_Resources** module. If you create your pages based on any of the following *navigation layouts*, all the pages will automatically contain the widget:

* SAP_Default
* SAP_Default_Letterbox
* SAP_MasterDetail
* SAP_MasterDetail_Embedded
* SAP_Launchpad
* SAP_Default_Embedded
* SAP_Default
* SAP_MasterDetail_Letterbox
* PopupLayout

{{% alert type="warning" %}}
Your app will still contain the original navigation layouts, such as those in the *Atlas_UI_Resources* module. Unless you add the widget manually (see below), any pages you add based on the layouts from these other modules will **not** contain the widget.
{{% /alert %}}

The **SAP Fiori UI Package** can be downloaded from the App Store here – https://appstore.home.mendix.com/link/app/107625/.

### 2.3 Adding Fiori Launchpad Session Heartbeat Widget Manually

You can download the **Fiori Launchpad Session Heartbeat** widget from the App Store here: https://appstore.home.mendix.com/some_link_to_a_widget.

Once it is in your app, you can add it to your pages like any other widget.

Since you will need to put it on every page of your app, it is recommended that you add it to the navigation layout, rather than adding it to each individual page. To do this:

1. Open (or create) a page which is based on the navigation layout you want to update.

2. Click the *navigation layout* name on the page breadcrumb trail.

    ![Select Atlas_Default navigation layout from the page breadcrumb](attachments/sap-fiori/select-layout.png)

3. Drag the **Fiori Launchpad Session Heartbeat** widget into the layout page header.

    ![Drag widget into navigation layout header](attachments/sap-fiori/add-fiori-widget.png)

4. Save the updated navigation layout.

5. Your page, and all other pages based on this navigation layout, now has the *Fiori Launchpad Session Heartbeat* widget which will be activated every time the page is opened or refreshed.

    ![Fiori widget has been added](attachments/sap-fiori/fiori-widget-added.png)

For more Information about managing layouts, see [How to Use Layouts & Snippets](/howto/front-end/layouts-and-snippets).

## 3 Mendix Building Blocks

You can use Mendix building blocks to create an SAP Fiori themed app. To use these building blocks, you can either:

* use the **Fiori Blank** app template; this can chosen when creating a new app, or be downloaded from the App Store here – https://appstore.home.mendix.com/link/app/53585/

* add the **SAP Fiori UI Package** to your app: this can be downloaded from the App Store here – https://appstore.home.mendix.com/link/app/107625/

### 3.1 Datagrid Border Fullpage

![](attachments/sap-fiori/image1.png)

### 3.2 Datagrid Fullpage

![](attachments/sap-fiori/image2.png)

### 3.3 Flex Container Left

![](attachments/sap-fiori/image4.png)

### 3.4 Flex Container Left Center

![](attachments/sap-fiori/image3.png)

### 3.5 Flex Container Right

![](attachments/sap-fiori/image6.png)

### 3.6 Flex Container Right Center

![](attachments/sap-fiori/image5.png)

### 3.7 Footer Accept Reject Edit Delete

![](attachments/sap-fiori/image10.png)

### 3.8 Footer Confirm

![](attachments/sap-fiori/image7.png)

### 3.9 Footer Edit Delete

![](attachments/sap-fiori/image8.png)


### 3.10 Footer Icons

![](attachments/sap-fiori/image11.png)

### 3.11 Footer Save Close

![](attachments/sap-fiori/image9.png)

### 3.12 Footer Text Icons

![](attachments/sap-fiori/image12.png)

### 3.13 Form Horizontal

![](attachments/sap-fiori/image15.png)

### 3.14 Form Horizontal Columns

![](attachments/sap-fiori/image13.png)

### 3.15 Form Horizontal Line

![](attachments/sap-fiori/image14.png)

### 3.16 Form Readonly Compact

![](attachments/sap-fiori/image16.png)

### 3.17 Form Vertical

![](attachments/sap-fiori/image19.png)

### 3.18 Form Vertical Columns

![](attachments/sap-fiori/image17.png)

### 3.19 Form Vertical Line

![](attachments/sap-fiori/image18.png)

### 3.20 List

![](attachments/sap-fiori/image28.png)

### 3.21 List Border

![](attachments/sap-fiori/image21.png)

### 3.22 List Border Header

![](attachments/sap-fiori/image20.png)

### 3.23 List Header

![](attachments/sap-fiori/image22.png)

### 3.24 List Item Default

![](attachments/sap-fiori/image23.png)

### 3.25 List Item Description

![](attachments/sap-fiori/image24.png)

### 3.26 List Item Icon

![](attachments/sap-fiori/image25.png)

### 3.27 List Item Info

![](attachments/sap-fiori/image26.png)

### 3.28 List Item Multiline

![](attachments/sap-fiori/image27.png)

### 3.29 Mainheader

![](attachments/sap-fiori/image30.png)

### 3.30 Mainheader Columns

![](attachments/sap-fiori/image29.png)

### 3.31 Object Status

![](attachments/sap-fiori/image31.png)

### 3.32 Pageheader Columns

![](attachments/sap-fiori/image33.png)

### 3.33 Pageheader Columns Title

![](attachments/sap-fiori/image32.png)

### 3.34 Pageheader Content

![](attachments/sap-fiori/image35.png)

### 3.35 Pageheader Content Item

![](attachments/sap-fiori/image34.png)

### 3.36 Pageheader Default

![](attachments/sap-fiori/image36.png)

### 3.37 Pageheader Space Between

![](attachments/sap-fiori/image37.png)

### 3.38 Pageheader Title Buttons

![](attachments/sap-fiori/image38.png)

### 3.39 Tile

![](attachments/sap-fiori/image39.png)

### 3.40 Wizard

![](attachments/sap-fiori/image43.png)

### 3.41 Wizard Step

![](attachments/sap-fiori/image42.png)

### 3.42 Wizard Step Active

![](attachments/sap-fiori/image40.png)

### 3.43 Wizard Step Visited

![](attachments/sap-fiori/image41.png)

## 4 Read More

* [How to Use Layouts & Snippets](/howto/front-end/layouts-and-snippets)
