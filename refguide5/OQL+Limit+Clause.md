---
title: "OQL Limit Clause"
category: "refguide5"
space: "Reference Guide 5"
---


With the limit clause a portion of the result of a query can be returned.

The syntax is as following:

```
[ LIMIT number ] [ OFFSET number ]

```

**LIMIT**
Specifies how many rows must be returned.

**OFFSET**
Specifies how many rows must be skipped before returning the result rows.

<div class="alert alert-info">{% markdown %}

```
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10
```

This query retrieves the first ten customers, sorted by their last name.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
OFFSET 10
```

This query retrieves all customers, except the first ten, sorted by their last name.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10 OFFSET 10
```

This query retrieves the 11the to 20the customer, sorted by their last name.

{% endmarkdown %}</div>