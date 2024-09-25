---
title: "Configuring String Concatenation"
linktitle: "Configure String Concatenation"
url: /refguide/string-concatenation/
weight: 110
description: "Describes three examples as well as best practices on configuring string concatenation."
aliases:
    - /howto/logic-business-rules/string-concatenation/
---

## Introduction

Sometimes, you might need to concatenate some text together in your app. Common cases are when you want to assemble the full name of a person based on the first and last name.

Whenever you want to paste multiple strings attributes together, you want to make sure that the text looks good in all cases. For example, you do not want "firstname + middlename + lastname" to be printed as "John null Doe" because the middle name is empty.

To understand what to look out for when concatenating strings, it is important to be aware of the three states a string can be in:

* Populated – there is text written in the attribute, and when you inspect the value in the microflow, you see something like: `'John'`
* Empty – the attribute never contained a value, and when inspecting the value in the microflow, you see `empty`
* Blank – the attribute previously contained a value, but has been reset by a user or the system, so in the microflow, you see `''`

Every string attribute starts out as an empty field. Whenever a user or the system enters a value in the attribute, it will be populated with that value. When the user removes that value from the UI, the field becomes blank and the attribute will contain the value: `''`

Whenever you want to check if a string contains text, it is not sufficient to execute the expression: `$Account/Firstname != empty` and nor does  `$Account/Firstname != ''` cover all cases. Every string needs to be checked for both values to be sure that a field really is empty.  

## Breaking Down into Separate Decisions

An inefficient example is to check for text and create combined messages based on the outcome. Building out all combinations is a lot of work, and if something needs to change, it will be a lot of work and is prone to errors. 

Reference this microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/string-concatenation/bco_contactperson_createfullname_inefficient.jpg" class="no-border" >}}

## A Single Expression

This example contains a single expression which can become difficult to read if the expression becomes larger and more complicated. As long as you are just combining 2 or 3 fields, this is a workable solution. However, if you are concatenating more fields, it is better to follow the best practices described in the next section.

When looking at the example below, it is important to note a couple of things. The white space is only added after a field if it is populated. If a person only has one first and last name, you do not want to end up with two white spaces between the two words.  

Also the entire expression is surrounded with a trim. In case we only have a single field populated, all unnecessary white spaces will be removed from the outcome of this expression.

```java
trim(
( if $ContactPerson/Firstname != empty and $ContactPerson/Firstname != ''
then $ContactPerson/Firstname + ' ' else '' ) +
( if  $ContactPerson/Middlename != empty  and $ContactPerson/Middlename != ''
then  $ContactPerson/Middlename + ' ' else  '' ) +
( if  $ContactPerson/Lastname != empty  and $ContactPerson/Lastname != ''
then  $ContactPerson/Lastname + ' ' else  '' ) +
( if  $ContactPerson/Suffix !=  empty  
then  getCaption( $ContactPerson/Suffix )
else '')
)
```

Reference this microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/string-concatenation/bco_contactperson_createfullname_hardtoread.jpg" class="no-border" >}}

## Best Practices for Expression Breakdown

The most flexible solution is to break the string concatenate down into separate activities. This allows you to easily add or remove text from the concatenate function. It should not create an additional level of complexity either. Simply create a subflow to combine the string values and use that in your microflow.

In this example, we went even one step further for the stability of the expression. By adding an additional trim to the attribute, we prevent any additional white spaces from being added by the user. Using the microflow below, we are absolutely sure never to get any white spaces or null values in our text.

```java
trim(  $ContactPerson/Fullname + ' ' + trim(  $ContactPerson/Firstname ) )
```

Reference this microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/string-concatenation/bco_contactperson_createfullname.jpg" class="no-border" >}}
