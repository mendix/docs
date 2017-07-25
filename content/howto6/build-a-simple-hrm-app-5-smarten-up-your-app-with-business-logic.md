---
title: "Build a Simple HRM App 5: Smarten Up Your App with Business Logic"
parent: "build-a-simple-hrm-app"
---

## 1 Introduction

This how-to is based on the video "Build a simple HRM app: Smarten up your app with business logic," which is part of the [Getting Started videos](http://gettingstarted.mendixcloud.com/link/courses/gettingstarted).

This is the last how-to in a series of five on how to create a simple HRM application. In this how-to, you learn how to smarten up your application by adding business logic.

**After using this how-to, you will know how to do the following:**  

*   How to create a microflow
*   How to build business logic

## 2 Prerequisites

Before you can start with this how-to, make sure you have completed the following prerequisite:

* Use the fourth how-to in this series: [Build a Simple HRM App 4: Enrich the GUI with Filter Options](build-a-simple-hrm-app-4-enrich-the-gui-with-filter-options)

## 3 Creating a Microflow

In this section you will create a microflow.

### 3.1 Adding an Action Button That Calls a Microflow

To add an action button that calls a microflow, follow these steps:

1. Open the **Employee_Overview** page of the MyFirstModule module.
2. Right-click the grid control bar of the data grid in the **Master Detail** container and select **Add button** > **Action**.
    ![](attachments/18448670/18580844.png) 
    To learn more about action buttons, see the [Action Button section of the Mendix Reference Guide](/refguide6/action-button).
3. Double-click the new button and change the caption of the button to *Promote*.
    ![](attachments/18448670/18580843.png)
4. Select **Call a microflow** as the on click event:
    ![](attachments/18448670/18580842.png)
    To learn more about a microflow, see the [Microflows chapter of the Mendix Reference Guide](/refguide6/microflows).
5. Click **Select** to select a microflow:
    ![](attachments/18448670/18580841.png) 
6. Click the **MyFirstModule** module, and then click **New** to add a new microflow to the Responsive module:
    ![](attachments/18448670/18580840.png) 
7. Enter *Employee_Promote* in the **Name** field, then click **OK** to create the microflow:
    ![](attachments/18448670/18580839.png) 
8. Right-click the new button and select **Go to microflow**:
    ![](attachments/18448670/18580838.png) 

The microflow should look like this:
![](attachments/18448670/18580837.png) 

### 3.2 Adding an Exclusive Split

To add an exclusive split, follow these steps:

1. Select an exclusive split from the toolbar of the microflow editor:
    ![](attachments/18448670/18580836.png) 
     To learn more about exclusive splits, see the [Exclusive Split chapter of the Mendix Reference Guide](/refguide6/exclusive-split).
2. Click a point on the line to add the exclusive split to the flow:
    ![](attachments/18448670/18580835.png) 
3. Double-click the new exclusive split to open the properties editor:
    ![](attachments/18448670/18580833.png)
4. Enter *Level?* in the **Caption** field. 
5. Place your cursor in the **Expression** field and then press **CTRL + SPACE** to bring up a list of suggestions:
    ![](attachments/18448670/18580826.png) 
    To learn more about microflow expressions, see the [Microflow Expressions chapter of the Mendix Reference Guide](/refguide6/microflow-expressions).
6. Select **$Employee (MyFirstModule.Employee)** from the list of suggestions. This employee object corresponds to the input object of the microflow:
    ![](attachments/18448670/18580796.png)
7. Add a forward slash ("/") to the value in the **Expression** field. This will show all the attributes of the employee object:
    ![](attachments/18448670/18580827.png)
8. Select **Level (Enumeration 'Level')**:
    ![](attachments/18448670/18580828.png)
9. Click **OK**. The exclusive split will now evaluate the values from the Level attribute:
    ![](attachments/18448670/18580824.png) 
10. Double-click a point on the line between the exclusive split and the end event, and then select **Junior** from the **Value** drop-down menu:
    ![](attachments/18448670/18580822.png) 
11. Click **OK**. When the employee in the input parameter has the Junior level, this path will be executed:
    ![](attachments/18448670/18580821.png)
12. Select an end event from the toolbar of the microflow editor:
    ![](attachments/18448670/18580820.png)
    To learn more about an end event, see the [End Event section of the Mendix Reference Guide](/refguide6/end-event).
13. Add an end event to the flow:
    ![](attachments/18448670/18580816.png)
14. Drag a line from the exclusive split to the new end event.
    ![](attachments/18448670/18580817.png)
15. Double-click a point on the line between the exclusive split and the new end event, and then select **Medior** in the **Value** drop-down menu:
    ![](attachments/18448670/18580814.png)
16. Click **OK**.
17. Repeat steps 10–16 for the *Senior* and *(empty)* values. The microflow should look like this:
    ![](attachments/18448670/18580813.png)

### 3.3 Adding Activities to the Microflow

To add activities to the microflow, follow these steps:

1. Drag a **Change object** activity from the **Toolbox** to the **Junior** path:
    ![](attachments/18448670/18580810.png)
    To learn more about activities, see the [Activities chapter of the Mendix Reference Guide](/refguide6/activities).
    ![](attachments/18448670/18580809.png)
2. Double-click the new change object activity to open the **Change Object** properties editor:
    ![](attachments/18448670/18580808.png)
3. Select **Employee (MyFirstModule.Employee)** from the input **Variable** drop-down menu:
    ![](attachments/18448670/18580807.png) 
4. Set **Commit** to **Yes**. This will save the change to the database.
5. Set **Refresh in client** to **Yes**. This will update the value in the UI.
6. Click **New** to add a new change item:
    ![](attachments/18448670/18580806.png) 
7. Select **Level (Enumeration 'Level')** from the **Member** drop-down menu:
    ![](attachments/18448670/18580805.png) 
8. Click **Generate**:
    ![](attachments/18448670/18580804.png) 
9.  Select **Medior** from the **Constant** drop-down menu, then click **OK**:
    ![](attachments/18448670/18580803.png)
10. Click **OK** to save the change object properties. The microflow will look like this:
![](attachments/18448670/18580802.png) 
11. Repeat steps 1–10 for the *Medior* path. Make sure that you set the level value to **Senior**. The microflow should then look like this:
    ![](attachments/18448670/18580801.png)
12. Drag a **Show message** activity from the **Toolbox** to the **Senior** path:
    ![](attachments/18448670/18580800.png) 
13. Double-click the show message activity to open the **Show Message** properties editor.
14. Enter *Employee is already at senior level* in the **Template** field, then click **OK**:
    ![](attachments/18448670/18580798.png)
15. Drag a **Change object** activity from the **Toolbox** to the path that will be executed when the employee has no level.
16. Repeat steps 2 through 10 for this new change object activity and make sure that you set the level value to **Junior**. The microflow will look like this:
    ![](attachments/18448670/18580797.png) 

## 4 Viewing Your App

To view your app, follow these steps:

1. Click **Run in Sandbox**, then **Save and continue**, and then **View App**.
2. Click **Employees** in the navigation list, and then select an employee with the **Medior** level.
3. Click **PROMOTE**. The level of the employee will change from **Medior** to **Senior**.
4. Click **PROMOTE**. You will see a message that you cannot promote the employee because the employee is already Senior.

## 5 Related Content

* [Build a Simple HRM App 1: Create, Manage, and Deploy the App](build-a-simple-hrm-app-1-create-manage-and-deploy-the-app)
* [Build a Simple HRM App 2: First Steps in Building a Rich GUI](build-a-simple-hrm-app-2-first-steps-in-building-a-rich-gui)
* [Build a Simple HRM App 3: Show Related Data in the GUI](build-a-simple-hrm-app-3-show-related-data-in-the-gui)
* [Build a Simple HRM App 4: Enrich the GUI with Filter Options](build-a-simple-hrm-app-4-enrich-the-gui-with-filter-options)
* [Create and Deploy Your First App](create-and-deploy-your-first-app)
* [Testing Microflows Using the UnitTesting Module](testing-microflows-using-the-unittesting-module)
