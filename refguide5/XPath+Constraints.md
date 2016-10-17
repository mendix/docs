---
title: "XPath Constraints"
category: "refguide5"
space: "Reference Guide 5"
---


A constraint can be added to any Xpath query to modulate the data retrieved. It should always take the form of a valid [expression](XPath+Expressions). This should consist of one or more variables combined with [operators](XPath+Operators), [functions](XPath+Constraint+Functions), [keywords or system variables](XPath+Keywords+and+System+Variables).

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Name = 'Jansen']

```

This query retrieves all customers whose name is equal to Jansen.

{% endmarkdown %}</div>

The first half of the query is responsible for defining the entity to retrieve and the second half, between brackets, _constrains_ the data to a certain attribute. Note that the constraint is (and should always be) enclosed by brackets.

Multiple constraints can be added to a single query, this is true for all queries with the exception of the id-query. This is most commonly done by the simple expedient of opening a new set of brackets after closing the first.

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Name = 'Jansen'][Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

This query retrieves all customers whose name is equal to Jansen and who live in Rotterdam.

{% endmarkdown %}</div>

It is also possible to combine constraints with an 'and' or 'or' [operator](XPath+Operators).

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

This query retrieves all customers whose names equal to Jansen and who live in Rotterdam.

```
//Sales.Customer[Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

This query retrieves all customers whose name is Jansen or who live in Rotterdam.

{% endmarkdown %}</div>

With parentheses, constraints can be grouped to define priorities.

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer
[( Name = 'Jansen' or Name = 'Smit' )
and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
```

This query retrieves all customers who are not only named Jansen or Smit, but also live in Rotterdam.

{% endmarkdown %}</div>

In some cases it might also be useful do define subconstraints to restrict the data that is being constrained by. This is easily achieved by adding a subconstraint within the brackets of the original constraint. Do not confuse this with two separate constraints, the subconstraint only applies to the metaconstraint, not the actual query. As such, the brackets are not opened and closed one after the other; the subconstraint should be entirely within the metaconstraint. In sufficiently complicated queries this can result in confusion regarding where one constraint ends and the other begins. Make sure you keep careful track of bracket sets to prevent this from happening.

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'Rotterdam' or City = 'Losdun']]
```

This query retrieves all customers who live in Rotterdam or Losdun.

```
//Sales.Customer
[Sales.Customer_Address/Sales.Address
[City = 'New Amsterdam']
/Sales.Adress_Country/Sales.Country/Name = 'Guyana']

```

This query retrieves all customers who live in New Amsterdam, Guyana (as opposed to those that live in, for example, New Amsterdam, Indiana).

{% endmarkdown %}</div><div class="alert alert-warning">{% markdown %}

Avoid the use of the same path more than once in a single constraint. For instance; the example on Rotterdam and Losdun could also be established as seen below:

```
//Sales.Customer[Sales.Customer_Address/Sales.Address/City = 'Rotterdam'
    or Sales.Customer_Address/Sales.Address/City = 'Losdun']
```

However, this query is executed inefficiently and significantly slows down the query process.

{% endmarkdown %}</div>