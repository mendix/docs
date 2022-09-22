---
title: "Uniqueness Constraint Migration"
url: /refguide7/uniqueness-constraint-migration/
weight: 30
---

## 1 Introduction

To ease the development and deployment improvements of an application, data validation was handled in the Mendix Runtime before Mendix 7. This meant that older data could remain in the database unchanged, even if newer versions of your domain model would add more strict validation rules.

Mendix 7 focuses on stateless clustering, a higher number of concurrent users, and above load applications. For efficiency reasons, some data validation will be handled by the application database. This means that data in your database will always have to comply with your validation rules, even if you make these validations more strict after the data has been created.

This document outlines the impact of these changes on your projects. We will also discuss how you can migrate your existing data when you are deploying changes to your domain model validations. Finally, even if you are not making changes to your application, data you already have may be incompatible with your current validation rules. This document will discuss how you can ensure your existing data complies with your existing project model so that you can deploy in Mendix 7 with database constraints.

The following rules will also be validated in the database as of Mendix 7:

* Unique rules on entity attributes
* The "many" side of one-to-many associations, and both sides of one-to-one associations

A migration toolkit is available to help you fix any inconsistencies between data in your database and validation rules defined in your model.

## 2 Unique Attributes

In previous versions of Mendix, you could change an entity and add a unique validation rule on an attribute without affecting the current data. For example, you could indicate in your domain model that an insurance number should be unique for a person in the database because you wanted to use it to uniquely identify someone.

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/attr-uniq-validation-rule.PNG" >}}

Applying the validation rule did not affect persons that were already stored in the database before you deployed a new version of the app with a stricter data model. The insurance number would be checked for uniqueness only for new persons as compared to other persons.

The advantage of this was that the stricter model did not affect the current data, but the disadvantage was that it was easy to make mistakes and wrong assumptions about the unique data in the database. For example, logic in a microflow could depend on unique insurance numbers, and the presence of old data with duplicate insurance numbers could easily be overlooked.

In a future version of Mendix 7, we will not allow this situation anymore. As a transition, we are providing a Runtime setting that, if set to **Database**, will enforce the unique validation rules on a database level.

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/uniqueness-validation-setting.PNG" >}}

We highly recommend setting this radio button to **Database**. This will prepare your app for future versions of Mendix. If the radio button remains set to **Runtime**, a deprecation warning will appear:

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/deprecation-warning.PNG" >}}

The effect of selecting **Database** is that when you deploy a model with unique validation rules on attributes (existing rules or new rules), all the existing objects for the affected entity will be checked for the uniqueness of the attribute. If there are multiple persons with the same insurance number, an error will be shown on deployment if you deploy from the Modeler. If you deploy the app in the Mendix cloud, the app will not start and errors will be written to the logs.

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/modeler-startup-error.PNG" >}}

However, with the database uniqueness validation option enabled, defining the unique validation rules on specialized attributes in a specialization entity is not allowed.

For any specialized attribute with a unique validation rule defined in the specialization, the appropriate consistency error is reported, as in this image:

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/unique-validation-rule-unresolved.png" >}}

These unique validation related inconcistency errors may be simply resolved by moving unique validation rules of specialized attributes to a generalization entity.

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/unique-validation-rule-resolved.png" >}}

## 3 Unique Associations

A comparable situation occurs for associations. Consider the following example:

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/one-to-many-assoc.PNG" >}}

Initially, the domain model contains a one-to-many association between **Address** and **Person**. This means that a Person can have multiple addresses. After some time, the data structure is changed, because logic has been added to the app that only allows one Address per Person. Proper data modeling prescribes changing the association into a one-to-one association. New data will reflect the updated association properly.

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/one-to-one-assoc.PNG" >}}

From Mendix 7.3, we enforce that existing association data in the database also adheres to the updated one-to-one association. This is checked at deployment as well. If a person has multiple addresses, the model will not deploy, and an error will be given in the Modeler or in the logs of deployment in the (Mendix) cloud:

{{< figure src="/attachments/refguide7/runtime/data-storage/uniqueness-constraint-migration/modeler-startup-error-assoc.PNG" >}}

We enforce this new stricter association on existing data in order to avoid easily overlooked mistakes that result in returning only a single address per person (where in fact they still have multiple addresses in the database). The Mendix Platform consistently returned the same address each run, but other addresses would be dormant entries in the database.

## 4 Help with Migration

To help with migrating your old data, Mendix has developed a migration toolkit for Mendix 6 and Mendix 7.

{{% alert color="warning" %}}
The MigrationToolkit is designed for applications using PostgreSQL databases only.
{{% /alert %}}

For more details, contact [Mendix Support](http://support.mendix.com).
