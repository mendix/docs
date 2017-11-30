---
title: "XPath Tokens"
parent: "xpath"
---


The following tokens are used in XPath queries:

| Token | Definition |
| --- | --- |
| // | A Xpath query always starts with the tokens _//_. These slashes are followed by the designation of the [object](entities) that is being queried. For example: if you wish to retrieve all Customers the query would resemble the following: `//Customers` |
| . | The dot is used to separate [module](modules) names from [entity](entities) names. E.g. if you wish to retrieve all the customers (objects) in the sales module you would start the query with: `//Sales.Customer` |
| / | A slash is used whenever you want to start a new node. E.g. `//Sales.Customer/Sales.Customer_Order/Sales.Order`. This query follows the path from the [entity](entities) 'Customer' to the entity 'Order' over the [association](associations) 'Customer_Order'. A query can be expanded by slashes and nodes for as long as there are potential associations available in the domain model. |
| [ ] | A constraint is always written between brackets. E.g. `//Sales.Customer[TotalAmount > 1000]`. The [attribute](attributes) being constrained is TotalAmount and the constraint is >1000\. Only customers who have spent more than € 1000,- will be retrieved. |
| ( ) | Constraints can be grouped by parentheses. See [this page](xpath-constraints) for more information. |
