---
title: "Selectors"
url: /appstore/partner-solutions/ats/rg-two-selectors/
---

## Introduction

For the [Find Widget Child Node](/appstore/partner-solutions/ats/rg-one-find-widget-child-node/) action or as part of a script for the [Execute JavaScript Integer](/appstore/partner-solutions/ats/rg-one-execute-javascript-integer/), [Execute JavaScript String](/appstore/partner-solutions/ats/rg-one-execute-javascript-string/), and [Execute JavaScript WebElement](/appstore/partner-solutions/ats/rg-one-execute-javascript-webelement/) actions, you must use selectors to get a node or WebElement.

ATS supports both JQuery and CSS3 selectors. ATS also has its own selectors. The following summary will give you a short overview of the most used selectors in ATS. 

## ATS Selectors

The custom ATS selectors work the same as CSS3 selectors in your custom actions:

| Pattern                    | Name                           | Meaning                                  |
| -------------------------- | ------------------------------ | ---------------------------------------- |
| :clickable                 | Clickable pseudo-class         | Selects a user interface element whose CSS visibility property is set to visible. |
| :containsExact(*text*)     | ContainsExact pseudo-class     | Selects an element whose inner HTML is exactly equal to the given text (*not* case sensitive). |
| :containsExactCase(*text*) | ContainsExactCase pseudo-class | Selects an element whose inner HTML is exactly equal to the given text (case sensitive). |
| :containsRegex(*regex*)    | ContainsRegex pseudo-class     | Selects an element whose inner HTML matches the given regex. |
| :containsText(*text*)      | ContainsText pseudo-class      | Selects an element whose inner text value is equal to the given text. Can only be used on text, CDATA, and element nodes. |
| :val(*text*)               | Value pseudo-class             | Selects an input, select, or text area whose value is equal to the given text. |

## CSS Selectors

You can use any CSS Selector defined in CSS3 and supported by your browser. The following table shows some of the commonly used CSS3 selectors in ATS:

| Pattern       | Name                     | Meaning                                  |
| ------------- | ------------------------ | ---------------------------------------- |
| .myClass      | Class Selector           | Selects every element with the class `myClass`. |
| #myID         | ID Selector              | Selects every element with the ID `myID`.  |
| E[foo="bar"]  | Attribute Selector       | Selects every element `E`  whose `foo` attribute value is equal to `bar`. |
| :nth-child(n) | Nth-child pseudo-class   | Selects the `n-th` child of its parent. |
| :first-child  | First-Child pseudo-class | Selects the first child of its parent. |
| :last-child   | Last-Child pseudo-class  | Selects the last child of its parent. |
| :checked      | Checked pseudo-class     | Selects a user interface element which is checked. |
| E > F         | Child Combinator         | Selects an `F` element child of an `E` element. |

For more information, see [W3C CSS3 Selectors Reference](https://www.w3.org/TR/css3-selectors/).

## JQuery Selectors

JQuery uses CSS3 selectors and extends the collection of selectors with its own ones. You can use all these selectors in your ATS actions.

If you use JQuery selectors in the [Find Widget Child Node](/appstore/partner-solutions/ats/rg-one-find-widget-child-node/) action, you must NOT use the `jQuery(...)` or `$(...)` function. Only use simple selectors, without quotations.

In the [Execute JavaScript](/appstore/partner-solutions/ats/rg-one-execute-javascript-integer/) action, you must use the `jQuery(...)` or `$(...)` function to select a WebElement or node.

The following table shows a few selectors from the JQuery set that you can use in ATS:

| Pattern          | Name              | Meaning                                  |
| ---------------- | ----------------- | ---------------------------------------- |
| :animated        | Animated Selector | Selects all the elements that are in the progress of an animation at the time the selector is run. |
| :checkbox        | Checkbox Selector | Selects all the elements of the checkbox type.   |
| :input           | Input Selector    | Selects all the inputs, text area, select, and button elements. |
| :has(*selector*) | Has Selector      | Selects elements that contain at least one element that matches the specified *selector*. |
| :parent          | Parent Selector   | Select all the elements that have at least one child node (either an element or text). |
| :text            | Text Selector     | Selects all the input elements of the type text. |

For more information, see [JQuery Selectors Reference](https://api.jquery.com/category/selectors/).
