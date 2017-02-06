---
title: "XPath min"
category: "refguide4"
space: "Reference Guide 4"
---
The min()-function returns the minimum value of its argument.
This function requires an XPath query as argument. The query must specify one attribute of type Long, Integer, Float or Currency.

<div class="alert alert-info">{% markdown %}

```
min(//Sales.Order/TotalPrice)

```

This query returns the lowest total price found in any object.

```
min(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)

```

This query returns the lowest total price of an order placed by a customer named Jansen.

{% endmarkdown %}</div>