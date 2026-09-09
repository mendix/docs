---
title: "Configuring a Workflow in Studio Pro for the Employee Onboarding Process"
linktitle: "Workflow for Employee Onboarding"
url: /refguide/workflow-how-to-configure/
description: "Describes how to configure a workflow in Mendix Studio Pro."
weight: 80
aliases:
    - /howto/logic-business-rules/workflow-how-to-configure/
---

## Introduction 

Workflow is a new visual language that allows you to build extendable processes. It is fully integrated with other visual languages, such as microflow editor and page editor. 

This how-to explains how to build an employee onboarding process using the workflow editor. 

This how-to teaches you how to do the following:

* Create a workflow
* Create user tasks for different user roles
* Configure pages for the user tasks
* Restrict page access to the relevant user roles
* Create a decision in the workflow
* Use a microflow to extend logic of the workflow
* Test your workflow from the perspective of different users

The how-to describes the following use case: 

You want to build an employee onboarding process. First, an HR specialist initiates the onboarding process for a new employee. The employee's manager then steps in and selects devices for the employee. The manager also specifies whether the new hire is working from the office or from home. The Facilities department then prepares a workspace. Depending on where the new hire works from (the office or home), the Facilities department will either prepare a desk or ship the devices to the employee's address. 

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Your app includes the [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module. For more information on how to set up Workflow Commons in an existing app, see [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/).

* Make sure your app has Atlas 3. As a result of installing Atlas 3, your app should contain the following modules that Workflow Commons depends on: Atlas_Core, Atlas_Web_Content, and DataWidgets.

* Familiarize yourself with workflow terms. For more information, see [Workflows](/refguide/workflows/). 

* Make sure that the **User entity** is set to *Administration.Account* in your [App Settings](/refguide/workflow-tab/) > **Workflows** tab. 

* Make sure that the domain model of the module you are working in looks the following way:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/domain-model.png" alt="Domain Model" width="250" >}}

* Make sure you have the following enumerations configured:

    * The ENUM_PhoneModel enumeration:

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/enumeration-phone-model.png" alt="ENUM_PhoneModel enumeration with values iPhone, iPhone Pro, and Samsung" width="500" >}}

    * The ENUM_LaptopModel enumeration:

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/enumeration-laptop-model.png" alt="ENUM_LaptopModel enumeration with values Lenovo, Mac, and Dell" width="500" >}}

* Make sure you have an **EmployeesOnboarding_NewEdit** pop-up page that can be used to add a new **EmployeeOnboarding** object. For more information on how to create an entity detail page, see [Create Overview and Detail pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/)

* Make sure you have an **EmployeeOnboarding_Overview** page that looks like the following:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/employees-page.png" alt="Employees Page" class="no-border" >}}

    * Contains a **New Employee onboarding** button that is configured to create a new **EmployeeOnboarding** object via the **EmployeeOnboarding_NewEdit** pop-up page
    * Contains a list view and has the **EmployeeOnboarding** entity as the data source

## Setting Up Security 

### Configuring User Roles

Administrator and User roles are part of your app by default. Create three app roles for a manager, Facilities, and HR and configure them correctly. 

Do the following:

1. In the App Explorer, open **App** > **Security** and set security to **Production**.

2. Open the **User roles** tab and click **New**. 

3. In the **Add User Role** dialog box, set the **Name** to **Facilities** and make sure that only MyFirstModule is selected, as you do not need to create a specific Facilities role for all modules. 

4. Click **OK**.

5. Assign the **User** user role to Facilities for all other modules. Double-click the newly created Facilities role.

6. In the **User Role** dialog box, click **Edit** in the **Module roles** section.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/edit-module-roles.png" alt="User Role dialog showing Facilities role with Edit button highlighted in Module roles section" width="550" >}}

7. In the **Select Module Roles** dialog box, select the **User** role for the **Administration**, **Atlas_Core**, and **WorkflowCommons** modules where no role is selected and click **OK**:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/modules-roles.png" alt="Module Roles" width="400" >}}

8. Confirm your choice by clicking **OK**.

9. Refer to steps 2-8 to create and configure the Manager role.

10. Refer to steps 2-8 to create and configure the HR role.

11. You already have the Administrator role by default. Now you need to enable this role to monitor workflows, view their progress, and manage their settings in your app. Do the following:

    1. In the **User roles** tab, double-click Administrator.

    2. In the **User Role** dialog box, click **Edit** in the **Module roles** section. 

    3. In the **Select Module Roles**, find the WorkflowCommons module and select the Administrator role:

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/workflow-commons-admin.png" alt="Selecting Workflow Commons Administrator" width="400" >}}

    4. Confirm your choice by clicking **OK**.

12. Click **OK** to save changes to security.

You have configured new app roles for Facilities, Manager, and HR, and enabled the Administrator role to monitor workflows, view their progress, and change their settings. 

### Configuring Demo Users

Create demo users for the newly created app roles to test your app later. For more information, see the [Testing Workflow](#test-workflow) section. Follow the steps below: 

1. In the App Explorer, open **App** > **Security** > the **Demo users** tab. 
2. Click **New**.
3. In the **Add Demo User** dialog box, set the **User name** to **demo_facilities**.
4. Set the same entity you selected for the **User entity** setting in [App Settings](/refguide/workflow-tab/) > **Workflows** tab: set **Entity** to **Administration.Account**.
5. Assign the corresponding user role in the **User roles** section: select the **Facilities** role and click **OK**.
6. Repeat steps 2-5 to add the **demo_manager** demo user.
7. Repeat steps 2-5 to add the **demo_hr** demo user.

You have configured demo users for your app. 

### Configuring Entity Access

The next step in setting up security is to configure the entity access; otherwise, you might run into consistency errors, and the users of your app may see too much or too little information. For more information on what the entity access is, see the [Entity Access](/refguide/module-security/#entity-access) section in *Module Security*. Follow the steps below:

1. Open the domain model.
2. Double-click the **EmployeeOnboarding** entity to open its properties.
3. In the **Properties** dialog box, open the **Access rules** tab and click **New** to create a rule for the HR role:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/entity-properties.png" alt="Entity Properties" width="600" >}} 

4. In the **New Access rule** dialog box, do the following:

    1. In the **Rule applies to the following modules** section, select the **HR** role.
    2. In the **Access rights** section, select **Create objects** in **Entity rights**. This allows HR to create a new **EmployeeOnboarding** object.
    3. Set **Default rights for new members** to **Read, Write** to ensure the role has the necessary permissions for creating new objects.
    4. In the **Member read and write rights** section, set the access rights of **FullName** and **FirstDay** to **Read, Write** as HR needs to fill in the new employee's full name and their first working day.
    5. Set the access rights of **WFH**, **PhoneModel**, and **LaptopModel** to **Read**.

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/access-rules-hr.png" alt="Access Rules for the HR role" width="600" >}}

    6. Click **OK** to save settings.

5. In the **Access rules** tab, click **New** again to create rule for the Manager role.

    1. In the **Rule applies to the following modules** section, select the **Manager** role.
    2. In the **Member read and write rights** section, set the access right of **FullName** to **Read**. 
    3. As the Manager should be able to select where the new employee is working from and devices that they need, set the access rights of **WFH**, **PhoneModel**, and **LaptopModel** to **Read, Write**.

    4. Set the access right of **FirstDay** to **Read**.

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/access-rules-manager.png" alt="Access Rules for the Manager Role" width="600" >}}

    5. Click **OK** to save settings.

6. In the **Access rules** tab, click **New** again to create rule for the Facilities role.
    1. In the **Rule applies to the following modules** section, select **Facilities**.
    2. In the **Member read and write rights** section, click **Set all to Read**.
    3. Click **OK** to save settings.

7. In the **Access rules** tab, click **New** again to create rule for the User role.
    1. In the **Rule applies to the following modules** section, select **User**.
    2. In the **Member read and write rights** section, click **Set all to Read**.
    3. Click **OK** to save settings.

8. Click **OK** in the **Properties** dialog box.

You have set up the entity access. 

{{% alert color="info" %}}
In some cases you may want to restrict access to the entity or to some of its attributes by configuring the access rules more specifically.
{{% /alert %}}

## Creating a Workflow

To create a workflow that you will add activities to and create pages for, do the following:

1. In the App Explorer, right-click the **MyFirstModule** module and select **Add workflow** in the drop-down menu.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/add-workflow.png" alt="Add Workflow" width="350" >}}

2. In the **Add Workflow** dialog box, do the following:
    1. Type *Employee_Onboarding* as the **Name** of the workflow.
    2. In the Workflow context section, click **Select** to select an entity. The [Workflow Context parameter](/refguide/workflow-parameters/) uses this entity to carry the business data that is added during workflow execution. 
3. In the **Select Entity** dialog box, select the **EmployeeOnboarding** entity and click **Select**.

Good job! You have created a workflow and configured the Workflow Context parameter. 

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/newly-created-workflow.png" alt="Newly Created Workflow" class="no-border" >}}

## Triggering the Workflow from a Page

To start your workflow, you need to trigger it. In this use case, an HR specialist first adds a new hire by filling in their name and their first day, and then clicks a **Start Onboarding** button that triggers the workflow. 

You have an **EmployeeOnboarding_Overview** page that contains a **New Employee onboarding** button that creates a new **EmployeeOnboarding** object for a new hire, and a list view that has the **EmployeeOnboarding** entity as the data source:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/employees-page.png" alt="New Employee Page" class="no-border" >}}

The page access is restricted to the HR user role:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/page-access-hr.png" alt="Page Access" width="350" >}}

To add a button that initiates the workflow, do the following:

1. Open the **Toolbox** and search for a **Call workflow** button.
2. Drag the button into the first row of the data grid. The button will automatically appear in every row. The **Select Workflow** dialog box is displayed.
3. In the **Select Workflow** dialog box, select **Employee_Onboarding** workflow and click **Select**:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/select-workflow-dialog.png" alt="Select Workflow Dialog" width="400" >}}

4. Open the button properties, click the ellipsis icon in the **Caption** property, and set it to **Start Onboarding**.

Good job! Now when the HR specialist clicks the button, the workflow starts:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/employees-page-configured.png" alt="Employee Onboarding data grid with Start Onboarding button in each row" class="no-border" >}} 

## Selecting a Device and a Location for the New Hire {#select-device}

The manager of a new employee gets a task to specify devices for the new hire and indicate whether the new hire is working from home or in the office. For this functionality, you need to add activities to the workflow. Follow the steps below: 

1. In the App Explorer, double-click the **Employee_Onboarding** workflow to open it.

2. Navigate to the **Toolbox** pane, find a **User task** activity, and drag it into the workflow editor.

3. Select the **User task** activity and open the **Properties** pane. 

4. Set the **Caption** property to **Manager: Specify Device and Location** to easily see who this task should be assigned to.

5. To be able to differentiate this user task from other ones, set the **Name** property to **Specify_Device_and_Location**:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/specify-device-and-location-properties.png" alt="SpecifyDevice Properties" width="350" >}} 

6. Configure the user task to be assigned to the Manager role, as only managers should specify devices and location for the new employee. In the **Targeted users** section, make sure **Target** is set to **User(s)** and click the ellipsis icon in the **XPath constraint** property.

7. In the **Edit XPath Constraint** dialog box, switch to the **XPath expression** mode in the upper-right corner, type in the expression: `[System.UserRoles = '[%UserRole_Manager%]']`, and click **OK**:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/xpath-expression.png" alt="XPath Expression" width="550" >}}

8. To create a page where the manager specifies details for the new employee, click the ellipsis icon in the **Page** property.

9. In the **Select web page** dialog box, click the **New** button.

10. In the **Create web page** dialog box, you can see the templates for workflow pages. Do the following:

    1. Set the **Page name** to **SpecifyDeviceAndLocation_Workflow**.
    2. Set **Navigation layout** to **Atlas_Default (Atlas_Core)**.
    3. Select the **User Task Extended** template.
    4. Click **OK**. A new page is generated based on the template you selected. This page is exclusively for this task. When you generate the first task page also a microflow is generated that retrieves data of user tasks.

11. Make sure that only the relevant information is displayed on the **SpecifyDeviceAndLocation_Workflow** page. In the App Explorer, double-click the **SpecifyDeviceAndLocation_Workflow** page to open it.

12. By default, all attributes are added to the data view with the employee details. Leave only the attributes related to the task and restrict the manager from changing the fields that are not part of the task. For example, the name of the employee has been entered by the HR department, so the manager does not need to change it and should see this field as read-only. 

    Do the following:

    1. Select the text box for the **FullName** attribute and go to its properties.
    2. Set the **Editable** property to *Never* to make the field read-only.
    3. Delete the **First day** date picker widget as it is not relevant for this task. 
    4. Leave **WFH**, **Phone model**, and **Laptop model** radio buttons:

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/manager-form.png" alt="Form for Specifying Devices" class="no-border" >}}

13. Only the Manager role can access and interact with the **SpecifyDeviceAndLocation_Workflow** page, so restricting the access to this page is the next step. Navigate to the page properties and do the following:

     1. In the **Visible for** property, click the ellipsis icon.
     2. In the **Condition for visibility** dialog box, make sure **Show the text box** is set to **always** in the **Context** section.
     3. In the **Module roles** section, select **Show the text box for selected roles**.
     4. In the module roles list, select only **Manager** and click **OK**:

         {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/visibility-condition.png" alt="Condition for Visibility" class="no-border" >}}

Great job! You have configured the user task for the Manager role:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/workflow-with-task.png" alt="Workflow with Specify Device User Task" width="500" class="no-border" >}}

This can be also a good time to test your app: you can create an employee, start the onboarding process, and test the first task for the Manager demo user. For more information, see the [Testing the Workflow](#test-workflow) section. 

## Following Different Paths for the Hire's Location

Depending on whether the new hire is working from the office or home, there are two different processes to onboard this hire: prepare a desk in the office or send the laptop and phone to the new hire's home address. This step of the onboarding process should be done by the Facilities department.

Do the following:

1. Open the workflow editor > **Toolbox** and drag the **Decision** activity after the **Manager: Specify Device and Location** user task.
2. Decision means that the workflow path can split and follow one of the outcomes depending on the condition of the decision. For more information, see [Decision in Workflows](/refguide/decision-in-workflows/). Open the decision properties and do the following:

    1. Set the **Caption** to **WFH?**.
    2. Click the ellipsis icon in the **Condition** property.
    3. In the **Condition** dialog box, type in the expression that will split the flow into two depending on the **WFH** attribute: `$WorkflowContext/WFH`.

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/decision-properties.png" alt="Decision Properties" class="no-border" >}}

3. Since the WFH attribute is a Boolean, it has a `true` (when the new hire works from home) and a `false` (when they work from the office) outcome. These outcomes are added to the workflow automatically: 

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/decision-outcomes.png" alt="Decision Outcomes" class="no-border" >}}

4. Configure what happens in both scenarios: when the new hire works from home (true) and when the new hire works from the office (false). Open the **Toolbox**, drag a **User task** activity to the **false** path, and do the following:

    1. Name the user task **Prepare_Desk** and set its title to **Facilities: Prepare Desk** by referring to steps 3-5 of the [Selecting a Device for the New Hire](#select-device) section.

    2. Configure the task to be assigned to the Facilities role by only referring to steps 6 and 7 of the [Selecting a Device for the New Hire](#select-device) section and using the `[System.UserRoles = '[%UserRole_Facilities%]']` expression.
    3. Set a new page called **PrepareDesk_Workflow** for the **Page** property by referring to steps 8-10 of the [Selecting a Device for the New Hire](#select-device) section.

5. Make sure that only the relevant information is displayed on the **PrepareDesk_Workflow** page. In the App Explorer, double-click the **PrepareDesk_Workflow** page to open it.
6. By default, all attributes are added to the employee detail form. Make sure that the Facilities department can view the fields but not change them. Do the following: 

    1. Select the data view with the employee details and go to its properties.
    2. Set the **Editable** property to *No* to make the remaining fields in the form read-only.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/read-only-form.png" alt="Read-Only Form" class="no-border" >}}

7. To restrict access to the page to the Facilities role only, follow the step 13 of the [Selecting a Device for the New Hire](#select-device) section.
8. Create a user task for Facilities when the employee is working from home. Open the workflow editor.
9. Open the **Toolbox**, drag a **User task** activity to the **true** path, and do the following:

    1. Name the user task **Ship_Devices** and set its title to **Facilities: Ship Devices** referring to steps 3-5 of the [Selecting a Device for the New Hire](#select-device) section.
    2. Configure the task to be assigned to the Facilities role only referring to steps 6 and 7 of the [Selecting a Device for the New Hire](#select-device) section and using the `[System.UserRoles = '[%UserRole_Facilities%]']` expression. 
    3. Set a new page called **ShipDevices_Workflow** for the **Page** property it referring to steps 8-10 of the [Selecting a Device for the New Hire](#select-device) section.

10. Make sure that only relevant information is displayed on the **ShipDevices_Workflow** page and that this page can be accessed by the Facilities department only. In the App Explorer, double-click the **ShipDevices_Workflow** page to open it.
11. Repeat steps 6-7 above to make the employee detail form read-only and to restrict the page access to the Facilities role.

Great job! You have configured the decision and user tasks on whether the new hire is working from the office or from home:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/prepare-desk.png" alt="Decision with User Tasks" class="no-border" >}} 

## Extending Workflow Logic

You can extend workflow logic by calling a microflow. If the new employee works from the office, you can show in the system that the desk prepared by the Facilities department is assigned to this new employee. This way, HR and Management will see where the new colleague is sitting in the office. 

To call a microflow in your workflow, do the following:

1. Open the workflow editor > **Toolbox** and drag the **Call microflow** activity after the **Facilities: Prepare Desk** user task:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/call-microflow.png" alt="Call Microflow" class="no-border" >}}

2. Open **Call microflow** properties and click the ellipsis icon in the **Microflow** property.
3. In the **Select microflow** dialog box, click **New**.
4. In the **Create Microflow** dialog box, set the **Name** to **ACT_EmployeeOnboarding_Assign_Desk** and click **OK**.
5. Change the **Caption** property to **Assign Desk**. 
6. The created microflow automatically receives the workflow context parameter:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/microflow-example.png" alt="Microflow Example" class="no-border" >}}

You can now add the actual desk assignment logic to the microflow, which falls outside the scope of this how-to. For more information on microflows and their properties, see [Microflows](/refguide/microflows/) and [Microflow Properties](/refguide/microflow/).
Now if the manager indicates that the new employee works from the office, the desk prepared by the Facilities department will be assigned to the new employee and will be shown in the system. 

Congratulations! The onboarding workflow is completed, and you can test it with different roles by running your application locally. 

## Configuring the Navigation Menu

Before testing the workflow, set up the navigation menu so that users can access their task inboxes and administrators can manage workflows. Follow the steps below:

1. In the App Explorer, open **App** > **Navigation**.
2. Make sure you are on the **Responsive** profile tab.
3. In the **Menu** section, click **New Item** to create a **My Tasks** group:

    1. Set **Caption** to **My Tasks**.
    2. Set **Icon** to **Atlas_Core.Atlas.task-list-multiple**.
    3. Leave **On click** set to **Do nothing** (this is a parent item).
    4. Click **OK**.

4. Select the **My Tasks** item and click **New subitem** to add child items:

    1. Add **Task Inbox**: set **Caption** to **Task Inbox**, **Icon** to **Atlas_Core.Atlas.notes-checklist**, and **On click** to **Show a page**. In the **Select web page** dialog box, navigate to **WorkflowCommons** > **UseMe** > **Pages** and select **TaskInbox**. Click **Select**, then click **OK**:

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/select-page-navigation.png" alt="Select Web Page" width="400" >}}

    2. Add **Task Dashboard**: set **Caption** to **Task Dashboard**, **Icon** to **Atlas_Core.Atlas.analytics-bars**, and **On click** to **Show a page** > **WorkflowCommons.TaskDashboard**. Click **OK**.
    3. Add **My workflows**: set **Caption** to **My workflows**, **Icon** to **Atlas_Core.Atlas.controls-play**, and **On click** to **Show a page** > **WorkflowCommons.MyInitiatedWorkflows**. Click **OK**.

5. Click on the root level of the menu and click **New Item** to create an **On Boarding** group:

    1. Set **Caption** to **On Boarding**.
    2. Set **Icon** to **Atlas_Core.Atlas.layout-list**.
    3. Leave **On click** set to **Do nothing**.
    4. Click **OK**.

6. Select the **On Boarding** item and click **New subitem**:

    1. Set **Caption** to **Employee Onboarding**.
    2. Set **Icon** to **Atlas_Core.Atlas.add**.
    3. Set **On click** to **Show a page** > **MyFirstModule.EmployeeOnboarding_Overview**.
    4. Click **OK**.

7. Click on the root level of the menu and click **New Item** to create a **Workflow Admin** group:

    1. Set **Caption** to **Workflow Admin**.
    2. Set **Icon** to **Atlas_Core.Atlas.cog**.
    3. Leave **On click** set to **Do nothing**.
    4. Click **OK**.

8. Select the **Workflow Admin** item and click **New subitem** to add child items:

    1. Add **Admin Center**: set **Caption** to **Admin Center**, **Icon** to **Atlas_Core.Atlas.cog-shield**, and **On click** to **Show a page** > **WorkflowCommons.WorkflowAdminCenter**. Click **OK**.
    2. Add **Workflow Groups**: set **Caption** to **Workflow Groups**, **Icon** to **Atlas_Core.Atlas.user-neutral-group**, and **On click** to **Show a page** > **WorkflowCommons.WorkflowGroup_Overview**. Click **OK**.
    3. Add **Conflict Resolution**: set **Caption** to **Conflict Resolution**, **Icon** to **Atlas_Core.Atlas.alert-triangle**, and **On click** to **Show a page** > **WorkflowCommons.ConflictResolution**. Click **OK**.

The resulting menu structure should look like the following:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/menu-structure.png" alt="Menu Structure" class="no-border" >}}

{{% alert color="info" %}}
Page visibility in the navigation is determined by how your app roles map to module roles in WorkflowCommons. The Administrator and Manager roles are mapped to the **Administrator** role in WorkflowCommons, so they can access the **Workflow Admin** pages. The HR, Facilities, and User roles are mapped to the **User** role in WorkflowCommons, so the Workflow Admin pages are not available to them.
{{% /alert %}}

## Testing the Workflow {#test-workflow}

Now you can test your workflow from the perspective of different users. To test your workflow, you need to switch between different user roles. Follow the steps below:

1. In the top bar of Mendix Studio Pro, click **Run Locally** ({{% icon name="controls-play" %}}).
2. After your app is deployed, click **View App**:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/view-app.png" alt="View App Button" class="no-border" >}}

    The button opens your browser with the application login page. Log in with the default credentials: username **MxAdmin** and password **1**.

3. Click the user icon on the right to switch to another user role:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/user-icon.png" alt="User Icon" width="500" class="no-border" >}}

4. Switch between different demo user roles to test the use case. You can do the following:

    1. Start the onboarding process: select the HR demo user, add a new employee, and then click **Start Onboarding**.

        {{% alert color="info" %}}HR can start the onboarding process for the same employee more than once, which is acceptable for testing purposes but not ideal in reality. A good solution is to add an OnboardingStatus attribute to the **EmployeeOnboarding** entity and configure the **Start Onboarding** button to trigger a microflow that updates the OnboardingStatus and then starts the workflow. Also, add conditional visibility for the **Start Onboarding** button so that it is not visible anymore after the OnboardingStatus is updated after the HR presses the button. For information on how to add conditional visibility for a button, see the [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*. This solution, however, falls outside of the scope of the current how-to. {{% /alert %}}

    2. Test the process: switch users, view the inbox for each user, complete tasks, and see how new inbox items are created for the user roles you configured at the next task in the process. 
    3. Open the Workflow Admin Center.
    4. Open the Workflow Dashboard.

For certain user roles, there are specific pages available. The Manager and HR roles have access to the **New Employee onboarding** button to add new employees. After adding an employee, they can start the onboarding workflow by clicking **Start Onboarding** in the corresponding row:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/manager-role.png" alt="Manager Role" class="no-border" >}}

Users who have tasks assigned to them (Manager and Facilities roles) see their task inbox where they can manage and complete tasks assigned to them:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/task-inbox.png" alt="Task Inbox" class="no-border" >}}

The Admin role has access to the Workflow Admin Center, which serves as a hub for workflow management, task assignments, workflow groups, and conflict resolution:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/admin-center.png" alt="Workflow Admin Center" class="no-border" >}}

The Workflow Dashboard is the main monitoring page where administrators can track workflow and task progress, view statistics on completed tasks, and identify overdue items:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-configure/workflow-admin-center.png" alt="Workflow Dashboard" class="no-border" >}}

Great job! You have deployed your app locally and tested your workflow from the perspective of different users. You can now work on adding more functionality to your app. 

## Read More

* [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/)
