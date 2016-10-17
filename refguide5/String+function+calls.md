---
title: "String function calls"
category: "refguide5"
space: "Reference Guide 5"
---


These are functions to convert and inspect strings. Note that these functions never change the string itself, they only return a new value.

Strings are surrounded by quotes. If the string contains a quote, it should be escaped by another quote.
_Example_: 'this isn''t funny'

## toLowerCase

Set all characters in the string to lowercase.

### Input parameters

*   String to convert
    Type: String

### Output

Same string, only all lowercase.

<div class="alert alert-info">{% markdown %}

```java
toLowerCase('thisISmyString')

```

returns:

```java
'thisismystring'

```

{% endmarkdown %}</div>

## toUpperCase

Set all characters in the string to uppercase.

### Input parameters

*   String to convert
    Type: String

### Output

Same string, only all uppercase.

<div class="alert alert-info">{% markdown %}

```java
toUpperCase('thisISmyString')

```

returns:

```java
'THISISMYSTRING'

```

{% endmarkdown %}</div>

## length

Determines the length of a string.

### Input parameters

*   a string
    Type: String

### Output

Length of the string
Type: Integer

<div class="alert alert-info">{% markdown %}

```java
length('thisismystring')

```

returns:

```java
14

```

{% endmarkdown %}</div>

## substring

Retrieve a substring of a string. Note that the first character of a string is located at position '0', and the last character is located at position length(string)-1

### Input parameters

*   Subject
    Type: String
*   Start position of the substring
    Type: Integer
*   (Optional) Desired length of the result
    Type: Integer

### Output

A part of the original string, starting at start position with length equal to the desired length. If no desired length is specified, will return a substring starting at start position and ending at the end of the string.
Type: String

<div class="alert alert-info">{% markdown %}

```java
substring('thisismystring', 6)

```

returns:

```java
'mystring'

```

or, with a third parameter:

```java
substring('thisismystring', 6,2)

```

returns:

```java
'my'

```

{% endmarkdown %}</div>

## find

Find the position of the first occurrence of the substring in the string.

### Input parameters

*   Original string. This is the string that you want to search _in_.
    Type: String
*   Substring that you want to search _for_.
    Type: String
*   (Optional) Start location to begin search from
    Type: Integer

### Output

The first location of the substring in the original string. Will return '-1' if the substring does not occur at all in the original string.
Type: Integer

<div class="alert alert-info">{% markdown %}

```java
find('thisismystring', 'my')

```

returns:

```java
6

```

Substring that doesn't occur in the original string:

```java
find('thisismystring', 'yourstring')

```

returns:

```java
-1

```

With third parameter:

```java
find('thisismystring', 'i', 5)

```

returns:

```java
11

```

{% endmarkdown %}</div>

## findLast

Find the position of the last occurrence of substring in the original string.

### Input parameters

*   Original string. This is the string that you want to search _in_.
    Type: String
*   Substring that you want to search _for_.
    Type: String
*   (Optional) Last location to be searched
    Type: Integer

### Output

The first location of the substring in the original string. Will return '-1' if the substring does not occur at all in the original string.
Type: Integer

<div class="alert alert-info">{% markdown %}

```java
findLast('thisismystring', 't')

```

returns:

```java
9

```

Substring that doesn't occur in the original string:

```java
findLast('thisismystring', 'yourstring')

```

returns:

```java
-1

```

With third parameter:

```java
findLast('thisismystring', 'i', 5)

```

returns:

```java
4

```

{% endmarkdown %}</div>

## contains

Determines whether a substring occurs in the original string.
(Functionally, this method matches the statement find('mystring', 'otherstring') != -1)

### Input parameters

*   Original string. This is the string that you want to search _in_.
    Type: String
*   Substring that you want to search _for_.
    Type: String

### Output

Whether the original string contains the substring
Type: Boolean

<div class="alert alert-info">{% markdown %}

```java
contains('thisismystring', 'my')

```

returns:

```java
true

```

{% endmarkdown %}</div>

## trim

Removes all whitespace at the beginning and end of a string. (leaves all spaces 'inside' the string)

### Input parameters

*   A string
    Type: String

### Output

Same string but without spaces at the beginning and end.
Type: String

<div class="alert alert-info">{% markdown %}

```java
trim(' this is my string     ')

```

returns:

```java
'this is my string'

```

{% endmarkdown %}</div>

## isMatch

Checks to see if a string matches a given [regular expression](Regular+Expressions)

### Input parameters

*   String to try and match on
    Type: String
*   Regular expression to match
    Type: String

<div class="alert alert-warning">{% markdown %}

This function call uses a regular expression. In isMatch() the regex is implicitly anchored at ^ and $.

**Example**
isMatch('NLG 123.45', '[0-9]') returns false
isMatch('NLG 123.45', '.*[0-9].*') returns true

{% endmarkdown %}</div>

### Output

Whether the string matches or not.
Type: Boolean

<div class="alert alert-info">{% markdown %}

This examples tests to see whether the string contains only numbers

```java
isMatch('234hello6432', '^([0-9]+)$')

```

returns:

```java
False

```

{% endmarkdown %}</div>

## replaceAll

Replaces all occurrences of a regular expression with another string.

### Input parameters

*   The string to search in
    Type: String
*   The regular expression to match on
    Type: String
*   The replacement value
    Type: String

<div class="alert alert-warning">{% markdown %}

Please note that this function call uses a regular expression.

{% endmarkdown %}</div>

### Output

The original string, with all occurrences of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned.

Type: String

<div class="alert alert-info">{% markdown %}

```java
replaceAll('this is a string with 75 some numbers 234 thrown in', '([0-9])', 'NUMBER')

```

returns:

```java
'this is a string with NUMBERNUMBER some numbers NUMBERNUMBERNUMBER thrown in'

```

no matches:

```java
replaceAll('this is a string with no numbers thrown in', '([0-9])', 'NUMBER')

```

returns:

```java
'this is a string with no numbers thrown in'

```

{% endmarkdown %}</div>

## replaceFirst

Replaces the first occurrence of the regular expression with a replacement string.

### Input parameters

*   The string to search in
    Type: String
*   The regular expression to match on
    Type: String
*   The replacement value
    Type: String

<div class="alert alert-warning">{% markdown %}

Please note that this function call uses a regular expression.

{% endmarkdown %}</div>

### Output

The original string, with all occurrences of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned.

Type: String

<div class="alert alert-info">{% markdown %}

```java
replaceFirst('this is a string with 75 some numbers 234 thrown in', '([0-9])', 'NUMBER')

```

returns:

```java
'this is a string with NUMBER5 some numbers 234 thrown in'

```

{% endmarkdown %}</div>

## String concatenation

The + operator can be used to concatenate two strings or a string and a number.

### Input parameters

*   First parameter
    Type: String, Integer/Long, Float or Decimal
*   Second parameter
    Type: String, Integer/Long, Float or Decimal

At least one of the parameters must be of type String.

### Output

A new string that is the literal concatenation of the two input parameters.

Type: String

<div class="alert alert-info">{% markdown %}

To combine two strings:

```java
'foo' + 'bar'
```

returns:

```java
'foobar'
```

To combine a string and a number:

```java
4.73 + ' kilometers'
```

returns:

```java
'4.73 kilometers'
```

{% endmarkdown %}</div>