---
title: "Regular Expressions"
category: "Modeler"
---


A regular expression describes a set of criteria that a string can match. In the [validation rules](validation-rules) of an entity a regular expression can be used to validate whether an attribute of type String matches these criteria.

A regular expression has the following properties.

## Common

### Name

The name can be used to refer to the regular expression from a [validation rule](validation-rules) of an entity.

### Documentation

This is for documentation purpose only; it is not visible in the end-user application that you are modeling.

## Expression

The expression defines the criteria that a string should be checked against in a formal, internationally standardized regular expression language.

{{% alert type="info" %}}

Expression: [1-9][0-9][0-9][0-9] ?[A-Za-z][A-Za-z]
Examples (excluding the quotes): "3024EL" and "7500 AH"
Criteria:

*   The first character is a digit in the range 1 to 9.
*   The second, third and fourth characters are digits in the range 0 to 9.
*   The last two characters are letters, as expressed by the last two subexpression [A-Za-z], which indicate that the last two characters should be in the range A-Z or the range a-z.
*   Between the digits and the letters there can be a space, as expressed by the subexpression which consists of a space and a question mark. The question mark indicates that the space occurs never or once.

{{% /alert %}}

### Subexpressions

A regular expression consists of a sequence of subexpressions. A string matches a regular expression if all parts of the string match these subexpressions in the same order.

A regular expression can contain the following types of subexpressions:

<table><thead><tr><th class="confluenceTh">&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</th><th class="confluenceTh">&nbsp;</th></tr></thead><tbody><tr><td class="confluenceTd">[ ]</td><td class="confluenceTd"><p><strong>A bracket expression</strong><br class="atl-forced-newline">Matches a single character that is indicated within the brackets.<br class="atl-forced-newline">Examples:</p><ul><li>[abc] matches "<em>a</em>", "<em>b</em>", or "<em>c</em>".</li><li>[a-z] specifies a range which matches any lowercase letter from "<em>a</em>" to "<em>z</em>".<br class="atl-forced-newline">These forms can be mixed: [abcx-z] matches "<em>a</em>", "<em>b</em>", "<em>c</em>", "<em>x</em>", "<em>y</em>", or "<em>z</em>", and is equivalent to [a-cx-z].&nbsp;<br class="atl-forced-newline">The - character is treated as a literal character if it is the last or the first character within the brackets, or if it is escaped with a backslash \.<br class="atl-forced-newline">In the zip code example above the four bracket expressions [0-9] indicates that the first 4 characters should be digits, and the two bracket expressions [A-Za-z] indicate that the last two characters should be letters.</li></ul></td></tr><tr><td class="confluenceTd">[^ ]</td><td class="confluenceTd">Matches a single character that is not contained within the brackets.<br class="atl-forced-newline">For example, [^abc] matches any character other than "a", "b", or "c". [^a-z] matches any single character that is not a lowercase letter from "a" to "z". As above, literal characters and ranges can be mixed.</td></tr><tr><td class="confluenceTd">{m,n}</td><td class="confluenceTd">Matches the preceding element at least&nbsp;<em>m</em>&nbsp;and not more than&nbsp;<em>n</em>&nbsp;times.<br class="atl-forced-newline">For example,&nbsp;a{3,5}&nbsp;matches only "<em>aaa</em>", "<em>aaaa</em>", and "<em>aaaaa</em>".</td></tr><tr><td class="confluenceTd">{n}</td><td class="confluenceTd">Matches the preceding element exactly n times.<br class="atl-forced-newline">For example, using this construct the expression of the Dutch zip code example above would be:<br class="atl-forced-newline">[0-9]{4} ?[a-zA-Z]{2}</td></tr><tr><td class="confluenceTd">.</td><td class="confluenceTd"><strong>A dot</strong><br class="atl-forced-newline">Matches any single character. If you want to match a dot, you can escape it by prefixing it with a \ (backslash).</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd"><p><strong>A literal character</strong><br class="atl-forced-newline">A character that does not have a special meaning in the regular expression language matches itself.<br class="atl-forced-newline">Example:</p><ul><li>In the Dutch zip code example above the space is such a character that just matches itself.</li></ul></td></tr><tr><td class="confluenceTd">\w</td><td class="confluenceTd"><strong>A word</strong><br class="atl-forced-newline">A letter, digit or underscore.<br class="atl-forced-newline">\w is an abbreviation for [A-Za-z0-9_]</td></tr><tr><td class="confluenceTd">\d</td><td class="confluenceTd"><strong>A digit</strong><br class="atl-forced-newline">\d is an abbreviation for [0-9]</td></tr></tbody></table>

### Quantifiers

The number of times that a subexpression may occur in a string is indicated by a quantifier after the subexpression. If no quantifier is present, the subexpression must occur exactly once.

The following quantifiers can be used:

<table><thead><tr><th class="confluenceTh">&nbsp;</th><th class="confluenceTh">&nbsp;</th></tr></thead><tbody><tr><td class="confluenceTd">?</td><td class="confluenceTd">The preceding subexpression should occur not or once.</td></tr><tr><td class="confluenceTd">*</td><td class="confluenceTd">The preceding subexpression occurs any number of times.</td></tr><tr><td class="confluenceTd">+</td><td class="confluenceTd">The preceding subexpression should occur once or more.</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">No quantifier means that the preceding subexpression should occur exactly once.</td></tr></tbody></table>

## **Read More**

*   [http://www.regular-expressions.info/java.html](http://www.regular-expressions.info/java.html)
