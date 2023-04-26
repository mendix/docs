---
title: "Access Rules"
url: /refguide7/access-rules/
weight: 70
tags: ["domain model", "entity", "access rule", "xpath constraint", "module role"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

The access rules of an entity define what a user is allowed to do with objects of the entity. Users can be allowed to create and/or delete objects, and to view and/or edit member values. A member is an attribute or an association of an entity. Furthermore, the set of objects available for viewing, editing and removing can be limited by means of an [XPath constraint](/refguide7/xpath-constraints/).

Every access rule is applicable to one or more [module roles](/refguide7/module-role/). An access rule grants certain access rights to those roles. Rules are additive, which means that if multiple access rules apply to the same module role, all access rights of those rules are combined for that module role.

{{% alert color="warning" %}}

Access rules are not inherited from an entity's generalization; rather, the security for every entity is specified explicitly. This means that when adding an access rule to an entity, always make sure that all required XPath constraints are applied. The generalization's access rules, that might already define XPath constraints, do not apply to its specializations and will therefore not limit their visibility.

{{% /alert %}}

## Properties

Access rules are defined in the entity **Properties** > the **Access rules** section.

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/access-rules/dm-access-rules-section.png" alt="Access Rules for Entities" >}}

{{% alert color="info" %}}

The **Access rules** section is visible only if  the project security is set to **Production**. For more information, see [Project Security](/refguide7/project-security/).

{{% /alert %}}

### Documentation

In this property you can describe the intention of the access rule. This helps to keep access rules comprehensible, especially in case of non-trivial XPath constraints.

### Rule applies to the following module roles

The module roles to which this access rule applies have a checkmark in the box before them. All users that have at least one of the checked module roles get the access rights that the rule defines.

### Allow creating new objects

If this check box is checked, users are allowed to create new objects of this entity.

### Allow deleting existing objects

If this checkbox is checked, users are allowed to delete existing objects of this entity.

The set of objects that can be deleted can be limited by using an XPath constraint (see below).

### Member read and write rights

Member read and write rights define the access rights for every member (attribute or association) of the entity. These access rights indicate whether users are allowed to view and/or edit the member's value.

| Value | Description |
| --- | --- |
| - | Users are not allowed to view or edit the value of the member. |
| Read | Users are allowed to view the value of this member, but cannot edit it. |
| Read, Write | Users are allowed to view and edit the value of this member. |

The set of objects to which the member access rights apply can be limited by using an XPath constraint (see below).

{{% alert color="info" %}}

A customer is allowed to view the discount, but is not allowed to edit it. The access rights for the discount attribute are 'Read'.

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/access-rules/917534.png" >}}

{{% /alert %}}

### XPath constraint

The [XPath constraint](/refguide7/xpath-constraints/) can be used to constrain the set of objects to which the access rule applies. If the XPath constraint is empty, the rule applies to all objects of the entity.

Entity 'Customer' is a specialization of entity 'User'. Entity 'Order' is associated to entity 'Customer'.

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/access-rules/917537.png" >}}

A logged in customer is allowed to view personal orders, but is not allowed to view orders of other customers. This is accomplished by using the following XPath constraint in the access rule of entity 'Order':

```java
[Module.Order_Customer = '[%CurrentUser%]']
```

Because of this XPath constraint, the access rule only applies to orders of which the customer is the currently signed in user.

{{% alert color="info" %}}

The checkbox 'Show XPath constraint' only indicates whether you can see the XPath constraint in the access rule dialog, it does not influence the behavior of your application.

{{% /alert %}}{{% alert color="warning" %}}

XPath constraints can only be applied to persistable entities as they are computed in the database. Defining XPath constraints for non-persistable entities results in consistency check errors.

{{% /alert %}}
