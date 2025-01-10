---
title: "Enabling End-Users to Attach Images"
url: /refguide/attach-images/
linktitle: "Enable End-Users to Attach Images"
description: "Describes how to configure image uploader in Mendix Studio Pro."
weight: 60
---

## Introduction 

This how-to explains how you can enable your end-users to attach images. They will be able to attach images from different devices: phone, tablet, or desktop; or they can take a new image on their phone camera. 

This how-to teaches you how to do the following:

* Create a specialization of the System.Image entity
* Create a page with a form that allows your end-users to attach images
* Display attached images in a list

The how-to describes the following use case: 

You have the **New Report** page with a form (a data view) where employees submit a trip report for reimbursement. They fill in their name, department, purpose and date of their trip, and total amount to be reimbursed.

You would like to add a new functionality: when creating a reimbursement report, employees need to attach receipts – screenshots or scanned images of what they paid for.  

You also would like to display attached images in a list below the report and to enable your end-users delete images from the list if needed.  

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Page](/refguide/page/). 

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/refguide/domain-model/).

* Make sure your domain model is configured the following way:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/domain-model.png"   class="no-border" >}}

* You have the **New Report** page with a form (a data view) where employees submit a trip report for reimbursement:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/form-example.png"   class="no-border" >}}

## Creating a Specialization of System.Image

First of all, to be able to attach and upload images you need to add an entity that is a specialization of the System.Image entity. For more information, see the [Generalization](/refguide/entities/#generalization) section in *Entities*.

Do the following:

1. Open your domain model > **Toolbox** and drag a new entity in a working area.

2. Double-click the new entity to open its properties.

3. Set the **Name** property to *Receipt*.

4. In the **Generalization** property, click **Select**, choose the **Image** entity under **System**, and confirm your choice:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/selecting-system-image-entity.png"   class="no-border" >}}

5. Now you need to create an association from the **Receipt** entity to the **Report** entity. In the **Properties** dialog box, open the **Associations** tab and click **New**. 

6. In the **Select Entity** dialog box, select **Report** and confirm your choice:

    {< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/receipt-report-association.png"   class="no-border" >}}

7. Click **OK** to close the **Properties** dialog box.

Good job! You have created the **Receipt** entity, which is a specialization of System.Image entity, and an association from it to the **Report** entity:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/domain-model-configured.png"  class="no-border" >}}

## Adding an Image Uploader

An **Image Uploader** is a widget that allows your end-users to attach images. However, it can only function inside a data container (a list view or data view) and can only have an entity that is a specialization of System.Image or that is connected to it as its data source. If you just drag the image uploader into your report form, it will not work correctly, because your current data view has the **Report** entity as its data source:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/form-example.png"   class="no-border" >}}

To solve this, you can add a button which will open a new pop-up page where your end-users can attach images. This page will be connected to your current report form over the *Receipt_Report* association and will upload images associated to this specific report. 

Follow the steps below:

1. Open the **New Report** page where employees submit a new report. 

2. Open the **Toolbox** and search for the **Create** button.

3. Drag the button above **Save** and **Cancel** buttons:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/create-object-button.png"   width="450"  class="no-border" >}}

4. In the **Select Entity** dialog box, choose the **Receipt** entity:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/select-entity.png"  class="no-border" >}}

5. Open the **Properties** pane for the button and do the following:

    1. Select the **Caption** property and rename it to *Attach Images*.

    2. Click the **Icon** property. 

    3. In the **Select icon** dialog box, search for the *picture* glyph icon, and click **Select**.

    4. Click the **Button style** property and change it from **Default** to **Success**.

    5. Click the **On click page** property and in the **Select web page** dialog box, click **New**. 

    6. In the **Create Page** dialog box, do the following:

        1. Set the **Title** to *Receipt_NewEdit*.
        2. Set the **Layout** to *PopupLayout*.
        3. Since this button creates the Receipt object, the contents of the page will be configured automatically for you and the suggested page template is narrowed down to **Forms**. Choose **Form Vertical** and click **Create**.

            {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/create-new-page-images.png" width="650"  class="no-border" >}}
    
6. A new pop-up page with a preconfigured form (a data view) is created:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/attach-images-page.png"  width="650"  class="no-border" >}}

7. As you only need your end-users to attach images on this page, delete the **Dynamic image** widget, **Name** and **Size** text boxes and **Report**  reference selector from the data view. 

You have created a pop-up page that will allow employees to attach images to their reimbursement reports:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/attach-images-pop-up-page.png"   class="no-border" >}}

## Displaying Attached Images

After users attach the images, it would be nice to display their attachments and give them an opportunity to delete the ones they do not need. To do so, you need to add a list with dynamic images:

1. Open the **New Report** page.

2. Open **Toolbox**, search for *list view* and drag it under the **Attach Images** button (*inside* the data view). 

3. Open the **Properties** pane of the list view and do the following:

    1. Click the **Entity (path)** property.
    2. In the **Select Entity** dialog box, choose the **Receipt** entity over **Receipt_Report** association, and click **Select**:

        {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/select-entity.png"   class="no-border" >}}

4. Choose **Yes** for the question to fill in the contents of the widget.

5. Open **Toolbox**, search for **Layout grid** and drag it to the list view.

6. Choose **4,4,4** for the layout grid:
    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/layout-grid.png"   width="400"  class="no-border" >}}

7. In the list view, drag the dynamic image widget into the first column and **Name** into the second.

8. Delete other widgets that were added automatically. 

9. Open **Toolbox**, search for **Delete button** and drag it into the third column:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/layout-in-list-view.png"  class="no-border" >}}

10. Open **Properties** pane of the button and in the **Button style** property, change **Default** to **Danger**. 

Great job! Now you have the image list that shows attached images and your users will be able to delete images from the list if necessary:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/attach-images/configured-image-list.png" class="no-border" >}}

Congratulations! You have configured the report that allows your users to attach images and displays these images in the list.

Preview your app to test how the image uploading works. 
