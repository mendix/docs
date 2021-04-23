---
title: "Configure a Workflow in Studio Pro for the Employee Onboarding Process"
category: "Logic & Business Rules"
description: "Describes how to configure a workflow in Mendix Studio."
menu_order: 1
tags: ["studio pro", "workflow", "task", "onboarding"]
---

## 1 Introduction 

Workflow is a new visual language in Mendix Studios that allows you to build extendable processes. It is fully integrated with other visual languages, such as microflow editor and page editor. 

This how-to explains how to build an employee onboarding process using the workflow editor. 

**This how-to will teach you how to do the following:**

* Creating a workflow
* Creating user tasks for different user roles
* Configuring pages for the user tasks
* Restricting page access to the relevant user roles
* Using a microflow to extend logic of the workflow
* Testing your workflow from the perspective of different users
* Creating a decision

The how-to describes the following use case: 

You would like to build an employee onboarding process. At first, an HR specialist needs to initiate the onboarding process for a new employee. The employee's manager will then step in and select devices for the employee. Afterwards the manager needs to specify whether the new hire is working from the office or home . The Facilities department will then need to prepare a workspace. Depending on where the new hire works from (the office or home), the Facilities department will either prepare a desk or ship the devices to the employee's address. 

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Your project has the following modules [Workflow Commons](https://marketplace.mendix.com/link/component/117066) and [Mendix SSO](https://marketplace.mendix.com/link/component/117212) modules. Fore more information on how to set up Workflow Commons in an existing app, see [Adding a Workflow to an Existing App: Setting Up the Basics](/refguide/workflow-setting-up-app).

* Install Atlas 3 from the Mendix Marketplace, as Workflow Commons depends on it. 

* As a result of installing Atlas 3, your app should contain the following modules that Workflow Commons depends on: Atlas_Core, Atlas_Web_Core_Content, and DataGrid.

* Make sure that the **User entity** is configured in your [App Settings](/refguide/project-settings#workflows) > **Workflows** tab. 

* Familiarize yourself with workflow terms. For more information, see [Workflows](/refguide/workflows). 

* Make sure that the domain model of the module you are working in looks the following way:

  ![Domain Model](attachments/workflow-how-to-configure/domain-model.png)

* Make sure you have the following enumerations configured:

    * The PhoneModel enumeration:
    
        ![](attachments/workflow-how-to-configure/enumeration-phone-model.png)
    
    * The LaptopModel enumeration:
    
        ![](attachments/workflow-how-to-configure/enumeration-laptop-model.png)
  
* Make sure you have an **EmployeesToOnboard** page that contains a form and has the **EmployeeOnboarding** entity as the data source:

    ![Employees Page](attachments/workflow-how-to-configure/employees-page.png)


## 3 Setting Up Security 

### 3.1 Configuring User Roles

First, you need to create three project roles for a manager, Facilities, and HR and configure them correctly.

Do the following:

1. In the Project Explorer, open **Project** > **Security**.

2. Open the **User roles** tab and click **New**. 

3. In the **Add User Role** dialog box, set the **Name** to **Facilities** and untick all modules except MyFirstModule, as you do not need to create a specific Facilities role for all modules. 

4. Click **OK**.

5. You need to assign the **User** user role to Facilities for all other modules. Double-click the newly created Facilities role.

6. In the **User Role** dialog box, click **Edit** in the **Module roles** section {{% todo %}}[Check if this screenshot needs to be updated]{{% /todo %}}.

    ![](attachments/workflow-how-to-configure/edit-module-roles.png)

7. In the **Select Module Roles** dialog box, tick the User role for all modules where no role is selected and click **OK**:

    ![Module Roles](attachments/workflow-how-to-configure/modules-roles.png)

8. Confirm your choice by clicking **OK**.

9. Repeat steps 2-8 to create and configure the Manager role.

10. Repeat steps 2-8 to create and configure the HR role.

You have configured new project roles for Facilities, Manager, and HR. 


### 3.2 Configuring Demo Users

You need to create demo users for the newly created project roles to be able to test your app later. For more information, see the [Testing Workflow](#test-workflow) section. Follow the steps below: 

1. In the Project Explorer, open **Project** > **Security** > the **Demo users** tab and click **New**.

2.   In the **Add Demo User** dialog box, set the **User name** to **demo_facilities**.

3.   Assign the corresponding user role in the **User roles** section: select the **Facilities** role. 

4.   Click **OK**.

5.   Repeat steps 2-4 to add the **demo_manager** demo user.

6.   Repeat steps 2-4 to add the **demo_hr** demo user.

You have configured demo users for your project. 

## 4 Creating a Workflow

You need to create a workflow that you will add activities to and create pages for. Do the following:

1. In the Project Explorer, right-click the **MyFirstModule** module and select Add workflow in the drop-down menu.

    ![Add Workflow](attachments/workflow-how-to-configure/add-workflow.png)

2.  In the **Add workflow** dialog box, set the **Name** to *Employee_Onboarding* and click **OK**.

3. To open the workflow properties, click the start activity or make sure that no activity is selected in the workflow editor and navigate to the **Properties** pane. 

4. Click the **Allowed roles** property to set security for the workflow.

5. In the **Select Module Roles** dialog box, select the **Workflow Administrator** and the **HR** role and click **OK**. These roles are now able to start the workflow. 

6. Click the **Workflow entity** property:

    ![Context Entity](attachments/workflow-how-to-configure/workflow-entity.png)

7. In the **Select Entity** dialog box, select the **EmployeeOnboarding** entity and click **Select**. This entity serves two purposes: it holds input data for executing the workflow and will carry the data that is added during the execution of the workflow.  

    ![Select WorkflowContext Entity](attachments/workflow-how-to-configure/select-workflowcontext-entity.png)

Good job! You have created a workflow and configured its properties. 

![Newly Created Workflow](attachments/workflow-how-to-configure/newly-created-workflow.png)



## 5 Triggering the Workflow from a Page

To start you workflow, you need to trigger it. In this use case, the workflow is started by an HR specialist who should fill in the new hire's name, the first day, and then click the **Start Onboarding** button that will trigger the workflow. 

You have an **EmployeesToOnboard** page that contains a list of all employees and has the **EmployeeOnboarding** entity as the data source:

![New Employee Page](attachments/workflow-how-to-configure/employees-page.png)

The page access is restricted to the HR user role:

![Page Access](attachments/workflow-how-to-configure/page-access-hr.png)

To add a button that will initiate the workflow, do the following:

1. Open the **Toolbox** and search for a **Button** widget.

2. Drag and drop the button inside the list view.

3. Open the button properties and set the **On-click** property to **Call workflow**: 

    ![Call Workflow](attachments/workflow-how-to-configure/call-workflow-on-click.png)

4. Click the ellipsis icon in the **Workflow** property.

5. In the **Select Workflow** dialog box, select Employee_Onboarding workflow and click **OK**.

6. Set **Caption** of the button to **Start Onboarding**.

Good job! Now when the HR specialist clicks the button, the workflow will start. 

## 6 Selecting a Device for the New Hire {#select-device}

The manager of a new employee will get a task to specify devices for the new hire. For this functionality you need to add activities to the workflow. Follow the steps below: 

1. Navigate to the **Toolbox** pane, find a **User task** activity, and drag and drop it to the workflow editor.

2. Select the **User task** activity and open the **Properties** pane. 

3. To be able to differentiate this user task from other ones, set the **Name** property to **Specify_Device**. 

4. Set the **Caption** property to **Manager: Specify Device** to easily see who this task should be assigned to.

    ![SpecifyDevice Properties](attachments/workflow-how-to-configure/specify-device-properties.png) 

5. Set the **Allowed roles** to **Manager** for managers to be able to interact with the user task. 

6. To create a page where the manager will specify devices for the new employee, click the ellipsis icon in the **Page** property.

7. In the **Select web page** dialog box, click the **New** button.

8. In the **Create web page** dialog box, you can see the templates for workflow pages. Do the following:

    1. Set the **Page name** to **SpecifyDevice**.

    2. Set **Navigation layout** to **Atlas_Default (Atlas_UI_Resources)**.

    3.  Select the **User Task Extended** template.

    4. Click **OK**.

9. As only the Manager should specify devices for the new employee, you need to restrict the user task to the Manager role. Click the ellipsis icon in the **Assigned to** property.

10. In the **Edit assigned to** dialog box, type in the expression: `[System.UserRoles = '[%UserRole_Manager%]']` and click **OK**.

11. Now you need to make sure that only the relevant information is displayed on the **SpecifyDevice** page. In the Project Explorer, double-click the **SpecifyDevice** page to open it.

12. By default, all attributes are added to the data view with the employee details. You need to leave only the attributes related to the task. You also need to make sure that the manager can change only a specific field in the form. For example, the name of the employee has been entered by the HR department, so the manager does not need to change it and should have this field as read-only. 

     Do the following:

     1. Select the text box for the **FullName** attribute and go to its properties.

     2. Set the **Editable** property to *Never* to make the field read-only.

     3. Delete the **WFH** radio buttons and **First day** date picker widgets and the **Workflow** reference selector as they are not relevant for this task. 

     4. Leave the **Phone model** and **Laptop model** radio buttons:

         ![Form for Specifying Devices](attachments/workflow-how-to-configure/specify-devices-form.png)

13. Only the Manager role can access and interact with the **SpecifyDevice** page, restricting the access to this page is the next step. Navigate to the page properties and do the following:

     1. In the **Visible for** property, click the ellipsis icon.

     2. In the **Select Module Roles** dialog box, select **Manager** and click **OK**:

         ![Select Module Roles](attachments/workflow-how-to-configure/select-module-roles.png)

Great job! You have created the user task for the Manager role:

![Workflow with Specify Device User Task](attachments/workflow-how-to-configure/workflow-with-specify-device-task.png)

## 7 Specifying a Location for the New Hire {#specify-location}

To proceed with the onboarding, the Manager needs to indicate whether the new hire is working home (WFH) or not. Follow the steps below:

1. Open the workflow.

2. Open the **Toolbox**, drag and drop a **User task** activity to the path, and do the following:

    1. Set **Name** to **Specify_Location** and set **Caption** to **Manager: Specify Location** referring to steps 2-4 of the [Selecting a Device for the New Hire](#select-device) section.
    2. Set the **Allowed roles** property to **Manager** for managers to be able to interact with the user task. 
    3. Set a new page called **SpecifyLocation** for the **Page** property referring to steps 6-8 of the [Selecting a Device for the New Hire](#select-device) section.
    4. Restrict the **Specify Location** user task to the Manager role referring to steps 7-10 of the [Selecting a Device for the New Hire](#select-device) section.

3. Now you need to make sure that only the relevant information is displayed on the **SpecifyLocation** page and that only the Manager role has access to it. In the Project Explorer, double-click the **SpecifyLocation** page to open it.

4. By default, all attributes are added to the employee detail form, while you need to leave only the attributes which are related to the task. You also need to make sure that the Manager can change only specific fields in the form. 

    Do the following:

    1. Select the text box for the **FullName** attribute and go to its properties.

    2. Set the **Editable** property to *Never* to make the field read-only.

    3. Delete the **First day** date picker widgets and the **Workflow** reference selector as they are not relevant for this task. 

    4. The **Phone model** and **Laptop model** radio buttons should not be editable as well. Repeat steps 4a and 4b to make these fields read-only.

        ![Specify Location Form](attachments/workflow-how-to-configure/specify-location-form.png)

    5. To restrict access of the page to the Manager role only, follow step 13 of the [Selecting a Device for the New Hire](#select-device) section.
    

You have created the user task for the Manager to specify whether the new employee is working from home or not.

## 8 Following Different Paths for the Hire's Location

Depending on whether the new hire is working from the office or home, there are two different processes to onboard this hire: prepare a desk in the office or send the laptop and phone to the new hire's home address. This step of the onboarding process should be done by the Facilities department.

Do the following:

1. Open the workflow editor > **Toolbox** and drag and drop the **Decision** activity after the **Specify Location** user task. 

    ![Adding a Decision](attachments/workflow-how-to-configure/decision.png)
    
2. Decision means that the workflow path can split and follow one of the outcomes depending on the condition of the decision. For more information, see [Decision](/refguide/decision). Open the decision properties and do the following:

    1. Set the **Caption** to **WFH?**.
    2. Click the ellipsis icon in the **Condition** property.
    3. In the **Condition** dialog box, type in the expression that will split the flow into two depending on the **Location** attribute: `$workflowData/WFH`.

        ![Decision Properties](attachments/workflow-how-to-configure/decision-properties.png)

3. Since the WFH attribute is a Boolean, it has true (when the new hire works from home) and false (when they work from the office). These outcomes are added to the workflow automatically: 

    ![Decision Outcomes](attachments/workflow-how-to-configure/decision-outcomes.png)

4. Now you need to configure what happens in both scenarios: when the new hire works from the home (true) and when the new hire works from office (false). Open the **Toolbox**, drag and drop a **User task** activity to the **false** path, and do the following:

    1. Name the user task **Prepare_Desk** and set its title to **Facilities: Prepare Desk** referring to steps 2-4 of the [Selecting a Device for the New Hire](#select-device) section.

    2. Set the **Allowed roles** property to **Facilities** for managers to be able to interact with the user task. 

    3. Set a new page called **PrepareDesk** for the **Page** property it referring to steps 6-8 of the [Selecting a Device for the New Hire](#select-device) section.

    4. Restrict the **Prepare Desk** user task to the Facilities role referring to steps 9-10 of the [Selecting a Device for the New Hire](#select-device) section.

        ![Prepare Desk](attachments/workflow-how-to-configure/prepare-desk.png)

5. You need to make sure that only the relevant information is displayed on the **PrepareDesk** page. In the Project Explorer, double-click the **PrepareDesk** page to open it.

6. By default, all attributes are added to the employee detail form. You need to make sure that the Facilities department will be able to view the fields but not change them. Do the following: 
   
    1. Delete the **Workflow** reference selector widget from the form.
      
    2. Select the data view with the employee details and go to its properties.
    
    3. Set the **Editable** property to *No* to make the remaining fields in the form read-only.
      
       ![Read-Only Form](attachments/workflow-how-to-configure/read-only-form.png)
   
7. To restrict access to the page to the Facilities role only, follow the step 13 of the [Selecting a Device for the New Hire](#select-device) section.

8. Now you need to create a user task for Facilities when the employee is working from home. Open the workflow editor.

9. Open the **Toolbox**, drag and drop a **User task** activity to the **true** path, and do the following:

    1. Name the user task **Ship_Devices** and set its title to **Facilities: Ship Devices** referring to steps 2-4 of the [Selecting a Device for the New Hire](#select-device) section.
    2. Set the **Allowed roles** property to **Facilities** for managers to be able to interact with the user task. 
    3. Set a new page called **ShipDevices** for the **Page** property it referring to steps 6-8 of the [Selecting a Device for the New Hire](#select-device) section.
    4. Restrict the **Ship Devices** user task and **ShipDevices** page to the Facilities role referring to steps 9-10 of the [Selecting a Device for the New Hire](#select-device) section.

10. You need to make sure that only relevant information is displayed on the **ShipDevices** page and that this page can be accessed by the Facilities department only. In the Project Explorer, double-click the **ShipDevices** page to open it.

11. Repeat steps 6-7 above to make the employee detail form read-only and to restrict the page access to the Facilities role.

Great job! You have configured the decision and user tasks on whether the new hire is working from the office or from home. 

## 9 Extending Workflow Logic

You can extend workflow logic by calling a microflow. If the new employee works from the office, you would like to show in the system that the desk prepared by the Facilities department is assigned to this new employee. This way, HR and Management will see where the new colleagues is sitting in the office. You have an **Assign_Desk** microflow that you can use. 

To call a microflow in your workflow, do the following:

1. Open the workflow editor > **Toolbox** and drag and drop the **Call microflow** activity after the **Facilities: Prepare Desk** user task:

    ![Call Microflow](attachments/workflow-how-to-configure/call-microflow.png)

2. Open **Call microflow** properties and click the ellipsis icon in the **Microflow** property.

3. In the **Select microflow** dialog box, select the **Assign_Desk** microflow and click **Select**. 

4. Change the **Caption** property to **Assign Desk**. 

5. If you create a microflow from the workflow, parameter is added automatically:

    ![Microflow Example](attachments/workflow-how-to-configure/microflow-example.png)

You can now add the actual desk assignment logic to the microflow, which falls outside the scope of this how-to. For more information on microflows and their properties, see [Microflows](/refguide/microflows) and [Microflow Properties](/refguide/microflow).
Now if the Manager indicates that the new employee works from home, the desk prepared by the Facilities department will be assigned to the new employee and will be shown in the system. 

Congratulations! The onboarding workflow is completed, and you can test it with different roles by running your application locally. 

## 10 Testing the Workflow {#test-workflow}

Now you can test your workflow from the perspective of different users. 

For certain user roles, there are default end-user and admin pages. 

For example, users who have tasks assigned to them (Manager, Facilities roles) will see their task inbox and dashboards pages where they can manage and monitor tasks assigned to them:

![Task Inbox](attachments/workflow-how-to-configure/task-inbox.png)

The Workflow Admin role has access to the Workflow Admin Center and can monitor all workflows, can view the progress of workflows, and change the workflow settings:

![Workflow Admin Center](attachments/workflow-how-to-configure/workflow-admin-center.png)

The Admin role is able to manage users:

![Admin Role](attachments/workflow-how-to-configure/admin-role.png)

Users who have tasks assigned to them (Manager, Facilities roles) will see their task inbox and dashboards pages where they can manage and monitor tasks assigned to them:

![Task Inbox](attachments/workflow-how-to-configure/task-inbox.png)

To test your workflow, you need to switch between different user roles. Follow the steps below:

1. In the top bar of Mendix Studio Pro, click **Run locally**.

2. After your app is deployed, click **View**.

3. In your browser, log in as an Admin user.

4. Click the user icon on the right to switch to another user role:

    ![User Icon](attachments/workflow-how-to-configure/user-icon.png)

5. Switch between different demo user roles to test the use case. Do can do the following:

    1. Start the onboarding process.
    2. Test the process: switch users, view inbox for each user, complete tasks, see how new inbox items are created for the user roles you configured at the next task in the process.
    3. Open the Workflow Admin Center.
    4. Open the Workflow Dashboard.

Great job! You have deployed your app locally and tested your workflow from the perspective of different users. You can now work on adding more functionality to your app. 

## 11 Read More

* [Adding a Workflow to an Existing App: Setting Up the Basics](/refguide/workflow-setting-up-app)