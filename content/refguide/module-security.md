---
title: "Module Security"
parent: "security"
menu_order: 20
tags: ["studio pro", "module security", "security", "module"]
---

## 1 Introduction

{{% alert type="info" %}}

For more general information on security, see [Security](security).

{{% /alert %}}

Within a module you can define module roles and specify security settings for pages, microflows, entities, and datasets.

## 2 Module Role {#module-role}

A module role defines a set of access permissions that you can assign to a user. For more information on module roles, [user roles](user-roles), and their relation, see [Security](security).

A module role has the following properties:

* **Name** – the name of a module role. End-users do not see the names of module roles, if they create or view user accounts, they only see the names of user roles.

*  **Documentation** – the documentation of a module role is there only for the convenience of Studio Pro users, it is not displayed to the end-users.

    ![](attachments/module-security/module-roles-tab.png)

## 2 Page Access

**Page Access** defines which pages are visible to each role. The **Page access** tab is displayed as a matrix showing pages and modules roles.

![page access tab](attachments/module-security/page-access-tab.png)

For each combination you can indicate whether or not the page is visible for the module role. You can also edit this information in a page using the **Visible for** property.

A page that is not visible for a specific role will not show up in navigation structures, and **Open Page** buttons leading to that page will not be rendered by default.

Page access settings do not restrict users from navigating to a page through other means, for example through a deeplink or through a button that is forced to be visible (for more information, see [Common Widget Properties](common-widget-properties)). If you want to ensure that specific roles cannot access parts of your data or logic, than this must be expressed through **entity access** and **microflow access** constraints.

## 3 Microflow Access

**Microflow Access** defines which microflows can be executed by users with a certain module role. The menu bar is optimized so that it only shows pages and microflows that the user has access to.

The **Microflow access** tab is displayed as a matrix showing microflows and modules roles. 

![](attachments/module-security/microflow-access-tab.png)

For each combination you can indicate whether or not the module role has access to the microflow. You can also edit this information in a [microflow](microflow) using the **Allowed roles** property.

{{% alert type="info" %}}

Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.

{{% /alert %}}

## 4 Entity Access

**Entity Access** defines for each module role whether users with this role are authorized to **Create**, **Read**, **Write** and/or **Delete** objects of the entity. You can also write an XPath constraint to restrict the set of objects to which the access rule applies.

The **Entity Access** tab is displayed as a matrix showing access rules that apply to entities:

![](attachments/module-security/entity-access-tab.png)

Each access rule in turn applies to a set of module roles. For more information, see [Access Rules](access-rules).

## 5 OData Access 

**OData Access** defines for each module role whether users with this role are authorized to access OData resources for each OData service exposed within the module.

The **OData Access** tab is displayed as a matrix showing published OData services and modules roles:

![](attachments/module-security/odata-access-tab.png)

For each combination, you can indicate whether the module role has access to the published OData service. You can also edit this information in [published OData services](published-odata-services) using the **Allowed roles** property in the **Settings** tab.

## 6 REST Access

**REST Access** defines for each module role whether users with this role are authorized to access REST resources for each REST service exposed within the module. 

The **REST Access** tab is displayed as a matrix showing published REST services and modules roles:

![](attachments/module-security/rest-access-tab.png)

For each REST service, you can indicate whether or not the module role has access to the published REST service.

The **REST Access** tab is visible only when the service has the security set to require authentication. For more information, see [published REST services](published-rest-services).

## 7 Data Set Access

**Data Set Access** shows the access which the module role has to each [dataset](data-sets).

| Value | Description |
| --- | --- |
| Full access | No constraint applies to the parameters for the data set and all possible range parameters are allowed. |
| Limited access | At least one constraint applies to the parameters for the data set or at least one range parameter is not allowed. |
| No access | Users with this module role have no access to the data set. |

{{% alert type="info" %}}

The constraints are defined in the parameter definitions of the data set. Whether they apply is defined in the **Data Set Access**.
The ranges are defined in the parameters of the data set. Whether values in these ranges are allowed is defined in the **Data Set Access**.

{{% /alert %}}

## 8 Read More

* [Security](security)
* [User roles](user-roles)
