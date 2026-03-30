---
title: "String Function Calls"
url: /refguide9/string-function-calls/
weight: 80
description: "Describes the functions for converting and inspecting strings in Mendix."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document describes functions that are used to convert and inspect [strings](/refguide9/data-types/). Note that these functions never change the string itself, they only return a new value.

Strings are surrounded by quotes. If the string contains a quote, it should be escaped by another quote. For example: `'this isn''t funny'`.

For a great deep-dive look into string functions call, check out this video:

{{< vidyard "EpVivdyB4i1jGvc8J9yXkt" >}}

## toLowerCase

Converts all characters in the string to lowercase.

### Input Parameters

The input parameters are described in the table below:

| Value             | Type   |
| ----------------- | ------ |
| String to convert | String |

### Output

The output is described in the table below:

| Value                               | Type   |
| ----------------------------------- | ------ |
| The same string, but all lowercase. | String |

### Example

If you use the following input:

```java
toLowerCase('thisISmyString')
```

The output is the following:

```java
'thisismystring'
```

## toUpperCase

Converts all characters in the string to uppercase.

### Input Parameters

The input parameters are described in the table below:

| Value             | Type   |
| ----------------- | ------ |
| String to convert | String |

### Output

The output is described in the table below:

| Value                               | Type   |
| ----------------------------------- | ------ |
| The same string, but all uppercase. | String |

### Example

If you use the following input:

```java
toUpperCase('thisISmyString')
```

The output is the following:

```java
'THISISMYSTRING'
```

## length

Determines the length of a string.

### Input Parameters

The input parameters are described in the table below:

| Value             | Type   |
| ----------------- | ------ |
| String to find length of | String |

### Output

The output is described in the table below:

| Value                | Type    |
| -------------------- | ------- |
| Length of the string | Integer |

### Examples

| Input | Output |
| --- | --- |
| `length('thisismystring')` | 14 |
| `length($MyString)` and `MyString = 'qwer'` | 4 |
| `length($MyString)` and `MyString` is empty | 0 |

## substring

Retrieves a substring of a string. Note that the first character of a string is located at position `0`, and the last character is located at position `length(string)-1`.

### Input Parameters

The input parameters are described in the table below:

| Value                                       | Type    |
| ------------------------------------------- | ------- |
| Subject                                     | String  |
| Start position of the substring             | Integer |
| Desired length of the result **(optional)** | Integer |

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A part of the original string, starting at the start position with a length equal to the desired length. If no desired length is specified, will return a substring starting at the start position and ending at the end of the string. | String |

{{% alert color="warning" %}}
The function will output an error for the following:

* When the start position of the substring is after the last character in the string
* When the desired length of the result is longer than the substring
{{% /alert %}}

### Example

If you use the following input:

```java
substring('thisismystring', 6)
```

The output is the following:

```java
'mystring'
```

If you use a third parameter to specify the desired length of the output:

```java
substring('thisismystring', 6, 2)
```

The output is the following:

```java
'my'
```

To prevent the value of the third parameter from getting out of range, you can set a limit to the third parameter, for instance, using the `min` and `length` functions:

```java
substring('thisismystring', 0, min(length('thisismystring'), 20))
```

## find

Finds the position of the first occurrence of the substring in the string.

### Input Parameters

The input parameters are described in the table below:

| Value                                                  | Type    |
| ------------------------------------------------------ | ------- |
| Original string, the string that you want to search in | String  |
| Substring that you want to search for                  | String  |
| Start location to begin the search from **(optional)** | Integer |

### Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The first location of the substring in the original string. Will return `-1` if the substring does not occur at all in the original string. | Integer |

### Example

If you use the following input:

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

## findLast

Finds the position of the last occurrence of a substring in the original string.

### Input Parameters

The input parameters are described in the table below:

| Value                                                  | Type    |
| ------------------------------------------------------ | ------- |
| Original string, the string that you want to search in | String  |
| Substring that you want to search for                  | String  |
| Last location to be searched **(optional)**            | Integer |

### Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The last location of the substring in the original string. Will return `-1` if the substring does not occur at all in the original string. | Integer |

### Example

If you use the following input:

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

As the optional parameter is `5`, the string gets searched up to (and including) position `5`, which means searching the substring `'thisis'`. The last instance of `'i'` in that substring is at position `4`.

## contains

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

{{% alert color="warning" %}}
This function is case-sensitive.
{{% /alert %}}

### Input Parameters

The input parameters are described in the table below:

| Value                                                  | Type   |
| ------------------------------------------------------ | ------ |
| Original string, the string that you want to search in | String |
| Substring that you want to search for                  | String |

### Output

The output is described in the table below:

| Value                                               | Type    |
| --------------------------------------------------- | ------- |
| Whether the original string contains the substring. | Boolean |

### Example

If you use the following input:

```java
contains('thisismystring', 'my')
```

The output is:

```java
true
```

## startsWith

Determines whether a string starts with the specified substring.

### Input Parameters

The input parameters are described in the table below:

| Value                                                  | Type   |
| ------------------------------------------------------ | ------ |
| Original string, the string that you want to search in | String |
| Substring that you want to search for                  | String |

### Output

The output is described in the table below:

| Value                                                  | Type    |
| ------------------------------------------------------ | ------- |
| Whether the original string starts with the substring. | Boolean |

### Example

If you use the following input:

```java
startsWith('thisismystring', 'this')
```

The output is:

```java
true
```

## endsWith

Determines whether a string ends with the specified substring.

### Input Parameters

The input parameters are described in the table below:

| Value                                                  | Type   |
| ------------------------------------------------------ | ------ |
| Original string, the string that you want to search in | String |
| Substring that you want to search for                  | String |

### Output

The output is described in the table below:

