---
title: "String Concatenation"
category: "Logic & Business Rules"
tags: []
---
In every project you will need to do this, concatenate some text together. Common cases are when you want to assemble the full name of a person based on the first and last name.

Whenever you want to paste multiple strings attributes together you want to make sure that the text looks good in all cases. For example you don't want a firstname + middlename + lastname to be printed as "John null Doe" because the middle name is empty.

To understand what to look out for when concatenating strings it is important to be aware of the three state a string can be in.

1.  Populated, there is text written in the attribute and when you inspect the value in microflow you'll see something like: _ 'John'_  
2.  Empty, the attribute never contained a value. When inspecting the value in the microflow you'll see: _**empty**_
3.  Blank, the attribute previously contained a value, but has been reset by a user or system. In microflow you'll see: _''_  

Every string attribute will start out as an empty field, whenever the users or the system enters a value in the attribute it will be populated with that value. When the user removes that value from the UI the users makes the field blank and the attribute will contain the value:  _''_  

Whenever you want to check if a string contains text it won't be sufficient to execute the expression: _$Account/Firstname !=_ **_empt_y** nor will  _$Account/Firstname != ''_ cover all cases. Every string needs to be checked for both values to be sure that a field really is empty.  

### Example 1, broken down into separate splits:

An inefficient example on how to check for text and create a combined messages based on the outcome.
Building out all combinations is a lot of work, and if something need to change it will be a lot of work to change and it is prone to errors.

<iframe width="100%" height="491px" frameborder="0" src="https://modelshare.mendix.com/models/460db183-b5b4-44e7-8f15-3ea9725a9836/bco_contactperson_createfullname_inefficient?embed=true"></iframe>

### Example 2, a single expression:

The example contains a single expression which can become difficult to read if the expression becomes larger and more complicated. As long as you are just combining 2 or 3 fields this is a good workable solution. But keep in mind when you are concatenating more fields it is better to use example 3.

When looking at the example below it is important to note a couple of things. The white space is only added after a field if it is populated. If a person only has a first and last name, you don't want to end up with two white spaces between the two words.  
Also the entire expression is surrounded with a trim, in case we only have a single field populated all unnecessary white spaces will be removed from the outcome of this expression.

```
trim(
( **if** $ContactPerson/Firstname != **empty** and $ContactPerson/Firstname != **''
****then** $ContactPerson/Firstname + **' '****else** **''** ) +
( **if**  $ContactPerson/Middlename != **empty**  and $ContactPerson/Middlename != **''
****then**  $ContactPerson/Middlename + **' '****else**  **''** ) +
( **if**  $ContactPerson/Lastname != **empty**  and $ContactPerson/Lastname != **''
****then**  $ContactPerson/Lastname + **' '****else**  **''** ) +
( **if**  $ContactPerson/Suffix !=  **empty**  
**then**  getCaption( $ContactPerson/Suffix )
**else** '')
)
```

<iframe width="100%" height="491px" frameborder="0" src="https://modelshare.mendix.com/models/28e4594c-5f20-413f-ad9b-8912100cb976/bco_contactperson_createfullname_hardtoread?embed=true"></iframe>

### Example 3, **BestPractice,**  expression break down:

The most flexible solution is to break the string concatenate down into separate activities. This allows to easily add or remove text from the concatenate function. It should not create an additional level of complexity either, simply create a subflow to combine the string values and use that in your microflow.
In this example we went even one step further in the stability of the expression. By adding an additional trim to the attribute we prevent adding additional white spaces that might have been added by the user. Using the microflow below we are absolutely sure never to get any white spaces or null values in our text.

```
trim(  $ContactPerson/Fullname + **' ' **+ trim(  $ContactPerson/Firstname ) )
```

<iframe width="100%" height="491px" frameborder="0" src="https://modelshare.mendix.com/models/60fd9671-0e98-4ee3-9719-e0a060abe844/bco_contactperson_createfullname?embed=true"></iframe>

## Related articles

*   [String Concatenation](string-concatenation)
