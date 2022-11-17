---
title: "Configure File Upload and Download"
url: /studio-how-to/pages-how-to-attach-files/
category: "Pages"
description: "Describes how to configure file manager in Mendix Studio."
weight: 70
tags: ["studio", "pages", "file", "upload files", "attachment", "file manager"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

This how-to explains how you can enable your end-users to attach and download files, such as PDF files or Microsoft Word documents. They will be able to attach files from different devices: phone, tablet, or desktop; as well as download attached files from a list.

This how-to will teach you how to do the following:

* Create file entities
* Create a page with a form that allows your end-users to upload files
* Display attached files in a list
* Allow your end-users to download files

The how-to describes the following use case: 

Your company has an app where company's IT department keeps track of assets assigned to employees. You have the **Employee Profile** page with a form (a data view) that has such details as employee's name, department, their email, phone, title, and assets assigned to them (for example, a mobile phone or laptop). This information is filled in and updated by IT administrators:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/employee-profile-form.png" alt="Employee Profile Page"   width="600"  >}}

The domain model looks the following way:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/domain-model.png" alt="Domain Model"   width="200"  >}}

You would like to add a new functionality: IT administrators should be able to attach files to an employee profile, for example, to attach phone or laptop policy signed by the employee.  

You also would like to enable IT administrators to download the attached file from a list of files. 

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Pages](/studio/page-editor/). 
* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/studio/domain-models/).

## 3 Creating a File Entity

First of all, to be able to attach and/or download files you need to add a special type of entity to your domain model: a [file entity](/studio/domain-models/#entity-types). Do the following:

1. Open your domain model and open the **Toolbox** tab.
2. Select the **File Entity** and drag it into your domain model.
3. In the **Create New File Entity** dialog box, set **Name** to *Document* and click **Create**.

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/create-file-entity.png" alt="Create File Entity"   width="450"  >}}

4. Now you need to create an association from the **File** entity to the **Employee** entity. Do one of the following:

    1. Hover over the **File** entity, click the dot icon, and drag the dot to the **Employee** entity:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/create-association-method-one.png" alt="Create Association"   width="500"  >}}

    2. Select the **File** entity, click the arrow icon, and select **Employee** as a second entity for the association:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/create-association-method-two.png" alt="Create Association"   width="250"  >}}

Good job! You have created the file entity and an association from it to the **Employee** entity:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/domain-model-configured.png" alt="Domain Model Configured"   width="600"  >}}

## 4 Adding a File Manager

A **File Manager** is a widget that allows your end-users to attach and/or download files. However, it can only function inside a data container (a list view or data view), and the list view or data view can only have a file entity as its data source. If you just drag the file manager into your employee profile form, it will not work correctly, because your current data view has the **Employee** entity as its data source, and you need the data source to be a file entity, which is in this case the **Document** entity:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/employee-profile-form.png" alt="Employee Profile Page"   width="600"  >}}

To solve this, you can add a button which will open a pop-up page where your end-users (IT administrators) can upload images. This page will be connected to your current report form over the *Document_Employee* association and will upload files that are associated to this specific report. 

Follow the steps below:

1. Open the **Employee Profile** page where IT administrators create and edit information on employees and assets assigned to them. 

2. Open the **Toolbox** and search for the **Open Page** button.

3. Drag the button above **Save** and **Cancel** buttons:

    {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/open-page-button.png" alt="Open Page Button"   width="350"  >}}

4. Open button properties and do the following:

    1. Select the **Caption** property and rename it to *Attach File*.
    
    2. Click the **Icon** property. 
    
    3. In the **Select icon** dialog box, search for the *file* icon, and click **Select**.

    4. Click the **Style** property and change it from **Default** to **Success**. After your changes, the button will look the following way:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/attach-file-button.png" alt="Attach Files"   width="150"  >}}
    
    5. Click the **Page** property.
    
    6. In the **Select Page** dialog box that opens, click the plus icon in the top right corner to add a new page.
    
    9. In the **Create Page** dialog box, do the following:
    
        1. Set the **Title** to *Attach File*.
        
        2. Set the **Layout** to *PopupLayout*.
    
        3. Set **Entity** to **Document**.
        
        4. The **Autofill Contents** option is on, so contents of the page will be configured automatically for you and the suggested page template is narrowed down to **Forms**. Choose **Form Vertical** and click **Create**.    
        
            {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/create-attach-file-page.png"  width="500"  >}}
        
        4. A new pop-up page with a preconfigured form (a data view) is created:
        
            {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/attach-file-page.png" alt="Attach Files Page"   width="500"  >}}
        
        6. As you only need your end-users to attach files on this page, delete **Name** and **Size** text boxes from the data view. 
        
        7. Open the **Toolbox**, search for a **File Uploader**, drag it inside the data view on the **Attach File** page. 
        
        8. You have the CE1569 consistency error on the **Employee Profile** page. To resolve it, open the **Employee Profile** page and open the **Attach File** button properties.
        
        9. Change the **Parameters** > **Data Type** properties from **Existing Object** to **Create Object**:
        
            {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/create-object-property.png" alt="Create Object Property"   width="300"  >}}

You have created a pop-up page that will allow IT administrators to attach files to the employee profile form:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/attach-file-page-configured.png" alt="Attach Files Page Configured"   width="450"  >}}

## 5 Downloading Files

After your end-users attach the files, it would be nice to display files in a list and give users an opportunity to download attached files if needed. To do so, you need to add a list:

1. Open the **Employee_Profile** page.

2. In the **Toolbox**, search for **List View** and drag it under the **Attach File** button (make sure you drop it *inside* the data view, this way you will be able to list only files associated with a selected employee instead of all files that were attached to any employee profile). 

3. Select the list view, open its properties, and do the following:

    1. Click the **Entity** property.
    2. In the **Select Entity** dialog box, choose the **Document** entity over **Document_Employee** association, make sure that **Generate contents of list view** is selected, and click **Select**:

        {{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/select-file-entity.png" alt="Select Entity"   width="400"  >}}

4. Delete the **Size** text widget from the list view. 

5. Open the **Toolbox** and search for a **File Downloader**, drag it to the column where the **Details** button was placed. 

6. Open the **File Downloader** (**File Manager**) properties  and do the following: 

    1. Open the **Label** property and delete the *File* text from it.
    2. In the **Design** section, set **Align Self** to *Right*.


Great job! Now you have the list that shows attached files and your users can download files from this list:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/list-view-configured.png" alt="Configured List View"   width="500"  >}}

Congratulations! You have configured the form that allows IT administrators to attach files and displays these files in the list.

[Preview your app](/studio/publishing-app/) to test how the file uploading and downloading works:

{{< figure src="/attachments/studio-how-to/pages/pages-how-to-attach-files/list-previewed.png" alt="Previewed List"  width="600" >}} 

You can also configure a button to attach images instead of files. For more information, see [How to Enable End-Users to Attach Images](/studio-how-to/pages-how-to-attach-images/).
