---
title: "OQL Case Expression"
url: /refguide8/oql-case-expression/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/oql-case-expression.pdf).
{{% /alert %}}

The CASE expression is a conditional expression, similar to if/else statements in other programming languages. Each condition is an expression that returns a Boolean result. If the condition's result is true, the value of the CASE expression is the result that follows the condition, and the remainder of the CASE expression is not processed. If the condition's result is not true, any subsequent WHEN clauses are examined in the same manner. If no WHEN condition yields true, the value of the CASE expression is the result of the ELSE clause. If the ELSE clause is omitted and no condition is true, the result is null.

The CASE expression can be used on two manners:

_Simple_

```
CASE input_expression
WHEN when_expression THEN result_expression [ ...n ]
ELSE else_result_expression
END
```

_Extended_

```
CASE
WHEN boolean_expression THEN result_expression [ ...n ] 
ELSE else_result_expression
END
```

**input_expression**
The expression that will be compared to the when_expression. If the input_expression matches the when_expression, the result of the whole CASE expression will be the result_expression given after THEN.

**when_expression**
An expression which will be compared to the input_expression. When the input_expression matches this when_expression, the result of the whole CASE expression will be the result_expression given after THEN.

**boolean_expression**
An expression which result must be a Boolean value. When this expression returns true, the result of the whole CASE expression will be the result_expression given after THEN.

**result_expression**
A possible result of the whole CASE expression.

**else_result_expression**
When none of the result_expressions are possible, the result of the whole CASE expression will be this else_result_expression.
