---
title: "Roles & Permissions"
url: /control-center/roles-and-permissions/
description: "Describes the Roles and Permissions page in the Mendix Control Center."
weight: 20
no_list: true
---

## Introduction

On the **Roles & Permissions** page in Control Center, you can view and manage centralized company-level project roles and permissions.

## Centralized Project Roles

All companies use centralized project roles. This means:

* Mendix Admins will be the only ones who can create or modify project roles.

* Scrum Masters and team members will only be able to view the project roles established by Mendix Admins and select the appropriate one. They will not have the ability to modify the permissions of project roles. If a custom permission set is needed, they must reach out to a Mendix Admin for assistance in creating it.

* Some roles will appear with the tag **Inherited from project** on the **Roles & Permissions** page in Control Center. A Mendix Admin can review these custom project roles, keep the useful ones, and merge any duplicates.

  {{% alert color="info" %}}
  When members of your company  [invite someone to an project](/developerportal/general/team/#inviting), they cannot select any role with the tag **Inherited from project** shown here, as these roles will not be shown to them.
  {{% /alert %}} 

### Project Roles Overview

On the **Roles & Permissions** page, you have an overview of all centralized project roles. You will see a brief summary for each role of the permissions that the role has as well as in how many projects and by how many team members they are used.

Clicking the number of projects that use the role opens up a pop-up window with a list of projects where the role is used.

From the overview page you can **Create**, **Edit**, or **Delete** a role.

### Creating a Role

To create a role, do the following:

1. At the upper-right corner of the page, click **Create Project Role**. A wizard opens to guide you through the steps to set up the new role.

2. In the wizard, configure the settings on the **Project Role Details** tab.

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-1.png" alt="Project Role Step 1" >}}

    1. Enter a role name. Every role name in your company must be unique.
    2. Optionally, add a description for the role for further reference.

3. Click **Next** and configure the settings on **Project Permissions** tab.

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-2.png" alt="Project Role Step 2" >}}

    These permissions determine what the team member is allowed to do within the context of project management.

4. Click **Next** and configure the settings on the **Non-production Environments** tab.

   {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-3.png" alt="Project Role Step 3" >}}

   Set the environment permissions for non-productive environments, such as the test or acceptance environments, as described below. These permissions are applied to the assigned team members on the [Permissions](/developerportal/deploy/environments/#permissions) page in the Cloud Portal.

   1. Set the correct access rights.
   2. For **Permission Management**, you can select **Fixed** or **Custom**. 
      * If you select **Fixed**, continue to set the permissions for this role at the bottom. The permissions you set here will be fixed for this role. They cannot be altered later on the **Permissions** page.
      * If you select **Custom**, you allow anyone with Manage Permissions rights, for example, the Technical Contact, to set the permissions per environment.

5. Click **Next** and configure the settings on the **Production Environments** tab.

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-4.png" alt="Project Role Step 4" >}}

    Set the environment permissions for production environments as described below. The permissions you set here will be fixed for this role. They cannot be altered later on the [Permissions](/developerportal/deploy/environments/#permissions) page in the Cloud Portal.

    1. Set the correct access rights.
    2. For **Permission Management**, you can select **Fixed** or **Custom**. 
        
        * If you select **Fixed**, continue to set the permissions for this role at the bottom. The permissions you set here will be fixed for this role. They cannot be altered later on the **Permissions** page.
        
        * If you select **Custom**, you allow anyone with Manage Permissions rights, for example, the Technical Contact, to set the permissions per environment.

    {{% alert color="warning" %}}Editing and saving the production environment permissions can only be done after a **multi-factor authentication** has taken place.{{% /alert %}}

### Showing Details

To show the details of a role, click **Show Details**. The **Project Role Details** pop-up window opens with detailed information about the role.

{{< figure src="/attachments/control-center/people/roles-permissions/project-role-details.png" alt="Project Role Details" >}}

{{% alert color="info" %}}
In the **Project Role Details** pop-up window, you can find the role ID that can be used in the [Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/).
{{% /alert %}}

### Editing a Role

To edit a role, do the following:

1. Click **Edit Role** for the role you want to edit.
2. Make the changes.
3. Click **Save Changes**.

Changes made to the permissions of a role are immediately applied to the team members that are assigned to the role.

To prevent concurrent changes overwriting each other, only one role can be edited at any one time.

{{% alert color="info" %}}
You cannot edit the Scrum Master role. This ensures that there is always someone in the project's team that can manage the project.
{{% /alert %}}

### Deleting a Role

To delete a role, do the following:

1. Click **Edit Role** for the role you want to delete.
2. Review the role.
3. Click **Delete Project Role**. A dialog box opens to ask for confirmation.
4. Click **Delete Project Role** to permanently delete the role.

If the role is used by a project, a replacement role must be selected. This role will be applied to all team members who are currently assigned to the role to be deleted. If the replacement role has different permissions, then these will be applied immediately.

{{% alert color="info" %}}
You cannot delete the Scrum Master role. This ensures that there is always someone in the project's team that can manage the project.
{{% /alert %}}
