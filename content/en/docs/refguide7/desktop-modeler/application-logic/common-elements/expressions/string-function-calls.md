---
title: "String Function Calls"
url: /refguide7/string-function-calls/
description: "Describes the functions for converting and inspecting strings in Mendix."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

These are functions to convert and inspect [strings](/refguide7/data-types/). Note that these functions never change the string itself, they only return a new value.

Strings are surrounded by quotes. If the string contains a quote, it should be escaped by another quote. For example: `'this isn''t funny'`.

## 2 toLowerCase

Converts all characters in the string to lowercase.

### 2.1 Input Parameters

* String to convert
* Type: string

### 2.2 Output

Same string, only all lowercase.

```java
toLowerCase('thisISmyString')
```

returns:

```java
'thisismystring'
```

## 3 toUpperCase

Converts all characters in the string to uppercase.

### 3.1 Input Parameters

* String to convert
* Type: string

### 3.2 Output

Same string, only all uppercase.

```java
toUpperCase('thisISmyString')
```

returns:

```java
'THISISMYSTRING'
```

## 4 length

Determines the length of a string.

### 4.1 Input Parameters

* A string
* Type: string

### 4.2 Output

* Length of the string
* Type: integer

```java
length('thisismystring')
```

returns:

```java
14
```

## 5 substring

Retrieves a substring of a string. Note that the first character of a string is located at position `'0'`, and the last character is located at position `length(string)-1`.

### 5.1 Input Parameters

* Subject
   * Type: string
* Start position of the substring
   * Type: integer
* Desired length of the result (optional)
   * Type: integer

### 5.2 Output

A part of the original string, starting at the start position with a length equal to the desired length. It will return a sub-string starting at the start position and ending at the end of the string.

* Type: string

```java
substring('thisismystring', 6)
```

returns:

```java
'mystring'
```

If a third parameter is given, it will limit the returned number of characters to that amount:

```java
substring('thisismystring', 6, 2)
```

returns:

```java
'my'
```

If this third parameter is too big, the function will throw an error saying it is out of range, so make sure to limit it. This is an example with use of the length function:

```java
'substring('thisismystring', 0, min(length('thisismystring') - 1, 20))'
```

## 6 find

Finds the position of the first occurrence of the substring in the string.

### 6.1 Input Parameters

* Original string, the string that you want to search in
    * Type: string
* Substring that you want to search for
    * Type: string
* Start location to begin the search from (optional)
    * Type: integer

### 6.2 Output

The first location of the substring in the original string. Will return `'-1'` if the substring does not occur at all in the original string.

* Type: integer

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

With the third parameter:

```java
find('thisismystring', 'i', 5)
```

returns:

```java
11
```

## 7 findLast

Finds the position of the last occurrence of a substring in the original string.

### 7.1 Input Parameters

* Original string, the string that you want to search in
    * Type: string
* Substring that you want to search for
    * Type: string
* Last location to be searched (optional)
    * Type: integer

### 7.2 Output

The first location of the substring in the original string. Will return `'-1'` if the substring does not occur at all in the original string.

* Type: Integer

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

With the third parameter:

```java
findLast('thisismystring', 'i', 5)
```

returns:

```java
4
```

## 8 contains

Determines whether the original string (first parameter) contains a substring (second parameter).

This expression: 

```java
contains('stringtosearchin', 'stringtosearchfor')
```

is equivalent to the following expression:

```java
find('stringtosearchin', 'stringtosearchfor') != -1
```

Searching for an empty variable or empty string, like this expression where `$param = ''`:

```java
contains('stringtosearchin', $param)
```

will return true.

{{% alert color="warning" %}}
This function is case-senstive.
{{% /alert %}}

### 8.1 Input Parameters

* Original string, the string that you want to search in
    * Type: string
* Substring that you want to search for
    * Type: string

### 8.2 Output

Whether the original string contains the substring.

* Type: Boolean

```java
contains('thisismystring', 'my')
```

returns:

```java
true
```

## 9 startsWith

Determines whether a string starts with the specified substring.

### 9.1 Input Parameters

* Original string, the string that you want to search in
    * Type: string
* Substring that you want to search for
    * Type: string

### 9.2 Output

Whether the original string starts with the substring.

* Type: Boolean

```java
startsWith('thisismystring', 'this')
```

returns:

```java
true
```