| Value                                                | Type    |
| ---------------------------------------------------- | ------- |
| Whether the original string ends with the substring. | Boolean |

### Example

If you use the following input:

```java
endsWith('thisismystring', 'ring')
```

The output is:

```java
true
```

## trim {#trim}

Removes all the whitespace at the beginning and end of a string.

### Input Parameters

The input parameters are described in the table below:

| Value    | Type   |
| -------- | ------ |
| A string | String |

### Output

The output is described in the table below:

| Value                                                    | Type   |
| -------------------------------------------------------- | ------ |
| Same string, but without spaces at the beginning and end. | String |

### Example

If you use the following input:

```java
trim(' this is my string     ')
```

The output is:

```java
'this is my string'
```

## isMatch

Checks to see if a string matches a given regular expression.

### Input Parameters

The input parameters are described in the table below:

| Value                       | Type   |
| --------------------------- | ------ |
| String to try and match     | String |
| Regular expression to match | String |

{{% alert color="info" %}}
The regular expression must be provided as a string. Although it uses the same format for regular expressions, you cannot use a [regular expression](/refguide9/regular-expressions/) resource document in this function.
{{% /alert %}}

{{% alert color="warning" %}}

Please note that this function call uses the regular expression language provided by the current platform:

* When used inside a [microflow](/refguide9/microflow/) – Java's regular expressions (for details, see [Class Pattern documentation](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used in the client – JavaScript's regular expressions (for details, see [Regular Expressions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### Output

The output is described in the table below:

| Value                              | Type    |
| ---------------------------------- | ------- |
| Whether the string matches or not. | Boolean |

### Example

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

## replaceAll

Replaces all occurrences of a regular expression with another string.

### Input Parameters

The input parameters are described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The string to search in                                      | String |
| The regular expression to match; if you want to search for a literal string, enclose it between `\Q` and `\E` (for example, `\QPaul S. Mueller\E` will search for the string `Paul S. Mueller`, without interpreting the dot as a wildcard) | String |
| The string to be substituted for each match (this does not support backreferences, substitutions, or captures) | String |

{{% alert color="info" %}}
The regular expression must be provided as a string. Although it uses the same format for regular expressions, you cannot use a [regular expression](/refguide9/regular-expressions/) resource document in this function.
{{% /alert %}}

{{% alert color="warning" %}}

Please note that this function call uses the regular expression language provided by the current platform:

* When used inside [microflows](/refguide9/microflows/) – Java's regular expressions (for details, see [Class Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used in the client – JavaScript's regular expressions (for details, see [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The original string, with all occurrences of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned. | String |

### Example

If you use the following input:

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

The input parameters are described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The string to search in                                      | String |
| The regular expression to match; if you want to search for a literal string, enclose it between `\Q` and `\E` (for example, `\QPaul S. Mueller\E` will search for the string `Paul S. Mueller`, without interpreting the dot as a wildcard) | String |
| The string to be substituted for the first match (this does not support backreferences, substitutions, or captures) | String |

{{% alert color="info" %}}
The regular expression must be provided as a string. Although it uses the same format for regular expressions, you cannot use a [regular expression](/refguide9/regular-expressions/) resource document in this function.
{{% /alert %}}

{{% alert color="warning" %}}

Please note that this function call uses the regular expression language provided by the current platform:

* When used inside a [microflow](/refguide9/microflow/) – Java's regular expressions (for details, see [Class Pattern documentation](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html))
* When used in the client – JavaScript's regular expressions (for details, see [Regular Expressions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions))

{{% /alert %}}

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The original string, with the first occurrence of the regular expression replaced by the replacement string. If the regular expression does not occur in the string, the original is returned. | String |

### Example

If you use the following input:

```java
replaceFirst('this is a string with 75 some numbers 234 thrown in', '([0-9])', 'NUMBER')
```

The output is:

```java
'this is a string with NUMBER5 some numbers 234 thrown in'
```

## String Concatenation ( + )

The `+` operator can be used to concatenate two strings or a string and a number.

### Input Parameters

The input parameters are described in the table below:

| Value            | Type                          |
| ---------------- | ----------------------------- |
| First parameter  | String, integer/long, decimal |
| Second parameter | String, integer/long, decimal |

{{% alert color="info" %}}

At least one of the parameters must be of type string.

{{% /alert %}}

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A new string that is the literal concatenation of the two input parameters. | String |

### Example

An example of an input to combine two strings can be the following:

```java
'foo' + 'bar'
```

The output is:

```java
'foobar'
```

An example of an input to combine a string and a number can be the following:

```java
4.73 + ' kilometers'
```

The output is:

```java
'4.73 kilometers'
```

## urlEncode {#urlEncode}

Converts a string to be used in a URL. This function is useful when you want to use the string as part of the URL.

For example:

```java
'http://google.com/search?q=' + urlEncode($myQuery)
```

### Input Parameters

The input parameters are described in the table below:

| Value             | Type   |
| ----------------- | ------ |
| String to convert | String |

### Output

The output is described in the table below:

| Value                    | Type   |
| ------------------------ | ------ |
| The string, URL-encoded. | String |

### Example

If you use the following input:

```java
urlEncode('Hello, world!')
```

The output is:

```java
'Hello%2C+world%21'
```

## urlDecode

Converts a string back from a URL. The opposite of [urlEncode](#urlEncode).

### Input Parameters

The input parameters are described in the table below:

| Value                           | Type   |
| ------------------------------- | ------ |
| A URL-encoded string to convert | String |

### Output

The output is described in the table below:

| Value                    | Type   |
| ------------------------ | ------ |
| The string, URL-decoded. | String |

### Example

If you use the following input:

```java
urlDecode('Hello%2C+world%21')
```

The output is:

```java
'Hello, world!'
```
