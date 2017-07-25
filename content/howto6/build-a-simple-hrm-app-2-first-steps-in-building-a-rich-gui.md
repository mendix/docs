---
title: "Build a Simple HRM App 2: Perform the First Steps to Build a Rich GUI"
parent: "build-a-simple-hrm-app"
---

## 1 Introduction

This how-to is based on the video "Build a Simple HRM App: the First Steps in Building a Rich GUI," which is part of the [Getting Started videos](http://gettingstarted.mendixcloud.com/link/courses/gettingstarted).

This is the second how-to in a series of five on how to create a simple HRM application. In this how-to, you will learn how to build pages to manage employees in your application.

**After using this how-to, you will know how to do the following:**

* How to create a domain model
* How to build pages

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisite:

* Use the first how-to in this series: [Build a Simple HRM App 1: Create, Manage, and Deploy the App](build-a-simple-hrm-app-1-create-manage-and-deploy-the-app)

## 3 Creating a Domain Model

The domain model is a data model that describes the information in your application domain in an abstract way. It is central to the architecture of your application. The domain model consists of entities and their relations represented by associations.

To create a domain model, follow these steps:

1. Open the **Domain Model** of the **MyFirstModule** module:
    ![](attachments/18448671/18580883.png) 
2. Click **Entity** to create a new entity:
    ![](attachments/18448671/18580882.png)
    For more information about entities, see the [Entities chapter of the reference guide](/refguide6/entities).
3. Double-click the new entity:
    ![](attachments/18448671/18580878.png)
4. In the **Name** field, enter *Employee*:
    ![](attachments/18448671/18580877.png)
5. Click **New** to add a new attribute:
    ![](attachments/18448671/18580879.png)
    For more information on attributes, see the [Attributes chapter of the reference guide](/refguide6/attributes).
6. In the **Name** field, enter *Name*:
    ![](attachments/18448671/18580876.png)
7. Select **String** as the **Type**:
    ![](attachments/18448671/18580875.png)
8. Click **OK**.
9. Repeat steps 4–7 above for the following attributes:<br>

   Name | Type
   --- | ---
   Address | String
   City | String
   State | String
   Phone | String
   Email | String
   DateOfBirth | Date and time

The entity will look like this:
![](attachments/18448671/18580874.png)

## 4 Building a Page

Pages define the end-user interface of a Mendix application. Every page is based on a layout. A page fills the "gaps" defined by a layout with widgets such as a data view and data grid.

### 4.1 Adding a Page

To add a page, follow these steps:

1. Right-click the **MyFirstModule** module and select **Add** > **Page**:
    ![](attachments/18448671/18580873.png) 
2. On the **Create Page** screen, do the following:<br>
    a. In the **Page name** field, enter *Employee_Overview*.<br>
    b. Click **Master Detail** and then select the **Master detail big** option.<br>
    c. In the **Navigation layout** drop-down menu select **Sidebar_Left**, and then click **OK**.
    ![](attachments/18448671/18580871.png) 
3. Click the data grid below the **Master Detail** label, and then drag the **Employee** entity from the **Connector** to the data grid:
    ![](attachments/18448671/18580870.png)
4. Clear the **Auto-Fill** option, and then click **OK**:
     ![](attachments/18448671/18580869.png)

### 4.2 Adding Attributes to Your Page

To add attributes to your page, follow these steps:

1. Double-click the **Full Name** column.
2. On the **Edit Grid Column** dialog box, click **Select**:
    ![](attachments/18448671/18580868.png) 
3. On the **Select Attribute** dialog box, select the **Name** attribute and click **Select**:
    ![](attachments/18448671/18580866.png)
4. On the **Edit Grid Column** dialog box, click **OK**.
5. Repeat steps 1–4 for the following columns with the corresponding attributes:

    Caption Column | Attribute
    --- | ---
    Email | Email
    City | City

6. Double-click the first text box below the image:
    ![](attachments/18448671/18580865.png)
7. To select an attribute, click **Select**:
    ![](attachments/18448671/18580864.png) 
8. Select the **Name** attribute, click **Select**, and then click **OK**.
9. Repeat steps 6–8 for the second text box and select the **Email** attribute.
10. Delete the link button.
    ![](attachments/18448671/18580847.png)
11. Click the **Name** text box in the **User details** container:
    ![](attachments/18448671/18580863.png) 
12. Drag the **Name** attribute from the **Connector** to the **Name** field in the **User details** container:
    ![](attachments/18448671/18580862.png) 
13. Drag the following attributes to their corresponding fields:

    Attribute | Field | Container
    --- | --- | ---
    Email | Name | User details
    Phone | Phone | Phone
    DateOfBirth | Birthday | Birthday
    City | City | Location
    State | State | Location

14. Delete the containers and input fields that are not being used:
    ![](attachments/18448671/18580861.png) 

### 4.3 Adding Buttons to Your Page

To create or delete employees, you need to add a button to the data grid. To do this, follow these steps:

1. Right-click the grid control bar of the data grid and select **Add button** > **New**:
    ![](attachments/18448671/18580860.png) 
2. Right-click the grid control bar of the data grid and select **Add button** > **Delete**:
    ![](attachments/18448671/18580858.png) 

### 4.4 Generating a Page

To generate a page, follow these steps:

1. Right-click the **New** button and select **Generate page**:
    ![](attachments/18448671/18580857.png) 
2. On the **Create Page** screen, do the following:<br>
    a. In the **Page name** field, enter *Employee_NewEdit*.<br>
    b. Select **Form basic horizontal**.<br>
    c. In the **Navigation layout** drop-down menu, select **PopupLayout**.
    ![](attachments/18448671/18580856.png) 
3.  Click **OK**, and the new page will be shown in the project explorer:
    ![](attachments/18448671/18580852.png)

### 4.5 Creating a Menu Item for Your Page

To view a page in your app, you need to add a menu item so you can navigate to the page. To do this, follow these steps:

1. Open the **Navigation** of the project:
    ![](attachments/18448671/18580854.png) 
2. On the **Navigation** tab, click **New item** to add a new menu item:
    ![](attachments/18448671/18580853.png) 
3. In the **Caption** field of the **New Menu Item** dialog box, enter *Employees*:
4. Click **Select** to select a target:
    ![](attachments/18448671/18580850.png)
5. Select the **Employee_Overview** page of the MyFirstModule module:
    ![](attachments/18448671/18580849.png)
6. Click **Select** and then **OK**. The employees overview page will be shown in the navigation list:
    ![](attachments/18448671/18580848.png) 

## 5 Viewing Your App

To view your app, follow these steps:

1. Click **Run in Sandbox**:
    ![](attachments/14091670/14385449.png)
2. Click the **Save and continue** button, and then click **View App**:
    ![](attachments/14091670/14385450.png)

    On the left side of your app, the **Employees** menu item is shown:
    ![](attachments/18448671/18580846.png) 
4. Click **Employees**:
    ![](attachments/18448671/18580845.png)

You can now add and edit employees! 

To use the third how-to for creating a simple HRM application, see [Build a Simple HRM App 3: Show Related Data in the GUI](build-a-simple-hrm-app-3-show-related-data-in-the-gui).

## 6 Related Content

* [Build a Simple HRM App 1: Create, Manage, and Deploy the App](build-a-simple-hrm-app-1-create-manage-and-deploy-the-app)
* [Build a Simple HRM App 3: Show Related Data in the GUI](build-a-simple-hrm-app-3-show-related-data-in-the-gui)
* [Build a Simple HRM App 4: Enrich the GUI with Filter Options](build-a-simple-hrm-app-4-enrich-the-gui-with-filter-options)
* [Build a Simple HRM App 5: Smarten Up Your App with Business Logic](build-a-simple-hrm-app-5-smarten-up-your-app-with-business-logic)
* [Create and Deploy Your First App](create-and-deploy-your-first-app)
* [Testing Microflows Using the UnitTesting Module](testing-microflows-using-the-unittesting-module)
