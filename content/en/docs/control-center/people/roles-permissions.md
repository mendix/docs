---
title: "Roles & Permissions"
url: /control-center/roles-and-permissions/
description: "Describes the Roles and Permissions page in the Mendix Control Center."
weight: 20
no_list: true
---

## Introduction

On the **Roles & Permissions** page in Control Center, you can view and manage project roles and permissions. Additionally, you can migrate default project-level roles to centralized company-level roles.

## Default Project Roles

Default project roles are the default [team roles](/developerportal/general/app-roles/#team-roles) assigned for every new project created in your company.

{{< figure src="/attachments/control-center/people/roles-permissions/roles-permissions.png"  alt="Roles & Permissions page" >}}

To create a new role, click **Create Project Role**.

To edit a role, click **Edit Role**.

To delete a role, click **Edit Role** and then **Delete Project Role**.

You can not edit or delete the **SCRUM Master** role.

## Centralized Project Roles

### Migrating to Centralized Company-level Project Roles {#migrate-centralized-roles}

#### Why Migrate?

Previously, project roles were managed at the individual project level. This allowed Scrum Masters of a project to create custom project roles within their specific project, even though Mendix Admins could create templates for project roles at the company level.

Mendix has now centralized project roles at the company level. To take advantage of this update, you just need to migrate all individual project roles to the new centralized project roles. This will enhance your ability to govern access across all Mendix projects and also enable the programmatic assignment of project roles via [the Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/).

{{% alert color="warning" %}}
Mendix expects you to migrate to centralized company-level project roles by January 26, 2025. We will auto migrate all remaining companies on January 26, 2025.
{{% /alert %}}

#### How to Migrate?

{{% alert color="warning" %}}
Migrating to the centralized company-level project roles is a permanent action. Once it is done, it cannot be reversed.
{{% /alert %}}

To migrate to centralized company-level project roles, click **Learn More** on the blue banner at the top of the page and follow the outlined steps to complete the migration.

{{< figure src="/attachments/control-center/people/roles-permissions/learn-more.png"  >}}

#### After the Migration

The results of migrating to the centralized company-level roles will be as follows:

* Mendix Admins will be the only ones who can create or modify project roles.

* Scrum Masters and team members will only be able to view the project roles established by Mendix Admins and select the appropriate one. They will not have the ability to modify the permissions of project roles. If a custom permission set is needed, they must reach out to a Mendix Admin for assistance in creating it.

* If there were any old custom project roles before the migration, they will appear with the tag **Inherited from project** on the **Roles & Permissions** page in Control Center. Mendix Admin can review these custom project roles, keep the useful ones, and merge any duplicates.

  {{% alert color="info" %}}
  When members of your company  [invite someone to an project](/developerportal/general/team/#inviting), they cannot select any old custom role with the tag **Inherited from project** shown here, as these roles will not be shown to them.
  {{% /alert %}} 

### Project Roles Overview

On the **Roles & Permission**s page, you have an overview of all centralized project roles. Per role you see a brief summary of the permissions that the role has as well as in how many projects and by how many team members they are used.

Clicking the number of projects that use the role opens up a pop-up window with a list of projects where the role is used.

From the overview page you can **Create**, **Edit**, or **Delete** a role.

### Creating a Role

To create a role, do as follows:

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

   Set the environment permissions for non-productive environments, such as the test or acceptance environments, as instructed below. These permissions are applied to the assigned team members on the [Permission](/developerportal/deploy/environments/#permissions) page in the Cloud Portal.

   1. Set the correct access rights.
   2. For **Permission Management**, you can select **Fixed** or **Custom**. 
      * If you select **Fixed**, continue to set the permissions for this role at the bottom. The permissions you set here will be fixed for this role. They cannot be altered later on the **Permissions** page.
      * If you select **Custom**, you allow anyone with Manage Permissions rights, for example, the Technical Contact, to set the permissions per environment.

5. Click **Next** and configure the settings on the **Production Environments** tab.

    {{< figure src="/attachments/control-center/people/roles-permissions/edit-project-role-step-4.png" alt="Project Role Step 4" >}}

    Set the environment permissions for productive environments as instructed below. The permissions you set here will be fixed for this role. They cannot be altered later on the [Permission](/developerportal/deploy/environments/#permissions) page in the Cloud Portal.

    1. Set the correct access rights.
    2. For **Permission Management**, you can select **Fixed** or **Custom**. 
        
        * If you select **Fixed**, continue to set the permissions for this role at the bottom. The permissions you set here will be fixed for this role. They cannot be altered later on the **Permissions** page.
        
        * If you select **Custom**, you allow anyone with Manage Permissions rights, for example, the Technical Contact, to set the permissions per environment.

    {{% alert color="warning" %}}Editing and saving the productive environment permissions can only be done after a **multi-factor authentication** has taken place.{{% /alert %}}

### Showing Details

To show the details of a role, click **Show Details**. The **Project Role Details** pop-up window opens with detailed information of the role.

{{< figure src="/attachments/control-center/people/roles-permissions/project-role-details.png" alt="Project Role Details" >}}

{{% alert color="info" %}}
In the **Project Role Details** pop-up window, you can find the role ID that can be used in the [Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/).
{{% /alert %}}

### Editing a Role

To edit a role, do as follows:

1. Click **Edit Role** for the role you want to edit.
2. Make the changes.
3. Click **Save Changes**.

Changes made to the permissions of a role are immediately applied to the team members that are assigned to the role.

To prevent concurrent changes overwriting each other, only one role can be edited at any one time.

{{% alert color="info" %}}
You cannot edit the Scrum Master role. This ensures that there is always someone in the project's team that can manage the project.
{{% /alert %}}

### Deleting a Role

To delete a role, do as follows:

1. Click **Edit Role** for the role you want to delete.
2. Review the role.
3. Click **Delete Project Role**. A dialog box opens to ask for confirmation.
4. Click **Delete Project Role** to permanently delete the role.

If the role is used by a project, a replacement role must be selected. This role will be applied to all team members who are currently assigned to the role to be deleted. If the replacement role has different permissions, then these will be applied immediately.

{{% alert color="info" %}}
You cannot delete the Scrum Master role. This ensures that there is always someone in the project's team that can manage the project.
{{% /alert %}}
