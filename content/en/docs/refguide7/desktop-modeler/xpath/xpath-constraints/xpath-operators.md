---
title: "XPath Operators"
url: /refguide7/xpath-operators/
---

## 1 For XPath Query Constraints

The following operators can be used in XPath query constraints, both in the Modeler and in Java code:

| Operator | Description | Example | Return value |
| --- | --- | --- | --- |
| `=` | Equal to | `price = 9.80` | true if price is 9.80, false if price is 9.90 |
| `!=` | Not equal to | `price != 9.80` | true if price is 9.90, false if price is 9.80 |
| `<` | Less than | `price < 9.80` | true if price is 9.70, false if price is 9.80 |
| `<=` | Less than or equal to | `price <= 9.80` | true if price is 9.80, false if price is 9.90 |
| `>` | Greater than | `price > 9.80` | true if price is 9.90, false if price is 9.80 |
| `>=` | Greater than or equal to | `price >= 9.80` | true if price is 9.80, false if price is 9.70 |
| `or` | Or | `price = 9.80 or price = 9.70` | true if price is 9.80, false if price is 9.60 |
| `and` | And | `price = 9.80 and amount = 1` | true if price is 9.80 and amount is 1, false if price is 9.70 and amount is 1, false if price is 9.80 and amount is 2, false if price is 9.70 and amount is 2 |

## 2 For Java Code

Additionally, the following operators are supported in Java code only:

| Operator | Description | Example | Return value |
| --- | --- | --- | --- |
| `+ ` | Addition | `6 + 4` | 10 |
| `-` | Subtraction | `6 - 4` | 2 |
| `*` | Multiplication | `6 * 4` | 24 |
| `div` | Division | `8 div 4` | 2 |

## 3 Operator Behavior

The behavior of operators may differ based on the database type used for your Mendix application. The Mendix runtime generates a SQL query for the XPath you have configured. This query can be interpreted differently by different database types. For example, HSQLDB will ignore trailing spaces when using the = operator, whereas PostgreSQL will take those into consideration.
