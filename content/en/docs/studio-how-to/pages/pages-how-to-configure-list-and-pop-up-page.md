---
title: "Configure a List and a Pop-Up Page with List Item Details"
url: /studio-how-to/pages-how-to-configure-list/
category: "Pages"
description: "Describes how to configure a list of items in Mendix Studio."
weight: 35
tags: ["studio", "pages", "list", "list view", "how to"]
---

## 1 Introduction 

This how-to explains how you can configure a list of items and view and edit the item details on a pop-up page. 

**This how-to will teach you how to do the following:**

* Create a new page
* Configure a list view
* Configure a pop-up page where you can view the details of a list
* Configure a button that enables adding new items to the list

The how-to describes the following use case: 

Sales Representatives in your company would like to view a list of opportunity contacts (potential customers) on an existing page. When a Sales Representative clicks a row in this list, the details of the corresponding opportunity contact are displayed in a pop-up page where they can view contact details. The Sales Representative can also add a new contact and fill in its details.

 {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/configured-page" >}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Pages](/studio/page-editor/). 

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/studio/domain-models/).

* Make sure your domain model is configured the following way:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list/domain-model.png"   width="200"  >}} 

## 3 Adding a List View to a Page

You would like to add an opportunity contact list to an existing blank page. Do the following:

1. Open the page and navigate to the **Toolbox** > **Widgets**.

2. Search for **List view** and drag and drop it on the desired location on the page.

3. Now you need to connect data to the list. Open list view properties and select the **Entity** property:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/entity-property.png" >}}

4. In the **Select Entity** dialog box, select **OpportunityContact** and confirm your choice by clicking **Select**. Now the list is connected to the **OpportunityContact** entity.

5. To configure the list to display the name of each opportunity contact, open the **Toolbox** > **Widgets**.

6. Search for **Text** and drag and drop it inside the list view:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/text-inside-list-view.png" >}}

7. Open the **Properties** tab of the text widget.

8. In the **Content** property, delete *Text* and click **Add** > **Attribute**:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/attribute-property.png" >}}

9. In the **Select Attribute** dialog box, choose **Name** and click **Select**.

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/select-attribute.png" >}}

The page now has a list that shows opportunity contacts by their name:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/list-view-showing-name.png" >}}

## 4 Showing a Pop-Up Page with Details {#pop-up-page}

Now you need to create a page that shows list item details. When Sales Representatives click a row in the list, the details of the selected contact will be displayed in a pop-up page.

Follow the steps below:

1. Open the **Toolbox** > **Widgets**.

2. Search for the **Open Page** button and drag and drop it inside the list view.

3. Open the button's properties and do the following:
    1. Change the **Render Mode** property to **Link**.
    
    2. Set the **Icon** property to **Menu right**.
    
    3. Delete the text *Page* from the **Caption** property.
    
        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/button-general-section.png" >}}
    
    4. Set the **Align Self** property to **Right**.
    
    5. Click the **Page** property.
    
    6. In the **Select Page** dialog box, click the plus icon in the top right corner to create a new page:
    
        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/plus-icon" >}}
    
    7. In the **Create new page** dialog box, set the **Title** to *OpportunityContact_NewEdit* and the **Layout** to **PopupLayout**.
    
    8. The **Pre-fill page contents based on the OpportunityContact entity** option is on and the page template (*Forms*) is selected automatically for you. Choose **Forms Horizontal**:
    
        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/create-page" >}}
    
    9. Click **Create**.

A page that shows the Opportunity Contact details is created:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/new-page" >}}

## 5 Adding a Button that Enables Creating a New Contact

For the list to have any data and show opportunity contacts, Sales Representatives need to be able to add a new contact first. 

You can add a button that will open the  **OpportunityContact_NewEdit**  pop-up page that you created in the [Showing a Pop-Up Page with Details](#pop-up-page) section above. The button will allow Sales Representatives to fill in contact details and save changes on the this page.

Do the following:

1. Open the **Toolbox** > **Widgets**.

2. Search for the **Create Object** button and drag and drop it above the list view.

3. Open the button's properties. The **Create Object** property is enabled by default for this button. Click the **Entity** property.

4. In the **Select Entity** dialog box, select the **OpportunityContact** entity and click **Select**.

5. Click the **Page** property.

6. In the **Select Page** dialog box, select **OpportunityContact_NewEdit** and click **Select**.

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/new-button-properties" >}}

7. To adjust button's place on the page, set the **Spacing Left** to **Large** and **Spacing Top** to **Medium**.

The button allows Sales Representatives to add new items to the list:

 {{< figure src="/attachments/studio-how-to/pages/pages-how-to-configure-list-and-pop-up-page/new-button-on-the-page" >}}

You can now preview your app and test your page. For more information on how to preview your page, see [Previewing & Publishing Your App](/studio/publishing-app/).

You can also work on the page details, for example, show more details in the list then just the contact's name. 