---
title: "Indexes"
url: /refguide8/indexes/
weight: 60
tags: ["domain model", "entity", "attribute", "index", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/indexes.pdf).
{{% /alert %}}

## 1 Introduction

**Indexes** are lists of attributes for which a database index is created on the underlying database table of the entity. Indexes improve the speed of retrieving objects if the indexed attributes are used in a search field, the XPath constraint of a data grid or template grid, or a `WHERE` clause of an OQL query. However, search fields where the `Comparison` property has value `Contains` do not take advantage of the improved performance.

Indexes can be added and edited from the **Indexes** tab of the entity properties.

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/indexes/index-properties.png" alt="Example of index tab" >}}

{{% alert color="info" %}}
Index properties are read-only for external entities. For further details, see [External Entities](/refguide8/external-entities/).
{{% /alert %}}

## 2 Important Considerations

### 2.1 Order of Attributes

Indexes are ordered, which means that when you create an index on two or more attributes it is important to consider the order of the attributes. To take advantage of the improved performance when searching or querying on multiple attributes, these attributes should be in the same order as those in the index. By extension, when the retrieval is constrained by only one attribute, the improved performance is only achieved if this is the first attribute in the index.

### 2.2 Indexes on System Members

If you choose to store an entity's `owner` and `changedBy` system members, an index is created. This is not so for the `createdDate` and `changedDate` system members. In addition, an index is created for the automatically generated attribute `id`. See [Domain Model](/refguide8/domain-model/) for more information about the implementation of these attributes.

### 2.3 Indexes on Non-Persistable Entities

You can only define indexes for persistable entities as indexes are a database concept. Consequently, indexes are disabled for non-persistable entities.

### 2.4 Performance Considerations

Changing and deleting objects of an entity with indexes takes longer, because the index needs to be updated in addition to the actual data. Therefore, for attributes that are rarely used as criteria in a search or query, only create an index if the increase in retrieval performance justifies the decrease in update performance.

## 3 Example

Customers are usually retrieved by a combination of ZIP code and house number. So, *one* index is set on the combination of the attributes:

{{< figure src="/attachments/refguide8/modeling/domain-model/entities/indexes/customer-index-example.png" >}}

The objects are retrieved by the following OQL query – note that the order of the attributes in the `WHERE` clause is the same as the order of the attributes for the index:

```sql
FROM Module.Customer AS c
WHERE c.zipcode = $ParameterZipCode AND c.housenumber = $ParameterHouseNumber
SELECT c.name AS CustomerName
```
