---
title: "Build a simple HRM app 2: First steps in building a rich GUI"
parent: "how-to-build-a-simple-hrm-app"
---

This how-to is based on the video "Build a simple HRM app: First steps in building a rich GUI", which is part of the [Getting Started videos](http://gettingstarted.mendixcloud.com/link/courses/gettingstarted).

This is the second how-to in a series of five on how to create a simple HRM application. In this how-to you will learn how to build pages to manage employees in your application.

**After completing this how-to you will know:**

*   How to create a domain model.
*   How to build pages.

## 1. Preparation
Before you can start with this how-to, make sure you have completed the following prerequisites.

*   [Build a simple HRM app 1: Create, manage and deploy the app](build-a-simple-hrm-app-1-create-manage-and-deploy-the-app)

## 2\. Create a domain model

The domain model is a data model that describes the information in your application domain in an abstract way. It is central to the architecture of your application. The domain model consists of entities and their relations represented by associations.

1.  Open the **Domain Model** of the MyFirstModule module.
    ![](attachments/14091674/14385454.png) 
2.  Click on **Entity** to create a new entity. Click [here](/refguide5/entities) to learn more about entities.
    ![](attachments/14091674/14385455.png) 
3.  Double-click on the new entity.
    ![](attachments/14091674/14385459.png)
4.  Enter _Employee_ in the **Name** field.
    ![](attachments/14091674/14385460.png)
5.  Click on **New** to add a new attribute. Click [here](/refguide5/attributes) to learn more about attributes.
    ![](attachments/14091674/14385458.png)
6.  Enter _Name_ in the **Name** field.
    ![](attachments/14091674/14385461.png)
7.  Select **String** as the **Type** dropdown.
    ![](attachments/14091674/14385462.png)
8.  Click **OK**.

9.  Repeat steps 4 through 7 for the following attributes:

    <table><thead><tr><th class="confluenceTh">Name</th><th class="confluenceTh">Type</th></tr></thead><tbody><tr><td class="confluenceTd">Address</td><td class="confluenceTd">String</td></tr><tr><td class="confluenceTd">City</td><td class="confluenceTd">String</td></tr><tr><td class="confluenceTd">State</td><td class="confluenceTd">String</td></tr><tr><td colspan="1" class="confluenceTd">Phone</td><td colspan="1" class="confluenceTd">String</td></tr><tr><td colspan="1" class="confluenceTd">Email</td><td colspan="1" class="confluenceTd">String</td></tr><tr><td colspan="1" class="confluenceTd">DateOfBirth</td><td colspan="1" class="confluenceTd">Date and time</td></tr></tbody></table>

    The entity will look like this:
    ![](attachments/14091674/14385463.png)

## 3\. Build a page

Pages define the end user interface of a Mendix application. Every page is based on a layout. A page fills the 'gaps' defined by a layout with widgets such as the data view and the data grid.

### 3.1 Add a page

1.  Right-click on the **MyFirstModule** module.
2.  Click on **Add > Page**.
    ![](attachments/14091674/14385464.png) 
3.  Enter _Employee_Overview_ in the **Page name** field.
4.  Click on **Master Detail**.
5.  Select **Master detail big**.
6.  Select _Sidebar_Left_ in the **Navigation layout** dropdown.
    ![](attachments/14091674/14385466.png) 
7.  Click **OK**.
8.  Click on the data grid below the label Master Detail.
9.  Drag-and-drop the entity **Employee** from the connector to the data grid.
    ![](attachments/14091674/14385467.png)
10.  Deselect the **Auto-Fill** option.
     ![](attachments/14091674/14385468.png)
11.  Click **OK**.

### 3.2 Add attributes to your page

1.  Double-click on the **Full Name** column.
2.  Click on the **Select** button.
    ![](attachments/14091674/14385469.png) 
3.  Select the attribute **Name**.
    ![](attachments/14091674/14385471.png)
4.  Click **Select** to select the attribute.
5.  Click **OK**.
6.  Repeat steps 1 through 5 for the following columns with corresponding attributes:

    <table><thead><tr><th class="confluenceTh">Caption Column</th><th class="confluenceTh">Attribute</th></tr></thead><tbody><tr><td class="confluenceTd">Email</td><td class="confluenceTd">Email</td></tr><tr><td class="confluenceTd">City</td><td class="confluenceTd">City</td></tr></tbody></table>
7.  Double-click the first text box below the image.
    ![](attachments/14091674/14385472.png)

8.  Click **Select** to select an attribute.
    ![](attachments/14091674/14385473.png) 
9.  Select attribute **Name**.
10.  Click **Select** to select the attribute.
11.  Click **OK**.
12.  Repeat steps 7 through 11 for the second text box and select attribute **Email**.
13.  Delete the link button.
    ![](attachments/14091674/14385507.png)
14.  Click on the **Name** text box in the user details container.
    ![](attachments/14091674/14385474.png) 
15.  Drag-and-drop the attribute **Name** from the connector to the Name field in the User details container.
    ![](attachments/14091674/14385475.png) 
16.  Drag and drop the following attributes to their corresponding:

<table><thead><tr><th class="confluenceTh">Attribute</th><th class="confluenceTh">Field</th><th colspan="1" class="confluenceTh">Container</th></tr></thead><tbody><tr><td class="confluenceTd">Email</td><td class="confluenceTd">Name</td><td colspan="1" class="confluenceTd">User details</td></tr><tr><td class="confluenceTd">Phone</td><td class="confluenceTd">Phone</td><td colspan="1" class="confluenceTd">Phone</td></tr><tr><td class="confluenceTd"><span>DateOfBirth</span></td><td class="confluenceTd">Birthday</td><td colspan="1" class="confluenceTd">Birthday</td></tr><tr><td colspan="1" class="confluenceTd">City</td><td colspan="1" class="confluenceTd">City</td><td colspan="1" class="confluenceTd">Location</td></tr><tr><td colspan="1" class="confluenceTd">State</td><td colspan="1" class="confluenceTd">State</td><td colspan="1" class="confluenceTd">Location</td></tr></tbody></table>

17.  Delete the containers and input fields that are not being used.
    ![](attachments/14091674/14385476.png) 

### 3.3 Add buttons to your page

To create or delete employees, you need to add a button to the data grid.

1.  Right-click on the grid control bar of the data grid.
2.  Click on **Add button > New**.
    ![](attachments/14091674/14385477.png) 
3.  Right-click on the grid control bar of the data grid.
4.  Click on **Add button > Delete**.
    ![](attachments/14091674/14385479.png) 

### 3.4 Generate a page

1.  Right-click on the **New** button.
2.  Click on **Generate page**.
    ![](attachments/14091674/14385480.png) 
3.  Enter _Employee_NewEdit_ in the **Page name** field.
4.  Select **Form basic horizontal**.
5.  Select _PopupLayout_ in the **Navigation layout** dropdown.
    ![](attachments/14091674/14385481.png) 
6.  Click **OK**.
    The new page will be shown in the project explorer.
    ![](attachments/14091674/14385485.png)

### 3.5 Create a menu item for your page

To view a page in your app, you need to add a menu item so you can navigate to the page.

1.  Open the **Navigation** of the project.
    ![](attachments/14091674/14385483.png) 
2.  Click **New item** to add a new menu item.
    ![](attachments/14091674/14385484.png) 
3.  Enter _Employees_ in the **Caption** field.

4.  Click **Select** to select a target.
    ![](attachments/14091674/14385487.png)
5.  Select the **Employee_Overview** page of the MyFirstModule module.
    ![](attachments/14091674/14385501.png)
6.  Click **Select**.
7.  Click **OK**.
    The Employee Overview page will be shown in the navigation list.
    ![](attachments/14091674/14385502.png) 

## 4\. View your app  

1.  Click on **Run in Sandbox**.
    ![](attachments/14091670/14385449.png)
2.  Click on the **Save and continue** button.
3.  Click on **View App**.
    ![](attachments/14091670/14385450.png)

    At the left side of your app the menu item _Employees_ is shown.
    ![](attachments/14091674/14385509.png) 
4.  Click on **Employees**.
    ![](attachments/14091674/14385510.png)

You can now add and edit employees! Click [here](build-a-simple-hrm-app-3-show-related-data-in-the-gui) to go the third how-to on how to create a simple HRM application and learn how to show related data in the GUI.

## 5\. Related content

*   [Build a simple HRM app 1: Create, manage and deploy the app](build-a-simple-hrm-app-1-create-manage-and-deploy-the-app)
*   [Build a simple HRM app 3: Show related data in the GUI](build-a-simple-hrm-app-3-show-related-data-in-the-gui)
*   [Build a simple HRM app 4: Enrich the GUI with Filter Options](build-a-simple-hrm-app-4-enrich-the-gui-with-filter-options)
*   [Build a simple HRM app 5: Smarten up your app with business logic](build-a-simple-hrm-app-5-smarten-up-your-app-with-business-logic)

Learn more about this topic using the following helpful links:

*   [Domain Model](/refguide5/domain-model)
*   [Entities](/refguide5/entities)
*   [Pages](/refguide5/page)
*   [Setting Up the Navigation Structure](setting-up-the-navigation-structure)
*   [New button](/refguide5/new-button)
*   [Delete button](/refguide5/delete-button)
