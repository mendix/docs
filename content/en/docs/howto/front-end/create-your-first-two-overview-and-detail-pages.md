---
title: "Create Your First Two Overview and Detail Pages"
linktitle: "Create Overview and Detail Pages"
url: /howto/front-end/create-your-first-two-overview-and-detail-pages/
weight: 25
description: "Describes how to create overview and detail pages, and how to configure navigation and security."
---

## Introduction

This how-to explains how you can create overview and detail pages in Mendix. 

This how-to teaches you how to do the following:

* Create overview and detail pages
* Configure navigation and security

## Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisite:

* Create a domain model by following [Configuring a Domain Model](/refguide/configuring-a-domain-model/):

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18582175.png" class="no-border" >}}

## Creating Overview and Detail Pages Automatically {#create-automatically}

To create the overview and detail pages for your data structure, follow these steps:

1. In the domain model, right-click the **Customer** entity and select **Generate overview pages**. 
2. Select both entities in the **Generate pages** dialog box.
3. Click **OK**.

And there you go! For each entity, an overview page and a detail page is generated. Also, an **Entity_Menu** snippet is created and added to each overview page.

{{% alert color="info" %}}
Mendix can do even more work for you if you create an Excel spreadsheet with two tabs (one for the header and data for **Customer**, and the other for the header and data for **Order**). When you are creating a new app, select **App from a spreadsheet** and upload your Excel spreadsheet.
{{% /alert %}}

## Creating Overview and Detail Pages Manually

For a better understanding of Mendix Studio Pro, this section describes the manual steps for creating these pages.

### Creating the Overview Page

To create a new overview page and add it to your app, follow these steps:

1. Right-click the module and select **Add** > **Page**.
2. Click **Responsive**.
3. Enter *CustomerOverview* in **Page name**.
4. Select *Sidebar_Full_Responsive* as the navigation layout.
5. Click **Blank**, then select the **Blank** page template and click **OK**:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581337.png" class="no-border" >}}

6. Click **Data Grid** in the menu bar of the page builder to select the data grid widget:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581335.png" class="no-border" >}}

7. Click inside the page editor to create the data grid widget:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581334.png" class="no-border" >}}

8. Right-click the data grid and select **Select Entity**.
9. Select the **Customer** entity in the **Select Data Source** pop-up window and click **Select**:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581345.png" class="no-border" >}}

10. Click **OK** to auto-fill the data grid with search fields and columns:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581343.png" class="no-border" >}}

You should now have an overview page with a data grid like this:

{{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581330.png" class="no-border" >}}

### Creating the Detail Page

To create a new detail page manually, follow these steps:

1. Right-click **New** on the data grid on the overview page and select **Generate page**.
2. Select **PopupLayout** as the **Navigation layout**.
3. Select **Form Horizontal** and then click **OK**:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581327.png" class="no-border" >}} 

4. Right-click **New** on the data grid on the overview page again and select **Go to page**:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581326.png" class="no-border" >}}

    You should now have a detail page like this:

    {{< figure src="/attachments/howto/front-end/create-your-first-two-overview-and-detail-pages/18581325.png" class="no-border" >}}

## Navigation and Security

Now create a navigation item for your overview page to start using it. For details on Setting Up Navigation, see [Setting Up Navigation](/refguide/setting-up-the-navigation-structure/).

If you switched on security for this application, you also need to configure page access on both the overview and detail pages. For more information, see [How to Create a Secure App](/howto/security/create-a-secure-app/).

## Read More

* [UI Design](/howto/front-end/atlas-ui/)
* [Use Layouts and Snippets](/howto/front-end/layouts-and-snippets/)
* [Setting Up Navigation](/refguide/setting-up-the-navigation-structure/)
* [Find the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Page](/refguide/page/)
