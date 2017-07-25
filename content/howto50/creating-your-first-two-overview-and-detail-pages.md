---
title: "Creating your first two Overview and Detail pages"
category: "GUIs"
---

This how-to explains how you can create overview and detail pages in Mendix. 

## 1. Preparation

*   Before you can create those pages you need to setup a basic data structure using [this](creating-a-basic-data-layer) how-to.
    ![](attachments/2949123/16842770.png)

## 2\. Creating an Overview Page

This section will explain how you can add a new overview page to your project.

1.  Right click the module and select **Add > ****Page**.
    ![](attachments/2949141/16842773.png)

2.  Click on **Responsive**.
3.  Enter _CustomerOverview_as **Page name**.
4.  Select _Sidebar_Full_Responsive_ as navigation layout.
5.  Click on **Blank**.
6.  Select **Blank Page Template**.
    ![](attachments/2949141/16842774.png)
7.  Click once on **Data Grid** in the menu bar of the page builder to select the Data Grid widget.
    ![](attachments/2949141/16842776.png)
8.  Click once in the page editor to create the Data grid widget.
    ![](attachments/2949141/16842777.png)
9.  Right click the data grid.
10.  Click **Select Entity** in the context menu.
    ![](attachments/2949141/16842779.png)
11.  Select the _Customer_ entity in the Data Source Selector and click **Select**.
    ![](attachments/2949141/3080479.png)
12.  Click **OK** to auto-fill the data grid with search fields and columns.
    ![](attachments/2949141/3080477.png)

You should now have an overview page like this:
![](attachments/2949141/16842781.png)

## 3\. Creating a Detail Page

1.  Right click the **New** button of the data grid on the overview page
2.  Select **Generate page**.
    ![](attachments/2949141/16842782.png)
3.  Select _PopupLayout_ as navigation layout.
4.  Select _Form basic horizontal_ and click **OK**.
    ![](attachments/2949141/16842784.png) 
5.  Right click the **New** button of the data grid in the overview page again
6.  Select **Go to page**.
    ![](attachments/2949141/16842785.png)
    You should now have a detail page like this:
    ![](attachments/2949141/16842786.png)

## 4\. Navigation and Security

1.  Now create a navigation item for your overview page to start using it. If you don't know how to setup the navigation structure, take a look at [this](setting-up-the-navigation-structure) how-to.
2.  If you switched on security for this application you need to configure page access on both the overview and detail pages. If you don't know how to configure page access, take a look at [this](creating-a-secure-app) how-to.

## 5\. Related content

How-to's

*   [Scout and Windows 10 Workaround](scout-and-windows-10-workaround)
*   [Scout and Windows 10 Workaround](/howto6/scout-and-windows-10-workaround)
*   [Filtering Data on an Overview Page](filtering-data-on-an-overview-page)
*   [Layouts and Snippets](layouts-and-snippets)
*   [Layouts and Snippets](/howto6/layouts-and-snippets)
*   [Filtering Data on an Overview Page](/howto6/filtering-data-on-an-overview-page)
*   [Setup Mendix UI Framework with just CSS](setup-mendix-ui-framework-with-just-css)
*   [Setting Up the Navigation Structure](setting-up-the-navigation-structure)
*   [Creating your first two Overview and Detail pages](creating-your-first-two-overview-and-detail-pages)
*   [Setup Mendix UI Framework](setup-mendix-ui-framework)

Reference Guide

*   [Page](/refguide5/page)
