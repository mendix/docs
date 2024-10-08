---
title: "Roles & Permissions"
url: /control-center/roles-and-permissions/
description: "Describes the Roles and Permissions page in the Mendix Control Center."
weight: 75
no_list: true
---

## Introduction

On the **Roles & Permissions** page, you can view and manage project roles and permissions. Additionaly, you can migrate default project-level roles to centralized company-level roles.

## Default Project Roles

Default project roles are the default [team roles](/developerportal/general/app-roles/#team-roles) assigned for every new project created in your company.

{{< figure src="/attachments/control-center/roles-permissions/roles-permissions.png"  alt="Roles & Permissions page" >}}

To create a new role, click **Create Project Role**.

To edit a role, click **Edit Role**.

To delete a role, click **Edit Role** and then **Delete Project Role**.

You can not edit or delete the **SCRUM Master** role.

## Migrating to Centralized Company-level Project Roles {#migrate-centralized-roles}

### Why Migrate?

Previously, project roles were managed at the individual project level. This allowed Scrum Masters of an project to create custom project roles within their specific project, even though Mendix Admins could create templates for project roles at the company level.

Mendix has now centralized project roles at the company level. To take advantage of this update, you just need to migrate all individual project roles to the new centralized project roles. This will enhance your ability to govern access across all Mendix projects and also enable the programmatic assignment of project roles via [the Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/).

{{% alert color="info" %}}
Mendix expects you to migrate to centralized company-level project roles by January 1, 2025.
{{% /alert %}}

### How to Migrate?

{{% alert color="warning" %}}
Migrating to the centralized company-level project roles is a permanent action. Once it is done, it cannot be reversed.
{{% /alert %}}

To migrate to centralized company-level project roles, click **Learn More** on the blue banner at the top of the page and follow the outlined steps to complete the migration.

{{< figure src="/attachments/control-center/roles-permissions/learn-more.png"  >}}

### After the Migration

The results of migrating to the centralized company-level roles will be as follows:

* Mendix Admins will be the only ones who can create or modify project roles.

* Scrum Masters and team members will only be able to view the project roles established by Mendix Admins and select the appropriate one. They will not have the ability to modify the permissions of project roles. If a custom permission set is needed, they must reach out to a Mendix Admin for assistance in creating it.

* If there were any old custom project roles before the migration, they will appear with the tag **Inherited from project** on the **Roles & Permissions** page in Control Center. Mendix Admin can review these custom project roles, keep the useful ones, and merge any duplicates.

  {{% alert color="info" %}}
  
  When members of your company  [invite someone to an project](/developerportal/general/team/#inviting), they cannot select any old custom role with the tag **Inherited from project** shown here, as these roles will not be shown to them.
  
  {{% /alert %}} 
