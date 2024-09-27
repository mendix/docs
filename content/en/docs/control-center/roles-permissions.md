---
title: "Roles & Permissions"
url: /control-center/roles-and-permissions/
description: "Describes the Roles and Permissions page in the Mendix Control Center."
weight: 75
no_list: true
---

## Introduction

On the **Roles & Permissions** page, you can view and manage app roles and permissions. Additionaly, you can migrate old app-level roles to centralized company-level roles.

## Default App Roles

Default app roles are the default [team roles](/developerportal/general/app-roles/#team-roles) assigned for every new app created in your company.

{{< figure src="/attachments/control-center/roles-permissions/roles-permissions.png"  alt="Roles & Permissions page" >}}

To create a new role, click **Create Project Role**.

To edit a role, click **Edit Role**.

To delete a role, click **Edit Role** and then **Delete Project Role**.

You can not edit or delete the **SCRUM Master** role.

## Migrating to Centralized Company-level Roles {#migrate-centralized-roles}

### Why Migrate?

Previously, roles of the app team members were managed at the individual app level. This allowed Scrum Masters of an app to create custom roles within their specific app, even though Mendix Admins had the capability to create role templates at the company level.

Mendix has now centralized roles across all applications at the company level. To take advantage of this update, you just need to migrate all individual app roles to the new centralized roles. This will enhance your ability to govern access across all Mendix applications and also enable the programmatic assignment of app team roles via [the Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/).

### How to Migrate?

{{% alert color="warning" %}}
Migrating to the centralized company-level roles is a permanent action. Once it is done, it cannot be reversed.
{{% /alert %}}

To migrate to centralized company-level roles, click **Learn More** on the blue banner at the top of the page and follow the outlined steps to complete the migration.

{{< figure src="/attachments/control-center/roles-permissions/learn-more.png"  >}}

### After the Migration

The results of migrating to centralized company-level roles will be as follows:

- Mendix Admins will be the only ones who can create or modify app team roles.

- Scrum Masters and team members will only be able to view the roles established by Mendix Admins and select the appropriate one. They will not have the ability to modify role permissions. If a custom permission set is needed, they must reach out to a Mendix Admin for assistance in creating it.

- If there were any app-specific custom team roles before the migration, they will be shown on the **Roles & Permissions** page in Control Center with the tag **Inherited from project**. Mendix Admin can review these roles, keep the useful ones, and merge any duplicates.

  {{% alert color="info" %}}
  The roles with the tag **Inherited from project** will not be shown to members of your company when they [invite others to an app](/developerportal/general/team/#inviting).
  {{% /alert %}} 
