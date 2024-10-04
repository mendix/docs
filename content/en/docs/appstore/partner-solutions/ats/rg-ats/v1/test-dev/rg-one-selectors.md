---
title: "Selectors"
url: /appstore/partner-solutions/ats/rg-one-selectors/
weight: 7
---

## Introduction

For the [Find Widget Child Node action](/appstore/partner-solutions/ats/rg-one-find-widget-child-node/) or as part of a script for [Execute JavaScript Integer](/appstore/partner-solutions/ats/rg-one-execute-javascript-integer/), [Execute JavaScript String](/appstore/partner-solutions/ats/rg-one-execute-javascript-string/) and [Execute JavaScript WebElement](/appstore/partner-solutions/ats/rg-one-execute-javascript-webelement/) actions, you will have to use selectors to get a node or WebElement. ATS supports both, JQuery and CSS3 selectors. In addition to that, ATS includes its own selectors. The following summary will give you a short overview of the most commonly used selectors in ATS.

## ATS Selectors

You can use the custom ATS selectors like CSS3 selectors in your custom actions.

Pattern |Name | Meaning
-----|---------|--------
:clickable | Clickable pseudo-class | Selects a user interface element whose CSS visibility property is set to visible.
:containsExact(*text*) | ContainsExact pseudo-class | Selects an element whose inner HTML is exactly equal to the given text (**not** case sensitive)
:containsExactCase(*text*) | ContainsExactCase pseudo-class |Selects an element whose inner HTML is exactly equal to the given text (case sensitive)
:containsRegex(*regex*) | ContainsRegex pseudo-class | Selects an element whose inner HTML matches the given regex.  
:containsText(*text*) | ContainsText pseudo-class | Selects an element whose inner text value is equal to the given text. Can only be used on text, CDATA and element nodes
:val(*text*) | Value pseudo-class | Selects an input, select or textarea whose value is equal to the given text

## CSS Selectors {#css-selectors}

You can use any CSS Selector defined in CSS3 and supported by your browser. The following table shows some of the commonly used CSS3 selectors in ATS.

| Pattern | Name | Meaning |
| -----|---------|-------- |
| .myClass | Class Selector | Selects every element with class **myClass** |
| #myID | ID Selector | Selects every element with ID **myID** |
| E[foo="bar"] | Attribute Selector | Selects every element E whose "**foo**" attribute value is equal to "**bar**" |
| :nth-child(n) | Nth-child pseudo-class | Selects the **n-th** child of its parent |
| :first-child | First-Child pseudo-class | Selects the **first** child of its parent |
| :last-child | Last-Child pseudo-class | Selects the **last** child of its parent |
| :checked | Checked pseudo-class | Selects a user interface element which is **checked** |
| E > F | Child Combinator | Selects an **F element child** of an E element |

For more information, visit the official [W3C CSS3 selectors reference](https://www.w3.org/TR/css3-selectors/).

## JQuery Selectors {#jquery-selectors}

JQuery uses CSS3 selectors and extends the collection of selectors with its own ones. You can use those in your ATS actions.

If you use JQuery selectors in the [Find Widget Child Node](/appstore/partner-solutions/ats/rg-one-find-widget-child-node/) action, you **mustn't** use the *jQuery(...)* or *$(...)* function. Only use simple selectors, without quotation.

In the [Execute JavaScript actions](/appstore/partner-solutions/ats/rg-one-execute-javascript-integer/), you will have to use the *jQuery(...)* or *$(...)* function to select a WebElement or node.

The following table shows some of the additional JQuery selectors you can use in ATS.      

Pattern |Name | Meaning
-----|---------|--------
 :animated | Animated Selector | Selects all elements that are in the progress of an animation at the time the selector is run
 :checkbox | Checkbox Selector | Selects all elements of type checkbox.
 :input | Input Selector | Selects all input, textarea, select and button elements.
 :has(*selector*) | Has Selector | Selects elements which contain at least one element that matches the specified *selector*.
 :parent | Parent Selector | Select all elements that have at least one child node (either an element or text).
 :text | Text Selector | Selects all input elements of type text.

For more information, visit the [official JQuery selectors reference](https://api.jquery.com/category/selectors/).
