---
title: "XPath min"
space: "Mendix 7 Reference Guide"
parent: "xpath-query-functions"
---


The min()-function returns the minimum value of its argument.
This function requires an XPath query as argument. The query must specify an attribute that has a numeric type.

<div class="alert alert-info">{% markdown %}

```java
min(//Sales.Order/TotalPrice)
```

This query returns the lowest total price found in any object.

```java
min(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```

This query returns the lowest total price of an order placed by a customer named Jansen.

{% endmarkdown %}</div>
