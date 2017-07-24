---
title: "XPath not"
parent: "xpath-constraint-functions"
---
The not() function inverts the meaning (and as such; the result) of the argument.

```
//Sales.Customer[not(Name = 'Jansen')]

```

This query returns all customers whose names is _not_ equal to 'Jansen'.

This query returns the same result as:

```
//Sales.Customer[Name != 'Jansen']

```

```
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]

```

This query returns all customers who have not placed at least one order.

```
//Sales.Customer[not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]

```

This query returns all customers who have not placed any orders and those that have not placed orders with a total value of more than 30,000 euros.

This query does not return the same result as:

```
//Sales.Customer[Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]

```

This query will also return all customers that have not placed any orders worth more than 30,000 euros. However, only customers that have placed at least one order will be retrieved! Customers without any orders will be excluded.

