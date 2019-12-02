---
title: "XPath Tokens"
parent: "xpath"
tags: ["studio pro"]
---


The following tokens are used in XPath queries:

| Token | Definition |
| --- | --- |
| `//` | A XPath query always starts with the tokens `//`. These slashes are followed by the designation of the [object](entities) that is being queried. For example, if you wish to retrieve all customers, the query would resemble the following: `//Customers`. |
| `.` | The dot is used to separate [module](modules) names from [entity](entities) names. For example, if you wish to retrieve all the customers (objects) in the sales module, you would start the query with `//Sales.Customer`. |
| `/` | A slash is used whenever you want to refer to a new entity or association. For example, `//Sales.Customer/Sales.Customer_Order/Sales.Order`. This query follows the path from the [entity](entities) `Customer` to the entity `Order` over the [association](associations) `Customer_Order`. A query can be expanded by slashes and entities or associations for as long as there are potential associations available in the domain model. |
| `[ ]` | A constraint is always written between brackets. For example, `//Sales.Customer[TotalAmount > 1000]`. The [attribute](attributes) being constrained is `TotalAmount`, and the constraint is `> 1000`. Therefore, only customers who have spent more than € 1000 will be retrieved. |
| `( )` | Constraints can be grouped by parentheses. For more information, see [XPath Constraints](xpath-constraints). |

System variables are tokens whose values can be used in XPath expressions. For a complete overview of these tokens, see [XPath Keywords & System Variables](/refguide/xpath-keywords-and-system-variables).
