---
title: "Security Overview"
url: /refguide/security-overview/
weight: 20
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

The **Security Overview** page provides you with an overview of your app's security. This overview can be used to review the security of your app. 

## Viewing the Security Overview

The **Security Overview** summarizes the app's security for a selected user role. To view the information, perform the following steps:

1. Access the **Security Overview** page by opening the **App** menu, and then clicking **Show Security Overview (Beta)**.
2. In the **Show access for user role** list, select the user role for which you want to view the security summary.
3. Optionally, select a module in the sidebar of the overview.

    Selecting a module filters the content in the **Entity access**, **Page access**, **Microflow access**, and **Nanoflow access** tabs. The list of modules does not show the System module or any protected modules.

## Security Overview Contents

The **Security Overview** page has the following tabs:

* [Entity access](#entity-access)
* **Page access**
* **Microflow access**
* **Nanoflow access**

{{% alert color="info" %}}
In the beta release of the **Security Overview** page, only the **Entity access** tab is available. The other tabs will be available in future versions of Studio Pro.
{{% /alert %}}

{{< figure src="/attachments/refguide/modeling/security/app-security/user-roles/security-overview.png" class="no-border" >}}

### Entity Access {#entity-access}

The **Entity Access** tab shows a summarized view of the permissions that are applied during runtime for all entities in the selected module for each user role. This helps developers and reviewers easily understand what an end user can or cannot access within the application.

The **Combined access rules** column aggregates all access rules applicable to the selected user role, reflecting the runtime behaviour. This means that if any access rule grants access to that user, the user will have access. For example, if one access rule grants **Read and Create** access and another access rule grants **ReadWrite** access, the combined access is **ReadWrite** and **Create**.
Multiple columns are shown for entities with XPath constraints. Access rules with the same XPath constraint are also combined here, so each XPath in this list is unique. 

When the selected user role has no access to an attribute or an association, it is not shown in the table. If the selected user role has no access to an entity at all, the entity is not shown in the **Security Overview**.

## Read More

* [User Roles](/refguide/user-roles/)
* [Access Rules](/refguide/access-rules/).
