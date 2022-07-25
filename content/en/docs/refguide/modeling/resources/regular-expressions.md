---
title: "Regular Expressions"
url: /refguide/regular-expressions/
weight: 70
tags: ["studio pro", "regular expressions", "regular expression"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A regular expression resource document is used in the [validation rules](/refguide/validation-rules/) of an entity to describe a set of criteria that a string must match.

A regular expression has the properties described below.

## 2 Common

### 2.1 Name

The name can be used to refer to the regular expression from a [validation rule](/refguide/validation-rules/) of an entity.

### 2.2 Documentation

This is for documentation purpose only; it is not visible in the end-user application that you are modeling.

## 3 Expression{#expression}

The expression defines the criteria that a string should be checked against in a [formal, internationally standardized regular expression language](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html).

{{% alert color="info" %}}

For example, an expression for checking the Dutch post code could be: `[1-9][0-9][0-9][0-9] ?[A-Za-z][A-Za-z]`.

Here are two post code examples: **3072AP** and **7500 AH**.

These are the criteria:

* The first character is a digit in the range 1 to 9
* The second, third and fourth characters are digits in the range 0 to 9
* The last two characters are letters, as expressed by the last two subexpression [A-Za-z], which indicate that the last two characters should be in the range A-Z or the range a-z
* Between the digits and the letters there can be a space, as expressed by the subexpression which consists of a space and a question mark; the question mark indicates that the space is optional

{{% /alert %}}

The following sections give a summary of regular expressions that can be used in Mendix. This description also applies to regular expression strings used in functions such as *isMatch()*.

### 3.1 Subexpressions

A regular expression consists of a sequence of subexpressions. A string matches a regular expression if all parts of the string match these subexpressions in the same order.

A regular expression can contain the following types of subexpressions:

* `[ ]` – a bracket expression matches a single character that is indicated within the brackets, for example:
	* `[abc]` matches "_a_", "_b_", or "_c_"
	* `[a-z]` specifies a range which matches any lowercase letter from "_a_" to "_z_"

	{{% alert color="info" %}}These forms can be mixed: `[abcx-z]` matches "_a_", "_b_", "_c_", "_x_", "_y_", or "_z_", and is equivalent to `[a-cx-z]`. The `-` character is treated as a literal character if it is the last or the first character within the brackets, or if it is escaped with a backslash (`\`).
	{{% /alert %}}

* `[^ ]` – matches a single character that is NOT contained within the brackets, for example:
	* `[^abc]` matches any character other than "a", "b", or "c"
	* `[^a-z]` matches any single character that is not a lowercase letter from "a" to "z"

	{{% alert color="info" %}}As above, literal characters and ranges can be mixed.
	{{% /alert %}}

* `{m,n}` – matches the preceding element at least _m_ and not more than _n_ times, for example:
	
	* `a{3,5}` matches only "_aaa_", "_aaaa_", and "_aaaaa_"
* `{n}` – matches the preceding element exactly n times, for example:
	
	* `[1-9][0-9]{3} ?[A-Za-z]{2}` is an alternative way to write the expression for checking the Dutch post code in the example above
* `.` – a dot matches any single character; if you want to match a dot, you can escape it by prefixing it with a `\` (backslash)
* A literal character – this is a character that does not have a special meaning in the regular expression language and it matches itself; this is effectively any character except `\[](){}^-$?*+|.`, for example:
	* The *`space`* in the Dutch post code example is a literal character that just matches itself

	{{% alert color="info" %}}If you need to match one of the characters which is not a literal, prefix it with a backslash (`\`).
	{{% /alert %}}

* `\w` – a word: a letter, digit, or underscore; `\w` is an abbreviation for `[A-Za-z0-9_]`
* `\d` – a digit" an abbreviation for `[0-9]`

### 3.2 Quantifiers

The number of times that a subexpression may occur in a string is indicated by a quantifier after the subexpression. If no quantifier is present, the subexpression must occur exactly once.

The following quantifiers can be used:

| Quantifier | Description  |
| --- | --- |
| ? | The preceding sub-expression should occur not or once. |
| * | The preceding sub-expression occurs any number of times. |
| + | The preceding sub-expression should occur once or more. |
|   | No quantifier means that the preceding sub-expression should occur exactly once. |

## 4 Read More

* [Class Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html#matches-java.lang.String-java.lang.CharSequence-) – information from the Oracle Java SE documentation
* [Using Regular Expressions in Java](http://www.regular-expressions.info/java.html)  – information about regular expressions in Java from the *Regular-Expressions.info* website
