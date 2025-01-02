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
With Studio Pro 10.6.0 a new entity access rule editor has been released as a [beta](/releasenotes/beta-features/). You can enable this new editor in the [Preferences Dialog](/refguide/preferences-dialog/#new-features).

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
You cannot set *Write* access to attributes which are calculated. This includes attributes of type *Autonumber* and attributes where the attribute value is set to **Calculated**.
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
The new access rule editor was introduced in Studio Pro version 10.6.0 as a beta. For more information on beta features, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

{{% alert color="info" %}}
In Studio Pro version 10.6.0 and above, you will need to enable the new editor via the option in [Preferences](/refguide/preferences-dialog/#new-features). 
{{% /alert %}}

{{% alert color="info" %}}
The new access rule editor works with normalized access rules. A normalized access rule is an access rule that has exactly one module role attached to it. See [Access Rule Normalization](#normalization), below, for the implications when you switch to the new editor.
{{% /alert %}}

### Editor Layout

Each module role from the module of the entity will have a default column for its access rights without an XPath. Next to this default column a module role can have more columns if XPath's have been added. The default column can not be deleted.

Each column has a three-dot [context menu](#context) ({{% icon name="three-dots-menu-vertical" %}}) which you can see when you hover over the column heading containing the module role.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/example-columns.png" class="no-border" >}}

### XPath

An XPath constraint can be added to a module role by clicking on the XPath field of its default column. This will open the XPath editor dialogue. After an XPath constraint has been entered, a new column is added. This new column will be created with the same access rights as the default column. Alternatively, you can use the [Add XPath](#add-xpath) option in the context menu to add a new column based on any column.

The rights in this column will only be granted if the XPath constraint is true.

The new column will display the XPath constraint, or the **Caption** of the XPath constraint if one has been entered.

The non-default columns with an XPath constraint can be deleted via the [context menu](#delete). The default column can not be deleted, but its content can be cleared in the same way.

{{% alert color="warning" %}}
XPath constraints can only be applied to persistable entities as they are applied by the database. Defining XPath constraints for non-persistable entities results in consistency errors.
{{% /alert %}}

There are two constraints that can be appended easily with a single button click. 

#### Owner

The **Owner** button adds an XPath constraint so the access rule is only applied if the object owner is the current end-user.

```java
[System.owner='[%CurrentUser%]']
```

This constraint is only valid when the [Store 'owner'](/refguide/entities/#store-owner) checkbox in the **System members** section of the entity properties is checked.

#### Path to User

The **Path to user...** button adds an XPath constraint so the access rule is only applied when a User object which is associated (directly or indirectly) with the current object is the current end-user. When you click **Path to user...**, you can select a path to an associated entity that is either a `System.User` or a specialization of `System.User`. This is then converted into an XPath constraint for the access rule.

For example:

1. Assume that the **Customer** entity is a specialization of the **User** entity. The **Order** entity is associated with the **Customer** entity via the **Order_Customer** association.
2. Assume that a logged-in customer is only allowed to view their orders, but is not allowed to view the orders of other customers.

The XPath constraint can be constructed easily using the **Path to user...** button by selecting the **Customer** entity in the **Order** entity access rule. The created rule will look like this:

```xpath
[Module.Order_Customer = '[%CurrentUser%]']
```

Because of this XPath constraint, access defined in this column of the access rules editor is only applied to orders for which the customer is the current end-user.

### Entity Rights

You can set rights on whether a module role can create or delete entities. Settings are on when they are dark, and off when they are light gray.

#### Create Rights

Toggle the **Create** setting, shown below, *on* or *off* to enable or disable Create rights.

XPath constraints are not applied to create operations, meaning that if you enable create access for one column of a module role, any end-user with this module role can create objects of this entity.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/create.png" alt="This image indicates the position of the Create icons" width="550px" class="no-border" >}}

#### Delete Rights

Toggle the **Delete** setting, shown below, *on* or *off* to enable or disable Delete rights.

In contrast, to Create access, XPath constraints are applied to delete operations.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/delete.png" alt="This image indicates the position of the Delete icons" width="550px" class="no-border" >}}

### Attribute and Association Rights

You can set rights on whether a module role can read or write an attribute or association. Settings are on when they are dark, and off when they are light gray.

Module roles will have no access to newly added attributes or associations. The option in the old editor to set default rights for new members (described in [Member Read and Write Rights Section](#member-access), above) has been removed from the new editor to improve security.

See [Attribute Changes and Security Constraints](#attribute-changes), above, for important considerations about giving access to attributes.

#### Read Rights

Toggle the **Read** setting, shown below, *on* or *off* to enable or disable Read rights for the attribute or association of that row. When disabling Read access, Write access is automatically disabled as well.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/read.png" alt="This image indicates the position of the Read icons" width="550px" class="no-border" >}}

You can also click **Read** in the **Set all to** footer to enable or disable Read access for all attributes and associations in this column. Disabling Read access for all rows will also disable Write access for all of them.

#### Write Rights

Toggle the **Write** setting, shown below, on or off to enable or disable Write rights for the attribute or association of that row. When enabling Write access, Read access is automatically enabled as well.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/write.png" alt="This image indicates the position of the Write icons" width="550px" class="no-border" >}}

You can also click **Write** in the **Set all to** footer to enable or disable Write access for all attributes and associations in this column. Enabling Write access for all rows will also enable Read access for all of them.

{{% alert color="info" %}}
You cannot set *Write* access to attributes which are calculated. This includes attributes of type *Autonumber* and attributes where the attribute value is set to **Calculated**.
{{% /alert %}}

### Context menu {#context}

The context menu of a column can be opened by clicking on the three dot icon ({{% icon name="three-dots-menu-vertical" %}}) that is shown when hovering over a module role name in the header. Within the context menu, you will find options to easily reuse, add, or remove access rules.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/context-menu.png" width="550px" class="no-border" >}}

#### Copy To

The **Copy to** option allows you to select another module role column and to copy the Create, Delete, Read, and Write access of this column to that column. The target columns are identified by the module role and any XPath applied to it.

#### Copy From

The **Copy from** option allows you to select another column and to copy the Create, Delete, Read, and Write access of that column to this column. The source columns are identified by the module role and any XPath applied to it.

#### Add XPath{#add-xpath}

The **Add XPath** option allows you to enter an XPath and create a new column with the same Create, Delete, Read, and Write access of this column, but with the new XPath you just entered.

#### Delete {#delete}

This option is shown for module role columns with an XPath constraint. It removes this column from the table.

#### Clear

This option is shown for the default module role columns. It resets all the access rights to their default (off) values.

### Access Rule Normalization{#normalization}

The new access rule editor works with normalized access rules. A normalized access rule is an access rule that has exactly one module role attached to it. This change is made because the new editor works with a table where the entity members make use of the rows and module roles (optionally with XPaths) use the columns. 

Access rules are automatically normalized when first using the new editor for an entity. Alternatively, all access rules in a project can be normalized at once by going to *App* *Tools* > *Normalize access rules*;
