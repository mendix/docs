---
title: "XPath count"
space: "Mendix 7 Reference Guide"
parent: "xpath-query-functions"
---


The count()-function counts all objects retrieved by the enclosed query and returns the value as an integer.

<div class="alert alert-info">{% markdown %}

```java
count(//Sales.Order)
```

This query returns a count of all placed orders.

```java
count(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen'])
```

This query returns a count of all orders placed by a customer named Jansen.

{% endmarkdown %}</div>
