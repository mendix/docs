---
title: "Module Security"
url: /refguide/module-security/
weight: 20
aliases:
    - /refguide/module-role.html
    - /refguide/module-role
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

{{% alert color="info" %}}
For more general information on security, see [Security](/refguide/security/).
{{% /alert %}}

Within a module you can define module roles and specify security settings for pages, microflows, entities, and datasets.

## Module Role {#module-role}

A module role is a specific role you create within the module to define a set of access permissions. The permissions are contained within the module. You can assign multiple module roles to a user role under the **App Security** > **User roles** tab. For more information on module roles, [user roles](/refguide/user-roles/), and their relation, see [Security](/refguide/security/).

A module role has the following properties:

* **Name** – the name of a module role; end-users do not see the names of module roles, if they create or view user accounts, they only see the names of user roles
* **Documentation** – the documentation of a module role is there only for the convenience of Studio Pro users, it is not displayed to the end-users

    {{< figure src="/attachments/refguide/modeling/security/module-security/module-roles-tab.png" class="no-border" >}}

## Page Access {#page-access}

**Page Access** defines which pages are visible to each role. The **Page access** tab is displayed as a matrix showing pages and modules roles. You can choose to show the unused pages in the matrix or hide them by enabling/disabling the **Show unused pages** setting. 

{{< figure src="/attachments/refguide/modeling/security/module-security/page-access-tab.png" alt="page access tab" class="no-border" >}}

For each combination you can indicate whether or not the page is visible for the module role. You can also edit this information in a page using the **Visible for** property.

A page that is not visible for a specific role will not show up in navigation structures, and **Open Page** buttons leading to that page will not be rendered by default.

Page access settings do not restrict users from navigating to a page through other means, for example through a deeplink or through a button that is forced to be visible (for more information, see [Common Widget Properties](/refguide/common-widget-properties/)). If you want to ensure that specific roles cannot access parts of your data or logic, than this must be expressed through **entity access** and **microflow access** constraints.

## Microflow Access

**Microflow Access** defines which microflows can be executed by users with a certain module role. The menu bar is optimized so that it only shows microflows that the user has access to. 

The **Microflow access** tab is displayed as a matrix showing microflows and modules roles. You can choose to show the unused microflows in the matrix or hide them by enabling/disabling the **Show unused pages** setting. 

{{< figure src="/attachments/refguide/modeling/security/module-security/microflow-access-tab.png" class="no-border" >}}

For each combination you can indicate whether or not the module role has access to the microflow. You can also edit this information in a [microflow](/refguide/microflow/) using the **Allowed roles** property.

{{% alert color="info" %}}
Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.
{{% /alert %}}

## Nanoflow Access

**Nanoflow Access** defines which nanoflows can be executed by users with a certain module role. The menu bar is optimized so that it only shows nanoflows that the user has access to. 

The **Nanoflow access** tab is displayed as a matrix showing nanoflows and modules roles. You can choose to show the unused nanoflows in the matrix or hide them by enabling/disabling the **Show unused nanoflows** setting. 

{{< figure src="/attachments/refguide/modeling/security/module-security/nanoflow-access-tab.png" class="no-border" >}}

For each combination you can indicate whether or not the module role has access to the nanoflow. You can also edit this information in the [nanoflow](/refguide/nanoflow/) using the **Allowed roles** property.

## Entity Access {#entity-access}

**Entity Access** defines for each module role whether users with this role are authorized to **Create**, **Read**, **Write** and/or **Delete** objects of the entity. You can also write an XPath constraint to restrict the set of objects to which the access rule applies.

The **Entity Access** tab is displayed as a matrix showing access rules that apply to entities:

{{< figure src="/attachments/refguide/modeling/security/module-security/entity-access-tab.png" class="no-border" >}}

Each access rule in turn applies to a set of module roles. For more information, see [Access Rules](/refguide/access-rules/).

## OData/GraphQL Access 

**OData/GraphQL Access** defines for each module role whether users with this role are authorized to access entities and microflows for each OData/GraphQL service in the module.

The **OData/GraphQL Access** tab is displayed as a matrix showing published OData/GraphQL services and modules roles:

{{< figure src="/attachments/refguide/modeling/security/module-security/odata-access-tab.png" class="no-border" >}}

For each combination, you can indicate whether the module role has access to the published OData/GraphQL service. You can also edit this information in [published OData/GraphQL services](/refguide/published-odata-services/) using the **Allowed roles** property in the **Settings** tab.

## REST Access

**REST Access** defines for each module role whether users with this role are authorized to access REST resources for each REST service exposed within the module. 

The **REST Access** tab is displayed as a matrix showing published REST services and modules roles:

{{< figure src="/attachments/refguide/modeling/security/module-security/rest-access-tab.png" class="no-border" >}}

For each REST service, you can indicate whether or not the module role has access to the published REST service.

The **REST Access** tab is visible only when the service has the security set to require authentication. For more information, see [published REST services](/refguide/published-rest-services/).

## Data Set Access

**Data Set Access** shows the access which the module role has to each [dataset](/refguide/data-sets/).

| Value | Description |
| --- | --- |
| Full access | No constraint applies to the parameters for the data set and all possible range parameters are allowed. |
| Limited access | At least one constraint applies to the parameters for the data set or at least one range parameter is not allowed. |
| No access | Users with this module role have no access to the data set. |

{{% alert color="info" %}}
The constraints are defined in the parameter definitions of the data set. Whether they apply is defined in the **Data Set Access**.
The ranges are defined in the parameters of the data set. Whether values in these ranges are allowed is defined in the **Data Set Access**.
{{% /alert %}}

## Read More

* [Security](/refguide/security/)
* [User roles](/refguide/user-roles/)
