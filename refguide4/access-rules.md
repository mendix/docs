---
title: "Access Rules"
parent: "entities"
space: "Reference Guide 4"
---
The access rules of an entity define what a user is allowed to do with objects of the entity. Users can be allowed to create and/or delete objects, and to view and/or edit member values. A member is an attribute or an association of an entity. Furthermore, the set of objects available for viewing, editing and removing can be limited by means of an [XPath constraint](xpath-constraints).

Every access rule is applicable to one or more [module roles](module-role). An access rule grants certain access rights to those roles. Rules are additive, which means that if multiple access rules apply to the same module role, all access rights of those rules are combined for that module role.

## Properties

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

<div class="alert alert-info">{% markdown %}

A customer is allowed to view her discount, but is not allowed to edit it. The access rights for the discount attribute are 'Read'.

![](attachments/819203/917534.png)

{% endmarkdown %}</div>

### XPath constraint

The [XPath constraint](xpath-constraints) can be used to constrain the set of objects to which the access rule applies. If the XPath constraint is empty, the rule applies to all objects of the entity.

<div class="alert alert-info">{% markdown %}

Entity 'Customer' is a specialization of entity 'User'. Entity 'Order' is associated to entity 'Customer'.

![](attachments/819203/917537.png)

A logged in customer is allowed to view her own orders, but she is not allowed to view orders of other customers. This is accomplished by using the following XPath constraint in the access rule of entity 'Order':

```java
[Module.Order_Customer = '[%CurrentUser%]']
```

Because of this XPath constraint, the access rule only applies to orders of which the customer is the currently signed in user.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

The checkbox 'Show XPath constraint' only indicates whether you can see the XPath constraint in the access rule dialog, it does not influence the behavior of your application.

{% endmarkdown %}</div><div class="alert alert-warning">{% markdown %}

XPath constraints can only be applied to persistable entities as they are computed in the database. Defining XPath constraints for non-persistable entities results in consistency check errors.

{% endmarkdown %}</div>

## Related Articles

*   [How To: Set up access rules](/howto40/set-up-access-rules)
