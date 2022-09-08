---
title: "Uniqueness Constraint Migration"
url: /refguide8/uniqueness-constraint-migration/
weight: 30
tags: ["studio pro"]
aliases:
    - /refguide/uniqueness-constraint-migration.html
    - /refguide/uniqueness-constraint-migration
# referred to in M2EE error message
---

## 1 Introduction

The uniqueness validation constraint is usually handled in the database. This enables stateless clustering, a higher number of concurrent users, and above load applications to be handled efficiently.

The following rules can be validated in the database:

* Unique rules on entity attributes
* The *many side* of one-to-many associations, and *both sides* of one-to-one associations

However, it is also possible to do data validation in the runtime and to add uniqueness validation to the database later, when it already contains data. If you apply stricter rules at a later date, the data in your database will have to comply with your new validation rules.

This document discusses:

* the impact on your projects of adding a database uniqueness constraint
* how you can migrate your existing data when you make changes to your domain model validations
* how you can ensure your existing data, which may be incompatible with your current validation rules, complies with your existing project model so that you can deploy in Mendix with database constraints

A migration toolkit is available to help you fix any inconsistencies between data in your database and validation rules defined in your model.

For more information about the setting for *Uniqueness Validation*, see [Project Settings](/refguide8/project-settings/).

## 2 Unique Attributes

### 2.1 Effect of Runtime Uniqueness Validation

If your Mendix app uses runtime validation, you can change an entity and add a unique validation rule on an attribute without affecting the current data. For example, you could indicate in your domain model that an insurance number should be unique for a person in the database because you wanted to use it to uniquely identify someone.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/attr-uniq-validation-rule.PNG" >}}

Applying the validation rule does not affect people that were already stored in the database before you deployed the new version of the app with the stricter data model. The insurance number is checked for uniqueness only for new people compared to existing people.

The advantage of this is that the stricter model does not affect the current data. The disadvantage is that it is easy to make wrong assumptions about the uniqueness of data in the database. For example, logic in a microflow could depend on unique insurance numbers, and the presence of old data with duplicate insurance numbers could easily be overlooked.

### 2.2 Current Situation for Uniqueness Validation

Using runtime validation for uniqueness has been deprecated. However, until it is removed, we are providing a Runtime setting that, if set to **Database**, will enforce the unique validation rules on a database level.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/uniqueness-validation-setting.PNG" >}}

We highly recommend setting this radio button to **Database**. This will prepare your app for future versions of Mendix. If the radio button remains set to **Runtime**, a deprecation warning will appear:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/deprecation-warning.PNG" >}}

### 2.3 Effect of Database Uniqueness Validation

The effect of selecting **Database** is that when you deploy a model with unique validation rules on attributes (existing rules or new rules), all the existing objects for the affected entity will be checked for the uniqueness of the attribute. If there are multiple people with the same insurance number then:

* if you deploy the app from Studio Pro, an error will be shown on deployment
* if you deploy the app from a deployment package (for example in the Mendix cloud), the app will not start and errors will be written to the log

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/startup-error.png" >}}

### 2.4 Limitations on Using Database Uniqueness Validation

There are limitations on using database uniqueness validation if you are using an entity which is a specialization of another (generalization) entity.

With the database uniqueness validation option enabled, you cannot define the unique validation rule in the specialization entity for attributes which come from the generalization of this entity. If you do this, a consistency error is reported, as in this image:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/unique-validation-rule-unresolved.png" >}}

You can, however, define a unique validation rule for attributes which are added in the specialized entity.

---

For example, you have two entities:

* a general entity **Employee** with the attribute **EmployeeNumber**
* a specialized entity **SalesEmployee**, based on *Employee* with the attribute **EmailAddress**.

Each *SalesEmployee* will have an *EmployeeNumber* as that is in the *Employee* entity. However, you cannot set a validation rule in the *SalesEmployee* entity to make *EmployeeNumber* unique.

You can, however, set a validation rule to make *EmailAddress* unique, as that attribute only appears in the *SalesEmployee* entity.

---

You can resolve this issue simply, by moving unique validation rules of these attributes to the generalization entity where the attribute it defined.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/unique-validation-rule-resolved.png" >}}

## 3 Unique Associations

A comparable situation occurs for associations. Consider the following example:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/one-to-many-assoc.PNG" >}}

Initially, the domain model contains a one-to-many association between **Address** and **Person**. This means that a Person can have multiple addresses. After some time, the data structure is changed, because logic has been added to the app that only allows one Address per Person. Proper data modeling prescribes changing the association into a one-to-one association. New data will reflect the updated association properly.

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/one-to-one-assoc.PNG" >}}

Existing association data in the database must also adhere to the updated one-to-one association. This is checked at deployment. If a person has multiple addresses, the model will not deploy, and an error will be given in Studio Pro or in the logs of deployment in the (Mendix) cloud:

{{< figure src="/attachments/refguide8/runtime/data-storage/uniqueness-constraint-migration/startup-error-assoc.png" >}}

We enforce this new stricter association on existing data in order to avoid easily overlooked mistakes that result in returning only a single address per person (where in fact they still have multiple addresses in the database). The Mendix Platform consistently returned the same address each run, but other addresses would be dormant entries in the database.

## 4 Help with Migration

To help with migrating your old data, Mendix has developed a migration toolkit. For details on this, please contact [Mendix Support](http://support.mendix.com).
