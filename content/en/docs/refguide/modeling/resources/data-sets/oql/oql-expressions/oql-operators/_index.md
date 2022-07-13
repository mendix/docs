---
title: "OQL Operators"
url: /refguide/oql-operators/
tags: ["studio pro"]
---


The following operators can be used in OQL expressions:

| Operator | Description | Example |
| --- | --- | --- |
| `+ ` | Addition | `6 + 4` returns 10. |
| `-` | Subtraction | `6 - 4` returns 2. |
| `*` | Multiplication | `6 * 4` returns 24. |
| `:` | Division | `8 : 4` returns 2. |
| `%` | Modulo | `8 % 3` returns 2. |
| `=` | Equal to | `Price = 9.80` returns true if price is 9.80, false if price is 9.90. |
| `!=` | Not equal to | `Price != 9.80` returns true if price is 9.90, false if price is 9.80. |
| `<` | Less than | `Price < 9.80` returns true if price is 9.70, false if price is 9.80. |
| `<=` | Less than or equal to | `Price <= 9.80` returns true if price is 9.80, false if price is 9.90. |
| `>` | Greater than | `Price > 9.80` returns true if price is 9.90, false if price is 9.80. |
| `>=` | Greater than or equal to | `Price >= 9.80` returns true if price is 9.80, false if price is 9.70. |
| `LIKE` | Matches the pattern after the operator. The wildcard character '%' can be used to define any string of zero or more characters. In order to search for special characters like `%`, `_`, and `\`, they should be escaped with the `\` escape character. | `City LIKE '%dun'` returns all the cities with names that end with 'dun', like 'dun' and 'Losdun'.<br> `Symbol LIKE '%\%'` returns all the symbols that end with the `%` special character.|
| `IN` | Matches any value in a subquery or a list of expression values. | `City IN (SELECT Name FROM City WHERE Country = 'Gelre')` `City IN ('Losdun', 'Die Haghe', 'Haagambacht')` |
| `EXISTS` | Test for the existance of any rows when executing the subquery. | `EXISTS (SELECT ID FROM City WHERE City = 'Losdun')` Returns true if object exists |
| `NOT` | Reverses the value of the expression following this keyword. | `NOT City = 'Rotterdam'` returns all objects not in Rotterdam. |
| `CASE` | Evaluates one or more conditions and returns a possible expression. | See [OQL Case Expressions](/refguide/oql-case-expression/). |
| `OR` | Returns true if one or both expressions around this operator return true.  | `price = 9.80 OR price = 9.70` returns true if price is 9.80, false if price is 9.60. |
| `AND` | Returns true if expressions on both sides return true.  | `price = 9.80 AND amount = 1` returns true if price is 9.80 and amount is 1, false if price is 9.70 and amount is 1, false if price is 9.80 and amount is 2. |
