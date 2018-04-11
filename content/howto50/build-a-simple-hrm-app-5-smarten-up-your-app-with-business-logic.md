---
title: "Build a simple HRM app 5: Smarten up your app with business logic"
parent: "how-to-build-a-simple-hrm-app"
---

This how-to is based on the video "Build a simple HRM app: Smarten up your app with business logic", which is part of the [Getting Started videos](http://gettingstarted.mendixcloud.com/link/courses/gettingstarted).

This is the last how-to in a series of five on how to create a simple HRM application. In this how-to you learn how to smarten up your application by adding business logic.

**After completing this how-to you will know:**

*   How to create a microflow.
*   How to build business logic.

## 1. Preparation

Before you can start with this how-to, make sure you have completed the following prerequisites.

*   [Build a simple HRM app 4: Enrich the GUI with Filter Options](build-a-simple-hrm-app-4-enrich-the-gui-with-filter-options)

## 2\. Create a microflow

In this chapter you'll create a microflow.

### 2.1 Add an action button that calls a microflow

1.  Open the **Employee_Overview** page of the MyFirstModule module.
2.  Right-click on the **grid control bar** of the data grid in the master detail container.
3.  Click on **Add button > Action**. Click [here](/refguide5/action-button) to learn more about an action button.
    ![](attachments/14091778/14876716.png) 
4.  Double-click on the new button.
5.  Change the **caption** of the new button to _Promote_.
    ![](attachments/14091778/14876717.png) 
6.  Select _Call a microflow_ as **on click event**. Click [here](/refguide5/microflows) to learn more about a microflow.
    ![](attachments/14091778/14876718.png) 
7.  Click on **Select** to select a microflow.
    ![](attachments/14091778/14876719.png) 
8.  Click on the **MyFirstModule** module.
9.  Click on **New** to add a new microflow to the Responsive module.
    ![](attachments/14091778/14876720.png) 
10.  Enter _Employee_Promote_ in the **Name** field.
    ![](attachments/14091778/14876721.png) 
11.  Click **OK** to create the microflow.
12.  Click **OK**.
13.  Right-click on the new button.
14.  Click on **Go to microflow**.
    ![](attachments/14091778/14876722.png) 

The microflow should look like the image below:
![](attachments/14091778/14876723.png) 

### 2.2 Add an exclusive split

1.  Select an **exclusive split** from the toolbar of the microflow editor. Click [here](/refguide5/exclusive-split) to learn more about an exclusive split.
    ![](attachments/14091778/14876724.png) 
2.  Click on the line to add the **exclusive split** to the flow.
    ![](attachments/14091778/14876725.png) 
3.  Double-click the **new exclusive split** to open the properties editor.
    ![](attachments/14091778/14876727.png)
4.  Enter _Level?_ in the **caption** field. 
5.  Press **CTRL + SPACE** in the expression field to display suggestions. Click [here](/refguide5/microflow-expressions) to learn more about microflow expressions.
    ![](attachments/14091778/14876734.png) 
6.  Select **$Employee (MyFirstModule.Employee)**.
    This employee object corresponds with the input object of the microflow.
    ![](attachments/14091778/14876767.png)
7.  Add a _/ (forward slash)_ to the value in the **expression** field.
    This will show all the attributes of the employee object.
    ![](attachments/14091778/14876733.png)
8.  Select **Level** **(Enumeration 'Level')**.

    ![](attachments/14091778/14876732.png)
9.  Click **OK**.
    The exclusive split will now evaluate values from the Level attribute.
    ![](attachments/14091778/14876736.png) 
10.  Double click on the line between the exclusive split and the end event.

11.  Select _Junior_ in the **Value** dropdown.
    ![](attachments/14091778/14876738.png) 
12.  Click **OK**.
    ![](attachments/14091778/14876739.png)
    When the Employee in the input parameter has the Junior level, this path will be executed.
13.  Select an **end event** from the toolbar of the microflow editor. Click [here](/refguide5/end-event) to learn more about an end event.
    ![](attachments/14091778/14876740.png) 
14.  Add the **end event** to the flow.
    ![](attachments/14091778/14876744.png)
15.  Drag a line from the exclusive split to the new end event.
    ![](attachments/14091778/14876743.png)
16.  Double click on the line between the exclusive split and the new end event.
17.  Select _Medior_ in the **Value** dropdown.
    ![](attachments/14091778/14876746.png)
18.  Click **OK**.
19.  Repeat steps 27 through 32 for the **Value **_Senior_ and _(empty)_.
    The microflow should look like the image below:
    ![](attachments/14091778/14876747.png)

### 2.3 Add activities to the microflow

1.  Drag a **Change object** activity from the Toolbox to the Junior path. Click [here](/refguide5/activities) to learn more about activities.
    ![](attachments/14091778/14876750.png)

    ![](attachments/14091778/14876751.png)
2.  Double-click on the new **Change object** activity to open the properties editor.
    ![](attachments/14091778/14876752.png)
3.  Select _Employee (MyFirstModule.Employee)_ in the **input variable** dropdown.
    ![](attachments/14091778/14876753.png) 
4.  Set **Commit** to _Yes_. This will save the change to the database.
5.  Set **Refresh in client** to _Yes_. This will update the value in the user interface.
6.  Click on **New** to add a new change item.
    ![](attachments/14091778/14876754.png) 
7.  Select _Level (Enumeration 'Level')_ in the **Member** dropdown.
    ![](attachments/14091778/14876755.png) 
8.  Click on **Generate**.
    ![](attachments/14091778/14876756.png) 
9.  Select _Medior_ in the **Constant** dropdown.
    ![](attachments/14091778/14876757.png) 
10.  Click **OK**.
11.  Click **OK**.
12.  Click **OK** to save the change object properties. The microflow will look like the image below:
    ![](attachments/14091778/14876758.png) 

13.  Repeat steps 1 through 12 for the Medior path. Make sure that you set the level value to Senior. The microflow should look like the image below:
    ![](attachments/14091778/14876759.png)

14.  Drag a **Show message** activity from the Toolbox to the Senior path.
    ![](attachments/14091778/14876760.png) 
15.  Double-click on the **Show message** activity to open the properties editor. 
16.  Enter _Employee is already at senior level_in the **Template** field.
    ![](attachments/14091778/14876762.png)
17.  Click **OK**.
18.  Drag a **Change object** activity from the Toolbox to the path which will be executed when the Employee has no level.
19.  Repeat steps 2 through 12 for this new **Change object **activity and make sure that you set the level value to Junior. The microflow will look like the image below:
    ![](attachments/14091778/14876763.png) 

## 3\. View your app

1.  Click on **Run in Sandbox**.
2.  Click on the **Save and continue** button.
3.  Click on **View App**.
4.  Click on **Employees** in the navigation list.
5.  Select an employee with level **Medior**.
6.  Click on **PROMOTE**.
    The level of the employee will change from Medior to Senior.
7.  Click on **PROMOTE**. 
    You will see a message that you can not promote the employee because the employee is already Senior.

## 4\. Related content

*   [Build a simple HRM app 1: Create, manage and deploy the app](build-a-simple-hrm-app-1-create-manage-and-deploy-the-app)
*   [Build a simple HRM app 2: First steps in building a rich GUI](build-a-simple-hrm-app-2-first-steps-in-building-a-rich-gui)
*   [Build a simple HRM app 3: Show related data in the GUI](build-a-simple-hrm-app-3-show-related-data-in-the-gui)
*   [Build a simple HRM app 4: Enrich the GUI with Filter Options](build-a-simple-hrm-app-4-enrich-the-gui-with-filter-options)

Learn more about this topic using the following helpful links:

*   [Action Button](/refguide5/action-button)
*   [Microflows](/refguide5/microflows)
*   [Exclusive Split](/refguide5/exclusive-split)
*   [Microflow Expressions](/refguide5/microflow-expressions)
*   [End Event](/refguide5/end-event)
*   [Activities](/refguide5/activities)
