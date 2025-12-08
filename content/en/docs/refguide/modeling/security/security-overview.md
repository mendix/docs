---
title: "Security Overview"
url: /refguide/security-overview/
weight: 20
---

## Introduction

The **Security Overview** page provides you with an overview of your app's security. 

{{< figure src="/attachments/refguide/modeling/security/security-overview/entity-security-overview.png" class="no-border" >}}

This overview can be used to review the security of your app. You can also export information from the page to an Excel file, for more details, see the [Export To Excel](#export-excel) section below.

## Viewing the Security Overview

The **Security Overview** summarizes the app's security for a selected user role. To view the information, perform the following steps:

1. Access the **Security Overview** page by opening the **App** menu, and then clicking **Show Security Overview (Beta)**.
2. In the **Show access for user role** list, select the user role for which you want to view the security summary.  (The anonymous and administrator user roles are marked with  `(Anonymous)` and `(Administrator)` respectively).
3. Optionally, select a module in the sidebar of the overview.
    Selecting a module filters the content in the **Entity access**, **Page access**, **Microflow access**, and **Nanoflow access** tabs. The list of modules does not show the System module or any protected modules.

## Security Overview Contents

The **Security Overview** page has the following tabs:

* [Entity access](#entity-access)
* [Page access](#page-access)
* [Microflow access](#microflow-access)
* [Nanoflow access](#nanoflow-access)

### Entity Access {#entity-access}

The **Entity Access** tab shows a summarized view of the permissions that are applied during runtime for all entities in the selected module for each user role. This helps developers and reviewers easily understand what an end user can or cannot access within the application.

The **Combined access rules** column aggregates all access rules applicable to the selected user role, reflecting the runtime behaviour. This means that if any access rule grants access to that user, the user will have access. For example, if one access rule grants **Read and Create** access and another access rule grants **ReadWrite** access, the combined access is **ReadWrite** and **Create**.
Multiple columns are shown for entities with XPath constraints. Access rules with the same XPath constraint are also combined here, so each XPath in this list is unique. 

When the selected user role has no access to an attribute or an association, it is not shown in the table. If the selected user role has no access to an entity at all, the entity is not shown in the **Security Overview**.

### Page Access {#page-access}

The **Page Access** tab lists the names of pages within the selected module that are visible to the selected user role.

### Microflow Access {#microflow-access}

The **Microflow Access** tab lists the names of microflows within the selected module that can be executed by the selected user role.

### Nanoflow Access {#nanoflow-access}

The **Nanoflow Access** tab lists the names of nanoflows within the selected module that can be executed by the selected user role.

## Export To Excel {#export-excel}

To export the **Security Overview**, click the **Export to Excel** button. This generates an Excel file in the selected directory, which contains the following three sheets:

1. Members Access -- This sheet contains the members access rules data, including the following:
    1. User Role.
    2. Module: The module containing the entity.
    3. Entity: The name of the entity.
    4. Member: The attribute or association name.
    5. Kind: Specifies whether the member is an association or an attribute.
    6. Type: The type of the member.
    7. XPath: The XPath constraint.
    8. XPath Caption:  The XPath constraint caption, when set.
    9. Access: The access level (None, Read or ReadWrite).
    10. Anonymous role: Specifies whether this access is connected to an anonymous user role.
    11. Administrator role: Specifies whether this access is connected to the administrator user role.

2. Entity Access -- This sheet contains the entity access rules data, including the following:
    1. User Role.
    2. Module: The module containing the entity.
    3. Entity: The name of the entity.
    4. Can create:  Specifies wether create access has been granted
    5. Can delete:  Specifies wether delete access has been granted
    6. XPath: The XPath constraint.
    7. XPath Caption:  The XPath constraint caption, when set.
    8. Access: The access level (None, Read or ReadWrite).
    9. Anonymous role: Specifies whether this access is connected to an anonymous user role.
3. Document Access -- This sheet includes the accessible pages, microflows and nanoflows, including the following:
    1. Document type -- The type of the accessible document (page, microflow, nanoflow).
    2. User Role.
    3. Module: The module containing the the page, nanoflow, or microflow.
    4. Document: The name of the page, nanoflow, or microflow.
    5. Anonymous role: Specifies whether this access is connected to an anonymous user role.
    6. Administrator role: Specifies whether this access is connected to the administrator user role.
4. Module Roles -- this sheet provides the mappings between user roles and module roles, including the following:
    1. User Role.
    2. Module.
    3. Module Role.
    4. Anonymous role: Specifies whether this user roles is an anonymous user role.
    5. Administrator role: Specifies whether this user role is the administrator user role.

## CLI export

The security overview can be exported to a JSON or xlsx file with the `mx` command line tool. See the [export-security-overview](/refguide/mx-command-line-tool/security/#export-security-overview) command.

## Read More

* [User Roles](/refguide/user-roles/)
* [Access Rules](/refguide/access-rules/)
