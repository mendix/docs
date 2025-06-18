---
title: "Roles & Permissions"
url: /control-center/roles-and-permissions/
description: "Describes the Roles and Permissions page in the Mendix Control Center."
weight: 20
no_list: true
---

## Introduction

On the **Roles & Permissions** page in Control Center, you can view and manage your company's centralized project roles and their permissions.

## Centralized Project Roles

Centralized project roles allow Mendix Admins to control access across all Mendix projects within their company.

Within the centralized role framework, Scrum Masters and team members can only view and choose from the project roles established by Mendix Admins, with no ability to change role permissions. If a custom permission set is needed, Scrum Masters and team members must reach out to a Mendix Admin for assistance.

## Project Roles Overview

The **Roles & Permissions** page provides an overview of all centralized project roles, with the following information for each role:

* A brief summary of the permissions included in the role.
* The number of projects where the role is used. Clicking the number opens a pop-up window which lists these projects.
* The number of members who are assigned the role.

  {{% alert color="info" %}}
  Some roles on this page are tagged as **Inherited from project**. A Mendix Admin can review these custom project roles, keep the useful ones, and merge any duplicates.  
  When members of your company [invite someone to a project](/developerportal/general/team/#inviting), they cannot select any role with the tag **Inherited from project**, as these roles will not be visible to them.
  {{% /alert %}} 

From the overview page, you can show role details, and create, edit, or delete a role.

## Creating a Role

Follow these steps to create a role:

1. In the upper-right corner of the page, click **Create Project Role**.    
    A wizard opens to guide you through the necessary steps.

2. Add the following details on the **Project Role Details** tab:

    1. A **Role name**. Every role name in your company must be unique.
    2. Optionally, a **Role Description** for further reference.

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-1.png" alt="Project Role Step 1" >}}

3. Click **Next**.
4. Select the desired permissions for the role on the **Project Permissions** tab. These permissions determine what the team member is allowed to do in terms of project management, and are described on the tab.

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-2.png" alt="Project Role Step 2" >}}

5. Click **Next**.
6. Select the access rights for **Non-production Environments**. These permissions dictate access to environments such as test or acceptance, and are applied to the assigned team members on the [Permissions](/developerportal/deploy/environments/#permissions-tab) page in the Cloud Portal.  

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-3.png" alt="Project Role Step 3" >}}
    
    You can choose between **No Access** and **Access**.    
    If you choose **Access**, you can refine your settings in the following sections:    
      
    * **Permission Management** - You can select **Fixed** or **Custom**. 
   
        * If you select **Fixed**, continue to set the permissions for this role in the **Set Permissions** section. 
        * If you select **Custom**, you allow anyone with **Manage Permissions** rights, such as the Technical Contact, to set permissions per environment.

    * **Set Permissions** - Choose the specific privileges you want to include in this role for non-production environments. The permissions you set here are fixed for this role. They cannot be changed later on the **Permissions** page.

7. Click **Next**.  
8. Select the access rights for **Production Environments**.

    {{% alert color="warning" %}}You need to complete multi-factor authentication before you can edit and save production environment permissions.{{% /alert %}}

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-4.png" alt="Project Role Step 4" >}}
    You can choose between **No Access** and **Access**.    
    If you choose **Access**, you can refine your settings in the following sections:

    * **Permission Management** - You can select **Fixed** or **Custom**. 

        * If you select **Fixed**, continue to set the permissions for this role in the **Set Permissions** section. 
        * If you select **Custom**, you allow anyone with **Manage Permissions** rights, such as the Technical Contact, to set permissions per environment.

    * **Set Permissions** - Choose the specific privileges you want to include in this role for non-production environments. The permissions you set here are fixed for this role. They cannot be changed later on the **Permissions** page.

## Showing Role Details

To view the details of a role, click **Show Details**. This opens the **Project Role Details** pop-up window, which contains the role name, ID, and permissions.

The **Role ID** can be used in the [Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/).

{{< figure src="/attachments/control-center/people/roles-permissions/project-role-details.png" alt="Project Role Details" >}}

## Editing a Role

Follow these steps to make changes to a role:

1. Click **Edit Role** for the role you want to edit.
2. Make the necessary changes.
3. Click **Save Changes**.

Changes made to the permissions of a role are immediately applied to the team members that are assigned that role.

To prevent concurrent changes overwriting each other, only one role can be edited at any one time.

{{% alert color="info" %}}
You cannot edit the Scrum Master role. This ensures that there is always someone in the project team that can manage the project.
{{% /alert %}}

## Deleting a Role

Follow these steps to delete a role:

1. Click **Edit Role** for the role you want to delete.
2. Review the role by clicking through each tab.
3. Click **Delete Project Role**. A dialog box is displayed, asking for confirmation.
4. Click **Delete Project Role** to permanently delete the role.

If the role is used by a project, a replacement role must be selected. The replacement is applied to all team members who are currently assigned the role you are deleting. If the replacement role has different permissions, then these are applied immediately.

{{% alert color="info" %}}
You cannot delete the Scrum Master role. This ensures that there is always someone in the project's team that can manage the project.
{{% /alert %}}
