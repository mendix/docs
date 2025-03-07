---
title: "Access Rules"
url: /refguide/access-rules/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The access rules of an entity define what an end-user is allowed to do with objects of the entity. You can allow end-users with specific roles to do one or more of the following things:

* create objects
* delete objects
* view member values
* edit member values

A member is an attribute or an association of an entity.

You can also limit the set of objects available for viewing, editing, and removing using an [XPath constraint](/refguide/xpath-constraints/).

Every entity can have multiple access rules which are applicable to one or more [module roles](/refguide/module-security/#module-role). Each access rule grants certain access rights to those roles. Rules are additive, which means that if multiple access rules apply to the same module role, all access rights of those rules are combined for that module role.

{{% alert color="info" %}}
Access rules are not inherited from an entity's [generalization](/refguide/entities/#generalization), because the security for every entity is specified explicitly. So when adding an access rule to an entity, always make sure that all required XPath constraints are applied. If the entity has a generalization with access rules defining XPath constraints, these will not apply to its specializations and will therefore not limit its visibility.
{{% /alert %}}

{{% alert color="warning" %}}
The **System.User** entity has inbuilt access rules where access is given to its attributes if the end-user can manage the role of that User object. Specializations of **System.User** (such as **Administration.Account**) cannot change this access with their own access rules.
{{% /alert %}}

## Defining Access Rules

{{% alert color="info" %}}
A new entity access rule editor was released in Studio Pro version 10.6.0, as a [beta](/releasenotes/beta-features/). You can enable this new editor in the [Preferences Dialog](/refguide/preferences-dialog/#new-features).

For guidance on using the new editor, see [Defining Access Rules Using the New Editor](#new-editor), below.
{{% /alert %}}

There are two ways to view access rules:

* Via entity's **Properties** > **Access rules**: 

    {{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rules-section.png" alt="Access Rules for Entities" width="250px" class="no-border" >}}

* Via the **Access rules** tab of the entity dialog box:

    {{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rules-tab.png" alt="Access Rules for Entities" width="550px" class="no-border" >}}

{{% alert color="info" %}}
The **Access rules** section is visible only if the [App Security](/refguide/app-security/) is set to **Production**.
{{% /alert %}}

An example of the access rules properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rules-properties.png" alt="Access Rules for Entities" width="700px" class="no-border" >}}

Access rules properties consist of the following sections:

* [Documentation](#documentation)
* [Module Roles](#module-roles)
* [Access rights](#access-rights)
* [XPath constraint](#xpath-constraint)

### Documentation Section {#documentation}

In **Documentation**, you can describe the intention of the access rule. This helps to keep access rules comprehensible, especially in the case of non-trivial XPath constraints.

### Rule Applies to the Following Module Roles Section {#module-roles}

{{% alert color="info" %}}
To apply an access rule to an entity, you need to have at least one of the following Access rights selected:

* Allow creating new objects
* Allow deleting existing objects
* An Entity Member (attribute or association) with `Read` or `Read, Write` rights
{{% /alert %}}

#### Roles

All module roles are listed, and those to which this access rule applies are checked. All end-users that have at least one of the checked module roles get the access rights that the rule defines.

#### Select / Deselect All

You can easily select, or deselect, all module roles using this checkbox.

### Access Rights {#access-rights}

The **Access rights** tab allows you to assign rights to end-users with the selected module roles.

#### Create and Delete Rights Section

##### Allow Creating New Objects

If **Allow creating new objects** is checked, end-users are allowed to create new objects of this entity. This is not restricted by any configured XPath constraints.

##### Allow Deleting Existing Objects

If **Allow deleting existing objects** is checked, end-users are allowed to delete existing objects of this entity.

The set of objects that can be deleted can be limited by using an [XPath constraint](#xpath-constraint).

#### Member Read and Write Rights Section {#member-access}

**Member read and write rights** define the access rights for every member ([attribute](/refguide/attributes/) or [association](/refguide/associations/)) of the entity. These access rights indicate whether end-users are allowed to view and/or edit the member's value. The set of objects to which these rights apply can be limited by using an [XPath constraint](#xpath-constraint).

| Value | Description |
| --- | --- |
| - | End-users are not allowed to view or edit the value of the member. |
| Read | End-users are allowed to view the value of this member, but cannot edit it. |
| Read, Write | End-users are allowed to view and edit the value of this member. |

{{% alert color="info" %}}
You cannot set *Write* access to attributes which are calculated. This includes both attributes where the attribute value is set to **Calculated** and attributes of type *Autonumber*.
{{% /alert %}}

**Default rights for new members** specifies the rights which are applied to new attributes or associations of this entity.

**Set all to** allows you to quickly set all the access rights for members to **None**, **Read**, or **Read, Write**.

For example, a customer is allowed to view the discount, but is not allowed to edit it. The access rights for the discount attribute are **Read**.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rule-discount-read.png" class="no-border" >}}

See [Attribute Changes and Security Constraints](#attribute-changes), below, for important considerations about giving access to attributes.

#### XPath Constraint {#xpath-constraint}

An [XPath constraint](/refguide/xpath-constraints/) can be used to constrain the set of objects to which the access rule applies. If the constraint rule is true, the rule applies to that object. If the XPath constraint is empty, the rule applies to all objects of the entity.

Click **Edit…** to edit the XPath constraint.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rule-xpath-tab.png" width="450px" class="no-border" >}}

{{% alert color="warning" %}}
XPath constraints can only be applied to persistable entities as they are applied by the database. Defining XPath constraints for non-persistable entities results in consistency errors.
{{% /alert %}}

There are two constraints that can be appended easily with a single button click. 

##### Owner

The **Owner** button adds an XPath constraint so the access rule is only applied if the object owner is the current end-user.

```java
[System.owner='[%CurrentUser%]']
```

This constraint is only valid when the [Store 'owner'](/refguide/entities/#store-owner) checkbox in the **System members** section of the entity properties is checked.

##### Path to User

The **Path to user...** button adds an XPath constraint so the access rule is only applied when a User object which is associated (directly or indirectly) with the current object is the current end-user. When you click **Path to user...**, you can select a path to an associated entity that is either a `System.User` or a specialization of `System.User`. This is then converted into an XPath constraint for the access rule.

For example:

1. Assume that the **Customer** entity is a specialization of the **User** entity. The **Order** entity is associated with the **Customer** entity via the **Order_Customer** association.
2. Assume that a logged-in customer is only allowed to view their orders, but is not allowed to view the orders of other customers.

The XPath constraint can be constructed easily using the **Path to user...** button by selecting the **Customer** entity in the **Order** entity access rule. The created rule will look like this:

```xpath
[Module.Order_Customer = '[%CurrentUser%]']
```

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rule-order-xpath.png" width="1000px" class="no-border" >}}

Because of this XPath constraint, access defined in the **Access rights** tab is only applied to orders for which the customer is the current end-user.

## Access Rule Evaluation

Access rules are defined as part of application development. This section describes the effects access rules have at runtime, under the assumption that the **App Security** is set to **Production**.

Access rules are abstract descriptions of access rights. To apply them they need to be evaluated. Given an end-user with certain user roles and the state of the database it can be determined if an access rule applies. The Mendix Runtime stores the result of access rule evaluations in memory. In general, this evaluation happens on retrieval of objects from the database. The results will stay valid for the lifetime of the object, which is usually the request. Access rules are evaluated differently depending on the object state. More details about their evaluation when accessed from and end-user session are given below.

### Attribute Changes and Security Constraints{#attribute-changes}

If an end-user cannot view the value of an attribute because of security constraints, that attribute will never be sent to the Mendix Client.

{{% alert color="warning" %}}
Because Mendix is stateless, this can lead to unexpected results (for example, loss of changes) if changes to the attribute in a microflow are not committed immediately.
{{% /alert %}}

See [Basic CRUD Communication Pattern](/refguide/communication-patterns/#crud) in *Communication Patterns in the Mendix Runtime* for more information on how data is passed between the Runtime Server and the Mendix Client and what cases may lead to a loss of changes.

### New Objects

When a new object is created, or when a new object is sent to the runtime server as part of a request, all XPath constraints are assumed to evaluate as `true`. This evaluation result is stored in memory and valid for the lifetime of the request. Committing the object does *not* lead to access rules or XPath rules being re-evaluated.

### Objects Stored in the Database

When a persistable object that has been committed before is passed to the runtime server, the access rules are evaluated based on the current state of the object in the database. More precisely, when passing an object, only the 'changes' on the object and an 'object id' are sent. A full object is then reconstructed in two steps. Firstly, the object is retrieved from the database based on its id. At that time the access rules are evaluated based on the values retrieved from the database. Secondly, changes are applied to the object.

As for new objects the result of this access rule evaluation is stored in memory and not changed for the lifetime of the object or request. In particular, changes to attributes or committing the object does not cause re-evaluation of access rules.

### Non-Persistable Objects

Non-persistable objects cannot have XPath constraints.

## Defining Access Rules Using the New Editor {#new-editor}

{{% alert color="warning" %}}
The new access rule editor was introduced in Studio Pro version 10.6.0 as a beta and will be made generally available in Studio Pro version 10.20.0. For more information on beta features, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

{{% alert color="info" %}}
In Studio Pro version 10.6.0 and above, you will need to enable the new editor via the option in [Preferences](/refguide/preferences-dialog/#new-features). 
{{% /alert %}}

{{% alert color="info" %}}
In preparation for making the new access rule editor generally available, the features and interface were modified in Studio Pro version 10.17.0. The description below describes that version of the interface and does not fully describe the previous beta interface (Studio Pro versions 10.6.0 through 10.16.0).
{{% /alert %}}

{{% alert color="info" %}}
For Studio Pro versions 10.6.0 through 10.16.0, the new access rule editor worked with normalized access rules. A normalized access rule is an access rule that has exactly one module role attached to it. See [Access Rule Normalization](#normalization), below, for the implications when you switch to the new editor for those versions.
{{% /alert %}}

### Editor Layout

The access rules editor displays each access rule belonging to the entity as an individual column. The header shows the modules role(s) the access rules apply to. When the module role name is long or there are multiple roles, the label is clipped. Hover over the header to show the full module role(s).

When there are no access rules yet, they can be added by clicking **New**. 

Select an access rule by clicking on the column. When an access rule is selected, it can be edited, duplicated or deleted using the respective buttons. You can also edit an access rule by double-clicking it.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rules-editor.png" alt="This image indicates the position of the Delete icons" width="550px" class="no-border" >}}

#### XPath Constraint

When there is a value shown in the **XPath constraint** row for a specific access rule, this means it has an XPath constraint. The access rule will only be granted if the XPath constraint is true. When an XPath constraint has a caption, this is shown instead of the XPath constraint itself.

### Entity Rights

By setting the appropriate entity rights in an access rule, you can control the ability to create and/or delete objects of the entity. By default, an access rule has no entity rights. 

When an access rule has entity rights, this is shown using the **Create** ({{% icon name="create" color="gray" %}}) and/or **Delete** ({{% icon name="trash-can" %}}) icon in the entity rights row for the specific access rule.

### Attribute and Association Rights

In the access rule, access to specific members (attributes or associations belonging to the entity) can be controlled. The access can be **None**, **Read**, or **Read and Write**. When there is no access, no icon is displayed in the row of the member in the access rule column. If there is **Read** access, a **Read** icon ({{% icon name="view" %}}) is displayed. For **Read and Write** access, both the **Read** ({{% icon name="view" %}}) and **Write** ({{% icon name="pencil" %}}) icons are displayed.

### Creating or editing an access rule

Access rules can be created from the **New Access Rule** dialog. This dialog can be opened by clicking **New**. To edit an existing access rule, select an access rule and click **Edit**. You can also double-click on an access rule. 

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/access-rule-editor.png" alt="This image indicates the position of the Delete icons" width="550px" class="no-border" >}}

#### Documentation

You can add documentation to describe the access rule. 

#### Module roles

Select the module role(s) this access rule applies to. If there are no module roles selected there will be a consistency error.

#### XPath Constraints

To edit the XPath constraint, click **Edit...** next to the XPath constraint field. This will open the XPath editor dialogue to edit the XPath constraint of the access rule.

{{% alert color="warning" %}}
XPath constraints can only be applied to persistable entities, as they are applied by the database. Defining XPath constraints for non-persistable entities results in consistency errors.
{{% /alert %}}

There are two constraints that can be appended easily with a single button click. 

##### Owner

The **Owner** button adds an XPath constraint so the access rule is only applied if the object owner is the current end-user.

```java
[System.owner='[%CurrentUser%]']
```

This constraint is only valid when the [Store 'owner'](/refguide/entities/#store-owner) checkbox in the **System members** section of the entity properties is checked.

##### Path to User

The **Path to user...** button adds an XPath constraint so the access rule is only applied when a User object which is associated (directly or indirectly) with the current object is the current end-user. When you click **Path to user...**, you can select a path to an associated entity that is either a `System.User` or a specialization of `System.User`. This is then converted into an XPath constraint for the access rule.

For example:

1. Assume that the **Customer** entity is a specialization of the **User** entity. The **Order** entity is associated with the **Customer** entity via the **Order_Customer** association.
2. Assume that a logged-in customer is only allowed to view their orders, but is not allowed to view the orders of other customers.

The XPath constraint can be constructed easily using the **Path to user...** button by selecting the **Customer** entity in the **Order** entity access rule. The created rule will look like this:

```xpath
[Module.Order_Customer = '[%CurrentUser%]']
```

Because of this XPath constraint, access defined in the access rule is only applied to orders for which the customer is the current end-user.

#### Entity Rights

You can add or edit entity rights using the toggles next to **Allow creating new and deleting existing objects**. 

XPath constraints are not applied to create operations, meaning that if you enable create access in an access rule which applies to a certain module role, any end-user with this module role can create objects of this entity.

XPath constraints are applied to delete operations, unlike create operations.

#### Default member access

Specifies the rights which are applied to new attributes or associations of this entity. This option was absent from the new Access Rule Editor before version 10.19 where the rights always defaulted to no access for any module roles.

#### Attribute and Association Rights

Access to the members can be set using the toggles in the column next to the member description. 

You can also click **Read** or **Write** in the **Set all to** footer to enable or disable 'Read' or 'Read and Write' access for all attributes and associations in this column. 

{{% alert color="info" %}}
You cannot set *Write* access to attributes which are calculated. This includes both attributes where the attribute value is set to **Calculated** and attributes of type *Autonumber*.
{{% /alert %}}

See [Attribute Changes and Security Constraints](#attribute-changes), above, for important considerations about giving access to attributes.

### Access Rule Normalization{#normalization}

Older beta versions of the new access rule editor, in Studio Pro versions 10.6 through 10.16, worked with normalized access rules. A normalized access rule is an access rule that has exactly one module role attached to it. This change was made because the editor used to work with a table where the entity members make use of the rows and module roles (optionally with XPaths) use the columns. 

Access rules were automatically normalized when first using the new editor for an entity. Alternatively, all access rules in a project could be normalized at once by going to *App* *Tools* > *Normalize access rules*;
