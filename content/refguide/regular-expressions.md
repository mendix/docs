---
title: "Regular Expressions"
category: "Desktop Modeler"
---


A regular expression describes a set of criteria that a string can match. In the [validation rules](validation-rules) of an entity a regular expression can be used to validate whether an attribute of type String matches these criteria.

A regular expression has the following properties.

## Common

### Name

The name can be used to refer to the regular expression from a [validation rule](validation-rules) of an entity.

### Documentation

This is for documentation purpose only; it is not visible in the end-user application that you are modeling.

## Expression

The expression defines the criteria that a string should be checked against in a [formal, internationally standardized regular expression language](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html).

{{% alert type="info" %}}

For example, an expression for checking the Dutch postcode could be: [1-9][0-9][0-9][0-9] ?[A-Za-z][A-Za-z]

Examples: **3072AP** and **7500 AH**

The criteria are:

*   The first character is a digit in the range 1 to 9.
*   The second, third and fourth characters are digits in the range 0 to 9.
*   The last two characters are letters, as expressed by the last two subexpression [A-Za-z], which indicate that the last two characters should be in the range A-Z or the range a-z.
*   Between the digits and the letters there can be a space, as expressed by the subexpression which consists of a space and a question mark. The question mark indicates that the space is optional.

{{% /alert %}}

### Subexpressions

A regular expression consists of a sequence of subexpressions. A string matches a regular expression if all parts of the string match these subexpressions in the same order.

A regular expression can contain the following types of subexpressions:

* `[ ]` – a bracket expression matches a single character that is indicated within the brackets. For example:

    * `[abc]` matches "_a_", "_b_", or "_c_"

    * `[a-z]` specifies a range which matches any lowercase letter from "_a_" to "_z_"

        These forms can be mixed: `[abcx-z]` matches "_a_", "_b_", "_c_", "_x_", "_y_", or "_z_", and is equivalent to `[a-cx-z]`

        The `-` character is treated as a literal character if it is the last or the first character within the brackets, or if it is escaped with a backslash (`\`)

* `[^ ]` – matches a single character that is **not** contained within the brackets. For example:

    * `[^abc]` matches any character other than "a", "b", or "c"

    * `[^a-z]` matches any single character that is not a lowercase letter from "a" to "z"
    
        As above, literal characters and ranges can be mixed

* `{m,n}` – matches the preceding element at least _m_ and not more than _n_ times. For example:

    * `a{3,5}` matches only "_aaa_", "_aaaa_", and "_aaaaa_"

* `{n}` – matches the preceding element exactly n times. For example:

    * `[0-9]{4} ?[a-zA-Z]{2}` is an alternative way to write the expression for checking the Dutch postcode in the example above

* `.` – a dot matches any single character. If you want to match a dot, you can escape it by prefixing it with a `\` (backslash)

* A literal character – this is a character that does not have a special meaning in the regular expression language and it matches itself. This is effectively any character except `\[](){}^-$?*+|.`. For example:

    * *`space`* in the Dutch zip code example is a literal character that just matches itself

    If you need to match one of the characters which is not a literal, prefix it with a backslash (`\`).

* `\w` – a word: a letter, digit, or underscore. `\w` is an abbreviation for `[A-Za-z0-9_]`

* `\d` – a digit" an abbreviation for `[0-9]`

### Quantifiers

The number of times that a subexpression may occur in a string is indicated by a quantifier after the subexpression. If no quantifier is present, the subexpression must occur exactly once.

The following quantifiers can be used:

| Quantifier | Description  |
| --- | --- |
| ? | The preceding subexpression should occur not or once. |
| * | The preceding subexpression occurs any number of times. |
| + | The preceding subexpression should occur once or more. |
|   | No quantifier means that the preceding subexpression should occur exactly once. |

## **Read More**

* [https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html#matches-java.lang.String-java.lang.CharSequence-](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html#matches-java.lang.String-java.lang.CharSequence-)
* [http://www.regular-expressions.info/java.html](http://www.regular-expressions.info/java.html)
