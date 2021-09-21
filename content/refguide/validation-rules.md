---
title: "Validation Rules"
parent: "entities"
menu_order: 40
tags: ["domain model", "entity", "validation rule"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Validation rules are conditions that should be satisfied before an object is committed. If a condition defined by a validation rule is not satisfied when the object is committed, the runtime server generates a validation error.

If the object was committed using a form, this results in a validation message.

If the object was committed in a microflow, this results in an error that can be handled using custom error handling.

In all other cases, a validation error results in a Java exception being thrown.

For example, for entity 'Customer' the name and credit need to be filled in at all times, and the expenses cannot be higher than the credit. This is visualized in the domain model editor as follows:

![](attachments/domain-model/customer-validation-rules.png)

{{% alert type="warning" %}}
You can only define validation rules for persistable entities as they are designed to ensure database integrity. Therefore, validation rules are disabled for non-persistable entities.
{{% /alert %}}

## 2 Properties

You can add and edit validation rules for an entity from the [entity dialog box](entities#dialog-box).

An example of the validation rule properties is represented in the image below:

![](attachments/domain-model/validation-rule-properties.png)

Validation rule properties consist of the following sections:

* [General](#general)
* [Rule](#rule)

### 2.1 General Properties {#general}

#### 2.1.1 Attribute

**Attribute** specifies the attribute to which the validation rule applies. The validation rules apply to attributes of the entity and, if it has a generalization, the attributes of its generalization.

#### 2.1.2 Error Message

**Error message** defines the message that is displayed to the end-user when the attribute value does not satisfy the condition defined by the validation rule.

### 2.2 Rule Properties {#rule}

#### 2.2.1 Rule

The rule defines which condition an attribute should satisfy.

| Option | Description |
| --- | --- |
| Required *(default)*  | The attribute needs to have a value. It cannot be empty. |
| Unique | The value of this attribute must be different from the values of this attribute in all other objects of the same entity. See [Uniqueness Constraint](#uniqueness), below for more information. |
| Equals | The attribute value needs to be equal to a specified value or equal to the value of another attribute of the same object. |
| Range | The attribute value needs to be greater than or equal to, less than or equal to, or between two values. The values are either specified fixed values or values of other attributes of the same object. |
| Regular expression | The attribute needs to match a regular expression stored in a [regular expression](regular-expressions) resource. |
| Maximum length | The attribute may have no more than the specified number of characters. |

{{% alert type="info" %}}
Date values should be entered in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format, for example 2015-07-26.
{{% /alert %}}

#### 2.2.2 Rule Order

Validation rules can be ordered in Studio Pro. The order of the rules determines the order they are applied. If multiple rules are violated, all their error messages will be recorded (in the defined order) and shown in the page. Although the order can be set for all the validation rules in the entity, only the order per attribute will have an impact as all validation rules are executed for all attributes.

The `uniqueness` validations do not follow the defined order. This validation requires a database query and is executed only when the complete object satisfies all the other validation rules.

## 3 Uniqueness Constraint{#uniqueness}

The uniqueness validation constraint is handled by the database. This enables stateless clustering, a higher number of concurrent users, and applications with a high transaction rate to be handled efficiently.

The following rules are validated in the database:

* Unique rules on entity attributes
* The *many side* of one-to-many associations, and *both sides* of one-to-one associations

There are some things you need to consider when applying a uniqueness constraint, especially if you have existing data in the entities to which you are adding the constraint.

### 3.1 Entity Uniqueness

#### 3.1.1 Strings

The uniqueness constraint will take into account the way that the underlying database deals with case sensitivity. For a full discussion of this, see [Case-Sensitive Database Behavior](case-sensitive-database-behavior).

#### 3.1.2 Existing Entities

When you add a uniqueness constraint to an entity which already contains data, all the existing objects for the affected entity will be checked on deployment for the uniqueness of the attribute. If you have, for example, applied uniqueness validation to an insurance number and there are multiple people with the same insurance number then:

* if you deploy the app from Studio Pro, an error will be shown on deployment
* if you deploy the app from a deployment package (for example in the Mendix cloud), the app will not start and errors will be written to the log

![](attachments/datastorage/startup-error.png)

#### 3.1.3 Generalizations

There are limitations on using database uniqueness validation if you are using an entity which is a specialization of another (generalization) entity.

With the database uniqueness validation option enabled, you cannot define the unique validation rule in the specialization entity for attributes which come from the generalization of this entity. If you do this, a consistency error is reported, as in this image:

![](attachments/datastorage/unique-validation-rule-unresolved.png)

You can, however, define a unique validation rule for attributes which are added in the specialized entity.

---

For example, you have two entities:

* a general entity **Employee** with the attribute **EmployeeNumber**
* a specialized entity **SalesEmployee**, based on *Employee* with the attribute **EmailAddress**.

Each *SalesEmployee* will have an *EmployeeNumber* as that is in the *Employee* entity. However, you cannot set a validation rule in the *SalesEmployee* entity to make *EmployeeNumber* unique.

You can, however, set a validation rule to make *EmailAddress* unique, as that attribute only appears in the *SalesEmployee* entity.

---

You can resolve this issue simply, by moving unique validation rules of these attributes to the generalization entity where the attribute it defined.

![](attachments/datastorage/unique-validation-rule-resolved.png)

### 3.2 Association Uniqueness

Uniqueness constraints also apply to associations. This is done by changing the type of association to have one or both sides of an association set to `1` instead of `*` (multiple). You may receive an error when you apply a uniqueness constraint to an association which already contains data which is not unique.

Consider the following example:

![](attachments/datastorage/one-to-many-assoc.PNG)

Initially, the domain model contains a one-to-many association between **Address** and **Person**. This means that a Person can have multiple addresses. After some time, the data structure is changed, because you only want to hold one Address per Person. Proper data modeling prescribes changing the association into a one-to-one association. New data will reflect the updated association properly.

![](attachments/datastorage/one-to-one-assoc.PNG)

Existing association data in the database must also adhere to the updated one-to-one association. This is checked at deployment. If a person has multiple addresses, the model will not deploy, and an error will be given in Studio Pro or in the logs of deployment in the (Mendix) cloud:

![](attachments/datastorage/startup-error-assoc.png)

We enforce this new stricter association on existing data in order to avoid easily overlooked mistakes that result in returning only a single address per person (where in fact they still have multiple addresses in the database). For example, the Mendix platform could consistently return the same address each run, but other addresses would be dormant entries in the database.
