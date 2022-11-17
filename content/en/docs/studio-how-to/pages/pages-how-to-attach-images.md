---
title: "Enable End-Users to Attach Images"
url: /studio-how-to/pages-how-to-attach-images/
category: "Pages"
description: "Describes how to configure image uploader in Mendix Studio."
weight: 60
tags: ["studio", "pages", "image", "image uploader", "attachment", "attach image"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

This how-to explains how you can enable your end-users to attach images. They will be able to attach images from different devices: phone, tablet, or desktop; or they can take a new image on their phone camera. 

This how-to will teach you how to do the following:

* Create image entities
* Create a page with a form that allows your end-users to attach images
* Display attached images in a list

The how-to describes the following use case: 

You have the **New Report** page with a form (a data view) where employees submit a trip report for  reimbursement. They fill in their name, department, purpose and date of their trip, and total amount to be reimbursed:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/form-example.png"   width="600"  >}}

Your domain model looks the following way:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/domain-model.png"   width="200"  >}}

You would like to add a new functionality: when creating a reimbursement report, employees need to attach receipts – screenshots or scanned images of what they paid for.  

You also would like to display attached images in a list below the report and to enable your end-users delete images from the list if needed.  

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Pages](/studio/page-editor/). 
* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/studio/domain-models/).

## 3 Creating an Image Entity

First of all, to be able to attach and upload images you need to add a special type of entity to your domain model: an image entity. Do the following:

1. Open your domain model and open the **Toolbox** tab.
2. Select the **Image Entity** and drag it into your domain model.
3. In the **Create New Image Entity** dialog box, set **Name** to *Receipt* and click **Create**.

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/create-new-image-entity.png"   width="400"  >}}

4. Now you need to create an association from the **Image** entity to the **Report** entity. Do one of the following:

    1. Hover over the **Image** entity, click the dot icon, and drag the dot to the **Report** entity:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/association-method1.png"   width="500"  >}}

    2. Select the **Image** entity, click the arrow icon, and select **Report** as a second entity for the association:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/association-method2.png"   width="250"  >}}

Good job! You have created the image entity and an association from it to the **Report** entity:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/domain-model-configured.png"   width="600"  >}}

## 4 Adding an Image Uploader

An **Image Uploader** is a widget that allows your end-users to attach images. However, it can only function inside a data container (a list view or data view) and can only have an image entity as its data source. If you just drag the image uploader into your report form, it will not work correctly, because your current data view has the **Report** entity as its data source, which is not an image entity:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/form-example.png"   width="600"  >}}

To solve this, you can add a button which will open a pop-up page where your end-users can attach images. This page will be connected to your current report form over the *Image_Report* association and will upload images as **Image** entity and associated to this specific report. 

Follow the steps below:

1. Open the **New Report** page where employees submit a new report. 

2. Open the **Toolbox** and search for the **Open Page** button.

3. Drag the button above **Save** and **Cancel** buttons:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/open-page-button.png"   width="450"  >}}

4. Open button properties and do the following:

    1. Select the **Caption** property and rename it to *Attach Images*.

    2. Click the **Icon** property. 

    3. In the **Select icon** dialog box, search for the *picture* icon, and click **Select**.

    4. Click the **Style** property and change it from **Default** to **Success**. After your changes, the button will look the following way:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/button-style-change.png"   width="150"  >}}

    5. In the button properties, click the **Page** property.

    6. In the **Select Page** dialog box, click the plus icon in the top right corner to add a new page. 

    12. In the **Create Page** dialog box, do the following:

        1. Set the **Title** to *Attach Images*.
        2. Set the **Layout** to *PopupLayout*.
        3. Set **Entity** to **Receipt**.
        4. The **Autofill Contents** option is on, so contents of the page will be configured automatically for you and the suggested page template is narrowed down to **Forms**. Choose **Form Vertical** and click **Create**.

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/create-new-page-images.png"   width="500"  >}}

13. A new pop-up page with a preconfigured form (a data view) is created:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/attach-images-page.png"   width="500"  >}}

14. As you only need your end-users to attach images on this page, delete the **Dynamic image** widget, **Name** and **Size** text boxes from the data view. 

15. Open the **Toolbox**, search for an **Image Uploader**, drag it inside the data view on the **Attach Images** page. 

16. You have the CE1569 consistency error on the **Employee Profile** page. To resolve it, open the **Employee Profile** page and open the **Attach File** button properties.
    
17. Change the **Parameters** > **Data Type** properties from **Existing Object** to **Create Object**: 

You have created a pop-up page that will allow employees to attach images to their reimbursement reports:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/attach-images-pop-up-page.png"   width="450"  >}}

## 5 Displaying Attached Images

After users attach the images, it would be nice to display their attachments and give them an opportunity to delete the ones they do not need. To do so, you need to add a list with dynamic images:

1. Open the **New Report** page.
2. In the **Building Blocks**, search for **List with image** and drag it under the **Attach Images** button (*inside* the data view). A list view with widgets inside it is added to your page:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/list-4.png" >}}

3. Open list view properties and do the following:

    1. Click the **Entity** property.
    2. In the **Select Entity** dialog box, unselect **Generate contents of the list view**, choose the **Receipt** entity over **Receipt_Report** association, and click **Select**:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/image-report-association.png"   width="400"  >}}

4. Click the image in the list view, open its properties, and do the following.

    1. To display images which users attach, change the **Image Source** from **Static Image** to **Dynamic Image**. 
    2. Click the **Image Entity** property. 
    3. In the **Select Image Entity**, choose **Receipt** and click **Select**.
    4. In the **Default Image** property, click **Select image**, and in the **Select image** dialog box, click **Clear**.  

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/image-properties.png"   width="300"  >}}

5. Delete a subtitle in the list view saying *Secondary text*.
6. Select the **List item title** text in the list view and open its properties.

    1. In the **Content** property, delete the *List item title* text and click **Add**  > **Attribute**.
    2. In the **Select Attribute** dialog box, choose the **Name** attribute and click **Select** to display the name of the attached image.

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/select-attribute.png"   width="400"  >}}

7. Select the button in the list view, open its properties, and do the following:

    1. In the **Events** section > the **On Click Action** property, select **More**. 
    2. In the **Action** property, select **Delete Object**. 
    3. In the **General** section > the **Caption** property, set the button caption to *Delete*.
    4. Click the icon property and click **Clear** in the **Select icon** dialog box to delete the icon.
    5. Change the **Render Mode** from **Link** to **Button**.
    6. In the **Style** property, change **Default** to **Danger**. 

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/button-properties.png" >}}

Great job! Now you have the image list that shows attached images and your users will be able to delete images from the list if necessary:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-images/configured-image-list.png" >}}

Congratulations! You have configured the report that allows your users to attach images and displays these images in the list.

[Preview your app](/studio/publishing-app/) to test how the image uploading works. You can also configure a button to attach files instead of images. For more information on files, see [Images and Files](/studio/page-editor-widgets-images-and-files/).
