---
title: "Access Rules"
url: /refguide9/access-rules/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The access rules of an entity define what a user is allowed to do with objects of the entity. Users can be allowed to create and/or delete objects, and to view and/or edit member values. A member is an attribute or an association of an entity. Furthermore, the set of objects available for viewing, editing, and removing can be limited by means of an [XPath constraint](/refguide9/xpath-constraints/).

Every access rule is applicable to one or more [module roles](/refguide9/module-security/#module-role). An access rule grants certain access rights to those roles. Rules are additive, which means that if multiple access rules apply to the same module role, all access rights of those rules are combined for that module role.

{{% alert color="warning" %}}
Access rules are not inherited from an entity's [generalization](/refguide9/entities/#generalization), because the security for every entity is specified explicitly. So when adding an access rule to an entity, always make sure that all required XPath constraints are applied. If the entity has a generalization with access rules defining XPath constraints, these will not apply to its specializations and will therefore not limit its visibility.
{{% /alert %}}

{{% alert color="warning" %}}
The **System.User** entity has inbuilt access rules where access is given to its attributes if the user can manage the role of that user. Specializations of **System.User** (such as **Administration.Account**) cannot restrict this access with their own access rules.
{{% /alert %}}

## Defining Access Rules

There are two ways to view access rules:

* Via entity's **Properties** > **Access rules**: 

    {{< figure src="/attachments/refguide9/modeling/domain-model/entities/access-rules/access-rules-section.png" alt="Access Rules for Entities" width="250px" class="no-border" >}}

* Via the **Access rules** tab of the entity dialog box:

    {{< figure src="/attachments/refguide9/modeling/domain-model/entities/access-rules/access-rules-tab.png" alt="Access Rules for Entities" width="550px" class="no-border" >}}

{{% alert color="info" %}}
The **Access rules** section is visible only if the [App Security](/refguide9/app-security/) is set to **Production**.
{{% /alert %}}

An example of the access rules properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/domain-model/entities/access-rules/access-rules-properties.png" alt="Access Rules for Entities" width="700px" class="no-border" >}}

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

All module roles are listed, and those to which this access rule applies are checked. All users that have at least one of the checked module roles get the access rights that the rule defines.

#### Select / Deselect All

You can easily select, or deselect, all module roles using this checkbox.

### Access Rights Tab {#access-rights}

The **Access rights** tab allows you to assign rights to users with the selected module roles.

#### Create and Delete Rights Section

##### Allow Creating New Objects

If **Allow creating new objects** is checked, users are allowed to create new objects of this entity. This is not restricted by any configured XPath constraints.

##### Allow Deleting Existing Objects

If **Allow deleting existing objects** is checked, users are allowed to delete existing objects of this entity.

The set of objects that can be deleted can be limited by using an [XPath constraint](#xpath-constraint).

#### Member Read and Write Rights Section

**Member read and write rights** define the access rights for every member ([attribute](/refguide9/attributes/) or [association](/refguide9/associations/)) of the entity. These access rights indicate whether users are allowed to view and/or edit the member's value. The set of objects to which these rights apply can be limited by using an [XPath constraint](#xpath-constraint).

| Value | Description |
| --- | --- |
| - | Users are not allowed to view or edit the value of the member. |
| Read | Users are allowed to view the value of this member, but cannot edit it. |
| Read, Write | Users are allowed to view and edit the value of this member. |

{{% alert color="info" %}}
You cannot set *write* access to attributes which are calculated. This includes attributes of type *Autonumber* and attributes where the attribute value is set to **Calculated**.
{{% /alert %}}

**Default rights for new members** specifies the rights which are applied to new attributes or associations of this entity.

**Set all to** allows you to quickly set all the access rights for members to **None**, **Read**, or **Read, Write**.

For example, a customer is allowed to view the discount, but is not allowed to edit it. The access rights for the discount attribute are **Read**.

{{< figure src="/attachments/refguide9/modeling/domain-model/entities/access-rules/access-rule-discount-read.png" class="no-border" >}}

{{% alert color="warning" %}}
If a user cannot view the value of an attribute because of security constraints, that attribute will never be sent to the Mendix Client. Because Mendix is stateless, this can lead to unexpected results (for example, loss of changes) if changes to the attribute in a microflow are not committed immediately. See [Basic CRUD Communication Pattern](/refguide9/communication-patterns/#crud) in *Communication Patterns in the Mendix Runtime* for more information on how data is passed between the Runtime Server and the Mendix Client and what cases may lead to a loss of changes.
{{% /alert %}}

### XPath Constraint Tab {#xpath-constraint}

An [XPath constraint](/refguide9/xpath-constraints/) can be used to constrain the set of objects to which the access rule applies. If the constraint rule is true, the rule applies to that object. If the XPath constraint is empty, the rule applies to all objects of the entity.

{{< figure src="/attachments/refguide9/modeling/domain-model/entities/access-rules/access-rule-xpath-tab.png" width="450px" class="no-border" >}}

{{% alert color="warning" %}}
XPath constraints can only be applied to persistable entities as they are applied by the database. Defining XPath constraints for non-persistable entities results in consistency errors.
{{% /alert %}}

There are two constraints that can be appended easily with a single button click. 

#### Owner

The **Owner** button adds an XPath constraint so the access rule is only applied if the object owner is the current user.

```java
[System.owner='[%CurrentUser%]']
```

This constraint is only valid when the [Store 'owner'](/refguide9/entities/#store-owner) checkbox in the **System members** section of the entity properties is checked.

#### Path to User

The **Path to user...** button adds an XPath constraint so the access rule is only applied when the User object which is associated (directly or indirectly) is the current user. When you click **Path to user...**, you can select a path to an associated entity that is either a `System.User` or a specialization of `System.User`. This is then converted into an XPath constraint for the access rule.

```java
[Module.Order_Customer = '[%CurrentUser%]']
```

As an example:

1. Assume that the **Customer** entity is a specialization of the **User** entity. The **Order** entity is associated with the **Customer** entity via the **Order_Customer** association.
2. Assume that a logged-in customer is only allowed to view their orders, but is not allowed to view the orders of other customers.
The XPath constraint can be constructed easily using the **Path to user...** button by selecting the **Customer** entity in the **Order** entity access rule.

{{< figure src="/attachments/refguide9/modeling/domain-model/entities/access-rules/access-rule-order-xpath.png" width="1000px" class="no-border" >}}

Because of this XPath constraint, access defined in the **Access rights** tab is only applied to orders for which the customer is the current user.

## Access Rule Evaluation

Access rules are defined as part of application development. This section describes the effects access rules have at runtime, under the assumption that the **App Security** is set to **Production**.

Access rules are abstract descriptions of access rights. To apply them they need to be evaluated. Given a user with certain user roles and the state of the database it can be determined if an access rule applies. The Mendix runtime stores the result of access rule evaluations in memory. In general, this evaluation happens on retrieval of objects from the database. The results will stay valid for the lifetime of the object, which is usually the request. Access rules are evaluated differently depending on the object state. More details about their evaluation when accessed through a user context are given below.

### New Objects

When a new object is created, or when a new object is sent to the runtime server as part of a request, all XPath constraints are assumed to evaluate as `true`. This evaluation result is stored in memory and valid for the lifetime of the request. Committing the object does *not* lead to access rules or XPath rules being re-evaluated.

### Objects Stored in the Database

When a persistable object that has been committed before is passed to the runtime server, the access rules are evaluated based on the current state of the object in the database. More precisely, when passing an object, only the 'changes' on the object and an 'object id' are sent. A full object is then reconstructed in two steps. Firstly, the object is retrieved from the database based on its id. At that time the access rules are evaluated based on the values retrieved from the database. Secondly, changes are applied to the object.

As for new objects the result of this access rule evaluation is stored in memory and not changed for the lifetime of the object or request. In particular, changes to attributes or committing the object does not cause re-evaluation of access rules.

### Non-Persistable Objects

Non-persistable objects cannot have XPath constraints.
