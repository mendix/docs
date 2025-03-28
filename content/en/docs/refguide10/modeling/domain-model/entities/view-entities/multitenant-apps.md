---
title: "Multitenant Applications"
url: /refguide/view-entity-multitenant-apps/
weight: 110
---

## Introduction

Using view entities in your multitenant applications ensures that users will only see data from the correct tenant they are associated with. 

## Use Case

For this purpose of this use case, the following domain model is used:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/multitenant-apps/domain-model.png" >}}

You are developing a project management tool that is used by multiple organizations. You do not want users from one organization to see projects from other organizations. To do this, you want to use a view entity that filters tenant data.

## Creating a View Entity

Create a view entity that gets the account and tenant information from the current user. To do this, follow these steps.

1. Open your domain model and add a view entity named *CurrentUserVE*.
2. Add the following query to the OQL editor:

    ```sql
    SELECT
      u.UserID as UserID,
      u.FullName as FullName,
      t.TenantID as TenantID
    FROM MultiTenantApp.AppUser u
    JOIN u/MultiTenantApp.AppUser_Account/Administration.Account a
    JOIN u/MultiTenantApp.AppUser_Tenant/MultiTenantApp.Tenant t
    WHERE a.ID = '[%CurrentUser%]'
    ```

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/multitenant-apps/current-user-ve.png" width="200" >}}

    This view entity will always contain one row that contains the information of the current user. 

3. Create another view entity named *ProjectVE*.
4. Add the following query to the OQL editor:

    ```sql
    SELECT
        p.ProjectID as ProjectID,
        t.TenantID as TenantID,
        p.Name as Name,
        p.Description as Description,
        p.StartDate as StartDate,
        p.EndDate as EndDate,
        p.Status as Status,
        p.CreatedAt as CreatedAt,
        p.UpdatedAt as UpdatedAt
    FROM MultiTenantApp.Project as p
    ```

5. Generate an overview page by right-clicking this view entity > **Generate overview pages**.
6. Run your app locally. The view entity shows all projects shown in the database. 

     {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/multitenant-apps/project-ve-grid.png" >}}

### Filter the View Entity

With these new view entities, you want to only see the projects of a specific tenant that is associated with the current user. This is done by using the CurrentUserVE as a filter. To do this, follow the steps.

1. Double-click **CurrentUserVE**.
2. In the OQL editor, add three additional lines to the end of the query:

    ```sql
    SELECT
        p.ProjectID as ProjectID,
        t.TenantID as TenantID,
        p.Name as Name,
        p.Description as Description,
        p.StartDate as StartDate,
        p.EndDate as EndDate,
        p.Status as Status,
        p.CreatedAt as CreatedAt,
        p.UpdatedAt as UpdatedAt
    FROM MultiTenantApp.Project as p
    JOIN p/MultiTenantApp.Project_Tenant/MultiTenantApp.Tenant t
    JOIN MultiTenantApp.CurrentUserVE cu on (1=1)
    WHERE t.TenantID = cu.TenantID
    ```

3. Generate an overview page by right-clicking this view entity > **Generate overview pages**.
4. Run your app locally. *ProjectVE* only shows projects of the current user's tenant.

    {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/multitenant-apps/project-ve-grid-2.png" >}}
