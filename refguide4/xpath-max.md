---
title: "XPath max"
category: "refguide4"
space: "Reference Guide 4"
---
The max()-function returns the maximum value of its argument.
This function requires an XPath query as argument. The query must specify one attribute of type Long, Integer, Float or Currency.

<div class="alert alert-info">{% markdown %}

```
max(//Sales.Order/TotalPrice)

```

This query returns the highest total price found in any object.

```
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)

```

This query returns the highest total price of an order placed by a customer named Jansen.

{% endmarkdown %}</div>