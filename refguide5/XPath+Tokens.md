---
title: "XPath Tokens"
parent: "XPath"
space: "Reference Guide 5"
---


The following tokens are used in XPath queries:

<table><thead><tr><th class="confluenceTh">Token</th><th class="confluenceTh">Definition</th></tr></thead><tbody><tr><td class="confluenceTd">//</td><td class="confluenceTd">A Xpath query always starts with the tokens <em>//</em>. These slashes are followed by the designation of the <a href="Entities">object</a> that is being queried. For example: if you wish to retrieve all Customers the query would resemble the following: <code>//Customers</code></td></tr><tr><td class="confluenceTd">.</td><td class="confluenceTd">The dot is used to separate <a href="Modules">module</a> names from <a href="Entities">entity</a> names. E.g. if you wish to retrieve all the customers (objects) in the sales module you would start the query with: <code>//Sales.Customer</code></td></tr><tr><td class="confluenceTd">/</td><td class="confluenceTd">A slash is used whenever you want to start a new node. E.g. <code>//Sales.Customer/Sales.Customer_Order/Sales.Order</code>. This query follows the path from the <a href="Entities">entity</a> 'Customer' to the entity 'Order' over the <a href="Associations">association</a> 'Customer_Order'. A query can be expanded by slashes and nodes for as long as there are potential associations available in the domain model.</td></tr><tr><td class="confluenceTd">[ ]</td><td class="confluenceTd">A constraint is always written between brackets. E.g. <code>//Sales.Customer[TotalAmount &gt; 1000]</code>. The <a href="Attributes">attribute</a> being constrained is TotalAmount and the constraint is &gt;1000\. Only customers who have spent more than € 1000,- will be retrieved.</td></tr><tr><td class="confluenceTd">( )</td><td class="confluenceTd">Constraints can be grouped by parentheses. See <a href="XPath+Constraints">this page</a> for more information.</td></tr></tbody></table>
