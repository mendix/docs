---
title: "Access Rules"
url: /refguide8/access-rules/
weight: 70
tags: ["domain model", "entity", "access rule", "xpath constraint", "module role", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/access-rules.pdf).
{{% /alert %}}

## 1 Introduction

The **access rules** of an entity define what a user is allowed to do with objects of the entity. Users can be allowed to create and/or delete objects, and to view and/or edit member values. A member is an attribute or an association of an entity. Furthermore, the set of objects available for viewing, editing, and removing can be limited by means of an [XPath constraint](/refguide8/xpath-constraints/).

Every access rule is applicable to one or more [module roles](/refguide8/module-security/#module-role). An access rule grants certain access rights to those roles. Rules are additive, which means that if multiple access rules apply to the same module role, all access rights of those rules are combined for that module role.

{{% alert color="warning" %}}
Access rules are not inherited from an entity's [generalization](/refguide8/entities/#generalization), the security for every entity is specified explicitly. This means that when adding an access rule to an entity, always make sure that all required XPath constraints are applied.

If the entity has a generalization with access rules defining XPath constraints, these will not apply to its specializations and will therefore not limit its visibility.
{{% /alert %}}


## 2 Properties

Access rules are defined via entity's **Properties** > **Access rules**, or on the **Access rules** tab of the entity dialog. 

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rules-section.png" alt="Access Rules for Entities" >}}

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rules-tab.png" alt="Access Rules for Entities" >}}

{{% alert color="info" %}}
The **Access rules** section is visible only if the [Project Security](/refguide8/project-security/) is set to **Production**.
{{% /alert %}}

An example of the access rules properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rules-properties.png" alt="Access Rules for Entities" >}}

Access rules properties consist of the following sections:

* [Documentation](#documentation)
* [Module Roles](#module-roles)
* [Access rights](#access-rights)
* [XPath constraint](#xpath-constraint)

### 2.1 Documentation Section {#documentation}

In **Documentation**, you can describe the intention of the access rule. This helps to keep access rules comprehensible, especially in the case of non-trivial XPath constraints.

### 2.2 Rule Applies to the Following Module Roles Section {#module-roles}

#### 2.2.1 Roles

All module roles are listed, and those to which this access rule applies are checked. All users that have at least one of the checked module roles get the access rights that the rule defines.

#### 2.2.2 Select / Deselect All

You can easily select, or deselect, all module roles using this check box.

### 2.3 Access Rights Tab{#access-rights}

The **Access rights** tab allows you to assign rights to users with the selected module roles.

#### 2.3.1 Create and Delete Rights Section

##### 2.3.1.1 Allow creating new objects

If **Allow creating new objects** is checked, users are allowed to create new objects of this entity.

##### 2.3.1.2 Allow deleting existing objects

If **Allow deleting existing objects** is checked, users are allowed to delete existing objects of this entity.

The set of objects that can be deleted can be limited by using an [XPath constraint](#xpath-constraint).

#### 2.3.2 Member Read & Write Rights Section

**Member read and write rights** define the access rights for every member ([attribute](/refguide8/attributes/) or [association](/refguide8/associations/)) of the entity. These access rights indicate whether users are allowed to view and/or edit the member's value. The set of objects to which these rights apply can be limited by using an [XPath constraint](#xpath-constraint).

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

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rule-discount-read.png" >}}

### 2.4 XPath Constraint Tab {#xpath-constraint}

An [XPath constraint](/refguide8/xpath-constraints/) can be used to constrain the set of objects to which the access rule applies. If the XPath constraint is empty, the rule applies to all objects of the entity.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rule-xpath-tab.png" >}}

For example, the **Customer** entity is a specialization of the **User** entity. The **Order** entity is associated to the **Customer** entity.

A logged-in customer is allowed to view personal orders, but is not allowed to view the orders of other customers. This is accomplished by using the following XPath constraint in the access rule of the **Order** entity:

```java
[Module.Order_Customer = '[%CurrentUser%]']
```

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/access-rules/access-rule-order-xpath.png" >}}

Because of this XPath constraint, the access rule only applies to orders for which the customer is the currently signed-in user.

{{% alert color="warning" %}}
XPath constraints can only be applied to persistable entities as they are applied by the database. Defining XPath constraints for non-persistable entities results in consistency errors.
{{% /alert %}}
