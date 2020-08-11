---
title: "String Function Calls"
parent: "expressions"
description: "Describes the functions for converting and inspecting strings in Mendix."
tags: ["studio pro", "string function calls", "expression", "expressions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document describes functions that are used to convert and inspect [strings](data-types). Note that these functions never change the string itself, they only return a new value.

Strings are surrounded by quotes. If the string contains a quote, it should be escaped by another quote. For example: `'this isn''t funny'`.

## 2 toLowerCase

Converts all characters in the string to lowercase.

### 2.1 Input Parameters

Input parameters are described in the table below:

| Value             | Type   |
| ----------------- | ------ |
| String to convert | String |

### 2.2 Output

The output is the same string, but all lowercase.

### 2.3 Example

If you type in the following input:

```java
toLowerCase('thisISmyString')
```

The output is the following:

```java
'thisismystring'
```

## 3 toUpperCase

Converts all characters in the string to uppercase.

### 3.1 Input Parameters

Input parameters are described in the table below:

| Value             | Type   |
| ----------------- | ------ |
| String to convert | String |

### 3.2 Output

The output is the same string.

### 3.3 Example

If you type in the following input:

```java
toUpperCase('thisISmyString')
```

The output is the following:

```java
'THISISMYSTRING'
```

## 4 length

Determines the length of a string.

### 4.1 Input Parameters

Input parameters are described in the table below:

| Value             | Type   |
| ----------------- | ------ |
| String to convert | String |

### 4.2 Output

* Length of the string

  Type: integer

### 4.3 Example

If you type in the following input:

```java
length('thisismystring')
```

The output is the following:

```java
14
```

## 5 substring

Retrieves a substring of a string. Note that the first character of a string is located at position `'0'`, and the last character is located at position `length(string)-1`.

### 5.1 Input Parameters

Input parameters are described in the table below:

| Value                                       | Type    |
| ------------------------------------------- | ------- |
| Subject                                     | String  |
| Start position of the substring             | Integer |
| Desired length of the result **(optional)** | Integer |

### 5.2 Output

A part of the original string, starting at the start position with a length equal to the desired length. If no desired length is specified, will return a substring starting at the start position and ending at the end of the string.

### 5.3 Example

If you type in the following input:

```java
substring('thisismystring', 6)
```

The output is the following:

```java
'mystring'
```

Another example of an input is:

```java
substring('mendixapp', 6,3)
```

The output is the following:

```java
'app'
```

## 6 find

Finds the position of the first occurrence of the substring in the string.

### 6.1 Input Parameters

Input parameters are described in the table below:

| Value                                                  | Type    |
| ------------------------------------------------------ | ------- |
| Original string, the string that you want to search in | String  |
| Substring that you want to search for                  | String  |
| Start location to begin the search from **(optional)** | Integer |

### 6.2 Output

The first location of the substring in the original string. Will return `'-1'` if the substring does not occur at all in the original string.

Type: integer

### 6.3 Example

If you type in the following input:

```java
find('thisismystring', 'my')
```

The output is:

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

Another example of an input is:

```java
find('thisismystring', 'i', 5)
```

The output is:

```java
11
```

## 7 findLast

Finds the position of the last occurrence of a substring in the original string.

### 7.1 Input Parameters

Input parameters are described in the table below:

| Value                                                  | Type    |
| ------------------------------------------------------ | ------- |
| Original string, the string that you want to search in | String  |
| Substring that you want to search for                  | String  |
| Start location to begin the search from **(optional)** | Integer |

### 7.2 Output

The first location of the substring in the original string. Will return `'-1'` if the substring does not occur at all in the original string.

Type: Integer

### 7.3 Example

If you type in the following input:

```java
findLast('thisismystring', 't')
```

The output is:

```java
9
```

Another example of an input where a substring does not occur in the original string:

```java
findLast('thisismystring', 'yourstring')
```

The output is:

```java
-1
```

An example of an input with the third parameter:

```java
findLast('thisismystring', 'i', 5)
```

The output is:

```java
4
```

## 8 contains

Determines whether the original string (first parameter) contains a substring (second parameter).

For example, this expression: 

```java
contains('stringtosearchin', 'stringtosearchfor')
```

is equivalent to the following expression:

```java
find('stringtosearchin', 'stringtosearchfor') != -1
```

The example below shows searching for an empty variable or empty string, where `$param = ''`:

```java
contains('stringtosearchin', $param)
```

The input above will return `true`.

{{% alert type="warning" %}}
This function is case-sensitive.
{{% /alert %}}

### 8.1 Input Parameters

Input parameters are described in the table below:

| Value                                                  | Type   |
| ------------------------------------------------------ | ------ |
| Original string, the string that you want to search in | String |
| Substring that you want to search for                  | String |

### 8.2 Output

Whether the original string contains the substring.

Type: Boolean

### 8.3 Example

If you type in the following input:

```java
contains('thisismystring', 'my')
```

The output is:

```java
true
```

## 9 startsWith

Determines whether a string starts with the specified substring.

### 9.1 Input Parameters

Input parameters are described in the table below:

| Value                                                  | Type   |
| ------------------------------------------------------ | ------ |
| Original string, the string that you want to search in | String |
| Substring that you want to search for                  | String |

### 9.2 Output

Whether the original string starts with the substring.

Type: Boolean

### 9.3 Example

If you type in the following input:

```java
startsWith('thisismystring', 'this')
```

The output is:

```java
true
```

## 10 endsWith

Determines whether a string ends with the specified substring.

### 10.1 Input Parameters

Input parameters are described in the table below:

| Value                                                  | Type   |
| ------------------------------------------------------ | ------ |
| Original string, the string that you want to search in | String |
| Substring that you want to search for                  | String |

### 10.2 Output

Whether the original string ends with the substring.

Type: Boolean

### 10.3 Example

If you type in the following input:

```java
endsWith('thisismystring', 'ring')
```

The output is:

```java
true
```

## 11 trim

Removes all the whitespace at the beginning and end of a string.

### 11.1 Input Parameters

Input parameters are described in the table below:

| Value    | Type   |
| -------- | ------ |
| A string | String |

### 11.2 Output

Same string but without spaces at the beginning and end.

Type: string

### 11.3 Example

If you type in the following input:

```java
trim(' this is my string     ')
```

The output is:

```java
'this is my string'
```

## 12 isMatch

Checks to see if a string matches a given regular expression.

### 12.1 Input Parameters

Input parameters are described in the table below:

| Value                       | Type   |
| --------------------------- | ------ |
| String to try and match     | String |
| Regular expression to match | String |

{{% alert type="info" %}}
The regular expression must be provided as a string. Although it uses the same format for regular expressions, you cannot use a [regular expression](regular-expressions) resource document in this function.
{{% /alert %}}

{{% alert type="warning" %}}

Please note that this function call uses the regular expression language provided by the current platform:

* When used inside a [microflow](microflow) – Java's regular expressions (for details, see [Class Pattern documentation](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used in the client – JavaScript's regular expressions (for details, see [Regular Expressions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### 12.2 Output

Whether the string matches or not.

Type: Boolean

### 12.3 Example

This input below tests to see whether the string contains only numbers:

```java
isMatch('234hello6432', '^([0-9]+)$')
```

The output is:

```java
False
```

In `isMatch()`, the regex is implicitly anchored at `^` and `$`.

**Other Examples**

* `isMatch('NLG 123.45', '[0-9]')` returns `false`
* `isMatch('NLG 123.45', '.*[0-9].*')` returns `true`

NB searching an empty string:

* `isMatch('', '.*[0-9].*')` returns `false`

## 13 replaceAll

Replaces all occurrences of a regular expression with another string.

### 13.1 Input Parameters

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The string to search in                                      | String |
| The regular expression to match; if you want to search for a literal string, enclose it between `\Q` and `\E` (for example, `\QPaul S. Mueller\E` will search for the string `Paul S. Mueller`, without interpreting the dot as a wildcard) | String |
| The string to be substituted for each match (this does not support backreferences, substitutions, or captures) | String |

{{% alert type="info" %}}
The regular expression must be provided as a string. Although it uses the same format for regular expressions, you cannot use a [regular expression](regular-expressions) resource document in this function.
{{% /alert %}}

{{% alert type="warning" %}}

Please note that this function call uses the regular expression language provided by the current platform:

* When used inside [microflows](microflows) – Java's regular expressions (for details, see [Class Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used in the client – JavaScript's regular expressions (for details, see [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### 13.2 Output

The original string, with all occurrences of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned.

Type: string

### 13.3 Example

If you type in the following input:

```java
replaceAll('this is a string with 75 some numbers 234 thrown in', '([0-9])', 'NUMBER')
```

The output is:

```java
'this is a string with NUMBERNUMBER some numbers NUMBERNUMBERNUMBER thrown in'
```

Another example of an input of the following:

```java
replaceAll('this is a string with no numbers thrown in', '([0-9])', 'NUMBER')
```

And the output is that there are no matches for the input:

```java
'this is a string with no numbers thrown in'
```

## replaceFirst

Replaces the first occurrence of the regular expression with a replacement string.

### Input Parameters

* The string to search in
    * Type: string
* The regular expression to match
    * Type: string; if you want to search for a literal string, enclose it between `\Q` and `\E` (for example, `\QPaul S. Mueller\E` will search for the string `Paul S. Mueller`, without interpreting the dot as a wildcard)
* The string to be substituted for the first match (this does not support backreferences, substitutions, or captures)
    * Type: string

{{% alert type="info" %}}
The regular expression must be provided as a string. Although it uses the same format for regular expressions, you cannot use a [regular expression](regular-expressions) resource document in this function.
{{% /alert %}}

{{% alert type="warning" %}}

Please note that this function call uses the regular expression language provided by the current platform:

* When used inside a [microflow](microflow) – Java's regular expressions (for details, see [Class Pattern documentation](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used in the client – JavaScript's regular expressions (for details, see [Regular Expressions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### Output

The original string, with the first occurrence of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned.

* Type: string

```java
replaceFirst('this is a string with 75 some numbers 234 thrown in', '([0-9])', 'NUMBER')
```

returns:

```java
'this is a string with NUMBER5 some numbers 234 thrown in'
```

## String Concatenation ( + )

The `+` operator can be used to concatenate two strings or a string and a number.

### Input Parameters

* First parameter
    * Type: string, integer/long, decimal
* Second parameter
    * Type: string, integer/long, decimal

At least one of the parameters must be of type string.

### Output

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

## <a name="urlEncode"></a>urlEncode

Converts a string to be used in a URL. This function is useful when you want to use the string as part of the URL.

For example:

```java
'http://google.com/search?q=' + urlEncode($myQuery)
```

### Input Parameters

* String to convert
* Type: string

### Output

The string, URL-encoded.

```java
urlEncode('Hello, world!')
```

returns:

```java
'Hello%2C+world%21'
```

## urlDecode

Converts a string back from a URL. The opposite of [urlEncode](#urlEncode).

### Input Parameters

* A URL-encoded string to convert
* Type: string

### Output

The string, URL-decoded.

```java
urlDecode('Hello%2C+world%21')
```

returns:

```java
'Hello, world!'
```
