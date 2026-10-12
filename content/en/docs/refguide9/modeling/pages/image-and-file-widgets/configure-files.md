---
title: "Configuring File Upload and Download"
url: /refguide9/configure-files/
linktitle: "Configure File Upload and Download"
weight: 70
description: "Describes how to configure file manager in Mendix Studio Pro."
---

## Introduction 

This how-to explains how you can enable your end-users to attach and download files, such as PDF files or Microsoft Word documents, by configuring a [file manager](/refguide9/file-manager/) widget. Your users will be able to attach files from different devices: phone, tablet, or desktop; as well as download attached files from a list.

This how-to teaches you how to do the following:

* Create file entities
* Create a page with a form that allows your end-users to upload files
* Display attached files in a list
* Allow your end-users to download files

The how-to describes the following use case: 

Your company has an app where company's IT department keeps track of assets assigned to employees. You have the **Employee Profile** page with a form (a data view) that has such details as employee's name, department, their email, phone, title, and assets assigned to them (for example, a mobile phone or laptop). This information is filled in and updated by IT administrators.

You would like to add a new functionality: IT administrators should be able to attach files to an employee profile, for example, to attach phone or laptop policy signed by the employee.  

You also would like to enable IT administrators to download the attached file from a list of files. 

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Page](/refguide9/page/). 

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/refguide9/domain-model/).

* Make sure your domain model is configured the following way:

  {{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/domain-model.png" alt="Domain Model"    class="no-border" >}}

* You have the **Employee Profile** page with a form (a data view) that has such details as employee's name, department, their email, phone, title, and assets assigned to them:

  {{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/employee-profile-form.png" alt="Employee Profile Page"   width="500"  class="no-border" >}}

## Creating a Specialization of System.File

First of all, to be able to attach and/or download files you need to add an entity that is a specialization of the System.File entity. For more information, see the [Generalization](/refguide9/entities/#generalization) section in *Entities*. 

Do the following:

1. Open your domain model > **Toolbox** and drag a new entity in a working area.
2. Double-click the new entity to open its properties.
3. Set the **Name** property to *Document*. 
4. In the **Generalization** property, click **Select**, choose the **Image** entity under **System**, and confirm your choice:
5. Now you need to create an association from the **Document** entity to the **Employee** entity. In the **Properties** dialog box, open the **Associations** tab and click **New**. 
6. In the **Select Entity** dialog box, select **Employee** and confirm your choice.
7. Click **OK** to close the **Properties** dialog box.

Good job! You have created the Document entity, which is a specialization of the System.File entity, and an association from it to the **Employee** entity:

{{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/domain-model-configured.png" alt="Domain Model Configured"   width="450"  class="no-border" >}}

## Adding a File Manager

A **File Manager** is a widget that allows your end-users to attach and/or download files. However, it can only function inside a data container (a list view or data view), and the list view or data view can only have a file entity as its data source. If you just drag the file manager into your employee profile form, it will not work correctly, because your current data view has the **Employee** entity as its data source, and you need the data source to be a file entity, which is in this case the **Document** entity:

{{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/employee-profile-form.png" alt="Employee Profile Page"   width="500"  class="no-border" >}}

To solve this, you can add a button which will open a pop-up page where your end-users (IT administrators) can upload images. This page will be connected to your current report form over the *Document_Employee* association and will upload files that are associated to this specific report. 

Follow the steps below:

1. Open the **Employee Profile** page where IT administrators create and edit information on employees and assets assigned to them. 

2. Open the **Toolbox** and search for the **Create** button.

3. Drag the button above **Save** and **Cancel** buttons.

4. In the **Select Entity** dialog box, select the **Document** entity through the **Document_Employee** association.

    {{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/select-entity.png" alt="Select Entity"   width="400"  class="no-border" >}}
    
5. Open button properties and do the following:

    1. Select the **Caption** property and rename it to *Attach File*.
    
    2. Click the **Icon** property. 
    
    3. In the **Select icon** dialog box, search for the *file* glyph icon, and click **Select**.
      
    4. Click the **Button style** property and change it from **Default** to **Success**. 
      
    5. Click the **On click page** property and in the **Select web page** dialog box, click **New**. 

    6. In the **Create Page** dialog box, do the following:

        1. Set the **Title** to *Document_NewEdit*.
        2. Set the **Layout** to *PopupLayout*.
        3. Since this button creates the Document object, the contents of the page will be configured automatically for you and the suggested page template is narrowed down to **Forms**. Choose **Form Vertical** and click **OK**:
            {{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/create-page-dialog.png" alt="Create Page Dialog Box"   width="550"  class="no-border" >}}
    
6. A new pop-up page with a preconfigured form (a data view) is created:
    {{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/attach-file-page.png" alt="Attach Files Page"     class="no-border" >}}
    
7. As you only need your end-users to attach files on this page, delete **Name**, **Size**, and **Employee** widgets from the data view. 

8. As you would like users to only upload files on this pop-up page, open the **File Manager** properties and set **Type** to **Upload**.

You have created a pop-up page that will allow IT administrators to attach files to the employee profile form:

{{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/attach-file-page-configured.png" alt="Attach Files Page Configured"    class="no-border" >}}

## Downloading Files

After your end-users attach the files, it would be nice to display files in a list and give users an opportunity to download attached files if needed. To do so, you need to add a list:

1. Open the **Employee_Profile** page.

2. In the **Toolbox**, search for **List view** and drag it under the **Attach File** button (make sure you drop it *inside* the data view, this way you will be able to list only files associated with a selected employee instead of all files that were attached to any employee profile). 

3. Select the list view, open its properties, and do the following:

    1. Click the **Entity (path)** property.
    2. In the **Select Entity** dialog box, choose the **Document** entity over **Document_Employee** association, make sure that **Generate contents of list view** is selected, and click **Select**:

        {{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/select-entity.png" alt="Select Entity"   width="400"  class="no-border" >}}

4. Say **Yes** to the question on filling the contents of the list view automatically.

5. Open the **Toolbox** and search for a **File Manager**, drag it to the list view. 

6. Open the **File Manager** properties and do the following: 

    1. Set the **Type** to **Download**.
    2. Set the **Show label** property to **No**.

7. Open **Toolbox**, search for **Layout grid** and drag it to the list view.

8. Choose **3,3,3,3** for the layout grid.

9. Drag four widgets to the columns of the layout grid, one widget per one column:

    {{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/layout-grid.png" alt="Layout Grid inside List View"   width="500"  class="no-border" >}}

Great job! Now you have the list that shows attached files and your users can download files from this list:

{{< figure src="/attachments/refguide9/modeling/pages/image-and-file-widgets/configure-files/page-configured.png" alt="Configured Page"   width="550"  class="no-border" >}}

Congratulations! You have configured the form that allows IT administrators to attach files and displays these files in the list.

Preview your app to test how the file uploading and downloading works.
