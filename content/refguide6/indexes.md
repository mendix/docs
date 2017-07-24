---
title: "Indexes"
parent: "entities"
---


Indexes are lists of attributes for which a database index is created on the underlying database table of the entity. Indexes improve the speed of retrieving objects if the indexed attributes are used in a search field or XPath constraint of a data grid or template grid, or in a WHERE clause of an OQL query. However, search fields of which the Comparison property has value 'Contains' do not take advantage of the improved performance.

Indexes are ordered. This means that when creating an index on two or more attributes, it is important to consider the order of the attributes. When performing a search or query on multiple attributes, these attributes should be in the same order as those in the index to take advantage of the improved performance. By extension, when the retrieval is constrained by only one attribute, the improved performance is only achieved if this is the first attribute in the index.

{{% alert type="warning" %}}

Only persistable entities can define indexes as they are database concepts. Indexes are disabled for non-persistable entities.

{{% /alert %}}{{% alert type="warning" %}}

Changing and deleting objects of an entity with indexes takes longer, because the index needs to be updated in addition to the actual data. Therefore, for attributes which are seldomly used as criteria in a search or query, only create an index if the increase in retrieval performance justifies the decrease in update performance.

{{% /alert %}}{{% alert type="info" %}}

Customers are usually retrieved by a combination of zipcode and housenumber, so _one_ index is set on the combination of the attributes.

![](attachments/819203/917548.png)

The objects are retrieved by the following OQL query. Pay attention to the order of the attributes in the WHERE clause.

{% highlight sql %}
FROM Module.Customer AS c
WHERE c.zipcode = $ParameterZipCode AND c.housenumber = $ParameterHouseNumber
SELECT c.name AS CustomerName{% endhighlight %}

{{% /alert %}}