## 10 endsWith

Determines whether a string ends with the specified substring.

### 10.1 Input Parameters

* Original string, the string that you want to search in
    * Type: string
* Substring that you want to search for
    * Type: string

### 10.2 Output

Whether the original string ends with the substring.

* Type: Boolean

```java
endsWith('thisismystring', 'ring')
```

returns:

```java
true
```

## 11 trim

Removes all the whitespace at the beginning and end of a string.

### 11.1 Input Parameters

* A string
* Type: string

### 11.2 Output

Same string but without spaces at the beginning and end.

* Type: string

```java
trim(' this is my string     ')
```

returns:

```java
'this is my string'
```

## 12 isMatch

Checks to see if a string matches a given regular expression.

### 12.1 Input Parameters

* String to try and match
    * Type: string
* Regular expression to match
    * Type: string

{{% alert color="warning" %}}

Please note that this function call uses a regular expression language provided by the current platform:

* When used inside a [microflow](/refguide7/microflow/) – Java's regular expressions (for details, see [Class Pattern documentation](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used inside [conditional formatting](/refguide7/conditions/) – JavaScript's regular expressions (for details, see [Regular Expressions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### 12.2 Output

Whether the string matches or not.

* Type: Boolean

This examples tests to see whether the string contains only numbers

```java
isMatch('234hello6432', '^([0-9]+)$')
```

returns:

```java
False
```

In `isMatch()`, the regex is implicitly anchored at `^` and `$`.

For example:

* `isMatch('NLG 123.45', '[0-9]')` returns false
* `isMatch('NLG 123.45', '.*[0-9].*')` returns true

NB searching an empty string:

* `isMatch('', '.*[0-9].*')` returns false

## 13 replaceAll

Replaces all occurrences of a regular expression with another string.

### 13.1 Input Parameters

* The string to search in
    * Type: string
* The regular expression to match
    * Type: string
* The replacement value
    * Type: string

{{% alert color="warning" %}}

Please note that this function call uses a regular expression language provided by the current platform:

* When used inside [microflows](/refguide7/microflows/) – Java's regular expressions (for details, see [Class Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used inside [conditional formatting](/refguide7/conditions/) – JavaScript's regular expressions (for details, see [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### 13.2 Output

The original string, with all occurrences of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned.

* Type: string

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

## 14 replaceFirst

Replaces the first occurrence of the regular expression with a replacement string.

### 14.1 Input Parameters

* The string to search in
    * Type: string
* The regular expression to match
    * Type: string
* The replacement value
    * Type: string

{{% alert color="warning" %}}

Please note that this function call uses a regular expression language provided by the current platform:

* When used inside a [microflow](/refguide7/microflow/) – Java's regular expressions (for details, see [Class Pattern documentation](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used inside [conditional formatting](/refguide7/conditions/) – JavaScript's regular expressions (for details, see [Regular Expressions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### 14.2 Output

The original string, with all occurrences of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned.

* Type: string

```java
replaceFirst('this is a string with 75 some numbers 234 thrown in', '([0-9])', 'NUMBER')
```

returns:

```java
'this is a string with NUMBER5 some numbers 234 thrown in'
```

## 15 String Concatenation ( + )

The `+` operator can be used to concatenate two strings or a string and a number.

### 15.1 Input Parameters

* First parameter
    * Type: string, integer/long, float, or decimal
* Second parameter
    * Type: string, integer/long, float, or decimal

At least one of the parameters must be of type string.

### 15.2 Output

A new string that is the literal concatenation of the two input parameters.

* Type: string

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

## 16 <a name="urlEncode"></a>urlEncode

Converts a string to be used in a URL. This function is useful when you want to use the string as part of the URL.

For example:

```java
'http://google.com/search?q=' + urlEncode($myQuery)
```

### 16.1 Input Parameters

* String to convert
* Type: string

### 16.2 Output

The string, URL-encoded.

```java
urlEncode('Hello, world!')
```

returns:

```java
'Hello%2C+world%21'
```

## 17 urlDecode

Converts a string back from a URL. The opposite of [urlEncode](#urlEncode).

### 17.1 Input Parameters

* A URL-encoded string to convert
* Type: string

### 17.2 Output

The string, URL-decoded.

```java
urlDecode('Hello%2C+world%21')
```

returns:

```java
'Hello, world!'
```
