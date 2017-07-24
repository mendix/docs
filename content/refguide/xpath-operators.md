---
title: "XPath Operators"
parent: "xpath-constraints"
---


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

Additionally, the following operators are supported in Java code only:

| Operator | Description | Example | Return value |
| --- | --- | --- | --- |
| `+ ` | Addition | `6 + 4` | 10 |
| `-` | Subtraction | `6 - 4` | 2 |
| `*` | Multiplication | `6 * 4` | 24 |
| `div` | Division | `8 div 4` | 2 |
