---
title: "Configure Security for a Workflow Process"
url: /howto/security/configure-workflow-security/
category: "Security"
description: "Describes how to configure a workflow in Mendix Studio Pro."
weight: 15
tags: ["studio pro", "workflow", "task", "onboarding"]
---

## 1 Introduction 

Workflow is a new visual language in Mendix Studio Pro and Mendix Studio that allows you to build extendable processes. It is fully integrated with other visual languages, such as microflow editor and page editor. 

This how-to explains how to build an employee onboarding process using the workflow editor. 

This how-to will teach you how to do the following:

* Create user roles
* Create demo users
* Configure entity access 

The how-to describes the following use case: 

You would like to build an employee onboarding process. At first, an HR specialist needs to initiate the onboarding process for a new employee. The employee's manager then steps in and select devices for the employee. The manager also needs to specify whether the new hire is working from the office or home. The Facilities department will then need to prepare a workspace. Depending on where the new hire works from (the office or home), the Facilities department will either prepare a desk or ship the devices to the employee's address. 

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Your app has the following [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module. Fore more information on how to set up Workflow Commons in an existing app, see [Adding a Workflow to an Existing App: Setting Up the Basics](/refguide/workflow-setting-up-app/). 

* Make sure your app has Atlas 3. As a result of installing Atlas 3, your app should contain the following modules that Workflow Commons depends on: Atlas_Core, Atlas_Web_Content, and DataGrid.

* Familiarize yourself with workflow terms. For more information, see [Workflows](/refguide/workflows/). 

* Make sure that the **User entity** is set to *Administration.Account* in your [App Settings](/refguide/app-settings/#workflows) > **Workflows** tab. 

* Make sure that the domain model of the module you are working in looks the following way:

    {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/domain-model.png" alt="Domain Model" >}}

* Make sure you have the following enumerations configured:

    * The PhoneModel enumeration:

        {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/enumeration-phone-model.png" >}}

    * The LaptopModel enumeration:

        {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/enumeration-laptop-model.png" >}}


## 3 Configuring User Roles

Administrator and User roles are part of your app by default. Now you need to create three app roles for a manager, Facilities, and HR and configure them correctly. 

Do the following:

1. In the App Explorer, open **App** > **Security** and set security to **Production**.

2. Open the **User roles** tab and click **New**. 

3. In the **Add User Role** dialog box, set the **Name** to **Facilities** and make sure that only MyFirstModule is selected, as you do not need to create a specific Facilities role for all modules. 

4. Click **OK**.

5. You need to assign the **User** user role to Facilities for all other modules. Double-click the newly created Facilities role.

6. In the **User Role** dialog box, click **Edit** in the **Module roles** section.

    {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/edit-module-roles.png" >}}

7. In the **Select Module Roles** dialog box, tick the User role for Administration and WorkflowCommons modules where no role is selected and click **OK**:

    {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/modules-roles.png" alt="Module Roles" >}}

8. Confirm your choice by clicking **OK**.

9. Repeat steps 2-8 to create and configure the Manager role.

10. Repeat steps 2-8 to create and configure the HR role.

11. You already have the Administrator role by default, now you need to enable this role to monitor workflows, view their progress, and manage their settings in your app. Do the following:

      1. In the **User roles** tab, double-click Administrator.

      2. In the **User Role** dialog box, click **Edit** in the **Module roles** section. 

      3. In the **Select Module Roles**, find the WorkflowCommons module and select the Administrator role:

         {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/workflow-commons-admin.png" alt="Selecting Workflow Commons Administrator"   width="450"  >}}

      4. Confirm your choice by clicking **OK**.

12. Click **OK** to save changes to security.

You have configured new app roles for Facilities, Manager, and HR, and enabled the Administrator role to monitor workflows, view their progress, and change their settings. 


## 4 Configuring Demo Users

You need to create demo users for the newly created app roles to be able to test your app later. For more information, see the [Testing Workflow](#test-workflow) section. Follow the steps below: 

1. In the App Explorer, open **App** > **Security** > the **Demo users** tab. 
1. Click **New**.
2. In the **Add Demo User** dialog box, set the **User name** to **demo_facilities**.
3. Set the same entity you selected for the **User entity** setting in  [App Settings](/refguide/app-settings/#workflows) > **Workflows** tab: set **Entity** to **Administration.Account**.
4. Assign the corresponding user role in the **User roles** section: select the **Facilities** role and click **OK**.
6. Repeat steps 2-5 to add the **demo_manager** demo user.
7. Repeat steps 2-5 to add the **demo_hr** demo user.

You have configured demo users for your app. 

## 5 Configuring Entity Access

The next step in setting up security is to configure the entity access otherwise you might run into consistency errors and the users of your app may see too much or too little information. For more information on what the entity access is, see the [Entity Access](/refguide/module-security/#entity-access) section in *Module Security*. Follow the steps below:

1. Open the domain model.

2. Double-click the **EmployeeOnboarding** entity to open its properties.

3. In the **Properties** dialog box, open the **Access rules** tab and click **New** to create a rule for the HR role:

    {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/entity-properties.png" alt="Entity Properties" >}} 

4. In the **New Access rule** dialog box, do the following:

    1. In the **Rule applies to the following modules** section, select the **HR** role.

    2. In the **Create and delete rights** section, select **Allow creating new objects**. This allows HR to start the workflow. 

    3. In the **Member read and write rights** section, click **Set all to Read**. As the HR needs only to start the workflow, but not to change any employee information, **Read** rights are sufficient for all attributes of the entity. 

        {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/access-rules-hr.png" alt="Access Rules for the HR role" >}}

    4. Click **OK** to save settings.

5. In the **Access rules** tab, click **New** again to create rule for the Manager role.

     1. In the **Rule applies to the following modules** section, select the **Manager** role.

    2. In the **Member read and write rights** section, click the drop-down list for the **FullName** attribute and select **Read**. 
    
    3. As the Manager should be able to select where the new employee is working from and devices that they need, set the **WFH**, **PhoneModel**, and **LaptopModel** to **Read,Write**.
    
    4. Set the **FirstDay** attribute to **Read**.

        {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/access-rules-manager.png" alt="Access Rules for the Manager Role" >}}

    4. Click **OK** to save settings.

7. In the **Access rules** tab, click **New** again to create rule for Facilities and User roles.

    1. In the **Rule applies to the following modules** section, select  **Facilities** and **User** roles.

    2. In the **Member read and write rights** section, click **Set all to Read**.
    
        {{< figure src="/attachments/howto/logic-business-rules/workflow-how-to-configure/access-rules-facilities-and-user.png" alt="Access Rules for the Manager Role" >}}
        
    3. Click **OK** to save settings.


8. Click **OK** in the **Properties** dialog box.

You have set up the entity access. 


## 6 Read More

* [Adding a Workflow to an Existing App: Setting Up the Basics](/refguide/workflow-setting-up-app/)