---
title: "Persistability"
url: /refguide8/persistability/
weight: 20
tags: ["domain model", "entity", "persistability", "persistable", "non-persistable"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/persistability.pdf).
{{% /alert %}}

## 1 Introduction

The **Persistable** property of an entity in the domain model defines whether an object can be committed to the database.

Persistable entities are colored blue in the domain model. Non-persistable entities are colored orange. The **Customer** entity in the image below is persistable, while **ProductQueryResults** is non-persistable.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/persistability/persistable-vs-non-persistable.png" alt="Picture of a persistable and a non-persistable entity" >}}

## 2 Persistable Entities {#persistable}

When an entity is declared persistable, a database table is created for the entity.

Committing an object of this entity type results in a row being inserted into the table. The attribute and association values for the object are saved in the database as well.

### 2.1 Autocommitted Objects

Usually, a rollback reverts changes in memory since the last commit.

However, performing a rollback on persistable autocommitted objects or objects with the state "NEW" deletes the row corresponding with this object from the database table for the associated entity. See [Object Activities](/refguide8/object-activities/) for more information about autocommitted objects.

## 3 Non-Persistable Entities {#non-persistable}

Non-persistable entities are stored in the runtime memory and never get committed to the database. Therefore, they have no table in the database.

Committing non-persistable entities records the current attribute values and association values in memory, allowing a rollback to revert to these values.
