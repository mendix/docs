---
title: "XPath sum"
space: "Mendix 7 Reference Guide"
parent: "xpath-query-functions"
---


The sum()-function returns the sum of its argument.
This function requires an XPath query as argument. The query must specify an attribute that has a numeric type.

<div class="alert alert-info">{% markdown %}

```java
sum(//Sales.Order/TotalPrice)
```

This query returns the sum of the total prices of all placed orders.

```java
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```

This query returns the sum of the total prices of all orders placed by a customer named Jansen.

{% endmarkdown %}</div>
