---
title: "Module Security"
url: /refguide8/module-security/
weight: 20
tags: ["studio pro", "module security", "security", "module"]
aliases:
    - /refguide8/module-role.html
    - /refguide8/module-role
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/module-security.pdf).
{{% /alert %}}

## 1 Introduction

{{% alert color="info" %}}
For more general information on security, see [Security](/refguide8/security/).
{{% /alert %}}

Within a module you can define module roles and specify security settings for pages, microflows, entities, and datasets.

## 2 Module Role {#module-role}

A module role defines a set of access permissions that you can assign to a user. For more information on module roles, [user roles](/refguide8/user-roles/), and their relation, see [Security](/refguide8/security/).

A module role has the following properties:

* **Name** – the name of a module role; end-users do not see the names of module roles, if they create or view user accounts, they only see the names of user roles
*  **Documentation** – the documentation of a module role is there only for the convenience of Studio Pro users, it is not displayed to the end-users

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/module-security/module-roles-tab.png" >}}

## 2 Page Access

**Page Access** defines which pages are visible to each role. The **Page access** tab is displayed as a matrix showing pages and modules roles.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/module-security/page-access-tab.png" alt="page access tab" >}}

For each combination you can indicate whether or not the page is visible for the module role. You can also edit this information in a page using the **Visible for** property.

A page that is not visible for a specific role will not show up in navigation structures, and **Open Page** buttons leading to that page will not be rendered by default.

Page access settings do not restrict users from navigating to a page through other means, for example through a deeplink or through a button that is forced to be visible (for more information, see [Common Widget Properties](/refguide8/common-widget-properties/)). If you want to ensure that specific roles cannot access parts of your data or logic, than this must be expressed through **entity access** and **microflow access** constraints.

## 3 Microflow Access

**Microflow Access** defines which microflows can be executed by users with a certain module role. The menu bar is optimized so that it only shows pages and microflows that the user has access to.

The **Microflow access** tab is displayed as a matrix showing microflows and modules roles. 

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/module-security/microflow-access-tab.png" >}}

For each combination you can indicate whether or not the module role has access to the microflow. You can also edit this information in a [microflow](/refguide8/microflow/) using the **Allowed roles** property.

{{% alert color="info" %}}
Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.
{{% /alert %}}

## 4 Entity Access {#entity-access}

**Entity Access** defines for each module role whether users with this role are authorized to **Create**, **Read**, **Write** and/or **Delete** objects of the entity. You can also write an XPath constraint to restrict the set of objects to which the access rule applies.

The **Entity Access** tab is displayed as a matrix showing access rules that apply to entities:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/module-security/entity-access-tab.png" >}}

Each access rule in turn applies to a set of module roles. For more information, see [Access Rules](/refguide8/access-rules/).

## 5 OData Access 

**OData Access** defines for each module role whether users with this role are authorized to access OData resources for each OData service exposed within the module.

The **OData Access** tab is displayed as a matrix showing published OData services and modules roles:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/module-security/odata-access-tab.png" >}}

For each combination, you can indicate whether the module role has access to the published OData service. You can also edit this information in [published OData services](/refguide8/published-odata-services/) using the **Allowed roles** property in the **Settings** tab.

## 6 REST Access

**REST Access** defines for each module role whether users with this role are authorized to access REST resources for each REST service exposed within the module. 

The **REST Access** tab is displayed as a matrix showing published REST services and modules roles:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/module-security/rest-access-tab.png" >}}

For each REST service, you can indicate whether or not the module role has access to the published REST service.

The **REST Access** tab is visible only when the service has the security set to require authentication. For more information, see [published REST services](/refguide8/published-rest-services/).

## 7 Data Set Access

**Data Set Access** shows the access which the module role has to each [dataset](/refguide8/data-sets/).

| Value | Description |
| --- | --- |
| Full access | No constraint applies to the parameters for the data set and all possible range parameters are allowed. |
| Limited access | At least one constraint applies to the parameters for the data set or at least one range parameter is not allowed. |
| No access | Users with this module role have no access to the data set. |

{{% alert color="info" %}}
The constraints are defined in the parameter definitions of the data set. Whether they apply is defined in the **Data Set Access**.
The ranges are defined in the parameters of the data set. Whether values in these ranges are allowed is defined in the **Data Set Access**.
{{% /alert %}}

## 8 Read More

* [Security](/refguide8/security/)
* [User roles](/refguide8/user-roles/)
