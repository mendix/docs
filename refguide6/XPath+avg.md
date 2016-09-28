---
title: "XPath avg"
parent: "XPath+Query+Functions"
---


The avg()-function returns the average of its argument.
This function requires an XPath query as argument. The query must specify an attribute that has a numeric type.

<div class="alert alert-info">{% markdown %}

```java
avg(//Sales.Order/TotalPrice)
```

This query returns the average total price of all placed orders.

```java
avg(//Sales.Order[Sales.Customer_Order/Sales.Customer = 'Jansen']/TotalPrice)
```

This query returns the average total price of all orders placed by a customer named Jansen.

{% endmarkdown %}</div>
